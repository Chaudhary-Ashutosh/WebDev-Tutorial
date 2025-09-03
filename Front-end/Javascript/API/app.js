// JSON: JavaScript Object Notation

let jsonRes = 
    '{"fact":"Both humans and cats have identical regions in the brain responsible for emotion.","length":81}';
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.length);
console.log(validRes.fact);

let student ={
    name: "Ashutosh",
    marks: 95,
};

console.log(JSON.stringify(student)); // '{"name":"Ashutosh","marks":95}'


// fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         console.log("data1= ",data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2: ",data2.fact);
//     })
//     .catch((err)=>{
//         console.log("ERRO -",err);
//     });
// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }catch(e){
//         console.log("ERROR -",e);
//     }
//     console.log("bye");
// }
let url = 'https://catfact.ninja/fact';
let btn = document.querySelector("button");

btn.addEventListener("click", async() =>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        return "NO fact found"
    }
}

let btn1 = document.querySelector(".btn1");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn1.addEventListener("click", async()=>{
    let link = await getImage();
    let img = document.querySelector("#result1");
    img.setAttribute("src", link);
    console.log(link);
});

async function getImage() {
    try {
        let res1 = await axios.get(url2);
        return res1.data.message;
    }catch(e){
        console.log("error -",e);
        return "/";
    }
}

const urt = "https://icanhazdadjoke.com/";
async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let res3 = await axios.get(url);
        console.log(res3.data);
    } catch (err){
        console.log(err);
    }
}
console.dir(getJokes());

//University List
let url3 = "http://universities.hipolabs.com/search?name=";
let btn3 = document.querySelector(".btn3");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    
    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr){
    let list = document.querySelector("#list");
    for(col of colArr){
        console.log(col.name);

        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url3 + country);
        return res.data;
    } catch (e) {
        console.log("error: ", e);
    return [];
    }
}

