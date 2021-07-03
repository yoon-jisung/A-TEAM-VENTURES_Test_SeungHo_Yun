import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Summery from "./components/summery";
import Filtering from "./components/filtering";
import Togle from "./components/togle";
import Card from "./components/card";
import axios, { AxiosResponse } from "axios";
import { Server } from "tls";

/* {
      "id": 1,
      "title": "자동차 시제품 제작",
      "client": "A 고객사",
      "due": "2020.12.14",
      "count": 2,
      "amount": 100,
      "method": ["밀링", "선반"],
      "material": ["알루미늄"],
      "status": "대기중"
    },*/

function App() {
  const [filtering, setFiltering] = useState<string[]>([]);
  const [cards, setCards] = useState<object[]>([]);

  const hendleFiltering = (answer: string) => {
    setFiltering([...filtering, answer]);
  };
  const fixFiltering = (answer: string) => {
    setFiltering(
      filtering.filter((el) => {
        if (el !== answer) {
          return el;
        }
      })
    );
  };
  const clearFiltering = () => {
    setFiltering([]);
  };

  const hendleInputCard = async () => {
    await axios
      .get("http://localhost:3000/requests", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => setCards(res.data));
  };

  useEffect(() => {
    console.log(filtering);
    if (filtering === []) {
    }
  }, [filtering]);

  useEffect(() => {
    hendleInputCard();
    console.log(cards);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App_body">
        <Summery />
        <div className="filtering_togle">
          <Filtering
            hendleFiltering={hendleFiltering}
            fixFiltering={fixFiltering}
            clearFiltering={clearFiltering}
          />
          <Togle />
        </div>
        <Card cards={cards} />
      </div>
    </div>
  );
}

export default App;
