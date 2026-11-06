import { cls } from "@/lib/utils";

interface ImageOrVideoProps {
  imageSrc?: string;
  videoSrc?: string;
  alt?: string;
  className?: string;
}

const ImageOrVideo = ({
  imageSrc,
  videoSrc,
  alt,
  className = "",
}: ImageOrVideoProps) => {
  if (videoSrc) {
    return (
      <video
        src={videoSrc}
        aria-label={alt || videoSrc}
        className={cls("w-full h-full min-h-0 object-cover rounded", className)}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  if (imageSrc) {
    return (
      <img
        src={imageSrc}
        alt={alt ?? imageSrc}
        className={cls("w-full h-full min-h-0 object-cover rounded", className)}
      />
    );
  }

  return null;
};

export default ImageOrVideo;
