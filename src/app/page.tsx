import { Hero } from "@/components/Hero/Hero";
import { Navigation } from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="bg-background">
      <Navigation />
      <Hero />
    </div>
  );
}
