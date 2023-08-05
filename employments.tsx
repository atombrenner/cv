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
        <li>bla</li>
      </Employment>
      <Employment
        title="Team Lead & SW Architect"
        company="Autoscout24"
        location="Munich"
        fromTo="2010-2015"
      >
        <li>bla</li>
      </Employment>
      <Employment
        title="Software Architect"
        company="DAVID Systems GmbH"
        location="Munich"
        fromTo="2007 — 2010"
      >
        <li>bla</li>
      </Employment>
      <Employment
        title="Software Developer"
        company="Bosch Sicherheitssysteme"
        location="Ottobrunn"
        fromTo="2004-2007"
      >
        <li>bla</li>
      </Employment>
      <Employment
        title="Software Developer"
        company="Dr. Städtler GmbH"
        location="Nuremberg"
        fromTo="1996-2004"
      >
        <li>bla</li>
      </Employment>
      <Employment
        title="Software Developer"
        company="BDE GmbH"
        location="Hamminkeln"
        fromTo="1995-1996"
      >
        <li>bla</li>
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
    <p class="mt-1 mb-2">
      {fromTo.split('-').join(' — ')}, {location}
    </p>
    <ul class="list-disc list-inside pl-5">{children}</ul>
  </li>
)
