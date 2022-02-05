import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../Api/Api.js";

export const useData = (initialId = ``, initialData) => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);
  const [id, setId] = useState(initialId);
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const methodName = !id ? `getData` : `getDataById`;
        const response = await Api[methodName](id);
        setData(response);
      } catch (error) {
        navigate(`/404`)
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id, navigate]);

  return [{ data, isLoading }, setId];
};
