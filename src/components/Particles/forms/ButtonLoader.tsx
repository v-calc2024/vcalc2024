import { CircularProgress } from "@mui/material";

export function ButtonLoader() {
  return (
    <>
      <div className="loaderButton">
        <CircularProgress
          sx={{
            width: "12px !important",
            height: "12px !important",
            color: "white !important",
          }}
        />
        <p>Loading...</p>
      </div>
      <style jsx>{`
        .loaderButton {
          width: 100%;
          height: max-content;
          display: grid;
          grid-template-rows: 1fr;
          grid-template-columns: max-content max-content;
          grid-column-gap: 0.5rem;
          color: white;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .loaderButton p {
          color: white;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
