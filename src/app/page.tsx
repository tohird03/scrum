import VideoCard from "@/components/VideoCard/VideoCard";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <VideoCard
        img="https://nextjs.org/icons/next.svg"
        title="Salom"
        desc="Bu shunaqa video"
      />
    </div>
  );
}
