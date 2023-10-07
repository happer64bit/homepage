import React from "react";

export function TimelineParent({ children }: { children: React.ReactNode }) {
    return (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {children}
        </ol>
    )
}

export const TimelineItem = ({ date, title }: { date: string, title: string }) => (
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    </li>
)