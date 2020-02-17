class Response {
    constructor(response){
        this.id = response.id
        this.response = response.response
        this.card_id = response.card.id
        this.cardQuestion = response.card.question
    }
    
renderResponse(){
    return `
        </div>
            <div class="response-cards">
            <div class="answer-title-container">
            <br>
                <h3 class="answer-style">${this.cardQuestion}</h3>
                <br>
            <p class="therapy-content">${this.response}</p>
          </div>
           <div>
          </div>
        <button type="button" class="delete-response-button" id="delete-response-button" data-card-id="${this.id}">Delete</button>   
        `
    }
 
}