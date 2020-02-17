class Topics {
    constructor(){
        this.topics = []
        this.cards = []
        this.responses = []
        this.adapter = new TopicsAdapter()
        this.fetchAndLoadTopics()
        this.domElements()
        this.initListeners()
        this.topicInstructions()
    }

    // Dom elements
    domElements(){
        this.topicsBox = document.querySelector(".card-container");
        this.topicCard = document.querySelector('.topic-cards');
        this.therapyCardsBox = document.querySelector('.therapy-card');
        this.selectTopicHeading = document.querySelector('.select-a-topic');
        this.responseCardFormBox = document.querySelector('.new-response-form');
        this.viewAllTopics = document.querySelector(".see-topics-button");
        this.viewAllResponses = document.querySelector(".see-responses-button")
    }

    // Event listeners
    initListeners(){
        this.viewAllTopics.addEventListener('click', this.selectViewTopics.bind(this))
        this.viewAllResponses.addEventListener('click', this.selectViewResponses.bind(this))
    }

    // Select topic instructions
    topicInstructions(){
        this.selectTopicHeading.innerHTML = `
        <h2>Select a topic to begin!</h2>
        `
    }

    //Fetch and render all Topics cards
    fetchAndLoadTopics(){
        this.adapter.getTopics()
        .then(topics => {
            topics.forEach(topic => this.topics.push(new Topic(topic)))
        })
        .then( () => {
            this.renderTopics()
        })
    }

    renderTopics(){
        this.topicsBox.addEventListener('click', this.selectCard.bind(this))
        this.topicsBox.innerHTML = this.topics.map(topic => topic.renderTopicName()).join('')
    }

    selectCard(e){
        e.preventDefault()
        this.selectTopicHeading.innerHTML = ``
        const topicID = e.target.dataset.id
        if(e.target && e.target.className == "topic-cards") {
            console.log("List item ", topicID, " was clicked!");
            this.topicsBox.innerHTML = ``
            this.therapyCardsBox.innerHTML = `<div><h2>Loading..</h2></div>`
            this.fetchAndLoadTopic(topicID)
        }
    }

    selectViewTopics(e) {
        console.log("viewing all topics")
        this.selectTopicHeading.innerHTML = `
        <h2>Select a topic!</h2>
        `
        this.therapyCardsBox.innerHTML = ``
        e.preventDefault(e);
        this.renderTopics();
    }

    //Fetch and render Topic cards
    fetchAndLoadTopic(topicID){
        this.cards = []
        this.adapter.getTopic(topicID)
        .then(topic => {
            topic.cards.forEach(card => this.cards.push(new Card(card)))
            let index = Math.floor(Math.random()*topic.cards.length)
            let card = topic.cards[index]
             this.therapyCardsBox.innerHTML = `
                <div class="question-cards" id="${topicID}">
                <div class="card-title-container">
                    <br>
                    <h3 class="therapy-category" id="${topicID}">${topic.name}</h3>                        
                    <h3 class="card-style">-</h3>
                       </div>
                      <p class="therapy-content">${card.question}</p>
                        <button class="prev-button" value="prev"> <previous question</button>
                      <button class="skip-button" value="skip">next question > </button>
                     </div>
                    <div class="answer-cards">
                    <div class="answer-title-container">
                      <h3 class="answer-title">Write your answer below</h3>
                        <h3 class="answer-style">-</h3>
                        <form id="answer-form" data-card-id="${card.id}" autocomplete="off" >
                        <div class="input-field">
                        <textarea type="answer" class="textarea" name="response" id="new-response-body" placeholder="Your thoughts" required autofocus></textarea>
                      </div>
                        <button type="submit" form="answer-form" class="submit-button"  value="submit">submit</button>
                        </form>
                    </div>
                 </div>
                </div>`
            document.getElementById("answer-form").addEventListener('submit', this.createResponse)
            document.querySelector(".skip-button").addEventListener('click', () => this.fetchAndLoadTopic(topicID))
        })
    }

    createResponse(e){
        e.preventDefault()
        this.newResponseBody = document.getElementById("new-response-body")
        const formData = {
            response : this.newResponseBody.value,
            card_id : e.target.getAttribute("data-card-id")
        }
        this.adapter = new TopicsAdapter()
        this.adapter.createResponse(formData).then(response => {
        this.newResponseBody.value = ''
        })
    }

    //Responses
    fetchAndLoadResponses(){
        this.adapter = new TopicsAdapter()
        this.responses = []
        this.adapter.getResponses()
        .then(responses => {
            responses.forEach(response => this.responses.push(new Response(response)))
        })
        .then( () => {
            this.renderAllResponses()
        })
    }

    selectViewResponses(e){
        e.preventDefault(e)
        this.selectTopicHeading.innerHTML = ``
        console.log("viewing all responses!")
        this.therapyCardsBox.innerHTML = ``
        this.fetchAndLoadResponses();
    }

    renderAllResponses(){
        this.topicsBox.innerHTML = this.responses.map(response => response.renderResponse()).join('')
        this.topicsBox.addEventListener('click', this.handleDelete.bind(this))
    }
  
    handleDelete(e){
        e.preventDefault(e)
        if (e.target.type = "button"){
            this.deleteResponse(e)
        }
    }

    deleteResponse(e){
    e.preventDefault()
    this.response_id = e.target.getAttribute("data-card-id")
    this.adapter.deleteResponse(this.response_id)
        console.log(this)
    }
}