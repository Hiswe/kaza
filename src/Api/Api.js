import data from "../Data/Data.json";

function wait(data = {}, ms = 750) {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

const Api = {
  getData() {
    return wait(data);
  },
  getDataById(id) {
    const datum = data.find((element) => element.id === id);
    if (!datum) {
      const error = new Error(`not found`);
      return new Promise((_, reject) => setTimeout(() => reject(error), 750));
    }
    datum.rating = Number.parseInt(datum.rating, 10);
    return wait(datum);
  },
};

export default Api;
