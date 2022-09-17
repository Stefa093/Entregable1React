import React from 'react'

const Button = ({getRandomAll}) => {


    const backgroundObj = {
        backgroundColor: randomColor
    }

  return (
        <button 
            style={backgroundObj} 
            className= "card__btn"
            onClick={getRandomAll}
            >&#62;
        </button>
  )
}

export default Button