interface ENVIRONMENTS {
   CLOUDINARY_PROTOCOL: string;
   CLOUDINARY_HOSTNAME: string;
   CLOUDINARY_PATHNAME: string;
   CLOUDINARY_FOLDERNAME: string;
}

const useEnv = (
   node_env?: 'development' | 'production' | 'test'
): ENVIRONMENTS => {
   const nodeEnviroment = node_env ?? process.env.NODE_ENV;
   const isDevEnv = nodeEnviroment === 'development';

   const getVariable = (value: keyof ENVIRONMENTS) => {
      const variable = isDevEnv ? `NEXT_PUBLIC_${value}` : value;

      const envVariableValue = process.env[`${variable}`];

      if (!envVariableValue) {
         return '';
      }

      return envVariableValue;
   };

   return {
      CLOUDINARY_PROTOCOL: getVariable('CLOUDINARY_PROTOCOL'),
      CLOUDINARY_HOSTNAME: getVariable('CLOUDINARY_HOSTNAME'),
      CLOUDINARY_PATHNAME: getVariable('CLOUDINARY_PATHNAME'),
      CLOUDINARY_FOLDERNAME: getVariable('CLOUDINARY_FOLDERNAME'),
   };
};

export default useEnv;
