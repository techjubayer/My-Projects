import Link from "next/link";
import BottomBar from "../components/BottomBar";
import IconHistory from "../icons/History";
import BackHeader from "../components/BackHeader";

const settingsOptions = [
  {
    href: "/profile",
    icon: IconHistory,
    imgSrc: "/icons/profile.svg",
    alt: "My Profile",
    title: "My Profile",
    description:
      "Easily manage and update your personal information for a more tailored experience on our platform.",
  },
  {
    href: "/app/pages/privacy-policy",
    icon: IconHistory,
    alt: "Privacy policy",
    title: "Privacy policy",
    description:
      "Learn more about our stringent privacy measures and how we protect your personal information.",
  },
  {
    href: "/app/pages/terms-conditions",
    icon: IconHistory,
    alt: "Terms & Conditions",
    title: "Terms & conditions",
    description:
      "Review our terms and conditions to understand the guidelines and agreements of our services.",
  },
  {
    href: "/app/pages/refund-policy",
    icon: IconHistory,
    alt: "Refund policy",
    title: "Refund policy",
    description:
      "Please review our refund policy to understand the conditions and procedures for eligibility for a refund.",
  },
  {
    href: "mailto:support@billhub.in",
    icon: IconHistory,
    alt: "Write to us",
    title: "Write to us",
    description:
      "Feel free to reach out to us with any inquiries, feedback, or assistance you may need; we're here to help.",
    target: "_blank",
  },
  {
    href: "#",
    icon: IconHistory,
    alt: "Rate our app",
    title: "Rate our app",
    description:
      "Share your valuable feedback and experiences with our application to help us improve and serve you better.",
  },
  {
    href: "/app/support",
    icon: IconHistory,
    alt: "Contact support",
    title: "Contact support",
    description:
      "Access our dedicated support team for prompt assistance with any questions, concerns, or technical issues.",
  },
  {
    href: "#",
    icon: IconHistory,
    alt: "Logout",
    title: "Logout",
    description:
      "Logout securely to protect your account and ensure the confidentiality of your personal data.",
  },
];

export default function Settings() {
  return (
    <div className="pb-20 ">
   

      <BackHeader title="Add Money" />

      <div className="p-4">
        <div className="bg-slate-100 dark:bg-[#0e0e0e] py-7 text-center px-3">
          <h1 className="text-4xl font-extrabold text-foreground-300 opacity-60">
            Recharge Land
          </h1>
          <p className="text-md text-foreground-300 ">
            Best Mobile Recharge App
          </p>
          <p className="text-xs text-gray-500">In The Market</p>
          <p className="uppercase text-sm mt-1 text-foreground-300"></p>
        </div>

        <div className="my-5">
          <p className="font-bold text-xl">Settings</p>

          {settingsOptions.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="p-2 flex items-center gap-3 rounded-md  my-2 border-gray-400 bg-slate-100 dark:bg-black"
            >
              <item.icon size={32} />
              <div>
                <p className="text-md font-bold">{item.title}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-center mb-5 pt-5 opacity-50"> ❤️ Made IN India ❤️</p>
      </div>

      <BottomBar />
    </div>
  );
}
