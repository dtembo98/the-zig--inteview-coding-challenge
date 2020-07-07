import * as React from "react";
import Button from "react-bootstrap/Button";
import "./loadmore.style.css";

const LoadMoreButton: React.FC<any> = (props: any) => (
  <div className="loadmore">
    <Button onClick={props.onclick} variant="warning">
      Load More
    </Button>
  </div>
);
export default LoadMoreButton;
