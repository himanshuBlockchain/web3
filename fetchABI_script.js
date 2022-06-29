const axios = require("axios").default;
fs = require("fs");

let API_KEY = "CWVP3Z12H2KTI34KE279M9HXPNQGAYJF9U";

async function getABI_fromContractAddress(contractAddress) {
  let arbitrum_explorer_url = `https://api.arbiscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${API_KEY}`;
  try {
    const response = await axios.get(arbitrum_explorer_url);
    // console.log(response.result);

    let ABI = response.data.result;
    console.log(response);
    // console.log(response.data.status);

    //Creating File And Saving The Same if Request is successful
    if (response.data.status ==1){
        fs.writeFileSync( `ABI_List/${contractAddress}.js`, ABI )
    }
  } catch (error) {
    console.error(error);
  }
}
getABI_fromContractAddress("0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9");
