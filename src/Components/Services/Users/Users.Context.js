import { createContext, useState, useEffect } from "react";
import { auth, db } from "../../../Config/FireBase";
import { collection, doc, getDoc } from "firebase/firestore";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [userType, setUserType] = useState("");
  console.log(userType);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        getDoc(doc(collection(db, "users"), user.email)).then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            if (data) {
              setUserType(data.user_type);
            }
          }
        });
      } else {
        setUserType("");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UsersContext.Provider value={{ userType }}>
      {children}
    </UsersContext.Provider>
  );
};
