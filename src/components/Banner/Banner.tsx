import imgBannerSecundaria from "../../assets/images/imgBannerSecundaria (6).png"
import bannerHomem from "../../assets/images/BannerHomem.jpg"
import textoFundoBanner from "../../assets/images/textoFundoBanner.png"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"
import logo from "../../assets/images/logoMuslim.png"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


export default function Banner(){

    const containerBanner = useRef(null)
    const imgHomem = useRef(null)
    const imgTexto1 = useRef(null)
    const imgTexto2 = useRef(null)
    const imgTexto3 = useRef(null)
    const imgTexto4 = useRef(null)
    const imgPalavra = useRef(null)

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



        const textAnimation1 = gsap.timeline();
        textAnimation1.from(".texto1", {
                y: 100,
            stagger: { 
             each: 0.07 
            }
        });

        const textAnimation2 = gsap.timeline();
        textAnimation2.from(".texto2", {
            y: 100,
            delay: 0.3,
            stagger: { 
            each: 0.07 
            }
            });

        const textAnimation3 = gsap.timeline();
        textAnimation3.from(".texto3", {
            y: 100,
            delay: 0.6,
            stagger: { 
            each: 0.07 
            }
        });


        gsap.to(imgPalavra.current, {
            scrollTrigger: {
                trigger: containerBanner.current,
                start: "top top",
                end: "top bottom",
                scrub: true
            },
            x: 0
        })


    })


    


    return (
        <div ref={containerBanner} className="bg-verdeClaro lg:h-[120vh] h-screen relative flex flex-col">
            <div className="lg:hidden absolute bottom-0 left-0 right-0 h-[55vh] [background:linear-gradient(to_top,#d0ffe2_85%,transparent)] z-20"></div>

            <div  className=" absolute bottom-0 right-0 left-0 h-[10vh]  z-50 -translate-y-1/2  opacity-70 lg:hidden">
                <img ref={imgPalavra} className="w-full h-auto " src={imgBannerSecundaria} alt="" />
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
            <div className="lg:w-[60vw] lg:h-[100vh] lg:ml-10 lg:flex lg:flex-col justify-between lg:relative absolute lg:top-auto lg:left-auto lg:right-auto top-[50%] left-0 right-0  z-30">
                <div className="h-[20vh] relative lg:block hidden opacity-30 p-4">
                    {/*<img className="ml-[10%] h-auto w-[40vw] object-cover" src={imgBannerSecundaria} alt="imagem alcorão" />*/}

                    <img className="h-full w-auto" src={logo} alt="logo" />
                </div>
                <div className="text-verdeEscuro flex flex-col lg:text-8xl text-4xl max-[330px]:text-3xl max-[280px]:text-2xl font-Questrial lg:pr-12  text-center lg:text-start">
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
                <div className="text-verdeEscuro text-xl max-[390px]:text-lg font-Montserrat opacity-70 lg:pt-[50px] pt-10 lg:w-[50%] w-[90%] lg:m-0 m-[0_auto]  lg:text-start text-center relative p-2">
                    Alcorão, Trajes tradicionais, literatura e muito mais para sua jornada espiritual
                    <div className="absolute lg:block hidden w-[2px] bg-verdeEscuro h-40 -left-3 bottom-0 translate-y-10 -translate-x-2 opacity-20"></div>
                    <div className="absolute lg:hidden hidden w-80 bg-verdeEscuro h-[2px] -left-6 bottom-0 translate-y-10 -translate-x-2 opacity-20"></div>
                </div>
            </div>
        </div>
    )

}