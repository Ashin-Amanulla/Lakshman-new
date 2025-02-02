import Image from "next/image";
import Link from "next/link";
import Logos from "@/components/ui/Logos";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Logos />
      <div className="flex flex-col -ml-1">
        <span className="text-xl font-bold tracking-wider text-primary">
          SL ADVOCATES
        </span>
        <span className="text-xs tracking-widest text-secondary">
          LEGAL EXCELLENCE & INTEGRITY
        </span>
      </div>
    </Link>
  );
}
