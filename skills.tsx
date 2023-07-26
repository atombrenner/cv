import { ComponentChildren, VNode } from 'preact'

export const Skills = () => (
  <div>
    <h3 class="text-xl font-bold mb-2">Skills</h3>
    <p>
      🔗
      <a href="https://github.com/atombrenner" class="underline text-blue-700 ml-1">
        github.com/atombrenner
      </a>
    </p>
    <Skill name="Languages">
      German: native
      <br />
      English: fluent (C1)
    </Skill>
    <Skill name="Developer Experience" />
    deployment pipelines ergonomic features observability log analytics Agile Principles
    <Skill name="AWS Cloud Native Web Apps" />
    <p class="font-bold mt-4">Domain Driven Design</p>
    {/* Technologies */}
    <Skill name="Programming Languages">
      Typescript, Rust, C++, C#,
      <br />
      Scala, Kotlin, Clojure, Groovy, Ruby, Python, ...
    </Skill>
    <Skill name="Runtimes">NodeJS, JVM, .NET, Browser</Skill>
    <Skill name="Databases">
      DynamoDB, MySQL, PostgreSQL, Oracle, SQLServer, MongoDB, Elasticsearch, Redis
    </Skill>
    <Skill name="Platforms">Web, AWS, Linux, Windows</Skill>
    <Skill name="Fan of">
      Gregor Hohpe, Eric Evans, Adrian&nbsp;Cockroft, Martin Fowler, Stefan&nbsp;Tilkov,
      Bjarne&nbsp;Stroustroup, Tom DeMarco
    </Skill>
  </div>
)

type SkillProps = {
  name: string
  children?: ComponentChildren
}

const Skill = ({ name, children }: SkillProps) => (
  <>
    <h4 class="font-bold mt-4 mb-1">{name}</h4>
    <p>{children}</p>
  </>
)
