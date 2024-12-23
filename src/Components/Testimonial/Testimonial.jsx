import SectionTitle from "../Reuseable/SectionTitle";


const Testimonial = () => {
    return (
        <div>
           <SectionTitle title={'Testimonials'}></SectionTitle>
            <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col justify-start items-start gap-5">
                    <h1>Name</h1>
                    <p>Review Description, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quibusdam qui perferendis distinctio soluta iusto dolorem libero iure, laboriosam voluptas, cumque quia enim veniam. Quod perspiciatis repellendus nobis possimus nulla?</p>
                    <p>Rating **</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-5">
                    <h1>Name</h1>
                    <p>Review Description, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quibusdam qui perferendis distinctio soluta iusto dolorem libero iure, laboriosam voluptas, cumque quia enim veniam. Quod perspiciatis repellendus nobis possimus nulla?</p>
                    <p>Rating **</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-5">
                    <h1>Name</h1>
                    <p>Review Description, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quibusdam qui perferendis distinctio soluta iusto dolorem libero iure, laboriosam voluptas, cumque quia enim veniam. Quod perspiciatis repellendus nobis possimus nulla?</p>
                    <p>Rating **</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;