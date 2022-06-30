fs = require("fs");

// import {hello}  from "./coingecko3";

const myModule = require('./coingecko3.js');


async function dataCrawlerScript() {
  let rawdata = await fs
    .readFileSync("fetchContractAddressScript/coingecko2.js")
    .toString("utf-8");
  //   let data = JSON.parse(rawdata);
  console.log(rawdata);

  let myArray = Array.from(rawdata);
  // console.log(myArray.length)

  // let myArray2 =JSON.parse("{"+rawdata+"}")
  // console.log(myArray2.length)

  // let [...myNewdata] =rawdata;
  // console.log(myNewdata)

  // myArray.forEach((element)=>{console.log(element.href)})

  // },
  // {

  // fs.writeFileSync( `fetchABIScript/ABI_List/${contractAddress}.js`, ABI )
}

// dataCrawlerScript();

console.log(myModule);
