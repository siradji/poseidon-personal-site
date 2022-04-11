import {Container} from "@components/commons/Container";
import {FaMedium, FaDev, FaLinkedinIn, FaGithub} from "react-icons/fa";
import {SkillsPill} from "@components/homepage/SkillsPill";

export function InfoComponent (): JSX.Element {
  return (
   <Container>
     <div className='w-full md:w-1/2 text-white space-y-4 '>
       <div className='text-5xl'>Hello I am Suraj</div>
       <div className='text-2xl'>A Seasoned full stack Web3 developer based in Malta</div>
       <div className='flex items-center space-x-3'>
         <SkillsPill skill='Ethereum' />
         <SkillsPill skill='Solidity' />
         <SkillsPill skill='React' />
         <SkillsPill skill='Node' />
       </div>
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
