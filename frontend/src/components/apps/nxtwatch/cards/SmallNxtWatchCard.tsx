import { WatchInfo } from "../model/WatchInfoModel";
import PriorityBadge from "./PriorityBadge";
import "./SmallNxtWatchCard.css";
import { PriceTextView } from "./customTextViews/price/PriceTextView";

interface SmallNxtWatchCardProps {
  entry: WatchInfo;
  openModal: (id: string) => void;
  prio: number;
}

const SmallNxtWatchCard = ({
  entry,
  openModal,
  prio,
}: SmallNxtWatchCardProps) => {
  return (
    <div
      className={"small-view-mode common-view-mode"}
      onClick={() => openModal(entry._id)}
    >
      <PriorityBadge prio={prio} />
      <div>
        <h3 className="card-header-h3-small">
          {entry.name ? entry.name : "Watch name"}
        </h3>
        <div>
          <div className="key-span">
            <b>Brand: </b>
          </div>
          {entry.brand}
        </div>
        <div>
          <div className="key-span">
            <b>Diameter: </b>
          </div>
          {entry.dimensions?.diameter}
        </div>
        <div>
          <div className="key-span">
            <b>Lug-to-lug: </b>
          </div>
          {entry.dimensions?.lug_to_lug}
        </div>
        <div>
          <div>
            <div className="key-span">
              <b>WR: </b>
            </div>
            {entry.water_resistance}
          </div>
        </div>
        <div>
          <div className="key-span">
            <b>Movement: </b>
          </div>
          {entry.movement?.name}
        </div>
        <div className="card-content-div-centered">
          <PriceTextView price={entry.price?.msrp} />
        </div>
      </div>
    </div>
  );
};

export default SmallNxtWatchCard;
