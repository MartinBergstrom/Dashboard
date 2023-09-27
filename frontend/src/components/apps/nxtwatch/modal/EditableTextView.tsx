import { TextField } from "@mui/material";
import { useState } from "react";

interface EditableTextProps {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
}

const EditableTextView = (props: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {isEditing ? (
        <TextField
          sx={{
            "& .MuiInputLabel-root": {
              padding: "0px 5px",
              margin: "-15px 0px 0px 0px",
            },
            "& .MuiInputBase-input": {
              padding: "0px 5px",
              margin: "-15px 0px 0px 0px",
            },
          }}
          required
          autoFocus
          size="small"
          margin="dense"
          id="watch-anme"
          label="Watch name"
          value={props.value}
          variant="standard"
          onBlur={handleBlur}
          onChange={(e) => props.setValue(e.target.value)}
        />
      ) : (
        <div
          style={{
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <strong>{props.title}</strong>: {props.value}
        </div>
      )}
    </div>
  );
};

export default EditableTextView;
