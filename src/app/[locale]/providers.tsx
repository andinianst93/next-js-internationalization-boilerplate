"use client"
import { ThemeProvider } from '@/components/theme-providers';
import { Toaster } from '@/components/ui/toaster';


export default function Providers({children}: {children: React.ReactNode}) {
  
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
          {children}
      </ThemeProvider>    
    </>
  )
}