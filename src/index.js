import Phaser from "phaser";

function preload() {}

function create() {
    this.add.image(400, 300, "sky");
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 },
        },
    },
    scene: {
        preload: preload,
        create: create,
    },
};

const game = new Phaser.Game(config);
