
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DisplaySlide, ImageAndAddMore, ImageUpload, SingleCardEvents } from "./Explore.styled";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { Component } from "react";
import { borderRadius } from "polished";



function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        lineHeight: 0,
        background: '#FFFFFF',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px 0px 0px 8px'
      }}
      onClick={onClick}
    ><p style={{
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: 11,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: '#191919'
    }}>More <FaArrowRight style={{ color: '#191919' }} className="ml-2" /></p> </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "none" }}
      onClick={onClick}
    />
  );
}



export default class Spotlight extends Component {
  render() {

    const CreateYourSpotlight = {
      arrows: true,
      infinite: false,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1340,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1049,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    };
    return (
      <DisplaySlide className="bg-paper txt-base">
        <Slider {...CreateYourSpotlight}>
          <SingleCardEvents>
            <ImageUpload>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/21/3938021_10032359.jpg" />
              <h2>Create your
                spotlight</h2>

              <div className="add">
                <FaPlus style={{ color: '#FFFFFF' }} />
              </div>
            </ImageUpload>
          </SingleCardEvents>

          <SingleCardEvents>
            <ImageAndAddMore>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/89/4690189_11217909.jpg" />
              <h2>Create your
                spotlight</h2>
              <div className="person-profile">
                <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/89/4690189_11217909.jpg" />
              </div>
            </ImageAndAddMore>
          </SingleCardEvents>

          <SingleCardEvents>
            <ImageAndAddMore>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/98/4734598_11276722.jpg" />
              <h2>Create your
                spotlight</h2>
              <div className="person-profile">
                <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/98/4734598_11276722.jpg" />
              </div>
            </ImageAndAddMore>
          </SingleCardEvents>

          <SingleCardEvents>
            <ImageAndAddMore>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/57/4392557_9861457.jpg" />
              <h2>Create your
                spotlight</h2>
              <div className="person-profile">
                <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/57/4392557_9861457.jpg" />
              </div>
            </ImageAndAddMore>
          </SingleCardEvents>


          <SingleCardEvents>
            <ImageAndAddMore>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/12/4783212_11480947.jpg" />
              <h2>Create your
                spotlight</h2>
              <div className="person-profile">
                <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/12/4783212_11480947.jpg" />
              </div>
            </ImageAndAddMore>
          </SingleCardEvents>

          <SingleCardEvents>
            <ImageAndAddMore>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/55/3625355_10451425.jpg" />
              <h2>Create your
                spotlight</h2>
              <div className="person-profile">
                <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/55/3625355_10451425.jpg" />
              </div>
            </ImageAndAddMore>
          </SingleCardEvents>

          <SingleCardEvents>
            <ImageAndAddMore>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/95/4197495_10320028.jpg" />
              <h2>Create your
                spotlight</h2>
              <div className="person-profile">
                <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/95/4197495_10320028.jpg" />
              </div>
            </ImageAndAddMore>
          </SingleCardEvents>

          <SingleCardEvents>
            <ImageAndAddMore>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/07/4515207_12932590.jpg" />
              <h2>Create your
                spotlight</h2>
              <div className="person-profile">
                <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/07/4515207_12932590.jpg" />
              </div>
            </ImageAndAddMore>
          </SingleCardEvents>

          <SingleCardEvents>
            <ImageAndAddMore>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/66/4626766_12783188.jpg" />
              <h2>Create your
                spotlight</h2>
              <div className="person-profile">
                <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/66/4626766_12783188.jpg" />
              </div>
            </ImageAndAddMore>
          </SingleCardEvents>

          <SingleCardEvents>
            <ImageAndAddMore>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/66/4626766_12783188.jpg" />
              <h2>Create your
                spotlight</h2>
              <div className="person-profile">
                <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/66/4626766_12783188.jpg" />
              </div>
            </ImageAndAddMore>
          </SingleCardEvents>

          <SingleCardEvents>
            <ImageAndAddMore>
              <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/66/4626766_12783188.jpg" />
              <h2>Create your
                spotlight</h2>
              <div className="person-profile">
                <img src="https://snusercontent.global.ssl.fastly.net/member-profile-full/66/4626766_12783188.jpg" />
              </div>
            </ImageAndAddMore>
          </SingleCardEvents>

        </Slider>
      </DisplaySlide>
    );
  }
}