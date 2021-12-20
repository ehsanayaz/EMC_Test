import { Fragment } from "react";

const Chips = ({ categories }) => {
  const lastIndex = categories.length - 1;
  // ensures 5 max shown categories.
  categories.length > 5 ? (categories.length = 5) : 0;
  return (
    <>
      <section className="chips-container">
        {categories.map((category, idx) => {
          return (
            <Fragment key={category.name}>
              <span className="chip" onClick={() => alert(category.name)}>
                {category.name}
              </span>
              {lastIndex !== idx && <span>•</span>}
            </Fragment>
          );
        })}
      </section>
      <style jsx>{`
        .chips-container {
          color: #718096;
        }

        .chips-container span:nth-child(even) {
          margin: 0 0.5rem;
        }
      `}</style>
    </>
  );
};

export default Chips;
