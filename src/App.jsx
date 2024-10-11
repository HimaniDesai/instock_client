import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Warehouse from "./pages/Warehouse/Warehouse";
import Inventory from "./pages/Inventory/Inventory";
import Footer from "./components/Footer/Footer";
import Redirect from "./components/Redirect/Redirect";
import EditInventoryItem from "./pages/EditInventoryItem/EditInventoryItem";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";
import Header from "./components/Header/Header";
import EditWarehouseItem from "./components/EditWarehouseItem/EditWarehouseItem";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Redirect />}></Route>
            <Route path="/warehouses" element={<Warehouse />}></Route>
            <Route path="/warehouses/add" element={<AddNewWarehouse />}></Route>
            <Route path="/warehouses/edit/:id" element={<EditWarehouseItem />}></Route>
            <Route path="/warehouses/:id" element={<WarehouseDetails />}></Route>
            <Route path="/inventories" element={<Inventory />}></Route>
            <Route path="/inventories/add" element={<AddNewInventory />}></Route>
            <Route path="/inventories/edit/:id/" element={<EditInventoryItem />}></Route>
            <Route path="/inventories/:id" element={<InventoryDetailsPage />}></Route>
          </Routes>
        </ContentWrapper>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
