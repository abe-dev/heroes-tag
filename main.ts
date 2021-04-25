let mySprite = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f 1 f e e f f f . 
    f f e f f f f 4 4 f f . . 
    . f f f 9 9 f 9 9 9 . . . 
    . 4 9 f f f f e f f . . . 
    . e 9 f e 7 7 7 7 f . . . 
    . f e e f 6 6 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
music.playMelody("C5 E A - E B G - ", 392)
