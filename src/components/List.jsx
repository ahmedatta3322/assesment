import React, { useState } from "react";
import "../styles/styles.css";
const List = (props) => {
  //Virtualized  List Calculation using buffer
  const { numItems, itemHeight, renderItem, windowHeight } = props;
  const [scrollTop, setScrollTop] = useState(0);
  const num_buffered_rows = 2;
  const innerHeight = numItems * itemHeight;

  //Used to calculated starting row
  const startIndex = Math.max(
    Math.floor(scrollTop / itemHeight - num_buffered_rows),
    0
  );

  //Used to calculated ending row
  const endIndex = Math.min(
    numItems - 1,
    Math.floor((scrollTop + windowHeight) / itemHeight + num_buffered_rows)
  );

  const items = [];

  // Loop to render the visible part and call the function on the main App component
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          position: "absolute",
          top: `${i * itemHeight}px`,
          width: "100%",
        },
      })
    );
  }
  //Event Listener to get scrolled area
  const onScroll = (e) => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div className="scroll" onScroll={onScroll}>
      <div
        style={{
          height: `${innerHeight}px`,
          position: "relative",
          width: "99vw",
        }}
      >
        {items}
      </div>
    </div>
  );
};
export default List;
