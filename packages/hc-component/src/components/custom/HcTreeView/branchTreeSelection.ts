// Matches Vuetify `select-strategy="branch"` (v-treeview) / 对齐 v-treeview branch
import { createClassicSelectStrategy } from './classicTreeSelection'
import type { SelectedState } from './classicTreeSelection'

export function createBranchSelectStrategy (mandatory?: boolean) {
  const classic = createClassicSelectStrategy(mandatory)

  return {
    select: classic.select,

    /**
     * Ignore branch ids in the model; only leaf ids apply `select(true)`. / 回填时跳过父节点 id，仅叶子参与 classic select
     */
    in (
      v: readonly unknown[] | undefined,
      treeChildren: Map<unknown, unknown[]>,
      treeParents: Map<unknown, unknown>,
    ): Map<unknown, SelectedState> {
      let map = new Map<unknown, SelectedState>()
      for (const nodeId of v || []) {
        if (treeChildren.has(nodeId)) continue
        map = classic.select({
          id: nodeId,
          value: true,
          selected: map,
          children: treeChildren,
          parents: treeParents,
        })
      }
      return map
    },

    /**
     * All `on` or `indeterminate` keys / 输出全选、半选节点 id
     */
    out (
      v: Map<unknown, SelectedState>,
      _treeChildren: Map<unknown, unknown[]>,
    ): unknown[] {
      const arr: unknown[] = []
      for (const [key, state] of v.entries()) {
        if (state === 'on' || state === 'indeterminate') arr.push(key)
      }
      return arr
    },
  }
}
