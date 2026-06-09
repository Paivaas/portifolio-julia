import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronsUpDown } from "lucide-react";


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

  return (
    <section className="flex flex-col gap-6 w-full justify-center items-center">

      <div className="grid gap-x-4 grid-cols-[24px_290px] md:grid-cols-[24px_350px] text-xs">
        <div></div>
        <p>{t("line-up.3.data")}</p>
        <p className="bg-[#DE5CA2] text-white w-6 h-6 rounded-full flex justify-center items-center"> 3</p>
        <h1 className="font-semibold text-sm"> {t("line-up.3.title")} </h1>
        <div className="flex justify-center items-center"> <span className="w-1 h-full mt-10 bg-zinc-300 rounded-2xl"></span> </div>
        <div>
          <span className="text-zinc-500"> {t("line-up.3.location")}  </span>
          <p>{t("line-up.3.description")}</p>

          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="mt-4"
          >
            <CollapsibleTrigger className="flex items-center gap-2 text-[#DE5CA2] font-medium">
               {t("line-up.commun.assignments")}
              <ChevronsUpDown size={16} />
            </CollapsibleTrigger>

            <CollapsibleContent className="mt-4 flex flex-col gap-6">
              <div >

                <Card className="w-72 md:w-112.5 text-justify">
                  <CardContent>
                    <p> {t("line-up.3.more.1.title")}</p>
                    <p className="text-xs"> {t("line-up.3.more.1.description")}</p>
                    
                    <p className="mt-4"> {t("line-up.3.more.2.title")}</p>
                    <p className="text-xs"> {t("line-up.3.more.2.description")}</p>
                  </CardContent>
                  
                </Card>

               </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

    </section>
  );
}