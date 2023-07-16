/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomack: [],
  set eat(food) {
    this.stomack.push(food);
  }, // setter
  get eat() {
    return this.stomack;
  }, // getter
};
/* 
const tiger = {
  pattern: '호랑이무늬',
  prey: '',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
}; */

const fox = {
  prey: '',
  // __proto__:animal
};

// 하나의 객체는 하나의 프로토타입만 상속가능
// tiger.__proto__ = animal; // 부모의 프로퍼티 상속
fox.__proto__ = animal;

/* ------------------------------- */

//! 생성자 함수

function Animal() {
  this.stomack = [];
  this.legs = 4;
  this.tail = true;
  this.eat = function (food) {
    this.stomack.push(food);
  };
  this.printEat = function (food) {
    return this.stomack;
  };
}

const tiger = new Animal(); // 생성자 함수 -> 객체를 생성한다.

tiger.pattern = '호랑이무늬';

tiger.hunt = function (target) {
  (this.prey = target), console.log(`${target}에게 슬금슬금 접근합니다.`);
};

/* --------------------------- */

// 생성자, {}

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

function button() {}

// const a = button()

const person1 = new User('선범', 32, 'tiger@naver.com');
