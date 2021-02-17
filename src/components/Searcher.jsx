import React, {Component} from 'react'

class Searcher extends Component{

    searchRef = React.createRef();

    handleData = (e)=>{
//we take the input values
e.preventDefault();
const word = this.searchRef.current.value;

//send to principal component
this.props.dataSearch(word)

    }
    render(){
        return(
            <>

            <form onSubmit={this.handleData}>
                <div className="row">
                <div className="form-group col-md-8">
                    <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Type your word here. Ex. cats" />
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-lg btn-primary btn-block" value="DO IT! " />
                </div>
                </div>
            </form>
            </>
         )
    }
}
export default Searcher