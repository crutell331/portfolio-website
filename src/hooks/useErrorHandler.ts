import { useState, useCallback } from 'react';
import { handleError } from '../utils/errorHandler';

interface ErrorState {
  hasError: boolean;
  message: string;
  code: string;
}

export const useErrorHandler = () => {
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    message: '',
    code: ''
  });

  const clearError = useCallback(() => {
    setErrorState({
      hasError: false,
      message: '',
      code: ''
    });
  }, []);

  const handleErrorWithState = useCallback((error: unknown) => {
    const { message, code } = handleError(error);
    setErrorState({
      hasError: true,
      message,
      code
    });
    return { message, code };
  }, []);

  return {
    error: errorState,
    handleError: handleErrorWithState,
    clearError
  };
};

export default useErrorHandler;