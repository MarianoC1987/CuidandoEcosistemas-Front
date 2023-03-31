import API from "./Rule_api";

const Rule_trefle_api = {
  getAll: async (search) => {
    const url = "/api/v1/trefle/search";
    return await API.get(url, search)
      .then((response) => {
        console.log(url, search);
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.message;
      });
  },

  getOne: async () => {
    const url = "/api/v1/trefle/slug/:slug";
    return await API.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.message;
      });
  },
};

export default Rule_trefle_api;
