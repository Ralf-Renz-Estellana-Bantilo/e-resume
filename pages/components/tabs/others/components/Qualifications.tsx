import useAppContext from '@/hooks/useAppContext';
import { cardVariants, quicksand, viewportVariant } from '@/utils/Resources';
import { Checkbox } from 'antd';
import { motion } from 'framer-motion';

const Qualifications = () => {
    const { qualifications } = useAppContext();

    return (
        <div className="flex pb-5">
            <div className="flex flex-col flex-1 gap-3">
                {qualifications.map((qualification, idx) => {
                    return (
                        <motion.div
                            className="px-3"
                            key={idx}
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={viewportVariant}
                        >
                            <Checkbox
                                className={`${quicksand.className} w-full`}
                                checked
                            >
                                <strong className="uppercase text-accent-primary ">
                                    {qualification.title}
                                </strong>
                            </Checkbox>
                            <div className="flex flex-col text-sm">
                                {qualification.description.map(
                                    (pointer, index) => {
                                        return (
                                            <div
                                                className="flex gap-3 px-6 text-accent-secondary"
                                                key={index}
                                            >
                                                <div>•</div>
                                                <p className="text-justify text-accent-secondary">
                                                    {pointer}
                                                </p>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Qualifications;
