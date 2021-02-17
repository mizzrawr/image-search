import React, {Component} from 'react'
import Image from './Image'
import Buttons from './Buttons'


class Result extends Component{
    showImages = ()=>{

const images = this.props.images;
//Using JS. So always when state is empty, is not going to display anything ([])
if(images.length === 0){
return null;
        }
//console.log(images)
return(


<React.Fragment>
<h2>Chill, these are DRM free...</h2>
    <div className="col-12 p-5  row">

    {images.map(image =>(
        <>

        <Image
        key={image.id}
        image={image}
        />
        </>
    ))}

    </div>

<Buttons
previousPage={this.props.previousPage}
nextPage={this.props.nextPage}
/>
</React.Fragment>
)
    }
    render(){
        return(
        //Using React.fragment because we dont want extra space while using empty <div>
            <React.Fragment>
                { this.showImages()}
            </React.Fragment>
        )
    }
}
export default Result


//This is a class component.
//Difference between functional component:
//class components have state
//access to 'this'
//component life cycle:
// En React.js los componentes que no sean puros (todos los que se crean mediante clases o React.createClass) poseen algo conocido como el ciclo de vida. Este ciclo de vida son una serie de funciones que se ejecutan en distintos momentos de la vida del componente y nos permiten realizar distintas acciones en estos momentos.https://platzi.com/blog/ciclo-de-vida-de-un-componente-de-reactjs/?__cf_chl_jschl_tk__=a65e531e5893c138923dc47371657d7c92f0d550-1610532542-0-AcuOgEjX0xr1PVKEgXbJsQutv0w6I3aWEOH9M4jb-Af6EIYV6u2_3jUcM1D-S7FM53XV1Rc8W-2lXEaIaFfvK0bvQ2li9dyy-zjbBO-H8v9h1QM_4IAFmBRf7lRtYykLmOMa8S5LizMrUB3wLK7eTQ9ZIkFKt6b71pLaO7a8id5ZREAiaQCrZoIOEyyG2D24HtibdlqdSShSxASvFGU-BDw63G98m-txhN_7f4EeP0j18FhzE_A7R1WddlinF13ZXaflu97G54yA2NXHl_cHCqDD8Zc04XU_6VoY60TvW8JYIfGpQ4c06kZ6lWpwC-YfYHwHtBivBGgOII0D_CIOSNgYl3qGjxzDkfTuqIHgqdqVpD_Ur1sxe_u75V62V8no6OurqVquh9CX1X-gsas-tqc80oNbwnAIoIWTHofe3QHatagbOdjxcFlRS_QihSipPw