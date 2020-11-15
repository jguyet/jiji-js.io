const Jiji = require("jiji-js");

module.exports = {
    title: "Home",
    command: "$ npm install -g jiji-cli",
    constructor: function (callback) {
        /* before mount */
        callback();
    },
    mounted: function () {
        const controller = this;
        const canvas = document.querySelector('canvas'),
            context = canvas.getContext( '2d' );

        canvas.style.backgroundColor = 'black';
        canvas.height = document.body.clientHeight - 61;
        canvas.width = (window.innerWidth);
        // canvas.style.zIndex = -100;
        const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 8,
            STAR_SIZE = 3,
            STAR_MIN_SCALE = 0.2,
            OVERFLOW_THRESHOLD = 50;
        let scale = 1, // device pixel ratio
            width,
            height;
        let stars = [];
        let pointerX,
            pointerY;
        let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
        let touchInput = false;

        function generate() {
            const words = ['ji build', 'ji debug', 'ji new', 'ji g controller xyz', 'ji g index xyz'];
            const randHexColor = () => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                return "#" + randomColor;
            };
            const randColor = () => {
                const randomColor = () => Math.floor(Math.random()*256);
                return `${randomColor()},${randomColor()},${randomColor()}`;
            };

            for( let i = 0; i < STAR_COUNT; i++ ) {
                if (Math.floor(Math.random() * 2) == 1) {
                    var word = words[Math.floor(Math.random() * words.length)];
                    stars.push({
                        x: 0,
                        y: 0,
                        z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE ),
                        text: word
                    });
                } else {
                    stars.push({
                        x: 0,
                        y: 0,
                        z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE ),
                        shape: true,
                        color: randColor()
                    });
                }
            }
        }

        function placeStar( star ) {
            star.x = Math.random() * width;
            star.y = Math.random() * height;
        }

        function recycleStar( star ) {
            let direction = 'z';
            let vx = Math.abs( velocity.x ),
                vy = Math.abs( velocity.y );

            if( vx > 1 || vy > 1 ) {
                let axis;
                if( vx > vy ) {
                    axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
                }
                else {
                    axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
                }

                if( axis === 'h' ) {
                    direction = velocity.x > 0 ? 'l' : 'r';
                }
                else {
                    direction = velocity.y > 0 ? 't' : 'b';
                }
            }
            
            star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );

            if( direction === 'z' ) {
                star.z = 0.1;
                star.x = Math.random() * width;
                star.y = Math.random() * height;
            }
            else if( direction === 'l' ) {
                star.x = -OVERFLOW_THRESHOLD;
                star.y = height * Math.random();
            }
            else if( direction === 'r' ) {
                star.x = width + OVERFLOW_THRESHOLD;
                star.y = height * Math.random();
            }
            else if( direction === 't' ) {
                star.x = width * Math.random();
                star.y = -OVERFLOW_THRESHOLD;
            }
            else if( direction === 'b' ) {
                star.x = width * Math.random();
                star.y = height + OVERFLOW_THRESHOLD;
            }
        }
        function resize() {
            scale = window.devicePixelRatio || 1;
            width = window.innerWidth * scale;
            height = window.innerHeight * scale;
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight - 61;
            stars.forEach(placeStar);
        }

        function step() {
            context.clearRect( 0, 0, width, height );
            update();
            render();
            controller.requestAnimationFrameId = requestAnimationFrame( step );
        }

        function update() {
            velocity.tx *= 0.96;
            velocity.ty *= 0.96;

            velocity.x += ( velocity.tx - velocity.x ) * 0.8;
            velocity.y += ( velocity.ty - velocity.y ) * 0.8;

            stars.forEach(( star ) => {
                star.x += velocity.x * star.z;
                star.y += velocity.y * star.z;
                star.x += ( star.x - width/2 ) * velocity.z * star.z;
                star.y += ( star.y - height/2 ) * velocity.z * star.z;
                star.z += velocity.z;
                // recycle when out of bounds
                if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {
                    recycleStar( star );
                }
            });
        }

        function render() {
            stars.forEach( ( star ) => {
                if (star.shape) {
                    context.beginPath();
                    context.lineCap = 'round';
                    context.lineWidth = STAR_SIZE * star.z * scale;
                    context.strokeStyle = star.color ? `rgba(${star.color},${(0.5 + 0.5*Math.random())}` : `rgba(255,255,255,${(0.5 + 0.5*Math.random())}`;
                    context.beginPath();
                    context.moveTo( star.x, star.y );
                    var tailX = velocity.x * 2,
                        tailY = velocity.y * 2;
                    // stroke() wont work on an invisible line
                    if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
                    if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;
                    context.lineTo( star.x + tailX, star.y + tailY );
                    context.stroke();
                } else {
                    context.beginPath();
                    context.fillStyle = "#ffffff";
                    context.font = Math.round((STAR_SIZE * star.z * scale) * 2) + "px Arial";
                    var tailX = velocity.x * 2,
                        tailY = velocity.y * 2;
                    if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
                    if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;
                    context.fillText(star.text, star.x + tailX, star.y + tailY);
                }
            });
        }
        function movePointer( x, y ) {
            if ( typeof pointerX === 'number' && typeof pointerY === 'number' ) {
                let ox = x - pointerX,
                    oy = y - pointerY;
                velocity.tx = velocity.tx + ( ox / 8 * scale ) * ( touchInput ? 1 : -1 );
                velocity.ty = velocity.ty + ( oy / 8 * scale ) * ( touchInput ? 1 : -1 );
            }
            pointerX = x;
            pointerY = y;
        }
        function onMouseMove( event ) {
            touchInput = false;
            movePointer( event.clientX, event.clientY );
        }
        
        function onMouseLeave() {
        
            pointerX = null;
            pointerY = null;
        
        }

        generate();
        resize();
        step();

        window.onresize = resize;
        canvas.onmousemove = onMouseMove;
        canvas.ontouchend = onMouseLeave;
        document.onmouseleave = onMouseLeave;
    },
    destroy: function () {
        const canvas = document.querySelector('canvas'),
            context = canvas.getContext( '2d' )
        canvas.onmousemove = undefined;
        canvas.ontouchend = undefined;
        context.clearRect( 0, 0, canvas.width, canvas.height );
        document.onmouseleave = undefined;
        window.cancelAnimationFrame(this.requestAnimationFrameId);
        document.getElementsByTagName("canvas")[0].style.backgroundColor = 'transparent';
    },
    innerHTML: require("./home.html")
};