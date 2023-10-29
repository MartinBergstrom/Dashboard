import { Movement } from "../../model/WatchInfoModel";
import EditableTextGridView from "../editableText/EditableTextGridView";

interface NxtwatchMovementModalProps {
  movementModel: Movement;
  setDetailsOnMovementModel: (field: string, newValue: string) => void;
}

const NxtwatchMovementModal = (props: NxtwatchMovementModalProps) => {
  if (!props.movementModel) {
    return;
  }
  return (
    <div style={{ margin: "10px 5px 10px 15px" }}>
      <legend>Movement</legend>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="modal-property-grey-div">
          <EditableTextGridView
            title="Type"
            value={props.movementModel.type}
            setValue={(newValue) =>
              props.setDetailsOnMovementModel("type", newValue)
            }
          />
        </div>
        <div className="modal-property-grey-div">
          <EditableTextGridView
            title="name"
            value={props.movementModel.name}
            setValue={(newValue) =>
              props.setDetailsOnMovementModel("name", newValue)
            }
          />
        </div>
        <div className="modal-property-grey-div">
          <EditableTextGridView
            title="Power Reserve"
            value={props.movementModel.power_reserve}
            setValue={(newValue) =>
              props.setDetailsOnMovementModel("power_reserve", newValue)
            }
          />
        </div>{" "}
        <div className="modal-property-grey-div">
          <EditableTextGridView
            title="Frequency"
            value={props.movementModel.frequency}
            setValue={(newValue) =>
              props.setDetailsOnMovementModel("frequency", newValue)
            }
          />
        </div>{" "}
        <div className="modal-property-grey-div">
          <EditableTextGridView
            title="Jewels"
            value={props.movementModel.jewels}
            setValue={(newValue) =>
              props.setDetailsOnMovementModel("jewels", newValue)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NxtwatchMovementModal;
