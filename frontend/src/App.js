import './App.css';
import axios from 'axios';
import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
    </Routes>
  )
}

export default App
/*class App extends React.Component{
  state = {details: [],}

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000')
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      });
    })
  }
  render() {
    return (
      <div>
        <header>Дані з Django</header>
        <hr></hr>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>{output.title}</h2>
              <p>{output.channel}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default App;*/
