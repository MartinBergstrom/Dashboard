import { Price } from "../../model/WatchInfoModel";
import EditableTextView from "../EditableTextView";

interface NxtwatchPriceModalProps {
  priceModel: Price;
  setDetailsOnPriceModel: (field: string, newValue: string) => void;
}

const NxtwatchPriceModal = (props: NxtwatchPriceModalProps) => {
  if (!props.priceModel) {
    return;
  }
  return (
    <div style={{ margin: "10px" , backgroundColor: "#191F0C"}}>
      <legend>Price</legend>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <EditableTextView
          title="Msrp"
          value={props.priceModel.msrp}
          setValue={(newValue) =>
            props.setDetailsOnPriceModel("msrp", newValue)
          }
        />
        <EditableTextView
          title="Authorized Dealer"
          value={props.priceModel.authorized_dealer}
          setValue={(newValue) =>
            props.setDetailsOnPriceModel("authorized_dealer", newValue)
          }
        />
        <EditableTextView
          title="Grey Market"
          value={props.priceModel.grey_market}
          setValue={(newValue) =>
            props.setDetailsOnPriceModel("grey_market", newValue)
          }
        />
        <EditableTextView
          title="Used Market"
          value={props.priceModel.used}
          setValue={(newValue) =>
            props.setDetailsOnPriceModel("used", newValue)
          }
        />
      </div>
    </div>
  );
};

export default NxtwatchPriceModal;
