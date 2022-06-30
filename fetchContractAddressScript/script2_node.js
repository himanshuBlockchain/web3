fs = require("fs");

let hello = [
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    innerText: "WETH/USDC ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "DPX/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x539bde0d7dbd336b79148aa742883198bbf60342&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "MAGIC/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x32eb7902d4134bf98a28b963d26de779af92a212&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "RDPX/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    innerText: "WETH/USDT ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a",
    innerText: "WETH/MIM ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0x8d9ba570d6cb60c7e3e0f31343efe75ab8e65fb1",
    innerText: "WETH/GOHM ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "WBTC/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x51318b7d00db7acc4026c88c3952b66278b6a67f&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "PLS/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    innerText: "WETH/DAI ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x539bde0d7dbd336b79148aa742883198bbf60342&outputCurrency=0x8d9ba570d6cb60c7e3e0f31343efe75ab8e65fb1",
    innerText: "MAGIC/GOHM ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
    innerText: "WETH/LINK ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x10393c20975cf177a3513071bc110f7962cd67da&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "JONES/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9&outputCurrency=0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    innerText: "USDT/USDC ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0xc136e6b376a9946b156db1ed3a34b08afdaed76d&outputCurrency=0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    innerText: "CREDA/USDT ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xb41bd4c99da73510d9e081c5fadbe7a27ac1f814",
    innerText: "WETH/IMO ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x10393c20975cf177a3513071bc110f7962cd67da&outputCurrency=0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    innerText: "JONES/USDC ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x4425742f1ec8d98779690b5a3a6276db85ddc01a&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "DOG/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xdb298285fe4c5410b05390ca80e8fbe9de1f259b",
    innerText: "WETH/FOREX ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0x876ec6be52486eeec06bc06434f3e629d695c6ba",
    innerText: "WETH/FLUID ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x326c33fd1113c1f29b35b4407f3d6312a8518431&outputCurrency=0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    innerText: "STRP/USDC ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x2cab3abfc1670d1a452df502e216a66883cdf079&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "L2DAO/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x86b3353387f560295a8fa7902679735e5f076bd5&outputCurrency=0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    innerText: "OMIC/USDC ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x86b3353387f560295a8fa7902679735e5f076bd5&outputCurrency=0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a",
    innerText: "OMIC/MIM ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x155f0dd04424939368972f4e1838687d6a831151&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "ADOGE/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0xa4f595ba35161c9ffe3db8c03991b9c2cbb26c6b&outputCurrency=0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    innerText: "LYS/USDC ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0x9f20de1fc9b161b34089cbeae888168b44b03461",
    innerText: "WETH/ARBI ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xf0a5717ec0883ee56438932b0fe4a20822735fba",
    innerText: "WETH/XTK ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x2c110867ca90e43d372c1c2e92990b00ea32818b&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "STBZ/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0x9c67ee39e3c4954396b9142010653f17257dd39c",
    innerText: "WETH/IMX ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xed3fb761414da74b74f33e5c5a1f78104b188dfc",
    innerText: "WETH/NYAN ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "SPELL/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xd4d42f0b6def4ce0383636770ef773390d85c61a",
    innerText: "WETH/SUSHI ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x123389c2f0e9194d9ba98c21e63c375b67614108&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "EMAX/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0x99c409e5f62e4bd2ac142f17cafb6810b8f0baae",
    innerText: "WETH/0X99C... ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0xda10009cbd5d07dd0cecc66161fc93d7c9000da1&outputCurrency=0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    innerText: "DAI/USDC ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x51fc0f6660482ea73330e414efd7808811a57fa2&outputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    innerText: "PREMIA/WETH ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0xee9801669c6138e84bd50deb500827b776777d28&outputCurrency=0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    innerText: "O3/USDT ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55&outputCurrency=0xf018865b26ffab9cd1735dcca549d95b0cb9ea19",
    innerText: "DPX/0XF018... ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xa7aa2921618e3d63da433829d448b58c9445a4c3",
    innerText: "WETH/0XA7A... ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xe71db7a96dab25cdb9f4cbc7f686da02192b0e88",
    innerText: "WETH/0XE71... ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0xdad3abce6fb87fa0355203b692723a7ee8aa9d63",
    innerText: "WETH/0XDAD... ",
  },
  {
    href: "https://app.sushi.com/swap?inputCurrency=0x82af49447d8a07e3bd95bd0d56f35241523fbab1&outputCurrency=0x9e758b8a98a42d612b3d38b66a22074dc03d7370",
    innerText: "WETH/0X9E7... ",
  },
];

// console.log(hello);


// Learn how to use String Functions
// String Function : indexOf
// String Function : lastIndexOf
// String Function : slice
// String Function : split
// Learn How to save file
var dataArray = [];
hello.forEach((element) => {
  let index1 = element.href.indexOf("=");
  let result1 = element.href.slice(index1 + 1, index1 + 43);
  // console.log(result1);
  let index2 = element.href.lastIndexOf("=");
  let result2 = element.href.slice(index2 + 1, index2 + 43);
  // console.log(result2);
  let tokenSplit = element.innerText.split("/");
  // console.log(tokenSplit);

  let resultFirst = {
    tokenName: tokenSplit[0],
    contractAddress: result1,
  };
  let resultSecond = {
    tokenName: tokenSplit[1],
    contractAddress: result1,
  };
  dataArray.push(resultFirst);
  dataArray.push(resultSecond);
  //  console.log(result)
});

console.log(dataArray);

async function saveDetailsToFile(dataArray) {
  fs.writeFileSync(
    `fetchContractAddressScript/FinalList.js`,
    JSON.stringify(dataArray)
  );
}

saveDetailsToFile(dataArray);
