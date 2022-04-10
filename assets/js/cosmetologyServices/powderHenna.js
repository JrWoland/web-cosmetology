import BeautyService from '../BeautyServiceModel.js'

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
  src: '/service-img/henna.jpg',
  alt: 'henna pudrowa'
}
service.video = ''
service.shortDescription =
  'Pudrowa stylizacja brwi polega na podkreśleniu włosów, wzmocnieniu ich koloru, ujarzmieniu tych niesfornych oraz na odżywieniu, co warto szczególnie podkreślić'
service.time = '45min'
service.prices = [
  {
    type: 'Henna pudrowa',
    value: '70zł',
    time: '45min'
  },
  {
    type: 'Henna + regulacja',
    value: '40zł',
    time: '20-30min'
  },
  {
    type: 'Henna / regulacja',
    value: '20zł',
    time: '15-20min'
  }
]
service.details = {
  indications: [
    'krótkie i jasne włoski brwi',
    'osobom, które nie chcą tracić czasu na codzienną stylizację brwi'
  ],
  contraindications: [
    'stany zapalne w skóry w okolicach brwi',
    'stany zapalne powiek'
  ],
  aboutService: `
    Zabieg rozpoczyna się rozmową z klientką i ustaleniem ewentualnego kształtu brwi. Następnie po wykonaniu rysunku, nakładany jest preparat.
    Henna pudrowa jest w formie sproszkowanej, w zupełności naturalnym produktem. 
    Dzięki temu, zabieg henny pudrowej nie tylko wypełnia i wzmacnia kolor brwi, ale także je pielęgnuje i regeneruje (jeśli są uszkodzone). 
    Musisz również pamiętać, że henna pudrowa barwi zarówno skórę jak i włosy.
    Efekt barwienia Henną Pudrową utrzymuje się na skórze około 14 dni, a na włoskach nawet do 5-6 tygodni.`,
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
