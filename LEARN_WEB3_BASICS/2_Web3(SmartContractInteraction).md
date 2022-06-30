
### Initialise Web3 First
1. let Web3 =require("web3");
2. let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

### PART 1 : Connect with Smart Contract
let contract = new web3.eth.Contract(<ABI>,"<ContractAddress>");

//  **We are using ABI for demo.sol smart contract**

### PART 2 : READ FUNCTION : How to get value of any ReadOnly Function of Smart Contract
contract.methods.x().call().then(console.log);

### PART 3 : WRITE FUNCTION : Interacting with Write Functions of Smart Contract

contract.methods.set(90).send({from:"<address from which u want to call the function>"});

contract.methods.set(90).send({from:"0x1D1175D8C5725005B11dA1840413D17218bBb81e"});