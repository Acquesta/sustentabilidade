import HoteBar from '../componentem/hotbar'
import Comeco from '../componentem/main/comeco'
import Introducao from '../componentem/introducao/introducao'
import TipoLixo from '../componentem/tipos Lixo/tiposLixo'
import Projetos from '../componentem/projetos/projetos'


export default function Home(){
    return(
        <>
            <HoteBar/>
            <Comeco></Comeco>
            <Introducao></Introducao>
            <TipoLixo></TipoLixo>
            <Projetos></Projetos>

        </>
    )
}