import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <div className="flex justify-between items-center p-2">
      <Link href={"/settings"} className="flex items-center gap-2 text-white">
        <Image
          className="rounded-full w-12"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          width={100}
          height={100}
          alt="NA"
        />
        <div>
          <p className="text-lg font-bold">Hi, Jubayer Ali</p>
          <p className="text-sm font-light">+91 86999938199</p>
        </div>
      </Link>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
