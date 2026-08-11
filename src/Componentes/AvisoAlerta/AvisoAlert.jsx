import styles from './EstiloAvisoAlert.module.css'

function AvisoAlert({mensagens= 'Acao realizada com sucesso!', urgente}) {
    return(
        
        <div className = {styles.CaixaAlert}>
            <p className = {styles.EstiloMensagens}> Mensagem = {mensagens}</p>
            <p  
                className={styles.EstiloUrgente} style={{color: urgente ? "" : ""}}
                
                > stutus urgente: {urgente} - tipo: {typeof urgente}</p>
        </div>
    )
}

export default AvisoAlert  