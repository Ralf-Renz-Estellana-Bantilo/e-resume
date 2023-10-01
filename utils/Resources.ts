import { viewportType } from "@/interfaces";
import { Variants } from "framer-motion";
import { Quicksand } from 'next/font/google'

export const quicksand = Quicksand( { subsets: ['latin'] } )

export const cardVariants: Variants = {
   offscreen: {
      y: 100,
      opacity: 0
   },
   onscreen: {
      y: 0,
      opacity: 1,
      transition: {
         type: "spring",
         bounce: 0.3,
         duration: 1
      }
   }
};

export const viewportVariant: viewportType = {
   once: true,
   amount: 0
}

export const container = {
   hidden: { opacity: 1, scale: 0 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         delayChildren: 0.3,
         staggerChildren: 0.2
      }
   }
};

export const item = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1
   }
};