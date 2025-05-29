import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data/itemlist'
import { cn } from '../lib/utils';
export function Grid() {
    return (
      <div id='Skills' className="px-4 sm:px-6 md:px-8">
        <BentoGrid>
          {gridItems.map(({ img, title, description, imgClassName, id }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              img={
                typeof img === "object" && img !== null
                  ? img.img1 || undefined
                  : img
              }
              className={cn(
                id === 1 && "sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2",
                id === 3 && "sm:col-span-2 md:col-span-2"
              )}
              imgClassName={imgClassName}
            />
          ))}
        </BentoGrid>
      </div>
    );
  }
