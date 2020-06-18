const HEADER = (method, data, type = "json") => {
    const myHeaders = new Headers();
    myHeaders.append("token", store("usertoken"));
    if (method === "GET") {
        return {
            method: method,
            headers: myHeaders,
        };
    }
    if (type == "form") {
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    } else if (type == "json") {
        myHeaders.append("Content-Type", "application/json");
    }
    return {
        body: data,
        headers: myHeaders,
        method: method,
    };
};

const http = (url, method, data, type) => {
    storex.commit("changeShowOverlay", true);
    return fetch(PATHURL + url, HEADER(method, data, type)).then((response) => {
        return response.json();
    });
};
export default http;

