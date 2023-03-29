import API from "./Rule_api";

const Rule_forum = {
  getAllPublications: async () => {
    const url = "/api/v1/forum/allpublications";
    return await API.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.message;
      });
  },

  NewPost: async (data) => {
    const url = `/api/v1/forum/createpublication`;
    return await API.post(url, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.error;
      });
  },
};

export default Rule_forum;
