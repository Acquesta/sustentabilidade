import './introducao.css'
export default function Introducao(){
    return(
        <div className='introducao'>
            <h1 className='introducao__h1'>Como funcionamos</h1>
            <p className='introducao__p'>A ONG TrocaVerde é uma iniciativa inovadora que busca resolver o problema do acúmulo de lixo e promover a sustentabilidade. Através de postos de coleta estratégicos, eles trocam resíduos recicláveis por dinheiro, incentivando a participação da comunidade e a redução do desperdício. Além disso, a organização também oferece educação ambiental, workshops e palestras para conscientizar sobre a importância da reciclagem. A TrocaVerde não apenas contribui para a redução da poluição, mas também cria oportunidades econômicas para as comunidades. Sua abordagem criativa inspira outras iniciativas a enfrentar desafios ambientais de forma positiva e eficaz.</p>
            <input className='introducao__input' type="button" value="Descartar"/>
        </div>
    )
}