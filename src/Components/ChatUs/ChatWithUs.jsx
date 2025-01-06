import messenger from '../../assets/basic-icons/messenger.png'

const ChatWithUs = () => {
    return (
        <div className='fixed z-10 bottom-[2%] right-[1%]  py-[2%] w-[150px]'>
           <a 
          className="flex justify-start items-center gap-2 rounded-xl px-[2%] py-3 font-bold"
          href="https://www.messenger.com/t/habibb2r"
        > <p>Chat us</p>
          <img className="h-[60px]" src={messenger} alt="" />
          
        </a>
        </div>
    );
};

export default ChatWithUs;