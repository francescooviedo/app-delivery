const APIURL = 'http://localhost:3001/user';

const apiCall = async () => {
  try {
    const fetchAPI = await fetch(`${APIURL}`);
    const result = await fetchAPI.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export default apiCall;
