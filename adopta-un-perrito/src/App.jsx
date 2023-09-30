import { useState } from 'react'
import './App.css'
import { Header } from './assets/components/Header'
import { MyCard } from './assets/components/MyCard'
import { Footer } from './assets/components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>
          <Header titulo="Adopta un perrito"/>
        </h2>
      </div>
      <div className="container">
        <MyCard url="https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        nombre="Bartolo"
        descripcion="Lleno de energía y listo para jugar ¡Dale a Bartolo el hogar amoroso que se merece!"/>
        <MyCard url="https://media.istockphoto.com/id/93392743/es/foto/bobtail.jpg?s=2048x2048&w=is&k=20&c=KuRG_7F5PRl-yfRvShmGAo6QBZ8nN6GVRsHvi8lErYU="
        nombre="Messi"
        descripcion="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"/>
        <MyCard url="https://images.pexels.com/photos/12287391/pexels-photo-12287391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        nombre="Gohan"
        descripcion="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"/>
        <MyCard url="https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        nombre="Princesa"
        descripcion="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
