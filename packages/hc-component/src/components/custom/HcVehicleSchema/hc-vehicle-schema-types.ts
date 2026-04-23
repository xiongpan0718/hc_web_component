/**
 * Observation level on a tire (API may use string or number).
 * 轮胎观察等级（接口可能返回字符串或数字）。
 */
export type HcTireObservationLevel = string | number

/**
 * HcTire layout: default (pressure/rtd in box) vs simple (Figma tire_simple).
 * HcTire 布局：default 胎压/rtd 在框内；simple 为简化轮位展示。
 */
export type HcTireMode = 'default' | 'simple'

/**
 * Single tire row: fields used in the vehicle schema UI plus common API fields (e.g. `CAI`).
 * Map keys in {@link HcVehicleSchemaTireData} should match `wheel_place` values.
 * 单条轮胎：轮位图展示用字段及常见接口字段（如 CAI）；tireData 的键需与 `wheel_place` 一致。
 */
export interface HcTireData {
  /** Wheel position label, e.g. 1L, 2LO / 轮位标识 */
  wheel_place: string

  /** i18n label override / 轮位展示文案覆盖 */
  translated_wheel_place?: string | null

  /** When true, this wheel slot is non-interactive (e.g. not selectable) / 为 true 时该轮位不可交互（如不可选）*/
  disabled?: boolean

  /** Spare tires only: whether this tire row can be deleted / 仅备胎：是否可删除 */
  deletable?: boolean

  /** Spare tires only: mounted vs dismounted from vehicle / 仅备胎：是否已从车上卸下。*/
  dismount?: boolean

  /** Drives icon + CSS observation levels on the tire / 观察等级，驱动图标与样式 */
  observation_level?: HcTireObservationLevel | null

  pressure?: number | null
  rtd?: number | null

  /** Override when parent `unit` omits pressure unit / 父级 unit 未传时的胎压单位 */
  pressure_unit?: string | null
  /** Override when parent `unit` omits RTD unit / 父级 unit 未传时的 RTD 单位 */
  rtd_unit?: string | null

  /** Show regroove “R” marker / 是否显示刻沟 R 标记 */
  is_regroove?: boolean | number | null

  /** used for simple mode status judgment / 用于simple模式下状态判断 */
  CAI?: number | string | null
  temp_cai_id?: number | string | null
}

/**
 * Map from wheel position key to tire row (main axles).
 * 主轮位：键为轮位字符串，值为该位置轮胎数据。
 */
export type HcVehicleSchemaTireData = Record<string, HcTireData>

/**
 * Spare tire row (same as {@link HcTireData}, `wheel_place` required).
 * 备胎列表项。
 */
export type HcSpareTireData = Omit<Partial<HcTireData>, 'wheel_place'> & {
  wheel_place: string
}
