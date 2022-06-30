// -------------------------------------------------
let links = window.document.links;
let linksArray = Array.from(links);

function filterFunction(element) {
  let { href, attributes, innerHTML, innerText, outerHTML, outerText } =
    element;
  //  swap?inputCurrency
  if (href.indexOf("swap?inputCurrency") > 0) {
    return true;
  }
}

// Run The Below Command To Crawl all links in the HTML document
linksArray.forEach((element) => {
  let data = {
    href: element.href,
    attributes: element.attributes,
    innerHTML: element.innerHTML,
    innerText: element.innerText,
    outerHTML: element.outerHTML,
    outerText: element.outerText,
  };
  console.log(data);
});

// To copy the variable or something in the clipboard in chrome console use
// copy(<content>)
// Command

const result = linksArray.filter(filterFunction);

// NOW we are only keeping the relevant data of result to reduce memory size

var myData=[];
var i=0;

result.forEach((element) => {
  let data = {
    href: element.href,
    // attributes: element.attributes,
    // innerHTML: element.innerHTML,
    innerText: element.innerText,
    // outerHTML: element.outerHTML,
    // outerText: element.outerText,
  };
  myData[i] = data;
  i++;
//   console.log(data);
});



//  Now Copy Data into the Clipboard
copy(JSON.stringify(myData))
