import Tippy, { TippyProps } from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

type TooltipProps = {} & TippyProps

const Tooltip = (props: TooltipProps) => <Tippy {...props} />

export { Tooltip }
