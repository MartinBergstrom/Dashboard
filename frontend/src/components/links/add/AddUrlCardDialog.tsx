import {
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postNewUrlCard } from "../../api/LinkService";
import { NewUrlCardData } from "./NewUrlCardData";

interface UrlCardDialogProps {
  open: boolean;
  onClose: () => void;
}

const UrlCardDialog = ({ open, onClose }: UrlCardDialogProps) => {
  const [fullUrl, setFullUrl] = useState("");
  const [title, setTitle] = useState("");
  const [picUrl, setPictureUrl] = useState("");
  const queryClient = useQueryClient();

  const handleClose = () => {
    onClose();
  };

  const { mutate, isLoading } = useMutation(postNewUrlCard, {
    onSuccess: (data) => {
      console.log("Success! data: " + data);
      resetTextFieldStates();
      handleClose();
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("urlCards");
    },
  });

  const resetTextFieldStates = () => {
    setFullUrl("");
    setTitle("");
    setPictureUrl("");
  };

  const handleCloseAndAdd = () => {
    console.log(`fullURL: ${fullUrl}, title: ${title}, picUrl: ${picUrl}`);

    const newUrlCard: NewUrlCardData = {
      title,
      fullUrl,
      pictureUrl: picUrl,
    };
    mutate(newUrlCard);
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
          value={fullUrl}
          fullWidth
          variant="standard"
          onChange={(e) => setFullUrl(e.target.value)}
        />
        <TextField
          required
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          value={title}
          fullWidth
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="picture-url"
          label="Picture URL"
          value={picUrl}
          fullWidth
          variant="standard"
          onChange={(e) => setPictureUrl(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={isLoading}
          startIcon={
            isLoading ? <CircularProgress color="inherit" size={25} /> : null
          }
          onClick={handleCloseAndAdd}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UrlCardDialog;
