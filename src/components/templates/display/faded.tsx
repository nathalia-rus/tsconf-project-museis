import { motion, AnimatePresence } from 'framer-motion'

const duration = 0.5

const variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: duration,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: duration },
    },
}

const Faded = (props: any) => (
    <AnimatePresence>
        <motion.div
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            {props.children}
        </motion.div>
    </AnimatePresence>
)

export default Faded
