export class WebService {
  fetchURL = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        return { code: 0, data: data };
      })
      .catch(function(error) {
        return { code: 1, msg: error };
      });
  };
  openURL = url => {
    var win = window.open(url, "_blank");
    win.focus();
  };
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
