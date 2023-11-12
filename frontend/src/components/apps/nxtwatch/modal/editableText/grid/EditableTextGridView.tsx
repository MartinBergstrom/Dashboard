import { TextField } from "@mui/material";
import { useState } from "react";
import "./../EditableTextViews.css";
import { StyledTextFieldForGrid } from "./CustomGridViewStyledComponents";

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
        className="editable-text-common-rounded"
        style={{
          display: "grid",
          gridTemplateColumns: props.gridTemplateColumns ?? "repeat(2, 1fr)",
        }}
      >
        <div>
          <strong>{props.title}</strong>:
        </div>
        {isEditing ? (
          <StyledTextFieldForGrid
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
