import BeautyService from '../BeautyServiceModel.js'

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
  src: '/service-img/dermomasage.jpg',
  alt: 'dermomasaż'
}
service.video = ''
service.shortDescription =
  'Dermomasaż próżniowy pozwala na uzyskanie jędrnej skóry. Pomaga w pozbuciu sie celluitu oraz wspomaga leczenie  blizn i obrzęków.'
service.time = '30-45min'
service.prices = [
  {
    type: 'Dermomasaż - jedna partia',
    value: '70zł',
    time: '30-45min'
  }
]
service.details = {
  indications: [
    `zmniejszenie widoczności cellulitu`,
    `ujędrnianie skóry`,
    `modelowanie sylwetki`,
    `pobudzenie fibroblastów do zwiększonej produkcji kolagenu i elastyny`,
    `pobudzanie krążenia`,
    `łagodzenie bólu`,
    `wspomaganie leczenia blizn i obrzęków`,
    `po zabiegach liposukcji`,
    `wspomaganie mezoterapii`,
    `terapia przeciwstarzeniowa`,
    `relaksacyjnie`,
    `odnowa biologiczna po wysiłku`,
    `wspomaganie walki z otyłością`
  ],
  contraindications: [
    `uszkodzenia mechaniczne skóry`,
    `choroba nowotworowa`,
    `stany zapalne skóry, a także skłonność do siniaków`,
    `ciąża`,
    `żylaki, popękane naczynka krwionośne i zapalenie żył`,
    `tłuszczaki występujące w jednym obszarze ciała`,
    `niewydolność krążenia`,
    `gorączka, osłabienie i wyniszczenie organizmu`,
    `zaawansowane nadciśnienie tętnicze (zgoda lekarza)`,
    `bielactwo`
  ],
  aboutService: `Dermomasaż próżniowy (zwany również lipomasażem) jest zabiegiem łączącym masaż mechaniczny z podciśnieniem. Może być wykonywany na biuście, brzuchu lub nogach, 
    ale również na twarzy u osób chcących spowolnić oznaki starzenia. W pierwszej kolejności, część zabiegowa ciała pokrywana jest oliwą do masażu. 
    Następnie specjalną głowicą wyposażoną w ruchome rolki i kuleczki, wykonywany jest masaż.
    Całość jest bezpieczna, nieinwazyjna i bezbolesna. Zabieg na jedną partię ciała trwa około 20 minut, a na całe ciało 45-50 minut. 
    Zalecana jest seria od 6 do 20 zabiegów, dwa lub trzy razy w tygodniu. Po zakończeniu serii warto jest wykonać jeden zabieg w miesiącu dla podtrzymania efektów.`,
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
