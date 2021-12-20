import { ItemCard } from "components/Cards";

export const ItemsContainer = ({ items }) => {
  return items.map((item, idx) => {
    return <ItemCard key={item.id + idx} item={item} />;
  });
};
