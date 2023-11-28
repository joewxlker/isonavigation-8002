import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

export const Button: FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <Link className="rounded shadow-shadow shadow-md overflow-clip bg-s2 text-t3 flex-1" href={href} target="_blank">
      <div className="flex justify-center items-center bg-accent p-1 bg-opacity-30 py-2">
        <p className="font-accent text-lg text-accent">{text.toUpperCase()}</p>
      </div>
    </Link>
  );
};

export const ButtonTwo: FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <Link className="rounded shadow-shadow shadow-md overflow-clip bg-s2 text-t3 flex-1" href={href} target="_blank">
      <div className="flex justify-center items-center bg-accent p-1 py-2">
        <p className="font-accent text-lg text-t3">{text.toUpperCase()}</p>
      </div>
    </Link>
  );
};

export const ButtonThree: FC<{ href: string; text: string }> = ({ href, text }) => {
  return (
    <Link className="rounded shadow-shadow shadow-md overflow-clip bg-s2 text-t3 flex-1" href={href} target="_blank">
      <div className="flex items-center bg-accent p-1 bg-opacity-30 py-2 justify-evenly">
        <p className="font-accent text-lg text-accent">{text.toUpperCase()}</p>
        <Image src="/icons/arrowlink.svg" alt="" height={20} width={20}/>
      </div>
    </Link>
  );
};