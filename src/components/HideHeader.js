import React from 'react'
import Header from './Header'
import { Outlet, useLocation } from "react-router-dom";

const HideHeader = ({hideHeaderpath}) => {
    const { path } = useLocation();

  return (
    <>
   {!hideHeaderpath.includes(path) && <Header />}
   <Outlet />
 </>
  );
};

export default HideHeader
