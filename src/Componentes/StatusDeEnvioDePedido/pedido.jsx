import styles from './pedido.module.css'
import BotaoParaPedido from '../Botoes/BotaoParaPedido.jsx'

function CardPedido({numeroPedido , envidado = false ,  ConfirmaClick}) {
    function lidarComClick() {
    if(envidado){
        alert("seu pedidojá está a caminho")
               
    }else{
        alert("seu pedido não está acaminho")
    }
  }
  return(
    <div className={styles.CardPedidoEstilo}>

        <h3 className={styles.estiloNPedido}>
            {numeroPedido}</h3>

        <p className={styles.estiloP} style={{color: envidado ? 'green' : 'red'}}>
            {envidado ? 'Status: Pedido envidado' : 'Status: Aguardando Envio'}
        
        </p>
            <BotaoParaPedido ConfirmaClick={lidarComClick} />
    </div>
  )
}

export default CardPedido