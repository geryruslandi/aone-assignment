export class UserModel {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public image: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    image: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.image = image;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
