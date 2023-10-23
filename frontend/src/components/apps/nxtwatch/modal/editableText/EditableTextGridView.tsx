import { TextField } from "@mui/material";
import { useState } from "react";

interface EditableTextGridViewProps {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
  gridTemplateColumns?: string;
}

const EditableTextGridView = (props: EditableTextGridViewProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <div
        style={{
          color: "#cfcfcf",
          padding: "8px",
          borderRadius: "4px",
          display: "grid",
          gridTemplateColumns: props.gridTemplateColumns ?? "repeat(2, 1fr)",
        }}
      >
        <div>
          <strong>{props.title}</strong>:
        </div>
        {isEditing ? (
          <TextField
            sx={{
              "& .MuiInputBase-input": {
                padding: "1px 5px",
                margin: "0px",
              },
              ".MuiInput-underline": {
                width: "90%",
              },
              margin: "-1px 0px 0px 0px",
            }}
            required
            autoFocus
            fullWidth
            size="small"
            margin="dense"
            id="watch-anme"
            value={props.value}
            variant="standard"
            onBlur={handleBlur}
            onChange={(e) => props.setValue(e.target.value)}
          />
        ) : (
          <div>{props.value}</div>
        )}
      </div>
    </div>
  );
};

export default EditableTextGridView;
