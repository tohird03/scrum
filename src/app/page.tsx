import VideoPlayer from "@/components/Hls/HlsPlayer";
import VideoCard from "@/components/VideoCard/VideoCard";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <VideoCard
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnh7pgJUtpZWWtHn-eVA3n1DY6D6WpnGOdA&s"
        title="Salom"
        desc="Bu shunaqa video"
      />

      <VideoPlayer videoId="670f955bae5e2424da5eb59d"/>
    </div>
  );
}
