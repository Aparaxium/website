import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  title: string;

  link?: string;
  children: React.ReactNode;
};

export default function TextCard({
  title,
  link = "/",
  children,
}: Props): ReactElement {
  return (
    <li>
      <div className="m-6 divide-y divide-black h-2/6">
        <Link href={link}>
          <a>
            <p className="pt-6 text-4xl font-bold text-center">{title}</p>
          </a>
        </Link>
        <div className="p-4 m-4 text-xs text-center h-4/6 sm:text-base">
          {children}
        </div>
      </div>
    </li>
  );
}
