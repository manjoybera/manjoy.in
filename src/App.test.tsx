import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

// let  container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// test("renders sections on load", () => {
//   jest.mock("react-markdown");
//   render(<App />, container);

//   // const linkElement = screen.getByText(/Skillset/i);
//   // expect(linkElement).toBeInTheDocument();
//   expect(container.textContent).toBe("Manjoy Kumar Bera");
// });
