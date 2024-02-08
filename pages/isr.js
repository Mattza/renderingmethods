import { useStoryblokState, StoryblokComponent } from "@storyblok/react";
import { doit } from "../utils/doit";

export default function Home({ story }) {
  story = useStoryblokState(story);

  return <StoryblokComponent blok={story.content} />;
}

export async function getStaticProps() {
  return {
    props: await doit(),
    revalidate: 10,
  };
}
