import API from "./Rule_api";

export const loginSesion = async (usuario) => {
  let url = "/api/v1/users/login"; /* ({{URL}}/api/v1/users/login) */
  return await API.post(url, usuario)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.message || "Error procesando la solicitud";
    });
};

export const userRegister = async (usuario) => {
    let url = "/api/v1/users/register"; /* ({{URL}}/api/v1/users/register) */
    return await API.post(url, firstname, lastname, email, password)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        return response.data;
      })
      .catch((error) => {
        throw error.response.data.message || "Error procesando la solicitud";
      });
  };


export const isAuth = () => {
  if (typeof window !== "undefined") {
    const tokenChecked = localStorage.getItem("token"); //compruebo que el usuario esté autenticado
    if (tokenChecked) {
      return true;
    } else {
      return false;
    }
  }
};
