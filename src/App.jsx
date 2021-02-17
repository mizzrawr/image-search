import React, { Component } from 'react'
import './css/App.css';
import Searcher from './components/Searcher'
import Result from './components/Result'


class App extends Component {

  state = {
    word: '',
    images : [],
    page: '',
  }

  //It'd be nice if every time we change page, start from top so

  scroll=()=>{
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth,','start')
  }
/***************************** */
//Methods: when user clicks on "previous" or "next", other Results" can be reached.

previousPage = ()=>{
   //First we have to read the site's state
  let page = this.state.page;
//extra step, if we are on p.1, there's no chance to go back
  if(page === 1)return null

//also add -1 to the actual site
  page -= 1;
//add state's change
  this.setState({
page
  },()=>{
    this.consultApi();
    this.scroll()
  });
  //console.log(page)
  }


  nextPage = ()=>{
  //First we have to read the site's state
  let page = this.state.page;
  //also add 1 to the actual site
  page += 1;
//add state's change
  this.setState({
  page
  },()=>{
    this.consultApi();
    this.scroll();
  });
  //console.log(page)
  }
/****************************** */
//Calling your API
  consultApi = ()=>{

    const word = this.state.word;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${word}&per_page=32&page=${page}`;

    console.log(url)
    /********Taking results   *********** */
    fetch(url)
    .then(response => response.json())
    .then(result => this.setState(({images : result.hits})))

  }
  dataSearch = (word)=>{
  this.setState({
    word : word,
    page : 1,
  },()=>{
  this.consultApi();
  })
  }
  render(){
  return (
    <div className="app container">
     <div className="jumbotron">

   <h1 className="text-center ">Free Images 🐱 </h1>

  <Searcher

  dataSearch={this.dataSearch}
  />
  </div>

  <div className="row justify-content-center">
  < Result
  images={this.state.images}
  previousPage={this.previousPage}
  nextPage={this.nextPage}
  />
  </div>
   </div>
 );


  }


}
export default App;
