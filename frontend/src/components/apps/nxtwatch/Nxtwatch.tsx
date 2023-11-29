import {
  Alert,
  AlertColor,
  CircularProgress,
  Fade,
  Grid,
  IconButton,
  Snackbar,
} from "@mui/material";
import "./Nxwatch.css";
import { useEffect, useState } from "react";
import Filter, { ViewModeType } from "./filter/Filter";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddNewWatchButton from "./add/AddNewWatchButton";
import LargeNxtWatchCard from "./cards/LargeNxtWatchCard";
import ListNxtWatchCard from "./cards/ListNxtWatchCard";
import SmallNxtWatchCard from "./cards/SmallNxtWatchCard";
import { getAllWatchInfo, getPriority } from "./service/NxtwatchService";
import { useQuery } from "react-query";
import { WatchInfo } from "./model/WatchInfoModel";
import NxtwatchModal from "./modal/NxtwatchModal";
import { withPriority } from "./cards/WithPriority";
import { WatchPriority } from "./model/WatchPriority";

export enum ServiceOperationStatus {
  SUCCESS,
  FAILURE,
}

const Nxtwatch = () => {
  const [viewMode, setViewMode] = useState(ViewModeType.LARGE);
  const [openModalId, setOpenModalId] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>("success");
  const [sortedList, setSortedList] = useState<WatchInfo[]>();
  const navigate = useNavigate();
  const {
    data: fetchedData,
    isLoading,
    isError,
  } = useQuery<WatchInfo[]>("watches", getAllWatchInfo);

  const { data: fetchedPrioData } = useQuery<WatchPriority>(
    "watchesprio",
    getPriority
  );

  // Check https://github.com/clauderic/dnd-kit for drag and drop stuff
  useEffect(() => {
    if (!isLoading && !isError && fetchedData && fetchedPrioData) {
      const sortedList: WatchInfo[] = [];
      fetchedPrioData.priorities.forEach((prio) => {
        const matchingItem = fetchedData.find((data) => data._id === prio);
        if (matchingItem) {
          sortedList.push(matchingItem);
        }
      });

      setSortedList(sortedList);
    }
  }, [isLoading, isError, fetchedData]);

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

  const handleSnackbarClose = () => {
    console.log("closing snackbar");
    setSnackbarOpen(false);
  };

  const handleSnackBar = (
    message: string,
    operation: ServiceOperationStatus
  ) => {
    setSnackBarMessage(message);
    switch (operation) {
      case ServiceOperationStatus.SUCCESS:
        setAlertSeverity("success");
        break;
      case ServiceOperationStatus.FAILURE:
        setAlertSeverity("error");
        break;
    }
    setSnackbarOpen(true);
  };

  const setModaltest = (id: string) => {
    setOpenModalId(id);
  };

  const renderCard = (entry: WatchInfo, index: number) => {
    switch (viewMode) {
      case ViewModeType.LIST:
        const ListWithPrio = withPriority(ListNxtWatchCard);
        return (
          <ListWithPrio
            entry={entry}
            openModal={setModaltest}
            prio={index}
            size="30px"
          />
        );
      case ViewModeType.LARGE:
        const LargeWithPrio = withPriority(LargeNxtWatchCard);
        return (
          <LargeWithPrio
            entry={entry}
            openModal={setModaltest}
            prio={index}
            size="20px"
          />
        );
      case ViewModeType.SMALL:
        const SmallWithPrio = withPriority(SmallNxtWatchCard);
        return (
          <SmallWithPrio
            entry={entry}
            openModal={setModaltest}
            prio={index}
            size="15px"
          />
        );
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

    if (!sortedList) {
      return null;
    }

    return (
      <div className="main">
        <Fade in timeout={1000}>
          <Grid container spacing={1}>
            {sortedList.map((entry, index) => (
              <Grid
                key={entry._id}
                item
                xs={12}
                md={setColumnWidthMid()}
                lg={setColumnWidthLarge()}
              >
                {renderCard(entry, ++index)}
                {openModalId == entry._id && (
                  <NxtwatchModal
                    open={true}
                    onClose={() => setOpenModalId("")}
                    setSnackBar={handleSnackBar}
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
      <NxtwatchModal
        open={dialogOpen}
        onClose={handleDialogClose}
        setSnackBar={handleSnackBar}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Nxtwatch;
