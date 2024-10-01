import ItemDepoimento from "../ItemDepoimento/ItemDepoimento"

export default function Depoimentos(){
    return(
        <div className="flex flex-col bg-verdeClaro px-[50px] py-[100px]">
            <div className="text-verdeEscuro text-4xl lg:mt-0 uppercase flex overflow-hidden mt-12">
                Depoimentos
            </div>
            <div className="flex lg:mt-20 mt-12">
                <ItemDepoimento nome="Yusuf A." texto="Comprei meu primeiro Alcorão na Muslim e fiquei muito satisfeito com a qualidade e o cuidado com os detalhes. Os adesivos Islâmicos também foram uma ótima escolha para decorar minha casa com mensagens de fé. Recomendo a loja pela variedade e o excelente atendimento."/>

                <ItemDepoimento nome="Ahmad S." texto="Estava à procura de trajes tradicionais e encontrei exatamente o que precisava na Muslim. A qualidade do tecido é incrível e o caimento impecável. "/>
            </div>
        </div>
    )
}