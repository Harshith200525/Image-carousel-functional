import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    let index = {
        currImageIndex: 0,
    }

    const [state, setState] = useState(index)

    let prev = () => {
        if(state.currImageIndex > 0){
            setState({ currImageIndex: state.currImageIndex - 1})
        }else{
            setState({ currImageIndex: images.length - 1})
        }
    }

    let next = () => {
        if(state.currImageIndex < images.length - 1){
            setState({ currImageIndex: state.currImageIndex + 1})
        }else{
            setState({ currImageIndex: 0})
        }
      }

      return <>
      <div className="main-container">
      <div className="btn-container">
      <button onClick={prev} className="left-btn"><ArrowBackIosIcon style={{fill: "white"}}/></button>
      <button onClick={next} className="right-btn"><ArrowForwardIosIcon style={{fill: "white"}}/></button>
      </div>
      <div className="image-span-container">
      <span className="text title">
          {images[state.currImageIndex].title}
      </span>
      <img src={images[state.currImageIndex].img} />
      <span className="text subtitle">
      {images[state.currImageIndex].subtitle}
      </span>
      </div>
      </div>
  </>
}

export default Carousel;