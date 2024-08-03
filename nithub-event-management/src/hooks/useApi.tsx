import { makeToast } from "../lib/react-toast";
import { AxiosResponse } from "axios";
import { useState } from "react";

export const useApi = <T, K>(apiFunc: (arg: K) => Promise<AxiosResponse>) => {
  // State to hold the data received from the API
  const [data, setData] = useState<T | null>(null);

  // State to hold API-related errors
  const [error, setError] = useState<any>({});

  // State to manage loading status during API requests
  const [loading, setLoading] = useState(false);

  //Asynchronous function to execute the provided API function with optional arguments.
  const request = async (arg?: K): Promise<T | null> => {
    setLoading(true);

    try {
      // Execute the API function and retrieve the result
      const result = await apiFunc(arg!);
      console.log(result)

      // Update the state with the received data
      setData(result.data);

      // Return the data from the API
      return result.data;
    } catch (err: any) {
      // Handle errors gracefully and display a toast with a touch of humor
      const error = err.response?.data;

      // Display an error toast message
      makeToast({
        message: error?.message || "",
        type: "error",
        id: "api-error",
      });

      // Update the state with the error details
      setError(error);

      // Return null as there's an error
      return null;
    } finally {
      // Regardless of success or failure, turn off the loading spinner
      setLoading(false);
    }
  };

  // Function to reset the state, clearing data, errors, and loading status.
  const reset = () => {
    setLoading(false);
    setError({});
    setData(null);
  };

  // Return an object with data, error, loading status, request function, and reset function
  return {
    data,
    error,
    loading,
    request,
    reset,
  };
};
