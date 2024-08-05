'use client'
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

interface AuthContextType {
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => { }
});

export const AuthContextProvider = ({ children }: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
