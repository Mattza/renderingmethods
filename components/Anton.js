import { storyblokEditable } from "@storyblok/react";

const Anton = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    <img src={blok.imgurl.filename} />
    {blok.antontitle}
  </div>
);

export default Anton;
