import React from "react";

export default function BlogPreviewPostSkeleton() {
    return (
        <div className="p-4 rounded-md flex lg:flex-row flex-col gap-6 my-5 container min-w-[100%]">
            <div>
                <div
                    className="w-full lg:w-[15rem] lg:h-[8.4375rem] rounded-md bg-gray-100/20 animate-pulse"
                />
            </div>
            <div className="flex items-center">
                <div>
                    <div className="h-[18px] w-40 mb-2 bg-gray-100/20 animate-pulse" />
                    <div className="h-[10px] mb-1 bg-gray-100/20 animate-pulse" />
                    <div className="h-[10px] bg-gray-100/20 animate-pulse" />
                </div>
            </div>
        </div>
    )
}