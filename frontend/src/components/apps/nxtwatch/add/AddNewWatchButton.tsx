import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddNewWatchButtonProps {
  onDialogOpen: () => void;
}

const AddNewWatchButton = (props: AddNewWatchButtonProps) => {
  const onClick = () => {
    props.onDialogOpen();
  };

  return (
    <div>
      <Fab
        sx={{ width: "40px", height: "40px" }}
        color="primary"
        aria-label="add"
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddNewWatchButton;
