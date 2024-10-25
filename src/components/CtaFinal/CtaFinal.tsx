import imgFundo from "../../assets/images/textoFundoBanner.png"

export default function CtaFinal(){
    return(
        <div className="bg-verdeEscuro lg:px-[50px] px-[20px] py-[100px] flex flex-col gap-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 -translate-y-1/3 -translate-x-1/3">
                <img src={imgFundo} alt="texto fundo em árabe" />
            </div>
            <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3">
                <img src={imgFundo} alt="texto fundo em árabe" />
            </div>
            <div className="text-center lg:w-auto w-[90vw] text-verdeClaro lg:text-xl text-lg">
                Junte-se à comunidade Muslim! Explore nossos produtos e faça sua compra hoje mesmo.
            </div>
            <div className="lg:w-[50vw] w-[90vw] text-center bg-verdeEscuro border-2 border-solid border-verdeClaro lg:px-12 lg:py-4 px-8 py-4 self-center text-verdeClaro items-center sm:text-xl text-sm font-bold relative group cursor-pointer">
                Quero fazer parte da Comunidade Muslim
            </div>  
        </div>
    )
}