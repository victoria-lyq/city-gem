import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Home from "./components/Home";
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
const App = () => {
  return <Home token={MAPBOX_TOKEN} />;
};
export default App;
