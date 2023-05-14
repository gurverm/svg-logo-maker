class Shape{
    render(){
        return ``;
    }
}

class Circle extends Shape{
    constructor({text, textColor, bgColor}){
        super(),
        this.shape = ``;
        this.text = ``;
    }
}

class Triangle extends Shape{
    constructor({text, textColor, bgColor}){
        super(),
        this.shape = ``;
        this.text = ``;
    }
}
class Square extends Shape{
    constructor({text, textColor, bgColor}){
        super(),
        this.shape = ``;
        this.text = ``;
    }
}

module.exports = Shape;