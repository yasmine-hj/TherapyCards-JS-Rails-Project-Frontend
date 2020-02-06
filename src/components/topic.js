class Topic {
    constructor(topic) {
        this.id = topic.id
        this.name = topic.name
        this.description = topic.description
        this.cards = topic.cards ? topic.cards : []
    }

    renderTopicName() {
        return `<li class="topic-list" data-id=${this.id}>${this.name}</li>`
    }

}