import { Fragment, useRef, Text } from "react";
import { useDispatch } from "react-redux";
import { HIGHLIGHT_INDEX } from "store/locations/locationsSlice";
import Slug from "./Slug";

export const Result = ({ locations, route }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const handleHover = (idx) => () => {
    if (ref.current !== idx) dispatch(HIGHLIGHT_INDEX(idx));
    ref.current = idx;
  };

  return (
    <section 
      className="locations-result-container">
      {locations.map(({ id, ...location }, idx) => {
        return (
          <Fragment key={idx}>
            <Slug {...{ location, route }} handleHover={handleHover(idx)} />
            {locations.length - 1 !== idx && 
              <hr style= {{ 
                border: "solid 2px black",
                marginBottom: "40px"
                }}
              />
            }
          </Fragment>
        );
      })}
      <style jsx>{`
     
      `}</style>
    </section>
  );
};
