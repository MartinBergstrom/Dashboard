import { Modal, Box } from "@mui/material";
import WatchInfo from "../model/WatchInfoModel";
import "./NxtWatchmodal.css";
import { useState } from "react";
import EditableTextView from "./EditableTextView";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  entry: WatchInfo;
}

const NxtwatchModal = (props: ModalProps) => {
  const [watchInfoModel, setWatchInfoModel] = useState<WatchInfo>({
    ...props.entry,
  });

  const handleFieldChangeString = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      [field]: newValue,
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
          backgroundColor: "#252525",
          boxShadow: "24",
        }}
      >
        <fieldset style={{ margin: "5px" }}>
          <legend>Details</legend>
          <div
            style={{
              display: "flex",
            }}
          >
            <EditableTextView
              title="Name"
              value={props.entry.name}
              setValue={(newValue) => handleFieldChangeString("name", newValue)}
            />
            <EditableTextView
              title="Brand"
              value={props.entry.brand}
              setValue={(newValue) =>
                handleFieldChangeString("brand", newValue)
              }
            />
            <EditableTextView
              title="Color"
              value={props.entry.main_color}
              setValue={(newValue) =>
                handleFieldChangeString("Comain_colorlor", newValue)
              }
            />
            <EditableTextView
              title="Water Resistance"
              value={props.entry.water_resistance}
              setValue={(newValue) =>
                handleFieldChangeString("water_resistance", newValue)
              }
            />
            <EditableTextView
              title="Rotating Bezel"
              value={props.entry.rotating_bezel}
              setValue={(newValue) =>
                handleFieldChangeString("rotating_bezel", newValue)
              }
            />
          </div>
        </fieldset>
      </Box>
    </Modal>
  );
};

export default NxtwatchModal;
