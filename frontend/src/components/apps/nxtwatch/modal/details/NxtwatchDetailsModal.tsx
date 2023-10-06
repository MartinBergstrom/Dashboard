import EditableTextView from "../EditableTextView";
import { WatchInfo } from "../../model/WatchInfoModel";

interface NxtwatchDetailsModalProps {
  model: WatchInfo;
  setDetailsOnModel: (field: string, newValue: string) => void;
}

const NxtwatchDetailsModal = (props: NxtwatchDetailsModalProps) => {
  return (
    <fieldset style={{ margin: "5px" }}>
      <legend>Details</legend>
      <div
        style={{
          display: "flex",
        }}
      >
        <EditableTextView
          title="Name"
          value={props.model.name}
          setValue={(newValue) => props.setDetailsOnModel("name", newValue)}
        />
        <EditableTextView
          title="Brand"
          value={props.model.brand}
          setValue={(newValue) => props.setDetailsOnModel("brand", newValue)}
        />
        <EditableTextView
          title="Color"
          value={props.model.main_color}
          setValue={(newValue) =>
            props.setDetailsOnModel("Comain_colorlor", newValue)
          }
        />
        <EditableTextView
          title="Water Resistance"
          value={props.model.water_resistance}
          setValue={(newValue) =>
            props.setDetailsOnModel("water_resistance", newValue)
          }
        />
        <EditableTextView
          title="Rotating Bezel"
          value={props.model.rotating_bezel}
          setValue={(newValue) =>
            props.setDetailsOnModel("rotating_bezel", newValue)
          }
        />
      </div>
    </fieldset>
  );
};

export default NxtwatchDetailsModal;
