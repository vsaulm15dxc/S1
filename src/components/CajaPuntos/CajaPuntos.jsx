import { ListaPuntuaciones } from "../ListaPuntuaciones/ListaPuntuaciones"
import { PaginaPuntos } from "../PaginaPuntos/PaginaPuntos"
import "./CajaPuntos.css"


export const CajaPuntos = () =>{


    const puntuaciones = [
        {
         puntos : 1500,
         iniciales : "JCH"
        },
        {
          puntos: 7000,
          iniciales: "ECR"
        },
        {
          puntos : 2500,
          iniciales: "CYG"
        }       
    ]



    
    return <div className="caja_puntos_container">
    <div className="caja_puntos_columna_1">
    <PaginaPuntos reverse={true}></PaginaPuntos>
    </div>
    <div className="caja_puntos_columna_2">
    <ListaPuntuaciones puntuaciones={puntuaciones}></ListaPuntuaciones></div>
    <div className="caja_puntos_columna_3">
    <PaginaPuntos></PaginaPuntos>
    </div>
    </div>
}