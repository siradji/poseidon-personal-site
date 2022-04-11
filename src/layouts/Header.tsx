import {Container} from "@components/commons/Container";
import {InternalLink} from "@components/commons/Links/InternalLink";
import {SiteLogo} from "@components/commons/SiteLogo";

export function Header (): JSX.Element {
  return (
    <header>
      <Container>
        <nav className='flex items-center py-6 shadow-md'>
          <SiteLogo />
          <div className='flex items-center ml-auto space-x-4'>
            <InternalLink pathname='/' text='Home' testId='Header.Links.Home' />
            <InternalLink pathname='/work' text='Work' testId='Header.Links.Work' />
            <InternalLink pathname='/about' text='About' testId='Header.Links.About' />
            <InternalLink pathname='/contact' text='Contact' testId='Header.Links.Contact' />
            <InternalLink pathname='/blog' text='Blog' testId='Header.Links.Blog' />
          </div>
        </nav>
      </Container>
    </header>
  )
}


