import { Dimensions } from "../../model/WatchInfoModel";
import EditableTextView from "../EditableTextView";

interface NxtwatchDimensionsModalProps {
  dimensionsModel: Dimensions;
  setDetailsOnDimensionsModel: (field: string, newValue: string) => void;
}

const NxtwatchDimensionsModal = (props: NxtwatchDimensionsModalProps) => {
  if (!props.dimensionsModel) {
    return;
  }
  return (
    <div style={{ margin: "10px", backgroundColor: "#0F1F0C" }}>
      <div>Dimensions TODO pic</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EditableTextView
          title="Diameter"
          value={props.dimensionsModel.diameter}
          setValue={(newValue) =>
            props.setDetailsOnDimensionsModel("diameter", newValue)
          }
        />
        <EditableTextView
          title="Lug to Lug"
          value={props.dimensionsModel.lug_to_lug}
          setValue={(newValue) =>
            props.setDetailsOnDimensionsModel("lug_to_lug", newValue)
          }
        />
        <EditableTextView
          title="Thickness"
          value={props.dimensionsModel.thickness}
          setValue={(newValue) =>
            props.setDetailsOnDimensionsModel("thickness", newValue)
          }
        />
        <EditableTextView
          title="Lug Width"
          value={props.dimensionsModel.lug_width}
          setValue={(newValue) =>
            props.setDetailsOnDimensionsModel("lug_width", newValue)
          }
        />
      </div>
    </div>
  );
};

export default NxtwatchDimensionsModal;
