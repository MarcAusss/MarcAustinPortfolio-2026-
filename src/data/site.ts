/*
|--------------------------------------------------------------------------
| Site config
|--------------------------------------------------------------------------
|
| Single source for contact details and public links. Every page and
| component reads from here so they can't drift apart.
|
*/

export const siteUrl = "https://marc-austin-portfolio-2026.vercel.app";

export const contact = {
  email: "marcaustinbonagua@gmail.com",

  github: {
    handle: "MarcAusss",
    url: "https://github.com/MarcAusss",
  },

  linkedin: {
    handle: "marc-austin-bonagua-78070b2a8",
    url: "https://www.linkedin.com/in/marc-austin-bonagua-78070b2a8/",
  },
} as const;

/*
 * Photography social links. Hidden on the photography contact page until set.
 */
export const photographySocials: {
  label: string;
  value?: string;
  href?: string;
}[] = [
  {
    label: "Instagram",
    // TODO(marc): Instagram handle and URL, e.g. value: "@handle", href: "https://www.instagram.com/handle/"
  },
  {
    label: "Facebook",
    // TODO(marc): Facebook page name and URL
  },
];

export const resumePath = "/resume/marc-austin-cv.pdf";

/*
 * Portrait shown on /developer/about. The block is hidden while this is
 * undefined.
 *
 * TODO(marc): add a portrait to public/images/developer/ and set the path.
 */
export const portrait: { src: string; alt: string } | undefined = undefined;
