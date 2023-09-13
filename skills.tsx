import { ComponentChildren } from 'preact'

export const Skills = () => (
  <>
    <p class="mb-6">
      🔗
      <a href="https://github.com/atombrenner" class="underline text-blue-700  ml-1">
        github.com/atombrenner
      </a>
    </p>
    <h3 class="text-lg font-bold mb-2">Skills</h3>
    <Skill name="Languages">
      German: native
      <br />
      English: fluent
    </Skill>
    <Skill name="AWS Cloud Native Web Apps">serverless whenever possible</Skill>
    <p class="font-bold mt-4">Domain Driven Design</p>
    {/* Technologies */}
    <Skill name="Programming Languages">
      Typescript, Rust, C++, C#,
      <br />
      Scala, Kotlin, Clojure, Groovy, Ruby, Python, ...
    </Skill>
    <Skill name="Runtimes">NodeJS, JVM, .NET, Browser</Skill>
    <Skill name="Web Apps">React, NextJs, Remix, Astro, ...</Skill>
    <Skill name="Databases">
      DynamoDB, MySQL, PostgreSQL, Oracle, SQLServer, MongoDB, Elasticsearch, Redis
    </Skill>
    <Skill name="Platforms">Web, AWS, Linux, Windows</Skill>
    <Skill name="Developer Experience" />
    Build & Deployment pipelines, Tooling, DevOps
    <Skill name="Fan of">
      Gregor Hohpe, Eric Evans, Adrian&nbsp;Cockroft, Martin Fowler, Stefan&nbsp;Tilkov,
      Bjarne&nbsp;Stroustroup, Tom DeMarco, Christian Deger
    </Skill>
  </>
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
