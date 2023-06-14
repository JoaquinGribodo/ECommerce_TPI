import { createContext, useState, useEffect } from "react";
import { auth, db } from "../../../Config/FireBase";
import { collection, doc, getDoc } from "firebase/firestore";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
        });
      } else {
        setUserType("");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UsersContext.Provider value={{ userType, loading }}>
      {children}
    </UsersContext.Provider>
  );
};
