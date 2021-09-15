import BeautyService from '../BeautyService.js'

const service = new BeautyService('Peeling chemiczny')

service.path = 'peeling-chemiczny'
service.head = {
  title: 'Peeling chemiczny Białystok',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Peeling chemiczny Białystok.'
    }
  ]
}
service.heroImg = {
  src: '/service-img/peeling.jpg',
  alt: 'brwi'
}
service.video = ''
service.shortDescription =
  'Zabieg jest przyjemny, trwa od 40 do 90 minut, poprawia napięcie skóry i oczyszcza ją, rozjaśnia, usuwa resztki makijażu. W ten sposób skóra odzyskuje swój naturalny kolor, wygląda lepiej i zdrowo.'
service.time = '30min - 1h'
service.prices = [
  {
    type: 'Peeling chemiczny',
    value: '150-200zł',
    time: '45-60min'
  },
  {
    type: '+ mikrodermabrazja',
    value: '+ 30zł',
    time: '+ 30min'
  }
]
service.details = {
  indications: [],
  contraindications: [],
  aboutService: '',
  afterServiceEffects: '',
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
