import { CardActionArea, CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import QuestionMark from "../../../assets/question_mark.png";

const TestCard = () => {
  const title = "Test card";

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
            >
              <CardMedia
                component="img"
                height="140"
                src={QuestionMark}
                alt="green iguana"
              />
            </div>
          </div>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default TestCard;
