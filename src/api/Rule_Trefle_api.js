import API from "./Rule_api";

const Rule_trefle_api = {
  getAll: async () => {
    const url = "/api/v1/trefle/search";
    return await API.get(url)
      .then((response) => {
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
