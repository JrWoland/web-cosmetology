class Meta {
  constructor() {

    this.name = ''
    this.content = ''
  }
}

class Head {
  constructor() {
    this.title = ''
    this.meta = [new Meta()]
  }
}

class Img {
  constructor() {
    this.src = ''
    this.alt = ''
  }
}

class Prices {
  constructor() {
    this.type = ''
    this.value = ''
    this.time = ''
  }
}

class ServiceDetails {
  constructor() {
    this.indications = []
    this.contraindications = []
    this.aboutService = ''
    this.afterServiceEffects = ''
    this.imgs = [new Img()]
  }
}

export default class BeautyService {
  constructor(name) {
    this.name = name
    this.path = ''
    this.head = new Head()
    this.heroImg = new Img()
    this.video = ''
    this.shortDescription = ''
    this.time = ''
    this.prices = [new Prices()]
    this.details = new ServiceDetails()
  }
}
