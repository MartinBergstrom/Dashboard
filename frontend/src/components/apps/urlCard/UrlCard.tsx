import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";

interface UrlProps {
  title: string;
  url: string;
  imageUrl: string;
}

const UrlCard = (props: UrlProps) => {
  return (
    <Grid item xs={6}>
      <Card
        onClick={() => (window.location.href = props.url)}
        style={{ backgroundColor: "#0c1a1c" }}
      >
        <CardActionArea>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ paddingTop: "5px" }}>
              <CardMedia
                component="img"
                height="100"
                src={props.imageUrl}
                alt="green iguana"
              />
            </div>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default UrlCard;
