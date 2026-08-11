import styles from './StatusNotificacao.module.css'

function StatusNotificacao ({texto = 'nemhuma notificação nova' , lido=false}) {

    return(
      <div className={styles.Caixa}>
          <h1 className ={styles.texte}>{texto}</h1>

           <p className={styles.PLido}  style={{color: lido ? "red" : "blue"}}> 
            
            {lido} - {typeof lido}
            </p>
      </div>

    )
}

export default StatusNotificacao 