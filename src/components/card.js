class Card {
    constructor(card){
        this.id = card.id
        this.question = card.question
        this.response = card.response
    }

    questionCardHTML(){
        return `<h2 id ="question"> ${this.question}</h2>`
    }

    responseCardHTML(){
        return `<h2 id="response" Your thoughts: ${this.response}</h2>`
    }
}