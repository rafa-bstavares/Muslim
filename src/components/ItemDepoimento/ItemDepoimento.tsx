
type Props = {
    texto: string,
    nome: string
}

export default function ItemDepoimento({texto, nome}: Props){
    return(
        <div className="lg:w-[29vw] w-[90vw] flex flex-col border-solid border-4 p-8 border-verdeEscuro">
            <div className="flex gap-2 mb-12">
                <div className="w-5 h-7 [clip-path:polygon(0%_0%,100%_0%,0%_100%)] bg-verdeEscuro"></div>
                <div className="w-5 h-7 [clip-path:polygon(0%_0%,100%_0%,0%_100%)] bg-verdeEscuro"></div>
            </div>
            <div className="text-[16px] mb-6 text-verdeEscuro">
                {texto}
            </div>
            <div className="text-[16px] text-verdeEscuro opacity-70">
                {nome}
            </div>
        </div>
    )
}