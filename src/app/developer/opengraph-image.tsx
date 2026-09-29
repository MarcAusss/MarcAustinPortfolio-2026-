import {
  renderSocialImage,
  socialImageAlt,
  socialImageSize,
} from "./social-image";

export const alt = socialImageAlt;
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderSocialImage();
}
