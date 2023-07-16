/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// Animal => tiger => 호돌이

class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  // 전달인자가 많아질 때 사용가능한 방법
  // constructor(name,...args) {}
  // constructor({name, age}={}) {}
  constructor(name) {
    this.name = name; //tiger.name:'호돌이'
  }

  set eat(food) {
    this.stomach.push(food);
  }
  get eat() {
    return this.stomach;
  }
}

// const tiger = new Animal('호돌이', 12);

class Tiger extends Animal {
  #prey = ''; // private fields(컴파일 후에도 비공개로 유지)

  constructor(name, pattern) {
    // 전달인자가 없다면 constructor 생략가능
    super(name); // 상위 부모에게서 상속
    this.pattern = pattern;
  }

  hunt(target) {
    this.#prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  attack() {
    return `강력한 발톱 공격으로 ${this.#prey}가 죽었습니다.`;
  }

  static sleep(name) {
    console.log(name + '이 잠을잔다.');
  }
}
const beom = new Tiger('범', '호랑이무늬');

class Champion {
  q = '';
  w = '';
  d = '';
  f = '';
  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }
  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});
