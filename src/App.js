
import './App.css';
import Fullname from './profil/component/fullName.js'
import Bio from './profil/component/bio.js'
import Profession from './profil/component/profession.js'
import Image from './profil/component/image.js'


function App() {
  return (
    <div className="App">
 <Image key={Image.id} src={Image.logo}></Image>   
<Fullname name="wissam elahsoumi"/>
<Bio bio="Men"/>
<Profession profession="full stack devolopper"/>



    </div>
  );
}

export default App;
