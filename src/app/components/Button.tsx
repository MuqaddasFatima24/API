import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
  isSecondary?: boolean;
}

const Button = ({ href, label, isSecondary }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`py-3 px-6 rounded-lg shadow-md text-white transition-transform transform hover:scale-105 ${
        isSecondary
          ? "bg-gray-600 hover:bg-gray-700"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {label}
    </Link>
  );
};

export default Button;
