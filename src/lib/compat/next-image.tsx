import React from "react";

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
}

export function Image({
  src,
  alt,
  width,
  height,
  priority,
  className,
  style,
  ...rest
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
      style={style}
      {...rest}
    />
  );
}

export default Image;
