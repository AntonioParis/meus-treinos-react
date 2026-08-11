import styles from './FromaEstiloCard.module.css'
import BotaoCard from '../Botoes/BotaoCard.jsx'

function FormaCard({Titulo , DescricaoOO }) {
    return(
        <div className={styles.CardEstilo}>
            <h1 className={styles.tituloEstilo}>{Titulo}</h1>
            <p className={styles.PEstilo}>{DescricaoOO}</p>
            <BotaoCard  />
        </div>

    )
}

export default FormaCard