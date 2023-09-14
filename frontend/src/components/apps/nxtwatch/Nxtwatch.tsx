import { Button, Fade, Grid, IconButton } from "@mui/material";
import "./Nxwatch.css";
import mockEntries from "./mockEntries.json";
import { useState } from "react";
import Filter, { ViewModeType } from "./filter/Filter";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import NxtwatchModal from "./modal/nxtwatchModal";

const Nxtwatch = () => {
  const [viewMode, setViewMode] = useState(ViewModeType.LARGE);
  const [openModalId, setOpenModalId] = useState<string>("");
  const navigate = useNavigate();

  const setColumnWidthLarge = () => {
    switch (viewMode) {
      case ViewModeType.LIST:
        return 12;
      case ViewModeType.LARGE:
        return 4;
      case ViewModeType.SMALL:
        return 2;
    }
  };

  const setColumnWidthMid = () => {
    switch (viewMode) {
      case ViewModeType.LIST:
        return 12;
      case ViewModeType.LARGE:
        return 6;
      case ViewModeType.SMALL:
        return 4;
    }
  };

  const whenSearch = (searchTerm: string) => {
    console.log("search: " + searchTerm);
  };

  const whenChangeViewMode = (newViewMode: ViewModeType) => {
    setViewMode(newViewMode);
  };

  return (
    <>
      <IconButton
        color="primary"
        style={{
          position: "absolute",
          top: "10px",
          left: "5px",
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
      <Filter onSearch={whenSearch} onViewChange={whenChangeViewMode} />
      <div className="main">
        <Fade in timeout={1000}>
          <Grid container spacing={1}>
            {mockEntries.map((entry) => (
              <Grid
                key={entry.id}
                item
                xs={12}
                md={setColumnWidthMid()}
                lg={setColumnWidthLarge()}
              >
                <div className={viewMode}>
                  <p>Brand: {entry.brand}</p>
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={() => setOpenModalId(entry.id)}
                  >
                    Launch modal
                  </Button>
                  {openModalId == entry.id && (
                    <NxtwatchModal
                      open={true}
                      onClose={() => setOpenModalId("")}
                      name={entry.name ? entry.name : "no-name"}
                    />
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </div>
    </>
  );
};

export default Nxtwatch;
