import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import "./../EditableTextViews.css";

interface EditableTextDropdownViewProps {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
  valueSelection: string[];
  gridTemplateColumns?: string;
}

const EditableTextDropdownView = (props: EditableTextDropdownViewProps) => {
  const [isSelecting, seIsSelecting] = useState(false);
  const [isEditingFreeText, setIsEditingFreeText] = useState(false);
  const [freeTextValue, setFreeTextValue] = useState("");

  const handleClick = () => {
    seIsSelecting(true);
  };

  const onBlur = () => {
    seIsSelecting(false);
  };

  const onBlurFreeText = () => {
    props.setValue(freeTextValue);
    setFreeTextValue("");
    setIsEditingFreeText(false);
    seIsSelecting(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    props.setValue(event.target.value);
  };

  const handleFreeTextOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFreeTextValue(e.target.value);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="editable-text-common-rounded">
        <span style={{ marginRight: "20px" }}>
          <strong>{props.title}:</strong>
        </span>
        {isSelecting ? (
          isEditingFreeText ? (
            <>
              <TextField
                sx={{
                  "& .MuiInputBase-input": {
                    padding: "1px 5px",
                    margin: "0px",
                  },
                  ".MuiInput-underline": {
                    width: "100%",
                  },
                  margin: "-1px 0px 0px 0px",
                }}
                required
                autoFocus
                size="small"
                margin="dense"
                id="watch-anme"
                value={props.value}
                variant="standard"
                onBlur={onBlurFreeText}
                onChange={handleFreeTextOnChange}
              />
            </>
          ) : (
            <>
              <Select
                sx={{
                  "& .MuiInputBase-input": {
                    padding: "0px 5px",
                  },
                }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={props.value}
                size="small"
                onBlur={onBlur}
                onChange={handleChange}
              >
                {props.valueSelection.map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
                <MenuItem key={"99"} onClick={() => setIsEditingFreeText(true)}>
                  {"Other..."}
                </MenuItem>
              </Select>
            </>
          )
        ) : (
          <span>{props.value}</span>
        )}
      </div>
    </div>
  );
};

export default EditableTextDropdownView;
