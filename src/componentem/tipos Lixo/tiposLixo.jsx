import './tipoLixo.css'

export default function TipoLixo(){
    return(
        <div className='tipoLixo'>
            <h4 className='tipolixo__titulo'>Tipos de lixo</h4>
            <div className="cards">
                <div className="card azul">
                    <h2 className='tipolixo__card__h2'>Azul</h2>
                    <h3 className='tipolixo__card__h2'>aos papéis e papelões</h3>
                </div>

                <div className="card verde">
                    <h2 className='tipolixo__card__h2'>Verde</h2>
                    <h3 className='tipolixo__card__h2'>aos vidros</h3>
                </div>

                <div className="card vermelho">
                    <h2 className='tipolixo__card__h2'>Vermelho</h2>
                    <h3 className='tipolixo__card__h2'>para os pláticos</h3>
                </div>

                <div className="card amarelo">
                    <h2 className='tipolixo__card__h2'>Amarelo</h2>
                    <h3 className='tipolixo__card__h2'>para metais</h3>
                </div>

                <div className="card marrom">
                    <h2 className='tipolixo__card__h2'>Marrom</h2>
                    <h3 className='tipolixo__card__h2'>para os residuos organicos</h3>
                </div>
            </div>

            <div className='cards'>    
                <div className="card preto">
                    <h2 className='tipolixo__card__h2'>Preto</h2>
                    <h3 className='tipolixo__card__h2'>para as madeiras</h3>
                </div>

                <div className="card cinza">
                    <h2 className='tipolixo__card__h2'>Cinza</h2>
                    <h3 className='tipolixo__card__h2'>para materiais não reciclaveis</h3>
                </div>

                <div className="card branco">
                    <h2 className='tipolixo__card__h2'>Branco</h2>
                    <h3 className='tipolixo__card__h2'>destinado aos lixos hospitalares</h3>
                </div>

                <div className="card laranja">
                    <h2 className='tipolixo__card__h2'>Laranja</h2>
                    <h3 className='tipolixo__card__h2'>para residuos perigosos</h3>
                </div>

                <div className="card roxo">
                    <h2 className='tipolixo__card__h2'>Roxo</h2>
                    <h3 className='tipolixo__card__h2'>para residuos radioativos</h3>
                </div>
            </div>
        </div>
    )
}