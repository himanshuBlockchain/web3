// web3 interface
Web3 = require("web3");

// setup a http provider
// web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://arbitrum-rinkeby.infura.io/v3/e821ea96b5f24f01b1566e31f6879d80"
  )
);

fs = require("fs");

const transferFrom = async (walletAddress, contractAddress, ABI) => {
  let contract = new web3.eth.Contract(ABI, contractAddress);
  // let endBlockNumber = await web3.eth.blockNumber; // This will not work in Infura
  let endBlockNumber = await web3.eth.getBlockNumber();

  console.log(endBlockNumber);

  let getEvent = await contract.events.Transfer(function(err,data){
    console.log(data)
  });
  return getEvent;
};

const transferTo = async (walletAddress, contractAddress, ABI) => {
  // let endBlockNumber = await web3.eth.blockNumber; // This will not work in Infura
  let endBlockNumber = await web3.eth.getBlockNumber();
  let contract = new web3.eth.Contract(ABI, contractAddress);

  let getEvent = await contract.getPastEvents("Transfer", {
    filter: { to: walletAddress },
    fromBlock: 0,
    toBlock: endBlockNumber,
  });

  return getEvent;
};

async function getAllEvents() {
  // let walletAddress = "0xE63121833736f1D56829eC0021de16585c43698A";
  let walletAddress = "0xBcE195d127cE562D435d624fF9338a999eAE2a49";
  // let contractAddress = "0x9C57d4A23e801db9e781a7077C3F8bd9872e428F";
  let contractAddress = "0xF5E4dDD2b8051EEC9bDF5E8ac628128D25e6d8B9";
  let ABI = JSON.parse(await fs.readFileSync("ABI.txt").toString());
  let fromEvents = await transferFrom(walletAddress, contractAddress, ABI);
  let toEvents = await transferTo(walletAddress, contractAddress, ABI);
  // console.log(fromEvents);
  // console.log(toEvents);
  var txnHistory = [];
  fromEvents.forEach(async function (e) {
    // console.log(e);
    txnHistory.push({ txnHash: e.transactionHash, txnData: e.raw });
    // console.log(e.returnValues);
  });

  toEvents.forEach(async function (e) {
    // txnHistory.push(e.raw)
    txnHistory.push({ txnHash: e.transactionHash, txnData: e.raw });
    // console.log(e.returnValues);
  });

  txnHistory.forEach(async function (e) {
    console.log(await getTxnDetail(e));
  });
}

async function getTxnDetail(txnEventData) {
  // console.log(txnEventData);
  let { txnHash, txnData } = txnEventData;
  let { data, topics } = txnData;
  let [eventSignature, from, to] = topics;
  // console.log(txnHash);
  // console.log(txnData);
  // console.log(data);
  // console.log(topics);
  // console.log(eventSignature);
  // console.log(from);
  // console.log(to);

  let txnReceipt = await web3.eth.getTransactionReceipt(txnHash);
  let txnTimeStamp = await web3.eth.getBlock(txnReceipt.blockNumber);
  // console.log(txnReceipt.blockNumber);
  // console.log(txnTimeStamp.timestamp);
  // console.log(txnTimeStamp.timestamp);

  // Converting Amount Transferred from Hex to Number
  data = web3.utils.hexToNumberString(data);
  data = web3.utils.fromWei(data, "ether");

  let result = {
    from: from,
    to: to,
    value: data,
    timestamp: txnTimeStamp.timestamp,
    txnhash: txnHash,
    txnReceipt: txnReceipt,
  };
  return result;
  // console.log(result);
}
async function getTxnHashDetails(txnHash) {
  let txnReceipt = await web3.eth.getTransactionReceipt(txnHash);
  // let txnTimeStamp = await web3.eth.getBlock(txnReceipt.blockNumber);
  return txnReceipt;
  // console.log(txnReceipt);
}

// getAllEvents();

// getTxnHashDetails(
//   "0xd750eaa47fbfe03f70cd85b0b0fce6fd9e3efaa10301f40166b361d5b66d80a4"
// );

async function testMe() {
  let walletAddress = "0xBcE195d127cE562D435d624fF9338a999eAE2a49";
  // let contractAddress = "0x9C57d4A23e801db9e781a7077C3F8bd9872e428F";
  let contractAddress = "0xF5E4dDD2b8051EEC9bDF5E8ac628128D25e6d8B9";
  let ABI = JSON.parse(await fs.readFileSync("ABI.txt").toString());
  let fromEvents = await transferFrom(walletAddress, contractAddress, ABI);

  console.log(fromEvents);
}

testMe();
