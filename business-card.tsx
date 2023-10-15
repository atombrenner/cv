export const BusinessCard = () => (
  <div>
    <h1 class="font-semibold text-5xl mt-8">Christian Rodemeyer</h1>
    <p class="mt-1 mb-2">Diplom Wirtschaftsinformatiker</p>
    <h2 class="text-2xl">Software Engineer | Tech Lead | Architect</h2>
    <p class="mt-6">Angerweg 26, 85579 Neubiberg</p>
    <p>
      <a href={`tel:+49151${35 * 2}70178984`} class="hover:underline">
        +4{3 * 3} 151 {35178984 + 35000000}
      </a>
    </p>
    <p class="mb-4">
      <a href="mailto:atombrenner@gmail.com" class="hover:underline">
        atombrenner@gmail.com
      </a>
    </p>
  </div>
)
