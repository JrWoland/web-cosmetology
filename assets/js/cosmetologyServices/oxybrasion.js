import BeautyService from '../BeautyServiceModel.js'

const service = new BeautyService('Oksybrazja')

service.path = 'oksybrazja'
service.head = {
  title: 'Oksybrazja Białystok',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Oksybrazja Białystok.'
    }
  ]
}
service.heroImg = {
  src: '/service-img/micro.jpg',
  alt: 'oksybrazja'
}
service.video = ''
service.shortDescription = ''
service.time = '30-60min'
service.prices = [
  {
    type: 'Twarz',
    value: '150zł',
    time: '30-45min'
  },
  {
    type: 'Twarz + szyja',
    value: '180zł',
    time: '30-45min'
  },
  {
    type: 'Twarz + szyja + dekolt',
    value: '200zł',
    time: '45min'
  }
]
service.details = {
  indications: [
    'cerą wrażliwa, naczynkowa i skłonna do alergii',
    'kuracja przeciwłupieżowa',
    'jako wsparcie w leczeniu łuszczycy',
    'utrata jędrności'
  ],
  contraindications: [
    'przy schorzeniach skórnych jak stany zapalne',
    'cukrzyca',
    'opryszczka'
  ],
  aboutService: `
   Oksybrazja (oxybrazja), nazywana inaczej mikrodermabrazją wodno-tlenową. Jest kolejną odmianą peelingu odpowiadającego za świeży i młody wygląd.
   Przeznaczona jest dla wszystkich typów skóry, a w szczególności dla osób, które mają bardzo wrażliwą cerę.
   Oksybrazja, to też jeden z tych zabiegów, które można wykonywać przez cały rok, również latem bez przeciwwskazań związanych z ekspozycją na promienie słoneczne.
   Podstawowym działaniem oksybrazji jest złuszczanie powierzchownych warstw naskórka, przez co pobudzany jest proces naskórkowania, czyli gojenie się naskórka.
   Wielokrotne stosowanie zabiegu oddziałuje również na skórę właściwą, pobudzając syntezę włókien kolagenowych i elastynowych.
  `,
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
