import PropTypes from "prop-types";

function CircleHover({ contentDown, contentUp, arrow, direction = "down"}) {
  return (
    <div className={`circle-container circle-container--${direction}`}>
      {contentUp && (
        <div className="circle--content" style={{ display: contentDown ? "none" : "block" }}>
          {contentUp}
        </div>
      )}
      <div className="circle__arrow-svg">
        <div className="arrow-container">{arrow}</div>
        <svg
          className="circle-svg"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
        <circle
          className="circle"
          stroke="#e6e9ee"
          strokeWidth="2"
          r="28"
          cx="30"
          cy="30"
        />
        <circle
          className="animated-circle stroke"
          r="28"
          cx="30"
          cy="30"
        />
        </svg> 
      </div>
      {contentDown && (
        <div className="circle--content" style={{ display: contentUp ? "none" : "block" }}>
          {contentDown}
        </div>
      )}
    </div>
  );
}

CircleHover.propTypes = {
  contentDown: PropTypes.element,
  contentUp: PropTypes.element,
  arrow: PropTypes.element,
  direction: PropTypes.oneOf(["down", "up", "left", "right"]),
};

export default CircleHover;











// import PropTypes from "prop-types";

// function CircleHover({ contentDown, contentUp, arrow, direction = "down" }) {
//   return (
//     <div className={("circle-container", `circle-container--${direction}`)}>
//       {contentUp && (
//         <div className="circle--content group-hover:text-blue-500 transition duration-300">
//           {contentUp}
//         </div>
//       )}

//       <div className="circle__arrow-svg">
//         <div className="arrow-container">{arrow}</div>
//         <svg
//           className="circle-svg"
//           height="100"
//           viewBox="0 0 100 100"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle
//             className="circle"
//             stroke="#e6e9ee"
//             strokeWidth="2"
//             r="28"
//             cx="30"
//             cy="30"
//           />
//           <circle
//             className="animated-circle transition duration-300 group-hover:stroke-blue-500"
//             stroke="#000"
//             strokeWidth="2"
//             fill="none"
//             r="28"
//             cx="30"
//             cy="30"
//           />
//         </svg>
//       </div>

//       {contentDown && (
//         <div className="circle--content group-hover:text-blue-500 transition duration-300">
//           {contentDown}
//         </div>
//       )}
//     </div>
//   );
// }

// // ✅ PropTypes
// CircleHover.propTypes = {
//   contentUp: PropTypes.node,
//   contentDown: PropTypes.node,
//   arrow: PropTypes.node,
//   direction: PropTypes.oneOf(["up", "down", "left", "right"]),
// };

// export default CircleHover;
