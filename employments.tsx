import { ComponentChildren } from 'preact'

export const Employments = () => (
  <>
    <h2 class="text-2xl font-bold mt-10 mb-4">Employment History</h2>
    <ul>
      <Employment
        title="Lead Developer"
        company="uptodate Ventures GmbH"
        location="Munich"
        fromTo="2021-Present"
      >
        <li>providing technical expertise and leadership </li>
      </Employment>
      <Employment
        title="Software & Infrastructure Developer"
        company="Süddeutsche Zeitung"
        location="Munich"
        fromTo="2017-2021"
      >
        <li>bla</li>
      </Employment>
      <Employment title="Cloud Developer" company="tado° GmbH" location="Munich" fromTo="2016-2017">
        <li>automated AWS infrastructure with CloudFormation and Ruby</li>
        <li>
          implemented DevOps principles, enabling dev teams to deploy and operate applications in
          production, eliminating the need for dedicated engineers
        </li>
        <li>
          created a central observability platform with Elasticsearch that helped support engineers
          to proactively detect and analyze problems
        </li>
        <li>implemented features as microservices with AWS Lambda and NodeJS</li>
      </Employment>
      <Employment
        title="Team Lead & Software Architect"
        company="Autoscout24"
        location="Munich"
        fromTo="2010-2015"
      >
        <li>
          initiated the transition from the .NET/Windows monolith to a microservice architecture
          running on Linux, hosted in AWS Cloud
        </li>
        <li>
          visualized VMware usage to identify and terminate hundreds of unused instances to reduce
          costs
        </li>
        <li>
          pushed Continuous Delivery practices, enabling deployments in minutes instead of multiple
          hours, which made hotfix releases obsolete
        </li>
        <li>
          implemented a custom frontend build pipeline (minifier, bundler and strong caching/CDN)
          for better pagespeed and cost reduction
        </li>
        <li>migrated the monolithic .NET platform from .NET2 to .NET4</li>
        <li>
          made production logs performant and accessible for developers to quickly detect and fix
          problems
        </li>
      </Employment>
      <Employment
        title="Software Architect"
        company="DAVID Systems GmbH"
        location="Munich"
        fromTo="2007-2010"
      >
        <li>created continuous integration infrastructure for all .NET/C#/C++ products</li>
        <li>introduced and coached agile principles and practices</li>
        <li>
          created a service oriented architecture to implement a Media Asset Workflow Management
          product in a team
        </li>
      </Employment>
      <Employment
        title="Software Developer"
        company="Bosch Sicherheitssysteme"
        location="Ottobrunn"
        fromTo="2004-2007"
      >
        <li>
          developed an user interface (.NET/C#) for Bosch Video Monitoring System that eventually
          got patented
        </li>
        <li>improved developer experience by implementing Continuous Integration and Unit Tests</li>
        <li>
          got praise and rekognition for developer tools that helped to tackle the growing
          complexity of the monolithic code base
        </li>
      </Employment>
      <Employment
        title="Software Developer"
        company="Dr. Städtler GmbH"
        location="Nuremberg"
        fromTo="1996-2004"
      >
        <li>
          developed and architected a distributed access control system (ZKSWin) that was used by
          large companies (VW, Munic Airport, ...) and generated major revenues
        </li>
        <li>
          used technologies that are known today as microservices, feature toggles and event
          sourcing to enable scaling on limited hardware and networks
        </li>
        <li>
          developed a library of UI components (Windows/C++) that enabled developers to quickly
          build consistent and ergonomic application user interfaces
        </li>
      </Employment>
      <Employment
        title="Software Developer"
        company="BDE GmbH"
        location="Hamminkeln"
        fromTo="1995-1996"
      >
        <li>implemented a control station for production planning, Windows/C++</li>
        <li>introduced version control, C++ and SQL</li>
      </Employment>
    </ul>
  </>
)

type EmploymentProps = {
  title: string
  company: string
  location: string
  fromTo: string
  children: ComponentChildren
}

const Employment = ({ title, company, location, fromTo, children }: EmploymentProps) => (
  <li>
    <h3 class="text-lg font-bold mt-4">
      {title}, {company}
    </h3>
    <p class="mb-2">
      {fromTo.split('-').join(' — ')}, {location}
    </p>
    <ul class="list-disc list-outside pl-5">{children}</ul>
  </li>
)
