import BeautyService from '../BeautyService.js'

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
  src: '/service-img/peeling.jpg',
  alt: 'zdjecie brwi'
}
service.video = ''
service.shortDescription = ''
service.time = '30min - 1h'
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
