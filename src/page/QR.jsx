import { Fragment } from "react";
import QRCode from '../assets/qr.png'
// import { useQuery } from '@tanstack/react-query';

import Navbar from "../components/Navbar";
// import { useAuthContext } from '../hooks/useAuthContext';
// import { getAllBuildings } from '../api/building';
// import toast from 'react-hot-toast';

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

      <div className="container mx-auto py-4">
        <div className=' flex justify-center py-2 align-middle'>
          <span className="text-2xl font-bold text-gray-900 text-center ">QR Code of BIST Office</span>
        </div>

        <div className=' flex justify-center py-2 align-middle'>

          <img class="object-contain h-48 w-96" src={QRCode} />
        </div>

      </div>
    </Fragment >
  );
};

export default QR;
