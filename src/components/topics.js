class Topics {
    
    constructor(){
        this.topics = []
        this.cards = []
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

    fetchAndLoadTopic(topicID){
        this.cards = []
        this.adapter.getTopic(topicID)
        .then(topic => {
            topic.cards.forEach(card => this.cards.push(new Card(card)))
            const index = Math.floor(Math.random()*topic.cards.length)
            const card = topic.cards[index]
             this.topicsBox.innerHTML = `
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
                        </div>
                        <div class="input-field">
                            <textarea type="answer" class="textarea" name="response" id="response" placeholder="Your thoughts" required autofocus></textarea>
                        </div>
                        <button type="submit" id="submit" class="submit-button" value="submit">Submit</button>
                    </form>
                    </div>
                </div>
                </div>`
                document.querySelector("#answer-form").addEventListener('submit', this.onSubmit.bind(this))
1
        })
    }

    onSubmit(){
        console.log(works)
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
        if (e) e.preventDefault()
        const topicID = e.target.dataset.id
        if(e.target && e.target.className == "topic-cards") {
            console.log("List item ", topicID, " was clicked!");
            console.log(this.fetchAndLoadTopic)
            // this.renderCards(topicID)
            this.topicsBox.innerHTML = `<div>loading</div>`
            this.fetchAndLoadTopic(topicID)
        }
  };  

     selectViewTopics(e) {
        console.log(this)
        e.preventDefault(e);
        this.renderTopics();
    }




}