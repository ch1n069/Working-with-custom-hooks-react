import axios from "axios";
import React, { useState } from "react";

 const useApiGet = () => {
  // store the various states and phases that our api will go through
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  const fetchData = async (endPoint, requestData) => {
    if (!endPoint || !requestData) {
      console.error("Missing endpoint or request data");
      return null; // Prevent further execution
    }

    setLoading(true);
    setError(null);
    setStatusCode(null);

    try {
      const response = await axios.get(endPoint);
      setData(response.data);
      setStatusCode(response.status);
      return response;
    } catch (error) {

      if (error.response) {
        setStatusCode(error.response.status);
        setError(error)); // Get the error message from utility
        return error.response;
      } else {
        // Handle cases where no response is available (network or unexpected errors)
        setStatusCode(null);
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false); // Ensure loading is set to false after the call
    }

    return null; // Return null if there was an error
  };

  return { data, loading, error, statusCode, fetchData };
};

export default useApiGet