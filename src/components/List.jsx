import React, { useState } from "react";
import "../styles/styles.css";
const List = (props) => {
  const { numItems, itemHeight, renderItem, windowHeight } = props;
  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = numItems * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    numItems - 1, // don't render past the end of the list
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  const items = [];

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
  for (let i = startIndex; i <= endIndex; i++) {}

  const onScroll = (e) => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div className="scroll" onScroll={onScroll}>
      <div style={{  height: `${innerHeight}px` , position: "relative" }}>
      {items}
      </div>
    </div>
  );
};
export default List;
