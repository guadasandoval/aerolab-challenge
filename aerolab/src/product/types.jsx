export class ImageProduct{
  constructor(url, hdurl){
    this.url = url
    this.hdurl = hdurl
  }
}
export class Product {
    constructor(_id, name, cost, category, ImageProduct){
    this._id = _id  
    this.name = name
    this.cost = cost
    this.category = category
    this.img = ImageProduct
    }
}
