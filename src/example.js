import logo from './logo.svg';
import './App.css';

const App = () => {

  function sendForm(e){
    e.preventDefault()
    let text = document.querySelector('.text').value
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value

    let formDataConnection = new FormData
    formDataConnection.append('name', text)
    formDataConnection.append('email', email)
    formDataConnection.append('password', password)
    // formDataConnection.append('roles', [])
    const signInJsonData = {
      "email": email,
      // "roles": [],
      "password": password,
      // "username":text
    }
    fetch('http://127.0.0.1:8000/api/login',{
      method:'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body:JSON.stringify(signInJsonData),
    }).then((response)=>{
      console.log(response);
      return response.json()
    }).then((data)=>{
      console.log(data);
      if (data.token){
        fetch('http://127.0.0.1:8000/api/users',{
          method: 'get',
          headers :{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + data.token,
          },
        }).then((response)=>{
          return response.json()
        }).then((data)=>{
          console.log(data);
        })
      }



    })

    console.log('====================================');
    console.log('ICI');
    console.log(e);
    console.log('====================================');

  }
  
  return (
    <div className="App">
      
      <form onSubmit={(e)=>sendForm(e)}>
        <input type="text" className="text" placeholder="votre nom"/>
        <input type="email" className="email" placeholder="example@gmail.com"/>
        <input type="password" className="password" placeholder="your password here"/>
        <button type="submit">Connection</button>
      </form>
    </div>
  );
}

export default App;
