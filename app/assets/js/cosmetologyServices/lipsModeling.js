import BeautyService from "../BeautyServiceModel.js";

const service = new BeautyService("Modelowanie ust kwasem hialuronowym");

service.path = "modelowanie-ust";
service.head = {
  title: "Modelowanie ust kwasem hialuronowym Białystok",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Modelowanie ust kwasem hialuronowym Białystok.",
    },
  ],
};
service.heroImg = {
  src: "/service-img/lips.webp",
  alt: "modelowanie ust",
};
service.video = "";
service.shortDescription =
  "Modelowanie ust kwasem hialuronowym polega na podkreśleniu konturu ust, wzmocnieniu ich koloru oraz na odżywieniu, co warto szczególnie podkreślić";
service.time = "45min";
service.prices = [
  {
    type: "Modelowanie ust - 1ml",
    value: "750zł",
    time: "45min",
  },
  {
    type: "Modelowanie ust - 0,5ml",
    value: "550zł",
    time: "45min",
  },
];
service.details = {
  indications: ['Cienkie, słabo zaznaczone usta',
'Utrata objętości i nawilżenia ust',
'Asymetria warg',
'Niewyraźny kontur i łuk Kupidyna',
'Drobne zmarszczki wokół ust (tzw. zmarszczki palacza)',
'Opadające kąciki ust',
'Korekta proporcji między górną a dolną wargą',
'Delikatne powiększenie i odświeżenie koloru ust'],
  contraindications: ['Ciąża i karmienie piersią',
'Aktywne infekcje skóry w okolicy ust (w tym opryszczka)',
'Stany zapalne i infekcje ogólnoustrojowe',
'Choroby autoimmunologiczne w fazie aktywnej',
'Niewyrównana cukrzyca',
'Zaburzenia krzepnięcia krwi, przyjmowanie leków przeciwkrzepliwych',
'Alergia lub nadwrażliwość na składniki preparatu (np. kwas hialuronowy, lidokaina)',
'Choroby nowotworowe w trakcie leczenia',
'Skłonność do bliznowców (keloidów)',
'Świeże zabiegi lub urazy w okolicy ust – do czasu pełnego wygojenia',
'Tendencja do opryszczki – wymaga wcześniejszej profilaktyki po konsultacji'],
  aboutService: "Modelowanie ust kwasem hialuronowym to małoinwazyjny zabieg, który pozwala podkreślić kontur, delikatnie powiększyć usta, wyrównać asymetrie oraz intensywnie je nawilżyć. ",
  afterServiceEffects: "Efekty widoczne są od razu, a pełen rezultat stabilizuje się w ciągu 2–3 tygodni. Utrzymują się zwykle 6–12 miesięcy (indywidualnie). Preparat jest w pełni biodegradowalny i w razie potrzeby możliwe jest jego rozpuszczenie hialuronidazą.",
  imgs: [],
};

export default service;
