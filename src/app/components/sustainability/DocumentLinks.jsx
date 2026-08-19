import GlobalArrowButton from "../general/global-arrow_button";

/**
 * Grid of "open the PDF" buttons, reused by the annual reports, office orders
 * and club sections so every document link on the page looks the same.
 *
 * @param {Array<{label: string, href?: string, pdfUrl?: string}>} documents
 * @param {number} columns - columns from the `md` breakpoint upwards
 */
export default function DocumentLinks({ documents = [], columns = 2, className = "" }) {
    if (!documents.length) return null;

    const columnClass =
        {
            1: "md:grid-cols-1",
            2: "md:grid-cols-2",
            3: "md:grid-cols-3",
        }[columns] || "md:grid-cols-2";

    return (
        <div className={`grid grid-cols-1 ${columnClass} gap-4 ${className}`}>
            {documents.map((document) => {
                const href = document.href || document.pdfUrl;
                return (
                    <a
                        key={`${document.label}-${href}`}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={document.label}
                        className="block w-full min-w-0"
                    >
                        <GlobalArrowButton
                            as="span"
                            className="!w-full min-h-[60px] h-auto justify-between !rounded-xl"
                            textClassName="!text-left !leading-snug !font-medium"
                            arrowClassName="p-[3px] !px-2 mr-2 !py-1 shrink-0"
                            arrowSize={26}
                        >
                            {document.label}
                        </GlobalArrowButton>
                    </a>
                );
            })}
        </div>
    );
}
