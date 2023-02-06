/* eslint-disable no-unused-vars */
export interface ImageProps {
  id: number
  height: string
  width: string
  public_id: string
  format: string
  blurDataUrl?: string
}

export interface SharedModalProps {
  index: number
  images?: ImageProps[]
  currentPhoto?: ImageProps
  changePhotoId: (newVal: number) => void
  closeModal: () => void
  navigation: boolean
  direction?: number
}

export interface WeddingInfoModalProps {
  cardTitle: string
  location: string
  locationTitle: string
  time: string
  timeline: WeddingTimelineProps[]
}

export interface WeddingTimelineProps {
  time: string
  icon: JSX.Element
  activity: string
}