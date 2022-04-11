export function SkillsPill ({skill}: {skill: string}): JSX.Element {
  return (
    <span className='text-white font-medium p-2 min-w-[100px] text-lg text-center shadow-md rounded bg-gradient-to-r from-bluish to-pinkish'>
      {skill}
    </span>
  )
}
