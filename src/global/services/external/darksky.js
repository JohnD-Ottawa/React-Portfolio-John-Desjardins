import { fetchURL as WebService } from "../web.services";

export function getForecast(props) {
  const URL =
    "https://api.darksky.net/forecast/6f841ec6d407bef9a05c39982551ed48/";
  const PROXY = "https://cors-anywhere.herokuapp.com/";
  if (
    props.hasOwnProperty("latitude") &&
    props.hasOwnProperty("longitude") &&
    props.hasOwnProperty("callback")
  ) {
    const NEW_URL = `${PROXY}${URL}${props.latitude},${
      props.longitude
    }?exclude=${
      props.hasOwnProperty("exclude") ? `${props.exclude}` : `minutely`
    }&lang=${props.hasOwnProperty("lang") ? `${props.lang}` : `en`}&units=${
      props.hasOwnProperty("units") ? `${props.units}` : `ca`
    }`;

    WebService(NEW_URL, props.callback);
  } else {
    props.callback({
      code: 13,
      error:
        "Object Type Mismatch (Object must contain the following properties) : latitude, longitude, callback"
    });
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
