import BeautyService from '../BeautyServiceModel.js'

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
  src: '/service-img/liposuction.webp',
  alt: 'liposukcja ultradźwiękowa'
}
service.video = ''
service.shortDescription = ''
service.time = '30-45min'
service.prices = [
  {
    type: 'Ramiona',
    value: '80zł',
    time: '30-45min'
  },
  {
    type: 'Uda',
    value: '90zł',
    time: '30-45min'
  },
  {
    type: 'Uda + pośladki',
    value: '110zł',
    time: '30-45min'
  },
  {
    type: 'Uda +  łydki + pośladki',
    value: '130zł',
    time: '30-45min'
  },
  {
    type: 'Brzuch + boki',
    value: '110zł',
    time: '30-45min'
  }
]
service.details = {
  indications: [
    'chęć redukcji tkanki tłuszczowej i celluitu',
    'ujędrnienie i zwiększenie elastyczności skóry',
    'odżywienie skóry i głębiej położonych tkanek',
    'regeneracja włókien kolagenowych',
    'likwidacja zastojów limfatycznych'
  ],
  contraindications: [
    'kobiet w ciąży i karmiących piersią',
    'kobiet podczas trwającej miesiączki',
    'cukrzyków',
    'chorych na padaczkę',
    'osteoporozy',
    'schorzeń dotyczących krzepliwości krwi oraz innych chorób układu sercowo-naczyniowego',
    'stwardnienia rozsianego i chorób nowotworowych',
    'osób z rozrusznikiem serca i implantami',
    'schorzeń dotyczących skórny, w tym stanów zapalnych'
  ],
  aboutService: `
    Liposukcja ultradźwiękowa znana jest też jako liposukcja kawitacyjna.
    Ten zabieg przeprowadza się miejscowo z wykorzystaniem dwóch głowic. 
    Pierwsza emituje promieniowanie podczerwone, które prowadzi do wzrostu temperatury w tkankach, upłynnia tłuszcz oraz przyspiesza metabolizm.
    Druga emituje fale dźwiękowe o wysokiej częstotliwości.
    Ultradźwięki rozbijają komórki tłuszczowe, gdzie następnie zostają one odprowadzone przez układ limfatyczny i żylny, dzięki czemu możliwe staje się też ich zmetabolizowanie.
    Dla najlepszych efektów, zaleca się wykonanie od 6 do 10 zabiegów na jedną partę ciała.
    <b>Zabieg łączony jest z dermomasażem, bez dodatkowej opłaty!</b>
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
