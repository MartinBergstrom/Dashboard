import { Fade, Grid } from "@mui/material";

import mockEntries from "./mockEntries.json";

const Nxtwatch = () => {
  return (
    <Fade in timeout={1000}>
      <Grid container spacing={1}>
        {mockEntries.map((entry) => (
          <Grid item xs={2}>
            <div
              style={{
                backgroundColor: "blue",
              }}
            >
              Brand: {entry.brand}
            </div>
          </Grid>
        ))}
      </Grid>
    </Fade>
  );
};

export default Nxtwatch;
