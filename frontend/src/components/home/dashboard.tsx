import { useState } from "react";
import TestCard from "../apps/testCard/TestCard";
import UrlCard from "../links/UrlCard";
import UrlCardButton from "../links/add/AddUrlCardButton";
import WatchesCard from "../apps/watches/WatchesCard";
import { Grid } from "@mui/material";
import UrlCardDialog from "../links/add/AddUrlCardDialog";
import { getAllUrlCards } from "../api/LinkService";
import { useQuery } from "react-query";

interface CardData {
  id: number;
  title: string;
  component: any;
  data?: any;
}

interface UrlCardData {
  title: string;
  fullUrl: string;
  pictureUrl: string;
}

interface DashboardProps {
  searchQuery: string;
}

const Dashboard = (props: DashboardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

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
      component: WatchesCard,
    },
    {
      id: 3,
      title: "test 2",
      component: TestCard,
    },
  ];

  const filterCards = (cardArray: CardData[]) => {
    return cardArray.filter((card) => {
      return props.searchQuery
        ? card.title.toLowerCase().includes(props.searchQuery.toLowerCase())
        : true;
    });
  };

  const filteredPredefinedCards = filterCards(predefinedCards);

  const renderUrlCards = () => {
    if (isLoading) {
      return <div style={{ padding: "2em" }}>Loading...</div>;
    }

    if (error) {
      return <div style={{ padding: "2em" }}>Error fetching data</div>;
    }

    if (!fetchedUrlCards) {
      return null;
    }

    return (
      <Grid item xs={6}>
        <Grid container spacing={3}>
          {fetchedUrlCards.map((fetchedData) => (
            <UrlCard
              title={fetchedData.title}
              url={fetchedData.fullUrl}
              imageUrl={fetchedData.pictureUrl}
            />
          ))}
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Grid container spacing={3} p={2}>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            {filteredPredefinedCards.map((card) => (
              <Grid item key={card.id} xs={12}>
                <card.component key={card.id} {...card.data} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {renderUrlCards()}
      </Grid>
      {props.searchQuery}
      <UrlCardButton onDialogOpen={handleDialogOpen} />
      <UrlCardDialog open={dialogOpen} onClose={handleDialogClose} />
    </>
  );
};

export default Dashboard;
