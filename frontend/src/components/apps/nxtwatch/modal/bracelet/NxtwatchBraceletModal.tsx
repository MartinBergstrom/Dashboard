import { BraceletStrap, Price } from "../../model/WatchInfoModel";
import EditableTextGridView from "../editableText/EditableTextGridView";

interface NxtwatchBraceletModalProps {
  braceletModel: BraceletStrap;
  setDetailsOnBraceletModel: (field: string, newValue: string) => void;
}

const NxtwatchBraceletModal = (props: NxtwatchBraceletModalProps) => {
  if (!props.braceletModel) {
    return;
  }
  return (
    <div style={{ margin: "10px 5px 10px 15px" }}>
      <legend>Bracelet/Strap</legend>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="modal-price-property-div">
          <EditableTextGridView
            title="Type"
            value={props.braceletModel.type}
            setValue={(newValue) =>
              props.setDetailsOnBraceletModel("type", newValue)
            }
          />
        </div>
        <div className="modal-price-property-div">
          <EditableTextGridView
            title="Material"
            value={props.braceletModel.material}
            setValue={(newValue) =>
              props.setDetailsOnBraceletModel("material", newValue)
            }
          />
        </div>

        <div className="modal-price-property-div">
          <EditableTextGridView
            title="Color"
            value={props.braceletModel.color}
            setValue={(newValue) =>
              props.setDetailsOnBraceletModel("color", newValue)
            }
          />
        </div>

        <div className="modal-price-property-div">
          <EditableTextGridView
            title="Clasp Quality"
            value={props.braceletModel.clasp_quality}
            setValue={(newValue) =>
              props.setDetailsOnBraceletModel("clasp_quality", newValue)
            }
          />
        </div>
        <div className="modal-price-property-div">
          <EditableTextGridView
            title="Clasp Type"
            value={props.braceletModel.clasp_type}
            setValue={(newValue) =>
              props.setDetailsOnBraceletModel("clasp_type", newValue)
            }
          />
        </div>
        <div className="modal-price-property-div">
          <EditableTextGridView
            title="Dive Exention"
            value={props.braceletModel.dive_extension}
            setValue={(newValue) =>
              props.setDetailsOnBraceletModel("dive_extension", newValue)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NxtwatchBraceletModal;
