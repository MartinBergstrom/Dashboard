import { Modal, Box, Backdrop, Button, CircularProgress } from "@mui/material";
import { WatchInfo } from "../model/WatchInfoModel";
import "./NxtWatchmodal.css";
import { useState } from "react";
import NxtwatchDetailsModal from "./details/NxtwatchDetailsModal";
import NxtwatchMovementModal from "./movement/NxtwatchMovementModal";
import NxtwatchPriceModal from "./price/NxtwatchPriceModal";
import NxtwatchDimensionsModal from "./dimensions/NxtwatchDimensionsModal";
import NxtwatchLinksModal from "./links/NxtwatchLinksModal";
import { SkeletonWatchInfo } from "../model/WatchInfoSkeleton";
import { useMutation, useQueryClient } from "react-query";
import { postNewWatchInfo, putWatchInfo } from "../service/NxtwatchService";
import NxtwatchBraceletModal from "./bracelet/NxtwatchBraceletModal";
import { ServiceOperationStatus } from "../Nxtwatch";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  setSnackBar: (message: string, severity: ServiceOperationStatus) => void;
  existingEntry?: WatchInfo;
}

const NxtwatchModal = (props: ModalProps) => {
  const [isEdited, setIsEdited] = useState(false);
  const [watchInfoModel, setWatchInfoModel] = useState<WatchInfo>(
    props.existingEntry ? { ...props.existingEntry } : SkeletonWatchInfo
  );
  const queryClient = useQueryClient();

  const { mutate: mutatePost, isLoading: isLoadingPost } = useMutation(
    postNewWatchInfo,
    {
      onSuccess: (data) => {
        console.log("Success on POST! data: " + data);
        cleanUpAndClose();
        props.setSnackBar(
          "Successfully created new watch info",
          ServiceOperationStatus.SUCCESS
        );
      },
      onError: () => {
        alert("there was an error");
        props.setSnackBar(
          "Something went wrong when creating new watch info",
          ServiceOperationStatus.FAILURE
        );
      },
      onSettled: () => {
        queryClient.invalidateQueries("watches");
      },
    }
  );

  const { mutate: mutatePut, isLoading: isLoadingPut } = useMutation(
    putWatchInfo,
    {
      onSuccess: (data) => {
        console.log("Success on PUT! data: " + data);
        cleanUpAndClose();
        props.setSnackBar(
          "Successfully updated watch info for " + watchInfoModel.name,
          ServiceOperationStatus.SUCCESS
        );
      },
      onError: () => {
        alert("there was an error");
        props.setSnackBar(
          "Something went wrong when creating new watch info for " +
            watchInfoModel.name,
          ServiceOperationStatus.FAILURE
        );
      },
      onSettled: () => {
        queryClient.invalidateQueries("watches");
      },
    }
  );

  const cleanUpAndClose = () => {
    setWatchInfoModel(SkeletonWatchInfo);
    props.onClose();
  };

  const onSubmitClick = () => {
    console.log("clicked submit");
    mutatePost(watchInfoModel);
  };

  const onRestoreClick = () => {
    console.log("restoring model");
    setWatchInfoModel(
      props.existingEntry ? { ...props.existingEntry } : SkeletonWatchInfo
    );
    setIsEdited(false);
  };

  const updateStateIsEdited = () => {
    if (props.existingEntry) {
      setIsEdited(true);
    }
  };

  const handleFieldChangeDetails = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      [field]: newValue,
    }));
    updateStateIsEdited();
  };

  const handleFieldChangePrice = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      price: {
        ...previous.price,
        [field]: newValue,
      },
    }));
    updateStateIsEdited();
  };

  const handleFieldChangeBraceletStrap = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      bracelet_strap: {
        ...previous.bracelet_strap,
        [field]: newValue,
      },
    }));
    updateStateIsEdited();
  };

  const handleFieldChangeMovement = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      movement: {
        ...previous.movement,
        [field]: newValue,
      },
    }));
    updateStateIsEdited();
  };

  const handleFieldChangeDimensions = (field: string, newValue: string) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      dimensions: {
        ...previous.dimensions,
        [field]: newValue,
      },
    }));
    updateStateIsEdited();
  };

  const handleFieldChangeLinks = (
    field: string,
    newValue: string | string[]
  ) => {
    setWatchInfoModel((previous) => ({
      ...previous,
      links: {
        ...previous.links,
        [field]: newValue,
      },
    }));
    updateStateIsEdited();
  };

  return (
    <Modal
      open={props.open}
      onClose={() => {
        if (props.existingEntry && isEdited) {
          mutatePut(watchInfoModel);
        } else {
          cleanUpAndClose();
        }
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{}}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 200,
          style: {
            backgroundColor: "rgba(219,219,219,0.2)",
            backdropFilter: "blur(3px)",
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "70%",
          height: "auto",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#000000",
          boxShadow: "24",
          borderRadius: "3px",
        }}
      >
        <h3 style={{ marginLeft: "20px", color: "gray" }}>
          {props.existingEntry
            ? watchInfoModel.name
            : "Add details for new watch"}
        </h3>
        <NxtwatchDetailsModal
          model={watchInfoModel}
          setDetailsOnModel={handleFieldChangeDetails}
        />
        <div className="grid-container-modal">
          <NxtwatchMovementModal
            movementModel={watchInfoModel.movement}
            setDetailsOnMovementModel={handleFieldChangeMovement}
          />
          <NxtwatchPriceModal
            priceModel={watchInfoModel.price}
            setDetailsOnPriceModel={handleFieldChangePrice}
          />

          <NxtwatchDimensionsModal
            dimensionsModel={watchInfoModel.dimensions}
            setDetailsOnDimensionsModel={handleFieldChangeDimensions}
          />
        </div>
        <div className="grid-container-modal-2-column">
          <NxtwatchBraceletModal
            braceletModel={watchInfoModel.bracelet_strap}
            setDetailsOnBraceletModel={handleFieldChangeBraceletStrap}
          />
          <NxtwatchLinksModal
            linksModel={watchInfoModel.links}
            setDetailsOnLinksModel={handleFieldChangeLinks}
          />
        </div>

        {props.existingEntry ? (
          isEdited ? (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0px 5px 15px 5px",
                }}
              >
                <div
                  style={{
                    margin: "0px 5px",
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    onClick={onRestoreClick}
                  >
                    Restore
                  </Button>
                </div>
              </div>
            </>
          ) : null
        ) : (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0px 5px 15px 5px",
              }}
            >
              <div
                style={{
                  margin: "0px 5px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onSubmitClick}
                  disabled={isLoadingPost}
                  startIcon={
                    isLoadingPost ? (
                      <CircularProgress color="inherit" size={25} />
                    ) : null
                  }
                >
                  Submit
                </Button>
              </div>
              <div
                style={{
                  margin: "0px 5px",
                }}
              >
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    console.log("clicked cancel");
                    cleanUpAndClose();
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default NxtwatchModal;
