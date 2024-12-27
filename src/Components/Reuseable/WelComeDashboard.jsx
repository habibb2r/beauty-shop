import userimg from '../../assets/basic-icons/user.png'
import SectionTitle from './SectionTitle';

const WelComeDashboard = (user) => {
const {name, picture, role, email, createdDate, createdTime} = user.user
    return (
        <>
        <div className='flex flex-col justify-center items-center gap-3 pb-[15%]'>
            <img className='h-[180px] rounded-full' src={picture ||userimg} alt="" />
            <h1 className='font-semibold text-3xl'>Welcome! {name}</h1>
            <p>{email}</p>
            <p className='text-2xl font-semibold px-5 py-3 shadow-2xl shadow-accent rounded-xl'>{role.charAt(0).toUpperCase() + role.slice(1)}</p>
            <div className='flex justify-center items-center gap-3'>
                <p className='text-2xl font-semibold'>Joined on:</p>
                <div className='flex justify-center items-center gap-3'>
                <p className='text-2xl font-semibold'>{createdDate}</p>
                <p className='text-2xl font-semibold'>{createdTime}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default WelComeDashboard;