export const setLocalStorageData = (
  token: string,
  userId: string,
  accountId: string
) => {
  localStorage.setItem("@token", token);
  localStorage.setItem("@userId", userId);
  localStorage.setItem("@accountId", accountId);
};
export const getUserToken = localStorage.getItem("@token") || "{}";
export const getUserId = localStorage.getItem("@userId") || "{}";
export const getAccountId = localStorage.getItem("@accountId") || "{}";
