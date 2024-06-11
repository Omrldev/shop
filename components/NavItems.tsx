import { headerLinks } from "@/constants/Index";
import Link from "next/link";

const NavItems = () => {
  return (
    <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
      {headerLinks.map((link) => (
        <li key={link.label}>
          <Link href={link.route} className="text-md leading-normal">{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
