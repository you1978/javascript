const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#aaddff',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

let player;
let item;
let cursors;

const game = new Phaser.Game(config);

function preload() {
  this.load.image('player', 'https://labs.phaser.io/assets/sprites/bunny.png');
  this.load.image('item', 'https://labs.phaser.io/assets/sprites/apple.png');
}

function create() {
  player = this.physics.add.sprite(100, 100, 'player');
  item1 = this.physics.add.sprite(300, 100, 'item');
  item2 = this.physics.add.sprite(400, 100, 'item');

this.physics.add.overlap(player, item1, () => {
  console.log('🍎　りんご1を取った！');
  item1.disableBody(true, true);
}, null, this);

this.physics.add.overlap(player, item2, () => {
  console.log('🍓 りんご２を取った！');
  item2.disableBody(true, true);
}, null, this);

  cursors = this.input.keyboard.createCursorKeys();

}

function update() {
  player.setVelocity(0);
  if (cursors.left.isDown) player.setVelocityX(-200);
  if (cursors.right.isDown) player.setVelocityX(200);
  if (cursors.up.isDown) player.setVelocityY(-200);
  if (cursors.down.isDown) player.setVelocityY(200);
}

// 重なったときに実行される関数
function collectItem(player, item) {
  item.disableBody(true, true); // アイテムを消す
  console.log('🍎 アイテムを取った！');
}