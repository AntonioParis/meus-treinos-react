import styles from './Reatividade.module.css'
import BotaoNovo from '../Botoes/BotaoNovo.jsx'
import { useState } from 'react';



function Contador({texto}) {

    const [ContadorTeste, setContadorTeste] = useState(0); 

    function IncrementarContadorTeste() {
    setContadorTeste(ContadorTeste + 1);
    
    }

    function Desemcrementar() {
        if(ContadorTeste > 0){
            setContadorTeste(ContadorTeste - 1);

        }else{
            alert("voce não pode clicar mais")
        }
    }
    
    return(
        <div className={styles.QuadradoTeste}>
           <h1>{ContadorTeste}</h1>
            <BotaoNovo texto= "aumentar" aoClicar={IncrementarContadorTeste} />
            <BotaoNovo texto= "diminuir" aoClicar={Desemcrementar} />
        </div>

    );
}

export default Contador

