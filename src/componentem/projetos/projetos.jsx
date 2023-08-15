import './projetos.css'
export default function Projetos(){
    return(
        <div className='projetos'>
            <h4 className="projeos__h1">Nossos Projetos</h4>
            <div className="projetos__cards">
                <div className="projeto__card">
                    <h2 className='card__h2'>Programa de Troca de Lixo por Dinheiro</h2>
                    <p className='card__p'>O projeto principal da TrocaVerde, onde estabeleceram postos de coleta em diferentes áreas para permitir que as pessoas troquem resíduos recicláveis por uma quantia em dinheiro, incentivando a reciclagem e a redução do lixo.</p>
                </div>
                <div className="projeto__card">
                    <h2 className='card__h2'>Workshops em Escolas</h2>
                    <p className='card__p'>A ONG realiza workshops educativos em escolas locais para ensinar aos alunos sobre a importância da reciclagem, como separar corretamente os resíduos e como reduzir o consumo de produtos descartáveis.</p>
                </div>
                <div className="projeto__card">
                    <h2 className='card__h2'>Palestras em Comunidades</h2>
                    <p className='card__p'>Além das escolas, a TrocaVerde também promove palestras em comunidades locais, centros comunitários e eventos públicos para disseminar informações sobre a reciclagem, os problemas do lixo e a sustentabilidade.</p>
                </div>
                
            </div>

            <div className="projetos__cards">
                <div className="projeto__card">
                    <h2 className='card__h2'>Campanhas de Conscientização Online</h2>
                    <p className='card__p'>Utilizando as redes sociais e plataformas online, a ONG realiza campanhas de conscientização, compartilhando informações, dicas e estatísticas sobre a reciclagem e os impactos do lixo no meio ambiente.</p>
                </div>
                <div className="projeto__card">
                    <h2 className='card__h2'>Parcerias com Empresas Locais</h2>
                    <p className='card__p'> A TrocaVerde estabeleceu parcerias com empresas locais, como supermercados e restaurantes, para criar pontos de coleta adicionais e incentivar os clientes a trazerem seus resíduos recicláveis.</p>
                </div>
                <div className="projeto__card">
                    <h2 className='card__h2'>Eventos de Limpeza</h2>
                    <p className='card__p'> Periodicamente, a ONG organiza eventos de limpeza em praias, parques e áreas públicas, onde os voluntários se unem para recolher resíduos e conscientizar sobre a importância de manter o ambiente limpo.</p>
                </div>
            </div>
        </div>
    )
}