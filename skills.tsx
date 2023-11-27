import { ComponentChildren } from 'preact'
import { SkillBar } from './skill-bar'

export const Skills = () => (
  <>
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
    <h3 class="text-2xl font-medium mb-4 mt-4">Top Skills</h3>
    <Skill name="Agile & Lean Development" active={6} examples="Scrum, Kanban, Shape Up" />
    <Skill name="Cloud Native Architecture" active={4} passive={5} examples="AWS, Azure" />
    <Skill name="Domain-Driven Design" active={3} passive={4} />
    <Skill
      name="DevOps"
      active={3}
      passive={6}
      examples="Continuous Delivery, IaC, Observability, Alerting"
    />
    <Skill
      name="Programming Languages"
      active={5}
      passive={6}
      examples="Typescript, Kotlin, C#, C++"
    />
    <Skill
      name="Website Development"
      active={4}
      passive={5}
      examples="HTML, CSS, React, NextJs, Remix"
    />
    <Skill
      name="Website Management"
      active={3}
      passive={5}
      examples="SEO, CMS, Analytics, Ads, Search"
    />
    <Skill name="Containers" active={3} passive={4} examples="Docker, Kubernetes, Podman" />
    <Skill name="NoSQL Databases" active={4} passive={6} examples="Elasticsearch, DynamoDB" />
    <Skill name="Frameworks" active={2} passive={5} examples="Spring, ASP.NET MVC, Play, Koa" />

    <h3 class="text-2xl font-medium mb-4 mt-6 break-after-avoid">More Skills</h3>
    <Skill
      name="Data Science"
      active={2}
      passive={3}
      examples="Visualization, Statistics, Wrangling"
    />
    <Skill name="Runtimes" active={3} passive={4} examples="NodeJS, Bun, JVM, .NET, Browser" />
    <Skill name="Platforms" active={4} passive={5}>
      Web, AWS, Linux, Windows
    </Skill>
    <Skill
      name="Infrastructure as Code"
      active={3}
      passive={5}
      examples="Cloudformation, CDK, Terraform"
    />
    <Skill
      name="SQL Databases"
      active={2}
      passive={6}
      examples="MySQL, PostgreSQL, Oracle, SQLServer"
    />
    <Skill name="Authentication" active={2} passive={4} examples="OpenID Connect, Cognito" />
    <Skill name="More Programming Languages" active={1} passive={4}>
      Ruby, Python, Scala, Clojure
    </Skill>
    <Skill
      name="Fan of"
      examples="Stefan Tilkov, Gregor Hohpe, Eric Evans, Martin Fowler, Tom DeMarco, Bjarne Stroustroup"
    />
  </>
)

type SkillProps = {
  name: string
  active?: number
  passive?: number
  examples?: string
  children?: ComponentChildren
}

const Skill = ({ name, active, passive, examples, children }: SkillProps) => (
  <section class="break-inside-avoid">
    <h4 class="font-medium mt-4">{name}</h4>
    {active && <SkillBar active={active} passive={passive} />}
    {examples && <Examples>{examples}</Examples>}
    {children}
  </section>
)

type ExampleProps = {
  children: ComponentChildren
}

const Examples = ({ children }: ExampleProps) => (
  <p class="mt-1 last-child:bg-gray-400">{whitespaceNoWrap(children)}</p>
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
