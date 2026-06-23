"use client";

import React from "react";
import APITable from "../components/general/api-table";
import MainIntro from "../components/about/main_intro";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/general/tab";

const YEAR_TABS = [
    { label: "2024-25", value: "2024-25", tableId: "100" },
    { label: "2023-24", value: "2023-24", tableId: "101" },
    { label: "2022-23", value: "2022-23", tableId: "102" },
    { label: "2021-22", value: "2021-22", tableId: "103" },
    { label: "2020-21", value: "2020-21", tableId: "104" },
    { label: "2019-20", value: "2019-20", tableId: "105" },
    { label: "2018-19", value: "2018-19", tableId: "106" },
];

export default function ResearchPapersPage() {
    return (
        <main className="bg-white font-jakarta">
            {/* <MainIntro
                title="Research Papers"
                subtitle="Publications"
                description={[
                    "Browse through the research papers published by our esteemed faculty and students. Kalinga University remains committed to fostering a culture of rigorous inquiry and knowledge dissemination through high-impact research publications.",
                    "Our research community continues to contribute significantly to various disciplines, sharing insights and discoveries that address contemporary challenges and drive innovation forward."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/research/research-main-content.webp"
                imageAlt="Research Papers"
                showKnowMore={false}
            /> */}

            <div className="container mx-auto px-6 py-16">
                <h1 className="text-center text-5xl mb-12">Research Paper Publications</h1>
                <Tabs defaultValue="2024-25">
                    <TabsList className="mb-6">
                        {YEAR_TABS.map((tab) => (
                            <TabsTrigger key={tab.value} value={tab.value}>
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {YEAR_TABS.map((tab) => (
                        <TabsContent key={tab.value} value={tab.value}>
                            <APITable
                                tableId={tab.tableId}
                                overflowX={true}
                                nested={true}
                            />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </main>
    );
}
