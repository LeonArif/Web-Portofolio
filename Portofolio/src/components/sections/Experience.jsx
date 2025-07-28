import ExperienceTimeline from './ExperienceTimeline'

export default function Experience({ visible }) {
  return (
    <section
      id='experience'
      className="scroll-mt-24 -mt-8 w-full pb-24 font-bold flex flex-col items-center relative"
      style={{ minHeight: 1400 }}
    >
      {visible && <ExperienceTimeline />}
    </section>
  )
}