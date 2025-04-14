/**
 * Custom error class for application-specific errors
 */
export class AppError extends Error {
  code: string;
  
  constructor(message: string, code: string = 'UNKNOWN_ERROR') {
    super(message);
    this.name = 'AppError';
    this.code = code;
  }
}

/**
 * Logs errors to console and potentially to a monitoring service
 */
export const logError = (error: Error): void => {
  console.error('Error occurred:', {
    name: error.name,
    message: error.message,
    stack: error.stack,
    code: error instanceof AppError ? error.code : 'UNKNOWN'
  });
  
  // In a production environment, you might want to send this to a monitoring service
  // Example: sendToMonitoringService(error);
};

/**
 * Handles errors in a consistent way across the application
 */
export const handleError = (error: unknown): { message: string; code: string } => {
  // Log the error
  if (error instanceof Error) {
    logError(error);
    
    if (error instanceof AppError) {
      return {
        message: error.message,
        code: error.code
      };
    }
    
    return {
      message: error.message,
      code: 'UNKNOWN_ERROR'
    };
  }
  
  // Handle non-Error objects
  const errorMessage = typeof error === 'string' ? error : 'An unknown error occurred';
  logError(new Error(errorMessage));
  
  return {
    message: errorMessage,
    code: 'UNKNOWN_ERROR'
  };
};