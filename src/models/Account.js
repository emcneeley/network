export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.graduated = data.graduated || false
    this.github = data.github
    this.linkedin = data.linkedin
    this.coverImg = data.coverImg
    this.class = data.class
    // TODO add additional properties if needed
  }
}
