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
import estrelaArabe from "../../assets/images/estrelaArrabe.png" 

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)




export default function Produtos(){


  const titulo = "Produtos"

  useGSAP(() => {
    const textAnimation1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".containerProdutos",
            start: "200px bottom",
            end: "200px bottom"
        }
    });
    textAnimation1.from('.text', {
     y: 0,
     stagger: { 
      each: 0.07 
     }
    });


    //ANIMAÇÕES DESKTOP
    gsap.from(".cartaLinha1", {
        scrollTrigger: {
            trigger: ".linha1Prod",
            start: "150px bottom",
            end: "800px bottom",
            toggleActions: "play none none reverse"
        },
        y: "600px",
        x: "200px",
        rotate: "10deg",
        
        stagger: {
            each: 0.3
        },
        duration: 0.7
    })

    gsap.from(".cartaLinha2", {
        scrollTrigger: {
            trigger: ".linha2Prod",
            start: "150px bottom",
            end: "800px bottom",
            toggleActions: "play none none reverse"
        },
        y: "600px",
        x: "200px",
        rotate: "10deg",
        stagger: {
            each: 0.3
        },
        duration: 0.7
    })

    gsap.from(".cartaLinha3", {
        scrollTrigger: {
            trigger: ".linha3Prod",
            start: "150px bottom",
            end: "800px bottom",
            toggleActions: "play none none reverse"
        },
        y: "600px",
        x: "200px",
        rotate: "10deg",
        stagger: {
            each: 0.3
        },
        duration: 0.7
    })




  })


    return (
        <div className="containerProdutos bg-verdeClaro px-[50px] py-[100px] hidden lg:block">
            <div className="flex flex-col ">
                <div className="text-verdeEscuro text-6xl lg:mt-0 mt-12 uppercase flex overflow-hidden relative z-50">
                    <div className="self-center mr-12">
                        <img className="w-12 h-auto" src={estrelaArabe} alt="" />
                    </div>
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
                <div  className="linha1Prod flex flex-col lg:mt-20 mt-12 lg:gap-32 gap-8">
                    <div className="flex lg:flex-row flex-col lg:gap-20 gap-8">
                        <div className=" flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Trajes Masculinos</div>
                            <CartaProduto linha="cartaLinha1" img={trajeMas} cta="Ver mais" titulo="Trajes Masculinos"/>
                        </div>
                        <div className=" flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Trajes Femininos</div>
                            <CartaProduto linha="cartaLinha1" img={trajeFem} cta="Ver mais" titulo="Trajes Femininos"/>
                        </div>
                        <div className=" flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Camisetas Islâmicas</div>
                            <CartaProduto linha="cartaLinha1" img={camisasProdutos} cta="Ver mais" titulo="Camisas Produtos"/>
                        </div>
                    </div>

                    <div className="linha2Prod flex lg:flex-row flex-col lg:gap-20 gap-8">
                        <div className=" flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Alcorão</div>
                            <CartaProduto linha="cartaLinha2" img={alcorao} cta="Ver mais" titulo="Alcorão"/>
                        </div>
                        <div className=" flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Viajem à Meca</div>
                            <CartaProduto linha="cartaLinha2" img={meca} cta="Ver mais" titulo="Viajem à Meca"/>
                        </div>
                        <div className=" flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Calendário Islâmico</div>
                            <CartaProduto linha="cartaLinha2" img={calendario} cta="Ver mais" titulo="Calendário Islâmico"/>
                        </div>
                    </div>

                    <div className="linha3Prod flex lg:flex-row flex-col lg:gap-20 gap-8">
                        <div className=" flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Impressão dos 5 Pilares do Islã</div>
                            <CartaProduto linha="cartaLinha3" img={pilares} cta="Ver mais" titulo="5 pilares"/>
                        </div>
                        <div className=" flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Literatura "A Mulher no Islã"</div>
                            <CartaProduto linha="cartaLinha3" img={literatura} cta="Ver mais" titulo="literatura"/>
                        </div>
                        <div className=" flex flex-col gap-2 lg:w-1/3 w-full">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Calendário Islâmico</div>
                            <CartaProduto linha="cartaLinha3" img={calendario} cta="Ver mais" titulo="Calendário Islâmico"/>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}