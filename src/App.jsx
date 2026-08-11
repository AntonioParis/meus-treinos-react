import BotaoCard from './Componentes/Botoes/BotaoCard.jsx'
import FormaCard from './Componentes/Card/FormaCard.jsx'
import AvisoAlert from './Componentes/AvisoAlerta/AvisoAlert.jsx'
import StatusNotificacao from './Componentes/StatusNotificacaoPasta/StatusNotificacao.jsx'
import SStatus from './Componentes/StatusDeTarefa/StatusTarefa.jsx'
import CardProduto from './Componentes/ProdutoCard/CardProduto.jsx'
import BotaoNovo from './Componentes/Botoes/BotaoNovo.jsx'
import CardPedido from './Componentes/StatusDeEnvioDePedido/pedido.jsx'

function App_teste() {
  return (
    <>
    <CardPedido
      numeroPedido="#10"
      envidado = {true}
      />
    <CardPedido 
    numeroPedido="#30" 
    envidado={false}
    />
    </>
  )
}

export default App_teste



