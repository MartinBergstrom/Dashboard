import { CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

const SportsCalendarCard = () => {
  const title = "Sports Calendar";

  return (
    <Grid item xs={12}>
      <Link to="sportscalendar" style={{ textDecoration: "inherit" }}>
        <Card
          style={{
            backgroundColor: "#103761",
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

export default SportsCalendarCard;
