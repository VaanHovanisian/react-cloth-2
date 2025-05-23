import { Catalog, Container } from "../components";
import { useOrder } from "../hooks/order";

export const Order = () => {
  const { data, error, isLoading } = useOrder();

  const newData = data
    .reduce((acc, el) => {
      acc.push(Object.values(el));
      return acc;
    }, [])
    .flat()
    .filter((el) => el.id);

  return (
    <Container>
      <Catalog data={newData} error={error} isLoading={isLoading} />
    </Container>
  );
};
