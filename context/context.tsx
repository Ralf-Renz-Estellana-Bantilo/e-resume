import { ContextValueType } from "@/interfaces";
import { ReactNode, createContext, useState } from "react";

export const ComponentContext = createContext<ContextValueType | null>( null )

export default function ComponentContextProvider ( { children }: { children: ReactNode } )
{

   const [count, setCount] = useState( 0 )

   const value: any = {
      count,
      setCount
   }

   return (
      <ComponentContext.Provider value={value}>
         {children}
      </ComponentContext.Provider>
   )
}
