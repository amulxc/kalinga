"use client";

import { useEffect } from "react";
import APITable from "../components/general/api-table";
import CtcdTrainingTabs from "../components/ctcd/ctcd_training_tabs";



export default function PatentsPage() {
    

    const patentTabs = Array.from({ length: 5 }, (_, i) => {
        const year = 2025 - i; // 2025 to 2021
        const id = year === 2025 ? 99 : (9 + i); // 2025 uses 99, others 9 to 13
        const label = `${year}`;

        return {
            value: `year-${year}`,
            label,
            content: (
                <APITable
                    tableId={id.toString()}
                    title={`Patents ${label}`}
                    className="py-16"
                    overflowX={true}
                    maxHeight="max-h-[600px]"
                />
            ),
        };
    });

    return (
        <main className="bg-white font-jakarta">
            <CtcdTrainingTabs customTabs={patentTabs} />
        </main>
    );
}
