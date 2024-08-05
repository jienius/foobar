'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";

const errorMessages = new Map<string, string>([
    ['auth/invalid-credential', 'The password is invalid.'],
    ['auth/user-disabled', 'The user account has been disabled.'],
    ['auth/too-many-requests', 'Too many requests. Please try again later'],
]);

type Inputs = {
    email: string
    password: string
}

const emailPattern = {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Please enter a valid email',
}

export default function SignInPage() {
    const router = useRouter();
    const { setUser } = useContext(AuthContext);
    const [signInError, setSignInError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password).then((userCredentials) => {
            setUser(userCredentials.user)
            console.log(userCredentials.user)
            router.push('/');
        }).catch((error: FirebaseError) => {
            const signInError = errorMessages.get(error.code) || 'An unknown error occurred.';
            setSignInError(signInError);
        })
    }

    return (
        <>
            <div className="bg-cover" style={{ height: "90px", backgroundImage: "url('/images/hero.png')" }} />
            <div className="bg-gray-50 p-10 shadow-lg">
                <div className="flex justify-center pb-5">
                    <Image src="/icon.png" alt='logo' width={50} height={50} />
                </div>
                <div className="flex justify-center">
                    <div className="inline bg-white rounded-lg shadow-lg text-black p-10 md:p-20">
                        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "250px" }}>
                            <label>
                                <div className="flex font-bold text-sm">
                                    <span>Email</span>
                                </div>
                                <input {...register("email", { required: "Please enter your email", pattern: emailPattern })} className="block text-sm rounded-md border-2 border-gray-200 outline-brand-yellow p-1 h-8" name='email' />
                                <span className="text-xs text-red-600">{errors.email?.message}</span>
                            </label>
                            <label>
                                <div className="flex text-sm w-full pt-5">
                                    <span className="font-bold">Password</span>
                                    <a href='./recovery' className="self-center text-xs text-brand-yellow ml-auto">Forgot password?</a>
                                </div>
                                <input {...register("password", { required: "Please enter your password" })} type="password" className="block text-sm rounded-md border-2 border-gray-200 outline-brand-yellow p-1 h-8" name='password'></input>
                                <span className="text-xs text-red-600">{errors.password?.message}</span>
                            </label>
                            <span className="text-xs text-red-600">{signInError}</span>
                            <button type="submit" className="w-full rounded-lg text-white text-sm font-bold bg-brand-yellow mt-5 h-8 hover:text-brand-yellow hover:bg-white border-2 border-brand-yellow">Sign In</button>
                        </form>
                        <div className="text-xs pt-5">
                            Don’t have an account? <a href="./sign-up" className="text-brand-yellow">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
