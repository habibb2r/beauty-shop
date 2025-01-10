import React from 'react';

const MyOrdersCard = (data) => {
    console.log(data)
    return (
        <div className="flex flex-col  justify-between items-center gap-5 md:gap-1 shadow-lg shadow-accent px-3 py-3 md:py-2 rounded-2xl">
              <div className="flex flex-col md:flex-row justify-center items-center gap-3 bg-slate-100 px-5 py-3 rounded-md">
                <img
                  className="h-[150px] rounded-lg shadow-lg"
                  src={data?.item?.itemImage}
                  alt=""
                />
                <div>
                  <h1 className="font-bold text-xl">{data?.item?.itemName}</h1>
                  <div>
                    <p className="font-semibold">
                      Price :{" "}
                      <span className="font-bold text-slate-600">
                        {data?.item?.itemPrice}{" "}
                      </span>{" "}
                      TK
                    </p>
                    <p className="font-semibold">
                      Quantity :{" "}
                      <span className="font-bold text-slate-600">
                        {data?.item?.quantity}
                      </span>
                    </p>
                    <p className="font-semibold">
                      Total Price :{" "}
                      <span className="font-bold text-slate-600">
                        {data?.item?.totalPrice}{" "}
                      </span>{" "}
                      TK
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-3">
              <p className=''>Address: <span className='font-semibold text-slate-700'>{data?.item?.orderData?.address}</span></p>
              <p className=''>Phone: <span className='font-semibold text-slate-700'>{data?.item?.orderData?.phone}</span></p>
              <p className=''>Delivery: <span className={`font-semibold ${data?.item?.delivery === 'Pending' ? 'badge badge-warning' : 'badge badge-success'}`}>{data?.item?.delivery}</span></p>
              </div>
            </div>
    );
};

export default MyOrdersCard;