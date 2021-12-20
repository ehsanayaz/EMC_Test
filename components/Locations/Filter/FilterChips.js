import Chip from "@mui/material/Chip";

export const FilterChips = ({ filters = {} }) => {
  const objKeys = Object.keys(filters);

  return (
    <>
      <ul>
        {objKeys.map((objKey, idx) => {
          return (
            <li key={idx}>
              <Chip label={`${objKey}: ${filters[objKey]}`} />
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        ul {
          display: flex;
          flex-direction: row;
          overflow-x: scroll;
          min-height: 40px;
          margin-left: 20px;
        }
        li {
          margin: 2px;
        }
      `}</style>
    </>
  );
};
