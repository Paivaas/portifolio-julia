import { useTranslation } from "react-i18next";

export default function Experience1() {
  const { t } = useTranslation();

  return (
    <div className="grid gap-x-4 grid-cols-[290px_24px_290px] md:grid-cols-[290px_24px_350px] text-xs hover:scale-105">
        <div />     
        <div />
        <p>{t("line-up.2.data")}</p>

        <div />
        <p className="bg-black text-white w-6 h-6 rounded-full flex justify-center items-center"> 2</p>
        <h1 className="font-semibold text-sm"> {t("line-up.2.title")} </h1>

        <div />
        <div className="flex justify-center items-center"> <span className="w-1 h-full mt-10 bg-zinc-300 rounded-2xl"></span> </div>
        <p>{t("line-up.2.description")}</p>
        
    </div>
  );
}