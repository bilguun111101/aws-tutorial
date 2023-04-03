import { createContext, useContext, useState } from "react";
import { PropsWithChildren } from "react";

const UserContext = createContext<any>(null);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
    const [userId, setUserId] = useState<string>("");
    return (
        <UserContext.Provider value={{  }}>
            { children }
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);