import AlcoraoBanner from "../../assets/images/imgAlcorao2.jpg"
import imgBannerFundo from "../../assets/images/ImagemFundoBanner.jpg"
import bannerHomem from "../../assets/images/BannerHomem.jpg"
import textoFundoBanner from "../../assets/images/textoFundoBanner.jpg"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


export default function Banner(){

    const containerBanner = useRef(null)
    const imgHomem = useRef(null)
    const imgTexto1 = useRef(null)
    const imgTexto2 = useRef(null)
    const imgTexto3 = useRef(null)
    const imgTexto4 = useRef(null)

    useGSAP(() => {


        
        gsap.to(imgHomem.current, {
            scrollTrigger: {
                trigger: containerBanner.current,
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            y: "-300px"
        })

        gsap.to(imgTexto1.current, {
            scrollTrigger: {
                trigger: containerBanner.current,
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            x: "-200px"
        })
        
        gsap.to(imgTexto3.current, {
            scrollTrigger: {
                trigger: containerBanner.current,
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            x: "-200px"
        })

        
        gsap.to(imgTexto2.current, {
            scrollTrigger: {
                trigger: containerBanner.current,
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            x: "200px"
        })
        
        gsap.to(imgTexto4.current, {
            scrollTrigger: {
                trigger: containerBanner.current,
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            x: "200px"
        })

    })


    


    return (
        <div ref={containerBanner} className="bg-verdeClaro lg:h-[120vh] h-screen relative flex flex-col">
            <div className="h-[20vh] relative">
                <img className="ml-[10%] h-full w-auto object-cover" src={AlcoraoBanner} alt="imagem alcorão" />
            </div>
            <div className="absolute top-0 bottom-0 lg:left-[60vw] left-0 flex flex-col">
                <img ref={imgTexto1} className="h-1/4 w-auto object-cover " src={textoFundoBanner} alt="imagem" />
                <img ref={imgTexto2} className="h-1/4 w-auto object-cover " src={textoFundoBanner} alt="imagem" />
                <img ref={imgTexto3} className="h-1/4 w-auto object-cover " src={textoFundoBanner} alt="imagem" />
                <img ref={imgTexto4} className="h-1/4 w-auto object-cover " src={textoFundoBanner} alt="imagem" />
            </div>
            <div className="absolute lg:right-0 lg:bottom-[70px] lg:translate-x-[10%] left-1/2 lg:left-auto lg:top-auto -translate-x-1/2 top-0 lg:w-auto w-[65vw] h-[60vh] lg:h-auto">
                <img ref={imgHomem} className="lg:w-[25vw] w-full lg:h-auto h-full object-cover" src={bannerHomem} alt="imagem banner" />
            </div>
            <div className="lg:w-[60vw] lg:h-[85%] lg:ml-10 lg:static 
            absolute lg:top-auto lg:left-auto lg:right-auto top-[45%] left-0 right-0  z-20">
                <div className="text-verdeEscuro lg:text-8xl text-6xl font-Questrial lg:pr-12 lg:pt-[150px] text-center lg:text-start">
                    Celebre sua Fé com Produtos Islâmicos de Qualidade
                </div>
                <div className="text-verdeEscuro text-xl font-Montserrat opacity-70 pt-[150px] w-[50%] relative">
                    Alcorão, Trajes tradicionais, literatura e muito mais para sua jornada espiritual
                    <div className="absolute w-[2px] bg-verdeEscuro h-40 -left-3 -bottom-8 translate-y-10 -translate-x-2 opacity-20"></div>
                    <div className="absolute w-80 bg-verdeEscuro h-[2px] -left-6 -bottom-5 translate-y-10 -translate-x-2 opacity-20"></div>
                </div>
            </div>
        </div>
    )

}