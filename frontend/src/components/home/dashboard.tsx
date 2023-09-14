import { useState } from "react";
import TestCard from "../apps/testCard/TestCard";
import UrlCard from "../links/UrlCard";
import UrlCardButton from "../links/add/AddUrlCardButton";
import { CircularProgress, Fade, Grid } from "@mui/material";
import UrlCardDialog from "../links/add/AddUrlCardDialog";
import { getAllUrlCards } from "../api/LinkService";
import { useQuery } from "react-query";
import { UrlCardData } from "../links/UrlCardData";
import NxtwatchCard from "../apps/nxtwatch/NxtwatchCard";
import Header from "../header/Header";

interface CardData {
  id: number;
  title: string;
  component: any;
  data?: any;
}

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  const {
    data: fetchedUrlCards,
    isLoading,
    error,
  } = useQuery<UrlCardData[]>("urlCards", getAllUrlCards);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const predefinedCards: CardData[] = [
    {
      id: 1,
      title: "Klockor",
      component: NxtwatchCard,
    },
    {
      id: 3,
      title: "test 2",
      component: TestCard,
    },
  ];

  const filterCards = (cardArray: CardData[]) => {
    return cardArray.filter((card) => {
      return searchQuery
        ? card.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
    });
  };

  const filterUrlCards = (cardArr: UrlCardData[]) => {
    return cardArr.filter((card) => {
      return searchQuery
        ? card.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
    });
  };

  const renderUrlCards = () => {
    if (isLoading) {
      return (
        <div
          style={{
            margin: "auto",
          }}
        >
          <CircularProgress size={"6rem"} color="primary" />
        </div>
      );
    }

    if (error) {
      return <div style={{ padding: "2em" }}>Error fetching data</div>;
    }

    if (!fetchedUrlCards) {
      return null;
    }

    return (
      <Fade in timeout={1000}>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            {filterUrlCards(fetchedUrlCards).map((fetchedData) => (
              <UrlCard
                key={fetchedData.title}
                id={fetchedData._id}
                title={fetchedData.title}
                url={fetchedData.fullUrl}
                imageUrl={fetchedData.pictureUrl}
              />
            ))}
          </Grid>
        </Grid>
      </Fade>
    );
  };

  return (
    <>
      <Header
        searchQuery={searchQuery}
        onSearchQueryChange={handleSearchQueryChange}
      />
      <Grid container spacing={3} p={2}>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            {filterCards(predefinedCards).map((card) => (
              <Grid item key={card.id} xs={12}>
                <card.component key={card.id} {...card.data} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {renderUrlCards()}
      </Grid>
      <UrlCardButton onDialogOpen={handleDialogOpen} />
      <UrlCardDialog open={dialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default Dashboard;
