export type SkillBarProps = {
  passive: number // maximum reach knowledge
  active: number // active recallable knoledge
}

export const SkillBar = ({ passive, active }: SkillBarProps) => {
  const type = (level: number) =>
    active >= level ? 'active' : passive >= level ? 'passive' : 'none'
  return (
    <div>
      <Tick type={type(1)} />
      <Tick type={type(2)} />
      <Tick type={type(3)} />
      <Tick type={type(4)} />
      <Tick type={type(5)} />
    </div>
  )
}

const tickColors = {
  active: 'bg-amber-600',
  passive: 'bg-amber-300',
  none: 'bg-white',
} as const

type TickProps = {
  type: keyof typeof tickColors
}

const Tick = ({ type }: TickProps) => (
  <span
    class={`${tickColors[type]} inline-block w-4 h-[7px] mr-[2px] border border-solid border-amber-800`}
  />
)
