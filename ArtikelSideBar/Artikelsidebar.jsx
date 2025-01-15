import { storyblokEditable } from "@storyblok/react/rsc";

const Artikelsidebar = ({ blok }) => (
    <div
        className="flex-col h-fit w-fit hidden invisible fixed left-[20vw] top-36 mr-auto max-ml md:block lg:visible dark:bg-darkGrijs dark:text-[#EAEAEA]"
        {...storyblokEditable(blok)}
    >
        <img
            className="w-7 h-auto mb-2 dark:filter dark:invert"
            src={blok.instagramicon.filename}
            alt={blok.instagramicon.alt || "Instagram"}
        />
        <img
            className="w-7 h-auto mb-2 dark:filter dark:invert"
            src={blok.facebookicon.filename}
            alt={blok.facebookicon.alt || "Facebook"}
        />
        <img
            className="w-7 h-auto mb-2 dark:filter dark:invert"
            src={blok.youtubeicon.filename}
            alt={blok.youtubeicon.alt || "Youtube"}
        />
        <img
            className="w-7 h-auto mb-2 dark:filter dark:invert"
            src={blok.twittericon.filename}
            alt={blok.twittericon.alt || "Twitter"}
        />
        <img
            className="w-7 h-auto dark:filter dark:invert"
            src={blok.linkedinicon.filename}
            alt={blok.linkedinicon.alt || "Linkedin"}
        />
    </div>
);

export default Artikelsidebar;
