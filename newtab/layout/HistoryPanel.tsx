import React, { Fragment, useEffect, useState } from "react"
import type { ChromeExtensionAPIHistoryItem } from "~newtab"
import ReactJson from "react-json-view"

export type HistoryPanelProps = {}

const MAX_HISTORY_RESULTS = 500000
const HistoryPanel = ({}: HistoryPanelProps) => {
  const [historyItems, setHistoryItems] = useState<
    ChromeExtensionAPIHistoryItem[]
  >([])

  const handleOnVisited = (item: ChromeExtensionAPIHistoryItem) => {
    setHistoryItems((v) => {
      const items = v.filter((his) => his.id !== item.id)
      return [...items, item].reverse()
    })
  }

  // Get initial data
  useEffect(() => {
    chrome.history
      .search({ maxResults: MAX_HISTORY_RESULTS, text: "" })
      .then((_historyItems) => {
        setHistoryItems(_historyItems)
      })
  }, [])

  useEffect(() => {
    chrome.history.onVisited.addListener(handleOnVisited)

    return () => chrome.history.onVisited.removeListener(handleOnVisited)
  }, [])

  return (
    <div className="flex flex-col gap-y-7 overflow-y-auto">
      {historyItems.map((item) => (
        <div className="bg-neutral-2 border-neutral-6 w-full rounded-xl border p-4">
          <ReactJson
            src={item}
            theme="summerfruit"
            indentWidth={2}
            iconStyle="square"
            style={{ fontSize: "1rem", background: "#1C1C1F" }}
          />
        </div>
      ))}
    </div>
  )
}

export default HistoryPanel
