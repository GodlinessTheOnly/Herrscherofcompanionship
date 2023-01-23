sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    Jelly1.startEffect(effects.rings, 100)
    Jelly2.startEffect(effects.rings, 100)
})
let Jelly2: Sprite = null
let Jelly1: Sprite = null
Jelly1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . 2 a a a a a 2 . . . . . 
    . . . . 2 1 f a f 1 2 . . . . . 
    . . . . 2 a a a a a 2 . . . . . 
    . . . . 2 a a f a a 2 . . . . . 
    . . . 2 2 2 a a a 2 2 2 . . . . 
    . . . 2 a 2 2 2 2 2 a 2 . . . . 
    . . . 2 2 2 2 2 a 2 2 2 . . . . 
    . . . . . 2 a 2 2 2 . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(Jelly1)
Jelly2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 9 9 9 9 9 8 . . . . 
    . . . . . 8 f f 9 f f 8 . . . . 
    . . . . . 8 9 9 9 9 9 8 . . . . 
    . . . . . 8 9 9 f 9 9 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 . . 8 . . 8 . . . . 
    . . . . . . 8 . . 8 . . 8 . . . 
    . . . . . 8 . . 8 . . 8 . . . . 
    . . . . . . 8 . . 8 . . 8 . . . 
    . . . . . 8 . . 8 . . 8 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(Jelly2)
Jelly1.setPosition(16, 11)
Jelly2.setPosition(140, 96)
Jelly1.setStayInScreen(true)
Jelly2.setStayInScreen(true)
