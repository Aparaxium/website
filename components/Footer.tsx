import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons";
import { ReactElement } from "react";

const footerLinks = [
  { icon: IconBrandFacebook, href: "https://www.facebook.com" },
  { icon: IconBrandTwitter, href: "https://www.twitter.com" },
  { icon: IconBrandInstagram, href: "https://www.instagram.com" },
  { icon: IconBrandGithub, href: "https://www.github.com" },
  { icon: IconBrandLinkedin, href: "https://www.linkedin.com" },
  { icon: IconBrandYoutube, href: "https://www.youtube.com" },
];

export default function Footer(): ReactElement {
  const components = footerLinks.map((site) => {
    const IconComponent = site.icon;
    return (
      <a key={site.href} href={site.href}>
        <IconComponent />
      </a>
    );
  });
  return (
    <footer>
      <div className="z-50 flex items-center justify-center space-x-8 h-14 ">
        {components}
      </div>
    </footer>
  );
}
