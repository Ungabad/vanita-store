import React from "react";
import { Card } from "@/components";
import {getCurrentUser} from "@/lib/auth/actions";
import Community from "@/components/Community";
import Story from "@/components/story";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";



const Home = async () => {
  const user = await getCurrentUser();

  console.log('USER:', user);

  return (
    <main className="w-full">
      <Hero />
      <Latest />
      <Story />
      <Community />
    </main>
  );
};

export default Home;
