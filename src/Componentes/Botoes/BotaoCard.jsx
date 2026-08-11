import styles from './BotoesEstilo.module.css'

function bntclick () {
    console.log('clicado')
}

function BotaoCard({texto = 'meu botao default ', desabilitado}) {
    function bntclick () {
        console.log('clicado')
    }
    return(
        <button className={styles.estiloBotao} disabled={desabilitado}

        onClick={() => bntclick ()}
        >{texto} - {desabilitado} - {typeof desabilitado}
        </button>
    )
    
}

export default BotaoCard 