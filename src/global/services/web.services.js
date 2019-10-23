export function fetchURL(url, callback) {
  fetch(url, {
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      callback({ code: 0, data: data });
    })
    .catch(function(error) {
      callback({ code: 1, msg: error });
    });
}
export function openURL(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 return rawFile.responseText;
//             }
//         }
//     }
//     rawFile.send(null);
// }

//readTextFile("file:///C:/your/path/to/file.txt");
