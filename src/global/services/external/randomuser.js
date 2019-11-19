import { fetchURL as WebService } from "../web.services";

export default function getRandomUsers(props) {
  const URL = "https://randomuser.me/api/";

  const NEW_URL = `${URL}?${
    props.hasOwnProperty("nat") ? `&nat=${props.gender}` : `&nat=${"CA"}`
  }${props.hasOwnProperty("gender") ? `&gender=${props.gender}` : ``}${
    props.hasOwnProperty("password") ? `&password=${props.password}` : ``
  }${props.hasOwnProperty("seed") ? `&seed=${props.seed}` : ``}${
    props.hasOwnProperty("format") ? `&format=${props.format}` : ``
  }${props.hasOwnProperty("page") ? `&page=${props.page}` : ``}${
    props.hasOwnProperty("results")
      ? `&results=${props.results}`
      : `&results=${10}`
  }${props.hasOwnProperty("inc") ? `&inc=${props.inc}` : ``}${
    props.hasOwnProperty("exc") ? `&exc=${props.exc}` : ``
  }`;

  console.log(NEW_URL);

  WebService(NEW_URL, props.callback, props.state);
}
