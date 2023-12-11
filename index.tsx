import render from 'preact-render-to-string'
import { writeFileSync } from 'fs'
import { BusinessCard } from './business-card'
import { VNode } from 'preact'
import { $ } from 'execa'
import { Skills } from './skills'
import { Employments } from './employments'
import { Profile } from './profile'
import { Education } from './education'

type CVProps = {
  style: string
}

const CV = ({ style }: CVProps) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <title>CV of Christian Rodemeyer</title>
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </head>
    <body class="font-sans font-normal bg-yellow-50 print:bg-white">
      <div class="mx-auto mt-10 print:mt-0 max-w-5xl">
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

const TwoColumns = ({ class: extra, children }: { class?: string; children: [VNode, VNode] }) => (
  <div class={`flex items-start ${extra ?? ''}`}>
    <div class="w-1/3 pr-14">{children[0]}</div>
    <div class="w-2/3">{children[1]}</div>
  </div>
)

const Photo = () => <img class="max-h-[300px]" src="./photo.jpg"></img>

// --- start ---

const tailwind = $`bunx tailwindcss -m -i ./main.css`
const { stdout, stderr } = await tailwind
console.log(stderr)

const html = render(<CV style={stdout} />)
writeFileSync('build/cv.html', '<!DOCTYPE html>' + html)
