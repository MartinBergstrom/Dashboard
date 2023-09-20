import { Fade, Grid, IconButton } from "@mui/material";
import "./Nxwatch.css";
import mockEntries from "./mockEntries.json";
import { useState } from "react";
import Filter, { ViewModeType } from "./filter/Filter";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import NxtwatchModal from "./modal/nxtwatchModal";
import AddNewWatchButton from "./add/AddNewWatchButton";
import AddNewWatchDialog from "./add/AddNewWatchDialog";
import LargeNxtWatchCard from "./cards/LargeNxtWatchCard";
import ListNxtWatchCard from "./cards/ListNxtWatchCard";
import SmallNxtWatchCard from "./cards/SmallNxtWatchCard";

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

  const setModaltest = (id: string) => {
    console.log("SETTING ID: " + id);
    setOpenModalId(id);
  };

  const renderCard = (entry: any) => {
    switch (viewMode) {
      case ViewModeType.LIST:
        return <ListNxtWatchCard entry={entry} openModal={setModaltest} />;
      case ViewModeType.LARGE:
        return <LargeNxtWatchCard entry={entry} openModal={setModaltest} />;
      case ViewModeType.SMALL:
        return <SmallNxtWatchCard entry={entry} openModal={setModaltest} />;
    }
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
                {renderCard(entry)}
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
