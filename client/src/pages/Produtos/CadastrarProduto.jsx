import FormularioProduto from '../../components/FormularioProduto/FormularioProduto.jsx'
import Container  from 'react-bootstrap/Container'

const CadastrarProduto = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center">Cadastrar Produto</h1>
        <FormularioProduto page="cadastro" />
      </Container>
    </div>
  )
}

export default CadastrarProduto
