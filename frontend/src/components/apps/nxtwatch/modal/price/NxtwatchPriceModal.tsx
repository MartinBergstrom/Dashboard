import { Price } from "../../model/WatchInfoModel";
import EditableTextGridView from "../editableText/EditableTextGridView";
import "./NxtwatchPriceModal.css";

interface NxtwatchPriceModalProps {
  priceModel: Price;
  setDetailsOnPriceModel: (field: string, newValue: string) => void;
}

const NxtwatchPriceModal = (props: NxtwatchPriceModalProps) => {
  if (!props.priceModel) {
    return;
  }
  return (
    <div style={{ margin: "10px 5px 10px 5px" }}>
      <legend>Price</legend>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="modal-price-property-div">
          <EditableTextGridView
            title="Msrp"
            value={props.priceModel.msrp}
            setValue={(newValue) =>
              props.setDetailsOnPriceModel("msrp", newValue)
            }
          />
        </div>
        <div className="modal-price-property-div">
          <EditableTextGridView
            title="Authorized Dealer"
            value={props.priceModel.authorized_dealer}
            setValue={(newValue) =>
              props.setDetailsOnPriceModel("authorized_dealer", newValue)
            }
          />{" "}
        </div>

        <div className="modal-price-property-div">
          <EditableTextGridView
            title="Grey Market"
            value={props.priceModel.grey_market}
            setValue={(newValue) =>
              props.setDetailsOnPriceModel("grey_market", newValue)
            }
          />{" "}
        </div>

        <div className="modal-price-property-div">
          <EditableTextGridView
            title="Used Market"
            value={props.priceModel.used}
            setValue={(newValue) =>
              props.setDetailsOnPriceModel("used", newValue)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NxtwatchPriceModal;
