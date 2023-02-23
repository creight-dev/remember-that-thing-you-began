import "./style.css"
import "@fontsource/sora/variable.css"
import "@fontsource/fira-code/variable.css"

import Layout from "~newtab/layout/Layout"
import HistoryPanel from "~newtab/layout/HistoryPanel"
import { ArchiveTray, ClockCounterClockwise, MapPin } from "phosphor-react"
import TabbedPanels from "~newtab/layout/TabbedPanels"

const tabs = [
  {
    label: "Browsing Activity",
    icon: ClockCounterClockwise,
    current: true
  },
  { label: "Visits", icon: MapPin },
  { label: "Sessions", icon: ArchiveTray }
]

const panels = [
  <HistoryPanel />,
  <div>Visits Panel</div>,
  <div>Sessions Panel</div>
]
export type ChromeExtensionAPIHistoryItem = chrome.history.HistoryItem
const NewTabPage = () => {
  return (
    <Layout>
      <TabbedPanels tabs={tabs} panels={panels} />
    </Layout>
  )
}
export default NewTabPage
