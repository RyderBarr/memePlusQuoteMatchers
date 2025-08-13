let memes = [
    'https://i.pinimg.com/236x/23/41/7c/23417c1ee1e24c31446b5666d5017595.jpg',// 1
    'https://images.cdn-files-a.com/uploads/1918596/2000_5c676ebc029b5.jpg',// 2
    'https://www.meme-arsenal.com/memes/d29321fec73e3036daa58d08482527d8.jpg',//3
    'https://ih1.redbubble.net/image.4725745836.5629/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg',//4
    'https://content.imageresizer.com/images/memes/Screaming-meme-6.jpg',// 5
    'https://www.meme-arsenal.com/memes/70fc4ad29ec9e77759738a4526d31952.jpg',// 6
    'https://static.pbslearningmedia.org/media/collections/1aguu4.jpg',// 7
    'https://pm1.aminoapps.com/7571/98cdfbd20c23039902e3a46025498e77d518e094r1-749-442v2_hq.jpg',// 8
    'https://i.pinimg.com/200x150/1d/d9/10/1dd9102e9e36e28f26adddfca9fddb21.jpg',// 9
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7QYxOTZ6LHEc8Dep6irpbDuy35_QTVGQTA&s', //10
    'https://i.pinimg.com/236x/50/fe/2b/50fe2b0cd9274aca7575556e1b6644d9.jpg',// 11
    'https://i.redd.it/z10g17uoptx91.jpg',// 12
    'https://www.treehugger.com/thmb/_Laad-vOB6g7JbXo15sSfZY9B8I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__04__Platypus-Swimming-Water-61eea67f3ffa47d18bf47e79d73f2c6e.jpg',//13
    'https://i.ytimg.com/vi/yV_wA62bbtk/maxresdefault.jpg',//14
    'https://www.vexforum.com/uploads/default/original/3X/6/4/64a5140c67b1b3552ab6e890e535c2fb0c3ee8e9.jpeg',//15
    'https://i1.sndcdn.com/avatars-0Zvzb8BbIDCteRnH-X0P3Ng-t1080x1080.jpg',//16
    'https://ih1.redbubble.net/image.2527780669.6340/raf,360x360,075,t,fafafa:ca443f4786.jpg',//17
    'https://i.imgflip.com/8tw3vb.png',//18
    'https://i.imgflip.com/27qxmb.jpg',//19
    'https://pbs.twimg.com/profile_images/1467777507675951115/Nl3EgI_y_400x400.jpg',//20

]

let quotes = [
    'when there is only 5min left of lunch',//1
    'when you want to hang up but can\'t because your freind is yapping',//2
    'when your parents won\'t get the skylander that cost $10 dollars',//3
    'loss.jpg',//4
    '*confused screaming*',//5
    'me: tomorrow is my friend\'s birthday <br> also me, the day after:',//6
    'POV: <br> \" do you like my new hair cut\"',//7
    'when someone doesn\'t just use an attacking move',//8
    'Is this a pigeon',//9
    'POV: kanye',//10
    'Hey kid I have a PS4 down here',//11
    'when you see a website without css',//12
    'pov: you incounter the most venomous mammal in the world',//13
    'me running to the Nigerian Prince that needs a loan to dig gold',//14
    'the moon in zelda for no reason',//15
    '<span class="text-orange-900 font-mono font-light ">jazz</span>',//16
    'the zoom meeting just started',//17
    'whale are fish | whale are mammals | whale are fish',//18
    'you know im something of a spider-man my self',//19
    `I mean you know <br> the rules <br> <span class=" text-xs ">
    A full commitment's what I'm thinkin' of <br>
    You wouldn't get this from any other guy <br>
    I just wanna tell you how I'm feeling <br>
    Gotta make you understand <br>
    Never gonna give you up, never gonna let you down <br>
    Never gonna run around and desert you <br>
    Never gonna make you cry, never gonna say goodbye <br>
    Never gonna tell a lie and hurt you <br>
    We've known each other for so long <br>
    Your heart's been aching, but you're too shy to say it <br>
    Inside, we both know what's been going on <br>
    We know the game and we're gonna play it <br>
    And if you ask me how I'm feeling <br>
    Don't tell me you're too blind to see <br>
    Never gonna give you up, never gonna let you down <br>
    Never gonna run around and desert you <br>
    Never gonna make you cry, never gonna say goodbye <br>
    Never gonna tell a lie and hurt you <br>
    Never gonna give you up, never gonna let you down <br>
    Never gonna run around and desert you <br>
    Never gonna make you cry, never gonna say goodbye <br>
    Never gonna tell a lie and hurt you <br>
    We've known each other for so long <br>
    Your heart's been aching, but you're too shy to say it <br>
    Inside, we both know what's been going on <br>
    We know the game and we're gonna play it <br>
    I just wanna tell you how I'm feeling <br>
    Gotta make you understand <br>
    Never gonna give you up, never gonna let you down <br>
    Never gonna run around and desert you <br>
    Never gonna make you cry, never gonna say goodbye <br>
    Never gonna tell a lie and hurt you <br>
    Never gonna give you up, never gonna let you down <br>
    Never gonna run around and desert you <br>
    Never gonna make you cry, never gonna say goodbye <br>
    Never gonna tell a lie and hurt you <br>
    Never gonna give you up, never gonna let you down <br>
    Never gonna run around and desert you <br>
    Never gonna make you cry, never gonna say goodbye <br>
    Never gonna tell a lie and hurt you </span>`,//20
]

let index = [

    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20

]

$(document).ready(function(){

    function populate()
    {

        for (let i = 1;i < memes.length; i++)
        {
    
            $('#gallery').append(`
                
                <div class='flex flex-col m-5 justify-center items-center border bg-yellow-300'>
                    <img src="${memes[i]}" alt="" class='w-[70vw] p-2'>
                    <h2 class=' p-2 w-[70vw] text-center self-center text-purple-500 font-bold text-2xl'>${quotes[i]}</h2>
                </div>

                `)

        }

    }

    populate()

    $('#add').on('click', function(event)
    {

        $('#gallery').append(`
                
                <div class='flex flex-col m-5 justify-center items-center border bg-yellow-300'>
                    <img src="${memes[i]}" alt="" class='w-[70vw] p-2'>
                    <h2 class=' p-2 w-[70vw] text-center self-center text-purple-500 font-bold text-2xl'>${quotes[i]}</h2>
                </div>

                `)

    })

    $('#suffle').on('click', function(event)
    {



    })

    $('#search').on('click', function(event)
    {



    })

    $('#randomCombo').on('click', function(event)
    {



    })
    
})





function addContent(url, quote)
{

    memes.push(url);
    quotes.push(quote);

}

function shuffleContent()
{

    populateGallery(true)

}

function randomCombo()
{

    

}