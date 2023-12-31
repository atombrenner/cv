import { ComponentChildren } from 'preact'

type EmploymentProps = {
  title: string
  company: string
  location: string
  fromTo: string
  children: ComponentChildren
}

const Employment = ({ title, company, location, fromTo, children }: EmploymentProps) => (
  <section class="break-inside-avoid">
    <h3 class="text-lg font-bold mt-4">
      {title}, {company}
    </h3>
    <p class="mb-2">
      {fromTo.split('-').join(' — ')}, {location}
    </p>
    <ul class="list-disc list-outside pl-5">{children}</ul>
  </section>
)

export const Employments = () => (
  <>
    <h2 class="text-2xl font-bold mt-10 mb-4">Employment History</h2>
    <Employment
      title="Lead Developer"
      company="uptodate Ventures GmbH"
      location="Munich"
      fromTo="2021-Present"
    >
      <li>
        coached and mentored a team of junior developers who built several B2B and B2C web apps to
        demo product ideas to customers and shareholders
      </li>
      <li>
        used domain-driven design concepts to help product people translate business ideas into
        software
      </li>
      <li>tackled GDPR compliance and PII data protection to reduce shareholder risks</li>
      <li>architected and implemented secure backends running on AWS</li>
    </Employment>
    <Employment
      title="Software & Infrastructure Developer"
      company="Süddeutsche Zeitung"
      location="Munich"
      fromTo="2017-2021"
    >
      <li>
        re-architected article page rendering, improving developer productivity and time to market
        while minimizing operational costs (AWS, Lambda, Typescript, React)
      </li>
      {/* <li>
        improved page speed and seo metrics without sacrificing tracking and advertisement
        requirements
      </li> */}
      <li>
        transformed a generalist dev team into a frontend oriented team that could focus on the home
        page and article pages
      </li>
      <li>supported several teams with AWS, Typescript, React and NodeJS knowledge</li>
      <li>
        worked with data science team to generate article recommendations that increased page views
        and, therefore advertising revenue
      </li>
      <li>
        negotiated an agreement with the legal department to outsource image delivery to
        <a class="hover:underline text-blue-700 ml-1" href="https://imgix.com/">
          imgix
        </a>
        , freeing up developer capacity to focus on core business topics
      </li>
      <li>
        replaced legacy custom image storage with AWS S3 and Cloudfront increasing availability and
        reducing costs by orders of magnitude
      </li>
      <li>
        modernized
        <a class="hover:underline text-blue-700 ml-1" href="https://www.sueddeutsche.de/">
          sz.de
        </a>{' '}
        and related services to current web standards, especially https
      </li>
      <li>maintained legacy build and delivery pipelines running on Jenkins</li>
    </Employment>
    <Employment title="Cloud Developer" company="tado° GmbH" location="Munich" fromTo="2016-2017">
      <li>automated AWS infrastructure with CloudFormation and AWS SDK (Ruby)</li>
      <li>
        implemented DevOps principles, enabling dev teams to deploy and operate applications in
        production, eliminating the need for dedicated ops engineers
      </li>
      <li>
        created a central observability platform with Elasticsearch that helped support engineers to
        proactively detect and analyze customer problems
      </li>
      <li>implemented microservices with AWS Lambda Functions and NodeJS</li>
    </Employment>
    <Employment
      title="Team Lead & Software Architect"
      company="Autoscout24"
      location="Munich"
      fromTo="2010-2015"
    >
      <li>
        started the transition from the .NET/Windows monolith to a microservice architecture running
        on Linux and hosted in the AWS Cloud
      </li>
      <li>
        reduced costs by identifying and terminating hundreds of unused Virtual Machines on VMWare
      </li>
      <li>
        enabled Continuous Delivery practices, getting new features and fixes live in hours instead
        of weeks, making the hotfix release process obsolete
      </li>
      <li>enabled zero downtime code only deployments</li>
      <li>implemented build and deploy pipelines that run in minutes instead of hours</li>
      <li>
        implemented a custom frontend build pipeline (minifier, bundler and strong caching/CDN) for
        better pagespeed and cost reduction
      </li>
      <li>
        made production logs performant and accessible for developers to quickly detect and fix
        problems
      </li>
      <li>migrated the monolithic .NET platform from .NET2 to .NET4</li>
    </Employment>
    <Employment
      title="Software Architect"
      company="DAVID Systems GmbH"
      location="Munich"
      fromTo="2007-2010"
    >
      <li>
        developed a service oriented architecture for Media Asset Workflow Management products
        (SODA/SOAP)
      </li>
      <li>integrated products with Microsoft Sharepoint</li>
      <li>continuous integration infrastructure for all .NET/C#/C++ products</li>
      <li>introduced and coached agile principles and practices</li>
    </Employment>
    <Employment
      title="Software Developer"
      company="Bosch Sicherheitssysteme"
      location="Ottobrunn"
      fromTo="2004-2007"
    >
      <li>
        developed an user interface (.NET/C#) for Bosch Video Monitoring System that eventually got
        patented
      </li>
      <li>
        improved product quality and developer experience by implementing Continuous Integration
        with Unit Tests
      </li>
      <li>
        got praise and rekognition for developer tools that helped to tame the growing complexity of
        the monolithic code base
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
        used technologies that are known today as microservices, feature toggles and event sourcing
        to enable availability and scaling on limited hardware and networks
      </li>
      <li>
        developed a library of UI components (Windows/C++) that enabled developers to quickly build
        consistent and ergonomic application user interfaces
      </li>
    </Employment>
    <Employment
      title="Software Developer"
      company="BDE GmbH"
      location="Hamminkeln"
      fromTo="1995-1996"
    >
      <li>implemented a control station for production planning (BoM, sequence, capacity)</li>
      <li>introduced version control, C++ and SQL</li>
    </Employment>
  </>
)
