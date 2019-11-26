import LocalWeatherForecast from "./applications_showcase/app_001/app";

let APPLICATIONS = [LocalWeatherForecast];

APPLICATIONS.forEach(item => (item.icon = MediaIcons(item.icon)));
export default APPLICATIONS;

function MediaIcons(icon) {
  switch (icon) {
    case "ICO_CLOUD":
      return ["fas", "cloud"];
    default:
      return ["far", "question-circle"];
  }
}
