class Topic {
    constructor(topic) {
        this.id = topic.id
        this.name = topic.name
        this.cards = topic.cards ? topic.cards : []
 
    }

    renderTopicName() {
        return `
           <button type="button" id="topic-button">
                <div class="topic-cards" data-id=${this.id}> 
                    <h3 class="therapy-category">${this.name}</h3>
                </div>
            </button>
               `
    }

    renderTopic(){
        returns `        
            ${this.renderTopicName()}
        `
    }

}