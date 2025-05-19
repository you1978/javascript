const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#333333',
    physics: {
        default: 'arcade',
        arcade: {
        debug: true
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
let targetX = 400;
let targetY = 300;

function preload() {
    // キャラクターの画像を読み込む
    this.load.image('bunny', 'assets/bunny.png');
}

function create() {
    // キャラクターを画面中央に配置
    player = this.physics.add.image(targetX, targetY, 'bunny');

    // クリックやタッチされた場所を取得
    this.input.on('pointerdown', function (pointer) {
        targetX = pointer.x;
        targetY = pointer.y;
    });
}

function update() {
    // プレイヤーをクリックされた位置に少しずつ移動する
    if (Phaser.Math.Distance.Between(player.x, player.y, targetX, targetY) > 5) {
        this.physics.moveTo(player, targetX, targetY, 200);
    } else {
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
    }
}