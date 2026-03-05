function describeRoom(roomName) {
    if (roomName === "foyer") {
        return "The foyer is quiet and covered in dust.";
    } else if (roomName === "hallway") {
        return "The hallway is dark and feels endless.";
    } else if (roomName === "kitchen") {
        return "The kitchen smells old and something feels wrong.";
    } else {
        return "This room feels strange and unfamiliar.";
    }
}

console.log(describeRoom("foyer"));
console.log(describeRoom("hallway"));
console.log(describeRoom("kitchen"));
console.log(describeRoom("basement"));


let exampleNode = {
    image: "images/entrance.jpg",
    text: "You stand at the entrance of the abandoned house. The door creaks behind you.",
    choices: ["Walk forward", "Leave the house"]
};

console.log(exampleNode.image);
console.log(exampleNode.text);
console.log(exampleNode.choices);


let storyNodes = [
    {
        image: "images/entrance.jpg",
        text: "You are standing in the entrance. The air is cold and disugsting.",
        choices: ["Go to the hallway", "Look around"]
    },
    {
        image: "images/hallway.jpg",
        text: "You step into a long hallway. The floorboards roar under your feet.",
        choices: ["Enter the kitchen", "Go upstairs"]
    },
    {
        image: "images/kitchen.jpg",
        text: "The kitchen is covered in dust. Old and dirty disgusting plates sit on the table.",
        choices: ["Open the fridge", "Go back to the hallway"]
    },
    {
        image: "images/upstairs.png",
        text: "You reach the upstairs landing. A door is slightly open.",
        choices: ["Open the door", "Go back downstairs"]
    }
];


function displayNode(index) {
    let node = storyNodes[index];

    let imageElement = document.getElementById("scene-image");
    let textElement = document.getElementById("scene-text");

    imageElement.src = node.image;
    textElement.textContent = node.text;
}


displayNode(0);