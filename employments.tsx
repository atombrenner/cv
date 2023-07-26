import { ComponentChildren } from 'preact'

export const Employments = () => (
  <>
    <h2 class="text-2xl font-bold mt-10 mb-4">Employment History</h2>
    <ul>
      <Employment
        title="Lead Developer"
        company="uptodate Ventures GmbH"
        fromTo="2021 - today, Munich"
      >
        <li>bla bla </li>
      </Employment>
      <Employment
        title="Software & Infrastructure Developer"
        company="Süddeutsche Zeitung"
        fromTo="2017 - 2021, Munich"
      >
        <li>bla bla </li>
      </Employment>
    </ul>
  </>
)

type EmploymentProps = {
  title: string
  company: string
  fromTo: string
  children: ComponentChildren
}

const Employment = ({ title, company, fromTo, children }: EmploymentProps) => (
  <li>
    <h3 class="text-lg font-bold mt-4">
      {title}, {company}
    </h3>
    <p class="mt-1 mb-2">{fromTo}</p>
    <ul class="list-disc list-inside pl-5">{children}</ul>
  </li>
)
