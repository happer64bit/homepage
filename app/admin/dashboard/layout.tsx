import React from "react";
import { Sidebar } from "./Sidebar";

export default function ({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow-p-4">
                {children}
            </main>
        </div>
    )
}