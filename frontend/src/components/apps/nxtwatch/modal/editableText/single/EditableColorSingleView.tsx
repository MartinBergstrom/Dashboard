import { useState } from "react";
import { MuiColorInput, MuiColorInputColors } from "mui-color-input";
import "./../EditableTextViews.css";

interface EditableColorSingleViewProps {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
  customValueViewElement?: JSX.Element;
}

const EditableColorSingleView = (props: EditableColorSingleViewProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currValue, setCurrValue] = useState(props.value);

  const renderValue = isEditing ? currValue : props.value;

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const onColorChange = (color: string, colors: MuiColorInputColors) => {
    props.setValue(color);
    setCurrValue(color);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      {isEditing ? (
        <MuiColorInput
          sx={{
            "& .MuiInputBase-input": {
              padding: "1px 5px",
              margin: "-130px 0px 0px px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              display: "none",
            },
          }}
          size="small"
          margin="dense"
          format="hex"
          isAlphaHidden
          value={currValue}
          onBlur={handleBlur}
          onChange={onColorChange}
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

export default EditableColorSingleView;
