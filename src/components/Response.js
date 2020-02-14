class Response {
    constructor(response){
        this.id = response.id
        this.response = response.response
        this.cardID = response.card.id
        this.cardQuestion = response.card.question
    }
    
renderResponse(){
    return `
    <button type="button" class="responses-button" id="responses-button">
        </div>
            <div class="answer-cards">
            <div class="answer-title-container">
            <br>
                <h3 class="answer-style">${this.cardQuestion}</h3>
                <br>
            <p class="therapy-content">${this.response}</p>
        </div>
        </button>
           `
    }
}