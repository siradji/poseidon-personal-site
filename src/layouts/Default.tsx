/* eslint-disable no-restricted-imports */
import Head from 'next/head'
import { PropsWithChildren } from 'react'
import {Header} from "./Header";

const title = 'Suraj Auwal - Web3 Developer'
const description = 'A Javascript web 3 developer'

/**
 * Default Layout with <Head> providing default Metadata for SEO
 */
export function Default (props: PropsWithChildren<any>): JSX.Element | null {

  return (
    <div className='flex flex-col min-h-screen antialiased bg-blackish'>
      <Head>
        <meta charSet='UTF-8' />

        <title key='title'>{title}</title>
        <meta key='description' name='description' content={description} />
        <meta key='robots' name='robots' content='follow,index' />
        <meta key='viewport' name='viewport' content='user-scalable=no, width=device-width, initial-scale=1' />
        <meta key='apple-mobile-web-app-capable' name='apple-mobile-web-app-capable' content='yes' />

        <meta key='og:title' name='og:title' content={title} />
        <meta key='og:site_name' name='og:site_name' content={title} />
        <meta key='og:type' name='og:type' content='website' />
        <meta key='og:url' name='og:url' content='https://surajauwal.com/' />
        <meta key='og:description' name='og:description' content={description} />
        <meta key='og:image:type' name='og:image:type' content='image/png' />

        <link rel='canonical' href='' />
        {/*<link rel='icon' href='/favicon.ico' />*/}
        {/*<link rel='icon' type='image/png' sizes='48x48' href='/favicon.png' />*/}
      </Head>
        <Header />
        <main className='flex-grow'>
          {props.children}
        </main>
        <footer />
    </div>
  )
}
