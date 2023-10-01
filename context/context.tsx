import { ContextValueType, ScreenSizeInterface, ThemeType } from "@/interfaces";
import { ReactNode, createContext, useState, useEffect } from "react";

export const ComponentContext = createContext<ContextValueType | null>( null )

export default function ComponentContextProvider ( { children }: { children: ReactNode } )
{

   const [theme, setTheme] = useState<ThemeType>( 'light' )
   const [screenSize, setScreenSize] = useState<ScreenSizeInterface>( {
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0
   } );

   const toggleTheme = () =>
   {
      setTheme( ( prevTheme => prevTheme === 'light' ? 'dark' : 'light' ) )
      document.documentElement.classList.toggle( 'dark', theme === 'light' );
   }


   useEffect( () =>
   {
      const handleResize = (): void =>
      {
         setScreenSize( {
            width: window.innerWidth,
            height: window.innerHeight
         } );
      };

      window.addEventListener( 'resize', handleResize );

      return () =>
      {
         window.removeEventListener( 'resize', handleResize );
      };
   }, [] )

   const BREAKPOINT: number = 1024
   const { width } = screenSize

   const isMobile = width < BREAKPOINT

   const value: ContextValueType = {
      theme,
      toggleTheme,
      isMobile
   }

   return (
      <ComponentContext.Provider value={value}>
         {children}
      </ComponentContext.Provider>
   )
}
