import seta from "../../assets/images/seta (4).svg"

type Props = {
    img: string, 
    titulo: string,
    cta: string,
    linha: string
}

export default function CartaProduto({img, titulo, cta, linha}: Props){
    return(
        <div  className={`${linha} h-[60vh] w-full relative group cursor-pointer overflow-hidden`}>

            <img className="imgProd w-full h-full object-cover group-hover:scale-125 transition-all duration-300 ease-in-out object-left-top" src={img} alt={titulo} />
            <div className="group-hover:w-[300px] w-[200px] transition-all duration-300 ease-in-out absolute bottom-0 right-0 bg-white text-xl text-verdeEscuro flex items-center gap-2 p-4 text-center border-l-8 border-t-8 border-l-verdeClaro border-t-verdeClaro border-solid">
                <div className="italic">
                    {cta} 
                </div>
                <div className="">
                    <img className="h-[15px] w-auto" src={seta} alt="" />
                </div>
            </div>
        </div>
    )
}