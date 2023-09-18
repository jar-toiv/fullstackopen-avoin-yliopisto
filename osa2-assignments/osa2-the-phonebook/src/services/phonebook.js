import axios from 'axios';
import catchAsync from '../utils/catchAsync';

const baseUrl = 'http://localhost:3001/api/persons';

const getAll = catchAsync(async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

const create = catchAsync(async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
});

const deleteContact = catchAsync(async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
});

const update = catchAsync(async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
});

export default { getAll, create, deleteContact, update };
