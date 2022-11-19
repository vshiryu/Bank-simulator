export const setLocalStorageData = (
  token: string,
  userId: string,
  accountId: string
) => {
  localStorage.setItem("@token", token);
  localStorage.setItem("@userId", userId);
  localStorage.setItem("@accountId", accountId);
};
export const getUserToken = JSON.parse(localStorage.getItem("@token") || "{}");
export const getUserId = JSON.parse(localStorage.getItem("@userId") || "{}");
export const getAccountId = JSON.parse(
  localStorage.getItem("@accountId") || "{}"
);
