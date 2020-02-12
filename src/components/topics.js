class Topics {
    
    constructor(){
        this.topics = []
        this.adapter = new TopicsAdapter()
        this.fetchAndLoadTopics()
        this.renderTopics()
        this.domElements()
        this.initListeners()
    }

    //Fetch and render Topics cards
    fetchAndLoadTopics(){
        this.adapter.getTopics()
        .then(topics => {
            topics.forEach(topic => this.topics.push(new Topic(topic)))
        })
        .then( () => {
            this.renderTopics()
        })
    }

    fetchAndLoadTopic(){
        this.adapter.getTopics()
        .then(topic => {
            topic.forEach(card => this.topics.push(new Topic(topic)))
        })
        .then( () => {
            this.renderTopics()
        })
    }

    renderTopics(){
        this.topicsBox = document.querySelector(".card-container");
        this.topicsBox.innerHTML = this.topics.map(topic => topic.renderTopicName()).join('')
    }

    // Dom elements
    domElements(){
        this.topicsBox = document.querySelector(".card-container");
        this.topicCard = document.querySelector('.topic-cards');
        this.selectTopicHeading = document.querySelector('.select-a-topic');
        this.responseCardFormBox = document.querySelector('.new-response-form');
        this.responseCardsBox = document.querySelector('.answerCard');
        this.cardsBox = document.querySelector('.bottom');
        this.viewAllTopics = document.querySelector(".see-topics-button")
        console.log(this.viewAllTopics)
    }

    initListeners(){
        this.topicsBox.addEventListener('click', this.selectCard.bind(this))
        this.viewAllTopics.addEventListener('click', this.selectViewTopics.bind(this))
    }

    //Question and answer Cards
    selectCard(e){
        console.log(e)
        if (e) e.preventDefault()
        let topicID = e.target.dataset.id
        if(e.target && e.target.className == "topic-cards") {
            console.log("List item ", topicID, " was clicked!");

            this.topicsBox.innerHTML = `
            
        <div class="card-container">
            <div class="question-cards">
              <div class="card-title-container">
                <br>
                <h3 class="therapy-category">Relationships</h3>
                <h3 class="card-style">-</h3>
              </div>
              <p class="therapy-content">
                How might you evolve in the way you express disappointment with a
                partner?
              </p>
            </div>
            <div class="answer-cards">
              <div class="answer-title-container">
                <h3 class="answer-title">Write your answer below</h3>
                <h3 class="answer-style">-</h3>
                <form id="quiz-form" autocomplete="off">
                <div id="quiz-warning">
                </div>
                <div class="input-field">
                    <textarea type="answer" class="textarea" name="response" id="response" placeholder="Your thoughts" required autofocus></textarea>
                </div>
                <button id="submit" class="submit-button">submit</button>
            </form>
            </div>
          </div>
          </div>`
        }
  };  



     selectViewTopics(e) {
        console.log(this)
        e.preventDefault(e);
        this.renderTopics();
    }


}