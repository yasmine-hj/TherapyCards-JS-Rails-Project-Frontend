class Topics {
    constructor(){
        this.topics = []
        this.cards = []
        this.responses = []
        this.adapter = new TopicsAdapter()
        this.fetchAndLoadTopics()
        this.domElements()
        this.initListeners()
    }

    // Dom elements
    domElements(){
        this.topicsBox = document.querySelector(".card-container");
        this.topicCard = document.querySelector('.topic-cards');
        this.therapyCardsBox = document.querySelector('.therapy-card');
        this.selectTopicHeading = document.querySelector('.select-a-topic');
        this.responseCardFormBox = document.querySelector('.new-response-form');
        this.viewAllTopics = document.querySelector(".see-topics-button");
        this.viewAllResponses = document.querySelector(".see-responses-button");
    }

    // Event listeners
    initListeners(){
        this.viewAllTopics.addEventListener('click', this.selectViewTopics.bind(this))
        this.viewAllResponses.addEventListener('click', this.selectViewResponses.bind(this))
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
        if (e) e.preventDefault()
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
                        <button class="skip-button" value="skip">skip question > </button>
                    </div>
                    <div> 
                        <div class="answer-cards">
                            <div class="answer-title-container">
                            <h3 class="answer-title">Write your answer below</h3>
                            <h3 class="answer-style">-</h3>
                            form id="answer-form" autocomplete="off" >
                                <div class="input-field">
                              <textarea type="answer" class="textarea" name="response" id="new-response" placeholder="Your thoughts" required autofocus></textarea>
                                </div>
                            <button type="submit" form="answer-form" class="submit-button" value="submit">submit</button>
                            </form>
                       </div>
                     </div>
                </div>`
            document.getElementById("answer-form").addEventListener('submit', this.submitResponse)
            document.querySelector(".skip-button").addEventListener('click', this.skipQuestion.bind(this))
        })
    }

    skipQuestion(e){
        const cards = this.cards
        e.preventDefault()
        console.log(this.cards)
        let index = Math.floor(Math.random()*this.cards.length)
        let card = cards[index]
    }

    submitResponse(e){
        e.preventDefault()
        // this.response = []
        // const response = this.renderNewResponse.value
        // this.adapter.createResponse(response)
        // .then(response => {
        //     this.responses.push(new Response(response))
        //     this.renderNewResponse(response)
        // })
        console.log("submited")
    }

    //Responses
    fetchAndLoadResponses(){
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
        console.log("viewing all responses!")
        this.therapyCardsBox.innerHTML = ``
        this.renderAllResponses();
    }

    renderAllResponses(){
        this.topicsBox.innerHTML = this.responses.map(response => response.renderResponse()).join('')
    }

    renderNewResponse(){
        return this.topicsBox.innerHTML = `
        <div class="card-container">
            <div class="question-cards">
                <div class="card-title-container">
                <br>
                 <h3 class="therapy-category">${topic.name}</h3>
                 <h3 class="card-style">-</h3>
                </div>
            <p class="therapy-content">${card.question}</p>
            </div>
            <div class="answer-cards">
            <div class="answer-title-container">
                <h3 class="answer-title">Write your answer below</h3>
                <h3 class="answer-style">-</h3>
            <form id="answer-form" autocomplete="off" >
                <div class="input-field">
                    <textarea type="answer" class="textarea" name="response" id="response">${this.response}</textarea>
                </div>
                    <button type="submit" form="answer-form" class="submit-button" value="submit">submit</button>
            </form>
            </div>
        </div>
        </div>`
    }
}