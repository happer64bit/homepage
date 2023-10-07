import React from "react";

export default function ArticleLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="my-20">
            {children}
        </div>
    )
}