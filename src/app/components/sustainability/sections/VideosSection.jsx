import SectionBlock from "../SectionBlock";

/**
 * Video walkthroughs of the university's sustainability work on campus.
 */
const VIDEOS = [
    {
        id: "sustainable-campus",
        title: "Sustainable Campus",
        src: "/sustainability/videos/sustainable-campus.mp4",
    },
];

export default function VideosSection() {
    return (
        <SectionBlock
            id="videos"
            title="Sustainable Campus"
            subtitle="Explore a sustainable campus environment."
        >
            <div className="space-y-6">
                {VIDEOS.map((video) => (
                    <video
                        key={video.id}
                        aria-label={video.title}
                        controls
                        preload="none"
                        playsInline
                        className="w-full aspect-video rounded-xl bg-black"
                    >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support embedded video.{' '}
                        <a href={video.src}>Watch {video.title}</a>.
                    </video>
                ))}
            </div>
        </SectionBlock>
    );
}
