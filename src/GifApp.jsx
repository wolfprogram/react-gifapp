// import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import AddCategory from './componets/AddCategory'
import { GitGrid } from './componets/GitGrid'
// import { GitGrid } from './componets/GitGrid'

function GifApp(props) {
  // let datos = ['One', 'Samurai X', 'Dragon Ball']
  let datos = ['One']
  // const [categories, setCaregories] = useState(['One', 'Samurai X', 'Dragon Ball'])
  const [categories, setCaregories] = useState(datos)

  //  const handleAdd = () => {
  //   // categories.push('nueva c') esto no se usa en React
  //   // setCaregories([...categories, 'nueva categoria']) //agregar al final
  //   // setCaregories(['nueva categoria', ...categories]) //agrgar al inicio

  //   // cuando se usa de esta manera lo que se trae por default es el valor del State anterior
  //   // setCaregories( cualquierNombre => [...cualquierNombre, 'nueva categoria']) //agregar al final
  //   setCaregories( cualquierNombre => ['nueva categoria', ...cualquierNombre]) // agreagar al inicio
    
  //   // console.log(state);

  //  }

  return (
    <>
        <div>GifApp</div>
        {/* <AddCategory setCaregories={ setCaregories }/> */}
        <AddCategory setCaregories={ setCaregories }/>
        <hr />
        <ul>
         {

           
                categories.map( (category, i) => 
                    //{/* <li key={ category }> { category }</li> */}
                    <GitGrid
                    key={ category} 
                    category={ category }/>
         )
          
         }
         </ul>

         {/* <button onClick={handleAdd}></button> */}
    </>
    
  )
} 

GifApp.propTypes = {}

export default GifApp

const mapStateToProps = ( e ) => {
  
}