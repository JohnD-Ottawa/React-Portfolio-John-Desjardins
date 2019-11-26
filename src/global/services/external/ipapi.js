export async function getIPdata() {
  const URL = `https://ipapi.co/json/`;
  const result = await fetch(URL, { method: "get" })
    .then(res => res.json())
    .then(data => {
      return { code: 0, data: data };
    })
    .catch(function(error) {
      return { code: -1, error: error };
    });
  return result;
}
