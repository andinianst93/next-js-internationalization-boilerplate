import React from 'react'
import ThemeToggle from './ThemeToggle'
export default function Footer() {
  return (
    <footer className='flex justify-between items-center lg:px-16 px-6 p-4 border-t border-neutral-200'>
      <div>
        <p className='text-muted text-sm'>&copy;{new Date().getFullYear()} Sivali Cloud Technology.</p>
      </div>
      <div>
        <ThemeToggle />
      </div>

    </footer>
  )
}
