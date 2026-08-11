import styles from './StatusTarefaEstilo.module.css'

function SStatus ({titulo = 'Nova Tarefa' , concluida = true }) {
    return(
        <div className={styles.tituloTarefa}>
            <h1 className={styles.nomeH1Tarefa}>{titulo}</h1>
            <p className={styles.PConcluido}  style={{color: concluida ? 'blue': 'red'}}>{concluida ? 'Concluída' : 'Pendente'}</p>
        </div>


    )
}

export default SStatus