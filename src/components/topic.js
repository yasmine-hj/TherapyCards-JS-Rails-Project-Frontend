class Topic {
    constructor(topic) {
        this.id = topic.id
        this.name = topic.name
      
    }

    renderTopicHeader(){
        return `<h1>Topic Header!</h1>`
    }
    renderTopicName() {
        return `<li class="topic-cards" data-id=${this.id}>${this.name}</li>`
    }

    renderTopic(){
        returns `
            ${this.renderTopicHeader()}
            ${this.renderTopicName()}
        `
    }

}