import React, { useState } from "react";
import "../styles/styles.css";
const List = (props) => {
  const { numItems, itemHeight, renderItem, windowHeight } = props;
  const [scrollTop, setScrollTop] = useState(0);
  const num_buffered_rows = 2;
  const innerHeight = numItems * itemHeight;
  const startIndex = Math.max(Math.floor(scrollTop / itemHeight - num_buffered_rows),0)

  const endIndex = Math.min(
    numItems - 1,
    Math.floor((scrollTop + windowHeight) / itemHeight + num_buffered_rows)
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

  const onScroll = (e) => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div className="scroll" onScroll={onScroll}>
      <div style={{ height: `${innerHeight}px`, position: "relative" }}>
        {items}
      </div>
    </div>
  );
};
export default List;
