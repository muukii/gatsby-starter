import React from "react"

type Props = {
  src: string
}

export const Video = (props: Props) => {
  return <video src={props.src} />
}
