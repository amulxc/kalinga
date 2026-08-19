import Link from "next/link";
import SectionBlock from "../SectionBlock";
import GlobalArrowButton from "../../general/global-arrow_button";
import { SUSTAINABILITY_INITIATIVES } from "../data/initiatives-content";

/**
 * "Our Initiatives" — entry points to the six initiative detail pages under
 * /sustainability/ (health, water, energy, waste, green campus, partnerships).
 */
export default function InitiativesSection() {
    return (
        <SectionBlock id="our-initiatives" title="Our Initiatives">
            <p>
                Explore how the University puts its sustainability commitments into practice
                across health, resources, campus operations and partnerships.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SUSTAINABILITY_INITIATIVES.map((initiative) => (
                    <Link
                        key={initiative.href}
                        href={initiative.href}
                        prefetch={false}
                        title={initiative.label}
                        className="block w-full min-w-0"
                    >
                        <GlobalArrowButton
                            as="span"
                            className="!w-full min-h-[60px] h-auto justify-between !rounded-xl"
                            textClassName="!text-left !leading-snug !font-medium"
                            arrowClassName="p-[3px] !px-2 mr-2 !py-1 shrink-0"
                            arrowSize={26}
                        >
                            {initiative.label}
                        </GlobalArrowButton>
                    </Link>
                ))}
            </div>
        </SectionBlock>
    );
}
