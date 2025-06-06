import React from 'react'
import Spline from '@splinetool/react-spline';

export default function Prueba() {
  return (
    <>
    <section className='min-h-screen bg-red-100'>
        <div>
            <h1>Inicio</h1>
        </div>
        <div>
        <Spline scene="https://prod.spline.design/bd7BqKH1GjvenJ3B/scene.splinecode" />
        </div>
    </section>
    <section className='min-h-screen bg-blue-100'>
        <div>
            <h1>Skills</h1>
        </div>
        <div></div>
    </section>
    <section className='min-h-screen bg-yellow-100'>
        <div>
            <h1>Proyectos</h1>
        </div>
        <div></div>
    </section>
    <section className='min-h-screen bg-green-100'>
        <div>
            <h1>Contacto</h1>
        </div>
        <div></div>
    </section>
    </>
    
    
  )
}
