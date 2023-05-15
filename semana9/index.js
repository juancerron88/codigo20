const API_URL = "https://jsonplaceholder.typicode.com/users";

const xhr = new XMLHttpRequest();

function onRequestHandler() {
if(this.readyState == 4 && this.status == 200){


    console.log(this.response);
}

}
xhr.addEventlistener("load", onRequestHandler);
xhr.open("GET", '${API_URL}');
xhr.send();