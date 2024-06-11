import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export function BasicRatingInput({
  title,
  name,
  value = 5,
  handleChange,
  withTooltip = false,
  tooltipTop = "-3rem",
  tooltip = "",
}: {
  title: string;
  name: string;
  value?: number;
  handleChange: any;
  withTooltip?: boolean;
  tooltipTop?: string;
  tooltip?: string;
}) {
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  return (
    <>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <div className="content">
          <Typography component="legend">{title}</Typography>
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
        <Rating
          name={name}
          id={name}
          value={value}
          onChange={(event, newValue) => {
            handleChange(newValue);
          }}
        />
      </Box>
      <style jsx>{`
        .content {
          display: flex;
          gap: 1rem;
          position: relative;
          align-items: center;
        }

        .iconContainer {
          display: flex;
          width: max-content;
          height: max-content;
          align-items: center;
        }

        .tooltip {
          width: max-content;
          max-width: 19rem;
          height: max-content;
          padding: 0.7rem;
          border: solid 1px gainsboro;
          background-color: white;
          color: #9e9e9e;
          position: absolute;
          bottom: calc(100% + 0.6rem);
          left: 0;
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
