const APIURL = 'http://localhost:3001/';

const apiCallGeneric = async (ENDPOINT) => {
  try {
    const fetchAPI = await fetch(`${APIURL}${ENDPOINT}`);
    const result = await fetchAPI.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export default apiCallGeneric;
