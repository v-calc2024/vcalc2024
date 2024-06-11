import { useInputText } from "@/hooks/useInputText";
import { iTextInput } from "@/models/textInputType";
import { useEffect, useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export function DateTimeInput({
  label,
  required,
  name,
  readOnly = false,
  clearError,
  defaultValue = "",
  value = "",
  changeHandler,
  error = "",
  disabled = false,
  withTooltip = false,
  tooltipTop = "-3rem",
  tooltip = "",
}: iTextInput) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <>
        <label>
          <p>{required ? `* ${label}` : label}</p>
          <input
            className="datetime"
            type="date"
            id={name}
            name={name}
            value={value}
            //onBlur={blur}
            required={required}
            readOnly={readOnly}
            onChange={changeHandler}
            disabled={disabled}
          />
          <div className="SelectContainer">
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
                <span>{tooltip}</span>
              </div>
            )}
          </div>
        </label>
        {!!error?.length && <p className="error">{error}</p>}
      </>

      <style jsx>{`
        label {
          width: 100%;
          height: 43.69px;
          background-color: #f0f0f0;
          font-size: 0.75rem;
          padding-left: 1rem;
          box-sizing: border-box;
          position: relative;
          border-bottom: solid 2px ${!!error?.length ? "red" : "#1976d2"};
        }

        p {
          color: ${!!error?.length ? "red" : "#1976d2"};
          position: absolute;
          top: -0.5rem;
          left: 1rem;
          width: max-content;
          padding: 0;
          margin: 0;
          background-color: transparent;
        }

        .datetime {
          background-color: transparent;
          font-size: 0.9rem;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          padding: 0 1rem;
          outline: none;
          box-sizing: border-box;
        }

        .error {
          color: #d32f2f;
          font-size: 0.8rem;
          margin-top: -0.8rem;
          margin-left: 1rem;
        }

        .SelectContainer {
          position: relative;
          width: 100%;
          height: 100%;
          width: calc(100% + 1rem);
          left: -1rem;
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
          width: 100%;
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

        .tooltip span {
          padding: 0;
          margin: 0;
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
}
