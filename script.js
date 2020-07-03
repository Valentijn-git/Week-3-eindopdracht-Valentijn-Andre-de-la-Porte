const apiURL = "https://wincacademydatabase.firebaseio.com/valentijn.json";
const li = document.createElement("li");
const p = document.createElement("p");
 const response = await fetch(apiURL);

//const addListToDom = (whateverfilter) => {
//    li.classList.add("list-item");
//    p.innerHTML = response;   
//    li.appendChild(a);
//    p.appendChild(img);  
//    return li;
//};



let getData = async function() {
    try {
      const response = await fetch(apiURL);
      (response) => response.json;
      console.log(responseAllTasks);
      console.log("you did it");
    } catch (error) {
      console.log(error);
    }
}

const responseAllTasks = response.map((response) => {
    return response.tasks.description
})

getData();

//const data = { task: 'brood smeren' };

//async function sendData() {
//    try{
//        const response = await fetch(apiURL, {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json',
//        },
//        body: JSON.stringify(data),
//        });
//        (response) => response.json;
//        (data =>{console.log('succes', data);
//    })
//}catch(error) {
//    console.log(error);
//}};

//sendData()

//async function sendData(){
//    try {
//      const response = await fetch(apiURL);
//      (response) => response.json;
//     console.log(response);
//     console.log("you did it");
//  } catch (error) {
//   console.log(error);
// }
//}
