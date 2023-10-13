import { Movement } from "../../model/WatchInfoModel";
import EditableTextGridView from "../editableText/EditableTextGridView";

interface NxtwatchPropertiesProps {
  movementModel: Movement;
  setDetailsOnMovementModel: (field: string, newValue: string) => void;
}

const NxtwatchProperties = (props: NxtwatchPropertiesProps) => {
  return (
    <fieldset style={{ margin: "5px" }}>
      <legend>Properties</legend>
      <div
        style={{
          display: "flex",
        }}
      >
        <EditableTextGridView
          title="Type"
          value={props.movementModel.type}
          setValue={(newValue) =>
            props.setDetailsOnMovementModel("type", newValue)
          }
        />
        <EditableTextGridView
          title="name"
          value={props.movementModel.name}
          setValue={(newValue) =>
            props.setDetailsOnMovementModel("name", newValue)
          }
        />
        <EditableTextGridView
          title="Power Reserve"
          value={props.movementModel.power_reserve}
          setValue={(newValue) =>
            props.setDetailsOnMovementModel("power_reserve", newValue)
          }
        />
        <EditableTextGridView
          title="Frequency"
          value={props.movementModel.frequency}
          setValue={(newValue) =>
            props.setDetailsOnMovementModel("frequency", newValue)
          }
        />
        <EditableTextGridView
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

export default NxtwatchProperties;
