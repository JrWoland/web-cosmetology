import BeautyService from '../BeautyServiceModel.js'

const service = new BeautyService('Stylizacja i przedłużanie rzęs')

service.path = 'rzesy'
service.head = {
  title: 'Stylizacja i przedłużanie rzęs Białystok',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Stylizacja i przedłużanie rzęs Białystok'
    }
  ]
}
service.heroImg = {
  src: '/service-img/lashes.jpg',
  alt: 'rzęsy'
}
service.video =
  'https://v.ftcdn.net/01/16/46/46/240_F_116464602_0yalaGaN0DHPwUSKXxAMvNwW58hmBcH2_ST.mp4'
service.shortDescription =
  'Stylizacja rzęs to zabieg dla każdej kobiety, która marzy o pięknych, długich i gęstych rzęsach. Zabiegi zagęszczania rzęs różnią się między sobą. W zależności od wybranej metody efekt będzie delikatny i naturalny, lub spektakularny i teatralny.'
service.time = '1h-2h'
service.prices = [
  {
    type: 'Light Volume 2D',
    value: '130zł (100zł)'
  },
  {
    type: 'Medium Volume 3D',
    value: '150zł (120zł)'
  },
  {
    type: 'Mega Volume 4/6d',
    value: '170zł (140zł)'
  },
  {
    type: 'Russian Effect',
    value: '190zł (150zł)'
  }
]
service.details = {
  indications: [
    'krótkie, rzadkie i cienkie rzęsy,',
    'osobom, które nie chcą tracić czasu na codzienny makijaż czy demakijaż',
    'chęć nadania oczom blasku i wyrazistości,',
    'uzyskanie trwałego efektu na co dzień'
  ],
  contraindications: [
    'choroby alergiczne oczu oraz alergie na składniki produktów,',
    'stany zapalne oczu i skóry wokół oczu,',
    'rany w okolicach powiek,',
    'zespół suchego oka,',
    'brak naturalnych rzęs,',
    'tichotillomania (natrętne wyrywanie rzęs),',
    'nadmiernie łysienie,',
    'Chemioterapia,',
    'operacje okulistyczne (do 6 miesięcy po zabiegu),',
    'makijaż permanentny kreski na powiece (do 3 tygodni po zabiegu),',
    'świeża henna rzęs',
    'jęczmień'
  ],
  aboutService:
    'Zabieg stylizacji rzęs polega na doklejeniu rzęsy syntetycznej do naturalnej przy pomocy pęset oraz specjalnego kleju. Pęsety służą do precyzyjnego separowania każdego włoska oraz do łapania i przyklejania sztucznej rzęsy. W zależności od wybranej metody, do jednej rzęsy można przykleić od jednej do nawet ośmiu i więcej rzęs. Jednak metoda stylizacji jest indywidualnie dobierana do stanu rzęs klientki, ich długości oraz kształtu oka. W rezultacie otrzymujemy efekt pięknego przedłużenia, zagęszczenia i podkręcenia. Zabieg ten jest całkowicie bezbolesny i bezpieczny dla oczu. W trakcie jego trwania klientka znajduje się w wygodnej pozycji leżącej.',
  afterServiceEffects: '',
  imgs: [
    {
      src: 'service-img/lashes.png',
      alt: 'zdjecie'
    },
    {
      src: '/logo2.png',
      alt: 'zdjecie'
    }
  ]
}

export default service
