class BaseAdapter {
    constructor(baseURL = 'http://localhost:3000'){
        this.baseURL = baseURL
        this.authSetup()
    }

    checkRsp(rsp){
        if (!rsp.ok){
            throw rsp
        }
    }

    async getCards(topicID){
        const rsp = await fetch(${this.baseURL}/subjects/${subjectId}/flashcards`, {
            credentials: 'include')
        })
    }


}