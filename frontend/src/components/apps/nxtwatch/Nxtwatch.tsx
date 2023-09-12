import { Fade, Grid } from "@mui/material";
import "./Nxwatch.css";
import mockEntries from "./mockEntries.json";
import { useState } from "react";
import Filter, { ViewModeType } from "./filter/Filter";

const Nxtwatch = () => {
  const [viewMode, setViewMode] = useState(ViewModeType.LARGE);

  const setColumnWidth = () => {
    switch (viewMode) {
      case ViewModeType.LIST:
        return 1;
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
