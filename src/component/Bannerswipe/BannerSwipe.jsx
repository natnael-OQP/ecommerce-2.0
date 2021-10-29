import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

export const BannerSwipeWrapper = styled.div`
    position: relative;
    height: 370px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Image = styled.img`
    width: 100%;
    height:370px;
    object-fit: cover;
    
`;

const BannerSwipe = () => {
    return (
        <BannerSwipeWrapper>
                <Carousel
                showArrows={true}
                showStatus={true}
                showIndicators={true}
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={true}
                stopOnHover={true}
                swipeable={true}
                dynamicHeight={true}
                showThumbs={false}
                emulateTouch={true}
                autoFocus={true}
                selectedItem_Values={0}
                interval_Values= {2000}
                transitionTime_Values={1200}
                swipeScrollTolerance_Values={5}
            >
                <div>
                    <Image src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1635096643/contentservice/purplephones.png_S19HuMQIK.png" alt="" />
                </div>
                <div>
                    <Image src="https://ng.jumia.is/cms/Homepage/2021/w42/Slider-(2).jpg" alt="fashion" />
                </div>
                <div>
                    <Image src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1635096456/contentservice/purpled1.png_BJyqwMm8F.png" alt="" />
                </div>
                <div>
                    <Image src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1635096642/contentservice/purplefood.png_BkWKS_MXLF.png" alt="" />
                </div>
                <div>
                    <Image src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1635096650/contentservice/purplegroceriesbanner.png_H1hSOzmLt.png" alt="" />
                </div>
                <div>
                    <Image src="https://ng.jumia.is/cms/Homepage/2021/w42/NG_WATCHES_W42_Slider.jpg" alt="good" />
                </div>
                <div>
                    <Image src="https://ng.jumia.is/cms/Homepage/2021/w42/NG_SUPERMARKET_W42_Slider.jpg" alt="super market" />
                </div>
            </Carousel>
        </BannerSwipeWrapper>
    )
}

export default BannerSwipe
