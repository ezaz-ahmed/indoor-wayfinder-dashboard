import { Fragment } from "react";

// import { useQuery } from '@tanstack/react-query';

import Navbar from "../components/Navbar";
// import { useAuthContext } from '../hooks/useAuthContext';
// import { getAllBuildings-hot-toast';



const QR = () => {

  // const { user } = useAuthContext()

  // const { isLoading, data, isError, error } = useQuery(['buildings'], () => getAllBuildings(user))

  // console.log(isError)

  // if (isError) {
  //   toast.error(error.message)
  // }

  return (
    <Fragment>
      <Navbar />

      <div className="container mx-auto py-4 flex align-middle justify-center">
        {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> */}

        <a href='/ar.zip' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" download>Click to download Ar File</a>
        {/* </button> */}
      </div>
    </Fragment >
  );
};

export default QR;
