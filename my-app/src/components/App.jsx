import React, { useState } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Interest from "./Interest";
import Note from "./Note";
import Data from "./Data";

function App() {
  const [news, setNews] = useState([]);
  const [mydata, setMydata] = useState([]);

  function Query(q) {
    const apikey = APIKEY;  // add your own api key
    let category = q.category;
    let country = q.country;
    let url =
      "https://newsapi.org/v2/top-headlines?category=" +
      category +
      "&language=en&country=" +
      country +
      "&apikey=" +
      apikey;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setNews(data.articles);
      });
  }

  function Meradata(ata) {
    setMydata(ata);
  }

  return (
    <div>
      <Header />
      <Paragraph />
      <Interest onSearch={Query} />
      <Data onAction={Meradata} />
      {news.map((neww, index) => {
        //{ console.log(neww) }
        return (
          <Note
            key={index}
            id={index}
            title={neww.title}
            content={neww.description}
            urltoimage={neww.urlToImage}
            url={neww.url}
          />
        );
      })}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((data, index) => {
            return (
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{data.category}</td>
                  <td>{data.country}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
