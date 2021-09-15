import BeautyService from '../BeautyService.js'

const service = new BeautyService('Dermomasaż próżniowy')

service.path = 'dermomasaz-prozniowy'
service.head = {
  title: 'Dermomasaż próżniowy Białystok',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Dermomasaż próżniowy Białystok.'
    }
  ]
}
service.heroImg = {
  src: '/service-img/peeling.jpg',
  alt: 'dermomasaż'
}
service.video = ''
service.shortDescription = ''
service.time = '30-45min'
service.prices = [
  {
    type: 'Dermomasaż - jedna partia',
    value: '70zł',
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
