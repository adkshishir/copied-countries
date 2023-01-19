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
    <div className="active-">
      <button className="back" onClick={onclick}>
        back
      </button>
      <div>
        <img src={countryData.flag} />
      </div>
      <div>
        <div className="name-title">Country: {countryData.name}</div>
        <div>Native Name:{nativeNam}</div>
        <div>Region:{countryData.region}</div>
        <div>
          Sub Region:{countryData.subRegion ? countryData.subRegion : ""}
        </div>
        <div>Capital:{countryData.capital ? countryData.capital : ""}</div>
      </div>
      <div>
        {/* <div>Top level Domain:</div>
        <div>Currencies:{countryData}</div>
        <div>languages:</div> */}
      </div>

      <div className="mapouter">
        <div className="gmap_canvas">
          <div>
            {` Country ${countryData.name} in google map`}

            {`(Note:if you didn't find your desire place you can zoom in or zoom out for clear view)`}
          </div>
          <iframe src={source}></iframe>
        </div>
      </div>
    </div>
  );
};

export default ActiveCountry;
