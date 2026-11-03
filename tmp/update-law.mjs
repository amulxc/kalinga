import fs from 'node:fs';
import sharp from 'sharp';
const path='src/app/law-organize-two-days-conference/page.js';
let s=fs.readFileSync(path,'utf8').replaceAll('\r\n','\n');
const replace=(a,b)=>{if(!s.includes(a))throw Error('Missing '+a);s=s.replace(a,b)};
replace('>lawconference@kalingauniversity.ac.in</a>', '><strong>lawconference@kalingauniversity.ac.in</strong></a>');
replace('Prof. (Dr.) Farhana Helal Mehtab", designation: "Dean, Faculty of Law, Green University of Bangladesh, Bangladesh','Prof. Dr. Farhana Helal Mehtab", designation: "Dean, School of Law, Southeast University, Bangladesh');
replace('Prof., Kyiv Aviation Institute, Ukraine ', 'Professor, Kyiv Aviation Institute, Ukraine');
replace('Prof. Balamurugan Baluswamy','Prof. Dr. Balamurugan Baluswamy');
replace('10<sup>th</sup> September 2026','16<sup>th</sup> October 2026');
replace('20<sup>th</sup> September 2026','17<sup>th</sup> October 2026');
replace('30<sup>th</sup> September 2026','18<sup>th</sup> October 2026');
replace('15<sup>th</sup> October 2026','25<sup>th</sup> October 2026');
replace('<strong>Edited Book with ISBN:</strong> Select papers may also be published in an Edited Book with ISBN without any publication charges.', '<strong>Edited Book with ISBN:</strong> Select papers may also be published in an Edited Book with ISBN without any publication charges. Selected outstanding papers presented at the conference will also be considered for publication in an Edited Book with ISBN, to be published by Satyam Law International, without any additional publication charges.');
const logos=[['iiit-naya-raipur',7,'IIIT Naya Raipur'],['cgiam',8,'Chhattisgarh Institute of Arbitration and Mediation'],['amritsar-law-college',9,'Amritsar Law College'],['aditya-college-for-law',10,'Aditya College for Law']];
for(const [name,index] of logos)await sharp(`tmp/doc-image-${index}.png`).webp({quality:90}).toFile(`public/law-conference/collaborators/${name}.webp`);
replace('    const collaborators = [','    const collaborators = [\n'+logos.map(([name,,alt],i)=>`        { id: ${i+4}, image: "/law-conference/collaborators/${name}.webp", alt: "${alt}" },`).join('\n'));
await sharp('tmp/doc-image-12.png').webp({quality:90}).toFile('public/law-conference/sdg-10.webp');
const sdgStart=s.indexOf('                        <div className="w-24',s.indexOf('alt="SDG 9'));
s=s.slice(0,sdgStart)+`                        <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-xl overflow-hidden shadow-md bg-white p-1 border border-gray-100">
                            <img src="/law-conference/sdg-10.webp" alt="SDG 10 - Reduced Inequalities" className="w-full h-full object-contain rounded-lg" />
                        </div>
`+s.slice(sdgStart);
const refs=[
['The AI Accountability Framework 2026: Framework and Doctrines','Version 3.0','21119709','21119708'],
['Duggal Global Agentic AI Liability Framework: A Conceptual, Normative, and Operationally Precise Blueprint for Accountability, Responsibility, and Governance in the Era of Autonomous Artificial Intelligence Agents','Version 1.1','21273447','21273446'],
['Universal Declaration of AI Accountability Rights (UDAAR 2026)','Version 1.0','22019725','22019724'],
['New Delhi Compact on Artificial Intelligence Accountability','Version 3.2','22020134','22020133'],
['Global South Legal Architecture for Artificial Intelligence Governance and Accountability: A Common Minimum Denominators Approach for the Global South Group of Nations','Version 6','22020360','22020359']
];
const refSection=`
            <section className="px-4 py-12 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading title="AI Governance and Accountability Frameworks: Research References" />
                    <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full min-w-[850px] text-left text-sm">
                            <thead className="bg-[var(--button-red)] text-white"><tr>{['S.No.', 'Title of the Framework/Instrument', 'Version', 'Version DOI', 'Concept DOI (All Versions)'].map(label => <th key={label} scope="col" className="p-4">{label}</th>)}</tr></thead>
                            <tbody>{${JSON.stringify(refs)}.map(([title, version, versionDoi, conceptDoi], index) => (
                                <tr key={versionDoi} className="border-t border-gray-200 even:bg-gray-50">
                                    <td className="p-4 align-top">{index + 1}</td><th scope="row" className="p-4 align-top font-medium">{title}</th><td className="p-4 align-top whitespace-nowrap">{version}</td>
                                    {[versionDoi, conceptDoi].map(doi => <td key={doi} className="p-4 align-top"><a href={\`https://doi.org/10.5281/zenodo.\${doi}\`} target="_blank" rel="noopener noreferrer" className="text-red-800 underline break-words">{\`https://doi.org/10.5281/zenodo.\${doi}\`}</a></td>)}
                                </tr>
                            ))}</tbody>
                        </table>
                    </div>
                </div>
            </section>
`;
replace('            <FAQ\n                id="conference-information"', refSection+'\n            <FAQ\n                id="conference-information"');
const guests=[
['Adv. Dr. Riju Raj S. Jamwal','Managing Partner JRD & Partners','General counsel and Senior litigating Advocate','Supreme Court of India, New Delhi'],
['Mr. Zoheb Amin','Corporate Legal Advisor','Zycus Infotech Private Ltd., Mumbai, Maharashtra'],
['Prof. Alfredo M. Ronchi','Professor','Politecnico di Milano, Milano, Italia'],
['Prof. Andrii Paziuk','Professor','Kyiv Aviation Institute, Ukraine'],
['Prof. Dr. Farhana Helal Mehtab','Dean, School of Law','Southeast University, Bangladesh'],
['Prof. Om Prakash Vyas','Director','Dr. Shyama Prasad Mukherjee International Institute of Information Technology (IIIT), Naya Raipur'],
['Dr. Pavan Duggal','Senior Advocate, Supreme Court of India, Global Chair, International AI Accountability Forum, Chairman, International Commission on Cyber Security Law, Founder, Cyber Law University.'],
['Prof. Dr. Shashikala Gurpur','Director, Symbiosis Law School Pune, Maharashtra'],
['Prof. Dr. Tabrez Ahmad','Professor & Dean','MANUU Law School - Maulana Azad National Urdu University, Gachibowli, Hyderabad, Telangana'],
['Mr. Sameet Gambhir','Associate Partner - Risk & Legal','A Big 4 Consulting Firm Group, Gurugram, Haryana'],
['Adv. Hamida Siddique','Senior Advocate, High Court of Chhattisgarh','Mediator, Potential Mediation Trainer MCPC Supreme Court'],
['Dr. Sarah Jane Fox','Associate Professor, Academic at Leicester Law School','University of Leicester (UK)']
];
replace('            <FAQ\n                id="committee-members"',`            <section className="px-4 py-12 md:px-8 bg-[var(--lite-sand)]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading title="Chief Guest & Distinguished Speakers" subtitle="Our Guests" />
                    <div className="max-w-2xl mx-auto mt-8 rounded-xl bg-white border border-gray-200 p-6 text-center">
                        <h3 className="text-red-800 font-semibold mb-3">Chief Guest</h3>
                        <h4 className="text-xl font-bold mb-3">Hon&apos;ble Justice (Rtd.) Indira Banerjee</h4>
                        <p>Former Judge, Supreme Court of India</p>
                        <p>Former Chief Justice, Madras High Court</p>
                    </div>
                    <h3 className="text-2xl font-bold text-center mt-10 mb-6">Our Distinguished Speakers</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {${JSON.stringify(guests)}.map(([name, ...details]) => (
                            <article key={name} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
                                <h4 className="text-lg font-bold mb-3">{name}</h4>
                                {details.map(detail => <p key={detail} className="text-gray-700 text-sm leading-relaxed">{detail}</p>)}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ
                id="committee-members"`);
fs.writeFileSync(path,s);
