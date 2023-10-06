import { CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./Nxwatch.css";
import { Link } from "react-router-dom";

const NxtwatchCard = () => {
  const title = "Nxtwatch";

  return (
    <Grid item xs={12}>
      <Link to="nxtwatch" style={{ textDecoration: "inherit" }}>
        <Card
          style={{
            backgroundColor: "#183D27",
          }}
        >
          <CardActionArea>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 250,
              }}
            >
              <CardContent
                style={{
                  fontWeight: "bold",
                  fontSize: "7em",
                  textDecoration: "none",
                }}
              >
                {title}
              </CardContent>
            </div>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default NxtwatchCard;
