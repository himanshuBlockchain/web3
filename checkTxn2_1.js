const { SSL_OP_ALL } = require("constants");

// web3 interface
Web3 = require("web3");

// setup a http provider
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

fs = require("fs");

const transferFrom = async (walletAddress, contractAddress, ABI) => {
  let contract = new web3.eth.Contract(ABI, contractAddress);
  let endBlockNumber = await web3.eth.blockNumber;

  let getEvent = await contract.getPastEvents("Transfer", {
    filter: { from: walletAddress },
    fromBlock: 0,
    toBlock: endBlockNumber,
  });
  return getEvent;
};

const transferTo = async (walletAddress, contractAddress, ABI) => {
  let endBlockNumber = await web3.eth.blockNumber;
  let contract = new web3.eth.Contract(ABI, contractAddress);

  let getEvent = await contract.getPastEvents("Transfer", {
    filter: { to: walletAddress },
    fromBlock: 0,
    toBlock: endBlockNumber,
  });

  return getEvent;
};

async function getAllEvents() {
  let walletAddress = "0x59A80b43F6c74743EE0e3796fFE5915529260476";
  let contractAddress = "0xd3FFDD6082De9bA9c8da26ce2787429B3241A5D7";
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
console.time("hh")
txnHistory.forEach(async function (e) {
    console.table(await getTxnDetail(e));
});
console.timeEnd("hh")
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
  console.log(txnTimeStamp.timestamp);

  // Converting Amount Transferred from Hex to Number
  data = web3.utils.hexToNumberString(data);
  data = web3.utils.fromWei(data, "ether");

  let result = {
    from: from,
    to: to,
    value: data,
    timestamp: txnTimeStamp.timestamp,
    txnhash: txnHash,
  };
  return result;
  // console.log(result);
}
async function getTxnHashDetails(txnHash) {
  let txnReceipt = await web3.eth.getTransactionReceipt(txnHash);
  let txnTimeStamp = await web3.eth.getBlock(txnReceipt.blockNumber);
  return txnReceipt;
  // console.log(txnReceipt);
}

getAllEvents();

// getTxnHashDetails(
//   "0xd750eaa47fbfe03f70cd85b0b0fce6fd9e3efaa10301f40166b361d5b66d80a4"
// );

async function getAllEvents1() {
  let walletAddress = "0x59A80b43F6c74743EE0e3796fFE5915529260476";
  let contractAddress = "0xd3FFDD6082De9bA9c8da26ce2787429B3241A5D7";
  let ABI = JSON.parse(await fs.readFileSync("ABI.txt").toString());
  let fromEvents = await transferFrom(walletAddress, contractAddress, ABI);
  let toEvents = await transferTo(walletAddress, contractAddress, ABI);
  let endBlockNumber = await web3.eth.blockNumber;
  let contract = new web3.eth.Contract(ABI, contractAddress);

  let getEvent = await contract.getPastEvents("Transfer", {
    filter: [{ to: walletAddress } || { from: walletAddress }],
    fromBlock: 0,
    toBlock: endBlockNumber,
  });

console.log(getEvent)
// console.table(getEvent)
}

getAllEvents1();


/*
SpeechRecognitionResult
SSL_OP_ALL
SSL_OP_ALL
*/