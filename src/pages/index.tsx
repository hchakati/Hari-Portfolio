import Image from "next/image";
import { Inter } from "next/font/google";
import { NavigationDock } from "@/components/NavigationDock";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Header from "@/components/Header";

import { Syne } from "next/font/google";

const syne = Syne({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={` relative flex min-h-screen flex-col items-center justify-between ${syne.className}`}
    >
      <Header/>
      <NavigationDock/>
      <Hero/>
      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </main>
  );
}
