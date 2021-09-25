import cavitationPeeling from './cosmetologyServices/cavitationPeeling'
import lashes from './cosmetologyServices/lashes'
import microderma from './cosmetologyServices/microderma'
import permaBrowsMakeup from './cosmetologyServices/permaBrowsMakeup'
import chemicalPeeling from './cosmetologyServices/chemicalPeeling'
import mezoteraphy from './cosmetologyServices/mezoteraphy'
import ultrasonicLiposuction from './cosmetologyServices/ultrasonicLiposuction'
import dermomasage from './cosmetologyServices/dermomasage'
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
    services: [microderma, chemicalPeeling, mezoteraphy, cavitationPeeling],
    video:
      'https://v.ftcdn.net/01/82/12/02/700_F_182120202_3Fs2IC9MawxzRcCX4enz50QPXYke0jmu_ST.mp4'
  },
  body: {
    name: 'Zabiegi na ciało',
    services: [dermomasage, ultrasonicLiposuction],
    video:
      'https://v.ftcdn.net/04/44/06/27/700_F_444062731_Dq9VVwaMPnoXiPrGgrdgFZ8VyN6EZYaL_ST.mp4'
  }
}

export const cosmetologyServices = [
  lashes,
  permaBrowsMakeup,
  microderma,
  cavitationPeeling,
  chemicalPeeling,
  mezoteraphy,
  ultrasonicLiposuction,
  dermomasage,
  powderHenna
]
