import Community from "@/components/Community";
import Story from "@/components/story";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";



const Home = async () => {
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
