import { CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TestCard = () => {
  const title = "app test";

  return (
    <Grid item xs={12}>
      <Card>
        <CardActionArea>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                maxWidth: 110,
                width: "100%",
              }}
            ></div>
          </div>

          <CardContent>
            <Typography gutterBottom variant="h1" component="div">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default TestCard;
