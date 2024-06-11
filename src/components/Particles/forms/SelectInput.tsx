import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useHandleSelect } from "@/hooks/useHandleSelect";
import { iSelectInput } from "@/models/iSelectInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export function SelectInput({
  list,
  title,
  name,
  defaultValue,
  handleSelect,
  withTooltip = false,
  tooltipTop = "-3rem",
  tooltip = "",
}: iSelectInput) {
  const { handleChange, filter } = useHandleSelect({
    defaultValue,
    handleSelect,
  });

  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  return (
    <>
      <div className="SelectContainer">
        <FormControl
          sx={{ m: 1, minWidth: "100%", margin: 0, height: "2.7rem" }}
          size="small"
        >
          <InputLabel
            id={name}
            sx={{
              fontSize: filter ? 16 : 12,
              color: "#1976d2 !important",
              marginTop: filter ? "12px" : "-5px",
            }}
          >
            {title}
          </InputLabel>
          <Select
            labelId="select-small-label"
            id={name}
            value={filter}
            name={name}
            label="filter"
            sx={{
              fontSize: 14,
              paddingTop: "14px",
              color: "black",
              height: "100%",
              backgroundColor: "#f0f0f0",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#1976d2",
                border: "none",
                borderBottom: "solid 2px #1976d2",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
                borderBottom: "solid 2px #1976d2",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
                borderBottom: "solid 2px #1976d2",
              },
              ".MuiSvgIcon-root ": {
                fill: "#1976d2 !important",
              },
            }}
            MenuProps={{
              style: {
                maxHeight: 320,
              },
            }}
            onChange={handleChange}
            input={
              <OutlinedInput
                id={name}
                label={title}
                sx={{ fontSize: 14, color: "#1976d2" }}
              />
            }
          >
            {list?.map((item: any) => {
              return (
                <MenuItem
                  key={item.value}
                  value={item.value}
                  sx={{ fontSize: ".9rem" }}
                >
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
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
        .SelectContainer {
          position: relative;
          width: 100%;
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
