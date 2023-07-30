import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./AddUrlCardButton.css";

interface UrlCardButtonProps {
  onDialogOpen: () => void;
}

const UrlCardButton = ({ onDialogOpen }: UrlCardButtonProps) => {
  const onClick = () => {
    console.log(" I am click");
    onDialogOpen();
  };

  return (
    <div className="floating_btn">
      <Fab
        className="floating_btn"
        color="primary"
        aria-label="add"
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default UrlCardButton;
