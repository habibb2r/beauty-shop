import messenger from '../../assets/basic-icons/messenger.png'
import { motion } from "motion/react"
const ChatWithUs = () => {
    return (
        <div  className='fixed z-10 bottom-[2%] right-[1%]  py-[2%] w-[150px]'>
           <motion.a  initial={{ boxShadow: '-5px -5px 10px #002fff' }}
                animate={{ boxShadow: '5px 5px 10px #d70000' }}
                transition={{
                    duration: 3,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                }}
          className="flex justify-center items-center gap-2 rounded-3xl px-[2%] py-2 font-bold bg-white bg-opacity-50 shadow-md"
          href="https://www.messenger.com/t/habibb2r"
        > <p>Chat us</p>
          <img className="h-[40px] md:h-[50px]" src={messenger} alt="" />
          
        </motion.a>
        </div>
    );
};

export default ChatWithUs;