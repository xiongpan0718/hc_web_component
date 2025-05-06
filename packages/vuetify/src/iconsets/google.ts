// Types
import type { IconAliases } from '@/composables/icons'

const googleAliases: IconAliases = {
  collapse: 'keyboard_arrow_up',
  complete: 'check',
  cancel: 'close_fill',
  close: 'close',
  delete: 'close_fill', // delete (e.g. v-chip close_fill)
  clear: 'close_fill',
  success: 'check_fill',
  info: 'info',
  warning: 'warning',
  error: 'close_fill',
  prev: 'chevron_left',
  next: 'chevron_right',
  checkboxOn: 'check_box_fill',
  checkboxOff: 'check_box_outline_blank',
  checkboxIndeterminate: 'chips_fill',
  delimiter: 'circle_fill', // for carousel
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
  ratingFull: 'star_rate_fill',
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
  upload: 'backup_fill',
}

export { googleAliases }
