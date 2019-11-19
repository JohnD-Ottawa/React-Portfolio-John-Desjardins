export function fetchURL(url, callback, state) {
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
      callback({ loading: false, code: 0, data: data }, state);
    })
    .catch(function(error) {
      callback({ loading: false, code: 1, error: error }, state);
    });
}
export function openURL(url) {
  var win = window.open(url, "_blank");
  win.focus();
}
