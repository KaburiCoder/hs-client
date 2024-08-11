import { useState } from 'react';

export const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  async function loadingFn<T>(callback: () => Promise<T>) {
    setIsLoading(true);
    try {
      await callback();
      setError(undefined);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading, error, loadingFn,
  };
};
