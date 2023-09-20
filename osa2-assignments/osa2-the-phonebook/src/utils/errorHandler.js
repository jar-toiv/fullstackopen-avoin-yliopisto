const handleServiceError = (error) => {
  //* loggers for debug purposes
  // console.log('Service Error', error);
  // console.log('Data:', error.response.data);
  // console.log('Status:', error.response.status);
  // console.log('Headers:', error.response.headers);
  // console.log('Message:', error.message);
  //! !!!! Feedback message from backend
  // console.log('Content', error.response.data.message);

  if (error.response) {
    const responseData = error.response.data;

    if (error.response.status === 400 && responseData.message) {
      return responseData.message;
    }
  }
  return 'An unexpected error occurred. Please try again.';
};
export default handleServiceError;
