import { Links } from "../../model/WatchInfoModel";
import EditableTextGridView from "../editableText/EditableTextGridView";

interface NxtwatchLinksModalProps {
  linksModel: Links;
  setDetailsOnLinksModel: (field: string, newValue: string) => void;
}

const NxtwatchLinksModal = (props: NxtwatchLinksModalProps) => {
  if (!props.linksModel) {
    return;
  }
  return (
    <div style={{ margin: "-25px 15px 15px 15px" }}>
      <legend>Links</legend>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="modal-property-grey-div">
          <EditableTextGridView
            title="Official"
            value={props.linksModel.brand}
            setValue={(newValue) =>
              props.setDetailsOnLinksModel("brand", newValue)
            }
          />
        </div>
        <div className="modal-property-grey-div">
          <EditableTextGridView
            title="Authorized Dealer"
            value={props.linksModel.authorized_dealers.join(",")}
            setValue={(newValue) =>
              props.setDetailsOnLinksModel("authorized_dealers", newValue)
            }
          />{" "}
        </div>{" "}
        <div className="modal-property-grey-div">
          <EditableTextGridView
            title="Grey Market"
            value={props.linksModel.grey_market.join(",")}
            setValue={(newValue) =>
              props.setDetailsOnLinksModel("grey_market", newValue)
            }
          />{" "}
        </div>{" "}
        <div className="modal-property-grey-div">
          <EditableTextGridView
            title="Used Market"
            value={props.linksModel.used.join(",")}
            setValue={(newValue) =>
              props.setDetailsOnLinksModel("used", newValue)
            }
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default NxtwatchLinksModal;
