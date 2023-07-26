export const BusinessCard = () => (
  <div class="mt-6">
    <h1 class="font-semibold text-5xl">Christian Rodemeyer</h1>
    <p>Diplom Wirtschaftsinformatiker</p>
    <h2 class="text-2xl mt-4">Software Engineer | Tech Lead | Architect</h2>
    <p class="mt-10">Angerweg 26, 85579 Neubiberg</p>
    <p>
      <a href={`tel:+49151${35 * 2}70178984`} class="hover:underline">
        +4{3 * 3} 151 {35178984 + 35000000}
      </a>
    </p>
    <p>
      <a href="mailto:atombrenner@gmail.com" class="hover:underline">
        atombrenner@gmail.com
      </a>
    </p>
  </div>
)

export const Photo = () => <img class="object-fill" src="./photo.jpeg"></img>
