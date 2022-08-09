// /stories/pages/home.stories.jsx

import Card from "../components/card";

export default {
  title: "Components/Card",
  component: Card,
};

export const DefaultCard = () => <Card page="blah" />;
export const CardWithBackground = () => (
  <Card page="bg" background="seashell" />
);
