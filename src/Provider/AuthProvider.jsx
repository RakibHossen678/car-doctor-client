import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext,  useEffect,  useState } from "react";
import app from "../firebase/firebse.confiq";

export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(false)
        signOut(auth)
    }
    useEffect(()=>{
        const unSubsCribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            return unSubsCribe()
        }
    },[])
    const AuthInfo={
        user,
        loading,
        createUser,
        login,
        logOut

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;