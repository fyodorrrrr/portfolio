"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startCurtain } from "./PageCurtain";

// A next/link that plays the page curtain on a plain left-click. Modified clicks
// (new tab, etc.) and anything the curtain can't handle fall through to normal navigation.
export default function CurtainLink({ href, onClick, ...props }) {
  const router = useRouter();

  const handleClick = (event) => {
    onClick?.(event);
    const isPlainLeftClick =
      event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
    if (event.defaultPrevented || !isPlainLeftClick) return;
    if (startCurtain(href, () => router.push(href))) event.preventDefault();
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
