class TopicsAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000/topics'
    }

    getTopics(){
        return fetch(this.baseURL)
        .then(res => res.json())
    }

    getTopic(topicId){
        return fetch(`${this.baseURL}/${topicId}`)
        .then(res => res.json())
    }

    getResponses(){
        return fetch(`http://localhost:3000/responses`)
        .then(res => res.json())
    }

    createResponse(value){
        const response = {
            response: value,
          }
        return fetch(`http://localhost:3000/responses`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({response})
        })
        .then(res => res.json())
    }   
}