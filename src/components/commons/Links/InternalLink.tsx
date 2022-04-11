import Link from 'next/link'
import {PropsWithChildren} from "react";
import classNames from "classnames";
import {useRouter} from "next/router";

export function InternalLink (props: PropsWithChildren<{pathname: string, text?: string, className?: string, testId: string}>): JSX.Element {
  const {asPath} = useRouter()
  const linkColour =  asPath === props.pathname ? 'text-pinkish shadow-md' : 'text-white'

  return (
    <div className={classNames('hover:text-gray-500 text-medium', props.className, linkColour)} data-testid={props.testId} >
      <Link href={{pathname:props.pathname}} passHref>
        <a className='contents'>
          {props.children ?? props.text}
        </a>
      </Link>
    </div>
  )
}
