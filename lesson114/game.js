const config = {
    type: Phaser.AUTO, 
    width: 800,
    height: 600,
    backgroundColor: '#cceeff',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update // 更新用の関数定義
    }
}

const game = new Phaser.Game(config);

function preload(){
    this.load.image('player','assets/player.png');
    this.load.image('bullet','assets/bullet5.png');
    this.load.image('enemy','assets/ufo.png');
}

let player;
let bulles;
let cursors;
let enemies;
let scoreText;
let lastFired = 0;
let lastEnemyTime = 0;
let score = 0;

function bulletHitsEnemy(bullet,enemy){
    bullet.setActive(false);
    bullet.setVisible(false);
    enemy.destroy();
    score += 10;
    scoreText.setText('Score: ' + score);
}

function create(){
    player = this.physics.add.sprite(400,550,'player');
    player.setCollideWorldBounds(true);

    bulles = this.physics.add.group({
        classType: Phaser.Physics.Arcade.Image,
        maxSize: 30,
        runChildUpdate: true
    })

    enemies = this.physics.add.group();

    scoreText = this.add.text(16,16,'Score: 0', {
        fontSize: '24px',
        fill: '#000'
    });

    cursors = this.input.keyboard.createCursorKeys();

    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // 当たり判定
    this.physics.add.overlap(bulles,enemies,bulletHitsEnemy,null,this);
}





function update(time){
    if( cursors.left.isDown ){
        player.setVelocityX(-200);
    }else if( cursors.right.isDown ){
        player.setVelocityX(200);
    }else{
        player.setVelocityX(0);
    }

    if( this.spaceKey.isDown && time > lastFired ){
        const bullet = bulles.get(player.x,player.y-20,'bullet');
        if( bullet ){
            console.log("create");
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.body.velocity.y = -400;
            lastFired = time + 300;
        }
    }

    bulles.children.each( function(b) {
        if(b.active && b.y < 0){
            b.setActive(false);
            b.setVisible(false);
        }
    },true);
    
    if( time > lastEnemyTime + 1000 ){
        const x = Phaser.Math.Between(50,750);
        const enemy = enemies.create(x,0,'enemy');
        enemy.setVelocityY(100);
        lastEnemyTime = time;
    }
    
    enemies.children.each(function(enemy){
        if( enemy.y > 600){
            enemy.destroy();
        }
    },this)
}




