import { onValue, ref } from "firebase/database";
import { createContext, useEffect, useState } from "react";
import { getRealtimeDb } from "../config/firebase";

export const messageContext = createContext(null);

export const MessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState();

  const dbref = ref(getRealtimeDb, "WOND_MESSAGE");

  useEffect(() => {
    onValue(dbref, (snap) => {
      if (snap.exists()) {
        const data = snap.val();
        const temp = [];
        Object.keys(data).map((items, id) => {
          temp.push({ ...data[items], key: items });
          setMessage(temp);
          return 1;
        });
      }
    });
  });

  return (
    <messageContext.Provider value={{ message }}>
      {children}
    </messageContext.Provider>
  );
};
