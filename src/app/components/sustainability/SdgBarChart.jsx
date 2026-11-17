// Vertical bar chart for SDG report "barChart" blocks.
// Single series: { caption, xLabel, yLabel, data: [{ label, value }] }
// Grouped:       { caption, xLabel, yLabel, series: [{ name, color }], data: [{ label, values: [n, ...] }] }
// hideValues: true drops the per-bar number labels (the axis scale is shown instead), matching source charts without data labels.
const DEFAULT_COLORS = ["#4caf50", "#1f4e8c", "#f59e0b", "#e11d48"];

export default function SdgBarChart({ block }) {
    const series = block.series || [{ name: block.yLabel || "Value" }];
    const rows = block.data.map(d => ({ label: d.label, values: d.values || [d.value] }));
    const max = Math.max(...rows.flatMap(r => r.values.map(v => Number(v) || 0)), 1);
    const step = Math.max(1, Math.ceil(max / 5 / 5) * 5);
    const top = Math.ceil(max / step) * step;
    const ticks = Array.from({ length: top / step + 1 }, (_, i) => top - i * step);
    const colorOf = (i) => series[i].color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
    const showValues = !block.hideValues;

    // Long category names (e.g. research areas) don't fit under vertical bars, so draw them horizontally.
    if (rows.some(r => String(r.label).length > 12)) {
        return (
            <figure className="rounded-lg border border-gray-200 bg-white p-4 md:p-6">
                {block.caption && <figcaption className="mb-6 text-center font-semibold text-lg">{block.caption}</figcaption>}
                <div className="space-y-3">
                    {rows.map(r => (
                        <div key={r.label} className="grid grid-cols-1 gap-1 md:grid-cols-[minmax(0,16rem)_1fr] md:items-center md:gap-3">
                            <span className="text-xs font-medium md:text-right">{r.label}</span>
                            <div className="space-y-1">
                                {r.values.map((v, i) => {
                                    const n = Number(v) || 0;
                                    return (
                                        <div key={i} className="flex items-center gap-2">
                                            <div
                                                className="h-5"
                                                style={{ width: `${(n / top) * (showValues ? 85 : 100)}%`, backgroundColor: colorOf(i) }}
                                                role="img"
                                                aria-label={`${r.label} – ${series[i].name}: ${n}`}
                                            />
                                            {showValues && <span className="text-xs font-semibold">{n}</span>}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                    {!showValues && (
                        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-3" aria-hidden="true">
                            <span className="hidden md:block" />
                            <div className="relative h-4 border-t border-gray-300 text-[10px] text-gray-500 md:text-xs">
                                {[...ticks].reverse().map(t => (
                                    <span key={t} className="absolute top-1 -translate-x-1/2 first:translate-x-0 last:-translate-x-full" style={{ left: `${(t / top) * 100}%` }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {block.yLabel && <p className="mt-4 text-center text-xs text-gray-600">{block.yLabel}</p>}
                {series.length > 1 && (
                    <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs">
                        {series.map((s, i) => (
                            <span key={s.name} className="flex items-center gap-1.5">
                                <span className="inline-block h-3 w-3" style={{ backgroundColor: colorOf(i) }} />
                                {s.name}
                            </span>
                        ))}
                    </div>
                )}
            </figure>
        );
    }

    return (
        <figure className="rounded-lg border border-gray-200 bg-white p-4 md:p-6">
            {block.caption && <figcaption className="mb-6 text-center font-semibold text-lg">{block.caption}</figcaption>}
            <div className="flex gap-2">
                {block.yLabel && (
                    <div className="flex items-center">
                        <span className="text-xs text-gray-600 whitespace-nowrap [writing-mode:vertical-rl] rotate-180">{block.yLabel}</span>
                    </div>
                )}
                <div className="flex flex-col justify-between h-64 pb-6 text-xs text-gray-500 text-right">
                    {ticks.map(t => <span key={t} className="leading-none">{t}</span>)}
                </div>
                <div className="relative flex-1">
                    <div className="absolute inset-x-0 top-0 bottom-6 flex flex-col justify-between pointer-events-none">
                        {ticks.map(t => <div key={t} className="border-t border-gray-200" />)}
                    </div>
                    <div className="relative flex h-64 items-end gap-2 md:gap-6">
                        {rows.map(r => (
                            <div key={r.label} className="flex flex-1 flex-col items-center h-full">
                                <div className="flex flex-1 w-full items-end justify-center gap-0.5 md:gap-1">
                                    {r.values.map((v, i) => {
                                        const n = Number(v) || 0;
                                        return (
                                            <div key={i} className="flex h-full flex-1 max-w-14 flex-col justify-end items-center">
                                                {showValues && n > 0 && <span className="mb-1 text-[10px] md:text-xs font-semibold">{n}</span>}
                                                <div
                                                    className="w-full"
                                                    style={{ height: `${(n / top) * 100}%`, backgroundColor: colorOf(i) }}
                                                    role="img"
                                                    aria-label={`${r.label} – ${series[i].name}: ${n}`}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                <span className="h-6 pt-1 text-xs font-medium">{r.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {block.xLabel && <p className="mt-2 text-center text-xs text-gray-600">{block.xLabel}</p>}
            {series.length > 1 && (
                <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs">
                    {series.map((s, i) => (
                        <span key={s.name} className="flex items-center gap-1.5">
                            <span className="inline-block h-3 w-3" style={{ backgroundColor: colorOf(i) }} />
                            {s.name}
                        </span>
                    ))}
                </div>
            )}
        </figure>
    );
}
