export const createRequest = async <T>(
   url: `/api/${string}`,
   init?: RequestInit | undefined
): Promise<T> => {
   const response = await fetch(url, init);
   return await response.json();
};
