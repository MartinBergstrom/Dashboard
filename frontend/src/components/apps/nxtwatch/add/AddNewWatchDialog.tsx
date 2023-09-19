import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";

interface Watch {
  name: string;
  brand: string;
}

interface AddNewWatchDialogProps {
  open: boolean;
  onClose: () => void;
}
const AddNewWatchDialog = (props: AddNewWatchDialogProps) => {
  const initialWatch: Watch = {
    name: "",
    brand: "",
  };
  const [watch, setWatch] = useState<Watch>(initialWatch);

  const handleChange = (property: keyof Watch, value: string) => {
    setWatch((prevWatch) => ({
      ...prevWatch,
      [property]: value,
    }));
  };

  const handleClose = () => {
    props.onClose();
  };

  const handleCloseAndAdd = () => {};

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      fullWidth={true}
      maxWidth={"lg"}
    >
      <DialogTitle>Add new watch</DialogTitle>
      <DialogContent>
        <TextField
          required
          autoFocus
          margin="dense"
          id="watch-anme"
          label="Watch name"
          value={watch.name}
          fullWidth
          variant="standard"
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <TextField
          required
          autoFocus
          margin="dense"
          id="watch-brand"
          label="Watch brand name"
          value={watch.brand}
          fullWidth
          variant="standard"
          onChange={(e) => handleChange("brand", e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleCloseAndAdd}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNewWatchDialog;
