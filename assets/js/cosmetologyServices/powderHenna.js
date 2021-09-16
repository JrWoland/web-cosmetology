import BeautyService from '../BeautyService.js'

const service = new BeautyService('Henna pudrowa i regulacja')

service.path = 'henna-pudrowa'
service.head = {
  title: 'Henna pudrowa Białystok',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Henna pudrowa Białystok.'
    }
  ]
}
service.heroImg = {
  src: '/service-img/peeling.jpg',
  alt: 'henna pudrowa'
}
service.video = ''
service.shortDescription = ''
service.time = '30-45min'
service.prices = [
  {
    type: 'Henna pudrowa',
    value: '70zł',
    time: '30-45min'
  },
  {
    type: 'Henna + regulacja',
    value: '35zł',
    time: '20-30min'
  },
  {
    type: 'Henna / regulacja',
    value: '20zł',
    time: '15-20min'
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
