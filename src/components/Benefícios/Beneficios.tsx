import imgFundoBeneficios from "../../assets/images/imgFundoBeneficios.png"
import qualidade from "../../assets/images/qualidade.svg"
import conexao from "../../assets/images/conexao.svg"
import variedade from "../../assets/images/variedade.svg"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

export default function Beneficios(){

    useGSAP(() => {
        gsap.to(".btBeneficiosCima", {
            scrollTrigger: {
                trigger: ".containerBtBeneficios",
                start: "80px bottom",
                end: "400px bottom"
            },
            clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)"
        })
    })


    return(
        <div className="bg-verdeEscuro min-h-[80vh] relative flex flex-col px-[50px] py-[100px] mb-[400px]">
            <div className="absolute top-0 bottom-0 right-0">
                <img className="h-full w-auto object-cover" src={imgFundoBeneficios} alt="" />
            </div>
            <div className="text-verdeClaro mb-32 lg:text-6xl text-4xl uppercase">
                Benefícios
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center mb-16 lg:gap-0 gap-8">
                <div className="lg:w-[28vw] w-[85vw] min-h-[40vh] bg-verdeClaro relative 2-30 flex flex-col items-center justify-center p-4">
                    <img className="w-1/3 h-auto object-cover mb-8" src={qualidade} alt="qualidade" />
                    <div className="mb-2 text-xl text-verdeEscuro text-center">
                        Qualidade e Autenticidade
                    </div>
                    <div className="lg:text-[16px] text-sm lg:w-[80%] w-[90%] text-verdeEscuro text-center opacity-70">
                        Todos os nossos produtos são escolhidos com cuidado para garantir a melhor qualidade e autenticidade.
                    </div>
                </div>
                <div className="lg:w-[28vw] w-[85vw] min-h-[40vh] bg-verdeClaro relative 2-30 flex flex-col items-center justify-center p-4">
                    <img className="w-1/3 h-auto object-cover mb-8" src={conexao} alt="conexao" />
                    <div className="mb-2 text-xl text-verdeEscuro text-center">
                        Conexao Espiritual
                    </div>
                    <div className="text-[16px] lg: lg:w-[80%] w-[90%] text-verdeEscuro text-center opacity-70">
                        Nossos itens ajudam a reforçar sua fé e conexão com a cultura islâmica.
                    </div>
                </div>
                <div className="lg:w-[28vw] w-[85vw] min-h-[40vh] bg-verdeClaro relative 2-30 flex flex-col items-center justify-center p-4">
                    <img className="w-1/3 h-auto object-cover mb-8" src={variedade} alt="variedade" />
                    <div className="mb-2 text-xl text-verdeEscuro text-center">
                        Variedade
                    </div>
                    <div className="text-[16px] lg: lg:w-[80%] w-[90%] text-verdeEscuro text-center opacity-70">
                        Oferecemos uma ampla gama de produtos para atender às suas necessidades e interesses.
                    </div>
                </div>
            </div>
            <div className="containerBtBeneficios text-center bg-white border-2 border-solid border-white lg:px-12 lg:py-4 px-8 py-4 self-center text-verdeEscuro sm:text-xl text-lg font-bold relative group cursor-pointer">
                Explore Nossos Benefícios
                <div className=" btBeneficiosCima absolute inset-0 lg:px-12 lg:py-4 px-8 py-4 border-2 border-solid border-verdeClaro bg-verdeEscuro text-verdeClaro flex justify-center text-center items-center sm:text-xl text-lg font-bold [clip-path:polygon(0%_0%,0%_0%,0%_100%,0%_100%)] group-hover:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] transition-all duration-700 ease-in-out ">
                    Explore Nossos Benefícios
                </div>
            </div>
        </div>
    )
}