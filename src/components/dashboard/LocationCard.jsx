import React from "react";
import Card, { CardContent, CardHeading } from "../ui/card";
import Progressbar from "../ui/progressbar";
import Marker from "../ui/marker";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

function LocationItem({ name, value, progress }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-xs">
        <p>{name}</p>
        <p>{value}</p>
      </div>
      <Progressbar progress={progress} />
    </div>
  );
}

function WorldMap({ markers = [], className = "" }) {
  return (
    <div className={`relative max-w-[154px] mx-auto ${className}`}>
      <img
        src="/images/world-map.svg"
        alt="World map showing revenue locations"
        className="w-full  h-[82px] object-cover"
      />
      {markers.map((marker, index) => (
        <Tooltip key={`marker-${index}`}>
          <TooltipTrigger asChild>
            <div
              className={`absolute ${marker.position}`}
              aria-label={marker.name}
            >
              <Marker />
            </div>
          </TooltipTrigger>
          {marker.name ? (
            <TooltipContent side="top">{marker.name}</TooltipContent>
          ) : null}
        </Tooltip>
      ))}
    </div>
  );
}

function LocationCard({
  title = "Revenue by Location",
  locations = [],
  mapMarkers = [],
  className = "",
}) {
  const defaultLocations = [
    { name: "New York", value: "72K", progress: 80 },
    { name: "San Francisco", value: "39K", progress: 45 },
    { name: "Sydney", value: "25K", progress: 50 },
    { name: "Singapore", value: "61K", progress: 65 },
  ];

  const defaultMarkers = [
    { position: "top-[27px] left-[16px]", name: "San Francisco" },
    { position: "top-[31px] left-[35px]", name: "New York" },
    { position: "bottom-[26px] right-[45px]", name: "Singapore" },
    { position: "bottom-[16px] right-[32px]", name: "Sydney" },
  ];

  const displayLocations = locations.length > 0 ? locations : defaultLocations;
  const displayMarkers = mapMarkers.length > 0 ? mapMarkers : defaultMarkers;

  return (
    <Card className={`min-w-[202px]  h-full ${className}`}>
      <CardHeading>{title}</CardHeading>
      <CardContent className="flex flex-col gap-4">
        <WorldMap markers={displayMarkers} />

        {displayLocations.map((location, index) => (
          <LocationItem
            key={location.name || `location-${index}`}
            name={location.name}
            value={location.value}
            progress={location.progress}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default LocationCard;
