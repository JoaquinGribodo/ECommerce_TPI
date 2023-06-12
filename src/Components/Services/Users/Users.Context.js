import { createContext} from "react";
import { auth } from "../../../Config/FireBase";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
    const user = auth.currentUser;
    let user_type;

    console.log(user)
if (user === null) {
    user_type = "";
    console.log(user_type)
} else {
    user_type = user.user_type
    console.log(user_type);
}
    return (
        <UsersContext.Provider value={user_type}>
            {children}
        </UsersContext.Provider>
    );
};



