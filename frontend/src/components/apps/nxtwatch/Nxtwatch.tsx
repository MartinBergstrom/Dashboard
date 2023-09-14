import { Fade, Grid, IconButton } from "@mui/material";
import "./Nxwatch.css";
import mockEntries from "./mockEntries.json";
import { useState } from "react";
import Filter, { ViewModeType } from "./filter/Filter";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Nxtwatch = () => {
  const [viewMode, setViewMode] = useState(ViewModeType.LARGE);
  const navigate = useNavigate();

  const setColumnWidth = () => {
    switch (viewMode) {
      case ViewModeType.LIST:
        return 12;
      case ViewModeType.LARGE:
        return 4;
      case ViewModeType.SMALL:
        return 2;
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
              <Grid key={entry.id} item xs={6} md={4} lg={setColumnWidth()}>
                <div className={viewMode}>Brand: {entry.brand}</div>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </div>
    </>
  );
};

export default Nxtwatch;
