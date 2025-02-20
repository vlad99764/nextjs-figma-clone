"use client";

import { useMemo } from "react";
import Image from "next/image";

import { getShapeInfo } from "@/lib/utils";

const LeftSidebar = ({ allShapes }: { allShapes: Array<any> }) => {
  // memoize the result of this function so that it doesn't change on every render but only when there are new shapes
  const memoizedShapes = useMemo(
    () => (
      <section className=" h-full sticky left-0 pb-20 flex flex-col select-none overflow-y-auto border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 max-lg:hidden min-w-[180px]">
        <h2 className="border border-primary-grey-200 px-5 py-4 text-xs uppercase">Layers</h2>
        <div className="flex flex-col flex-1">
          <div className="flex flex-col flex-1">
            {allShapes?.map((shape: any) => {
              const info = getShapeInfo(shape[1]?.type);

              return (
                <div
                  key={shape[1]?.objectId}
                  className="group my-1 flex items-center gap-2 px-5 py-2.5 hover:cursor-pointer hover:bg-primary-green hover:text-primary-black"
                >
                  <Image
                    src={info?.icon}
                    alt='Layer'
                    width={16}
                    height={16}
                    className='group-hover:invert'
                  />
                  <h3 className='text-sm font-semibold capitalize'>{info.name}</h3>
                </div>
              );
            })}
          </div>
          <div className="text-sm flex flex-col px-3 py-4 gap-2 self-center">
            <p>Developer: Vladyslav</p>
            <p className="text-primary-green">© 2024, FigMan</p>
          </div>
        </div>
      </section>
    ),
    [allShapes?.length]
  );

  return memoizedShapes;
};

export default LeftSidebar; 