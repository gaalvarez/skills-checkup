const getRequest = (url: string): Promise<any> => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("error: " + response.status);
      }
    })
    .catch((err) => {
      console.log("Error en la petición ----> ", err);
    });
};

const deleteRequest = (url: string): Promise<any> => {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log("Error en la petición ----> ", err);
    });
};

const postRequest = (url: string, data: any): Promise<any> => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log("Error en la petición ----> ", err);
    });
};

const putRequest = (url: string, data: any): Promise<any> => {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log("Error en la petición ----> ", err);
    });
};

export { getRequest, postRequest, deleteRequest, putRequest };
