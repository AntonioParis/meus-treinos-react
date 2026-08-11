import styles from './BotoesEstilo.module.css';



function BotaoNovo({aoClicar}) {
    return(
        <button className={styles.NovoBaotao} onClick={aoClicar} >
            <span>click</span>
        </button>

    )
}
 
export default BotaoNovo 