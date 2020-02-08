class Topics {
    constructor() {
        this.topics = []
        this.adapter = new TopicsAdapter()
        this.fetchAndLoadTopics()
        this.domElements()
        this.initListeners()
    }

    fetchAndLoadTopics() {
        this.adapter.getTopics()
        .then(topics => {
            console.log(topics)
            topics.forEach(topic => this.topics.push(new Topic(topic)))
        })
        .then( () => {
            this.renderTopics()
        })
    }

    domElements() {
        this.topicsBox = document.querySelector( '.card-container' )
        this.topicNameField = document.querySelector( '.therapy-topic-name' )
        this.responseCardFormBox = document.querySelector( '.new-response-form' )
        this.responseCardsBox = document.querySelector( '.answerCard' )
    }

    initListeners() {
        this.topicsBox.addEventListener('click', this.renderCards.bind(this))
        this.topicForm.addEventListener('submit', this.createTopic.bind(this))
    }

    //Topics

    renderTopics() {
        this.topicsBox.innerHTML = this.topics.map(topic => topic.renderTopicName()).join('')
    }

    //Question Card

    //Answer Card
    
    functionRenderAnswerCard(){
        return 
        `<div class="answer-container">
            <div class="answerCard">
                <div class="answer-title-container">
                    <h3 class="answer-title">Write your answer below</h3>
                    <h3 class="answer-style">-</h3>
                </div>
                <form id="new-response-form">
                    <h2>Your thoughts:</h2>
                    <input type="text" name="user-response" id="user-response"><br>
                    <input type="submit" value="submit response">
                </form>  
            </div>
        </div>`
        }

}