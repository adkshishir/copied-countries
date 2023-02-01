import React, { useEffect, useState } from "react";

const ActiveCountry = ({ onclick, countryData }) => {
  const [nativeNam, setNativeNam] = useState("");
  const array = [];
  // console.log(countryData);
  const source = `https://maps.google.com/maps?q=${countryData.name}&t=&z=7&ie=UTF8&iwloc=&output=embed`;
  // console.log(countryData);
  const gettingNativeName = (data) => {
    Object.keys(data).map((key) => {
      array.push({
        name: key,
        about: data[key],
      });
      // setNativeNam(array);
    });
    return array;
    // console.log(nativeNam);
  };
  useEffect(() => {
    setNativeNam(gettingNativeName(countryData.nativeName)[0].about.common);
    // console.log(nativeNam);
    // setNativeNam(ary(countryData.nativeName));
    // console.log(nativeNam);
    // console.log(nativeNam[0].about.common);
  }, [array]);

  return (
    <div className=" bg-slate-100 w-screen p-3">
      <button
        className="bottom-3 bg-slate-300 px-3 py-2 font-sans font-bold rounded-md m-4 ml-1 hover:text-slate-600 hover:bg-slate-200"
        onClick={onclick}
      >
        back
      </button>
      <div>
        <img className="rounded-lg" src={countryData.flag} />
      </div>
      <div>
        <div className="name-title">
          <span className=" font-bold">Country:</span> {countryData.name}
        </div>
        <div>
          <span className="font-bold">Native Name:</span>
          {nativeNam}
        </div>
        <div>
          <span className="font-bold">Region:</span>
          {countryData.region}
        </div>
        <div>
          <span className="font-bold">Sub Region:</span>
          {countryData.subRegion ? countryData.subRegion : ""}
        </div>
        <div className="mb-10">
          <span className="font-bold ">Capital:</span>
          {countryData.capital ? countryData.capital : ""}
        </div>
      </div>
      <div>
        {/* <div>Top level Domain:</div>
        <div>Currencies:{countryData}</div>
        <div>languages:</div> */}
      </div>

      <div className="mapouter">
        <div className="gmap_canvas">
          <div className="text-xl">
            {` Country ${countryData.name} in google map`}

            <div className="font-bold">
              {" "}
              {`(Note:if you didn't find your desire place you can zoom in or zoom out for clear view)`}
            </div>
          </div>
          <iframe
            className="mx-auto mt-4 "
            width="600"
            height="400"
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${countryData.name}&t=&z=6&ie=UTF8&iwloc=&output=embed`}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ActiveCountry;
