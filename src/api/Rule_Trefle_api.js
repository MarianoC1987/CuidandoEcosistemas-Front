import API from "./Rule_api";

const Rule_trefle_api = {
  getAll: async (search) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5173",
      },
    };
    const url = "/api/v1/trefle/search/";
    return await API.post(url, search)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.message;
      });
  },

  getOne: async () => {
    const url = "/api/v1/trefle/slug/:slug";
    return await API.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.message;
      });
  },
};

export default Rule_trefle_api;
