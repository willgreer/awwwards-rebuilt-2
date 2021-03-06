import React, { useEffect, useRef,  useState } from "react"
import { useGlobalStateContext } from "../../context/globalContext"
//Context
//Styled Components
import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles"


const isBrowser = typeof window !== "undefined"

//Custom Hook
function useWindowSize() {
  function getSize() {
    return {
      width: isBrowser && window.innerWidth,
      height: isBrowser && window.innerHeight,
    }
  }
  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}




const HomeBanner = ({ onCursor }) => {
//   const size = useWindowSize()
//   const { currentTheme } = useGlobalStateContext()
//   let canvas = useRef(null)
//   useEffect(() => {
    // let renderingElement = canvas.current
    // create an offscreen canvas only for the drawings
    // let drawingElement = renderingElement.cloneNode()
    // let drawingCtx = drawingElement.getContext("2d")
    // let renderingCtx = renderingElement.getContext("2d")
    // let lastX
    // let lastY
    // let moving = false

//     renderingCtx.globalCompositeOperation = "source-over"
//     renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
//     renderingCtx.fillRect(0, 0, size.width, size.height)

//     renderingElement.addEventListener("mouseover", ev => {
//       moving = true
//       lastX = ev.pageX - renderingElement.offsetLeft
//       lastY = ev.pageY - renderingElement.offsetTop
//     })

//     renderingElement.addEventListener("click", ev => {
//       moving = true
//       lastX = ev.pageX - renderingElement.offsetLeft
//       lastY = ev.pageY - renderingElement.offsetTop
//     })

//     renderingElement.addEventListener("mouseup", ev => {
//       moving = false
//       lastX = ev.pageX - renderingElement.offsetLeft
//       lastY = ev.pageY - renderingElement.offsetTop
//     })

//     renderingElement.addEventListener("mousemove", ev => {
//       if (moving) {
//         drawingCtx.globalCompositeOperation = "source-over"
//         renderingCtx.globalCompositeOperation = "destination-out"
//         let currentX = ev.pageX - renderingElement.offsetLeft
//         let currentY = ev.pageY - renderingElement.offsetTop
//         drawingCtx.lineJoin = "round"
//         drawingCtx.moveTo(lastX, lastY)
//         drawingCtx.lineTo(currentX, currentY)
//         drawingCtx.closePath()
//         drawingCtx.lineWidth = 120
//         drawingCtx.stroke()
//         lastX = currentX
//         lastY = currentY
//         renderingCtx.drawImage(drawingElement, 0, 0)
//       }
//     })
//   }, [currentTheme, size.height, size.width])

  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          src={require("../../assets/video/video.mp4")}
        />
      </Video>

      <BannerTitle variants={container} initial="initial" animate="animate">
        <Headline variants={item}>DIG</Headline>
        <Headline variants={item}>DEEP</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
