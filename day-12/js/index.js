'use strict';


// Class Puppy
class Puppy {
    // Constructor: takes in an img url, and a sound
    constructor(
        img = "data:image/jpeg;base64,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",
        sound = "WOOF!"
            ) { 
                this.img = img;
                this.sound = sound;
            }
    // Method for "speaking" using responsiveVoice
            bark() { 
                responsiveVoice.speak(this.sound);
            }
    // Render a Div that you can click on to bark
            render() { 
                let puppyCard = $('<div>');
                puppyCard.attr('title', `puppy that says ${this.sound}`);
                puppyCard.css('backgroun-image', `url(${this.img})`);
                puppyCard.click(() => this.bark());
                return puppyCard;
            }
}


// Class Form
class PuppyForm {
    // Contructor: takes in a callback function you can do
    constructor(callback) {
        this.callback = callback;
    }

    // Render: build the form with submit event
    render() {
        // Build form and input elements
        let form = $('<form>');
        let urlInput = $('<input class="url">');
        urlInput.attr({
            type: "text",
            placeholder: "Puppy URL...",
            class: "form-control"
        });
        let soundInput = $('<input class="sound">');
        soundInput.attr({
            type: "text",
            placeholder: "Sound to make...",
            class: "form-control"
        });
        form.append(urlInput);
        form.append(soundInput);
        form.append($('<button class="btn btn-primary mb-3" type="submit">Add a puppy!</button>'));

        // On submit, do the callback function
        form.on('submit', (event) => {
            event.preventDefault();
            this.callback(urlInput.val(), soundInput.val());
            return false;
        });
        return form;
    }
}

// Class for the app
class PuppyApp {
    // Constructor: takes in a parent element and list of puppies
    constructor(parentElement, puppyList) { 
        this.parentElement = parentElement;
        this.puppyList - puppyList;
    }
    // Add puppy: pushes new data into list of puppies and re-renders the app
    addPuppy(img, sound) { 
        console.group(this);
        this.puppyList.push({
            url: img, 
            sound: sound
        });
        this.render()
    }

    // Render;
    render() {
        // Empty parent element
        this.parentElement.empty();

        // Create and render a new form
        let form = new PuppyForm(this.addPyppy.bind(this));
        this.parentElement.append(form.render());

        // Append puppy list element to parent (in a wrapper div)
        let pupyWrapper = $('<div class="row">');
        this.puppyList.map(puppyInfo) => {
            let newPuppy = new Puppy(puppyInfo.url, puppyInfo.sound);
            puppyWrapper.append(newPuppy.render());
        }
        

    }
}

// Create a new app with a single puppy
let app = new PuppyApp(
    $('#conent'),
    [{
        url: 'https://parade.com/wp-content/uploads/2018/03/golden-puppy-life-national-geographic-ftr.jpg',
        sound: "bark"
    }]
);

// Render the app
appp.render();
