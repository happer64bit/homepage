"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import { FaSpinner } from 'react-icons/fa6';
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const validatePassword = (password: string) => {
    return password.length !== 0; // Minimum password length of 6 characters
};

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        const emailValue = emailRef.current?.value || "";
        const passwordValue = passwordRef.current?.value || "";

        if (!validateEmail(emailValue)) {
            setFormData((prevData: any) => ({
                ...prevData,
                email: {
                    ...prevData.email,
                    error: "Invalid email address",
                },
            }));
            setIsLoading(false);
            return;
        }

        if (!validatePassword(passwordValue)) {
            setFormData((prevData: any) => ({
                ...prevData,
                password: {
                    ...prevData.password,
                    error: "Password should not be empty",
                },
            }));
            setIsLoading(false);
            return;
        }

        await signIn("credentials", {
            email: emailValue,
            password: passwordValue,
            callbackUrl: "/admin/dashboard",
            redirect: true,
        }).catch((err) => {
            toast({
                title: "Failed To Login"
            })
        });

        setIsLoading(false);
    }

    const [formData, setFormData] = useState({
        email: {
            value: "",
            error: null
        },
        password: {
            value: "",
            error: null
        }
    });

    return (
        <div>
            <div className="flex items-center justify-center h-[80vh]">
                <div className={"w-[60dvh]"}>
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <div className="text-center">
                                    <h1 className="text-2xl font-bold">Login Admin Account</h1>
                                    <p className="text-sm">Enter your email and password to login to <br />your admin account</p>
                                </div>
                                <div className="mt-4 mb-3">
                                    <div className="my-2">
                                        <Label className="sr-only" htmlFor="email">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            placeholder="john@example.com"
                                            type="email"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            ref={emailRef}
                                        />
                                        {formData.email.error && (
                                            <p className="text-red-500 text-sm">{formData.email.error}</p>
                                        )}
                                    </div>
                                    <div className="my-1">
                                        <Label className="sr-only" htmlFor="email">
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            placeholder="password"
                                            type="password"
                                            autoCapitalize="none"
                                            autoComplete="password"
                                            autoCorrect="off"
                                            disabled={isLoading}
                                            ref={passwordRef}
                                        />
                                        {formData.password.error && (
                                            <p className="text-red-500 text-sm">{formData.password.error}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <Button disabled={isLoading} className="w-full">
                                        {isLoading && (
                                            <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        Sign In
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
