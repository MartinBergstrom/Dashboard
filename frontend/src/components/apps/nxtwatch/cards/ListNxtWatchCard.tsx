import { WatchInfo } from "../model/WatchInfoModel";
import "./ListNxtWatchCard.css";
import PriorityBadge from "./PriorityBadge";
import ColorValueView from "./customTextViews/color/ColorValueView";
import { CrystalValueView } from "./customTextViews/crystal/CrystalValueView";
import { PriceTextView } from "./customTextViews/price/PriceTextView";

interface ListNxtWatchCardProps {
  entry: WatchInfo;
  openModal: (id: string) => void;
  prio: number;
  prioClick: (up: boolean) => void;
}

const ListNxtWatchCard = ({
  entry,
  openModal,
  prio,
  prioClick
}: ListNxtWatchCardProps) => {
  return (
    <div
      className={"list-view-mode common-view-mode"}
      onClick={() => openModal(entry._id)}
    >
      <PriorityBadge prio={prio} prioClick={prioClick}/>
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
            <b>Model nbr</b>
          </span>
          <span className="value-span">
            {entry.model_numbers ? entry.model_numbers[0] : "<>"}
          </span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Dial color </b>
          </span>
          <ColorValueView color={entry.main_color} />
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Watch style</b>
          </span>
          <span className="value-span">{entry.watch_style}</span>
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
            <b>Thickness </b>
          </span>
          <span className="value-span"> {entry.dimensions?.thickness}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Rotating bezel </b>
          </span>
          <span className="value-span"> {entry.rotating_bezel}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Material </b>
          </span>
          <span className="value-span"> {entry.material}</span>
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
            <b>Bezel insert material </b>
          </span>
          <span className="value-span"> {entry.bezel_insert_material}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Bezel insert color</b>
          </span>
          <ColorValueView color={entry.bezel_insert_color} />
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Movement </b>
          </span>
          <span className="value-span"> {entry.movement?.name}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Power reserve </b>
          </span>
          <span className="value-span">{entry.movement?.power_reserve}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Band type </b>
          </span>
          <span className="value-span">{entry.bracelet_strap?.type}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Band material </b>
          </span>
          <span className="value-span"> {entry.bracelet_strap?.material}</span>
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Band color</b>
          </span>
          <ColorValueView color={entry.bracelet_strap?.color} />
        </div>
        <div className="card-content-div">
          <span className="key-span">
            <b>Clasp type </b>
          </span>
          <span className="value-span">{entry.bracelet_strap?.clasp_type}</span>
        </div>
        <div className="card-content-div-centered">
          <PriceTextView price={entry.price?.msrp} />
        </div>
      </div>
    </div>
  );
};

export default ListNxtWatchCard;
