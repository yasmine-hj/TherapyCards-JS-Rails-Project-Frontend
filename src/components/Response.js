class Response {
    constructor(response){
        this.id = response.id
        this.response = response.response
        this.cardID = response.card_id
    }
}

renderResponse(){
    return `
       <button type="button" class="topics-button" id="topic-button">
            <div class="topic-cards" data-id=${response.id}> 
                <h3 class="therapy-topic-category">${response.card.question}</h3>
            </div>
        </button>

        </div>
            <div class="answer-cards">
            <div class="answer-title-container">
                <h3 class="answer-title">Write your answer below</h3>
                <h3 class="answer-style">-</h3>
            <form id="answer-form" autocomplete="off" >
                <div class="input-field">
                    <textarea type="answer" class="textarea" name="response" id="response">${this.response}</textarea>
                </div>
            </form>
        </div>
           `
}