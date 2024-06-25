import { createContext } from "react";
import User from "../components/User";

const UserContext = createContext({
  loggedInUser: "Anoushka Dhaka",
});

export default UserContext;
