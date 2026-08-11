import styles from './BotoesEstilo.module.css'

function BotaoParaPedido({ConfirmaClick}) {
    return(
        <button className={styles.caixaPedidoEstilo} onClick={ConfirmaClick}>
            <span className={styles.buttonDeEstadoDeEnvio} >click</span>
        </button>
    )
}

export default BotaoParaPedido 