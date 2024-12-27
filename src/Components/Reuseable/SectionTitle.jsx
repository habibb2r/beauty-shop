import t1 from '../../assets/title1.png'
import t2 from '../../assets/title2.png'

const SectionTitle = ({title}) => {
    return (
        <div className="mx-[15%] py-4 md:py-7">
        <p className="divider divider-secondary mx-auto "><img className="h-[40px]" src={t2} alt="" /></p>
      <h1 className="text-center font-semibold text-xl md:text-3xl py-2">
        {title}
      </h1>
      <p className="divider divider-success mx-auto"><img className="h-[40px]" src={t1} alt="" /></p>
      </div>
    );
};

export default SectionTitle;