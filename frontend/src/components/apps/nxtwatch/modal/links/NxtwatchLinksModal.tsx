import { Links } from "../../model/WatchInfoModel";
import EditableTextView from "../EditableTextView";

interface NxtwatchLinksModalProps {
  linksModel: Links;
  setDetailsOnLinksModel: (field: string, newValue: string) => void;
}

const NxtwatchLinksModal = (props: NxtwatchLinksModalProps) => {
  if (!props.linksModel) {
    return;
  }
  return (
    <div style={{ margin: "10px", backgroundColor: "#0C1F1E" }}>
      <legend>Links</legend>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EditableTextView
          title="Official"
          value={props.linksModel.brand}
          setValue={(newValue) =>
            props.setDetailsOnLinksModel("brand", newValue)
          }
        />
        <EditableTextView
          title="Authorized Dealer"
          value={props.linksModel.authorized_dealers.join(",")}
          setValue={(newValue) =>
            props.setDetailsOnLinksModel("authorized_dealers", newValue)
          }
        />
        <EditableTextView
          title="Grey Market"
          value={props.linksModel.grey_market.join(",")}
          setValue={(newValue) =>
            props.setDetailsOnLinksModel("grey_market", newValue)
          }
        />
        <EditableTextView
          title="Used Market"
          value={props.linksModel.used.join(",")}
          setValue={(newValue) =>
            props.setDetailsOnLinksModel("used", newValue)
          }
        />
      </div>
    </div>
  );
};

export default NxtwatchLinksModal;
