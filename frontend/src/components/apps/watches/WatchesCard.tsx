import { CardActionArea, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Watches.css";
import { Link } from "react-router-dom";

const WatchesCard = () => {
  const title = "Klockor";

  return (
    <Grid item xs={12}>
      <Link to="watches">
        <Card style={{ backgroundColor: "#0c1c12" }}>
          <CardActionArea>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  maxWidth: 300,
                  width: "100%",
                }}
              >
                <CardMedia
                  className="watch-logo"
                  component="img"
                  image="https://cdn.klocksnack.se/klocksnack_logo.png"
                  alt="green iguana"
                />
                <CardMedia
                  className="watch-logo"
                  component="img"
                  image="https://static.watchpatrol.net/static/explorer/img/watchpatrol_logo_2.png?e3ed54a977a4"
                  alt="green iguana"
                />
              </div>
            </div>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default WatchesCard;
