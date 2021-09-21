import { TablerIconProps } from "@tabler/icons";
import dynamic, { DynamicOptions } from "next/dynamic";
import { ReactElement } from "react";

const footerLinks = [
  { icon: "IconBrandFacebook", href: "https://www.facebook.com" },
  { icon: "IconBrandTwitter", href: "https://www.twitter.com" },
  { icon: "IconBrandInstagram", href: "https://www.instagram.com" },
  { icon: "IconBrandGithub", href: "https://www.github.com" },
  { icon: "IconBrandLinkedin", href: "https://www.linkedin.com" },
  { icon: "IconBrandYoutube", href: "https://www.youtube.com" },
];

//TODO implement suspense when react 18 is released?
export default function Footer(): ReactElement {
  const components = footerLinks.map((site) => {
    const importdata = () =>
      import("@tabler/icons").then((module) => module[site.icon]);
    const DynamicComponent = dynamic(
      importdata as DynamicOptions<TablerIconProps>
    );
    return (
      <a key={site.href} href={site.href}>
        <DynamicComponent />
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
