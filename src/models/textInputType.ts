export interface iTextInput {
  label: string
  validation: any
  required: boolean
  name: string,
  clearError: () => void,
  type?: string,
  defaultValue?: string,
  readOnly?: boolean,
  multiline?: boolean,
  disabled?: boolean,
  height?: string,
  value?: string|number,
  changeHandler: any,
  error?: any,
  withTooltip?: boolean,
  tooltipTop?: string,
  tooltip?: string,
}
