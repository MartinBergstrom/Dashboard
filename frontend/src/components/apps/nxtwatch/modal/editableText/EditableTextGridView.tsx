import { TextField } from "@mui/material";
import { useState } from "react";

interface EditableTextGridViewProps {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
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
      {isEditing ? (
        <TextField
          sx={{
            "& .MuiInputLabel-root": {
              padding: "0px 5px",
              margin: "-12px 0px 0px 0px",
            },
            "& .MuiInputBase-input": {
              padding: "1px 5px",
              margin: "-13px 0px 0px px",
            },
            ".MuiInput-underline": {
              width: "90%",
              margin: "0px 10px 0px 10px",
              padding: "0px 10px 0px 0px",
            },
          }}
          required
          autoFocus
          size="small"
          margin="dense"
          id="watch-anme"
          fullWidth
          label={props.title}
          value={props.value}
          variant="standard"
          onBlur={handleBlur}
          onChange={(e) => props.setValue(e.target.value)}
        />
      ) : (
        <div
          style={{
            color: "#cfcfcf",
            padding: "8px",
            borderRadius: "4px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <div>
            <strong>{props.title}</strong>:
          </div>
          <div>{props.value}</div>
        </div>
      )}
    </div>
  );
};

export default EditableTextGridView;
