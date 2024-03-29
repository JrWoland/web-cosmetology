import lashes from './cosmetologyServices/lashes'
import microderma from './cosmetologyServices/microderma'
import permaBrowsMakeup from './cosmetologyServices/permaBrowsMakeup'
import chemicalPeeling from './cosmetologyServices/chemicalPeeling'
import mezoteraphy from './cosmetologyServices/mezoteraphy'
import oxybrasion from './cosmetologyServices/oxybrasion'
import powderHenna from './cosmetologyServices/powderHenna'

export const groupedServices = {
  lashes: {
    name: 'Stylizacja rzęs',
    services: [lashes],
    video:
      'https://v.ftcdn.net/01/16/46/46/240_F_116464602_0yalaGaN0DHPwUSKXxAMvNwW58hmBcH2_ST.mp4'
  },
  browns: {
    name: 'Stylizacja brwi',
    services: [permaBrowsMakeup, powderHenna],
    video:
      'https://v.ftcdn.net/02/89/24/92/240_F_289249204_J7urXUARQbAypo96CatMONYpeUdSdzBn_ST.mp4'
  },
  face: {
    name: 'Zabiegi na twarz',
    services: [microderma, chemicalPeeling, mezoteraphy, oxybrasion],
    video:
      'https://v.ftcdn.net/01/82/12/02/700_F_182120202_3Fs2IC9MawxzRcCX4enz50QPXYke0jmu_ST.mp4'
  }
}

export const cosmetologyServices = [
  lashes,
  permaBrowsMakeup,
  chemicalPeeling,
  mezoteraphy,
  powderHenna,
  microderma,
  oxybrasion
]
