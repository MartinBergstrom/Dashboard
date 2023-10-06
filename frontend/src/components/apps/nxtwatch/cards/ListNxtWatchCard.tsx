import WatchInfo from "../model/WatchInfoModel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DiamondIcon from "@mui/icons-material/Diamond";
import "./ListNxtWatchCard.css";
import ColorTextView from "./customTextViews/color/ColorTextView";

interface ListNxtWatchCardProps {
  entry: WatchInfo;
  openModal: (id: string) => void;
}

const ListNxtWatchCard = ({ entry, openModal }: ListNxtWatchCardProps) => {
  return (
    <div
      className={"list-view-mode common-view-mode"}
      onClick={() => openModal(entry.id)}
    >
      <h3 className="card-header-h3">
        {entry.name ? entry.name : "Watch name"}
      </h3>
      <div className="grid-container">
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Brand: </b>
            </span>
            {entry.brand}
          </span>
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Model nbr: </b>
            </span>
            {entry.model_numbers ? entry.model_numbers[0] : "<>"}
          </span>
        </div>
        <div className="card-content-div">
          <ColorTextView displayName="Dial color" color={entry.main_color} />
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Watch style: </b>
            </span>
            {entry.watch_style}
          </span>
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Diameter: </b>
            </span>
            {entry.dimensions?.diameter}
          </span>
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Lug-to-lug: </b>
            </span>
            {entry.dimensions?.lug_to_lug}
          </span>
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Thickness: </b>
            </span>
            {entry.dimensions?.thickness}
          </span>{" "}
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Rotating bezel: </b>
            </span>
            {entry.rotating_bezel}
          </span>{" "}
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Material: </b>
            </span>
            {entry.material}
          </span>{" "}
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>WR: </b>
            </span>
            {entry.water_resistance}
          </span>{" "}
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Crystal: </b>
            </span>
            {entry.crystal}{" "}
            <DiamondIcon
              sx={{
                verticalAlign: "-4px",
                fontSize: "1.2rem",
                color: "#4ACBF2",
              }}
            />
          </span>{" "}
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Bezel insert material: </b>
            </span>
            {entry.bezel_insert_material}
          </span>
        </div>
        <div className="card-content-div">
          <ColorTextView
            displayName="Bezel insert color"
            color={entry.bezel_insert_color}
          />{" "}
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Movement: </b>
            </span>
            {entry.movement?.name}
          </span>
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Power reserve: </b>
            </span>
            {entry.movement?.power_reserve}
          </span>
        </div>

        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Band type: </b>
            </span>
            {entry.bracelet_strap?.type}
          </span>
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Band material: </b>
            </span>
            {entry.bracelet_strap?.material}
          </span>
        </div>
        <div className="card-content-div">
          <ColorTextView
            displayName="Band color"
            color={entry.bracelet_strap?.color}
          />{" "}
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span">
              <b>Clasp type: </b>
            </span>
            {entry.bracelet_strap?.clasp_type}
          </span>
        </div>
        <div className="card-content-div">
          <span className="key-value-span">
            <span className="key-span" style={{ color: "yellow" }}>
              <AttachMoneyIcon
                sx={{
                  verticalAlign: "-4px",
                  fontSize: "1.2rem",
                  color: "yellow",
                }}
              />
              <b>Price: </b>
            </span>
            <b>{entry.price?.msrp}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListNxtWatchCard;
