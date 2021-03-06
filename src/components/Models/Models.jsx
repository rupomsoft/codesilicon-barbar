import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Autoplay } from "swiper";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Models.css";
import { useQuery } from 'react-query';
import Loader from '../../helper/Loading';
import { Card } from 'react-bootstrap';

export default function Models() {
    const [modelPhotos, setModelPhotos] = useState();
    const { isLoading, error, data, isFetching } = useQuery("models", () =>
        axios.get(
            "https://testimonialapi.toolcarton.com/api"
        ).then(({ data }) => data)
    );

    useEffect(() => setModelPhotos(data), [data])

    // if(isLoading || isFetching){
    //     return <Loader/>
    // }


    return (
        <div data-aos="fade-right  ">
           
            <div className='my-5'>
                <Swiper
                    watchSlidesProgress={true}
                    slidesPerView={6}
                    className="mySwiper"
                    loop={true}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    modules={[Autoplay]}
                >
                    {
                        modelPhotos?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="h-100 w-100 modelCard position-relative">
                                        <div className="h-100 w-100 modelPhoto">
                                            <Card className=" text-white">
                                                {/* <Card.Img src={item.picture.large} alt="Card image" /> */}
                                                <img
                                                    src={item.avatar}
                                                    className="img-fluid  shadow-2-strong"
                                                    alt="Models"
                                                />
                                                <Card.ImgOverlay className='overlayText d-none d-md-block'>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <p  style={{ fontSize: ".7em" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt dolore rerum in a ipsum.</p>
                                                    <BsFacebook />
                                                    <BsInstagram className='ms-3' />
                                                </Card.ImgOverlay>
                                            </Card>
                                            {/* <img src={item.picture.large} alt="" className='h-100 w-100' /> */}
                                        </div>
                                        {/* <div className="modelOverlay ">
                                            <p  style={{ fontSize: ".7em" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum deserunt dolore rerum in a ipsum.</p>
                                            <BsFacebook />
                                            <BsInstagram className='ms-3' />

                                        </div> */}
                                    </div>


                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </div>

    )
}
