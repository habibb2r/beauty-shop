import userimg from '../../assets/basic-icons/user.png'
import SectionTitle from './SectionTitle';

const WelComeDashboard = (user) => {
const {name, picture, role, email, createdDate, createdTime} = user.user
    return (
        <>
        <div className='flex flex-col justify-center items-center gap-3'>
            <img className='h-[200px]' src={picture ||userimg} alt="" />
            <h1 className='font-semibold'>Welcome...! {name}</h1>
        </div>
        </>
    );
};

export default WelComeDashboard;