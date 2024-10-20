import React, { useEffect, useState } from "react";
import MapComponent from "./MapComponent";
import { locationsData, cityData } from "../data/locations";
import SideBar from "./SideBar";
import { City, CityData, ViewState } from "./type";

// Replace with your Mapbox token
const Home = (props: { token: any }) => {
  const allCityData: CityData[] = cityData.map((city) => ({
    id: city.id,
    cityName: city.name as City,
    viewState: city.viewState as ViewState,
  }));
  const [selectedCity, setSelectedCity] = useState<City>("Seattle");
  const defaultViewState: ViewState = {
    longitude: -73.968285,
    latitude: 40.785091,
    zoom: 10,
  };

  const [viewState, setViewState] = useState<ViewState>(
    () =>
      allCityData.find((city) => city.cityName === selectedCity)?.viewState ||
      defaultViewState
  );

  useEffect(() => {
    setViewState(
      allCityData.find((city) => city.cityName === selectedCity)?.viewState ||
        defaultViewState
    );
  }, [selectedCity]);

  return (
    <div className=" w-screen h-screen">
      <MapComponent
        viewState={viewState}
        setViewState={setViewState}
        locations={locationsData}
        mapboxToken={props.token}
      />
      <SideBar
        cityData={allCityData}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
    </div>
  );
};

export default Home;
