namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d 8 d d d d d d d d 
d d d d d d d 8 d d d d d d d d 
d d d d d d 8 8 8 d d d d d d d 
d d d d d 8 8 8 8 8 d d d d d d 
d d d d 8 8 8 8 8 8 8 d d d d d 
d d d 8 8 8 8 8 8 8 8 8 d d d d 
d d 8 8 8 8 8 6 8 8 8 8 8 d d d 
8 8 8 8 8 8 6 6 6 8 8 8 8 8 8 8 
8 8 8 8 8 6 6 6 6 6 8 8 8 8 8 8 
8 8 8 8 6 6 6 6 6 6 6 8 8 8 8 8 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 . 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 . . . 6 6 6 6 6 6 6 
6 6 . 6 6 . . . . . 6 6 6 . 6 6 
. . . . . . . . . . . . . . . 6 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.hearts, 100)
    music.baDing.play()
})
let projectile: Sprite = null
let FruitChoice = 0
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`10000c000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0304040404040404040404040404040600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.coral0,sprites.builtin.oceanDepths8,sprites.builtin.oceanSand1,sprites.builtin.oceanSand2,sprites.builtin.oceanSand7,sprites.builtin.oceanSand3,sprites.builtin.oceanDepths2,sprites.builtin.coral5,sprites.builtin.oceanSand13,sprites.builtin.oceanSand9,sprites.builtin.oceanSand5,sprites.builtin.coral3,sprites.builtin.oceanSand6,myTiles.tile1,sprites.builtin.coral1,sprites.castle.rock1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundEast,sprites.castle.rock0],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(500, function () {
    FruitChoice = Math.randomRange(0, 2)
    if (FruitChoice == 0) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . c c c c c c . . . 
. . . . . . c 5 5 5 5 5 c c . . 
. . . . . c 5 5 5 5 5 5 5 5 c . 
. . . . c b b b b b b 5 5 5 c . 
. . . . c b b b b 1 b b c c . . 
. . . . c 1 1 b b 1 1 1 c . . . 
. . . c 1 1 1 1 b 1 1 1 c . . . 
. . . c 1 1 1 1 b 1 1 1 b b c c 
. . c c d 1 1 1 b 1 b 1 5 5 5 c 
. . c c d 1 c 1 1 1 b 1 b b 5 c 
. c c d d 1 1 1 1 1 b 1 f b 5 c 
f d d d 1 1 1 1 1 b b b f . c c 
f f f f f 1 1 1 b b 5 5 5 f . . 
. . . . . f f f 5 5 5 5 5 f . . 
. . . . . . . . f f f f f f . . 
`, -50, 0)
    } else if (FruitChoice == 1) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . c c 
. . . c 4 d 4 4 4 4 4 1 c c 4 c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
. c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
. f 4 4 4 4 1 c c 4 4 d f f . . 
. . f f 4 d 4 4 4 4 4 c f . . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
. . . . . . . . . . . . . . . . 
`, -50, 0)
    } else {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . c c . . . 
. . . . . . . . . . . . . . . c c c c 6 3 c . . 
. . . . . . . . . . . . . . c 6 3 3 3 3 6 c . . 
. . . . . . . . . . c c . c 6 c c 3 3 3 3 3 c . 
. . . . . . . . . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
. . . . . . . . . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
. . . . . . . . . f f 5 c 6 c 5 f f 6 3 3 3 c c 
. . . . . . . . . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
. . . . . . . . . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
. . . . . . . . . c c 5 5 5 5 5 b c c 3 3 3 3 c 
. . . . . . . . c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
. . . . . . . . b 5 4 b 4 4 4 4 b b 5 c b b . . 
. . . . . . . . c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
. . . . . . . . c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
. . . . . . . . c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
. . . . . . . . . c c c c c c c c c . . c c c . 
`, -50, 0)
    }
    projectile.setPosition(160, Math.randomRange(10, 120))
    projectile.setKind(SpriteKind.Food)
})
