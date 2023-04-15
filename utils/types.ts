export interface ImageProps {
  id: number
  height: string
  width: string
  public_id: string
  format: string
  blurDataUrl?: string
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
  activity: string
}