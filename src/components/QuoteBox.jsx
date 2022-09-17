import React from 'react'
import Button from './Button'

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {

    const colorObj = {
        color: randomColor
    }


    return (
        <article style={colorObj} className='card'>
            <div className='box__quotent'>
                <i class='bx bxs-quote-left'></i>
            </div>
            <p className='card__quote'>{randomQuote.quote}</p>
            <h1 className='card__author'>{randomQuote.author}</h1>
            <Button/>
        </article>
    )
}

export default QuoteBox