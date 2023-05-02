import { CajaPuntos } from "../../components/CajaPuntos/CajaPuntos"
import { Titulo } from "../../components/Titulo/Titulo"



export const PuntuacionPage = () => {
    const style ={
        backgroundColor: "gray",
        height: "100%",
        width:"100%"
    }
    return <div  style={style} className="puntuacion_page">
        <Titulo position="center" texto="React  Arcade"></Titulo>
        <CajaPuntos></CajaPuntos>
        </div>
}

