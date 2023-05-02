import { Puntuacion } from "../Puntuacion/Puntuacion"

export const ListaPuntuaciones = (props)  => {


    const nums = [2,4,5,8]

    return <div>
        {props.puntuaciones.map(puntuacion => {
              return <Puntuacion puntuacion={puntuacion}>
        </Puntuacion>    
        })}
        </div>
        
}