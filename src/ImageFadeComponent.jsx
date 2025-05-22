import { useEffect, useState, useRef } from "react";

const ScrollFadeInImage = ({ src, alt = "Immagine" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default ScrollFadeInImage;
