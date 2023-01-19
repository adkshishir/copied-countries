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
    <button className="item-list" onClick={handleClick}>
      {/* <div id={`item${index}`}>item:{index}</div> */}
      <img src={data.flag} />
      <div>{`Name:    ${data.name}`}</div>
      <div>Population: {data.population}</div>
      <div>Region: {data.region}</div>
      <div>Capital: {data.capital}</div>
    </button>
  );
};

export default MainData;
