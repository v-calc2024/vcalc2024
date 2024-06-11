import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export function MultiplesOptions({
  list,
  title,
  changeHandler,
  checksArr,
  withTooltip = false,
  tooltipTop = "-3rem",
  tooltip = "",
}: {
  list: any[];
  title: string;
  changeHandler: any;
  checksArr: any[];
  withTooltip?: boolean;
  tooltipTop?: string;
  tooltip?: string;
}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <div className="content">
        <div className="titleCont">
          <label>{title}</label>
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
        <div className="multiple-options">
          {list?.map((item: any) => {
            return (
              <div key={item.value}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checksArr?.includes(item.value)}
                      onChange={() => changeHandler(item.value)}
                    />
                  }
                  label={item.label}
                />
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .content {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-row: max-content max-content;
          grid-template-columns: 1fr;
          grid-row-gap: 2rem;
          justify-content: center;
          box-sizing: border-box;
        }

        .titleCont {
          width: max-content;
          height: max-content;
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          justify-self: center;
          position: relative;
          box-sizing: border-box;
        }

        label {
          text-align: center;
          color: #1565c0;
          font-weight: 700;
        }

        .iconContainer {
          width: max-content;
          height: max-content;
          display: flex;
          align-items: center;
          justify-content: center;
          right: 5px;
          top: 3px;
          cursor: pointer;
          box-sizing: border-box;
        }

        .multiple-options {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(10rem, 20rem));
          grid-template-rows: 1fr;
          grid-gap: 0.6rem;
          justify-self: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .tooltip {
          width: max-content;
          max-width: 20rem;
          height: max-content;
          padding: 0.7rem;
          border: solid 1px gainsboro;
          background-color: white;
          color: #9e9e9e;
          position: absolute;
          bottom: calc(100% + 0.6rem);
          left: -4.3rem;
          z-index: 3;
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
