// web3 interface
Web3 = require("web3");

// setup a http provider
web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

fs = require("fs");

//  BigNumber = require('big-number');

async function getTransactionsByAccount(
  myaccount,
  startBlockNumber,
  endBlockNumber
) {
  if (endBlockNumber == null) {
    endBlockNumber = await web3.eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber == null) {
    startBlockNumber = 0;
    // startBlockNumber = endBlockNumber - 1000;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log(
    'Searching for transactions to/from account "' +
      myaccount +
      '" within blocks ' +
      startBlockNumber +
      " and " +
      endBlockNumber
  );

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 == 0) {
      console.log("Searching block " + i);
    }
    var block = await web3.eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach(async function (e) {
        // console.log(e);
        if (myaccount == "*" || myaccount == e.from || myaccount == e.to) {
          //------------------
          // console.log("TX_HASH", e.hash);
          let a =await web3.eth.getTransactionReceipt(e.hash);
          // console.log("TX_HASH", a  );
          // console.log("TX_HASH_DATA", a.logs  );
          let [b] =a.logs;
          if (typeof b !== 'undefined'){
            console.log("b",b)
            let data = web3.utils.hexToNumberString(b.data);
            data =web3.utils.fromWei(data,"ether")
            console.log("TX_HASH_DATA", data  );
          }
          console.log("Receipt", a.logs  );

          // if (a.logs== [] )
          // console.log("TX_FROM", e.from  );
          // console.log("TX_TO", e.to  );

          //------------------
          // console.log("  tx hash          : " + e.hash + "\n"
          //   + "   nonce           : " + e.nonce + "\n"
          //   + "   blockHash       : " + e.blockHash + "\n"
          //   + "   blockNumber     : " + e.blockNumber + "\n"
          //   + "   transactionIndex: " + e.transactionIndex + "\n"
          //   + "   from            : " + e.from + "\n"
          //   + "   to              : " + e.to + "\n"
          //   + "   value           : " + e.value + "\n"
          //   + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
          //   + "   gasPrice        : " + e.gasPrice + "\n"
          //   + "   gas             : " + e.gas + "\n"
          //   + "   input           : " + e.input);
        }
      });
    }
  }
}

getTransactionsByAccount("0xE63121833736f1D56829eC0021de16585c43698A", 0, 100);
// getTransactionsByAccount("0xDeEceefc082c60d65497f836f4245ED817CBf966", 0, 100);

async function getTrcERC20() {
  let ABI_ERC20 = "";
  let fileContent = fs.readFileSync("ABI.txt").toString();
  let fileContentJSON = JSON.parse(fs.readFileSync("ABI.txt").toString());
  // console.log(fileContent);
  let contract = new web3.eth.Contract(
    fileContentJSON,
    "0x9C57d4A23e801db9e781a7077C3F8bd9872e428F"
  );
  console.log(contract);
}

//  getTrcERC20();

async function printTransaction(txHash) {
  var tx = await web3.eth.getTransaction(txHash);
  if (tx != null) {
    console.log("------------------------------");
    console.log("------------------------------");
    console.log("------------------------------");
    console.log(
      "  tx hash          : " +
        tx.hash +
        "\n" +
        "   nonce           : " +
        tx.nonce +
        "\n" +
        "   blockHash       : " +
        tx.blockHash +
        "\n" +
        "   blockNumber     : " +
        tx.blockNumber +
        "\n" +
        "   transactionIndex: " +
        tx.transactionIndex +
        "\n" +
        "   from            : " +
        tx.from +
        "\n" +
        "   to              : " +
        tx.to +
        "\n" +
        "   value           : " +
        tx.value +
        "\n" +
        "   gasPrice        : " +
        tx.gasPrice +
        "\n" +
        "   gas             : " +
        tx.gas +
        "\n" +
        "   input           : " +
        tx.input
    );
  }
}

//  printTransaction("0xacc068161844571304297ea494b805b9af42ccdbcb7a4810614584d3a8ea4f65");

async function printFunctions() {
  await getTransactionsByAccount(
    "0xE63121833736f1D56829eC0021de16585c43698A",
    0,
    100
  );
  await printTransaction(
    "0xacc068161844571304297ea494b805b9af42ccdbcb7a4810614584d3a8ea4f65"
  );
}

//  printFunctions()

// References : https://ethereum.stackexchange.com/questions/2531/common-useful-javascript-snippets-for-geth/3478#3478

var BigNumber = web3.utils.BN;

async function transferEntireBalance(from, to) {
  var gas = new BigNumber(21000);

  console.log(gas);
  var price = await web3.eth.gasPrice; // current average price; or set your own
  var balance = await web3.eth.getBalance(from);
  var value = balance.minus(gas.times(price));
  if (value.greaterThan(0)) {
    var txn = await web3.eth.sendTransaction({
      from: from,
      to: to,
      gasPrice: price,
      gas: gas,
      value: value,
    });
    console.log("  Transfer", from, "to", to, ":", txn);
    return txn;
  }
  console.log("  Transfer " + from + " to " + to + ": (No funds available)");
  return null;
}
////---------------------------------------------------------------------------------

async function transferEntireBalance2(from, to, value) {
  await web3.eth.sendTransaction({
    from: from,
    to: to,
    value: web3.utils.toWei(`${value}`, "ether"),
  });
}

// transferEntireBalance2()

// transferEntireBalance2("0xFad267ff9c55293a577EF7D7003A5a74C2d8581c","0xDeEceefc082c60d65497f836f4245ED817CBf966",13);

async function getTxn3() {
  var blocknumber = await web3.eth.getBlockNumber();
  var transaction = await web3.eth.getTransactionFromBlock("latest", 0);
  console.log(transaction);
}

// getTxn3();
