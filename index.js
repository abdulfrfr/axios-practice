// const axios = require('axios').default;


function result(res){
    document.getElementById('results').innerHTML=`
    <div>
    <div id="box">
        <h3 id="heads">Status: ${res.status}</h3>
    </div>

    <div id="box">
        <h3 id="heads">Data</h3>
        <p id="datas">${JSON.stringify(res.data, null, 2)}</p>
    </div>

    <div id="box">
        <h3 id="heads">Config</h3>
        <p  class="con">${JSON.stringify(res.config)}</p>
    </div>
    </div>
    `;
}

function getData(){
axios.get("https://jsonplaceholder.typicode.com/todos?_limit=3")
.then(res => {result(res),console.log(res)})
.catch(error => console.log(error));

}


function deleteData(){
axios.delete("https://jsonplaceholder.typicode.com/todos/2")
.then(res => {result(res),console.log(res)})
.catch(error => console.log(error));

}



function postData(){
axios.post("https://jsonplaceholder.typicode.com/todos/", {
    "completed": "false",
    "title": "okay this is added"
})
.then(res => {result(res),console.log(res)})
.catch(error => console.log(error));

}



function patchData(){
axios.patch("https://jsonplaceholder.typicode.com/todos/1", {
    "completed": "true",
    "title": "okay this is added"
})
.then(res => {result(res),console.log(res)})
.catch(error => console.log(error));

}


document.getElementById('get').addEventListener("click",getData);
document.getElementById('delete').addEventListener("click",deleteData);
document.getElementById('post').addEventListener("click",postData);
document.getElementById('put-patch').addEventListener("click",patchData);


