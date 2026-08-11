import styles from './CaixaMensagens.module.css'

function CaixaMensagens({texto = 'Bem-vindo', sucesso = true}) {

    return(
        <div className={styles.caixaDaMensagens}>
            <h1 className={styles.NomeH1}  style={{color: sucesso ? "green" : "red"}}>{texto}</h1>
        </div>
    )
}

export default CaixaMensagens 