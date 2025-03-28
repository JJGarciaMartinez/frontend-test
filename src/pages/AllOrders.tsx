import { useGetAllOrders } from "@hooks/useOrders";
import { useEffect } from "react";

export default function AllOrders() {
  const { data, isLoading, isError, error } = useGetAllOrders();

  useEffect(() => {
    console.log("Orders:", data);
  }, [data]);

  // Manejo adecuado de los estados
  if (isLoading) return <div>Cargando...</div>;
  if (isError)
    return (
      <div>Error: {error instanceof Error ? error.message : String(error)}</div>
    );
  if (!data) return <div>No hay datos disponibles</div>;

  return <div>a</div>;
}
