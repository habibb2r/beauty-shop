import userimg from '../../assets/basic-icons/user.png'
import SectionTitle from './SectionTitle';

const WelComeDashboard = (user) => {
const {name, picture, role, email, createdDate, createdTime} = user.user
    return (
        <>
        <div className='flex flex-col justify-center items-center gap-3 pb-[15%]'>
            <img className=' h-[120px] md:h-[180px] rounded-full' src={picture ||userimg} alt="" />
            <h1 className='font-semibold text-xl md:text-3xl'>Welcome! {name}</h1>
            <p>{email}</p>
            <p className='md:text-2xl text-xl font-semibold px-3 md:px-5 py-2 md:py-3 shadow-2xl shadow-accent rounded-xl'>{role.charAt(0).toUpperCase() + role.slice(1)}</p>
            <div className='flex md:text-2xl justify-center items-center gap-3'>
                <p className=' font-semibold'>Joined on:</p>
                <div className='flex justify-center items-center gap-3'>
                <p className='font-semibold'>{createdDate}</p>
                <p className=' font-semibold'>{createdTime}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default WelComeDashboard;