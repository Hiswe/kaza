import data from "../Data/Data.json";

export default class Api {
  static getData = () => {
    return data;
  };
  static getDataById = (id) => {
    const datum = data.find((element) => element.id === id);
    datum.rating = Number(datum.rating);
    return datum;
  };
}
