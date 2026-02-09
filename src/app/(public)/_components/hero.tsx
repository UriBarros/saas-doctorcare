import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from "../../../../public/doctor-hero.png"


export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 pb-4 sm:pb-0 sm:px-6 lg:px-8">

        <main className="flex items-center justify-center">
          <article className="`flex-[2]` max-w-3xl space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl tracking-tight">
              Encontre o profissional de saúde ideal para você!
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Conectamos você com médicos e especialistas de confiança, facilitando o agendamento de consultas e cuidados com voce e sua família.
            </p>

            <Button className="bg-emerald-500 hover:bg-emerald-400 cursor-pointer w-fit px-6 font-semibold">
              Agende sua consulta agora
            </Button>
          </article>

          <div className="hidden lg:block">
            <Image
              src={doctorImg}
              alt="foto doctorhero"
              width={340}
              height={400}
              className="object-contain"
              priority
              quality={100}
            />
          </div>

        </main>
      </div>
      
    </section>
  )
}