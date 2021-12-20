import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import Marker from "./Marker";

export const Map = React.memo(({ locations = [] }) => {
  const { selectedIndex } = useSelector((state) => state.locations);
  let defaultProps = {
    center: {
      lat: 22.29049058956529,
      lng: 114.1712132124223,
    },
    zoom: 11,
  };

  let lat, lng;
  if (locations.length === 1) {
    [lat, lng] = locations[0].coordinates.split(",").map(parseFloat);
    defaultProps = { ...defaultProps, center: { lat, lng }, zoom: 18 };
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{ clickableIcons: false }}
      >
        {locations &&
          locations.map((location, idx) => {
            const [lat, lng] = location.coordinates.split(",");
            return (
              <Marker
                {...{ lat, lng }}
                icon={location?.shop_type?.map_icon?.url}
                key={location.name}
                text={location.name}
                isSelected={selectedIndex === idx}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
});
