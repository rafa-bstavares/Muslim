


export default function Footer(){
    return(
        <div className="bg-[#04160b] flex flex-col gap-6 lg:px-[50px] px-[20px] py-[70px] ">
            <div className="flex lg:flex-row flex-col text-verdeClaro gap-4">
                <div className="lg:w-1/2 flex flex-col w-[90vw] ">
                    <div>
                        <span className="font-bold">Telefone: (11) 96779-1532</span>
                    </div>
                    <div className="font-bold">Entre em contato conosco!</div>
                </div>
                <div className="lg:w-1/2 lg:text-start  w-[90vw]">
                    Conheça a Muslim: sua loja de produtos islâmicos de qualidade, incluindo trajes tradicionais, literatura, Alcorão e muito mais. Compre agora!
                </div>
            </div>
            <div className="flex flex-col italic text-verdeClaro">
                <div>Desenvolvimento do site: Rafael Tavares (@rafas.t)</div>
                <div>Gestão de Mídias Sociais: Turbine sua Mídia (@turbinesuamidia)</div>
            </div>
        </div>
    )
}