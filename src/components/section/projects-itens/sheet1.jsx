import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Info,
  CalendarDays,
  Apple,
  Utensils,
  Eye,
  Trash2,
  CheckCircle2,
} from "lucide-react"

import { useTranslation } from "react-i18next"

export function Sheet1() {
  const { t } = useTranslation()

  const features = [
    {
      icon: CalendarDays,
      title: "Seleção por dia da semana",
      description:
        "Monte sua refeição individualmente para Segunda, Terça, Quarta, Quinta e Sexta.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Apple,
      title: "Categorias de alimentos",
      description:
        "Organize os alimentos em Proteínas, Carboidratos e Acompanhamentos.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Utensils,
      title: "Montar marmita",
      description:
        "Escolha os alimentos desejados e crie sua refeição diária.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Eye,
      title: "Visualizar dieta",
      description:
        "Confira todas as marmitas planejadas em uma visão semanal.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Trash2,
      title: "Remover tudo",
      description:
        "Limpe suas escolhas e reinicie seu planejamento alimentar.",
      color: "bg-red-100 text-red-600",
    },
  ]

  return (
    <Sheet className="no-scrollbar">
      <SheetTrigger className="flex items-center gap-1 cursor-pointer text-sm hover:text-primary transition">
        {t("projects.about")}
        <Info size={14} />
      </SheetTrigger>

      <SheetContent 
        showCloseButton={false}
        className="w-full sm:max-w-md overflow-y-auto"
      >
        <SheetHeader className="space-y-6">

          <div className="rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white shadow-lg">
            <SheetTitle className="text-2xl font-bold text-white">
              Gerenciador de Marmitas 
            </SheetTitle>

            <p className="mt-3 text-sm leading-relaxed text-green-50">
              Aplicação web desenvolvida para organizar o planejamento de
              refeições semanais, permitindo montar marmitas de forma simples,
              visual e personalizada.
            </p>
          </div>


          <div className="space-y-4">

            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <CheckCircle2 className="text-green-500" size={20}/>
              Requisitos
            </h2>


            <div className="space-y-3">
              {features.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-xl border bg-card p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                    >
                      <Icon size={20}/>
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>

        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}