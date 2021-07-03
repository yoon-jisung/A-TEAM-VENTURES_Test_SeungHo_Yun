import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Summery from "./components/summery";
import Filtering from "./components/filtering";
import Togle from "./components/togle";
import Card from "./components/card";
import axios, { AxiosResponse } from "axios";

function App() {
  const [filtering, setFiltering] = useState<string[]>([]);
  const [cards, setCards] = useState<object[]>([]);
  const [prevCards, setPrevCards] = useState<object[]>([]);
  const [defalutCards, setDefaltCards] = useState<object[]>([]);

  const handleChatFiltering = (isTrue: boolean) => {
    if (isTrue) {
      let changeCards = cards.filter((el: any) => {
        if (el.status === "상담중") {
          return true;
        }
      });
      setPrevCards(cards);
      setCards(changeCards);
    } else if (!isTrue) {
      setCards(prevCards);
    }
  };

  const handleFiltering = async (answer: string) => {
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
    defaultInputCard();
  };

  const defaultInputCard = async () => {
    await axios
      .get("http://localhost:3000/requests", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        setCards(res.data);
        setDefaltCards(res.data);
      });
  };

  useEffect(() => {
    let method: string[] = [];
    let material: string[] = [];

    if (filtering !== []) {
      for (let i = 0; i < filtering.length; i++) {
        if (["밀링", "선반"].includes(filtering[i])) {
          method.push(filtering[i]);
        } else if (
          ["알루미늄", "탄소강", "구리", "합급강", "강철"].includes(
            filtering[i]
          )
        ) {
          material.push(filtering[i]);
        }
      }
    }
    // * 필터링된 메뉴들 속성을 나눴습니다.

    if (method.length === 0) {
      let changeCards = defalutCards.filter((el: any) => {
        if (el.material.length === material.length) {
          let i = 0;
          let isTrue = true;
          while (i < material.length) {
            if (el.material.includes(material[i]) === false) {
              isTrue = false;
            }
            i++;
          }
          if (isTrue) {
            return true;
          }
        }
      });
      setCards(changeCards);
    }

    if (material.length === 0) {
      let changeCards = defalutCards.filter((el: any) => {
        if (el.method.length === method.length) {
          let i = 0;
          let isTrue = true;
          while (i < method.length) {
            if (el.method.includes(method[i]) === false) {
              isTrue = false;
            }
            i++;
          }
          if (isTrue) {
            return true;
          }
        }
      });
      setCards(changeCards);
    }

    if (method.length !== 0 && material.length !== 0) {
      let changeCards = defalutCards.filter((el: any) => {
        let i = 0;
        let isTrue = true;
        if (el.method.length === method.length) {
          while (i < method.length) {
            if (el.method.includes(method[i]) === false) {
              isTrue = false;
            }
            i++;
          }
        }
        i = 0;
        while (i < material.length) {
          if (el.material.includes(material[i]) === false) {
            isTrue = false;
          }
          i++;
        }
        if (isTrue) {
          return true;
        }
      });
      setCards(changeCards);
    }

    console.log(filtering);
    if (filtering.length === 0) {
      defaultInputCard();
    }
  }, [filtering]);

  useEffect(() => {
    defaultInputCard();
    console.log(cards);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="App_body">
        <Summery />
        <div className="filtering_togle">
          <Filtering
            handleFiltering={handleFiltering}
            fixFiltering={fixFiltering}
            clearFiltering={clearFiltering}
          />
          <Togle handleChatFiltering={handleChatFiltering} />
        </div>
        <Card cards={cards} />
      </div>
    </div>
  );
}

export default App;
