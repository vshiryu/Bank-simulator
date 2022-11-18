export const setUserToken = (token: string) => {
  localStorage.setItem("@token", JSON.stringify(token));
};
export const getUserToken = JSON.parse(localStorage.getItem("@token") || "");
