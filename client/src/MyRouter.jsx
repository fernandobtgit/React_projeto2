import { createBrowserRouter } from "react-router-dom"

// Importação das páginas principais 
import App from "./App.jsx"
import PaginaErro from "./pages/PaginaErro.jsx"
import Login from "./pages/Login.jsx"
import RotasProtegidas from "./pages/RotasProtegidas.jsx"
import Home from "./pages/Home.jsx"


// Importação das páginas de Produtos
import VerProdutos from "./pages/Produtos/VerProdutos.jsx"
import CadastrarProduto from "./pages/Produtos/CadastrarProduto.jsx"
import EditarProduto from "./pages/Produtos/EditarProduto.jsx"

// Importação das páginas de Clientes (a serem criadas)


const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <PaginaErro />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path:"login",
                element: <Login />
            }
        ]
    },
    {
        path: "/",
        element: <RotasProtegidas />,
        errorElement: <PaginaErro />,
        children:[
            {
                path: "home",
                element: <Home />
            },
            // Criando rotas para os produtos e etc
            {
                path: "produtos",
                children:[
                    {
                        index: true,
                        element: <VerProdutos />
                    },
                    {
                        path: "cadastrar",
                        element: <CadastrarProduto />
                    },
                    {
                        path: "editar/:id",
                        element: <EditarProduto />
                    }
                ]
            }
        ]
    }
 ])

 export default router