class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get basePrice() {
    return this._quantity * this._item.price;
  }

  get discountFactor() {
    let discountFactor = 0.98;

    if (this.basePrice > 1000) {
      discountFactor -= 0.03;
    }

    return discountFactor
  }

  get price() {
    return this.basePrice * this.discountFactor;
  }
}


// class Form {

//   constructor() {
//     this.ranking = undefined
//     this.prevExam = undefined
//     this.nextExam = undefined
//   }

//   setFieldValue(field, value) {
//     this[field] = value
//   }

//   setFieldAction(field, action) {
//     const actionName = `on${field[0].toUpperCase() + field.slice(1)}Change`
//     this[actionName] = action
//   }

//   onPrexExamChange(value) {
//     this.prevExam = value
//     this.nextExam = undefined
//   }

//   onNextExamChange(value) {
//     this.nextExam = value
//     this.ranking = undefined
//   }

//   onRankingChange(value) {
//     this.ranking = value
//     this.onFinish(this.getJson())
//   }

//   onFinish() {
//     
//   }

//    setOnFinish(fn) {
//      this.onFinish = fn
//     }
//   getJson() {
//     return {
//       ranking: this.ranking,
//       prevExam: this.prevExam,
//       nextExam: this.nextExam
//     }
//   }
// }

// let formModel = new Form()
// formModel.setFieldAction('prexExam', () => {
//   formModel.setFieldValue('ranking', undefined)
//   formModel.setFieldValue('nextExam', formModel.ranking)

// })
// formModel.setFieldAction('finsh', () => {
//   const params = formModel.getJson();
//   const res = await xxxx;


// })
// function FormComponent() {
//   const onFinish = (data) => {

//   }

//   return (
//     <select></select>
//     <Form onFinish={onFinish}></Form>
//   )
// }