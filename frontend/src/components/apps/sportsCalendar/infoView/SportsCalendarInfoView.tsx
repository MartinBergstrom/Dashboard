import React, { useState } from "react";
import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import "./SportsCalendarInfoView.css";
import { hasMapping, mapToUrl } from "./InfoViewUrlMapper";
import { Link } from "react-router-dom";
import { MuiColorInput } from "mui-color-input";
import EditIcon from "@mui/icons-material/Edit";
import InfoViewHighlights from "./InfoViewHighlights";

interface SportsCalendarInfoViewProps {
  selectedEvent?: SportsCalendarEvent;
}

const SportsCalendarInfoView = (props: SportsCalendarInfoViewProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  if (!props.selectedEvent) {
    return null;
  }

  const onEditIconClick = () => {
    setIsEditing(!isEditing);
  };

  const formatText = (text: string) => {
    const replaced = text.replace(/_/g, " ");
    return replaced.charAt(0).toUpperCase() + replaced.slice(1);
  };

  const handleChannels = (channels: string[]) => {
    console.log("CHANNELS");
    console.log(channels);
    return channels.map((channel) =>
      hasMapping(channel) ? (
        <Link to={mapToUrl(channel)} target="_blank" key={channel}>
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
          "& .MuiInputBase-formControl": {
            margin: "0px",
            padding: "0px",
          },
          "& .MuiOutlinedInput-input": {
            margin: "0px",
            padding: "0px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            display: "none",
          },
        }}
        size="small"
        format="hex"
        disabled={!isEditing}
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

  const renderInfoViewMain = () => {
    if (props.selectedEvent) {
      const filteredEntries = Object.entries(props.selectedEvent).filter(
        ([key, value]) => key !== "_id" && value !== undefined && key !== "highlights"
      );
      return (
        <div className="info-view-main">
          {filteredEntries.map(([key, value], index) => (
            <React.Fragment key={index}>
              <div className="key">{formatText(key)}</div>
              <div className="value">{renderPropsValue(key, value)}</div>
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
          <div className="edit-icon" onClick={onEditIconClick}>
            <EditIcon fontSize="small" />
          </div>
          <div className="key-value title-bar">
            <span className="title-value">{props.selectedEvent?.name}</span>
          </div>
          {renderInfoViewMain()}
          <InfoViewHighlights hightlights={props.selectedEvent.highlights}/>
        </div>
      </div>
    </>
  );
};

export default SportsCalendarInfoView;
