import React, { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/orders", {
      headers: { "x-auth": localStorage.getItem("x-auth") },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setOrders(result.data);
          console.log("hi from orders page");
        } else {
          console.log(result.message);
        }
      });
  }, []);
  return (
    <div>
      {orders.map((order) => {
        return (
          <div key={orders._id}>
            <h2>orders</h2>
            <h3>records: {orders.records}</h3>
            <p>users: {orders.user}</p>
          </div>
        );
      })}
    </div>
  );
}
