// Importando o css da barra de navegação
import styles from "./BarraNavegacao.module.css";

// Importar os componentes do bootstrap
import {
  Nav,
  Navbar,
  NavDropdown,
  Image,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "react-bootstrap";

// Importando os links do router
import { NavLink } from "react-router-dom";

// Importar as informações do contexto autenticação de usuário
import { AuthContext } from "../../contexts/UserContext.jsx";
import { useContext } from "react";

// Importando os icones
import { BsBoxes } from "react-icons/bs";
import { BsXbox } from "react-icons/bs";
import { TfiHandPointRight } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaDraftingCompass } from "react-icons/fa";
import { FaDiagnoses } from "react-icons/fa";
import { FaDizzy } from "react-icons/fa";

const BarraNavegacao = () => {
  // Importar o nome de usuario logado e funcao logout

  const { usuarioNome, logout } = useContext(AuthContext);

  // Guarda o id do usuário atual
  const idAtual = localStorage.getItem("id");

  // Guarda a imagem do usuário atual
  const imagemAtual = localStorage.getItem("imagemPerfil");

  //Imagem padrão
  const semImagem =
    "https://i0.wp.com/www.superlutas.com.br/wp-content/uploads/2025/03/Alex-Poatan-UFC-313-e1741641897934.jpg?fit=1071%2C854&quality=86&ssl=1";

  return (
    <div
      className=" d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100 max-vh-100"
      style={{ width: "250px" }}
    >
      {/* Logo da empresa */}
      <Navbar.Brand as={NavLink} to="/home" className=" text-white mb-3">
        <FaDraftingCompass className=" fs-4 " />
        <span className="fs-5 ms-3">C&G Solutions</span>
      </Navbar.Brand>

      {/* Opções de menu  */}
      <Nav className="flex-column mb-auto">
        {/* Opção home */}
        <Nav.Link className="text-white px-2" as={NavLink} to="/home">
          <TfiTwitterAlt className=" fs-4  " />
          <span className="fs-5 ms-3">Home</span>
        </Nav.Link>

        {/* Opção relatórios*/}
        <Nav.Link className="text-white px-2" as={NavLink} to="/relatorios">
          <BsXbox className=" fs-4  " />
          <span className="fs-5 ms-3">Relatórios</span>
        </Nav.Link>

        {/* Criando um arcordeon */}

        <Accordion flush className="flex-column mb-auto">
          {/* Páginas produtos */}
          <Accordion.Item className=" bg-dark text-white">
            <AccordionHeader className={styles.accordionHeader}>
              <TfiHandPointRight className=" fs-4 " />
              <span className="ms-2"> Produtos </span>
            </AccordionHeader>
            <AccordionBody>
              <Nav className=" flex-column">
                {/* Opção 1 */}
                <Nav.Link as={NavLink} to="/produtos"
                          className="text-white ps-4"> 
                  <FaDiagnoses className="fs-5"/>
                  <span className="ms-2">Listar</span>

                </Nav.Link>

                {/* Opção 2 */}
                <Nav.Link as={NavLink} to="/produtos/cadastrar"
                          className="text-white ps-4"> 
                  <FaDizzy className="fs-5"/>
                  <span className="ms-2">Adicionar</span>
                  
                </Nav.Link>


              </Nav>

            </AccordionBody>
          </Accordion.Item>
        </Accordion>
      </Nav>
    </div>
  );
};

export default BarraNavegacao;
