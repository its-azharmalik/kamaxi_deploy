// document.querySelector(".wpcf7").onsubmit = (e) => {
//   e.preventDefault();
//   var urls = ["/kamaxiHeights.pdf", "/kamaxiGreen.pdf", "/kamaxiKunj.pdf"];

//   var interval = setInterval(download, 300, urls);

//   function download(urls) {
//     var url = urls.pop();

//     var a = document.createElement("a");
//     a.setAttribute("href", url);
//     a.setAttribute("download", "");
//     a.setAttribute("target", "_blank");
//     a.click();

//     if (urls.length == 0) {
//       clearInterval(interval);
//     }
//   }
// };

document.querySelector(".allPdfs").onsubmit = (e) => {
  e.preventDefault();
  var urls = ["/kamaxiHeights.pdf", "/kamaxiGreen.pdf", "/kamaxiKunj.pdf"];

  var interval = setInterval(download, 300, urls);

  function download(urls) {
    var url = urls.pop();

    var a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "");
    a.setAttribute("target", "_blank");
    a.click();

    if (urls.length == 0) {
      clearInterval(interval);
    }
  }
};

// document.querySelector(".heightPdfs").onsubmit = (e) => {
//   e.preventDefault();
//   var urls = ["/kamaxiHeights.pdf"];

//   var interval = setInterval(download, 300, urls);

//   function download(urls) {
//     var url = urls.pop();
//     console.log(url);

//     var a = document.createElement("a");
//     a.setAttribute("href", url);
//     a.setAttribute("download", "");
//     a.setAttribute("target", "_blank");
//     a.click();

//     if (urls.length == 0) {
//       clearInterval(interval);
//     }
//   }
// };

document.querySelector(".greenPdfs").onsubmit = (e) => {
  e.preventDefault();
  var urls = ["/kamaxiGreen.pdf"];

  var interval = setInterval(download, 300, urls);

  function download(urls) {
    var url = urls.pop();

    var a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "");
    a.setAttribute("target", "_blank");
    a.click();

    if (urls.length == 0) {
      clearInterval(interval);
    }
  }
};

function download(url) {
  var a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", "");
  a.setAttribute("target", "_blank");
  a.click();
}

document.querySelector(".heightPdfs").onsubmit = (e) => {
  e.preventDefault();

  var url = "/kamaxiKunj.pdf";
  download(url);
};
