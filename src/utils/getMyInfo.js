import jwtDecode from "jwt-decode";

export const getMyInfo = () => {
  if (localStorage) {
    const token = localStorage.user;
    if (token) {
      const decoded = jwtDecode(token);
      return decoded.user;
    } else {
      return { error: "Not authenticated" };
    }
  }
};
