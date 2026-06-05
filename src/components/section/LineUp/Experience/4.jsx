import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronsUpDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ExperienceTimeline() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-6 w-full justify-center items-center">

      <div className="grid gap-x-4 grid-cols-[24px_350px] text-xs">
        <div></div>
        <p>{t("line-up.3.data")}</p>
        <p className="bg-[#1976D2] text-white w-6 h-6 rounded-full flex justify-center items-center"> 3</p>
        <h1 className="font-semibold"> {t("line-up.3.title")} </h1>
        <div className="flex justify-center items-center"> <span ></span> </div>
        <div>
          <span className="text-zinc-500"> {t("line-up.3.location")}  </span>
          <p>{t("line-up.3.description")}</p>

          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="mt-4"
          >
            <CollapsibleTrigger className="flex items-center gap-2 text-[#1976D2] font-medium">
              Principais atribuições
              <ChevronsUpDown size={16} />
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-4 flex flex-col gap-6">
              <div className=" pl-4">
               <p>Conteudo</p>
               </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

    </section>
  );
}