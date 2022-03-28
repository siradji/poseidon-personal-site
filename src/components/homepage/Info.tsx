import {Container} from "@components/commons/Container";
import {FaMedium, FaDev, FaLinkedinIn, FaGithub} from "react-icons/fa";

export function InfoComponent (): JSX.Element {
  return (
   <Container>
     <div className='w-full md:w-1/2 text-white space-y-4'>
       <div className='text-5xl'>Hello I am Suraj</div>
       <div className='text-2xl'>A Seasoned full stack Web3 developer based in Malta</div>
       <span className='text-secondary-100'>Smart Contracts - Solidity - React - node - typescript</span>
        <SocialMediaRow />
     </div>
   </Container>
  )
}


function SocialMediaRow (): JSX.Element {
  return (
    <div className='flex items-center space-x-2'>
      <FaMedium className='h-7 w-7 fill-white' />
      <FaDev className='h-7 w-7 fill-white'/>
      <FaLinkedinIn className='h-7 w-7 fill-white'/>
      <FaGithub className='h-7 w-7 fill-white' />
    </div>
  )
}
