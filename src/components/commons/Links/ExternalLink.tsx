import {PropsWithChildren} from "react";
import {LinkVariant} from "@components/commons/types";


const ExternalLinkMapper: Record<LinkVariant, string> =  {
  primary: '',
  secondary: ''
}

export function ExternalLink (props: PropsWithChildren<{href: string, testId: string, className?: string, text?:string}>): JSX.Element {
  return (
    <div>
      <a href={props.href} >
        {props.children ?? props.text}
      </a>
    </div>
  )
}
