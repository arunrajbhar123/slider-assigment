import { useState, useEffect, useRef } from "react";
import "./App.css";
import Slider from "./components/Slider";

function App() {
  const [data, setData] = useState();
  const total = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const sliderItems = [
      {
        id: 1,
        question: "React Install cmd",
        answer: "npx create-react-app AppName",
      },
      {
        id: 2,
        question: "Testing for small Application",
        answer: "jest-library",
      },
      {
        id: 3,
        question: "Testing for big Application",
        answer: "Cypress",
      },
    ];
    total.current = sliderItems.length;
    const newList = sliderItems.filter((item) => item.id === currentPage);
    setData(newList);
  }, [currentPage]);

  return (
    <div className="App">
      <Slider
        data={data}
        total={total}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
