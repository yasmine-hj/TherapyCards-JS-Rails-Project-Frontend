class Topic {
    constructor(topic) {
        this.id = topic.id
        this.name = topic.name
        this.cards = topic.cards ? topic.cards : []
 
    }

    renderTopicName() {
        return `
                <div class="topic-cards" data-id=${this.id}> 
                    <button type="button" id="topic-button">
                        <h3 class="therapy-category">${this.name}</h3>
                    </button>
                </div>

               `
    }

    renderTopic(){
        returns `
            ${this.renderTopicName()}
        `
    }

}