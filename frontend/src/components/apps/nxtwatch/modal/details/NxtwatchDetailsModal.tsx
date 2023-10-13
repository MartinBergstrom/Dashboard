import { WatchInfo } from "../../model/WatchInfoModel";
import EditableTextSingleView from "../editableText/EditableTextSingleView";
import "./NxtwatchDetailsModals.css";

interface NxtwatchDetailsModalProps {
  model: WatchInfo;
  setDetailsOnModel: (field: string, newValue: string) => void;
}

const NxtwatchDetailsModal = (props: NxtwatchDetailsModalProps) => {
  return (
    <div className="modal-area">
      <div>Details</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div className="modal-details-grey-div">
          <EditableTextSingleView
            title="Name"
            value={props.model.name}
            setValue={(newValue) => props.setDetailsOnModel("name", newValue)}
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableTextSingleView
            title="Brand"
            value={props.model.brand}
            setValue={(newValue) => props.setDetailsOnModel("brand", newValue)}
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableTextSingleView
            title="Color"
            value={props.model.main_color}
            setValue={(newValue) =>
              props.setDetailsOnModel("Comain_colorlor", newValue)
            }
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableTextSingleView
            title="Water Resistance"
            value={props.model.water_resistance}
            setValue={(newValue) =>
              props.setDetailsOnModel("water_resistance", newValue)
            }
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableTextSingleView
            title="Rotating Bezel"
            value={props.model.rotating_bezel}
            setValue={(newValue) =>
              props.setDetailsOnModel("rotating_bezel", newValue)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NxtwatchDetailsModal;
