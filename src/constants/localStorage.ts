export const setLocalStorageData = (
  token: string,
  userId: string,
  accountId: string
) => {
  localStorage.setItem("@token", JSON.stringify(token));
  localStorage.setItem("@userId", JSON.stringify(userId));
  localStorage.setItem("@accountId", JSON.stringify(accountId));
};
export const getUserToken = JSON.parse(localStorage.getItem("@token") || "");
export const getUserId = JSON.parse(localStorage.getItem("@userId") || "");
export const getAccountId = JSON.parse(
  localStorage.getItem("@accountId") || ""
);
