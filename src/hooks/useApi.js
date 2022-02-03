import { useEffect, useState } from "react";
import Api from "../Api/Api.js";

export const useData = (initialId = ``, initialData) => {
  const [data, setData] = useState(initialData);
  const [id, setId] = useState(initialId);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const methodName = !id ? `getData` : `getDataById`;
        const response = await Api[methodName](id);
        setData(response);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return [{ data, isLoading, isError }, setId];
};
