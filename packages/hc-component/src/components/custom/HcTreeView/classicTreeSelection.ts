// Classic tree selection aligned with Vuetify v-treeview select-strategy="classic" / 与 Vuetify classic 策略一致
import { toRaw } from 'vue'

export type SelectedState = 'on' | 'off' | 'indeterminate'

export type ClassicSelectArgs = {
  id: unknown
  value: boolean
  selected: Map<unknown, SelectedState>
  children: Map<unknown, unknown[]>
  parents: Map<unknown, unknown>
}

export function createClassicSelectStrategy (mandatory?: boolean) {
  const strategy = {
    select ({
      id,
      value,
      selected,
      children,
      parents,
    }: ClassicSelectArgs): Map<unknown, SelectedState> {
      const rawId = toRaw(id)
      const original = new Map(selected)

      const queue: unknown[] = [rawId]

      while (queue.length) {
        const item = queue.shift()!
        selected.set(toRaw(item), value ? 'on' : 'off')

        const childIds = children.get(item)
        if (childIds?.length) {
          queue.push(...childIds)
        }
      }

      let parent = toRaw(parents.get(rawId))

      while (parent != null) {
        const childrenIds = children.get(parent)!
        const everySelected = childrenIds.every(
          cid => selected.get(toRaw(cid)) === 'on',
        )
        const noneSelected = childrenIds.every(
          cid => !selected.has(toRaw(cid)) || selected.get(toRaw(cid)) === 'off',
        )
        let parentState: SelectedState = 'indeterminate'
        if (everySelected) parentState = 'on'
        else if (noneSelected) parentState = 'off'
        selected.set(parent, parentState)
        parent = toRaw(parents.get(parent))
      }

      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce<unknown[]>(
          (arr, [key, state]) => {
            if (state === 'on') arr.push(key)
            return arr
          },
          [],
        )
        if (on.length === 0) return original
      }

      return selected
    },

    in (
      v: readonly unknown[] | undefined,
      treeChildren: Map<unknown, unknown[]>,
      treeParents: Map<unknown, unknown>,
    ): Map<unknown, SelectedState> {
      let map = new Map<unknown, SelectedState>()

      for (const nodeId of v || []) {
        map = strategy.select({
          id: nodeId,
          value: true,
          selected: map,
          children: treeChildren,
          parents: treeParents,
        })
      }

      return map
    },

    out (
      v: Map<unknown, SelectedState>,
      treeChildren: Map<unknown, unknown[]>,
    ): unknown[] {
      const arr: unknown[] = []

      for (const [key, state] of v.entries()) {
        if (state === 'on' && !treeChildren.has(key)) {
          arr.push(key)
        }
      }

      return arr
    },
  }

  return strategy
}
