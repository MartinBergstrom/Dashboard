import { useState } from "react";
import { Switch } from "@mui/material";

interface EditableBooleanToggleSingleViewProps {
  title: string;
  value: string;
  setValue: (newValue: string) => void;
}

function toBoolean(value: string): boolean {
  if (value) {
    return value.toLowerCase() === "true" || value.toLowerCase() === "yes";
  }
  return false;
}

const EditableBooleanToggleSingleView = (
  props: EditableBooleanToggleSingleViewProps
) => {
  const [currValue, setCurrValue] = useState<boolean>(toBoolean(props.value));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(String(event.target.checked));
    setCurrValue(event.target.checked);
  };

  return (
    <div>
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
        <Switch checked={currValue} onChange={handleChange} size="small" />
      </div>
    </div>
  );
};

export default EditableBooleanToggleSingleView;
