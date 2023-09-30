import { viewportType } from "@/interfaces";
import { Variants } from "framer-motion";

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