import { ComponentChildren } from 'preact'

export const Skills = () => (
  <>
    <h3 class="text-2xl font-medium mb-4">Skills</h3>
    <p class="mb-4">
      🔗
      <a href="https://github.com/atombrenner" class="hover:underline text-blue-700 ml-1">
        github.com/atombrenner
      </a>
    </p>
    <Skill name="Languages">
      German: native
      <br />
      English: fluent
    </Skill>
    <Skill name="AWS Cloud Native Apps">serverless whenever it makes sense</Skill>
    <Skill name="Domain-Driven Design"></Skill>
    <Skill name="Agile & Lean Development">Kanban, Scrum, Shape Up</Skill>
    <Skill name="Developer Experience">
      Continuous Delivery, Build & Deployment, Custom Tooling
    </Skill>

    <Skill name="Programming Languages">
      Typescript, Rust, C++, C#, Kotlin, Scala, Clojure, Groovy, Ruby, Python, ...
    </Skill>
    <Skill name="Platforms">Web, AWS, Linux, Windows</Skill>
    <Skill name="Runtimes">NodeJS, Bun, JVM, .NET, Browser</Skill>
    <Skill name="Web Apps">React, NextJs, Remix, Astro, ...</Skill>
    <Skill name="Frameworks">Play, Spring, ASP.NET MVC, MFC</Skill>
    <Skill name="Databases">
      DynamoDB, Elasticsearch, Redis, MongoDB, MySQL, PostgreSQL, Oracle, SQLServer
    </Skill>

    <Skill name="Fan of">
      Stefan Tilkov, Gregor Hohpe, Eric Evans, Martin Fowler, Bjarne Stroustroup, Tom DeMarco
    </Skill>
  </>
)

type SkillProps = {
  name: string
  children?: ComponentChildren
}

const Skill = ({ name, children }: SkillProps) => (
  <>
    <h4 class="font-medium mt-4 mb-1 ">{name}</h4>
    <p class="last-child:bg-gray-400">{whitespaceNoWrap(children)}</p>
  </>
)

const whitespaceNoWrap = (children: ComponentChildren) => {
  if (typeof children === 'string')
    return children.split(',').map((child) => (
      <>
        <span class="whitespace-nowrap">{child.trim()}</span>
        <span class="last:hidden">, </span>
      </>
    ))

  return Array.isArray(children) ? children.map(whitespaceNoWrap) : children
}
