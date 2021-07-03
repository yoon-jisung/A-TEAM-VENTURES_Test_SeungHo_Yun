import { Divider } from "@material-ui/core";
import React, { useEffect } from "react";

interface CardProps {
  cards: any;
}

interface Cards {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

function Card({ cards }: CardProps) {
  return (
    <div className="card_form">
      {cards.length === 0 ? (
        <div className="card_empty">조건에 맞는 견적 요청이 없습니다.</div>
      ) : (
        <>
          {cards.map((el: Cards) => {
            return (
              <div className="card">
                <h3 className="card_title">
                  <div>{el.title}</div>
                  {el.status === "상담중" ? (
                    <div className="chating">상담중</div>
                  ) : null}
                </h3>
                <div>{el.client}</div>
                <div className="due">{el.due}까지 납기</div>

                <hr></hr>
                <div>
                  <div>
                    <span>도면 갯수</span>
                    <span className="count">{el.count}개</span>
                  </div>

                  <div>
                    <span>총 수량</span>
                    <span className="count">{el.amount}개</span>
                  </div>

                  <div>
                    <span>가공 방식</span>
                    <span className="count">
                      {el.method.length > 1 ? String(el.method) : el.method}
                    </span>
                  </div>

                  <div>
                    <span>재료</span>
                    <span className="count">
                      {el.material.length > 1
                        ? String(el.material)
                        : el.material}
                    </span>
                  </div>
                </div>
                <div className="card_btn">
                  <button className="answer_btn">요청 내용 보내기</button>
                  <button className="chat_btn">채팅 하기</button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Card;
