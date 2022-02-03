import data from "../Data/Data.json";

function wait(data = {}, ms = 750) {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

export default class Api {
  static getData = () => {
    return wait(data);
  };
  static getDataById = (id) => {
    const datum = data.find((element) => element.id === id);
    datum.rating = Number(datum.rating);
    return wait(datum);
  };
}
