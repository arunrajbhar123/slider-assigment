import React, { useState } from "react";
import styled from "styled-components";

const Slider = ({ data, currentPage, total, setCurrentPage }) => {
  const [count, setCount] = useState(currentPage);

  const nextPage = () => {
    if (count <= 3) {
      setCount(count + 1);
      setCurrentPage(count);
    }
  };
  const previousPage = () => {
    if (count >= 1) {
      setCount(count - 1);
      setCurrentPage(count);
    }
  };
//disabled

  return (
    <CenterWrapper>
      <SliderBoxWrapper>
        {data &&
          data.map((el) => (
            <div key={el.id} style={{ textAlign: "start" }}>
              <p data-testid="current">{el.id}</p>
              Que:<b>{el.question}</b>
              <br />
              ans:<b>{el.answer}</b>
            </div>
          ))}
      </SliderBoxWrapper>
      <ButtonWrapper data-testid="btnPrev" disabled onClick={previousPage}>
        Prev
      </ButtonWrapper>
      <ButtonWrapper data-testid="btnNext"
      id="nextbtn"

      onClick={nextPage}>
        Next
      </ButtonWrapper>
    </CenterWrapper>
  );
};

export default Slider;
const CenterWrapper = styled.div``;
const SliderBoxWrapper = styled.div`
  background-color: red;

  padding: 2rem;
  width: 400px;
  border-radius: 5px;
  margin: auto;
`;
const ButtonWrapper = styled.button`
  padding: 0.2rem 1.7rem;
  margin: 1rem;
`;
