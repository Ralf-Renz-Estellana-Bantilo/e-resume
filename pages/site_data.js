export const getAllLocalStorageData = () =>
{
   let result = []
   for ( let i = 0; i < localStorage.length; i++ )
   {
      const key = localStorage.key( i );

      if ( key )
      {
         const value = localStorage.getItem( key );
         result.push( {
            [`${key}`]: value
         } )
      }
   }

   return JSON.stringify( result )
}

export const getAllSessionStorageData = () =>
{
   let result = []
   for ( let i = 0; i < localStorage.length; i++ )
   {
      const key = localStorage.key( i );

      if ( key )
      {
         const value = localStorage.getItem( key );
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
      result.push( cookie );
   }

   return JSON.stringify( result )
}