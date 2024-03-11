
import { useRouteError } from "react-router-dom"

export default function ErrorPge(){
         
    const error = useRouteError()
  console.log(error)

    


    return(

        <div>
        <h1>page inrouvable</h1>
        <p>une erreur est survenue !!</p>
        <p>{error.error.message}</p>
        </div>
    )
}