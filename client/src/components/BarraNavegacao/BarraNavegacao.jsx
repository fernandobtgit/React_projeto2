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
import { AiFillProduct } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { FaDraftingCompass } from "react-icons/fa";
import { IoListSharp } from "react-icons/io5";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { BsBasket3Fill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { LuClipboardList } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";

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
          <AiFillHome className=" fs-4  " />
          <span className="fs-5 ms-3">Home</span>
        </Nav.Link>


        {/* Criando um arcordeon */}

        <Accordion flush className="flex-column mb-auto" alwaysOpen>
          
          {/* Páginas produtos */}
          <Accordion.Item eventKey="0" className=" bg-dark text-white">
            <AccordionHeader className={styles.accordionHeader}>
              <AiFillProduct className=" fs-4 " />
              <span className="ms-2"> Produtos </span>
            </AccordionHeader>
            <AccordionBody className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className=" flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos"
                  className="text-white ps-4"
                >
                  <IoListSharp className="fs-5" />
                  <span className="ms-2">Listar</span>
                </Nav.Link>

                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos/cadastrar"
                  className="text-white ps-4"
                >
                  <MdFormatListBulletedAdd className="fs-5" />
                  <span className="ms-2">Adicionar</span>
                </Nav.Link>
              </Nav>
            </AccordionBody>
          </Accordion.Item>

          {/* Pagina cliente */}

          <Accordion.Item eventKey="1" className=" bg-dark text-white">
            <AccordionHeader className={styles.accordionHeader}>
              <FaUsers className=" fs-4 " />
              <span className="ms-2"> Cliente </span>
            </AccordionHeader>
            <AccordionBody className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className=" flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/cliente"
                  className="text-white ps-4"
                >
                  <MdPersonSearch className="fs-5" />
                  <span className="ms-2">Listar</span>
                </Nav.Link>

                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/cliente/cadastrar"
                  className="text-white ps-4"
                >
                  <FaPersonCirclePlus className="fs-5" />
                  <span className="ms-2">Adicionar</span>
                </Nav.Link>
              </Nav>
            </AccordionBody>
          </Accordion.Item>

          {/* Pagina funcionario */}

          <Accordion.Item eventKey="2" className=" bg-dark text-white">
            <AccordionHeader className={styles.accordionHeader}>
              <FaUserTie className=" fs-4 " />
              <span className="ms-2"> Funcionarios </span>
            </AccordionHeader>
            <AccordionBody className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className=" flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/funcionarios"
                  className="text-white ps-4"
                >
                  <MdPersonSearch className="fs-5" />
                  <span className="ms-2">Listar</span>
                </Nav.Link>

                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/funcionarios/cadastrar"
                  className="text-white ps-4"
                >
                  <FaPersonCirclePlus className="fs-5" />
                  <span className="ms-2">Adicionar</span>
                </Nav.Link>
              </Nav>
            </AccordionBody>
          </Accordion.Item>

          {/* Pagina pedidos */}
          <Accordion.Item eventKey="3" className=" bg-dark text-white">
            <AccordionHeader className={styles.accordionHeader}>
              <BsBasket3Fill className=" fs-4 " />
              <span className="ms-2"> Pedidos </span>
            </AccordionHeader>
            <AccordionBody className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className=" flex-column">
                {/* Opção 1 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos"
                  className="text-white ps-4"
                >
                  <AiOutlineEye className="fs-5" />
                  <span className="ms-2">Ver Pedidos</span>
                </Nav.Link>

                {/* Opção 2 */}
                <Nav.Link
                  as={NavLink}
                  to="/produtos/cadastrar"
                  className="text-white ps-4"
                >
                  <LuClipboardList className="fs-5" />
                  <span className="ms-2">Fazer Pedidos</span>
                </Nav.Link>
              </Nav>
            </AccordionBody>
          </Accordion.Item>


           {/* Opção relatórios*/}
        <Nav.Link className="text-white px-2" as={NavLink} to="/relatorios">
          <TbReportSearch className=" fs-4  " />
          <span className="fs-5 ms-3">Relatórios</span>
        </Nav.Link>

        </Accordion>
      </Nav>

      <hr className=" border-secondary" />
      {/* Vizualizar foto e nome do perfil, e opções */}
      <Nav className="dropdown pb-4">
        <NavDropdown
          title={
            <span className="text-white align-items-center">
              <Image
                src={imagemAtual == "null" ? semImagem : imagemAtual}
                width={70}
                height={70}
                roundedCircle
                className="me-2"
              />
              {usuarioNome}
            </span>
          }
          menuVariant="dark"
        >
          {/* Opção de editar o perfil */}
          <NavDropdown.Item as={NavLink} to={`/funcionarios/editar/${idAtual}`}>
            Editar
          </NavDropdown.Item>

          {/* Voltar pra tela de login */}
          <NavDropdown.Item as={NavLink} to="/login" onClick={logout}>
            Sair
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
};

export default BarraNavegacao;
