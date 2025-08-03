import Image from "next/image";
import Link from "next/link";
import Logos from "@/components/ui/Logos";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Logos />
      
    </Link>
  );
}
