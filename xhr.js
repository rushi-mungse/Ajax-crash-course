
const axiosRequest = (method, url, body = null) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                resolve(xhr.response);
                console.log("Request Failed!");
            } else {
                resolve(xhr.response);
            }
        }
        xhr.onerror = () => {
            resolve(xhr.response);
        }

        xhr.send(JSON.stringify(body));
    })

}

const url = 'https://jsonplaceholder.typicode.com/users';

// axiosRequest('GET',url);

axiosRequest('POST', url, {
    name: "Rushi M",
    job: "software developer"
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


//fetch api
function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}

getData(url);
