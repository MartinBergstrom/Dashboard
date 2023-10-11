import { Modal, Box } from "@mui/material";
import { WatchInfo } from "../model/WatchInfoModel";
import "./NxtWatchmodal.css";
import { useState } from "react";
import NxtwatchDetailsModal from "./details/NxtwatchDetailsModal";
import NxtwatchMovementModal from "./movement/NxtwatchMovementModal";
import NxtwatchPriceModal from "./price/NxtwatchPriceModal";
import NxtwatchDimensionsModal from "./dimensions/NxtwatchDimensionsModal";
import NxtwatchLinksModal from "./links/NxtwatchLinksModal";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  entry: WatchInfo;
}

const NxtwatchModal = (props: ModalProps) => {
  const [watchInfoModel, setWatchInfoModel] = useState<WatchInfo>({
    ...props.entry,
  });

  const handleFieldChangeDetails = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      [field]: newValue,
    }));
  };

  const handleFieldChangePrice = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      price: {
        ...previous.price,
        [field]: newValue,
      },
    }));
  };

  const handleFieldChangeMovement = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      movement: {
        ...previous.movement,
        [field]: newValue,
      },
    }));
  };

  const handleFieldChangeDimensions = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      dimensions: {
        ...previous.dimensions,
        [field]: newValue,
      },
    }));
  };

  const handleFieldChangeLinks = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      links: {
        ...previous.links,
        [field]: newValue,
      },
    }));
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "70%",
          height: "70%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#0F0F0F",
          boxShadow: "24",
        }}
      >
        <NxtwatchDetailsModal
          model={watchInfoModel}
          setDetailsOnModel={handleFieldChangeDetails}
        />{" "}
        <div className="grid-container-modal">
          <NxtwatchPriceModal
            priceModel={watchInfoModel.price}
            setDetailsOnPriceModel={handleFieldChangePrice}
          />
          <NxtwatchMovementModal
            movementModel={watchInfoModel.movement}
            setDetailsOnMovementModel={handleFieldChangeMovement}
          />
          <NxtwatchDimensionsModal
            dimensionsModel={watchInfoModel.dimensions}
            setDetailsOnDimensionsModel={handleFieldChangeDimensions}
          />
        </div>
        <NxtwatchLinksModal
          linksModel={watchInfoModel.links}
          setDetailsOnLinksModel={handleFieldChangeLinks}
        />
      </Box>
    </Modal>
  );
};

export default NxtwatchModal;
