import render from 'preact-render-to-string'
import { writeFileSync } from 'fs'
import { BusinessCard, Photo } from './header'
import { VNode } from 'preact'
import { $ } from 'execa'
import { Skills } from './skills'
import { Employments } from './employments'
import { Profile } from './profile'

const CV = () => (
  <html>
    <head>
      <title>CV of Christian Rodemeyer</title>
      <link href="./main.css" rel="stylesheet"></link>
    </head>
    <body class="font-sans">
      <div class="container mx-auto mt-10 print:mt-4 w-[1100px]">
        <TwoColumns class="bg-[#fed78c]">
          <Photo />
          <BusinessCard />
        </TwoColumns>
        <TwoColumns class="mt-10">
          <Skills />
          <>
            <Profile />
            <Employments />
            <Education />
          </>
        </TwoColumns>
      </div>
    </body>
  </html>
)

const Education = () => (
  <>
    <h3>Education</h3>
    <p>Diplom Wirtschaftsinformatik, University of Essen September 1990 — November 1995</p>
    <p>Military Service</p>
    <p>Abitur, Albert Schweitzer Gymnasium, Marl</p>
  </>
)

const TwoColumns = ({ class: extra, children }: { class?: string; children: [VNode, VNode] }) => (
  <div class={`flex items-start ${extra ?? ''}`}>
    <div class="w-1/3 pr-16">{children[0]}</div>
    <div class="w-2/3">{children[1]}</div>
  </div>
)

const tailwind = $`npx tailwindcss -i ./main.css -o ./build/main.css`
const html = render(<CV />)
const { stdout, stderr } = await tailwind
writeFileSync('build/index.html', html)

console.log(stdout)
console.log(stderr)
