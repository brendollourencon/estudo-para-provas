import { useState } from "react";
import axios from "axios";

const url = 'http://localhost:3001'

export const useApi = (prefix, method, headers, data) => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState(null);

  const request = async () => {
    try {
      resetAttributes();
      const CancelToken = axios.CancelToken;
      const sourceToCancel = CancelToken.source();

      setSource(sourceToCancel);
      setLoading(true);

      console.info(
        `Nova requisição: ${method} ${url + prefix}`
      );

      if (process.env.REACT_APP_ENVIRONMENT === "development") {
        console.info(
          `Nova requisição: ${method} ${url + prefix}`
        );
      }

      const result = await axios({
        method,
        headers,
        url: url + prefix,
        data,
        cancelToken: sourceToCancel.token,
      });

      setResponse(result?.data);
      setStatus(result?.status);
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.error("Houve um erro na requisição para a api: " + error);
      if (process.env.REACT_APP_ENVIRONMENT === "development") {
        console.log(error);
        console.error("Houve um erro na requisição para a api: " + error);
      }

      setError(error?.response?.data || error?.message);
      setStatus(error?.response?.status || 500);
      setLoading(false);
    }
  };

  const resetAttributes = () => {
    setStatus(null);
    setError(null);
    setResponse(null);
    setLoading(false);
    setSource(null);
  };

  return {
    status,
    error,
    request,
    response,
    loading,
    setError,
    source,
    resetAttributes,
  };
};
