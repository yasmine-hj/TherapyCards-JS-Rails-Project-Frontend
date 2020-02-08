class Topic {
    constructor(topic) {
        this.id = topic.id
        this.name = topic.name
      
    }

    renderTopicName() {
        return `<div class="topic-cards" data-id=${this.id}>${this.name}</div>`
    }

    renderTopic(){
        returns `
            ${this.renderTopicName()}
        `
    }

}