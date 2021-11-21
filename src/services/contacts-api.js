import axios from 'axios';

const BASE_URL = 'https://6196d384af46280017e7e2d4.mockapi.io/contacts';

// async function FetchWithErrorHandling(url = '') {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data;
//     } catch (err) {
//       return console.log(err.message);
//     }

export async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}

export async function fetchAddContact(item) {
  const { data } = await axios.post(`${BASE_URL}`, item);
  return data;
}

export async function fetchDeleteContact(id) {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
}
