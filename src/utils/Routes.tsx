import AllOrders from "@pages/AllOrders";
import OrderDetails from "@pages/OrderDetails";
import { Route, Routes } from "react-router";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/orders">
        <Route index element={<AllOrders />} />
        <Route path="details" element={<OrderDetails />} />
      </Route>
    </Routes>
  );
}
