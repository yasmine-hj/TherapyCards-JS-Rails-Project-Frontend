class Card {
    constructor(card){
        this.id = card.id
        this.question = card.question
        this.response = card.response
    }

    questionCardHTML(){
        return `<button type="button" id="topic-button">
                     <div class="topic-card" data-id=${this.id}> 
                           <h3 class="therapy-content">${this.question}</h3>
                      </div>
                 </button>
                 `
    }

    responseCardHTML(){
        return `<h2 id="response" Your thoughts: ${this.response}</h2>`
    }
}