const handleServiceError = (error) => {
  //* loggers for debug purposes
  // console.log('Service Error', error);
  // console.log('Data:', error.response.data);
  // console.log('Status:', error.response.status);
  // console.log('Headers:', error.response.headers);
  // console.log('Message:', error.message);
  //! !!!! Feedback from backend
  // console.log('Content', error.response.data.message);
};

export default handleServiceError;