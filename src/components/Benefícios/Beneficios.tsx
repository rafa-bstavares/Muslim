import imgFundoBeneficios from "../../assets/images/imgFundoBeneficios.png"
import qualidade from "../../assets/images/qualidade.svg"
import conexao from "../../assets/images/conexao.svg"
import variedade from "../../assets/images/variedade.svg"

export default function Beneficios(){
    return(
        <div className="bg-verdeEscuro min-h-[80vh] relative flex flex-col px-[50px] py-[100px]">
            <div className="absolute top-0 bottom-0 right-0">
                <img className="h-full w-auto object-cover" src={imgFundoBeneficios} alt="" />
            </div>
            <div className="text-verdeClaro mb-32 text-6xl uppercase">
                Benefícios
            </div>
            <div className="flex justify-between items-center mb-16">
                <div className="w-[28vw] min-h-[40vh] bg-verdeClaro relative 2-30 flex flex-col items-center justify-center p-4">
                    <img className="w-1/3 h-auto object-cover mb-8" src={qualidade} alt="qualidade" />
                    <div className="mb-2 text-xl text-verdeEscuro text-center">
                        Qualidade e Autenticidade
                    </div>
                    <div className="text-[16px] lg: w-[80%] text-verdeEscuro text-center opacity-70">
                        Todos os nossos produtos são escolhidos com cuidado para garantir a melhor qualidade e autenticidade.
                    </div>
                </div>
                <div className="w-[28vw] min-h-[40vh] bg-verdeClaro relative 2-30 flex flex-col items-center justify-center p-4">
                    <img className="w-1/3 h-auto object-cover mb-8" src={conexao} alt="conexao" />
                    <div className="mb-2 text-xl text-verdeEscuro text-center">
                        Conexao Espiritual
                    </div>
                    <div className="text-[16px] lg: w-[80%] text-verdeEscuro text-center opacity-70">
                        Nossos itens ajudam a reforçar sua fé e conexão com a cultura islâmica.
                    </div>
                </div>
                <div className="w-[28vw] min-h-[40vh] bg-verdeClaro relative 2-30 flex flex-col items-center justify-center p-4">
                    <img className="w-1/3 h-auto object-cover mb-8" src={variedade} alt="variedade" />
                    <div className="mb-2 text-xl text-verdeEscuro text-center">
                        Variedade
                    </div>
                    <div className="text-[16px] lg: w-[80%] text-verdeEscuro text-center opacity-70">
                        Oferecemos uma ampla gama de produtos para atender às suas necessidades e interesses.
                    </div>
                </div>
            </div>
            <div className="bg-white border-2 border-solid border-white px-12 py-4 self-center text-verdeEscuro text-xl font-bold relative group cursor-pointer">
                Explore Nossos Benefícios
                <div className="absolute inset-0 border-2 border-solid border-verdeClaro bg-verdeEscuro text-verdeClaro flex justify-center items-center text-xl font-bold [clip-path:polygon(0%_0%,0%_0%,0%_100%,0%_100%)] group-hover:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] transition-all duration-700 ease-in-out ">
                    Explore Nossos Benefícios
                </div>
            </div>
        </div>
    )
}