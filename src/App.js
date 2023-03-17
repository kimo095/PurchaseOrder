import React from "react";
import data from './purchase.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

data.mvPurchaseOrders.reverse();
const App = () => {
  return (
    <Router>
      <div className="container">
        <p></p>
        <h1>Order List</h1>
        {data.mvPurchaseOrders.map((order, index) => (
          <li key={index}>
            <Link to={`/purchaseDetails/${index}`}>
              {order.PurchaseOrderTypeAbbreviation} - {order.PurchaseOrderNo}
            </Link>
          </li>
        ))}
      </div>
      <Routes>
        <Route path="/purchaseDetails/:id" element={<PurchaseOrderDetails />}/>
      </Routes>
    </Router>
  );
};

const PurchaseOrderDetails = () => {
  const { id } = useParams();
  const purchaseOrder = data.mvPurchaseOrders[id];

  if (!purchaseOrder) {
    return <h2>Invalid purchase order id</h2>;
  }

  return (
    <div className="container">  
      <p></p>
      <h1>Show your order details:</h1>
      <p className="lead">Order address: {purchaseOrder.PurchaseOrderAddress}</p>
      <p className="lead">Order contact person: {purchaseOrder.PurchaseOrderContactPerson}</p>
      <p className="lead">Order status: {purchaseOrder.PurchaseOrderStatus}</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product SKU</th>
            <th>Quantity Ordered</th>
            <th>Unit Price</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {purchaseOrder.PurchaseOrderDetails.map((detail, i) => (
            <tr key={i}>
              <td>{detail.PurchaseOrderRowProductSKU}</td>
              <td>{detail.PurchaseOrderRowQuantity}</td>
              <td>{detail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
              <td>{detail.PurchaseOrderRowTotalAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;