import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import CartaProduto from "../CartaProduto/CartaProduto"
import trajeMas from "../../assets/images/imgTrajesMasc.jpg"
import trajeFem from "../../assets/images/imgTrajesFem.jpg"
import camisasProdutos from "../../assets/images/camisasMuslim.jpg"
import alcorao from "../../assets/images/alcorao.jpg"
import meca from "../../assets/images/Meca.jpg"
import calendario from "../../assets/images/calendario.jpg"
import pilares from "../../assets/images/5pilares.jpg"
import literatura from "../../assets/images/literatura.jpg"


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)




export default function ProdutosMobile(){


  const titulo = "Produtos"

  useGSAP(() => {
    const textAnimation1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".containerProdutos",
            start: "200px bottom",
            end: "200px bottom",
            markers: true
        }
    });
    textAnimation1.from('.text', {
     y: 0,
     stagger: { 
      each: 0.07 
     }
    });





    //ANIMAÇÕES MOBILE
    gsap.from(".cartaTotalMobile1", {
        scrollTrigger: {
            trigger: ".cartaTotalMobile1",
            start: "80px bottom",
            end: "400px bottom",
            toggleActions: "play none none reverse"
        },
        y: "150px",
        xPercent: -110,
        rotate: "-10deg"
    })

    gsap.from(".cartaTotalMobile2", {
        scrollTrigger: {
            trigger: ".cartaTotalMobile2",
            start: "80px bottom",
            end: "400px bottom",
            toggleActions: "play none none reverse"
        },
        y: "150px",
        xPercent: 110,
        rotate: "10deg"
    })

    gsap.from(".cartaTotalMobile3", {
        scrollTrigger: {
            trigger: ".cartaTotalMobile3",
            start: "80px bottom",
            end: "400px bottom",
            toggleActions: "play none none reverse"
        },
        y: "150px",
        xPercent: -110,
        rotate: "-10deg"
    })

    gsap.from(".cartaTotalMobile4", {
        scrollTrigger: {
            trigger: ".cartaTotalMobile4",
            start: "80px bottom",
            end: "400px bottom",
            toggleActions: "play none none reverse"
        },
        y: "150px",
        xPercent: 110,
        rotate: "10deg"
    })

    gsap.from(".cartaTotalMobile5", {
        scrollTrigger: {
            trigger: ".cartaTotalMobile5",
            start: "80px bottom",
            end: "400px bottom",
            toggleActions: "play none none reverse"
        },
        y: "150px",
        xPercent: -110,
        rotate: "-10deg"
    })
    
    gsap.from(".cartaTotalMobile6", {
        scrollTrigger: {
            trigger: ".cartaTotalMobile6",
            start: "80px bottom",
            end: "400px bottom",
            toggleActions: "play none none reverse"
        },
        y: "150px",
        xPercent: 110,
        rotate: "10deg"
    })

    gsap.from(".cartaTotalMobile7", {
        scrollTrigger: {
            trigger: ".cartaTotalMobile7",
            start: "80px bottom",
            end: "400px bottom",
            toggleActions: "play none none reverse"
        },
        y: "150px",
        xPercent: -110,
        rotate: "-10deg"
    })

    gsap.from(".cartaTotalMobile8", {
        scrollTrigger: {
            trigger: ".cartaTotalMobile8",
            start: "80px bottom",
            end: "400px bottom",
            toggleActions: "play none none reverse"
        },
        y: "150px",
        xPercent: 110,
        rotate: "10deg"
    })

    gsap.from(".cartaTotalMobile9", {
        scrollTrigger: {
            trigger: ".cartaTotalMobile9",
            start: "80px bottom",
            end: "400px bottom",
            toggleActions: "play none none reverse"
        },
        y: "150px",
        xPercent: -110,
        rotate: "-10deg"
    })

  })


    return (
        <div className="containerProdutos bg-verdeClaro py-[50px] lg:hidden">
            <div className="flex flex-col w-[90vw] m-[0_auto]">
                <div className="text-verdeEscuro text-4xl lg:mt-0 uppercase flex overflow-hidden">
                    {
                        titulo.split("").map(item => {
                            if(item == " "){
                                return <span className="text">&nbsp;</span>
                            }else{
                                return <span className="text">{item}</span>
                            }
                        })
                    }
                </div>
                <div  className=" flex flex-col lg:mt-20 mt-12 lg:gap-32 gap-8">
                    <div className="flex lg:flex-row flex-col lg:gap-20 gap-8">
                        <div className="cartaTotalMobile1 flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Trajes Masculinos</div>
                            <CartaProduto linha="cartaLinha1" img={trajeMas} cta="Ver mais" titulo="Trajes Masculinos"/>
                        </div>
                        <div className="cartaTotalMobile2 flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Trajes Femininos</div>
                            <CartaProduto linha="cartaLinha1" img={trajeFem} cta="Ver mais" titulo="Trajes Femininos"/>
                        </div>
                        <div className="cartaTotalMobile3 flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Camisetas Islâmicas</div>
                            <CartaProduto linha="cartaLinha1" img={camisasProdutos} cta="Ver mais" titulo="Camisas Produtos"/>
                        </div>
                    </div>

                    <div className=" flex lg:flex-row flex-col lg:gap-20 gap-8">
                        <div className="cartaTotalMobile4 flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Alcorão</div>
                            <CartaProduto linha="cartaLinha2" img={alcorao} cta="Ver mais" titulo="Alcorão"/>
                        </div>
                        <div className="cartaTotalMobile5 flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Viajem à Meca</div>
                            <CartaProduto linha="cartaLinha2" img={meca} cta="Ver mais" titulo="Viajem à Meca"/>
                        </div>
                        <div className="cartaTotalMobile6 flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Calendário Islâmico</div>
                            <CartaProduto linha="cartaLinha2" img={calendario} cta="Ver mais" titulo="Calendário Islâmico"/>
                        </div>
                    </div>

                    <div className=" flex lg:flex-row flex-col lg:gap-20 gap-8">
                        <div className="cartaTotalMobile7 flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Impressão dos 5 Pilares do Islã</div>
                            <CartaProduto linha="cartaLinha3" img={pilares} cta="Ver mais" titulo="5 pilares"/>
                        </div>
                        <div className="cartaTotalMobile8 flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Literatura "A Mulher no Islã"</div>
                            <CartaProduto linha="cartaLinha3" img={literatura} cta="Ver mais" titulo="literatura"/>
                        </div>
                        <div className="cartaTotalMobile9 flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Calendário Islâmico</div>
                            <CartaProduto linha="cartaLinha3" img={calendario} cta="Ver mais" titulo="Calendário Islâmico"/>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}