import './App.css'
import user from "./user.json";



function App() {
  const mailMe = "mailto:" + user.email;
  return <main className='app'>
    <h1>About me</h1>
    <div>Name: {user.name} </div>
    <div>
      Skills
      <div>css: {user.skills.css} </div>
    </div>
    <ul>   
      {user.hobbies.map((hobby) => (
        <li key={hobby}>{hobby}</li>
      ))}
      {/* Another way:
      {user.hobbies.map((hobby) => (
      return <li key={hobby}>{hobby}</li>;
      ))}
      */}
    </ul>

    <a href={{mailMe}}>Email me</a>
  </main>
}

export default App
