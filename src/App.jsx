import { useState, useEffect } from "react";
import "./App.css";
import MainData from "./MainData";
import ActiveCountry from "./ActiveCountry";
import NavBar from "./NavBar";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [API_ALL_COUNTRIES, SET_API_ALL_COUNTRIES] = useState(
    "https://restcountries.com/v3.1/all"
  );
  const [collect, setCollect] = useState(countriesData);
  const [active, setActive] = useState("false");
  const [values, setvalues] = useState("");
  const [countryName, setCountryName] = useState("");

  const makingInActive = (countryN) => {
    setActive(false);
    // console.log(countryN.name);
    setCountryName(countryN);
  };
  const makingActive = () => {
    setActive(true);
    console.log(countriesData[0].nativeName);
  };

  const findCountries = () => {
    fetch(API_ALL_COUNTRIES)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.map((da) =>
          setCountriesData((preValue) => {
            return preValue.length <= data.length
              ? [
                  ...preValue,
                  {
                    flag: da.flags.png,
                    name: da.name.common,
                    officialName: da.official,
                    nativeName: da.name.nativeName,
                    subRegion: da.subregion,
                    population: da.population,
                    region: da.region,
                    capital: da.capital,
                    area: da.area,
                    lnglat: da.capitalInfo.latlng,
                    logo: da.coatOfArms.png,
                    continent: da.continent,
                    currencies: da.currencies,
                    independent: da.independent,
                    landLocked: da.landLocked,
                    status: da.status,
                    language: da.languages,
                    map: da.maps.googleMaps,
                  },
                ]
              : [];
          })
        );
      })
      .catch((error) => console.error(error));
    // const response = await fetch(API_ALL_COUNTRIES);
    // const data = await response.json();

    // console.log(data.length);
    // console.log(data.map((da) => da));
  };
  // console.log(countriesData[0]);

  const controlInput = (event) => {
    const { name, value } = event.target;
    setvalues(value);
  };
  useEffect(() => {
    !values
      ? SET_API_ALL_COUNTRIES("https://restcountries.com/v3.1/all")
      : SET_API_ALL_COUNTRIES(`https://restcountries.com/v3.1/name/${values}`);
    findCountries();
    // setCollect(countriesData);
  }, [values]);
  // useEffect(() => {

  //   setCollect(countriesData);
  // }, [API_ALL_COUNTRIES]);

  return (
    <div className="App">
      <NavBar />
      {/* {active ? (
        <iframe
          src="https://solarsystem.nasa.gov/gltf_embed/2393"
          className="earth"
        />
      ) : null} */}

      {active && <input name="name" onChange={controlInput} value={values} />}
      <div className="grid-content">
        {!active ? (
          <ActiveCountry onclick={makingActive} countryData={countryName} />
        ) : (
          countriesData.map((data, index) => (
            <MainData
              key={index}
              // name={data.name}
              // flag={data.flag}
              // population={data.population}
              // region={data.region}
              // capital={data.capital}
              onclick={makingInActive}
              data={data}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
