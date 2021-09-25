import BeautyService from '../BeautyServiceModel.js'

const service = new BeautyService('Mezoterapia mikroigłowa')

service.path = 'mezoterapia-mikroiglowa'
service.head = {
  title: 'Mezoterapia mikroigłowa Białystok',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Mezoterapia mikroigłowa Białystok.'
    }
  ]
}
service.heroImg = {
  src: '/service-img/mesotherapy.jpg',
  alt: 'mezoteriapia mikroigłowa'
}
service.video = ''
service.shortDescription =
  'Zabieg mezoterapii, zwanej też mikrodermabrazją mikroigłową, wykonuje się za pomocą rollera (obrotowego wałka z rączką) lub dermapenu wyposażonego w sterylne igiełki ze stopów tytanu lub stali chirurgicznej.'
service.time = '45min - 1h'
service.prices = [
  {
    type: 'Mezoterapia - twarz',
    value: '300zł',
    time: '30-45min'
  },
  {
    type: 'Mezoterapia - twarz, szyja',
    value: '350zł',
    time: '45-60min'
  },
  {
    type: 'Mezoterapia - twarz, szyja, dekolt',
    value: '400zł',
    time: '1-1.5h'
  }
]
service.details = {
  indications: [
    'sucha skóra',
    'utrata jędrności skóry',
    'blizny pozabiegowe lub potrądzikowe',
    'zmarszczki i linie mimiczne',
    'przebarwienia',
    'objawy fotostarzenia',
    'pogorszenie kolorytu skóry'
  ],
  contraindications: [
    'choroby nowotworowe',
    'choroby autoimmunologiczne (np. łuszczyca, stwardnienie rozsiane, bielactwo)',
    'cukrzyca i inne choroby metaboliczne',
    'choroby krwi (np. anemia, małopłytkowość)',
    'ciąża i okres karmienia',
    'wyraźne stany zapalne skóry',
    'infekcje skóry (bakteryjne, wirusowe, grzybicze)'
  ],
  aboutService: `
    W trakcie zabiegu wykonuje się kilkadziesiąt tysięcy mikronakłuć. 
    Ich głębokość zależy od spodziewanego efektu, obszaru ciała poddawanego zabiegowi, a także techniki.
    Głębokość początkowa to 0,25 mm.
    Skóra w ciągu około 20 minut wchłania nawet 90% zaaplikowanego preparatu.
    Do zalet mezoterapii mikroigłowej należy bezpieczeństwo tej metody (kontrola głębokości nakłuć, sterylność) oraz efekty widoczne już po jednej kuracji.
    `,
  afterServiceEffects: `
    Po zabiegu skóra zachowuje się tak, jakby była zraniona – uruchamia wszystkie swoje siły i intensywnie się regeneruje, a efektu takiego nie da się uzyskać przez zastosowanie pielęgnacji zewnętrznej.
    Zmarszczki się spłycają i widać wyraźnie, że skóra wygląda na zdrowszą – jest grubsza, bardziej odporna na niekorzystne czynniki, a blizny ulegają spłyceniu.
    Niekiedy efekty mezoterapii mikroigłowej są widoczne już po jednym zabiegu, ale w przypadku skóry zniszczonej trzeba dwóch/trzech zabiegów, żeby zobaczyć pierwsze rezultaty.
    Dla osiągnięcia najlepszego efektu zaleca się serię 5-6 zabiegów w odstępach 10-21 dni.`,
  imgs: [
    {
      src: '/logo2.png',
      alt: 'zdjecie'
    },
    {
      src: '/logo2.png',
      alt: 'zdjecie'
    }
  ]
}

export default service
