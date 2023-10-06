import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ViewModeType } from "../filter/Filter";

interface AddNewWatchButtonProps {
  viewMode: ViewModeType;
  onDialogOpen: () => void;
}

const AddNewWatchButton = (props: AddNewWatchButtonProps) => {
  const getColor = () => {
    switch (props.viewMode) {
      case ViewModeType.LARGE:
        return "#0b494e";
      case ViewModeType.SMALL:
        return " #0b4e2e";
      case ViewModeType.LIST:
        return "#0b374e";
    }
  };
  const onClick = () => {
    props.onDialogOpen();
  };

  return (
    <div>
      <Fab
        sx={{
          width: "40px",
          height: "40px",
          backgroundColor: getColor(),
          "&:hover": {
            backgroundColor: "lightblue",
            transform: "scale(1.2)",
          },
        }}
        aria-label="add"
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddNewWatchButton;
