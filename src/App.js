import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize=15;
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
         />
        <Routes>
        <Route exact path='/' element={<News setProgress={this.state.setProgress}  apiKey={this.apiKey}  key={'general'} pageSize={this.pageSize} country="in" category="general" />}></Route>
        <Route exact path='/business' element={<News setProgress={this.state.setProgress}  apiKey={this.apiKey}  key={'business'} pageSize={this.pageSize} country="in" category="business" />}></Route>
        <Route exact path='/entertainment' element={<News setProgress={this.state.setProgress}  apiKey={this.apiKey}  key={'entertainment'} pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
        <Route exact path='/health' element={<News setProgress={this.state.setProgress}  apiKey={this.apiKey}  key={'health'} pageSize={this.pageSize} country="in" category="health" />}></Route> 
        <Route exact path='/science' element={<News setProgress={this.state.setProgress}  apiKey={this.apiKey}  key={'science'} pageSize={this.pageSize} country="in" category="science" />}></Route> 
        <Route exact path='/sport' element={<News setProgress={this.state.setProgress}  apiKey={this.apiKey}  key={'sport'} pageSize={this.pageSize} country="in" category="sport" />}></Route> 
        <Route exact path='/technology' element={<News setProgress={this.state.setProgress}  apiKey={this.apiKey}  key={'technology'} pageSize={this.pageSize} country="in" category="technology" />}></Route> 
        </Routes>
        </BrowserRouter>
      </div>
      
    )
  }
}


