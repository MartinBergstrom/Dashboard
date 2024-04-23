import React from "react";
import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import "./SportsCalendarInfoView.css";
import { hasMapping, mapToUrl } from "./InfoViewUrlMapper";
import { Link } from "react-router-dom";
import { MuiColorInput } from "mui-color-input";

interface SportsCalendarInfoViewProps {
  selectedEvent?: SportsCalendarEvent;
}

const SportsCalendarInfoView = (props: SportsCalendarInfoViewProps) => {
  if (!props.selectedEvent) {
    return null;
  }

  const formatText = (text: string) => {
    const replaced = text.replace(/_/g, " ");
    return replaced.charAt(0).toUpperCase() + replaced.slice(1);
  };

  const handleChannels = (channels: string[]) => {
    console.log("CHANNELS");
    console.log(channels);
    return channels.map((channel) =>
      hasMapping(channel) ? (
        <Link to={mapToUrl(channel)} target="_blank">
          {mapToUrl(channel)}
        </Link>
      ) : (
        <div>{channel}</div>
      )
    );
  };

  const handleBannerColor = (value: string) => {
    return (
      <MuiColorInput
        sx={{
          "& .MuiOutlinedInput-input": {
            margin: "0px",
            padding: "0px"
          },
          "& .MuiOutlinedInput-notchedOutline": {
            display: "none",
          },
        }}
        size="small"
        format="hex"
        disabled
        value={value}
      />
    );
  };

  const renderPropsValue = (key: string, value: any) => {
    switch (key) {
      case "channels":
        return handleChannels(value);
      case "banner_color":
        return handleBannerColor(value);
      default:
        return value instanceof Date ? value.toDateString() : value;
    }
  };

  const renderProps = () => {
    if (props.selectedEvent) {
      const filteredEntries = Object.entries(props.selectedEvent).filter(
        ([key, value]) => key !== "_id" && value !== undefined
      );
      return (
        <div className="info-view-main">
          {filteredEntries.map(([key, value]) => (
            <React.Fragment key={key}>
              <div className="key" key={key}>
                {formatText(key)}
              </div>
              <div className="value" key={`${key}-value`}>
                {renderPropsValue(key, value)}
              </div>
            </React.Fragment>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="info-view">
          <div className="key-value title-bar">
            <span className="title-value">{props.selectedEvent?.name}</span>
          </div>
          {renderProps()}
        </div>
      </div>
    </>
  );
};

export default SportsCalendarInfoView;
