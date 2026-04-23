import { computed, defineComponent, ref, useAttrs, watch } from 'vue'
import type { PropType } from 'vue'
import { useDefaults } from 'vuetify'
import { VCheckbox, VIcon } from 'vuetify/components'
import { createBranchSelectStrategy } from './branchTreeSelection'
import { createClassicSelectStrategy } from './classicTreeSelection'
import type { SelectedState } from './classicTreeSelection'
import treeIconLast from '../../../assets/tree-icon/last.png'
import treeIconMid from '../../../assets/tree-icon/Mid.png'
import './HcTreeView.scss'

/** Read property from tree item object / 从树节点对象读取字段 */
function getItemProp (item: unknown, key: string): unknown {
  if (item != null && typeof item === 'object' && key in item) {
    return (item as Record<string, unknown>)[key]
  }
  return undefined
}

/** Build parent/children maps (same shape as Vuetify nested register) / 构建父子映射（与 Vuetify 嵌套注册一致） */
function buildNestedStructure (
  items: readonly unknown[],
  itemValue: string,
  itemChildren: string,
) {
  const children = new Map<unknown, unknown[]>()
  const parents = new Map<unknown, unknown>()

  const walk = (nodes: readonly unknown[], parentId: unknown | null) => {
    for (const raw of nodes) {
      const id = getItemProp(raw, itemValue)
      if (id === undefined) continue

      if (parentId != null && id !== parentId) {
        parents.set(id, parentId)
      }

      const subs = getItemProp(raw, itemChildren) as unknown[] | undefined
      const isGroup = Array.isArray(subs) && subs.length > 0

      if (isGroup) {
        children.set(id, [])
      }

      if (parentId != null) {
        const list = children.get(parentId) ?? []
        list.push(id)
        children.set(parentId, list)
      }

      if (isGroup && subs) {
        walk(subs, id)
      }
    }
  }

  walk(items, null)
  return { children, parents }
}

export const HcTreeView = defineComponent({
  name: 'HcTreeView',
  inheritAttrs: false,
  props: {
    items: {
      type: Array as PropType<unknown[]>,
      default: () => [],
    },
    /**
     * v-model; see `branchSelection` / 绑定选中数据，形态见 branchSelection
     */
    selected: {
      type: Array as PropType<unknown[]>,
      default: () => [],
    },
    itemValue: {
      type: String,
      default: 'id',
    },
    itemTitle: {
      type: String,
      default: 'title',
    },
    itemChildren: {
      type: String,
      default: 'children',
    },
    /**
     * True: v-treeview branch model (on + indeterminate ids). False: classic leaves-only. / true 为 branch 数据形态，false 为 classic 仅叶子
     */
    branchSelection: {
      type: Boolean,
      default: true,
    },
    selectedColor: {
      type: String,
      default: 'primary',
    },
    selectable: {
      type: Boolean,
      default: true,
    },
    opened: {
      type: Array as PropType<unknown[]>,
      default: () => [],
    },
    /**
     * Expand every branch on load and when `items` shape changes; user may still toggle. / 首次及 items 变化时展开全部分支，仍可手动折叠
     * When false, use `opened` only. / 为 false 时仅用 opened
     */
    defaultExpandAll: Boolean,
    mandatory: Boolean,
    disabled: Boolean,
    density: {
      type: String as PropType<'default' | 'comfortable' | 'compact'>,
      default: 'compact',
    },
  },
  emits: ['update:selected', 'update:opened'],
  setup (_props, { emit }) {
    const attrs = useAttrs()
    const props = useDefaults(_props, 'HcTreeView')
    const strategy = computed(() =>
      props.branchSelection
        ? createBranchSelectStrategy(props.mandatory)
        : createClassicSelectStrategy(props.mandatory),
    )

    const structure = computed(() =>
      buildNestedStructure(
        props.items,
        props.itemValue,
        props.itemChildren,
      ),
    )

    const internalMap = ref(new Map<unknown, SelectedState>())
    const internalOpened = ref(
      new Set<unknown>(
        props.defaultExpandAll ? [] : (props.opened ?? []),
      ),
    )

    /** Ids of nodes that have children (keys of nested children map) / 有子节点的 id（嵌套 children 映射的键） */
    const allExpandableIds = computed(() =>
      [...structure.value.children.keys()],
    )

    const applyDefaultExpandAll = () => {
      const ids = allExpandableIds.value
      internalOpened.value = new Set(ids)
      emit('update:opened', [...ids])
    }

    const syncFromProps = () => {
      const { children, parents } = structure.value
      internalMap.value = strategy.value.in(
        props.selected ?? [],
        children,
        parents,
      )
    }

    watch(
      [
        structure,
        () => props.selected,
        () => props.branchSelection,
        () => props.mandatory,
      ],
      () => {
        syncFromProps()
      },
      { deep: true, immediate: true },
    )

    watch(
      [structure, () => props.defaultExpandAll],
      () => {
        if (props.defaultExpandAll) {
          applyDefaultExpandAll()
        }
      },
      { deep: true, immediate: true },
    )

    watch(
      () => props.defaultExpandAll,
      v => {
        if (!v) {
          internalOpened.value = new Set(props.opened ?? [])
        }
      },
    )

    watch(
      () => props.opened,
      v => {
        if (!props.defaultExpandAll) {
          internalOpened.value = new Set(v ?? [])
        }
      },
      { deep: true },
    )

    const toggleSelect = (id: unknown) => {
      const { children, parents } = structure.value
      const current = internalMap.value.get(id) ?? 'off'
      const isOn = current === 'on'
      const next = new Map(internalMap.value)
      const updated = strategy.value.select({
        id,
        value: !isOn,
        selected: next,
        children,
        parents,
      })
      internalMap.value = updated
      emit('update:selected', strategy.value.out(updated, children))
    }

    const isExpanded = (id: unknown, hasChildren: boolean) => {
      if (!hasChildren) return false
      return internalOpened.value.has(id)
    }

    const toggleOpen = (id: unknown) => {
      const next = new Set(internalOpened.value)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      internalOpened.value = next
      emit('update:opened', [...next])
    }

    const rootClass = computed(() => {
      const extra = attrs.class as unknown
      return ['hc-tree-view', extra].filter(Boolean)
    })

    /** depth 0 = root list; nested children use depth >= 1 for leaf glyphs / depth 0 为根列表；嵌套子级 depth≥1 才显示叶子连接线图标 */
    const renderNodes = (nodes: readonly unknown[], depth = 0) => {
      const siblingCount = nodes.length
      return nodes.flatMap((raw, siblingIndex) => {
        const id = getItemProp(raw, props.itemValue)
        if (id === undefined) return []

        const title = getItemProp(raw, props.itemTitle)
        const label =
          title == null ? String(id) : String(title)

        const subs = getItemProp(raw, props.itemChildren) as
          | unknown[]
          | undefined
        const hasChildren = Array.isArray(subs) && subs.length > 0
        const expanded = isExpanded(id, hasChildren)
        const itemDisabled =
          props.disabled || Boolean(getItemProp(raw, 'disabled'))

        const state = internalMap.value.get(id) ?? 'off'
        const checked = state === 'on'
        const indeterminate = state === 'indeterminate'

        const idKey = String(id)
        const subtree = (expanded && hasChildren)
          ? (
              <ul
                key={ `hc-tree-children-${idKey}` }
                class="hc-tree-view__children"
              >
                { renderNodes(subs!, depth + 1) }
              </ul>
          )
          : null

        const isLastAmongSiblings = siblingIndex === siblingCount - 1

        const toggleEl = hasChildren
          ? (
              <button
                key={ `hc-tree-toggle-${idKey}` }
                type="button"
                class={[
                  'hc-tree-view__toggle',
                  { 'hc-tree-view__toggle--collapsed': !expanded },
                ]}
                aria-expanded={ expanded }
                onClick={ () => toggleOpen(id) }
              >
                <VIcon icon="$treeviewExpand" size="default" color="#1A1A1A" />
              </button>
          )
          : depth === 0
            ? (
                <span
                  key={ `hc-tree-spacer-${idKey}` }
                  class="hc-tree-view__toggle-spacer"
                  aria-hidden="true"
                />
            )
            : (
                <span
                  key={ `hc-tree-spacer-${idKey}` }
                  class="hc-tree-view__leaf-glyph"
                  aria-hidden="true"
                >
                  <img
                    class="hc-tree-view__leaf-glyph-img"
                    src={ isLastAmongSiblings ? treeIconLast : treeIconMid }
                    alt=""
                  />
                </span>
            )

        const controlEl = props.selectable
          ? (
              <VCheckbox
                key={ `hc-tree-cb-${idKey}` }
                modelValue={ checked }
                indeterminate={ indeterminate }
                color={ props.selectedColor }
                density={ props.density }
                label={ label }
                disabled={ itemDisabled }
                hideDetails
                onUpdate:modelValue={ () => toggleSelect(id) }
              />
          )
          : (
              <span
                key={ `hc-tree-txt-${idKey}` }
                class="hc-tree-view__label"
              >
                { label }
              </span>
          )

        const rowContent = (
          <div class="hc-tree-view__row">
            { toggleEl }
            <div class="hc-tree-view__control">
              { controlEl }
            </div>
          </div>
        )

        return [
          (
            <li class="hc-tree-view__node" key={ idKey }>
              { rowContent }
              { subtree }
            </li>
          ),
        ]
      })
    }

    return () => {
      const { class: _c, ...restAttrs } = attrs as Record<string, unknown>
      return (
        <ul
          class={ rootClass.value }
          data-testid="hc-tree-view"
          { ...restAttrs }
        >
          { renderNodes(props.items) }
        </ul>
      )
    }
  },
})
