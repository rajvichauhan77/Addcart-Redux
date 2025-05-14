import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";
import { toast, ToastContainer } from "react-toastify";
import app from "../firebaseconfig";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword,signInWithPopup, updateProfile, GoogleAuthProvider,onAuthStateChanged,setPersistence, inMemoryPersistence,browserSessionPersistence, browserLocalPersistence} from "firebase/auth";



const auth = getAuth(app)
const provider = new GoogleAuthProvider(app)

export const handleGoogle = async () => {
    let res = await signInWithPopup(auth, provider)
    let cUser = auth.currentUser
    toast.success("Sign up successfullyy...")
}

export async function userLog(formdata){
    const res = await signInWithEmailAndPassword(auth, formdata.email, formdata.password)
}

export const userReg = async () => {
    const res = await createUserWithEmailAndPassword(auth, formdata.email, formdata.password)

    await updateProfile(users, {
        displayName: formdata.name,
        photoURL: formdata.img
    })
}