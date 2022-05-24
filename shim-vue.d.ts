import 'vue'

// https://slailcp.github.io/?type=vue-tv-focusable#7.%E6%89%80%E6%9C%89%E5%8F%AF%E9%85%8D%E7%BD%AE%E9%A1%B9

type FindFocusType = 1 | 0

interface TVOption {
  /**
   * @default 'focus'
   */
  focusClassName?: string
  /**
   * @default 20
   */
  initDis?: number
  /**
   * @default 1
   */
  findFocusType?: FindFocusType
  KEYS?: {
    KEY_LEFT: number[]
    KEY_RIGHT: number[]
    KEY_UP: number[]
    KEY_DOWN: number[]
  }
  /**
   * @default 50
   */
  offsetDistance?: number
  /**
   * @default 500
   */
  longPressTime?: number
  /**
   * @default false
   */
  distanceToCenter?: boolean
  limitingEl?: Element
  /**
   * @default true
   */
  formAutofocus?: boolean
}

interface TV {
  // 配置项
  itemAttrname: string
  scrollEl: Element | null
  limitingEl: Element | null
  smoothTime: number
  spacingTime: number
  scrollSpeedX: number
  scrollSpeedY: number
  scrollSpeed: number
  init(option: TVOption)

  setScrollEl(el: Element | null): void
  resetScrollEl(): void

  // reset
  resetFocusClassName(): void
  resetInitDis(): void
  resetFindFocusType(): void
  resetKEYS(): void
  resetOffsetDistance(): void
  resetLongPressTime(): void
  resetDistanceToCenter(): void
  resetScrollEl(): void
  resetLimitingEl(): void
  resetFormAutofocus(): void
  reset(): void

  requestFocus(el: Element, animate?: Boolean)
  getElementByPath(path: string): Element
  readXPath(el: Element): string
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $tv: TV
  }
}
