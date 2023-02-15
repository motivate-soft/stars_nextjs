export function authHeader() {
  return {
    Authorization: `Bearer ${getCookie("accessToken")}`,
  }
}

export function handleError(res) {
  if (res instanceof Error) {
    throw Error("Network error");
  }

  return res.json().then((responseJson) => {
    let error = new Error();

    if (res.status >= 400 && res.status < 500) {
      error = {
        code: "client-error",
        status: res.status,
        statusText: res.statusText,
        message: responseJson.message || "Client Error",
      };
      throw error;
    }

    if (res.status >= 500) {
      error = {
        code: "server-error",
        status: res.status,
        statusText: res.statusText,
        message: responseJson.message || "Server Error",
      };
      throw error;
    }

    if (res.status > 300 && res.status < 400) {
      error = {
        code: "redirect",
        status: res.status,
        statusText: res.statusText,
        message: responseJson.message || "Redirection",
      };
    }
    throw error;
  });
}

