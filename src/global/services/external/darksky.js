export async function getForecast(props) {
  const API_KEY = "6f841ec6d407bef9a05c39982551ed48";
  const URL = `https://api.darksky.net/forecast/${API_KEY}/`;
  const PROXY = "https://cors-anywhere.herokuapp.com/";
  if (props.hasOwnProperty("latitude") && props.hasOwnProperty("longitude")) {
    const NEW_URL = `${PROXY}${URL}${props.latitude},${
      props.longitude
    }?exclude=${
      props.hasOwnProperty("exclude") ? `${props.exclude}` : `minutely,hourly,currently`
    }&lang=${props.hasOwnProperty("lang") ? `${props.lang}` : `en`}&units=${
      props.hasOwnProperty("units") ? `${props.units}` : `ca`
    }`;
    const result = await fetch(NEW_URL, { method: "get" })
      .then(res => res.json())
      .then(data => {
        return { code: 0, data: data };
      })
      .catch(function(error) {
        return { code: -1, error: error.msg };
      });
    return result;
  } else {
    return { code: 13, error: "Missing properties" };
  }
}

export function getIcon(icon) {
  switch (icon) {
    case "clear-day":
      return "fas fa-sun";
    case "clear-night":
      return "fas fa-moon";
    case "rain":
      return "fas fa-cloud-rain";
    case "snow":
      return "fas fa-snowflake";
    case "sleet":
      return "fas fa-cloud-meatball";
    case "wind":
      return "fas fa-wind";
    case "fog":
      return "fas fa-smog";
    case "cloudy":
      return "fas fa-cloud";
    case "partly-cloudy-day":
      return "fas fa-cloud-sun";
    case "partly-cloudy-night":
      return "fas fa-cloud-moon";
    default:
      return "fas fa-bolt";
  }
}
