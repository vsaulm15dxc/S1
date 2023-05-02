import "./Titulo.css"

export const  Titulo = (props) => {
    
    const style ={
        textAlign: props.position
    }
    return <h1 style={style} class="titulo">{props.texto}</h1>
}