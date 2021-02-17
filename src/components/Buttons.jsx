import { render } from '@testing-library/react'
import React from 'react'

//No tiene ciclo de vida porque es functional component

const Buttons = (props)=>{
    render()
    return(

        <div className="py-3">

             <button onClick={(props.previousPage)} type="button" className="btn mr-1 btn-primary">Previous &larr;</button>
             <button onClick={(props.nextPage)} type="button" className="btn mr-1 btn-primary">Next &rarr;</button>
         </div>

    )



}
export default Buttons