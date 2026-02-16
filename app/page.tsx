import Services from "@/components/main/Encryption"; // Keeping filename, updated export
import Experience from "@/components/main/experience";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Services />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
