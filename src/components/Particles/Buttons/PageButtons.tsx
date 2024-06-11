export function PageButton({
  label,
  isPrimary,
  handleClick,
  height = "3.75rem",
}: {
  label: string;
  isPrimary: boolean;
  handleClick: any;
  height?: string;
}) {
  return (
    <>
      <button onClick={handleClick}>{label}</button>
      <style jsx>{`
        button {
          width: max-content;
          max-width: 12rem;
          height: ${height};
          color: ${isPrimary
            ? "var(--contrast-color)"
            : "var(--primary-color)"};
          background-color: ${isPrimary
            ? "var(--button-primary-color)"
            : "var(--button-secondary-color)"};
          border: solid 1px
            ${isPrimary
              ? "var(--button-primary-color)"
              : "var(--button-secondary-color)"};
          padding: 0.8rem 1.8rem;
          border-radius: 2rem;
          cursor: pointer;
          font-weight: 700;
          box-sizing: border-box;
        }

        button:hover {
          box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
}
