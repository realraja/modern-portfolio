import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import React from "react";

export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center min-h-screen items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Hero />
      <Grid />
      <Project />
      <Skills />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
    </main>
  );
}
