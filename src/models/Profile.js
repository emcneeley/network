export class Profile {
    constructor(data) {
        this.bio = data.bio
        this.name = data.name
        this.graduated = data.graduated || false
        this.github = data.github
        this.linkedin = data.linkedin
        this.picture = data.picture
        this.coverImg = data.coverImg
        this.class = data.class
        this.graduated = data.graduated || false

    }

}