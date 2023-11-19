import { createRouter } from "../core/core.js";
import Home from "./Home.js";
import Tournament_8 from "./Tournament_8.js";
import Tournament_4 from "./Tournament_4.js";
import TournamentLast from "./TournamentLast.js";
import Result from "./Result.js";
import NotFound from "./NotFound.js";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/Tournament8", component: Tournament_8 },
  { path: "#/Tournament4", component: Tournament_4 },
  { path: "#/Tournament2", component: TournamentLast },
  { path: "#/result", component: Result },
  { path: ".*", component: NotFound }
]);
