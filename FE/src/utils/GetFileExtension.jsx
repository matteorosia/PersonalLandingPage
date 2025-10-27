export function GetFileExtension(val) {
  let f = "";

  switch (val) {
    case "index":
      f = ".html";
      break;
    case "style":
      f = ".css";
      break;
    case "pippo":
      f = ".php";
      break;
    case "readme":
      f = ".json"
      break;
    case "version":
      f = ".txt";
      break;
    default:
      f = ".jsx";
  }
  return  val + f;
}