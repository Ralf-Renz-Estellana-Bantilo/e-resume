export const setTimestamp = ( mm: number, yyyy: number ): string =>
{
   let result: string = ''
   let stampNumber: number = 0
   let currentMonth: number = new Date().getMonth() + 1
   let currentYear: number = new Date().getFullYear()

   let stampString: string = ''

   if ( ( yyyy > currentYear && mm > currentMonth ) || ( yyyy === currentYear && mm > currentMonth ) || ( yyyy > currentYear && mm === currentMonth ) )
   {
      return `Invalid TimeStamp!`
   }

   if ( currentYear > yyyy && currentMonth < mm )
   {
      stampNumber = ( currentMonth + 12 ) - mm
      stampString = stampNumber > 1 ? 'Months' : 'Month'
   } else if ( currentYear >= yyyy && currentMonth >= mm )
   {
      if ( currentYear > yyyy )
      {
         stampNumber = currentYear - yyyy
         stampString = stampNumber > 1 ? 'Years' : 'Year'
         return `${stampNumber} ${stampString}`
      }
      stampNumber = currentMonth - mm
      stampString = stampNumber > 1 ? 'Months' : 'Month'
   }

   result = `${stampNumber} ${stampString}`
   return result
}