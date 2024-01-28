/* eslint-disable no-param-reassign */
import { useEffect } from "react";

const useLazyLoading = (imgSelector, config) => {
  const loadImages = (image) => {
    image.src = image.dataset.src;
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);

    const imgs = document.querySelectorAll(imgSelector);
    imgs.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, [imgSelector, config]);
};

export default useLazyLoading;
