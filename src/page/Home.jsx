import { Fragment } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="w-full flex flex-wrap">
        <p>This is home page</p>
      </div>
    </Fragment>
  );
};

export default Home;
