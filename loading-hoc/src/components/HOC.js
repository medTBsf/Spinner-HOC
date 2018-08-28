import React from "react";
import Spinner from "./Spinner";

const LoadingSpinner = Component => {
  return function LoadingSpinnerComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <Spinner />;
  };
};

export default LoadingSpinner;
