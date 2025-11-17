import Image from 'next/image';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
}

export default function ImagePlaceholder({ 
  src = '/placeholder.jpg', 
  alt, 
  className = '',
  aspectRatio = 'video'
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
  };

  return (
    <div className={`relative ${aspectClasses[aspectRatio]} ${className} bg-linear-to-br from-[#4D7C0F]/20 to-[#7A5C33]/20 rounded-2xl overflow-hidden`}>
      {src && src !== '/placeholder.jpg' ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🐄</div>
            <p className="text-[#2F4F2F]/60 font-medium">{alt}</p>
            <p className="text-[#2F4F2F]/40 text-sm mt-2">Replace with actual image</p>
          </div>
        </div>
      )}
    </div>
  );
}
