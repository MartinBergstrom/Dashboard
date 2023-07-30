import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useQuery } from "react-query";
import Card from "@mui/material/Card";
import { getDefault } from "../api/LinkService";

interface UrlProps {
  title: string;
  url: string;
  imageUrl: string;
}

const UrlCard = (props: UrlProps) => {
  const query = useQuery("users", getDefault);

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
              {/*{query.data}*/}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default UrlCard;
