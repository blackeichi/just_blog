import Image from "next/image";

export default function ImgComponent({
  width,
  height,
  alt,
  src,
}: {
  width: number;
  height: number;
  alt: string;
  src: string;
}) {
  return <Image alt={alt} src={src} width={width} height={height} />;
}
