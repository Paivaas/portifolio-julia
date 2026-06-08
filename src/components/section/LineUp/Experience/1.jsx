import { useTranslation } from "react-i18next";

export default function Experience1() {
  const { t } = useTranslation();

  return (
    <div className="grid gap-x-4 text-xs grid-cols-[24px_290px] md:grid-cols-[24px_350px]">
        <div></div>
        <p>{t("line-up.1.data")}</p>

        <p className="bg-black text-white w-6 h-6 rounded-full flex justify-center items-center">
          1
        </p>

        <h1 className="font-semibold text-sm">
          {t("line-up.1.title")}
        </h1>

        <div className="flex justify-center items-center">
          <span className="w-1 h-full mt-10 bg-zinc-300 rounded-2xl"></span>
        </div>

        <div>
          <span className="text-zinc-500">
            {t("line-up.1.location")}
          </span>
          <p>{t("line-up.1.description")}</p>
        </div>
      </div>
  );
}