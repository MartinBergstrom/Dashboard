import { Modal, Box, Typography } from "@mui/material";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  name: string;
}

const NxtwatchModal = (props: ModalProps) => {
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
          backgroundColor: "grey",
          boxShadow: "24",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          NAME OF WATCH IS : {props.name}{" "}
        </Typography>
      </Box>
    </Modal>
  );
};

export default NxtwatchModal;
