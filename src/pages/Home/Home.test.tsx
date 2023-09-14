import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import pagesData, { routerType } from "../pagesData";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

describe("On Render Home Component", () => {
  render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
  test("Should have isobar title", () => {
    const isobarTitle = screen.getByText(/isobar./i);
    expect(isobarTitle).toBeInTheDocument();
  });
});
