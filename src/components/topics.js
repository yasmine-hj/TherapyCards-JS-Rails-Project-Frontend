class Topics {
    constructor() {
        this.adapter = new TopicsAdapter()
        this.topics = []
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
    
    }

    renderTopics() {
        this.topicsBox.innerHTML = this.topics.map(topic => topic.renderTopicName()).join('')
    }
}