'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";

const errorMessages = new Map<string, string>([
    ['auth/weak-password', 'The password is too weak'],
    ['auth/email-already-in-use', 'This email is already taken'],
    ['auth/too-many-requests', 'Too many requests. Please try again later'],
]);

type Inputs = {
    email: string
    password: string
    confirmPassword: string
}

const emailPattern = {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Please enter a valid email',
}

export default function SignUpPage() {
    const router = useRouter();
    const { setUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const confirmPasswordValidation = (confirmPassword: string) => {
        if (watch("password") !== confirmPassword) {
            return "Password does not match"
        }
    }

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredentials) => {
            setUser(userCredentials.user)
            router.push("/")
        }).catch((error: FirebaseError) => {
            const signUpError = errorMessages.get(error.code) || 'An unknown error occurred.';
            setSignUpError(signUpError);
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
                                </div>
                                <input {...register("password", { required: "Please enter your password" })} type="password" className="block text-sm rounded-md border-2 border-gray-200 outline-brand-yellow p-1 h-8" name='password'></input>
                                <span className="text-xs text-red-600">{errors.password?.message}</span>
                            </label>
                            <label>
                                <div className="flex text-sm w-full pt-5">
                                    <span className="font-bold">Confirm Password</span>
                                </div>
                                <input {...register("confirmPassword", { required: "Please confirm your password", validate: confirmPasswordValidation })} name="confirmPassword" type="password" className="block text-sm rounded-md border-2 border-gray-200 outline-brand-yellow p-1 h-8"></input>
                                <span className="text-xs text-red-600">{errors.confirmPassword?.message}</span>
                            </label>
                            <span className="block text-xs text-red-600">{signUpError}</span>
                            <button type="submit" className="w-full rounded-lg text-white text-sm font-bold bg-brand-yellow mt-5 h-8 hover:text-brand-yellow hover:bg-white border-2 border-brand-yellow">Sign Up</button>
                        </form>
                        <div className="text-xs pt-5">
                            Already have an account? <a href="./sign-in" className="text-brand-yellow">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
