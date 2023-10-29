import { Dimensions } from "../../model/WatchInfoModel";
import EditableTextView from "../editableText/EditableTextGridView";

interface NxtwatchDimensionsModalProps {
  dimensionsModel: Dimensions;
  setDetailsOnDimensionsModel: (field: string, newValue: string) => void;
}

const NxtwatchDimensionsModal = (props: NxtwatchDimensionsModalProps) => {
  if (!props.dimensionsModel) {
    return;
  }
  return (
    <div style={{ margin: "10px 15px 10px 5px" }}>
      <div>Dimensions</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="modal-property-grey-div">
          <EditableTextView
            title="Diameter"
            value={props.dimensionsModel.diameter}
            setValue={(newValue) =>
              props.setDetailsOnDimensionsModel("diameter", newValue)
            }
          />
        </div>
        <div className="modal-property-grey-div">
          <EditableTextView
            title="Lug to Lug"
            value={props.dimensionsModel.lug_to_lug}
            setValue={(newValue) =>
              props.setDetailsOnDimensionsModel("lug_to_lug", newValue)
            }
          />
        </div>{" "}
        <div className="modal-property-grey-div">
          <EditableTextView
            title="Thickness"
            value={props.dimensionsModel.thickness}
            setValue={(newValue) =>
              props.setDetailsOnDimensionsModel("thickness", newValue)
            }
          />
        </div>{" "}
        <div className="modal-property-grey-div">
          <EditableTextView
            title="Lug Width"
            value={props.dimensionsModel.lug_width}
            setValue={(newValue) =>
              props.setDetailsOnDimensionsModel("lug_width", newValue)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NxtwatchDimensionsModal;
