'use client'
import React, { ChangeEvent } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'

const SimpleCalculator = () => {

const [Num1, setNum1] = useState<string>('')
const [Num2, setNum2] = useState<string>('')
const [Result, setResult] = useState<string>("")

const num1 = (e: ChangeEvent<HTMLInputElement>)=> {
    setNum1(e.target.value)
}
const num2 = (e: ChangeEvent<HTMLInputElement>)=> {
    setNum2(e.target.value)
}

const add = (): void => {
    setResult((parseFloat(Num1) + parseFloat(Num2)).toString());
  };
const substract = (): void => {
    setResult((parseFloat(Num1) - parseFloat(Num2)).toString());
  };
const multiply = (): void => {
    setResult((parseFloat(Num1) * parseFloat(Num2)).toString());
  };
const devide = (): void => {
    if (parseFloat(Num2) !== 0) {
        setResult((parseFloat(Num1) / parseFloat(Num2)).toString());
    }
    else{
        alert(`${Num1} is not divisible by Zero`)
    }
  };

  const clear = ()=>{
    setNum1("")
    setNum2("")
    setResult("")
  }

    return (
        <div className='text-black'>

            <div className='text-black font-mono font-bold text-xl mb-4'>
                Simple Calculator
            </div>

            <div className='flex gap-4'>
                <div>
                    <label htmlFor="Num1">Number 1</label>
                    <div><Input value={Num1} onChange={num1} type='number' id='Num1' className='rounded-2xl' placeholder='Enter a number' /></div>
                </div>
                <div>
                    <label htmlFor="Num2">Number 2</label>
                    <div><Input value={Num2} onChange={num2} type='number' id='Num2' className='rounded-2xl' placeholder='Enter a number' /></div>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-2 mt-4'>
                <Button onClick={add} variant={'outline'} className='text-2xl font-bold text-gray-700 dark:text-gray-300'>+</Button>
                <Button onClick={substract} variant={'outline'} className='text-2xl font-bold text-gray-700 dark:text-gray-300'>-</Button>
                <Button onClick={multiply} variant={'outline'} className='text-2xl font-bold text-gray-700 dark:text-gray-300'>*</Button>
                <Button onClick={devide} variant={'outline'} className='text-2xl font-bold text-gray-700 dark:text-gray-300'>/</Button>
                
            </div>

            <div className='mt-4'>
                <div>Result:</div>
            </div>

            <div><Input
            value={Result}
            readOnly placeholder='Result'
            className='rounded-2xl'
            /></div>
            <Button
            onClick={clear}
            variant={'outline'}
            className='w-full rounded-2xl mt-4'
            >Clear</Button>

        </div>
    )
}

export default SimpleCalculator
