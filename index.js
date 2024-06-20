// menggunakan variable const data didalamnya tidak bisa diubah
// menggunakan variabke let data didalamnya dapat diubah
// menggunakan variable var data di dalamnya dapat diubah dan bersifat  



// const nama = "Joko";
// const umur = 15;
// const menikah = true;
// const berat_badan = 60.8
// const anak = ["tono", "wawan", "udin","hanif"];
// const all = {
//     nama: nama,
//     umur: umur,
//     berat_badan: berat_badan,


// }

// console.log(nama);

// const negaraFav = ["Indonesia", "Jepang", "Jerman"]

// console.log(negaraFav[0]);

// const biodata = {
//     name: "Muhammad Zaidan Nabih",
//     age: 18,
//     hobby: ["Membaca Novel", "Menulis Novel", "Badminton"],
//     isMarried: false,
    
// }

// console.log(biodata.name);
// console.log(biodata.age);
// console.log(biodata.hobby[0]);
// console.log(biodata.isMarried);

// const students = [
//     {
//         name: "Habib",
//         age: 17,
//         isMarried: false,
//         hobby: ["badminton", "bermain bola"]
//     },
//     {
//         name: "Shabri",
//         age: 18,
//         isMarried: true,
//         hobby: ["nonton film","main game"]
//     },
//     {
//         name: 'Abby',
//         age: 18,
//         isMarried: true,
//         hobby: ["main game", "nonton anime"]
//     },
//     {
//         name: 'Rafi',
//         age: 17,
//         isMarried: false,
//         hobby: ["main game", "3d"]
//     },
//     {
//         name: 'Yudha',
//         age: 17,
//         isMarried: false,
//         hobby: ["bermain game"]
//     },
// ]

// for(let i = 0; i < students.length; i++){    for  <--- sering digunakan pada backend
//     console.log(students[i]);
// }

// function Tambah(a,b) {                      function <--- sering digunakan pada frontend   
//     console.log(a + b);
// }
//  function Kurang(a, b){
//     console.log(a - b);
//  }

// function Bagi(a, b){
//     console.log(a / b );
// }
// function Kali(a, b){
//     console.log(a * b);
// }
// function RataRata(a, b, c){
//     console.log((a + b + c) / 3)
// }

// Tambah(2, 3)
// Kurang(3, 4)
// Bagi(4, 5)
// Kali(5, 6)
// RataRata(6, 7, 8)


//Promise 
// function dataDatas(){
//     return new Promise(function(resolve, reject) {
//         if(1 < 2 ) {
//             resolve("Janji di tepati");
//         } else {
//             reject("janji di ingkari");
//         }
//     });
// }

// const resultData = async () => {
//     const data = await dataDatas();
//     console.log(data);
// };

// resultData();
// function dataDatas(){
//     return new Promise(function(resolve, reject) {
//         if(1 > 2 ) {
//             resolve("Janji di tepati");
//         } else {
//             reject("janji di ingkari");
//         }
//     });
// };

// const resultData = async () => {
//     const data = await dataDatas();
//     console.log(data);
// };

// resultData();

const getPokemon = async () => {
    const result = await fetch(' https://pokeapi.co/api/v2/pokemon?limit=50');
    const resultObj = await result.json()
    console.log(resultObj)
};

getPokemon()
const getDetail = async () => {
    const result = await fetch(' https://pokeapi.co/api/v2/pokemon/25');
    const resultObj = await result.json()
    console.log(resultObj)
};

getDetail()

let get = 1;
const getData = async () => {
    const result = await
    fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
    const resultObj = await result.json()
    // console.log(resultObj.results)
    get = resultObj.results
}
const getP = async() => {
    await getData()
    console.log(get)
}
getP()
for (let i = 0; i < 10; i++) {
    console.log(i)
    // const getDetail = async () => {
    //     const result = await
    //     fetch(`https://pokeapi.co/api/v2/pokemon/$(i)`)
    //     const resultObj = await result.json()
    //     console.log(resultObj)
    // }
    // console.log(getDetail())
}