import { Movement } from "../../model/WatchInfoModel";
import EditableTextView from "../EditableTextView";

interface NxtwatchMovementModalProps {
  movementModel: Movement;
  setDetailsOnMovementModel: (field: string, newValue: string) => void;
}

const NxtwatchMovementModal = (props: NxtwatchMovementModalProps) => {
  if (!props.movementModel) {
    return;
  }
  return (
    <fieldset style={{ margin: "5px" }}>
      <legend>Movement</legend>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EditableTextView
          title="Type"
          value={props.movementModel.type}
          setValue={(newValue) =>
            props.setDetailsOnMovementModel("type", newValue)
          }
        />
        <EditableTextView
          title="name"
          value={props.movementModel.name}
          setValue={(newValue) =>
            props.setDetailsOnMovementModel("name", newValue)
          }
        />
        <EditableTextView
          title="Power Reserve"
          value={props.movementModel.power_reserve}
          setValue={(newValue) =>
            props.setDetailsOnMovementModel("power_reserve", newValue)
          }
        />
        <EditableTextView
          title="Frequency"
          value={props.movementModel.frequency}
          setValue={(newValue) =>
            props.setDetailsOnMovementModel("frequency", newValue)
          }
        />
        <EditableTextView
          title="Jewels"
          value={props.movementModel.jewels}
          setValue={(newValue) =>
            props.setDetailsOnMovementModel("jewels", newValue)
          }
        />
      </div>
    </fieldset>
  );
};

export default NxtwatchMovementModal;
