import { randomBytes } from "crypto";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "AdminLogin",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "Email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"
                }
            },
            async authorize(credentials, req) {
                if (credentials?.email === "happer64bit@gmail.com" && credentials.password === "thaesumoe0A@wintkhantlin") {
                    return {
                        id: randomBytes(32).toString("hex"),
                    }
                } else {
                    return null;
                }
            },
        })
    ],
    pages: {
        signIn: "/admin/login",
    },
    session: {
        maxAge: 60 * 60 * 24
    },
    debug: true
}

const options = NextAuth(authOptions)

export { options as GET, options as POST }