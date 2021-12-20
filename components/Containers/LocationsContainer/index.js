import { Fragment } from "react";
import { Map } from "components/Locations";

export const LocationsContainer = ({ locations, children }) => {
  return (
    <Fragment>
      <section 
        className="locations-container" style={{ position: "relative"}}>
        {children}
      </section>
      <aside className="map-container">
        <Map {...{ locations }} />
      </aside>
    </Fragment>
  );
};
