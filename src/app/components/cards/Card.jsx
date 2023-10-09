// Colocar el estilo correspondiente a cada card para que pueda ser generada por codigo, aceptando como parametros el color de fondo, el titulo y el contenido.

// 'use client'
import Link from 'next/link'

// El contenido debe ser un componente que se pueda reutilizar en otras partes de la aplicacion.
const Card = ({ title }) => {
  // const title = [
  //   { title: 'Servicio 1', subtitle: 'Servicio 1', imgurl: '#' },
  //   { title: 'Servicio 2', subtitle: 'Servicio 2', imgurl: '#' },
  //   { title: 'Servicio 3', subtitle: 'Servicio 3', imgurl: '#' },
  //   { title: 'Servicio 4', subtitle: 'Servicio 4', imgurl: '#' }
  // ]

  const cardStyle = 'min-[465px]:h-[44.44vh] h-[44.44vh] w-full rounded-lg bg-pink-200 p-2 shadow-md'

  return (
    <Link href="#">
      <div id='Card' className={cardStyle}>
        {/* COLOCAR DENTRO, UN DIV QUE HEREDE EL ESPACIO DEL PADRE PARA PODER ORGANIZAR EL CONTENIDO DE LAS CARDS. */}
        {title}
      </div>
    </Link>
  )
}

export default Card
