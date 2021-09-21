import Link from "next/link";
import { ReactElement, useState } from "react";

import ThemeToggle from "./ThemeToggle";

type Props = {
  readonly sticky?: boolean;
};

/* not neccessary due to undefined and null being falsey, but is semantically useful
Navbar.defaultProps = {
  sticky: false,
};
*/

const headerNavLinks = [
  { href: "/", title: "Home" },
  { href: "/projects", title: "Projects" },
  { href: "/contact", title: "Contact" },
];

export default function NavBar({ sticky }: Props): ReactElement {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav
      className={`flex items-center flex-wrap w-full z-50 ${
        sticky ? "sticky z-50" : ""
      }`}
    >
      <Link href="/">
        <a className="pl-4 text-xl font-bold uppercase">Winchester</a>
      </Link>
      <button
        onClick={handleClick}
        className="inline-flex p-3 ml-auto rounded outline-none  lg:hidden"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="flex flex-col w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          <ThemeToggle />
          {headerNavLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              <a className="items-center justify-center py-2 mx-3 font-bold">
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
