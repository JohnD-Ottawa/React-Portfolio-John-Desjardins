import LocalWeatherForecast from "./applications_showcase/app_001/app";

let APPLICATIONS = [LocalWeatherForecast];

APPLICATIONS.forEach(item => (item.icon = MediaIcons(item.icon)));
export default APPLICATIONS;

function MediaIcons(icon) {
  switch (icon) {
    case "ICO_DEV":
      return ["fab", "dev"];
    case "ICO_WIDGET":
      return ["far", "window-restore"];
    case "ICO_TEMPLATE":
      return ["fas", "stamp"];
    case "ICO_DICE":
      return ["fas", "dice"];
    case "ICO_RANDOM":
      return ["fas", "random"];
    case "ICO_CLOUD":
      return ["fas", "cloud"];
    case "ICO_HOCKEY-PUCK":
      return ["fas", "hockey-puck"];
    case "ICO_ADDRESS-CARD":
      return ["far", "address-card"];
    case "ICO_YELP":
      return ["fab", "yelp"];
    case "ICO_FILM":
      return ["fas", "film"];
    case "ICO_PALETTE":
      return ["fas", "palette"];
    default:
      return ["far", "question-circle"];
  }
}
