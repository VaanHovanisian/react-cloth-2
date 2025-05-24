import { Catalog, Container } from "../components";
import { useOrder } from "../hooks/order";

export const Order = () => {
  const { data, error, isLoading } = useOrder();

  return (
    <Container>
      <Catalog data={data} error={error} isLoading={isLoading} />
    </Container>
  );
};
