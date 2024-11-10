import { useEffect, useRef, useState } from "react";
import "./Cursor.scss";

const Cursor = () => {
  const cursorDotOutline = useRef<HTMLDivElement>(null);
  const cursorDot = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorEnlarged, setCursorEnlarged] = useState(false);

  /**
   * Mouse Moves
   */
  const onMouseMove = (event: { pageX: number; pageY: number; }) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    positionDot(event);
  };
  const onMouseEnter = () => {
    setCursorVisible(true);

  };
  const onMouseLeave = () => {
    setCursorVisible(false);

  };
  const onMouseDown = () => {
    setCursorEnlarged(true);


  };
  const onMouseUp = () => {
    setCursorEnlarged(false);
    console.log(cursorEnlarged, cursorVisible)

  };
  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  /**
   * Hooks
   */
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", onResize);
    requestRef.current = requestAnimationFrame(animateDotOutline);

    // Handle Link Hovers
    handleLinkHovers();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }

    };
  }, []);

  let { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;


  function positionDot(e: { pageX: number; pageY: number; }) {
    setCursorVisible(true);

    // Position the dot
    endX = e.pageX;
    endY = e.pageY;
    if (cursorDot.current) {
      cursorDot.current.style.top = endY + "px";
      cursorDot.current.style.left = endX + "px";
    }

  }



  /**
   * Toggle Cursor Size
   */

  useEffect(() => {
    if (cursorEnlarged) {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
        cursorDotOutline.current.style.transform =
          "translate(-50%, -50%) scale(5)";
      }

    } else {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorDotOutline.current.style.transform =
          "translate(-50%, -50%) scale(1)";
      }

    }
    if (cursorVisible) {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.opacity = "1";
        cursorDotOutline.current.style.opacity = "1";
      }

    } else {
      if (cursorDot.current && cursorDotOutline.current) {
        cursorDot.current.style.opacity = "0";
        cursorDotOutline.current.style.opacity = "0";
      }

    }
  },
    [cursorEnlarged, cursorVisible])


  /**
   * Handle LInks
   * Applies mouseover/out hooks on all links
   * to trigger cursor animation
   */
  function handleLinkHovers() {
    document.querySelectorAll(".hovered").forEach((el) => {
      el.addEventListener("mouseover", () => {
        setCursorEnlarged(true);

      });
      el.addEventListener("mouseout", () => {
        setCursorEnlarged(false);

      });
    });
  }

  /**
   * Animate Dot Outline
   * Aniamtes cursor outline with trailing effect.
   * @param {number} time
   */
  const animateDotOutline = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      if (cursorDotOutline.current) {
        cursorDotOutline.current.style.top = y + "px";
        cursorDotOutline.current.style.left = x + "px";
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div ref={cursorDotOutline} id="cursor-dot-outline" />
      <div ref={cursorDot} id="cursor-dot" />
      {/* <div ref={cursorDot} id="github-dot"><FontAwesomeIcon icon={faGithub}/></div> */}
    </>
  );
};
export default Cursor;
