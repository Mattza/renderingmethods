import { getStoryblokApi } from "@storyblok/react";

export const expensive = () =>
  new Promise((res) => {
    setTimeout(() => {
      res();
    }, 3000);
  });

export const doit = async () => {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  await expensive();
  return {
    story: data ? data.story : false,
    key: data ? data.story.id : false,
  };
};
