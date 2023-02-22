import Icon from "~components/shared/Icon"
import { iconPaths } from "~components/shared/iconPaths"

import "./style.css"

function PopupPanel() {
  return (
    <div className="w-[336px] bg-neutral-1 p-4 text-neutral-12">
      <div className="flex flex-col">
        <h1 className="text-xl font-medium text-center tracking-wide">
          Trigger a modal
        </h1>
        <div className="mt-8 mb-12 grid grid-cols-3 gap-x-2">
          <button className="rounded-xl bg-neutral-3 p-4 flex flex-col gap-y-2 items-center">
            <span className="inline-block h-10 w-10">
              <Icon path={iconPaths.bug} />
            </span>
            <div className="text-lg">Simple</div>
          </button>
          <button className="rounded-xl bg-neutral-3 p-4 flex flex-col gap-y-2 items-center">
            <span className="inline-block h-10 w-10">
              <Icon path={iconPaths.idea} />
            </span>
            <div className="text-lg">Custom</div>
          </button>
          <button className="rounded-xl bg-neutral-3 p-4 flex flex-col gap-y-2 items-center">
            <span className="inline-block h-10 w-10">
              <Icon path={iconPaths.thought} />
            </span>
            <div className="text-lg">Form</div>
          </button>
        </div>
        <div className="text-center text-base text-neutral-11">
          Made with love by Bitwhys
        </div>
      </div>
    </div>
  )
}

export default PopupPanel
