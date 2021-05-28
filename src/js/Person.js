// es6语法，Class声明类 webpack打包需要安装插件@babel/plugin-proposal-class-properties,不然打包会报错
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }
}

module.exports = Person