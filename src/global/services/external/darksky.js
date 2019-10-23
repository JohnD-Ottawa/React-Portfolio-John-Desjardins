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
    WebService(
      `${PROXY}${URL}${props.latitude},${props.longitude}?exclude=${
        props.hasOwnProperty("exclude") ? `${props.exclude}` : `[]`
      },lang=${props.hasOwnProperty("lang") ? `${props.lang}` : `en`},units=${
        props.hasOwnProperty("units") ? `${props.units}` : `ca`
      }`,
      props.callback
    );
  } else {
    props.changeState({
      code: 0,
      msg:
        "Object must have the following properties : { latitude, longitude, callback }"
    });
  }
}
