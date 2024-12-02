import Link from "next/link";
import React from "react";

export default function BottomBar() {
  return (
    <div className="flex z-[99] items-center justify-between bg-white dark:bg-black border-t border-[#00000010] dark:border-[#ffffff24] fixed bottom-0 w-full h-[80px]">
      <button
        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 px-0 !gap-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground min-w-10 data-[hover=true]:opacity-hover h-full w-full rounded-none bg-[#fafafa] dark:bg-[#0e0e0e]"
        type="button"
      >
        <Link
          className="h-full w-full flex flex-col items-center justify-center text-blue-800 dark:text-blue-300"
          href="/"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-1"
            height="33"
            width="33"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"></path>
            <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path>
          </svg>
          <p>Home</p>
        </Link>
      </button>
      <button
        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 px-0 !gap-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground min-w-10 data-[hover=true]:opacity-hover h-full w-full rounded-none bg-transparent"
        type="button"
      >
        <Link
          className="h-full w-full flex flex-col items-center justify-center"
          href="/reports"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-1"
            height="33"
            width="33"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
            <path d="M9 17l0 -5"></path>
            <path d="M12 17l0 -1"></path>
            <path d="M15 17l0 -3"></path>
          </svg>
          <p>Reports</p>
        </Link>
      </button>
      <button
        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 px-0 !gap-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground min-w-10 data-[hover=true]:opacity-hover h-full w-full rounded-none bg-transparent"
        type="button"
      >
        <a
          className="h-full w-full flex flex-col items-center justify-center"
          href="/app/voucher"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-ticket-percent mb-1"
          >
            <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
            <path d="M9 9h.01"></path>
            <path d="m15 9-6 6"></path>
            <path d="M15 15h.01"></path>
          </svg>
          <p>Voucher</p>
        </a>
      </button>
      <button
        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 px-0 !gap-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground min-w-10 data-[hover=true]:opacity-hover h-full w-full rounded-none bg-transparent"
        type="button"
      >
        <Link
          className="h-full w-full flex flex-col items-center justify-center"
          href="/settings"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-1"
            height="33"
            width="33"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          </svg>
          <p>Settings</p>
        </Link>
      </button>
    </div>
  );
}
