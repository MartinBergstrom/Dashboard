import React from "react";
import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import "./SportsCalendarInfoView.css";

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
                {value instanceof Date ? value.toDateString() : value}
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
