import { WatchInfo } from "../model/WatchInfoModel";
import "./LargeNxtWatchCard.css";
import priorityBadge from "./PriorityBadge";
import { CrystalValueView } from "./customTextViews/crystal/CrystalValueView";
import { PriceTextView } from "./customTextViews/price/PriceTextView";

interface LargeNxtWatchCardProps {
  entry: WatchInfo;
  openModal: (id: string) => void;
  prio: number;
}

const LargeNxtWatchCard = ({
  entry,
  openModal,
  prio,
}: LargeNxtWatchCardProps) => {
  return (
    <div
      className={"large-view-mode common-view-mode"}
      onClick={() => openModal(entry._id)}
    >
      {priorityBadge("20px", prio)}
      <h3 className="card-header-h3">
        {entry.name ? entry.name : "Watch name"}
      </h3>
      <div className="grid-container-list-view">
        <div className="card-content-div">
          <span className="key-span">
            <b>Brand</b>
          </span>
          <span className="value-span">{entry.brand}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Diameter</b>
          </span>
          <span className="value-span">{entry.dimensions?.diameter}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Lug-to-lug </b>
          </span>
          <span className="value-span"> {entry.dimensions?.lug_to_lug}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>WR </b>
          </span>
          <span className="value-span">{entry.water_resistance}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Crystal </b>
          </span>
          <CrystalValueView crystal={entry.crystal} />
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Movement </b>
          </span>
          <span className="value-span"> {entry.movement?.name}</span>
        </div>
        <div className="card-content-div-centered">
          <PriceTextView price={entry.price?.msrp} />
        </div>
      </div>
    </div>
  );
};

export default LargeNxtWatchCard;
