const BASE_URL = 'https://dws-recruiting-bands.dwsbrazil.io/api';

const API = {
  get: async (url: string): Promise<any> => fetch(`${BASE_URL}/${url}`).then(response => response.json())
};

export default API;
