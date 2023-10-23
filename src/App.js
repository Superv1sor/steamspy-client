import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import ItemsGrid from "./components/items/ItemsGrid";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      // const result = await axios(`http://localhost:3013/items`);
      // const result = await axios(
      //   `https://hn.algolia.com/api/v1/search?query=react`
      // );
      // const result = await axios(
      //   `https://www.breakingbadapi.com/api/characters`
      // );

      const result = await axios({
        // url: `http://192.168.178.21:3013/items`,
        url: `https://steamspy-server.onrender.com/items`,
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      });

      // console.log(result.data);
      // setItems(result.data);
      setItems(Object.values(result.data[0]));
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <ItemsGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
