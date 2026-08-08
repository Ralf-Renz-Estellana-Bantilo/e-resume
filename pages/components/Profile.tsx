import { container, item } from '@/utils/Resources';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profileIMG from '@/assets/Images/LinkedIn Profile.png';

const Profile = () => {
    return (
        <motion.div
            className="flex flex-col items-center gap-2"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="flex items-center justify-center border-2 rounded-full border-primary/30"
                variants={item}
            >
                <motion.div className="w-40 h-40 bg-transparent p-[5px] rounded-full">
                    <Image
                        className="object-fill w-full h-full mx-auto rounded-full"
                        src={profileIMG}
                        alt="Ralf Renz Bantilo"
                        priority
                    />
                </motion.div>
            </motion.div>
            <motion.div
                className="flex flex-col justify-center"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.h3
                    className="text-2xl font-bold text-center text-accent-primary tiktok-effect"
                    variants={item}
                >
                    RALF RENZ BANTILO
                </motion.h3>
                <motion.div className="flex flex-col gap-0" variants={item}>
                    <span className="text-center text-accent-secondary">
                        Front End Developer | UI Engineer
                    </span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Profile;
