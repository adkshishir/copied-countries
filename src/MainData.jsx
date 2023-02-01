import React from "react";

const MainData = ({
  // flag,
  // name,
  // population,
  // region,
  // capital,
  onclick,
  data,
  index,
}) => {
  const handleClick = () => {
    // console.log(name);

    onclick(data);
  };
  return (
    <button
      className=" rounded-lg w-fit m-auto my-4 h-86 p- pt-0 bg-slate-100 drop-shadow-md hover:drop-shadow-2xl  "
      onClick={handleClick}
    >
      {/* <div id={`item${index}`}>item:{index}</div> */}
      <img
        style={{ height: "190px", width: "300px" }}
        className="rounded-t-md w-46 "
        src={data.flag}
      />

      <div>{`Name:    ${data.name}`}</div>
      <div>Population: {data.population}</div>
      <div>Region: {data.region}</div>
      <div>Capital: {data.capital}</div>
    </button>
  );
};

export default MainData;
