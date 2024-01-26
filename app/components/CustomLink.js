import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ href, title, className = "", scrolled = false }) => {
  const router = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-300
    ${router === href ? "w-full" : "w-0"} ${scrolled ? "bg-light" : "bg-dark"}`}
      >
        &nbsp;{" "}
      </span>
    </Link>
  );
};

export default CustomLink;
