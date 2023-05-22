import "./styles.css";
import { useState, useEffect } from "react";
import List from "./List";

const url = "https://dummyjson.com/products";

export default function App() {
  const [list, setList] = useState([]);

  const fetchdata = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { products } = data;

    products.sort(function (a, b) {
      return b.price - a.price;
    });
    // console.log(products);

    setList(products);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return <List list={list} />;
}
