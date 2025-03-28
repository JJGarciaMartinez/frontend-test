import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { OrderDefaultResponse } from "@typesApp/ordersResponse";

const API_URL =
  "https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders";

export function useGetAllOrders() {
  const [data, setData] = useState<OrderDefaultResponse>(
    {} as OrderDefaultResponse
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/upcoming`);
      setData(response.data);
      return response.data;
    } catch (err) {
      setIsError(true);
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData().catch((err) => console.error(err));
  }, [fetchData]);

  return { data, isLoading, isError, error, refetch: fetchData };
}

export function useGetOrderDetails() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setData(response.data);
      return response.data;
    } catch (err) {
      setIsError(true);
      setError(err instanceof Error ? err : new Error(String(err)));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData().catch((err) => console.error(err));
  }, [fetchData]);

  return { data, isLoading, isError, error, refetch: fetchData };
}
