import { headerLinks } from "@/constants/Index";
import Link from "next/link";

const NavItems = () => {
  return (
    <ul className="flex-1 flex items-center gap-20">
      {headerLinks.map((link) => (
        <li key={link.label}>
          <Link href={link.route}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
