export default function () {
    return (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden dark:text-white dark:bg-transparent px-6 py-2 sm:px-3.5 justify-center">
            <div className="text-center">
                <p className="text-sm leading-6">
                    <strong className="font-semibold">Announcement 📢</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    Releasing Website Soon
                </p>
            </div>
        </div>
    )
}