import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";

interface UrlCardDialogProps {
  open: boolean;
  onClose: () => void;
}

const UrlCardDialog = ({ open, onClose }: UrlCardDialogProps) => {
  const handleClose = () => {
    onClose();
  };

  const handleCloseAndAdd = () => {
    // send to database also here
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add new URL card</DialogTitle>
      <DialogContent>
        <TextField
          required
          autoFocus
          margin="dense"
          id="full-url"
          label="Full URL"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          autoFocus
          margin="dense"
          id="text-to-view"
          label="Text to view"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="picture-url"
          label="Picture URL"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleCloseAndAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UrlCardDialog;
