import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SplashScreen } from "@/components/ui/loader";

export default function Home() {
  return (
    <SplashScreen>
      <main className="min-h-screen bg-background text-foreground antialiased bg-grid-black/[0.05]">
        <HeroSection />
        <ProjectsSection />
      </main>
    </SplashScreen>
  );
}
