import { Links } from "../../model/WatchInfoModel";
import EditableTextGridView from "../editableText/EditableTextGridView";
import EditableTextMultiLinksView from "../editableText/links/EditableTextMultiLinksView";

interface NxtwatchLinksModalProps {
  linksModel: Links;
  setDetailsOnLinksModel: (field: string, newValue: string | string[]) => void;
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
            gridTemplateColumns="1fr 2fr"
          />
        </div>
        <div className="modal-property-grey-div">
          <EditableTextMultiLinksView
            title="Authorized dealers"
            links={props.linksModel.authorized_dealers}
            setValue={(newValue) =>
              props.setDetailsOnLinksModel("authorized_dealers", newValue)
            }
          />
        </div>
        <div className="modal-property-grey-div">
          <EditableTextMultiLinksView
            title="Grey Market"
            links={props.linksModel.grey_market}
            setValue={(newValue) =>
              props.setDetailsOnLinksModel("grey_market", newValue)
            }
          />{" "}
        </div>{" "}
        <div className="modal-property-grey-div">
          <EditableTextMultiLinksView
            title="Used Market"
            links={props.linksModel.used}
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
