
const app = document.getElementById("app");

updateView();
let axiosData = [];
let fetchData = [];


function getDataWithAxios(){ 
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        console.log('Data Retrieved Succesfully')
        console.log(response.data);
       
        displayData(axiosData);
    })
    .catch(error => {
      console.error('There has been an error:', error);
    })
  
}

 function getDataWithFetch(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
.   then(response =>{
    if(response.ok){
        console.log('Data Retrieved Succesfully')
    }
    return response.json();
    })
    
    .then (data => console.log(data))
    .catch(error => console.log('There has been an error:', error));

}



function updateView(){
    app.innerHTML=/*HTML*/`
    <button onclick = "getDataWithFetch()">Get Data With Fetch</button>
    <button onclick = "getDataWithAxios()">Get Data With Axios</button>
    <button onclick = "displayData()">Display Data</button>
    `
}

function displayData(data) {
    if (data == false || data.length === 0) {
        app.innerHTML = "<p>No data available.</p>";
        return;
    }

    //very unsure as to how i should print out the data the way i want, this comment will disapear when i figure it out.
    app.innerHTML = /*HTML*/`
    <ul>
       
    </ul>
    `;
}

      
    
    
     

    


