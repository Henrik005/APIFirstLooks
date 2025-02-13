
const app = document.getElementById("app");

updateView();
let axiosData = [];
let fetchData = [];


function getDataWithAxios(){ 
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(response =>{
        console.log('Data Retrieved Succesfully')
        console.log(response.data);
        axiosData = response.data;
    })
    .catch(error => {
      console.error('There has been an error:', error);
    })
  
}
//Here is both of my data aquisition functions, one uses Fetch and the other Axios, but they both ultimatly do the same thing.
//Once they have the data from the API that i want, i console log it and then add it to their own respective arrays near the top of the file.
//Wich i then use in my printData() function to display it in the HTML document by looping trough the data with a forEach().
//The primary difference between Fetch and Axios is that Axios is more automated, it does things like converting the response to json-
//-and handling http errors on its own which Fetch doesn't do, hence why i have if(response.ok) and return response.json inside of the Fetch function-
//-but not the Axios function. However Fetch has one up on Axios in the sense that it is built in, so, you don't need external libraries to use it.
//So, you don't have to import it or anything you can use it right off the rip.
 function getDataWithFetch(){
     fetch('https://jsonplaceholder.typicode.com/posts')
.   then(response =>{
    if(response.ok){
        console.log('Data Retrieved Succesfully')
    }
    return response.json();
    })
    .then(response =>{fetchData = response
        console.log(response)
    })
    .catch(error => console.log('There has been an error:', error));
        
}

function updateView(){
    app.innerHTML=/*HTML*/`
    <button onclick = "getDataWithFetch()">Get Data With Fetch</button>
    <button onclick = "getDataWithAxios()">Get Data With Axios</button>
    <button onclick = "displayData()">Display Data</button>
    `
}


function displayData() {
    let content = '<ul>';

    if (axiosData.length === 0) {
        content += `<p>No Axios Data Found</p>`;
    }  
     else {
        content += "<h3>Axios Data (Users)</h3>";
        axiosData.forEach(user => {
            content += `<li>${user.name} - ${user.email}</li>`;
        });
            content += "</ul>";
    }

    
    if (fetchData.length === 0) {
        content += `<p>No Fetch Data Found</p>`;
    }   
    else {
        content += "<h3>Fetch Data (Posts)</h3><ul>";
        fetchData.forEach(post => {
            content += `<li>${post.title} - ${post.body}</li>`;
        });
            content += "</ul>";
    }

    
    app.innerHTML = content;
}
