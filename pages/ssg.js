import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import { doit } from "../utils/doit";

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: await doit(),
  };
}
