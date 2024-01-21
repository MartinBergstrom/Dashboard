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
import { getAllWatchInfo, getPriority, setWatchPriority } from "./service/NxtwatchService";
import { useQuery, useMutation, useQueryClient  } from "react-query";
import { WatchInfo } from "./model/WatchInfoModel";
import NxtwatchModal from "./modal/NxtwatchModal";
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
  const [watchPrio, setWatchPrio] = useState<WatchPriority>();
  const navigate = useNavigate();
  const {
    data: fetchedData,
    isLoading,
    isError,
  } = useQuery<WatchInfo[]>("watches", getAllWatchInfo);
  const queryClient = useQueryClient();

  const { data: fetchedPrioData } = useQuery<WatchPriority>(
    "watchesprio",
    getPriority
  );

  const { mutate: mutatePut, isLoading: isLoadingPut } = useMutation(
    setWatchPriority,
    {
      onSuccess: (data) => {
        console.log("Success on PUT! data: " + data);
   
      },
      onError: () => {
        alert("there was an error");
      },
      onSettled: () => {
        queryClient.invalidateQueries("watchesprio");
      },
    }
  );

  // Check https://github.com/clauderic/dnd-kit for drag and drop stuff
  useEffect(() => {
    if (!isLoading && !isError && fetchedData && fetchedPrioData) {
      const sortedList: WatchInfo[] = [];
      setWatchPrio(fetchedPrioData);
      fetchedPrioData.priorities.forEach((prio) => {
        const matchingItem = fetchedData.find((data) => data._id === prio);
        if (matchingItem) {
          sortedList.push(matchingItem);
        }
      });

      setSortedList(sortedList);
    }
  }, [isLoading, isError, fetchedData, fetchedPrioData]);

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

  const prioClick = (up: boolean, id: string) => {
      if (up) {
        console.log("Moving prio up");
        moveUpInPriortyList(id);
      } else {
        console.log("Moving prio down");
      }
  }

  const moveUpInPriortyList = (id: string) => {
    if (watchPrio) {
      const newPriorityList = [...watchPrio.priorities];
      const index = watchPrio.priorities.findIndex((prio) => prio === id);

      if (index > 0) {
        const temp = newPriorityList[index - 1];
        newPriorityList[index - 1] = id;
        newPriorityList[index] = temp;

        const newWatchprio = {
          ...watchPrio,
          priorities: newPriorityList,
        };
        setWatchPrio(newWatchprio);
        mutatePut(newWatchprio);
      }
    }
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
        return (
          <ListNxtWatchCard
            entry={entry}
            openModal={setModaltest}
            prio={index}
            prioClick={prioClick}
          />
        );
      case ViewModeType.LARGE:
        return (
          <LargeNxtWatchCard
            entry={entry}
            openModal={setModaltest}
            prio={index}
            prioClick={prioClick}
          />
        );
      case ViewModeType.SMALL:
        return (
          <SmallNxtWatchCard
            entry={entry}
            openModal={setModaltest}
            prio={index}
            prioClick={prioClick}
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
