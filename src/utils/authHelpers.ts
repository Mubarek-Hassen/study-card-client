import { redirect } from "react-router-dom";

export const setAuthToken =(string: string) =>{
  localStorage.setItem("token", string)
}

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function removeAuthToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/auth?mode=login")
}

export function tokenLoader() {
  return getAuthToken();
}

export const checkAuthLoader = () => {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth?mode=register");
  }
  return null;
};
