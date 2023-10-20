import { WatchInfo } from "../model/WatchInfoModel";
import "./SmallNxtWatchCard.css";
import { PriceTextView } from "./customTextViews/price/PriceTextView";

interface SmallNxtWatchCardProps {
  entry: WatchInfo;
  openModal: (id: string) => void;
}

const SmallNxtWatchCard = ({ entry, openModal }: SmallNxtWatchCardProps) => {
  return (
    <div
      className={"small-view-mode common-view-mode"}
      onClick={() => openModal(entry._id)}
    >
      <div>
        <h3 className="card-header-h3">
          {entry.name ? entry.name : "Watch name"}
        </h3>
        <span className="key-value-span">
          <span className="key-span">
            <b>Brand: </b>
          </span>
          {entry.brand}
        </span>
        <span className="key-value-span">
          <span className="key-span">
            <b>Diameter: </b>
          </span>
          {entry.dimensions?.diameter}
        </span>
        <span className="key-value-span">
          <span className="key-span">
            <b>Lug-to-lug: </b>
          </span>
          {entry.dimensions?.lug_to_lug}
        </span>
      </div>
      <div>
        <span className="key-value-span">
          <span className="key-span">
            <b>WR: </b>
          </span>
          {entry.water_resistance}
        </span>
        <span className="key-value-span">
          <span className="key-span">
            <b>Crystal: </b>
          </span>
          {entry.crystal}
        </span>
        <span className="key-value-span">
          <span className="key-span">
            <b>Movement: </b>
          </span>
          {entry.movement?.name}
        </span>
        <PriceTextView price={entry.price?.msrp} />
      </div>
    </div>
  );
};

export default SmallNxtWatchCard;
