import { CircularProgress, Fade, Grid, IconButton } from "@mui/material";
import "./Nxwatch.css";
import { useState } from "react";
import Filter, { ViewModeType } from "./filter/Filter";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddNewWatchButton from "./add/AddNewWatchButton";
import LargeNxtWatchCard from "./cards/LargeNxtWatchCard";
import ListNxtWatchCard from "./cards/ListNxtWatchCard";
import SmallNxtWatchCard from "./cards/SmallNxtWatchCard";
import { getAllWatchInfo } from "./service/WatchInfoService";
import { useQuery } from "react-query";
import { WatchInfo } from "./model/WatchInfoModel";
import NxtwatchModal from "./modal/NxtwatchModal";

const Nxtwatch = () => {
  const [viewMode, setViewMode] = useState(ViewModeType.LARGE);
  const [openModalId, setOpenModalId] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const {
    data: fetchedData,
    isLoading,
    isError,
  } = useQuery<WatchInfo[]>("watches", getAllWatchInfo);

  const setColumnWidthLarge = () => {
    switch (viewMode) {
      case ViewModeType.LIST:
        return 3;
      case ViewModeType.LARGE:
        return 2;
      case ViewModeType.SMALL:
        return 1;
    }
  };

  const setColumnWidthMid = () => {
    switch (viewMode) {
      case ViewModeType.LIST:
        return 4;
      case ViewModeType.LARGE:
        return 4;
      case ViewModeType.SMALL:
        return 3;
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
    setOpenModalId(id);
  };

  const renderCard = (entry: WatchInfo) => {
    switch (viewMode) {
      case ViewModeType.LIST:
        return <ListNxtWatchCard entry={entry} openModal={setModaltest} />;
      case ViewModeType.LARGE:
        return <LargeNxtWatchCard entry={entry} openModal={setModaltest} />;
      case ViewModeType.SMALL:
        return <SmallNxtWatchCard entry={entry} openModal={setModaltest} />;
    }
  };

  const renderMainArea = () => {
    if (isLoading) {
      return (
        <div
          style={{
            margin: "10%",
          }}
        >
          <CircularProgress size={"6rem"} color="primary" />
        </div>
      );
    }

    if (isError) {
      return (
        <div
          style={{
            margin: "10%",
          }}
        >
          Error fetching data
        </div>
      );
    }

    if (!fetchedData) {
      return null;
    }

    return (
      <div className="main">
        <Fade in timeout={1000}>
          <Grid container spacing={1}>
            {fetchedData.map((entry) => (
              <Grid
                key={entry._id}
                item
                xs={12}
                md={setColumnWidthMid()}
                lg={setColumnWidthLarge()}
              >
                {renderCard(entry)}
                {openModalId == entry._id && (
                  <NxtwatchModal
                    open={true}
                    onClose={() => setOpenModalId("")}
                    existingEntry={entry}
                  />
                )}
              </Grid>
            ))}
          </Grid>
        </Fade>
      </div>
    );
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
        onClick={() => navigate(-1)}
      >
        <KeyboardBackspaceIcon />
      </IconButton>
      <Filter onSearch={whenSearch} onViewChange={whenChangeViewMode} />
      {renderMainArea()}
      <AddNewWatchButton
        onDialogOpen={() => setDialogOpen(true)}
        viewMode={viewMode}
      />
      <NxtwatchModal open={dialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default Nxtwatch;
