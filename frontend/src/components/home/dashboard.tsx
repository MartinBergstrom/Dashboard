import TestCard from "../apps/testCard/TestCard";
import UrlCard from "../apps/urlCard/UrlCard";
import WatchesCard from "../apps/watches/WatchesCard";
import { Grid } from "@mui/material";

interface CardData {
  id: number;
  title: string;
  component: any;
  data?: any;
}

interface DashboardProps {
  searchQuery: string;
}

const Dashboard = (props: DashboardProps) => {
  const cards: CardData[] = [
    {
      id: 1,
      title: "Klockor",
      component: WatchesCard,
    },
    {
      id: 2,
      title: "Ica",
      component: UrlCard,
      data: {
        title: "Ica gillade recept",
        url: "https://www.ica.se/recept/dina-recept/gillade",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ICA_logo.svg/2560px-ICA_logo.svg.png",
      },
    },
    {
      id: 3,
      title: "test 2",
      component: TestCard,
    },
  ];

  const filteredCards = cards.filter((card) => {
    return props.searchQuery
      ? card.title.toLowerCase().includes(props.searchQuery.toLowerCase())
      : true;
  });

  return (
    <>
      <Grid container spacing={3} p={2}>
        {filteredCards.map((card) => (
          <card.component key={card.id} {...card.data} />
        ))}
      </Grid>
      {props.searchQuery}
    </>
  );
};

export default Dashboard;
