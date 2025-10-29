import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// Importando a função useform do pacote hook-form
import { useForm } from "react-hook-form";

//importando o hook de produtos
import { useListaCategorias, useListaMedidas } from "../../hooks/useProdutos";

const FormularioProduto = (props) => {
  // register = cria um objeto com os valores retirados dos inputs
  // handleSumbit = envia os dados formulário, caso dê erro ou sucesso
  // formState { errors } = objeto que guarda uma lista de erros que aconteceram na tentativa do envio
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Lista de categorias
  const cates = useListaCategorias();

  // Lista de medidas
  const medis = useListaMedidas();

  // Variavel de produto sem imagem
  const linkImagem = "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mano_Brown%2C_June_2025.jpg"

  return (
    <div className="text-center">
      <Form className="mt-3 w-full" onSubmit={""}>
        <Row>
          <Col md={12} lg={6}>
            {/* Caixa SKU */}
            <FloatingLabel controlId="FISKU" label="SKU" className="mb-5">
              <Form.Control
                type="text"
                {...register("sku", {
                  required: "O SKU é obrigatório",
                  minLength: {
                    value: 2,
                    message: "o SKU deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 10,
                    message: "o SKU deve ter no maximo 10 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.sku && <p className="error"> {errors.sku.message} </p>}
            </FloatingLabel>

            {/* Fim de caixa de SKU */}
            {/* Caixa Nome */}
            <FloatingLabel controlId="FI-NOME" label="Nome" className="mb-5">
              <Form.Control
                type="text"
                {...register("nome", {
                  required: "O nome é obrigatório",
                  minLength: {
                    value: 2,
                    message: "o nome deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "o nome deve ter no maximo 30 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.nome && <p className="error"> {errors.nome.message} </p>}
            </FloatingLabel>

            {/* Fim de caixa de Nome */}
            {/* Caixa descricao */}
            <FloatingLabel
              controlId="FI-DESCRICAO"
              label="Descrição"
              className="mb-5"
            >
              <Form.Control
                type="text"
                {...register("descrição", {
                  required: "A descrição é obrigatório",
                  minLength: {
                    value: 2,
                    message: "A descrição deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 100,
                    message: "A descrição deve ter no maximo 100 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.descricao && (
                <p className="error"> {errors.descricao.message} </p>
              )}
            </FloatingLabel>
            {/* Fim de caixa de descricao */}

            {/* Caixa categoria*/}
            <FloatingLabel
              controlID="FI-CATEGORIAS"
              label="Categoria"
              className="mb-5"
            >
              <Form.Select
                {...register("categoria", {
                  validate: (value) => value !== "0" || "Escolha uma categoria",
                })}
              >
                <option value="0"> Escolha uma categoria </option>
                {cates.map((cat) => (
                  <option key={cat.id} value={cat.nome}>
                    {" "}
                    {cat.nome}{" "}
                  </option>
                ))}
              </Form.Select>
              {errors.categoria && (
                <p className="error"> {errors.categoria.message} </p>
              )}
            </FloatingLabel>
            {/* Fim de caixa de categoria*/}

            {/* Caixa marca */}
            <FloatingLabel controlId="FI-MARCA" label="Marca" className="mb-5">
              <Form.Control
                type="text"
                {...register("marca", {
                  required: "A marca é obrigatório",
                  minLength: {
                    value: 2,
                    message: "A marca deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "A marca deve ter no maximo 30 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.descricao && (
                <p className="error"> {errors.descricao.message} </p>
              )}
            </FloatingLabel>
            {/* Fim de caixa de marca */}

            {/* Caixa fornecedor */}
            <FloatingLabel
              controlId="FI-FORNECEDOR"
              label="Fornecedor"
              className="mb-5"
            >
              <Form.Control
                type="text"
                {...register("fornecedor", {
                  required: "A fornecedor é obrigatório",
                  minLength: {
                    value: 2,
                    message: "A fornecedor deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "A fornecedor deve ter no maximo 30 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.descricao && (
                <p className="error"> {errors.descricao.message} </p>
              )}
            </FloatingLabel>
            {/* Fim de caixa de fornecedor */}
          </Col>

          <Col md={12} lg={6}>
            {/* Caixa quantidade */}
            <FloatingLabel
              controlId="FI-QUANTIDADE"
              label="Quantidade"
              className="mb-5"
            >
              <Form.Control
                type="number"
                {...register("quantidade", {
                  required: "A quantidade é obrigatório",
                  minLength: {
                    value: 1,
                    message: "A quantidade deve ser maior que 0",
                  },
                })}
              ></Form.Control>
              {errors.quantidade && (
                <p className="error"> {errors.quantidade.message} </p>
              )}
            </FloatingLabel>
            {/* Fim de caixa de quantidade*/}
            {/* Primeira linha */}
            <Row>
              {/* Primeria coluna */}
              <Col>
                {/* Começo da caixa de tamnho */}
                <FloatingLabel
                  controlId="FI-TAMANHO"
                  label="Tamanho"
                  className="mb-5"
                >
                  <Form.Control
                    type="number"
                    {...register("tamanho", {
                      required: "O tamanho é obrigatório",
                      minLength: {
                        value: 1,
                        message: "O tamanho deve ser maior que 0",
                      },
                    })}
                  ></Form.Control>
                  {errors.quantidade && (
                    <p className="error"> {errors.quantidade.message} </p>
                  )}
                </FloatingLabel>
                {/* Fim da caixa de tamnho */}
              </Col>
              {/* Segunda coluna */}
              <Col>
                {/* Começo caixa de selecionar tamanho */}
                <FloatingLabel
                  controlID="FI-MEDIDAS"
                  label="Medida"
                  className="mb-5"
                >
                  <Form.Select
                    {...register("medida", {
                      validate: (value) =>
                        value !== "0" || "Escolha uma medida",
                    })}
                  >
                    <option value="0"> Escolha uma medida </option>
                    {medis.map((med) => (
                      <option key={med.id} value={med.nome}>
                        {" "}
                        {med.nome}{" "}
                      </option>
                    ))}
                  </Form.Select>
                  {errors.medida && (
                    <p className="error"> {errors.medida.message} </p>
                  )}
                </FloatingLabel>
              </Col>
            </Row>
            {/* Segunda linha */}
            <Row>
              {/* Primeira coluna */}
              <Col>
                {/* Preço de custo */}
                <FloatingLabel
                  controlId="FI-PC"
                  label="Preço de custo"
                  className="mb-5"
                >
                  <Form.Control
                    type="number"
                    {...register("precoCusto", {
                      required: "O preço de custo é obrigatório",
                      minLength: {
                        value: 0.01,
                        message: "O preço de custo deve ser maior que 0",
                      },
                    })}
                  ></Form.Control>
                  {errors.precoCusto && (
                    <p className="error"> {errors.precoCusto.message} </p>
                  )}
                </FloatingLabel>
                {/* fim Preço de custo */}
              </Col>

              <Col>
                {/* Preço de venda */}
                <FloatingLabel
                  controlId="FI-PV"
                  label="Preço de venda"
                  className="mb-5"
                >
                  <Form.Control
                    type="number"
                    {...register("precoVenda", {
                      required: "O preço de venda é obrigatório",
                      minLength: {
                        value: 0.01,
                        message: "O preço de venda deve ser maior que 0",
                      },
                    })}
                  ></Form.Control>
                  {errors.precoVenda && (
                    <p className="error"> {errors.precoVenda.message} </p>
                  )}
                </FloatingLabel>
                {/* Fim preço de venda */}
              </Col>
            </Row>
            {/* caixa imagem */}
                <Form.Group controlID= "FI-IMAGEM" className="mb-5">
                      <FloatingLabel controlId="FI-IMAGEM-LINK" label= "Link da imagem" className="mb-5">
                        <Form.Control type="url"{
                          ...register("imagemUrl", {
                            required: "O link é obrigatório",
                            pattern: {
                              value: /^(http|https):\/\/[^ ]+$/,
                              message: "Insira um link válido"
                            }
                          })}>
                          
                          
                          </Form.Control>
                          {errors.imagemUrl && (<p className="error"> {errors.imagemUrl.message} </p>)} 

                      </FloatingLabel>
                      <Image width={200} height={200} rounded src={linkImagem}/>
                </Form.Group>

            {/* Fim caixa imagem */}
          </Col>
        </Row>
        {/* Botão para envio do formulário */}
        <Button variant="primary" size="lg" type="submit">
          {props.page === "editar" ? "Atualizar" : "Cadastrar"}


        </Button>
      </Form>
    </div>
  );
};

export default FormularioProduto;
