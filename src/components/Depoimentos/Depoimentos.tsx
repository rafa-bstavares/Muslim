import ItemDepoimento from "../ItemDepoimento/ItemDepoimento"
import seta from "../../assets/images/seta (4).svg"
import { useState } from "react"
import estrelaArabe from "../../assets/images/estrelaArrabe.png" 

export default function Depoimentos(){

    const [idxAtual, setIdxAtual] = useState<number>(0)

    const depoimentos = [
        {nome:"Yusuf A." , texto:"Comprei meu primeiro Alcorão na Muslim e fiquei muito satisfeito com a qualidade e o cuidado com os detalhes. Os adesivos Islâmicos também foram uma ótima escolha para decorar minha casa com mensagens de fé. Recomendo a loja pela variedade e o excelente atendimento." },
        {nome: "Ahmad S.", texto: "Estava à procura de trajes tradicionais e encontrei exatamente o que precisava na Muslim. A qualidade do tecido é incrível e o caimento impecável. O atendimento foi excelente e o produto chegou rapidamente. Voltarei para futuras compras, com certeza!"},
        {nome: "Amina K.", texto: "Encontrei uma variedade linda de hijabs na Muslim, e a qualidade das coberturas femininas me surpreendeu. O tecido é leve e confortável, perfeito para o uso diário. Além disso, a loja oferece várias opções de cores e estilos. Amei minha compra!"},
        {nome: "Fatimah R.", texto: "Eu estava buscando um calendário islâmico especial e o modelo de luxo que comprei na Muslim superou minhas expectativas. Ele é belíssimo, muito bem detalhado e ótimo para me guiar nas datas importantes. Excelente opção para presentear também!"}
    ]

    function setaEsqFn(){
        if(idxAtual > 0){
            setIdxAtual(idxAtual - 1)
        }
    }

    function setaDirFn(){
        if(idxAtual < depoimentos.length - 3){
            setIdxAtual(idxAtual + 1)
        }
    }

    function setaDirFnMobile(){
        if(idxAtual < depoimentos.length - 1){
            setIdxAtual(idxAtual + 1)
        }
    }


    return(
        <div className="flex flex-col bg-verdeClaro lg:px-[50px] px-[20px] py-[100px]">
            <div className="text-verdeEscuro lg:text-6xl text-4xl lg:mt-0 uppercase overflow-hidden mt-12 flex  lg:items-stretch items-center">
                <div className="self-center lg:mr-12 mr-4">
                    <img className="w-12 h-auto" src={estrelaArabe} alt="" />
                </div>
                Depoimentos
            </div>
            <div className="lg:flex hidden gap-4 justify-end mt-8">
                <div className="p-4 bg-white  cursor-pointer" onClick={setaEsqFn}>
                    <img className="w-4 h-4 object-cover -rotate-[135deg]" src={seta} alt="seta esquerda" />
                </div>
                <div className="p-4 bg-white cursor-pointer" onClick={setaDirFn}>
                    <img className="w-4 h-4 object-cover rotate-45" src={seta} alt="seta direita" />
                </div>
            </div>
            <div className="lg:hidden flex gap-4 justify-end mt-8">
                <div className="p-4 bg-white  cursor-pointer" onClick={setaEsqFn}>
                    <img className="w-4 h-4 object-cover -rotate-[135deg]" src={seta} alt="seta esquerda" />
                </div>
                <div className="p-4 bg-white cursor-pointer" onClick={setaDirFnMobile}>
                    <img className="w-4 h-4 object-cover rotate-45" src={seta} alt="seta direita" />
                </div>
            </div>
            <div className="flex lg:mt-20 mt-4">
                <div className="lg:flex hidden gap-6 transition-all duration-300 ease-linear" style={{marginLeft: `calc((29vw + 24px) * ${idxAtual} * -1)`}}>
                    {
                        depoimentos.map(item => <ItemDepoimento nome={item.nome} texto={item.texto} key={item.nome}/>)
                    }
                </div>
                <div className="lg:hidden flex gap-2 transition-all duration-300 ease-linear" style={{marginLeft: `calc((90vw + 8px) * ${idxAtual} * -1)`}}>
                    {
                        depoimentos.map(item => <ItemDepoimento nome={item.nome} texto={item.texto} key={item.nome}/>)
                    }
                </div>
            </div>
        </div>
    )
}