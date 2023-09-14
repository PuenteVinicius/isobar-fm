import BandPage from "./Band/BandPage";
import Home from "./Home/Home";

export interface routerType {
  title: string;
  path: string;
  element: JSX.Element;
}

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "band/:bandId",
    element: <BandPage />,
    title: "band",
  },
];

export default pagesData;
