import "./Puntuacion.css"
export const Puntuacion = (props) =>{
    return <div className="puntuacion_container">
        <div className="puntuacion_text">
        {props.puntuacion.iniciales} : {props.puntuacion.puntos}</div>
        </div>
}