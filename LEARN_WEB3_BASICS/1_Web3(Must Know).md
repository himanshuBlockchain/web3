### Initialisation
npm init -y
npm install --save web3


### Some Details/Credentials
My RinkyBy(Metamask) Wallet Address = 0xBcE195d127cE562D435d624fF9338a999eAE2a49 
My RinkyBy(Metamask) Wallet Address 2 = =0xB0Baa64C1af74c535A2880A1B620d9d8eaFCc89e

HTTP PROVIDER URLS
**Infura HTTP URL** = https://rinkeby.infura.io/v3/060691df70bc4bb5bf9ca36322fe8705
**Ganache RPC URL** = HTTP://127.0.0.1:7545


### In NODE REPL DO FOLLOW THE BELOW COMMAND
1. node   
2. console.clear()
3. let Web3 =require("web3");
4. let web3 = new Web3(new Web3.providers.HttpProvider(""));
5. **How to Connect To Web3**
let web3= new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/060691df70bc4bb5bf9ca36322fe8705"));
6. **How to get Balance of any Wallet in Wei**
web3.eth.getBalance("0xBcE195d127cE562D435d624fF9338a999eAE2a49").then(console.log);
7. **How to get Balance of any Wallet in Ether**
web3.eth.getBalance("0xBcE195d127cE562D435d624fF9338a999eAE2a49").then(function(result){console.log(web3.utils.fromWei(result,"ether"))});
8. **How to send ethers from 1 address to another** // Note Infura do not support this eth_sendTransaction Function
web3.eth.sendTransaction({from:"<fromaddress>",to:"<toaddress>",value:web3.utils.toWei("1","ether")});

**OR**

web3.eth.sendTransaction({from:"0x1D1175D8C5725005B11dA1840413D17218bBb81e",to:"0x2779D30D063e2E86CFa77C7cf91E5bd2c1626999",value:web3.utils.toWei("4","ether")});

9. **How to All Accounts(Wallet Address) in Ganache**
web3.eth.getAccounts().then(console.log);