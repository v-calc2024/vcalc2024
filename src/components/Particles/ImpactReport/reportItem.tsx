import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export function ReportItem({
  items,
  title,
  handleCheckedItem,
  checkedItems,
  id
}: {
  items: string[];
  title: string;
  handleCheckedItem: any;
  checkedItems: string[];
  id: any;
}) {
  return (
    <>
      <div className="itemReport">
        <div className="title">
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedItems.includes(id)}
                onChange={() => handleCheckedItem(id)}
              />
            }
            label={title}
          />
        </div>

        <div className="items">
          {items?.map((item: string) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </div>
      <style jsx>{`
        .itemReport {
          width: 30rem;
          height: 100%;
          min-height: 27.5rem;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: max-content max-content;
          grid-template-gap: 1rem;
          justify-content: flex-start;
          border: solid 2px black;
          padding: 2rem 1rem;
          padding-left: 2rem;
          border-radius: 1rem;
          box-sizing: border-box;
        }

        .items {
          width: max-content;
          height: max-content;
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-rows: max-content;
          grid-row-gap: 0.7rem;
          justify-content: flex-start;
          box-sizing: border-box;
        }

        .title {
          width: max-content;
          display: flex;
          align-items: center;
          gap: 0.1rem;
          box-sizing: border-box;
        }

        h3,
        .title {
          font-size: 1.1rem;
          max-width: 27rem;
          cursor: pointer;
        }

        p {
          max-width: 27rem;
          margin: 0;
          padding: 0;
          font-size: 1rem;
          color: var(--secondary-color);
        }

        @media (max-width: 1200px) {
          p,
          .itemReport {
            width: 100%;
            max-width: 100%;
            justify-content: center;
            justify-self: center;
          }

          .itemReport {
            min-height: max-content;
          }

          h3,
          .title,
          .items {
            width: max-content;
            text-align: center;
            justify-content: center;
            justify-self: center;
          }
        }

        @media (max-width: 750px) {
          p,
          h3,
          .title,
          .itemReport {
            max-width: 25rem;
          }

          .itemReport {
            max-width: 30rem;
          }
        }

        @media (max-width: 600px) {
          p,
          h3,
          .title {
            max-width: 20rem;
          }

          .items,
          p {
            width: max-content;
            justify-content: flex-start;
            justify-self: flex-start;
            text-align: left;
          }
        }

        @media (max-width: 420px) {
          p,
          h3,
          .title {
            max-width: 15rem;
          }

          h3 {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
