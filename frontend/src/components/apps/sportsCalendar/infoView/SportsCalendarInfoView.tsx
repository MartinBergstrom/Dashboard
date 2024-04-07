import { SportsCalendarEvent } from "../model/SportsCalendarModels";
import "./SportsCalendarInfoView.css";

interface SportsCalendarInfoViewProps {
  selectedEvent?: SportsCalendarEvent;
}

const SportsCalendarInfoView = (props: SportsCalendarInfoViewProps) => {
  return (
    <>
      <div className="wrapper">
        <div className="info-view">
          <div className="key-value title-bar">
            <span className="title-value">{props.selectedEvent?.name}</span>
          </div>
          <div className="info-view-main">
            <div className="key">Description</div>
            <div className="value">{props.selectedEvent?.description}</div>
            <div className="key">Start day</div>
            <div className="value">
              {props.selectedEvent?.start_date.toDateString()}
            </div>
            <div className="key">End day</div>
            <div className="value">
              {props.selectedEvent?.start_date.toDateString()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsCalendarInfoView;
