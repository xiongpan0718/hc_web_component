// Dialog 按钮配置接口 / Dialog button configuration interface
export interface DialogButton {
  text: string;
  prependIcon?: string; // 左侧图标 / Left icon
  appendIcon?: string; // 右侧图标 / Right icon
  onClick?: () => void;
  variant?: string; // 按钮变体 / Button variant
  color?: string; // 按钮颜色 / Button color
  disabled?: boolean; // 是否禁用 / Whether the button is disabled
}

// Dialog 按钮配置 / Dialog button configuration
export interface DialogActions {
  leftButton?: DialogButton;
  centerButton?: DialogButton;
  rightButton?: DialogButton;
}

