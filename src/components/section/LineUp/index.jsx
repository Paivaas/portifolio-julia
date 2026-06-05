import Experience1 from "@/components/section/LineUp/Experience/1"
import Experience2 from "@/components/section/LineUp/Experience/2"
import Experience3 from "@/components/section/LineUp/Experience/3"
import Experience4 from "@/components/section/LineUp/Experience/4"
;import { kapakana } from '@/fonts/kapanaka'


import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function ExperienceTimeline() {

  return (

    <section className="flex flex-col gap-6 w-full justify-center items-center py-16">

      <h1 className={`${kapakana.className} text-7xl`}>Line Up</h1>
      <Experience1></Experience1>
      <Experience2></Experience2>
      <Experience3></Experience3>
      <Experience4></Experience4>

    </section>
  );
}