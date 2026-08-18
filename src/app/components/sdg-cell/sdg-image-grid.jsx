"use client";

// Goal number -> published SDG report. Add an entry here as each report is released.
const SDG_REPORTS = {
  2: "/sdg-reports/sdg-02-zero-hunger-report.pdf",
};

const SdgImageGrid = () => {
  const images = Array.from({ length: 17 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    const id = i + 1;

    return {
      id,
      src: `https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-logo/E-WEB-Goal-${num}.png`,
      alt: `SDG Goal ${num}`,
      reportUrl: SDG_REPORTS[id],
    };
  });

  const tileClassName =
    "group relative block rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 p-3 aspect-square flex items-center justify-center bg-white shadow-sm hover:shadow-md";

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-black mb-4">
            Sustainable Development Goals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
          {images.map((img) => {
            const tileContent = (
              <>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Report prompt - only on goals that have a published report */}
                {img.reportUrl && (
                  <span className="absolute inset-x-0 bottom-0 bg-[var(--button-red)] text-white text-xs font-semibold text-center py-1.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    View Report
                  </span>
                )}
              </>
            );

            return img.reportUrl ? (
              <a
                key={img.id}
                href={img.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`${img.alt} - View Report`}
                className={`${tileClassName} cursor-pointer`}
              >
                {tileContent}
              </a>
            ) : (
              <div key={img.id} className={tileClassName}>
                {tileContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SdgImageGrid;
