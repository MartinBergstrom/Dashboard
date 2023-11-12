import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import "./../EditableTextViews.css";
import { StyledTextFieldForGrid } from "./CustomGridViewStyledComponents";

interface EditableTextGridDropdownViewProps {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
  valueSelection: string[];
  gridTemplateColumns?: string;
}

const EditableTextGridDropdownView = (
  props: EditableTextGridDropdownViewProps
) => {
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
        {isSelecting ? (
          isEditingFreeText ? (
            <>
              <StyledTextFieldForGrid
                required
                autoFocus
                fullWidth
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
          <div>{props.value}</div>
        )}
      </div>
    </div>
  );
};

export default EditableTextGridDropdownView;
