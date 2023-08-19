import {
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
  const defaultBgColor = "#0c1a1c";
  const [bgColor, setBgColor] = useState(defaultBgColor);
  const open = Boolean(anchorElement);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteUrlCard, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("urlCards");
      console.log(data);
    },
    onError: () => {
      setBgColor(defaultBgColor);
    },
  });

  const handleDelete = (id: string) => {
    setBgColor("#a2a5a6");
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
      <Card style={{ backgroundColor: bgColor, position: "relative" }}>
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
          <Menu open={open} anchorEl={anchorElement} onClose={handleMenuClose}>
            <MenuItem onClick={() => handleDelete(props.id)}>Remove</MenuItem>
          </Menu>
        </div>
        <CardActionArea onClick={() => (window.location.href = props.url)}>
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
