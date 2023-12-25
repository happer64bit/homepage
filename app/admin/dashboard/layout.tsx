import React from "react";
import { Sidebar } from "./Sidebar";

export default function AdminDashboardLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow py-5 px-5 mx-5">
                {children}
            </main>
        </div>
    )
}