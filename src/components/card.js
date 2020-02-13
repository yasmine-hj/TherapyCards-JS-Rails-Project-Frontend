class Card {
    constructor(card){
        this.id = card.id
        this.question = card.question
        this.responses = card.responses ? card.responses : []
        this.topicID = card.topic_id
    }
}