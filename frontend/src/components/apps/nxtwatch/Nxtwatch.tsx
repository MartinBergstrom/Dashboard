import { Button, Fade, Grid, IconButton } from "@mui/material";
import "./Nxwatch.css";
import mockEntries from "./mockEntries.json";
import { useState } from "react";
import Filter, { ViewModeType } from "./filter/Filter";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import NxtwatchModal from "./modal/nxtwatchModal";
import AddNewWatchButton from "./add/AddNewWatchButton";
import AddNewWatchDialog from "./add/AddNewWatchDialog";

const Nxtwatch = () => {
  const [viewMode, setViewMode] = useState(ViewModeType.LARGE);
  const [openModalId, setOpenModalId] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState(false);
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

  const handleDialogClose = () => {
    setDialogOpen(false);
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
                <div
                  className={viewMode + " common-view-mode"}
                  onClick={() => setOpenModalId(entry.id)}
                >
                  <div>
                    <h3 className="card-header-h3">
                      {entry.name ? entry.name : "Watch name"}
                    </h3>
                    <span className="key-value-span">
                      <span className="key-span">
                        <b>Brand: </b>
                      </span>
                      {entry.brand}
                    </span>
                    <span className="key-value-span">
                      <span className="key-span">
                        <b>Diameter: </b>
                      </span>
                      {entry.dimensions?.diameter}mm
                    </span>
                    <span className="key-value-span">
                      <span className="key-span">
                        <b>Lug-to-lug: </b>
                      </span>
                      {entry.dimensions?.lug_to_lug}mm
                    </span>
                  </div>
                  <div>
                    <span className="key-value-span">
                      <span className="key-span">
                        <b>WR: </b>
                      </span>
                      {entry.water_resistance}
                    </span>
                    <span className="key-value-span">
                      <span className="key-span">
                        <b>Crystal: </b>
                      </span>
                      {entry.crystal}
                    </span>
                    <span className="key-value-span">
                      <span className="key-span">
                        <b>Movement: </b>
                      </span>
                      {entry.movement?.name}
                    </span>
                  </div>
                </div>
                {openModalId == entry.id && (
                  <NxtwatchModal
                    open={true}
                    onClose={() => setOpenModalId("")}
                    name={entry.name ? entry.name : "no-name"}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Fade>
      </div>
      <AddNewWatchButton onDialogOpen={() => setDialogOpen(true)} />
      <AddNewWatchDialog open={dialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default Nxtwatch;
