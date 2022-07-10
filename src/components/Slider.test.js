import { render, screen, fireEvent } from "@testing-library/react";
import Slider from "./Slider";
import userEvent from "@testing-library/user-event";
import App from "./../App";

describe("Slider Components TestCase", () => {
  test("Checking Prev Button exist or not", () => {
    render(<Slider>Prev</Slider>);
    let btn = screen.getByText("Prev");
    expect(btn).toBeInTheDocument();
  });
  test("IntialState Previous Button Disable", () => {
    render(<Slider>Prev</Slider>);
    let btn = screen.getByText("Prev");

    expect(btn).toHaveAttribute("disabled");
  });
  // test("Next button click Previous Button able to clickable",()=>{
  //   render(<Slider>Prev</Slider>)
  //   let btn=screen.getByText("Prev");
  //   // expect(btn).toBeClick();
  // })

  test("Checking Next Button exist or not", () => {
    render(<Slider>Next</Slider>);
    let btn = screen.getByText("Next");
    expect(btn).toBeInTheDocument();
  });
  test("Click button show the next content", () => {
    render(<App></App>);
    let btn = screen.getByText("Next");
    fireEvent.click(btn);
  });
  test("click on Next Btn", () => {
    render(<Slider>Next</Slider>);
    let btn = screen.getByTestId("btnNext");
    fireEvent.click(btn);
    fireEvent.click(btn);
  });
  test("ckecking current position", () => {
    render(<App></App>);
    let btn = screen.getByTestId("btnNext");
    let p = screen.getByTestId("current");
    fireEvent.click(btn);
    fireEvent.click(btn);
  });
});
