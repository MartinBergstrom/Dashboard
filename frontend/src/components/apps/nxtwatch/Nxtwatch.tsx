import { Fade, Grid } from "@mui/material";
import "./Nxwatch.css";
import mockEntries from "./mockEntries.json";
import { useState } from "react";
import Filter from "./filter/Filter";

const Nxtwatch = () => {
  const [viewMode, setViewMode] = useState("largeView");

  const setColumnWidth = () => {
    switch (viewMode) {
      case "listView":
        return 1;
      case "largeView":
        return 4;
      case "smallView":
        return 2;
    }
  };

  const whenSearch = (searchTerm: string) => {
    console.log("search: " + searchTerm);
  };

  return (
    <>
      <Filter onSearch={whenSearch} />
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
