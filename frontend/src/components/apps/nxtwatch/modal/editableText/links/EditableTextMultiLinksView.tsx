import { TextField } from "@mui/material";
import { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import AddIcon from "@mui/icons-material/Add";
import "./EditableTextMultiLinksView.css";

interface EditableTextMultiLinksViewProps {
  title: string;
  links: string[];
  setValue: (newValue: string[]) => void;
}

const EditableTextMultiLinksView = (props: EditableTextMultiLinksViewProps) => {
  const [isEditing, setIsEditing] = useState<number>(-1);
  const [isHovering, setIsHovering] = useState(false);
  const [isNewRow, setIsNewRow] = useState(false);
  const [links, setLinks] = useState([...props.links]);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const updateLinkList = (index: number, newValue: string) => {
    if (index >= 0 && index < links.length) {
      const updatedLinks = [...links];
      updatedLinks[index] = newValue;
      setLinks(updatedLinks);
      props.setValue(updatedLinks);
    }
  };

  const addNewRow = (newValue: string) => {
    if (newValue && newValue.length > 0) {
      setLinks([...links, newValue]);
    }
    setIsNewRow(false);
  };

  return (
    <div
      className="modal-property-grey-div"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div style={{ cursor: "pointer" }}>
        <div
          style={{
            color: "#cfcfcf",
            padding: "8px",
            borderRadius: "4px",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
          }}
        >
          <div>
            <strong>{props.title}</strong>:
          </div>

          <div className="multi-links-container">
            <div className="multi-links-content">
              {links.map((value, index) => (
                <>
                  <div key={value} onClick={() => setIsEditing(index)}>
                    {isEditing === index ? (
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
                        value={value}
                        variant="standard"
                        onBlur={() => setIsEditing(-1)}
                        onChange={(e) => updateLinkList(index, e.target.value)}
                      />
                    ) : (
                      <>
                        {value}
                        <span onClick={() => openInNewTab(value)}>
                          <LaunchIcon
                            sx={{
                              marginLeft: "5px",
                              verticalAlign: "-4px",
                              fontSize: "1.2rem",
                              color: "white",
                              "&:hover": {
                                color: "lightblue",
                                cursor: "pointer",
                                scale: "1.2",
                              },
                            }}
                          />
                        </span>
                      </>
                    )}
                  </div>
                </>
              ))}
              {isNewRow && (
                <>
                  <div>
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
                      variant="standard"
                      onBlur={(e) => {
                        addNewRow(e.target.value);
                        e.target.value = "";
                      }}
                    />
                  </div>
                </>
              )}
            </div>

            <div
              className={
                isHovering
                  ? "editable-text-multi-links-add-symbol-div"
                  : "editable-text-multi-links-add-symbol-div-hidden"
              }
            >
              <span onClick={() => setIsNewRow(true)}>
                <AddIcon
                  sx={{
                    fontSize: "1.2rem",
                    "&:hover": {
                      color: "white",
                      cursor: "pointer",
                      scale: "1.2",
                    },
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditableTextMultiLinksView;
