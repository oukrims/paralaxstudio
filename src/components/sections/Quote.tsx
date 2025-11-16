'use client';

import TextAnimation from '@/components/ui/scroll-text';
import ImageMouseTrail from '@/components/ui/mousetrail';

export type QuoteContent = {
  scrollPrompt?: string;
  texts: {
    text: string;
    direction?: 'left' | 'right' | 'up' | 'down';
    alignment?: 'left' | 'center' | 'right';
    letterAnime?: boolean;
    lineAnime?: boolean;
  }[];
  images: {
    src: string;
    alt?: string;
  }[];
};

type QuoteProps = {
  content?: QuoteContent;
};

export default function Quote({ content }: QuoteProps) {
  // Return null if no content provided
  if (!content || !content.images || !content.texts) {
    return null;
  }

  const imageUrls = content.images.map(img => img.src);

  return (
    <div>
      <ImageMouseTrail
        items={imageUrls}
        maxNumberOfImages={5}
        distance={25}
        imgClass='sm:w-40 w-28 sm:h-48 h-36'
      >
        {content.scrollPrompt && (
          <div className='h-[550px] grid place-content-center'>
            <h1 className='text-5xl font-semibold'>{content.scrollPrompt}</h1>
          </div>
        )}

        {content.texts.map((item, index) => {
          const alignmentClass =
            item.alignment === 'left' ? 'text-left items-start' :
            item.alignment === 'right' ? 'text-right items-end' :
            'text-center items-center';

          const textClass = item.alignment === 'right' ? 'ml-auto' : item.alignment === 'left' ? 'mr-auto' : 'mx-auto';

          return (
            <div key={index} className={`h-[80vh] flex flex-col justify-center ${alignmentClass}`}>
              <TextAnimation
                as={item.letterAnime ? 'p' : 'h2'}
                text={item.text}
                direction={item.direction}
                letterAnime={item.letterAnime}
                lineAnime={item.lineAnime}
                classname={`xl:text-8xl text-7xl max-w-4xl ${textClass} font-medium`}
                variants={{
                  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                  visible: {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                    transition: { ease: 'linear', duration: 0.2 },
                  },
                }}
              />
            </div>
          );
        })}
      </ImageMouseTrail>
    </div>
  );
}
