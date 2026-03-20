// 面板值的类型：可以是字符串或数字 / Panel value type: can be string or number
export type PanelValue = string | number;

// 模型值的类型：可以是单个值、数组或未定义 / Model value type: can be single value, array, or undefined
export type ModelValue = PanelValue | PanelValue[] | undefined;

// 面板控制接口 / Panel control interface
export interface PanelsControl {
  updatePanel: (panelValue: PanelValue, shouldExpand: boolean) => void;
}

