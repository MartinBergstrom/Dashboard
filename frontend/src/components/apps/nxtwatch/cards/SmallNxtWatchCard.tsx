import "./SmallNxtWatchCard.css";

interface SmallNxtWatchCardProps {
  entry: any;
  openModal: (id: string) => void;
}

const SmallNxtWatchCard = ({ entry, openModal }: SmallNxtWatchCardProps) => {
  return (
    <div
      className={"small-view-mode common-view-mode"}
      onClick={() => openModal(entry.id)}
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
          {entry.dimensions?.diameter}mm
        </span>
        <span className="key-value-span">
          <span className="key-span">
            <b>Lug-to-lug: </b>
          </span>
          {entry.dimensions?.lug_to_lug}mm
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
      </div>
    </div>
  );
};

export default SmallNxtWatchCard;
