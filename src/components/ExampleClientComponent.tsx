"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'

export default function ExampleClientComponent() {
    const username = "John Doe"
    const [counter, setCounter] = React.useState(0)
    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)
    const reset = () => setCounter(0)

    const { t } = useTranslation()
  return (
    <div>
        <h2 className='font-semibold text-xl'>{t("subheader", {username})}</h2>
        <h1 className='text-center capitalize font-bold text-4xl mt-16'>{t("counter")}</h1>
        <div className='text-center text-8xl my-4'>
            {counter}
        </div>
        <div className='flex items-center gap-4 justify-center'>
          <Button onClick={decrement}>Decrement</Button>
          <Button variant='outline' onClick={reset}>Reset</Button>
          <Button onClick={increment}>Increment</Button>
        </div>
    </div>
  )
}
