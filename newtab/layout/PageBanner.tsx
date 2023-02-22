import { BellSimpleRinging, BellZ, HourglassMedium } from "phosphor-react"
import React from "react"

import DropdownMenu from "~components/shared/DropdownMenu"

export type PageBannerProps = {}

const PageBanner = ({}: PageBannerProps) => {
  return (
    <div className="border-neutral-7 flex w-full flex-shrink-0 flex-col rounded-lg border">
      <div className="flex items-center justify-between p-6">
        <div>
          <h1 className="text-neutral-12 text-4xl font-bold tracking-wider">
            Good evening, Bit
          </h1>
          <p className="mt-1 text-lg">
            Here’s what’s going on with your team Designspace
          </p>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-xl font-normal">Tuesday</span>
          <span className="text-neutral-10 text-base">21 February, 2023</span>
        </div>
      </div>
      <div className="border-neutral-7 flex h-16 items-center justify-between border-t p-6">
        <div className="flex items-center gap-x-6">
          <span className="text-neutral-10 text-sm font-medium">
            What are you working on today?
          </span>
          <DropdownMenu />
        </div>
        <div className="flex gap-x-2">
          <span className="inline-flex h-6 w-6 items-center justify-center">
            <HourglassMedium
              size={20}
              weight="regular"
              className="text-neutral-11"
            />
          </span>
          <span className="inline-flex h-6 w-6 items-center justify-center">
            <BellSimpleRinging
              size={20}
              weight="regular"
              className="text-neutral-11"
            />
          </span>
          <span className="inline-flex h-6 w-6 items-center justify-center">
            <BellZ size={20} weight="regular" className="text-neutral-11" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default PageBanner
