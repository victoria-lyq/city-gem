export interface Location {
  id: number;
  name: string;
  category: string;
  latitude: number;
  longitude: number;
  address?: string;
  description?: string;
}

export type Category = "food" | "fun" | "shop" | "nightlife";

export type City =
  | "New York"
  | "Los Angeles"
  | "San Francisco"
  | "Maui"
  | "Seattle";

export interface CityData {
  id: number;
  cityName: City;
  viewState: ViewState;
}

export interface ViewState {
  latitude: number;
  longitude: number;
  zoom: number;
}
