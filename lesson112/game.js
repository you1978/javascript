const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#87ceeb',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player;
let cursors;
let item;
let score = 0;
let scoreText;

function preload() {
  this.load.image('player', 'https://labs.phaser.io/assets/sprites/bunny.png');
  this.load.image('item', 'https://labs.phaser.io/assets/sprites/apple.png');
}

function create() {
  player = this.physics.add.sprite(100, 100, 'player');
  item = this.physics.add.sprite(400, 300, 'item');

  scoreText = this.add.text(16, 16, 'スコア: 0', {
    fontSize: '24px',
    fill: '#000'
  });

  cursors = this.input.keyboard.createCursorKeys();

  this.physics.add.overlap(player, item, collectItem, null, this);

  let items = this.physics.add.group();
 　for (let i = 0; i < 10; i++) {
    let x = Phaser.Math.Between(100, 700);
    let y = Phaser.Math.Between(100, 500);
    let newItem = items.create(x, y, 'item');
    }
　this.physics.add.overlap(player, items, collectItem, null, this);
}

function update() {
  player.setVelocity(0);

  if (cursors.left.isDown) player.setVelocityX(-200);
  if (cursors.right.isDown) player.setVelocityX(200);
  if (cursors.up.isDown) player.setVelocityY(-200);
  if (cursors.down.isDown) player.setVelocityY(200);
}

function collectItem(player, item) {
  item.disableBody(true, true);
  score += 10;
  scoreText.setText('スコア: ' + score);
}
