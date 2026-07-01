import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronsUpDown, ChevronsDownUp } from "lucide-react";
import Image from "next/image";

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ExperienceTimeline() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  
   function soundOpenCollapsible() {
    const audio = new Audio('/sounds/sound-bubble.mp3');
    audio.play();
  } 



  return (
    <div className="grid gap-x-4 grid-cols-[290px_24px_290px] md:grid-cols-[290px_24px_350px] text-xs transition-transform duration-300 ease-in-out hover:scale-105">
      
      <div />     
        <div />
        <p>{t("line-up.4.data")}</p>

        <div />
        <p className="bg-[#DE5CA2] text-white w-6 h-6 rounded-full flex justify-center items-center"> 4</p>
        <h1 className="font-semibold text-sm"> {t("line-up.4.title")} </h1>


        <Collapsible open={isOpen}  onOpenChange={setIsOpen}  className="flex flex-col justify-end items-end mt-4 relative bottom-9 ">
          <CollapsibleTrigger onClick={soundOpenCollapsible}  className="flex items-center gap-2  font-medium text-end cursor-pointer">
              {isOpen ? ( <p className="text-[#a19c9e]">{t("line-up.commun.assignments")} </p> ) : ( <p className="text-[#DE5CA2]">{t("line-up.commun.assignments")} </p> )}
              {isOpen ? ( <ChevronsDownUp className="text-[#a19c9e]" size={16} /> ) : ( <ChevronsUpDown className="text-[#DE5CA2]" size={16} /> )}
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-4 flex flex-col gap-6 relative top-10 left-70">
              <div >

                <Card className="w-72 md:w-112.5 text-justify">
                  <CardContent>
                    <p> {t("line-up.4.more.1.title")}</p>
                    <p className="text-xs"> {t("line-up.4.more.1.description")}</p>
                    
                    <p className="mt-4"> {t("line-up.4.more.2.title")}</p>
                    <p className="text-xs"> {t("line-up.4.more.2.description")}</p>
                  </CardContent>
                  
                </Card>

               </div>
            </CollapsibleContent>
          </Collapsible>
        <div className="flex justify-center items-center"> </div>
            <div>
          <span className="text-zinc-500"> {t("line-up.4.location")}  </span>
          <p></p>
        </div>

      </div>
  );
}