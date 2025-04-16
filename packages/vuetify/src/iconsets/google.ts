// Composables
import { VClassIcon } from '@/composables/icons'

// Utilities
import { h } from 'vue'

// Types
import type { IconAliases, IconSet } from '@/composables/icons'

const googleAliases: IconAliases = {
  collapse: 'keyboard_arrow_up',
  complete: 'check',
  cancel: 'close',
  close: 'close',
  delete: 'close', // delete (e.g. v-chip close)
  clear: 'close',
  success: 'check',
  info: 'info',
  warning: 'warning',
  error: 'close',
  prev: 'chevron_left',
  next: 'chevron_right',
  checkboxOn: 'check_box',
  checkboxOff: 'check_box_outline_blank',
  checkboxIndeterminate: 'chips',
  delimiter: 'circle', // for carousel
  sortAsc: 'arrow_upward',
  sortDesc: 'arrow_downward',
  expand: 'stat_minus_1',
  menu: 'menu',
  subgroup: 'arrow_drop_down',
  dropdown: 'arrow_drop_down',
  radioOn: 'radio_button_checked',
  radioOff: 'radio_button_unchecked',
  edit: 'edit',
  ratingEmpty: 'star_rate',
  ratingFull: 'star_rate',
  ratingHalf: 'star_half',
  loading: 'cached',
  first: 'first_page',
  last: 'last_page',
  unfold: 'unfold_more',
  file: 'attach_file',
  plus: 'add',
  minus: 'remove',
  calendar: 'calendar_month',
  treeviewCollapse: 'arrow_drop_down',
  treeviewExpand: 'arrow_right',
  eyeDropper: 'colorize',
  upload: 'backup',
}

const google: IconSet = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (props: any) => h(VClassIcon, { ...props, class: 'google-icon' }),
}

export { googleAliases, google }
