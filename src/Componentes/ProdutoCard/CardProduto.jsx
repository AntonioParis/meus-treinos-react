import styles from './CardProduto.module.css'
import BotaoNovo from '../Botoes/BotaoNovo.jsx'

function CardProduto ({nome, precoProduto, aoComprar }) {
    return(
        <div className={styles.EstiloCard}>
            <h2 className={styles.EstiloNomeCard}>{nome} </h2>
            <p className={styles.estiloPreco}> {precoProduto} </p>  
            <BotaoNovo aoClicar={aoComprar} />
        </div>
    )
        
}

export default CardProduto