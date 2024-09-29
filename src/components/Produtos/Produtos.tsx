import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
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




export default function Produtos(){


    const containerProdutos = useRef(null)
    const linha1Prod = useRef(null)
    const linha2Prod = useRef(null)
    const linha3Prod = useRef(null)

  const titulo = "Produtos"

  useGSAP(() => {
    let textAnimation1 = gsap.timeline({
        scrollTrigger: {
            trigger: containerProdutos.current,
            start: "200px bottom",
            end: "200px bottom"
        }
    });
    textAnimation1.from('.text', {
     y: 100,
     stagger: { 
      each: 0.07 
     }
    });

    gsap.from(".cartaLinha1", {
        scrollTrigger: {
            trigger: linha1Prod.current,
            start: "400px bottom",
            end: "800px bottom"
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
            trigger: linha2Prod.current,
            start: "400px bottom",
            end: "800px bottom"
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
            trigger: linha3Prod.current,
            start: "400px bottom",
            end: "800px bottom"
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
        <div ref={containerProdutos} className=" bg-verdeClaro px-[50px] py-[100px]">
            <div className="flex flex-col ">
                <div className="text-verdeEscuro text-6xl uppercase">
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
                <div ref={linha1Prod} className="flex flex-col mt-20 gap-32">
                    <div className="flex gap-20">
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Trajes Masculinos</div>
                            <CartaProduto linha="cartaLinha1" img={trajeMas} cta="Ver mais" titulo="Trajes Masculinos"/>
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Trajes Femininos</div>
                            <CartaProduto linha="cartaLinha1" img={trajeFem} cta="Ver mais" titulo="Trajes Femininos"/>
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Camisetas Islâmicas</div>
                            <CartaProduto linha="cartaLinha1" img={camisasProdutos} cta="Ver mais" titulo="Camisas Produtos"/>
                        </div>
                    </div>

                    <div ref={linha2Prod} className="flex gap-20">
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Alcorão</div>
                            <CartaProduto linha="cartaLinha2" img={alcorao} cta="Ver mais" titulo="Alcorão"/>
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Viajem à Meca</div>
                            <CartaProduto linha="cartaLinha2" img={meca} cta="Ver mais" titulo="Viajem à Meca"/>
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Calendário Islâmico</div>
                            <CartaProduto linha="cartaLinha2" img={calendario} cta="Ver mais" titulo="Calendário Islâmico"/>
                        </div>
                    </div>

                    <div ref={linha3Prod} className="flex gap-20">
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Impressão dos 5 Pilares do Islã</div>
                            <CartaProduto linha="cartaLinha3" img={pilares} cta="Ver mais" titulo="5 pilares"/>
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Literatura "A Mulher no Islã"</div>
                            <CartaProduto linha="cartaLinha3" img={literatura} cta="Ver mais" titulo="literatura"/>
                        </div>
                        <div className="flex flex-col gap-2 w-1/3">
                            <div className="text-verdeEscuro text-xl font-Montserrat opacity-70">Calendário Islâmico</div>
                            <CartaProduto linha="cartaLinha3" img={calendario} cta="Ver mais" titulo="Calendário Islâmico"/>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}