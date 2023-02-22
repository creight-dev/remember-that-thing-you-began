import Icon from "~components/shared/Icon"
import { iconPaths } from "~components/shared/iconPaths"

import "./style.css"

function PopupPanel() {
  return (
    <div className="bg-neutral-1 text-neutral-12 w-[336px] p-4">
      <div className="flex flex-col">
        <h1 className="text-center text-xl font-medium tracking-wide">
          Trigger a modal
        </h1>
        <div className="mt-8 mb-12 grid grid-cols-3 gap-x-2">
          <button className="bg-neutral-3 flex flex-col items-center gap-y-2 rounded-xl p-4">
            <span className="inline-block h-10 w-10">
              <Icon path={iconPaths.bug} />
            </span>
            <div className="text-lg">Simple</div>
          </button>
          <button className="bg-neutral-3 flex flex-col items-center gap-y-2 rounded-xl p-4">
            <span className="inline-block h-10 w-10">
              <Icon path={iconPaths.idea} />
            </span>
            <div className="text-lg">Custom</div>
          </button>
          <button className="bg-neutral-3 flex flex-col items-center gap-y-2 rounded-xl p-4">
            <span className="inline-block h-10 w-10">
              <Icon path={iconPaths.thought} />
            </span>
            <div className="text-lg">Form</div>
          </button>
        </div>
        <div className="text-neutral-11 text-center text-base">
          Made with love by Bitwhys
        </div>
      </div>
    </div>
  )
}

export default PopupPanel
