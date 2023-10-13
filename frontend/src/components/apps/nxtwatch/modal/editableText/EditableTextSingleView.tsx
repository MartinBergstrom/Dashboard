import { TextField } from "@mui/material";
import { useState } from "react";

interface EditableTextSingleViewProps {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
}

const EditableTextSingleView = (props: EditableTextSingleViewProps) => {
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
          }}
        >
          <span style={{ marginRight: "20px" }}>
            <strong>{props.title}:</strong>
          </span>
          {props.value}
        </div>
      )}
    </div>
  );
};

export default EditableTextSingleView;
