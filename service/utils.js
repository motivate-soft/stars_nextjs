export function handleError(res) {
  console.log("handleError:res", res);
  if (res instanceof Error) {
    throw Error("Network error");
  }

  return res.json().then((responseJson) => {
    console.log("handleError:json", responseJson);
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

// function parseJSON(response) {
//   return new Promise((resolve) =>
//     response.json().then((json) =>
//       resolve({
//         status: response.status,
//         ok: response.ok,
//         json,
//       })
//     )
//   );
// }

// export default function request(url, options) {
//   return new Promise((resolve, reject) => {
//     fetch(endpoint + url, options)
//       .then(parseJSON)
//       .then((response) => {
//         if (response.ok) {
//           return resolve(response.json);
//         }
//         // extract the error from the server's json
//         return reject(response.json.meta.error);
//       })
//       .catch((error) =>
//         reject({
//           networkError: error.message,
//         })
//       );
//   });
// }
