import { iTextInput } from "@/models/textInputType";

export function DateInput({
  label,
  validation,
  required,
  name,
  readOnly = false,
  clearError,
  defaultValue = "",
  disabled = false,
  changeHandler,
  value = "",
  error = "",
}: iTextInput) {
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
            onBlur={blur}
            required={required}
            readOnly={readOnly}
            onChange={changeHandler}
            disabled={disabled}
          />
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
          border-bottom: solid 2px ${!!error?.length ? "red" : "green"};
          position: relative;
        }

        p {
          color: ${!!error?.length ? "red" : "green"};
        }

        .datetime {
          background-color: transparent;
          font-size: 0.9rem;
        }

        .error {
          color: #d32f2f;
          font-size: 0.8rem;
          margin-top: -0.8rem;
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
}
