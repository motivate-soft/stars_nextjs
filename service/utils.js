import { removeCookie } from "@redux/authentication/auth.utils";
import { notification } from "@iso/components";
export const handleError = (res) => {
  console.log("___handleError___", res);
  if (res instanceof Error) {
    throw Error("Network error");
  }

  let error = new Error();
  // res.json().then((responseJson) => {
  //     error = {
  //         status: res.status,
  //         statusText: res.statusText,
  //         message: responseJson.detail || 'Application Error'
  //     }
  //     throw error
  // })
  if (res.status >= 400 && res.status < 500) {
    if (res.status === 403) {
      notification("warning", "Given token is no longer valid");
      removeCookie("accessToken");
    }

    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || "Application Error",
    };
    throw error;
  }

  if (res.status >= 500) {
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || "Server Error",
    };
    throw error;
  }

  error = {
    ...error,
    status: res.status,
    statusText: res.statusText,
    message: res.detail || "Error",
  };
  throw error;
};
