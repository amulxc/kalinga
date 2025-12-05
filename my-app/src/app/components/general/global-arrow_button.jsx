export default function GlobalArrowButton({ 
  children, 
  className = "", 
  arrowClassName = "",
  arrowIconClassName = "",
  textClassName = "",
  arrowSize = 25,
  onClick 
}) {
  return (
    <button
      onClick={onClick}
      className={`group bg-[var(--button-red)] hover:bg-white hover:text-[var(--button-red)] h-[45px] px-2 rounded-xl shadow-lg text-white font-sans text-base font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-2xl cursor-pointer  flex items-center justify-between ${className}`}
    >
      <p className={`whitespace-nowrap w-fit px-3 ${textClassName}`}>{children}</p>
      <span className={`group bg-white group-hover:bg-[var(--button-red)] group-hover:text-white  rounded-lg p-1 px-2 flex items-center justify-center relative ${arrowClassName}`}>
        <svg
          width={arrowSize}
          height={arrowSize}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`text-[var(--button-red)] group-hover:text-white transition-transform duration-300 group-hover:rotate-45 ${arrowIconClassName}`}
        >
          <path
            d="M4 12L12 4M12 4H6M12 4V10"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

