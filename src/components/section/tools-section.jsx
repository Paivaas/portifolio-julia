import Image from "next/image";
import { RippleButton } from "@/components/ui/ripple-button"

const skills = [
  {
    title: "Desenvolvimento de Sistemas",
    items: [
      ["react.svg", "React", "#ADD8E6"],
      ["node.svg", "Node", "#D1F6CA"],
      ["typescript.svg", "Typescript", "#ADD8E6"],
      ["tailwind.svg", "Tailwind", "#ADD8E6"],
      ["figma.svg", "Figma", "#FFE7F4"],
      ["git.svg", "Git", "#FFE7F4"],
      ["vscode.svg", "VS code", "#D1F6CA"],

      ["androidstudio.svg", "Andoid studio", "#ADD8E6"],
      ["js.svg", "JavaScript", "#FFE7F4"],
      ["html.svg", "HTML", "#FFE7F4"],
      ["css.svg", "CSS", "#D1F6CA"],
      ["mysql.svg", "MySql", "#D1F6CA"],
      ["postman.svg", "Postman", "#D1F6CA"],

    ],
  },
  {
  title: "Segurança e Privacidade",
  items: [
    ["darktrace.svg", "Darktrace", "#D1F6CA"],
    ["ivanti.svg", "Ivanti", "#ADD8E6"],
    ["privacytools.svg", "Privacy Tools", "#FFE7F4"],
    ["kalilinux.svg", "Kali Linux", "#D1F6CA"],
    ["LGPD.svg", "LGPD", "#ADD8E6"],
    ["pentest.svg", "Pentest", "#D1F6CA"],
    ["phising.svg", "Phishing", "#FFE7F4"],

    ["redes.svg", "Redes", "#ADD8E6"],
    ["firewall.svg", "Firewall", "#D1F6CA"],
     ["cisco.svg", "Cisco", "#D1F6CA"],

    ["gestaoI.svg", "Gestão de Incidentes", "#D1F6CA"],   
     ["rta.svg", "RTA", "#FFE7F4"],      


  ],
},
];

export default function Tools() {
  return (
    <section className="w-full flex  gap-2 py-12 justify-center  items-start">

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


