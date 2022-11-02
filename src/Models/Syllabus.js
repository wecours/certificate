
export default class Syllabus {
    part = []

    /**
     * 
     * @param {String} part 
     */
    constructor(part){
        part && this.part.push(part);
    }

    /**
     * 
     * @param {String} part 
     */
    addPart(part){
        this.part.push(part);
    }
}