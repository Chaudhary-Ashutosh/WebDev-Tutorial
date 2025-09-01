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

let url = 'https://catfact.ninja/fact';
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
async function getFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }catch(e){
        console.log("ERROR -",e);
    }
    console.log("bye");
}