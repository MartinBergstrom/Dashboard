import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import "./../EditableTextViews.css";

interface EditableTextSingleViewProps {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
  customValueViewElement?: JSX.Element;
}

const EditableTextSingleView = (props: EditableTextSingleViewProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currValue, setCurrValue] = useState(props.value);

  const renderValue = isEditing ? currValue : props.value;

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    props.setValue(e.target.value);
    setCurrValue(e.target.value);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {isEditing ? (
        <TextField
          sx={{
            "& .MuiInputLabel-root": {
              padding: "0px 5px",
              scale: "0.8",
              margin: "-8px 0px 0px 0px",
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
          value={currValue}
          variant="standard"
          onBlur={handleBlur}
          onChange={(e) => onChange(e)}
        />
      ) : (
        <div className="editable-text-common-rounded">
          <span style={{ marginRight: "20px" }}>
            <strong>{props.title}:</strong>
          </span>
          {props.customValueViewElement
            ? props.customValueViewElement
            : renderValue}
        </div>
      )}
    </div>
  );
};

export default EditableTextSingleView;
