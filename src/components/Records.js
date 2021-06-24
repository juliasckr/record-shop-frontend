import React, { useState, useEffect } from "react";

export default function Records() {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/records", {
      headers: { "x-auth": localStorage.getItem("x-auth") },
    })
      .then((res) => res.json())
      .then((result) => {
        // storing records in state
        if (result.success) {
          setRecords(result.data);
        } else {
          console.log(result.message);
        }
      });
  }, []);
  return (
    <div>
      {records.map((record) => {
        return (
          <div key={record._id}>
            <h2>record name: {record.title}</h2>
            <h4>artist: {record.artist}</h4>
            <p>price: {record.price}</p>
            <img src={record.img} alt="record-img" width="200" />
          </div>
        );
      })}
    </div>
  );
}
