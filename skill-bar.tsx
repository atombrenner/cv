export type SkillBarProps = {
  active: number // active recallable knoledge
  passive?: number // maximum reach knowledge
}

export const SkillBar = ({ active, passive = active }: SkillBarProps) => {
  const type = (level: number) =>
    active >= level ? 'active' : passive >= level ? 'passive' : 'none'
  return (
    <div class="mt-0 mb-1 leading-[0.1rem] ">
      <Tick type={type(1)} />
      <Tick type={type(2)} />
      <Tick type={type(3)} />
      <Tick type={type(4)} />
      <Tick type={type(5)} />
      <Tick type={type(6)} />
    </div>
  )
}

export const SkillBar2 = () => {
  const type = (level: number) => (level < 5 ? 'active' : 'none')

  return (
    <>
      <Tick type={type(1)} />
      <Tick type={type(2)} />
      <Tick type={type(3)} />
      <Tick type={type(4)} />
      <Tick type={type(5)} />
      <Tick type={type(6)} />
    </>
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
    class={`${tickColors[type]} inline-block w-4 h-[6px] mr-[2px] border border-solid border-amber-800`}
  />
)
