import BeautyService from '../BeautyService.js'

const service = new BeautyService('Liposukcja ultradźwiękowa')

service.path = 'liposukcja-ultradzwiekowa'
service.head = {
  title: 'Liposukcja ultradźwiękowa Białystok',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Liposukcja ultradźwiękowa Białystok.'
    }
  ]
}
service.heroImg = {
  src: '/service-img/peeling.jpg',
  alt: 'liposukcja'
}
service.video = ''
service.shortDescription = ''
service.time = '30-45min'
service.prices = [
  {
    type: 'Brzuch + boki / uda',
    value: '110zł',
    time: '30-45min'
  },
  {
    type: 'Uda + łydki / uda + pośladki',
    value: '140zł',
    time: '30-45min'
  },
  {
    type: 'Uda + łydki + pośladki',
    value: '160zł',
    time: '30-45min'
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
