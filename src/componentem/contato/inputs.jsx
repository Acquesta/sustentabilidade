import '../contato/inputs.css'

export default function Inputs(){
    return(
        <>
            <div className="contato">
                <h1 className='contato__h1'>Contato</h1>
                <div className="contato__inputs">
                    <h2 className='inputs__h2'>Coloque suas informções de contato</h2>
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <input type="text" name="texto" id="text" placeholder='Descrição da coleta'/>
                </div>
            </div>
        </>
    )
}