import { ContextValueType, ThemeType } from "@/interfaces";
import { ReactNode, createContext, useState } from "react";

export const ComponentContext = createContext<ContextValueType | null>( null )

export default function ComponentContextProvider ( { children }: { children: ReactNode } )
{

   const [theme, setTheme] = useState<ThemeType>( 'light' )

   const toggleTheme = () =>
   {
      setTheme( ( prevTheme => prevTheme === 'light' ? 'dark' : 'light' ) )
   }

   const value: ContextValueType = {
      theme,
      toggleTheme,
   }

   return (
      <ComponentContext.Provider value={value}>
         {children}
      </ComponentContext.Provider>
   )
}
