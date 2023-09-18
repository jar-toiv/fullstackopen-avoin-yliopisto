import handleServiceError from './errorHandler';

const catchAsync = (fn) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      handleServiceError(error);
      throw error;
    }
  };
};

export default catchAsync;
