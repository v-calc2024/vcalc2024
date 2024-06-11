export interface iSelectInput { 
  list: any[],
  title: string,
  defaultValue: string,
  name: string,
  handleSelect: (value: string) => void,
  withTooltip?: boolean,
  tooltipTop?: string,
  tooltip?: string,
}
