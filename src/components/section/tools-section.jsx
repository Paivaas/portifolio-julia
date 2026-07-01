import Image from "next/image";
import { RippleButton } from "@/components/ui/ripple-button"

const skills = [
  {
    title: "Desenvolvimento web",
    items: [
      ["react.svg", "React", "#ADD8E6"],
      ["node.svg", "Node", "#D1F6CA"],
      ["typescript.svg", "Typescript", "#ADD8E6"],
      ["figma.svg", "Figma", "#FFE7F4"],
      ["git.svg", "Git", "#FFE7F4"],
      ["vscode.svg", "VS code", "#D1F6CA"],
    ],
  }
];

export default function Tools() {
  return (
    <section className="w-full flex  gap-2 py-12 justify-center  items-center">

     {skills.map((skill) => (
      <section className="flex justify-center flex-col items-center gap-2" key={skill.title}>
        <h1>{skill.title}</h1>

        <div className="flex gap-2 flex-wrap w-100 justify-center pb-6">
          {skill.items.map(([icon, name, color]) => (
            <RippleButton
              key={name}
              className="rounded-full"
              rippleColor={color}
            >
              <div className="flex gap-2 items-center">
                <Image
                  src={`/tools/${icon}`}
                  alt={name}
                  width={20}
                  height={20}
                />
                <p>{name}</p>
              </div>
            </RippleButton>
          ))}
        </div>
      </section>
    ))}
        
    </section>
  )
}


