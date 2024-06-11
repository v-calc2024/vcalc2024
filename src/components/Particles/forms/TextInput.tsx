import { useInputText } from "@/hooks/useInputText";
import { iTextInput } from "@/models/textInputType";
import TextField from "@mui/material/TextField";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useState } from "react";

export function InputText({
  label,
  validation,
  required,
  name,
  type = "text",
  multiline = false,
  clearError,
  changeHandler,
  defaultValue = "",
  disabled = false,
  height = "2.7rem",
  value = "",
  withTooltip = false,
  tooltipTop = "-3rem",
  tooltip = "",
}: iTextInput) {
  const { error, blur, clearInputError } = useInputText({
    validation,
    clearError,
  });

  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <div className="TextFieldContainer">
        <TextField
          name={name}
          value={value}
          onBlur={blur}
          onChange={changeHandler}
          label={required ? `* ${label}` : label}
          variant="filled"
          color="primary"
          InputProps={{
            style: { fontSize: 13, minHeight: height },
            inputProps: {
              min: 0,
              step: "1",
              readOnly: disabled,
            },
          }}
          sx={{ width: "100%", fontSize: "12px" }}
          size="small"
          helperText={error}
          style={{ fontSize: 1 }}
          error={!!error?.length}
          type={type}
          multiline={multiline}
          focused
        />
        {withTooltip && (
          <span
            className="iconContainer"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
          >
            <HelpOutlineIcon
              sx={{ width: "17px", height: "17px", fill: "#9E9E9E" }}
            />
          </span>
        )}
        {tooltipVisible && tooltip.length > 0 && (
          <div
            className="tooltip"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
          >
            <p>{tooltip}</p>
          </div>
        )}
      </div>
      <style jsx>{`
        .TextFieldContainer {
          position: relative;
          box-sizing: border-box;
        }

        .iconContainer {
          width: max-content;
          height: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 5px;
          top: 3px;
          cursor: pointer;
          box-sizing: border-box;
        }

        .tooltip {
          width: max-content;
          max-width: 100%;
          height: max-content;
          padding: 0.7rem;
          border: solid 1px gainsboro;
          background-color: white;
          color: #9e9e9e;
          position: absolute;
          bottom: calc(100% + 0.6rem);
          right: 0;
          z-index: 1;
          box-sizing: border-box;
        }

        .tooltip p {
          padding: 0;
          margin: 0;
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
}
