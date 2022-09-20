import { Fragment } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="container mx-auto">
        <div className=' flex justify-between py-2 align-middle'>
          <span className="text-2xl font-bold text-gray-900 ">List Of Buidlings</span>

          <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>

            <span>
              Create New
            </span>
          </button>

        </div>
      </div>
    </Fragment>
  );
};

export default Home;
