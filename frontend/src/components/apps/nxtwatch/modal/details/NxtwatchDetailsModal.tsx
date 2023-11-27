import ColorValueView from "../../cards/customTextViews/color/ColorValueView";
import { CrystalValueView } from "../../cards/customTextViews/crystal/CrystalValueView";
import { WatchInfo } from "../../model/WatchInfoModel";
import EditableBooleanToggleSingleView from "../editableText/single/EditableBooleanToggleSingleView";
import EditableColorSingleView from "../editableText/single/EditableColorSingleView";
import EditableTextDropdownView from "../editableText/single/EditableTextDropdownView";
import EditableTextSingleView from "../editableText/single/EditableTextSingleView";
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
          <EditableColorSingleView
            title="Color"
            value={props.model.main_color}
            setValue={(newValue) =>
              props.setDetailsOnModel("main_color", newValue)
            }
            customValueViewElement={
              <ColorValueView color={props.model.main_color} />
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
            title="Crystal"
            value={props.model.crystal}
            setValue={(newValue) =>
              props.setDetailsOnModel("crystal", newValue)
            }
            customValueViewElement={
              <CrystalValueView crystal={props.model.crystal} />
            }
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableTextDropdownView
            title="Style"
            value={props.model.watch_style}
            valueSelection={["Diver", "Dress", "GADA", "Beater"]}
            setValue={(newValue) =>
              props.setDetailsOnModel("watch_style", newValue)
            }
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableTextSingleView
            title="Material"
            value={props.model.material}
            setValue={(newValue) =>
              props.setDetailsOnModel("material", newValue)
            }
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableTextSingleView
            title="Bezel Insert Material"
            value={props.model.bezel_insert_material}
            setValue={(newValue) =>
              props.setDetailsOnModel("bezel_insert_material", newValue)
            }
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableColorSingleView
            title="Bezel Insert Color"
            value={props.model.bezel_insert_color}
            setValue={(newValue) =>
              props.setDetailsOnModel("bezel_insert_color", newValue)
            }
            customValueViewElement={
              <ColorValueView color={props.model.bezel_insert_color} />
            }
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableBooleanToggleSingleView
            title="Rotating Bezel"
            value={props.model.rotating_bezel}
            setValue={(newValue) =>
              props.setDetailsOnModel("rotating_bezel", newValue)
            }
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableBooleanToggleSingleView
            title="Date Window"
            value={props.model.date_window}
            setValue={(newValue) =>
              props.setDetailsOnModel("date_window", newValue)
            }
          />
        </div>
        <div className="modal-details-grey-div">
          <EditableBooleanToggleSingleView
            title="Day Window"
            value={props.model.day_window}
            setValue={(newValue) =>
              props.setDetailsOnModel("day_window", newValue)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NxtwatchDetailsModal;
