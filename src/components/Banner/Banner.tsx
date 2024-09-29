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
    const text1 = useRef(null)

    const tituloL1 = "Celebre sua Fé com"
    const tituloL2 = "Produtos Islâmicos"
    const tituloL3 = "de Qualidade"

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



        let textAnimation1 = gsap.timeline();
        textAnimation1.from(".texto1", {
                y: 100,
            stagger: { 
             each: 0.07 
            }
        });

        let textAnimation2 = gsap.timeline();
        textAnimation2.from(".texto2", {
            y: 100,
            delay: 0.3,
            stagger: { 
            each: 0.07 
            }
            });

        let textAnimation3 = gsap.timeline();
        textAnimation3.from(".texto3", {
            y: 100,
            delay: 0.6,
            stagger: { 
            each: 0.07 
            }
        });

    })


    


    return (
        <div ref={containerBanner} className="bg-verdeClaro lg:h-[120vh] h-screen relative flex flex-col">
            <div className="lg:hidden absolute bottom-0 left-0 right-0 h-[55vh] [background:linear-gradient(to_top,#d0ffe2_85%,transparent)] z-20"></div>
            <div className="h-[20vh] relative lg:block hidden">
                <img className="ml-[10%] h-full w-auto object-cover" src={AlcoraoBanner} alt="imagem alcorão" />
            </div>
            <div className="absolute h-[20vh] bottom-0 right-0 z-30 translate-y-1/4 translate-x-1/2">
                <img className="h-full w-auto " src={AlcoraoBanner} alt="" />
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
            <div className="lg:w-[60vw] lg:h-[85%] lg:ml-10 lg:static absolute lg:top-auto lg:left-auto lg:right-auto top-[50%] left-0 right-0  z-30">
                <div className="text-verdeEscuro flex flex-col lg:text-8xl text-5xl font-Questrial lg:pr-12 lg:pt-[150px] text-center lg:text-start">
                    <div className="flex overflow-hidden lg:justify-start justify-center text-center">
                        {
                            tituloL1.split("").map(item => {
                                if(item == " "){
                                    return <span className="texto1">&nbsp;</span>
                                }else{
                                    return <span className="texto1">{item}</span>
                                }
                            })
                        }
                    </div>
                    <div className="flex overflow-hidden lg:justify-start justify-center text-center">
                        {
                            tituloL2.split("").map(item => {
                                if(item == " "){
                                    return <span className="texto2">&nbsp;</span>
                                }else{
                                    return <span className="texto2">{item}</span>
                                }
                            })
                        }
                    </div>
                    <div className="flex overflow-hidden lg:justify-start justify-center text-center">
                        {
                            tituloL3.split("").map(item => {
                                if(item == " "){
                                    return <span className="texto3">&nbsp;</span>
                                }else{
                                    return <span className="texto3">{item}</span>
                                }
                            })
                        }
                    </div>
                </div>
                <div className="text-verdeEscuro text-xl font-Montserrat opacity-70 lg:pt-[150px] pt-12 lg:w-[50%] w-[90%] lg:m-auto m-[0_auto]  lg:text-start text-center relative">
                    Alcorão, Trajes tradicionais, literatura e muito mais para sua jornada espiritual
                    <div className="absolute lg:block hidden w-[2px] bg-verdeEscuro h-40 -left-3 -bottom-8 translate-y-10 -translate-x-2 opacity-20"></div>
                    <div className="absolute lg:block hidden w-80 bg-verdeEscuro h-[2px] -left-6 -bottom-5 translate-y-10 -translate-x-2 opacity-20"></div>
                </div>
            </div>
        </div>
    )

}