import { Fragment } from "react";
import { Map } from "components/Locations";

export const LocationsContainer = ({ locations, children }) => {
  return (
    <Fragment>
      <section className="locations-container">{children}</section>
      <aside className="map-container">
        <Map {...{ locations }} />
      </aside>
      <style jsx>{`
        .locations-container {
          position: relative;
          background-color: #f1ffff;
        }
      `}</style>
    </Fragment>
  );
};
