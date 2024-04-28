import {
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Zoom,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinkIcon from "@mui/icons-material/Link";
import Card from "@mui/material/Card";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteUrlCard } from "../api/LinkService";

interface UrlProps {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
}

const UrlCard = (props: UrlProps) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const open = Boolean(anchorElement);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteUrlCard, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("urlCards");
      console.log(data);
    },
  });

  const handleDelete = (id: string) => {
    setIsDeleting(true);
    deleteMutation.mutate(id);
    handleMenuClose();
  };

  const handeMenuItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorElement(null);
  };

  return (
    <Grid item xs={6}>
      <Zoom in timeout={600}>
        <Card style={{ backgroundColor: "#0c1a1c", position: "relative" }}>
          <div>
            <CardHeader
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 1,
              }}
              action={
                <IconButton
                  aria-label="settings"
                  onClick={handeMenuItemClick}
                  style={{
                    padding: "0px",
                  }}
                >
                  <MoreVertIcon style={{ fontSize: "22px" }} />
                </IconButton>
              }
            />
            <Menu
              open={open}
              anchorEl={anchorElement}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleDelete(props.id)}>Remove</MenuItem>
            </Menu>
          </div>

          {isDeleting ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                zIndex: 2,
              }}
            >
              <CircularProgress size={"4rem"} color="error" thickness={6} />
            </div>
          ) : null}
          <CardActionArea onClick={() => window.open(props.url, '_blank')}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ paddingTop: "5px" }}>
                {props.imageUrl ? (
                  <CardMedia
                    component="img"
                    height="100"
                    src={props.imageUrl}
                  />
                ) : (
                  <LinkIcon style={{ fontSize: "50px", color: "lightgray" }} />
                )}
              </div>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Zoom>
    </Grid>
  );
};

export default UrlCard;
