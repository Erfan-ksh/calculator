import { Button } from '../components/Button'
import React from 'react';
import { evaluate } from 'mathjs'

const doButton = (pressedButton, setQuestion, setAnswer ,question) => {
    if (pressedButton === '=') {
        return setAnswer(evaluate(question)?.toLocaleString())
    }
    if (pressedButton?.toLowerCase() === 'c') {
        return setQuestion('')
    }
    setQuestion(prev => prev + pressedButton)
}


function NumPad({ setQuestion, setAnswer, question }) {
    return (
        <section onClick={(event) => {
            if (event.target.tagName.toLowerCase() === 'button') {
                const pressedButton = event.target.innerHTML
                return doButton(pressedButton, setQuestion, setAnswer ,question)
            }
        }} className='grid grid-cols-4 gap-[5%] pt-5 border-t-2 border-[#827A7A]'>
            <Button variant='specialred'>C</Button>
            <Button variant='secondry'>(</Button>
            <Button variant='secondry'>%</Button>
            <Button variant='secondry'>/</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button variant='secondry'>*</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button variant='secondry'>-</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button variant='secondry'>+</Button>
            <Button variant='secondry'>)</Button>
            <Button>0</Button>
            <Button>.</Button>
            <Button variant='specialgreen'>=</Button>
        </section>);
}

NumPad = React.memo(NumPad)

export {
    NumPad
};