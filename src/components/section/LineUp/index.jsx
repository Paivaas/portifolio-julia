import Experience1 from "@/components/section/LineUp/Experience/1"
import Experience2 from "@/components/section/LineUp/Experience/2"
import Experience3 from "@/components/section/LineUp/Experience/3"
import Experience4 from "@/components/section/LineUp/Experience/4"
import Reveal from '@/components/ui/Reveal';

export default function ExperienceTimeline() {

  return (

    <section className="flex flex-col gap-6 w-full justify-center items-center px-6 md:p-0">

      <h1 className="text-7xl" style={{ fontFamily: "var(--font-kapakana)" }}>Line Up</h1>
        <Reveal><Experience1></Experience1></Reveal>
         <Reveal><Experience2></Experience2></Reveal>
          <Reveal><Experience3></Experience3></Reveal>
           <Reveal><Experience4></Experience4></Reveal>
    </section>
  );
}