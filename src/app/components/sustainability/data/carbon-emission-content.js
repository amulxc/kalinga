/**
 * Carbon Emission Report 2024–2025 — transcribed from the SDG Cell's
 * "Carbon_Emission_Report_KU" Word document.
 */

export const CARBON_REPORT_TITLE = "Carbon Emission Report 2024–2025";
export const CARBON_REPORT_SUBTITLE = "As per the GHG Protocol Corporate Standard — Kalinga University";

export const CARBON_SUMMARY = [
    "This report provides an assessment of the greenhouse gas (GHG) emissions associated with Kalinga University. Its primary aim is to understand the source of the University's emissions come from, measure them systematically, and identify practical ways to overcome its carbon footprint.",
    "The assessment follows the principles of the GHG Protocol Corporate Standard, a widely recognised framework for measuring and reporting greenhouse gas emissions. The report covers the methodology used, identifies the University's main sources of emissions, and details the University's ongoing work to create a more sustainable campus.",
];

/** Share of total assessed emissions per GHG Protocol scope. */
export const CARBON_SCOPES = [
    {
        scope: "Scope 1",
        title: "Direct Emissions",
        share: "60.06%",
        tonnes: "1,136.38 t CO₂e",
        text: "Scope 1 emissions account for 60.06% of the University's total assessed carbon emissions and primarily arise from the direct consumption of fossil fuels in University-owned or controlled sources. Major emission sources include diesel consumption in diesel generator (DG) sets, petrol and diesel used by University-owned or controlled vehicles, fuel consumed by other directly controlled equipment and machinery, and LPG or other fossil fuels wherever applicable. Fugitive emissions resulting from refrigerant leakage from air-conditioning and cooling systems are also considered wherever relevant data are available. The significant contribution of Scope 1 emissions highlights opportunities to improve fuel efficiency, maintain vehicles and generators regularly, optimise generator operations, adopt cleaner fuels, and introduce electric or low-emission vehicles wherever feasible.",
    },
    {
        scope: "Scope 2",
        title: "Indirect Emissions from Purchased Electricity",
        share: "27.83%",
        tonnes: "526.60 t CO₂e",
        text: "Scope 2 emissions contribute 27.83% of the University's total assessed carbon emissions and are primarily associated with purchased electricity consumed across academic buildings, administrative offices, laboratories, libraries, hostels, residential facilities, healthcare facilities, sports facilities, and other campus infrastructure. Electricity-consuming activities include lighting, air-conditioning, computers, laboratory equipment, water-pumping systems, information technology infrastructure, and other electricity-dependent operations. Emission-reduction opportunities include expanding solar energy utilisation, adopting energy-efficient infrastructure and electrical equipment, installing LED lighting, optimising air-conditioning systems, and implementing responsible energy-management practices to reduce dependence on grid electricity.",
    },
    {
        scope: "Scope 3",
        title: "Other Indirect Emissions",
        share: "12.11%",
        tonnes: "229.14 t CO₂e",
        text: "Scope 3 emissions account for 12.11% of the University's total assessed carbon emissions and are associated with indirect activities across its wider operations and value chain. These include emissions arising from campus waste generation and its treatment or disposal, food waste from hostels and cafeterias, paper consumption, printing activities, resource consumption, procurement, and other relevant upstream and downstream activities, wherever data are available. Potential reduction measures include improved waste segregation and recycling, food-waste reduction, responsible procurement, greater use of digital documentation, efficient resource utilisation, environmental awareness programmes, and the promotion of sustainable practices among students, faculty, and staff.",
    },
];

/**
 * "Details of Carbon Emissions by Kalinga University in 2024–2025".
 * `scopeTonnes` / `scopeShare` sit on the first row of each scope and span its rows.
 */
export const CARBON_EMISSIONS_TABLE = {
    title: "Details of Carbon Emissions by Kalinga University in 2024–2025",
    rows: [
        { scope: "Scope 1", factor: "Diesel Fuel for Generators", kg: "37,806.89", share: "2.00%", scopeTonnes: "1,136.38 t", scopeShare: "60.06%", span: 5 },
        { scope: "Scope 1", factor: "Petrol for University Vehicles", kg: "17,352.49", share: "0.92%" },
        { scope: "Scope 1", factor: "Diesel Fuel for University Vehicles", kg: "515,621.28", share: "27.25%" },
        { scope: "Scope 1", factor: "LPG Consumption", kg: "167,400.00", share: "8.85%" },
        { scope: "Scope 1", factor: "R-22 Refrigerant Refill*", kg: "398,200.00", share: "21.05%" },
        { scope: "Scope 2", factor: "Grid Electricity Consumption", kg: "526,601.67", share: "27.83%", scopeTonnes: "526.60 t", scopeShare: "27.83%", span: 1 },
        { scope: "Scope 3", factor: "Food Waste", kg: "181,638.60", share: "9.60%", scopeTonnes: "229.14 t", scopeShare: "11%", span: 2 },
        { scope: "Scope 3", factor: "Paper Consumption", kg: "47,500.00", share: "2.51%" },
    ],
    total: "1,892,120.94 kg",
};

/** Long-form parts of the report, shown as expandable panels. */
export const CARBON_REPORT_PANELS = [
    {
        id: "overview",
        label: "Overview",
        blocks: [
            { type: "p", text: "Kalinga University is committed to enhancing environmental sustainability and minimizing its carbon footprint over time. The University's approach focuses on improving energy efficiency and use of renewable energy, promoting sustainable transportation, resource conservation and managing campus operations." },
            { type: "p", text: "The University's assessment of carbon-emission is based on the GHG Protocol, a structured and internationally recognised approach for identifying, measuring, monitoring, and reporting emissions generated through its operations." },
            { type: "p", text: "The organizational boundary for this assessment is based on the operational control approach. It includes the academic and administrative buildings, laboratories, hostels and residential facilities, healthcare and support facilities, transportation systems, utility infrastructure, and other campus activities that are directly managed or controlled by the University." },
            { type: "p", text: "The assessment primarily focuses on Scope 1 and Scope 2 emissions, while relevant Scope 3 sources may be assessed progressively to develop a more complete picture of the University's overall carbon footprint." },
        ],
    },
    {
        id: "carbon-neutrality-pathway",
        label: "Carbon Neutrality Pathway of Kalinga University",
        blocks: [
            { type: "h", text: "Base line Year – 2023" },
            { type: "p", text: "Kalinga University has set out a long-term vision of moving towards a low-carbon and eventually net-zero campus by 2030. This pathway is based on steadily reducing greenhouse gas emissions through energy conservation, renewable energy, sustainable infrastructure, cleaner transportation, improved waste management, and, where necessary, carbon-removal or offset measures." },
            { type: "p", text: "During the initial stage, the focus is on establishing a reliable carbon baseline and strengthening the systems used to monitor and report emissions. Improving energy efficiency, reducing unnecessary electricity consumption, making campus operations more efficient, and increasing the use of renewable energy are central to this stage." },
            { type: "p", text: "In the following phase, the University aims to accelerate the transition to renewable and low-carbon energy systems. This includes greater use of solar energy, energy-efficient equipment, green building practices, green pathways, species-appropriate planting, and sustainable campus infrastructure. Reducing fuel consumption from campus transportation and improving mobility efficiency will also help lower Scope 1 emissions." },
            { type: "p", text: "In the later stages, deeper reductions in emissions can be achieved through high-efficiency buildings, renewable electricity, sustainable mobility, comprehensive waste management, increased green cover for carbon sequestration, and other carbon-removal initiatives." },
            { type: "p", text: "Where some emissions cannot be eliminated through direct reduction measures, appropriate carbon-neutralisation or offset mechanisms may be considered in line with recognised standards." },
            { type: "p", text: "Overall, the University's pathway brings together several areas of sustainability, including energy efficiency, renewable energy, sustainable transportation, resource conservation, green infrastructure, carbon sequestration, and responsible environmental management." },
            { type: "p", text: "Through regular monitoring, periodic carbon accounting, and measurable emission-reduction targets, Kalinga University aims to steadily reduce its carbon footprint and develop a resilient, resource-efficient, low-carbon and carbon-neutral campus by 2030." },
        ],
    },
    {
        id: "methodology",
        label: "Methodology — Carbon Emissions Assessment",
        blocks: [
            { type: "p", text: "The greenhouse gas (GHG) emissions assessment for Kalinga University for the 2024–2025 assessment year was carried out in accordance with the principles of the GHG Protocol Corporate Standard. The methodology involved defining the assessment boundaries, collecting relevant activity data, selecting appropriate emission factors, calculating emissions, and consolidating the results for reporting. The steps followed are described below." },
            { type: "h", text: "Step 1: Scope Definition and Identification of Carbon Emission Sources" },
            { type: "p", text: "The assessment boundaries were established to identify and measure greenhouse gas emissions associated with the University's operations. The assessment covers Scope 1 (Direct Emissions), Scope 2 (Indirect Emissions from Purchased Electricity), and Scope 3 (Other Indirect Emissions)." },
            { type: "scopes" },
            { type: "h", text: "Step 2: Data Collection" },
            { type: "p", text: "Relevant activity data were collected from different operational and administrative sources within Kalinga University. The information considered includes electricity consumption, diesel and petrol consumption, transportation activities, LPG consumption, refrigerant use, waste generation, paper consumption, and other relevant resource-use activities. Wherever possible, primary data were obtained from electricity bills, fuel records, vehicle records, utility records, purchase records, waste-management records, and other institutional documents. Where primary data were unavailable, appropriate assumptions, standard reference values, or proxy data were considered, subject to availability and suitability." },
            { type: "h", text: "Step 3: Selection of Emission Factors and Conversion to CO₂e" },
            { type: "p", text: "The collected activity data were converted into carbon dioxide equivalent (CO₂e) using appropriate emission factors. These factors were selected from recognised national and international sources and relevant greenhouse gas accounting guidelines, including sources consistent with the GHG Protocol methodology. The selection of emission factors was based on the type of activity, fuel or resource consumed, and the applicable unit of measurement. Emissions from different greenhouse gases were expressed in CO₂e wherever the relevant data and conversion factors were available." },
            { type: "h", text: "Step 4: Calculation of Greenhouse Gas Emissions" },
            { type: "p", text: "Emissions associated with each identified activity were calculated by multiplying the corresponding activity data by the applicable emission factor. The general calculation formula is:" },
            { type: "formula", text: "GHG Emissions (kg CO₂e) = Activity Data × Emission Factor" },
            { type: "p", text: "The calculated results were converted into appropriate reporting units, including tonnes of carbon dioxide equivalent (tCO₂e), wherever required. Emissions were then aggregated according to their respective sources and GHG Protocol scopes to determine the contribution of each scope to the University's overall assessed carbon footprint." },
            { type: "h", text: "Step 5: Consolidation, Analysis and Reporting" },
            { type: "p", text: "The calculated emissions were consolidated and classified under Scope 1, Scope 2, and Scope 3. For the 2024–2025 assessment year, the reported distribution indicates that Scope 1 contributed 60.06%, Scope 2 contributed 27.83%, and Scope 3 contributed 12.11% of the total assessed emissions. These findings identify direct fuel consumption as the largest contributor, followed by purchased electricity and other indirect activities. The results provide a basis for prioritising fuel-efficiency improvements, renewable-energy adoption, energy conservation, waste management, and sustainable resource-use practices. The assessment also supports the development of future emission-reduction strategies and progress towards the University's long-term carbon-reduction and net-zero objectives." },
        ],
    },
    {
        id: "sustainability-perspective",
        label: "Overall Sustainability Perspective",
        blocks: [
            { type: "p", text: "The carbon-footprint assessment gives Kalinga University a structured basis for understanding its major emission sources and planning future mitigation measures. Going forward, the University's sustainability strategy can continue to focus on renewable-energy expansion, energy efficiency, sustainable transportation, waste reduction and recycling, green infrastructure, responsible consumption, carbon sequestration through campus green cover, and continuous environmental awareness. Regular carbon accounting and monitoring will help the University set measurable emission-reduction targets and track progress over time. These efforts support the long-term objective of developing a low-carbon, resource-efficient, and environmentally sustainable campus, with a pathway towards Net-Zero emissions by 2030. Tracking emissions per unit of campus area can help the University understand how effectively its buildings and infrastructure are being managed from an energy and carbon perspective. A reduction in this measure can be associated with improved energy management, more efficient infrastructure, greater renewable-energy use, and sustainable campus practices." },
            { type: "h", text: "Renewable Energy Progress – Key Highlight" },
            { type: "p", text: "Kalinga University is progressively strengthening its renewable-energy initiatives, particularly through the adoption and use of solar energy across the campus. As the contribution of renewable energy to the University's electricity consumption increases, the University's dependence on conventional grid electricity can be reduced. This can also contribute to lower Scope 2 greenhouse gas emissions." },
            { type: "h", text: "Green Pathways and Smart Energy-Efficient Infrastructure" },
            { type: "p", text: "The University is also developing green pathways and sustainable landscaping as part of its efforts to reduce environmental impact and carbon emissions. Plant species that require less water and are well suited to local climatic conditions are being selected. This approach helps reduce water requirements while supporting the development of sustainable green spaces across the campus. In addition, the University is introducing sensor-based smart lighting systems along pathways and in other campus areas. These systems can automatically operate or adjust lighting based on movement and surrounding conditions. This helps avoid unnecessary electricity use and the associated carbon emissions. The University's continued investment in renewable energy, energy-efficient infrastructure, sustainable transportation, and resource conservation supports its long-term Carbon Neutrality and Net-Zero pathway toward 2030." },
        ],
    },
    {
        id: "initiatives-2025",
        label: "Major Environmental Sustainability Initiatives – 2025",
        blocks: [
            { type: "p", text: "Kalinga University, Naya Raipur, has undertaken several initiatives in 2025 to strengthen its commitment to environmental sustainability." },
            {
                type: "cards",
                items: [
                    { title: "Energy-Efficient Infrastructure Upgrade", text: "The University is progressively replacing conventional electrical appliances with energy-efficient BLDC motors and LED fixtures across academic and administrative blocks. These improvements are intended to optimise electricity consumption." },
                    { title: "Green Campus Development", text: "Large-scale plantation drives have been carried out across and around the Naya Raipur campus, with more than 3,000 saplings planted to strengthen biodiversity and increase regional green cover." },
                    { title: "Resource Efficiency and Waste-to-Energy", text: "The University has introduced organic waste digesters to manage mess and food waste. Rainwater-harvesting structures have also been developed across campus buildings to support better water-resource management." },
                    { title: "Promotion of Electric Mobility", text: "The University has introduced electric shuttles for campus transportation and is encouraging EV adoption among faculty and staff. These measures are intended to reduce dependence on fossil fuels." },
                    { title: "Paperless Campus Policy", text: "The University is actively promoting digital workflows, e-governance, and paperless administrative processes to reduce paper consumption across campus." },
                    { title: "Solar Power Integration", text: "The University is expanding its rooftop solar photovoltaic (PV) systems to increase the share of clean energy in its overall electricity consumption." },
                ],
            },
        ],
    },
    {
        id: "recommendations",
        label: "Recommendations for 2025–26",
        blocks: [
            { type: "p", text: "Based on the current emission trends and sustainability initiatives, the following measures can further strengthen Kalinga University's efforts to reduce its carbon footprint." },
            { type: "h", text: "1. Energy Efficiency and Renewable Energy Expansion" },
            {
                type: "ul",
                items: [
                    "Increase rooftop solar PV capacity to further reduce dependence on grid electricity.",
                    "Complete the transition to 100% BLDC fans, smart HVAC controls, and motion-sensor lighting across hostels and classrooms.",
                    "Introduce AI-enabled energy-monitoring systems to track electricity consumption in real time at the department level.",
                ],
            },
            { type: "h", text: "2. Sustainable and Low-Carbon Mobility" },
            {
                type: "ul",
                items: [
                    "Increase the use of electric buses and shuttles for student and staff transportation.",
                    "Install dedicated EV charging stations at important parking locations across the campus.",
                    "Promote bicycle-sharing programmes and pedestrian-friendly pathways within the campus.",
                ],
            },
            { type: "h", text: "3. Integrated Waste Management and Circular Practices" },
            {
                type: "ul",
                items: [
                    "Expand organic-waste conversion capacity using food waste generated by university hostels and mess facilities.",
                    "Establish a strong e-waste segregation and certified recycling system for electronic equipment used in laboratories and offices.",
                    "Work towards a Zero-Waste Campus by reducing the amount of waste sent to landfill.",
                ],
            },
            { type: "h", text: "4. Resource Efficiency and Digital Transformation" },
            {
                type: "ul",
                items: [
                    "Strengthen fully digital assignment submissions, online examinations, and paperless administrative systems.",
                    "Install smart water meters and expand Sewage Treatment Plant (STP) capacity to maximise wastewater recycling for horticultural use.",
                ],
            },
            { type: "h", text: "5. Awareness, Engagement and Capacity Building" },
            {
                type: "ul",
                items: [
                    "Conduct regular sustainability audits, workshops, and green-awareness campaigns through the University's SDG Cell.",
                    "Encourage and support student-led sustainability clubs to promote environmentally responsible practices across campus.",
                    "Include sustainability and climate-action modules within relevant academic curricula.",
                ],
            },
        ],
    },
    {
        id: "conclusion",
        label: "Conclusion",
        blocks: [
            { type: "p", text: "This assessment, prepared using the principles of the GHG Protocol Corporate Standard, provides Kalinga University with a structured understanding of its operational carbon footprint. The University's ongoing work in renewable energy, energy efficiency, sustainable transportation, waste management, digital transformation, and green-campus development provides a foundation for further reducing emissions. Moving forward, accelerating renewable-energy adoption, improving campus transportation, and addressing Scope 3 emissions through resource-efficient and digital initiatives will remain important areas of focus. Together, these efforts can support Kalinga University's long-term carbon-reduction goals and contribute to the development of a more sustainable campus in Naya Raipur." },
        ],
    },
];
