import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useRef } from "react";

export function UploadProfileImage({ setFile, file, urlImage = null }: any) {
  const refElement: any = useRef(null);

  function addFile(event: any) {
    setFile(event.target.files[0]);
  }

  function removeFile() {
    refElement.current.value = null;
    setFile(null);
  }

  return (
    <>
      <div className="content">
        <div className="imageCont">
          {file || (file === null && urlImage !== null) ? (
            <>
              {file !== null && (
                <span className="iconClose">
                  <IconButton
                    onClick={removeFile}
                    sx={{
                      backgroundColor: "gainsboro !important",
                      width: "2rem",
                      height: "2rem",
                    }}
                  >
                    <CloseIcon
                      sx={{ color: "tomato", width: "1rem", height: "1rem" }}
                    />
                  </IconButton>
                </span>
              )}
              {
                <img
                  src={
                    file === null && urlImage !== null
                      ? urlImage
                      : URL.createObjectURL(file)
                  }
                  alt={"photo"}
                  style={{
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "100%",
                  }}
                />
              }
            </>
          ) : (
            <AccountCircleIcon
              sx={{
                width: "6rem",
                height: "6rem",
                color: "#1976d2",
              }}
            />
          )}
        </div>
        <label>
          <input
            ref={refElement}
            name={"image"}
            type="file"
            accept=".jpg, .jpeg, .png"
            ng-multiple="true"
            onChange={addFile}
          />
        </label>
      </div>
      <style jsx>
        {`
          .labelText {
            font-size: 0.8rem;
            color: green;
            margin-bottom: 10px;
            box-sizing: border-box;
          }

          input[type="file"] {
            color: transparent;
          }

          .imageCont {
            width: 5rem;
            height: 5rem;
            background-color: var(--contrast-color);
            border-radius: 100%;
            margin-left: 2rem;
            margin-bottom: 1rem;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
          }

          .iconClose {
            width: max-content;
            height: max-content;
            position: absolute;
            top: -0.2rem;
            right: -0.7rem;
            box-sizing: border-box;
          }

          .content {
            width: 8.3rem;
          }
        `}
      </style>
    </>
  );
}
