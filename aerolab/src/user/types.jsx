
export class User {
    constructor(_id, name, points, redeemHistory, createDate){
      this._id = _id  
      this.name = name
      this.points = points
      this.redeemHistory = redeemHistory
      this.createDate = createDate
    }
}