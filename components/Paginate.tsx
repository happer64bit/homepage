import { Button } from "./ui/button";

interface IPaginate {
    handleRoute: (page: number) => void;
    currentPage: number;
    maxPages: number;
}

export default function Paginate(props: IPaginate) {
    const { handleRoute, currentPage, maxPages } = props;

    const generatePageNumbers = () => {
        const pages = [];

        for (let i = currentPage - 4; i <= currentPage + 4; i++) {
            if (i > 0 && i <= maxPages) {
                pages.push(i);
            }
        }

        return pages;
    };

    return (
        <div className="flex items-center gap-3">
            <Button
                onClick={() => handleRoute(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </Button>
            {generatePageNumbers().map((page) => (
                <Button
                    variant={"outline"}
                    disabled={currentPage === page}
                    key={page}
                    onClick={() => handleRoute(page)}
                    className={currentPage === page ? "active" : ""}
                >
                    {page}
                </Button>
            ))}
            <Button
                onClick={() => handleRoute(currentPage + 1)}
                disabled={currentPage === maxPages}
            >
                Next
            </Button>
        </div>
    );
}
