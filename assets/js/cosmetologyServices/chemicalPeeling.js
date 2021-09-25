import BeautyService from '../BeautyServiceModel.js'

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
  src: '/service-img/chempeeling.jpg',
  alt: 'peeling chemiczny'
}
service.video = ''
service.shortDescription =
  'Peelingi chemiczne są mieszanką chemiczną składników dostosowanych do konkretnych potrzeb/problemów skórnych. Ich zadaniem jest przyspieszenie odnowy komórkowej, skóry, czego efektem jest złuszczenie (płytsze lub głębsze).'
service.time = '45min - 1h'
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
  indications: [
    'fotostarzenie',
    'zmarszczki',
    'przebarwienia',
    'utrata jędrności skóry',
    'poszarzała skóra,',
    'trądzik różowaty, cera naczyniowa, rumień',
    'trądzik zaskórnikowy, grudkowo-krostkowy',
    'skóra tłusta, łojotokowa,',
    'rozszerzone pory,',
    'odświeżenie skóry przed ważnym wydarzeniem.'
  ],
  contraindications: [
    'ciąża, karmienie piersią',
    'alergie skórne',
    'aktywne zmiany bakteryjne, grzybicze, wirusowe',
    'ekspozycja skóry na słońce',
    'skłonność do bliznowców',
    'ciężka postać trądziku',
    'doustna terapia witaminą A',
    'przerwanie ciągłości naskórka'
  ],
  aboutService: `
    Peeling chemiczny (chemabrazja) polega na złuszczeniu martwego naskórka za pomocą odpowiednio dobranych substancji chemicznych,
    zwykle są to kwasy.
    Z reguły ten zabieg nie jest bolesny. Bardziej intensywne peelingi chemiczne kwasami mogą jednak powodować tkliwość, uczucie napięcia i zaczerwienienie, które ustępuje po kilku dniach. 
    Odczuwanie bólu zależy też od indywidualnej wrażliwości pacjenta na bodźce zewnętrzne
    <p>
    Zabiegi można wykonywać:
    <br />
    𝐉𝐄𝐃𝐍𝐎𝐑𝐀𝐙𝐎𝐖𝐎 - gdy skóra jest w dobrej kondycji i wymaga jedynie regeneracji lub odświeżenia,
    <br />
    𝐖 𝐒𝐄𝐑𝐈𝐈  - gdy skóra wymaga zniwelowania konkretnych problemów i chcemy uzyskać długotrwałe efekty.
    </p>
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
