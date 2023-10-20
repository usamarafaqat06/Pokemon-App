import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
const Loader = () => {
  let loading = true;
  let color = "#000";
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100%]">
      <BeatLoader
        color={color}
        loading={loading}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
