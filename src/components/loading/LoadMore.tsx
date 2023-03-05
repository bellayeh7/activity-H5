import React, { useState, useEffect, useRef } from "react";

type Props = {
  onLoadMore: () => void;
};

// const InfiniteScroll: React.FC<Props> = () => {
  const InfiniteScroll: React.FC<Props> = ({ onLoadMore }) => {
  // const children = {};
  // const onLoadMore = {};
  const [isFetching, setIsFetching] = useState(false);

  const bottomOfListRef = useRef<HTMLDivElement>(null);

  const handleObserver: IntersectionObserverCallback = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isFetching) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "20px",
    });

    if (bottomOfListRef.current) {
      observer.observe(bottomOfListRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isFetching) return;

    onLoadMore();
    setIsFetching(false);
  }, [isFetching]);

  return (
    <div>
      {/* {children} */}
      <div ref={bottomOfListRef}></div>
    </div>
  );
};

export default InfiniteScroll;
