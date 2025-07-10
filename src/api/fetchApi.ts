export const fetchApi = (
  url: string,
  method: "GET" | "POST" | "DELETE" | "PUT",
  body?: object
) => {
  const basicURL = `http://localhost:7070${url}`;
  const options = {
    method: method,
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch(basicURL, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}`);
      }
      if (response.status === 204) {
        return response;
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(`Ошибка ${error}`);
    });
};
