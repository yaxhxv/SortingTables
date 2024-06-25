import React, { useState } from "react";

    const Table = () => {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);

  const sortData = (key) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[key] === b[key]) {
        return sortBy === "desc"
          ? a.date.localeCompare(b.date)
          : b.date.localeCompare(a.date);
      }
      return sortBy === "desc" ? b[key] - a[key] : a[key] - b[key];
    });
    setData(sortedData);
    setSortBy(sortBy === "desc" ? "asc" : "desc");
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={() => sortData("date")}>Sort by Date</button>
        <button onClick={() => sortData("views")}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;