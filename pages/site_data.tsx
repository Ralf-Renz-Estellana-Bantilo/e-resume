export const getAllLocalStorageData = () =>
{
   let result: {
      [x: string]: string | null;
   }[] = []
   for ( let i = 0; i < localStorage.length; i++ )
   {
      const key: string | null = localStorage.key( i );

      if ( key )
      {
         const value: string | null = localStorage.getItem( key );
         result.push( {
            [`${key}`]: value
         } )
      }
   }

   return JSON.stringify( result )
}

export const getAllSessionStorageData = () =>
{
   let result: {
      [x: string]: string | null;
   }[] = []
   for ( let i = 0; i < localStorage.length; i++ )
   {
      const key: string | null = localStorage.key( i );

      if ( key )
      {
         const value: string | null = localStorage.getItem( key );
         result.push( {
            [`${key}`]: value
         } )
      }
   }

   return JSON.stringify( result )
}

export const getAllCookiesData = () =>
{
   let result = []
   const cookies = document.cookie.split( ";" );

   for ( let i = 0; i < cookies.length; i++ )
   {
      const cookie = cookies[i].trim();
      console.log( cookie );
      result.push( cookie );
   }

   return JSON.stringify( result )
}