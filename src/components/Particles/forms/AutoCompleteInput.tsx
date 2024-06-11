import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function ComboBox({
  title,
  list,
  onChange = () => {},
  id,
  value = null, // Cambiado a null para evitar problemas iniciales
  withTooltip = false,
  tooltipTop = "-3rem",
  tooltip = "",
}: {
  title: string;
  list: any[];
  onChange: any;
  id: string;
  value?: any; // Cambiado a any para permitir cualquier tipo de valor
  withTooltip?: boolean;
  tooltipTop?: string;
  tooltip?: string;
}) {
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  return (
    <>
      <div className="SelectContainer">
        <Autocomplete
          disablePortal
          id={id}
          options={list}
          size="small"
          color="primary"
          onChange={onChange}
          value={value}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          ListboxProps={{ sx: { fontSize: ".9rem", padding: 0, margin: 0 } }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                    marginTop: "16px",
                  }}
                >
                  {title}
                </div>
              }
              color="primary"
              sx={{
                width: "100%",
                fontSize: "12px",
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
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    border: "none",
                    borderBottom: "solid 2px #1976d2",
                  },
                },
              }}
              focused
            />
          )}
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
