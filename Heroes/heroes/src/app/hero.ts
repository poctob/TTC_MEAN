export class Hero {
  _id: string;
  name: string;
  
  get id(): string {
    return this._id;
  }
  
  set id(param_id: string) {
    this._id = param_id;
  }
}