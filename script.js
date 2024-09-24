document.addEventListener('DOMContentLoaded', function () {
    const songLinks = {
        'am' : {
            '1' : {
                '1' : {
                    'name' : 'Omar Apollo - Evergreen',
                    'link' : 'https://www.youtube.com/embed/ixTkLjTBQyk'
                },
                '2' : {
                    'name' : 'Japanese Denim',
                    'link' : 'https://www.youtube.com/embed/6OkneaH-eTA'
                },
                '3' : {
                    'name' : 'Moon River - Frank Ocean',
                    'link' : 'https://www.youtube.com/embed/mXiFHDfvn4A'
                },
                '4' : {
                    'name' : 'Bruno Major - Easily',
                    'link' : 'https://www.youtube.com/embed/XTKn5fTBGeQ'
                },
                '5' : {
                    'name' : 'Joji - YEAH RIGHT',
                    'link' : 'https://www.youtube.com/embed/tG7wLK4aAOE'
                },
                '6' : {
                    'name' : 'SUPERPOSITION',
                    'link' : 'https://www.youtube.com/embed/yyTugx3LnE8'
                }
            },
            '2' : {
                '1' : {
                    'name' : 'Sailor Song - Gigi Perez',
                    'link' : 'https://www.youtube.com/embed/iGEAzeK9wuc'    
                },
                '2' : {
                    'name' : 'Beabadoobee - Soren',
                    'link' : 'https://www.youtube.com/embed/NUENubp8g9M'
                },
                '3' : {
                    'name' : 'Parachutes - Coldplay',
                    'link' : 'https://www.youtube.com/embed/r4l9bFqgMaQ'
                },
                '4' : {
                    'name' : 'I Don\'t Wanna Be Okay Without You',
                    'link' : 'https://www.youtube.com/embed/ybQA720eyIE'
                },
                '5' : {
                    'name' : 'Waiting Room',
                    'link' : 'https://www.youtube.com/embed/VUOwg6nhuzA'
                },
                '6' : {
                    'name' : 'Finish Line',
                    'link' : 'https://www.youtube.com/embed/DuFwjqnapcg'
                }
            },
            '3' : {
                '1' : {
                    'name' : 'Hozier - Cherry Wine',
                    'link' : 'https://www.youtube.com/embed/SdSCCwtNEjA'    
                },
                '2' : {
                    'name' : 'Lizzy McAlpine - Better Than This',
                    'link' : 'https://www.youtube.com/embed/zRexeIEFbRE'
                },
                '3' : {
                    'name' : 'In Your Atmosphere',
                    'link' : 'https://www.youtube.com/embed/ZZ4defaop8k'
                },
                '4' : {
                    'name' : 'Sparks',
                    'link' : 'https://www.youtube.com/embed/Ar48yzjn1PE'
                },
                '5' : {
                    'name' : 'Sufjan Stevens - "To Be Alone With You"',
                    'link' : 'https://www.youtube.com/embed/N3zu9NucyBg'
                },
                '6' : {
                    'name' : 'Place To Be',
                    'link' : 'https://www.youtube.com/embed/jvLtyyBRITo'
                }
            },
            '4' : {
                '1' : {
                    'name' : 'Words',
                    'link' : 'https://www.youtube.com/embed/IXaMF4FqIkM'    
                },
                '2' : {
                    'name' : 'searows- end of the world',
                    'link' : 'https://www.youtube.com/embed/e5eik2jffhk'
                },
                '3' : {
                    'name' : 'Rosyln - Bon Iver & St. Vincent',
                    'link' : 'https://www.youtube.com/embed/-OCIiQNHEhw'
                },
                '4' : {
                    'name' : 'Novo Amor - Anchor',
                    'link' : 'https://www.youtube.com/embed/OmKAn8rNbKg'
                },
                '5' : {
                    'name' : 'Zach Webb - Found',
                    'link' : 'https://www.youtube.com/embed/iXzy2zY1HOM'
                },
                '6' : {
                    'name' : 'Alps - Novo Amor',
                    'link' : 'https://www.youtube.com/embed/w0VaGbkzQZ8'
                }
            },
            '5' : {
                '1' : {
                    'name' : 'Erik Satie - Gymnopédie',
                    'link' : 'https://www.youtube.com/embed/S-Xm7s9eGxU'    
                },
                '2' : {
                    'name' : 'Beethoven | Piano Sonata',
                    'link' : 'https://www.youtube.com/embed/rlJHNufol8Q'
                },
                '3' : {
                    'name' : 'Wyoming - Elijah Fox',
                    'link' : 'https://www.youtube.com/embed/MWERAZARYMw'
                },
                '4' : {
                    'name' : 'Bleached',
                    'link' : 'https://www.youtube.com/embed/0pHR4_cyIuA'
                },
                '5' : {
                    'name' : 'The Mercy of the Wind',
                    'link' : 'https://www.youtube.com/embed/DX6QHjx_RYw'
                },
                '6' : {
                    'name' : 'Following the Clock to Sleep',
                    'link' : 'https://www.youtube.com/embed/5ozyWTjva_k'
                }
            },
            '6' : {
                '1' : {
                    'name' : 'peachy! • falling for you',
                    'link' : 'https://www.youtube.com/embed/RSXiNSiiCsg'    
                },
                '2' : {
                    'name' : 'Lost in You',
                    'link' : 'https://www.youtube.com/embed/I1UeM184MoU'
                },
                '3' : {
                    'name' : 'Cut My Hair',
                    'link' : 'https://www.youtube.com/embed/iuLPgRLR-w0'
                },
                '4' : {
                    'name' : 'sagun - Ill Keep You Safe',
                    'link' : 'https://www.youtube.com/embed/KCZqguEKdBc'
                },
                '5' : {
                    'name' : 'Coffee Breath',
                    'link' : 'https://www.youtube.com/embed/EpcQwTkOonw'
                },
                '6' : {
                    'name' : 'Monday Loop',
                    'link' : 'https://www.youtube.com/embed/xlRRv9TpsoE'
                }
            },
            '7' : {
                '1' : {
                    'name' : 'Norah Jones - Sunrise',
                    'link' : 'https://www.youtube.com/embed/fd02pGJx0s0'    
                },
                '2' : {
                    'name' : 'Banana Pancakes',
                    'link' : 'https://www.youtube.com/embed/m-v-LGOfaKo'
                },
                '3' : {
                    'name' : 'Im Yours',
                    'link' : 'https://www.youtube.com/embed/EkHTsc9PU2A'
                },
                '4' : {
                    'name' : 'Landslide',
                    'link' : 'https://www.youtube.com/embed/radHy4HhhNg'
                },
                '5' : {
                    'name' : 'Plain White Ts - Hey There Delilah',
                    'link' : 'https://www.youtube.com/embed/h_m-BjrxmgI'
                },
                '6' : {
                    'name' : 'Kiss Me',
                    'link' : 'https://www.youtube.com/embed/CAC-onWPMB0'
                }
            },
            '8' : {
                '1' : {
                    'name' : 'Dominic Fike - How Much Is Weed?',
                    'link' : 'https://www.youtube.com/embed/4t-zLt3uYcI'    
                },
                '2' : {
                    'name' : '4ever',
                    'link' : 'https://www.youtube.com/embed/tlGUom_AV4o'
                },
                '3' : {
                    'name' : 'Take a bite',
                    'link' : 'https://www.youtube.com/embed/BCCAKg5bQvU'
                },
                '4' : {
                    'name' : 'Tree Among Shrubs',
                    'link' : 'https://www.youtube.com/embed/IOquW8xcV0w'
                },
                '5' : {
                    'name' : 'Abigail',
                    'link' : 'https://www.youtube.com/embed/uIBSPrX-wj8'
                },
                '6' : {
                    'name' : 'Better in the Dark',
                    'link' : 'https://www.youtube.com/embed/pqZOj9O8bxc'
                }
            },
            '9' : {
                '1' : {
                    'name' : 'Blue World',
                    'link' : 'https://www.youtube.com/embed/_GC2wFTCAGY'    
                },
                '2' : {
                    'name' : 'She Wants My Money',
                    'link' : 'https://www.youtube.com/embed/0xwzWgjy3Sk'
                },
                '3' : {
                    'name' : 'Lost',
                    'link' : 'https://www.youtube.com/embed/bZG3YWe7VJw'
                },
                '4' : {
                    'name' : 'Devil in a New Dress',
                    'link' : 'https://www.youtube.com/embed/sk3rpYkiHe8'
                },
                '5' : {
                    'name' : 'Come Back To Earth',
                    'link' : 'https://www.youtube.com/embed/W4ocPPhtglU'
                },
                '6' : {
                    'name' : 'Crack Rock',
                    'link' : 'https://www.youtube.com/embed/IVzzw7Vkiyg'
                }
            },
            '10' : {
                '1' : {
                    'name' : 'Drive By',
                    'link' : 'https://www.youtube.com/embed/oxqnFJ3lp5k'    
                },
                '2' : {
                    'name' : 'Must Get Out',
                    'link' : 'https://www.youtube.com/embed/kSsFN8g9FBM'
                },
                '3' : {
                    'name' : 'Tears Dry On Their Own',
                    'link' : 'https://www.youtube.com/embed/ojdbDYahiCQ'
                },
                '4' : {
                    'name' : 'The Man who cant be moved',
                    'link' : 'https://www.youtube.com/embed/XHPOlxyKA3o'
                },
                '5' : {
                    'name' : 'Smile - Lily Allen',
                    'link' : 'https://www.youtube.com/embed/0WxDrVUrSvI'
                },
                '6' : {
                    'name' : 'Aint it fun',
                    'link' : 'https://www.youtube.com/embed/EFEmTsfFL5A'
                }
            },
            '11' : {
                '1' : {
                    'name' : 'Nine Ball',
                    'link' : 'https://www.youtube.com/embed/DG3pGOvbIqc'    
                },
                '2' : {
                    'name' : 'Chris Stapleton - You Should Probably Leave',
                    'link' : 'https://www.youtube.com/embed/8e7S8l4s1OM'
                },
                '3' : {
                    'name' : 'Porch Light - Josh Meloy',
                    'link' : 'https://www.youtube.com/embed/aXQ6OOeYG-w'
                },
                '4' : {
                    'name' : 'Luke Combs – Ain’t No Love In Oklahoma',
                    'link' : 'https://www.youtube.com/embed/J6YlaeACE4E'
                },
                '5' : {
                    'name' : 'Zach Bryan - Open the Gate',
                    'link' : 'https://www.youtube.com/embed/Q6YrY482kXk'
                },
                '6' : {
                    'name' : 'Me On You',
                    'link' : 'https://www.youtube.com/embed/N3nTJ6hxDOM'
                }
            },
            '12' : {
                '1' : {
                    'name' : 'Snooze - SZA',
                    'link' : 'https://www.youtube.com/embed/Sv5yCzPCkv8'    
                },
                '2' : {
                    'name' : 'Pain - PinkPantheress',
                    'link' : 'https://www.youtube.com/embed/lw_XFnk5kwU'
                },
                '3' : {
                    'name' : 'Nights - Frank Ocean',
                    'link' : 'https://www.youtube.com/embed/r4l9bFqgMaQ'
                },
                '4' : {
                    'name' : 'Brent Faiyaz - CLOUDED',
                    'link' : 'https://www.youtube.com/embed/FFu_lJ3EvAA'
                },
                '5' : {
                    'name' : 'Tyler, The Creator - 911 / Mr. Lonely',
                    'link' : 'https://www.youtube.com/embed/khMb3k-Wwvg'
                },
                '6' : {
                    'name' : 'Steve Lacy - N Side',
                    'link' : 'https://www.youtube.com/embed/udOf9cPnR1A'
                }
            }
        },
        pm : {
            '1' : {
                '1' : {
                    'name' : 'Snowshoes - Caamp',
                    'link' : 'https://www.youtube.com/embed/wWptfV0A7jc'    
                },
                '2' : {
                    'name' : 'Paint',
                    'link' : 'https://www.youtube.com/embed/vo4pZrywaCw'
                },
                '3' : {
                    'name' : 'Tomorrow',
                    'link' : 'https://www.youtube.com/embed/hQlTBIisIRw'
                },
                '4' : {
                    'name' : 'Yellow Eyes',
                    'link' : 'https://www.youtube.com/embed/rIVL7_MD5bs'
                },
                '5' : {
                    'name' : 'Oliver Hazard - Dandelion',
                    'link' : 'https://www.youtube.com/embed/umM9hFsQRow'
                },
                '6' : {
                    'name' : 'Signal Sender',
                    'link' : 'https://www.youtube.com/embed/W6CFu8OtptY'
                }
            },
            '2' : {
                '1' : {
                    'name' : 'Pinegrove - "Alaska"',
                    'link' : 'https://www.youtube.com/embed/_GB26TguHGc'    
                },
                '2' : {
                    'name' : 'High - Slow Pulp',
                    'link' : 'https://www.youtube.com/embed/HVIIP9COGC8'
                },
                '3' : {
                    'name' : 'Is This It',
                    'link' : 'https://www.youtube.com/embed/RHrGj1IyE0Y'
                },
                '4' : {
                    'name' : 'Country - Racoma',
                    'link' : 'https://www.youtube.com/embed/c6wCsP16G78'
                },
                '5' : {
                    'name' : 'Pinegrove - Visiting',
                    'link' : 'https://www.youtube.com/embed/lBKHOqLtQo4'
                },
                '6' : {
                    'name' : 'Tame Impala - Elephant',
                    'link' : 'https://www.youtube.com/embed/LnKUD_OztRE'
                }
            },
            '3' : {
                '1' : {
                    'name' : 'Feel Good Inc',
                    'link' : 'https://www.youtube.com/embed/HyHNuVaZJ-k'    
                },
                '2' : {
                    'name' : 'CAKE - Never There',
                    'link' : 'https://www.youtube.com/embed/FRZzUh9hcTo'
                },
                '3' : {
                    'name' : 'Modest Mouse - Float On',
                    'link' : 'https://www.youtube.com/embed/CTAud5O7Qqk'
                },
                '4' : {
                    'name' : 'Loser',
                    'link' : 'https://www.youtube.com/embed/YgSPaXgAdzE'
                },
                '5' : {
                    'name' : 'Drive',
                    'link' : 'https://www.youtube.com/embed/fgT9zGkiLig'
                },
                '6' : {
                    'name' : 'Slide - The Goo Goo Dolls',
                    'link' : 'https://www.youtube.com/embed/yP4qdefD2To'
                }
            },
            '4' : {
                '1' : {
                    'name' : 'Looking Glass - Brandy (Youre a Fine Girl)',
                    'link' : 'https://www.youtube.com/embed/DVx8L7a3MuE'    
                },
                '2' : {
                    'name' : 'Brown Eyed Girl',
                    'link' : 'https://www.youtube.com/embed/UfmkgQRmmeE'
                },
                '3' : {
                    'name' : 'Dancing in the Moonlight',
                    'link' : 'https://www.youtube.com/embed/g5JqPxmYhlo'
                },
                '4' : {
                    'name' : 'Dirty Work',
                    'link' : 'https://www.youtube.com/embed/kR5Ki6jjPaY'
                },
                '5' : {
                    'name' : 'Creedence Clearwater Revival - Have You Ever Seen The Rain',
                    'link' : 'https://www.youtube.com/embed/u1V8YRJnr4Q'
                },
                '6' : {
                    'name' : 'Otis Redding - (Sittin On) The Dock Of The Bay',
                    'link' : 'https://www.youtube.com/embed/rTVjnBo96Ug'
                }
            },
            '5' : {
                '1' : {
                    'name' : 'Guns N Roses - Sweet Child O Mine',
                    'link' : 'https://www.youtube.com/embed/1w7OgIMMRc4'    
                },
                '2' : {
                    'name' : 'Alive',
                    'link' : 'https://www.youtube.com/embed/qM0zINtulhM'
                },
                '3' : {
                    'name' : 'AC/DC - You Shook Me All Night Long',
                    'link' : 'https://www.youtube.com/embed/Lo2qQmj0_h4'
                },
                '4' : {
                    'name' : 'Black Dog',
                    'link' : 'https://www.youtube.com/embed/yBuub4Xe1mw'
                },
                '5' : {
                    'name' : 'Helter Skelter',
                    'link' : 'https://www.youtube.com/embed/vWW2SzoAXMo'
                },
                '6' : {
                    'name' : 'Sweet Emotion',
                    'link' : 'https://www.youtube.com/embed/82cJgPXU-ik'
                }
            },
            '6' : {
                '1' : {
                    'name' : 'Ramones - Sheena Is A Punk Rocker',
                    'link' : 'https://www.youtube.com/embed/yCW7Aw8ugOI'    
                },
                '2' : {
                    'name' : 'The Clash - Lost in the Supermarket',
                    'link' : 'https://www.youtube.com/embed/hZw23sWlyG0'
                },
                '3' : {
                    'name' : 'The Smiths - This Charming Man',
                    'link' : 'https://www.youtube.com/embed/cJRP3LRcUFg'
                },
                '4' : {
                    'name' : 'Boys Dont Cry',
                    'link' : 'https://www.youtube.com/embed/YSAqXEcgoZ4'
                },
                '5' : {
                    'name' : 'Zombie',
                    'link' : 'https://www.youtube.com/embed/BxrLVldZtmg'
                },
                '6' : {
                    'name' : 'Hey',
                    'link' : 'https://www.youtube.com/embed/tVCUAXOBF7w'
                }
            },
            '7' : {
                '1' : {
                    'name' : 'dumpweed',
                    'link' : 'https://www.youtube.com/embed/PDwB1nHh9Ow'    
                },
                '2' : {
                    'name' : 'Sophomore Slump Or Comeback Of The Year',
                    'link' : 'https://www.youtube.com/embed/Vg_AMXtiuok'
                },
                '3' : {
                    'name' : 'Famous Last Words',
                    'link' : 'https://www.youtube.com/embed/8bbTtPL1jRs'
                },
                '4' : {
                    'name' : 'Longview',
                    'link' : 'https://www.youtube.com/embed/llvDJJeYde4'
                },
                '5' : {
                    'name' : 'Fat Lip',
                    'link' : 'https://www.youtube.com/embed/atjJVwok9ws'
                },
                '6' : {
                    'name' : 'crushcrushcrush',
                    'link' : 'https://www.youtube.com/embed/ei8hPkyJ0bU'
                }
            },
            '8' : {
                '1' : {
                    'name' : 'Modern Baseball - Fine, Great ',
                    'link' : 'https://www.youtube.com/embed/ZbyEyaT06iw'    
                },
                '2' : {
                    'name' : 'Our Song - Radiator Hospital',
                    'link' : 'https://www.youtube.com/embed/Z2eelBo0afQ'
                },
                '3' : {
                    'name' : 'Its only sex',
                    'link' : 'https://www.youtube.com/embed/Z4yINX2Yw0Y'
                },
                '4' : {
                    'name' : 'Lipstick Covered Magnet',
                    'link' : 'https://www.youtube.com/embed/fPRmnIzMr94'
                },
                '5' : {
                    'name' : 'Constant Headache',
                    'link' : 'https://www.youtube.com/embed/FmM4B5VSkMo'
                },
                '6' : {
                    'name' : 'In the Aeroplane Over the Sea',
                    'link' : 'https://www.youtube.com/embed/1FeD16vu_qQ'
                }
            },
            '9' : {
                '1' : {
                    'name' : 'TWO DOOR CINEMA CLUB | WHAT YOU KNOW',
                    'link' : 'https://www.youtube.com/embed/YXwYJyrKK5A'    
                },
                '2' : {
                    'name' : 'MGMT - Time to Pretend',
                    'link' : 'https://www.youtube.com/embed/cKSvU4aGiSo'
                },
                '3' : {
                    'name' : 'Way To Go',
                    'link' : 'https://www.youtube.com/embed/xg9ebVTL9yE'
                },
                '4' : {
                    'name' : 'American Love - Smallpools',
                    'link' : 'https://www.youtube.com/embed/dR_9YC7HBDE'
                },
                '5' : {
                    'name' : 'Shatter in the Night',
                    'link' : 'https://www.youtube.com/embed/zFY5gA2LRbU'
                },
                '6' : {
                    'name' : 'Kids',
                    'link' : 'https://www.youtube.com/embed/rdKfuwy6LUM'
                }
            },
            '10' : {
                '1' : {
                    'name' : 'Magic',
                    'link' : 'https://www.youtube.com/embed/Cq-NShfefks'    
                },
                '2' : {
                    'name' : 'We R Who We R',
                    'link' : 'https://www.youtube.com/embed/tCkGsyOYDMI'
                },
                '3' : {
                    'name' : 'Tonight Tonight',
                    'link' : 'https://www.youtube.com/embed/F-qpEVE8wDg'
                },
                '4' : {
                    'name' : 'Wake Me Up',
                    'link' : 'https://www.youtube.com/embed/5y_KJAg8bHI'
                },
                '5' : {
                    'name' : 'DJ Got Us Fallin In Love',
                    'link' : 'https://www.youtube.com/embed/C-dvTjK_07c'
                },
                '6' : {
                    'name' : 'Club Cant Handle Me',
                    'link' : 'https://www.youtube.com/embed/SgM3r8xKfGE'
                }
            },
            '11' : {
                '1' : {
                    'name' : 'Sleepless',
                    'link' : 'https://www.youtube.com/embed/b4jdyxTAiL8'    
                },
                '2' : {
                    'name' : 'Club Classics',
                    'link' : 'https://www.youtube.com/embed/ZqUfXljALQE'
                },
                '3' : {
                    'name' : 'Headnoise',
                    'link' : 'https://www.youtube.com/embed/hVgNH8A9kso'
                },
                '4' : {
                    'name' : 'Afraid to Feel',
                    'link' : 'https://www.youtube.com/embed/VHSmO_72Uro'
                },
                '5' : {
                    'name' : 'Summer 91',
                    'link' : 'https://www.youtube.com/embed/jCwo7LQ2vMg'
                },
                '6' : {
                    'name' : 'Just Feels Tight',
                    'link' : 'https://www.youtube.com/embed/BcI2Xj5HTWM'
                }
            }, 
            '12' : {
                '1' : {
                    'name' : 'Charleston Girl',
                    'link' : 'https://www.youtube.com/embed/qJcn8tCYZqs'    
                },
                '2' : {
                    'name' : 'Zach Bryan - 28',
                    'link' : 'https://www.youtube.com/embed/wJO0IoWY4t4'
                },
                '3' : {
                    'name' : 'Tyler Childers - Lady May',
                    'link' : 'https://www.youtube.com/embed/yxfo4Jfpc-c'
                },
                '4' : {
                    'name' : 'Daylight',
                    'link' : 'https://www.youtube.com/embed/MoN9ql6Yymw'
                },
                '5' : {
                    'name' : 'Pink Skies',
                    'link' : 'https://www.youtube.com/embed/fs49xFmmHCo'
                },
                '6' : {
                    'name' : 'Ragged Wood',
                    'link' : 'https://www.youtube.com/embed/a2KOI8Lt2Lc'
                }
            }
        }
    }

    // Select the elements for the clock hands
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
    const now = new Date();
    let addedTime = 0;
    let timeOfDay = now.getHours() > 11 ? "pm" : "am";
    setBackground(timeOfDay);
    let fastForwarding = false;
    let interval = 1000;
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    // Get all song elements
    const songs = document.querySelectorAll('.song');
    //Initial set of songs
    setSongs(now.getHours() % 12, true);
    let prevHour = -1;


    // Function to set the clock based on the current time
    function setClock() {
        const now = new Date();

        if (fastForwarding) {
            addedTime += 7;
            interval = 1;
        }

        const curTime = now.getSeconds() + (now.getMinutes() * 60) + (now.getHours() * 60 * 60) + addedTime;

        seconds = curTime % 60;
        const secondsDegrees = ((seconds / 60) * 360) + 270; // 90 degrees offset
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        minutes = Math.floor(curTime/60) % 60;
        const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 270;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        hours = Math.floor(curTime/60/60) % 60;
        const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 270;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        // Top of the hour
        if (prevHour != hours && prevHour != -1) {
            timeOfDay = (hours % 24) > 11 ? "pm" : "am";
            setSongs(hours % 12, false);
            setBackground(timeOfDay);    
        }
        prevHour = hours;
    }

    setInterval(setClock, 1);
    setClock();


    async function setSongs(hour, firstSongs) {
        if (!firstSongs) {
            await fade(-.01);
        }
        removeVideos();
        let songNumber = 1;

        songs.forEach(song => {
            image = song.getElementsByTagName('img')[0];
            image.src = "images/" + timeOfDay + "/" + (hour === 0 ? 12 : hour) + "/" + songNumber++ + ".png";
        });

        await fade(.01);
    }

    async function fade(change) {
        let opacity = change > 0 ? 0 : 1;
        while (opacity > -.01 && opacity < 1.01) {
            await new Promise(resolve => setTimeout(resolve, fastForwarding ? .5 : 5));  
            opacity += change;
            songs.forEach(song => {
                song.style.opacity = opacity;
            });
        }
    }

    function setBackground(amOrPm) {
        amOrPm === "am" ? document.body.style.backgroundColor = '#F9F6EE' : document.body.style.backgroundColor = '#222222';
    }

    const fastForward = document.querySelectorAll('.fastForward')[0];

    fastForward.addEventListener('mouseover', () => {
        fastForward.src = 'images/skip/whiteFill.png';
    });

    fastForward.addEventListener('mouseout', () => {
        fastForward.src = 'images/skip/whiteEmpty.png';
    });

    fastForward.addEventListener('mousedown', () => {
        fastForwarding = true;

        document.getElementsByClassName('second')[0].style.opacity = '0';
    });

    fastForward.addEventListener('mouseup', () => {
        fastForwarding = false;

        document.getElementsByClassName('second')[0].style.opacity = '1';
    });

    songs.forEach(song => {
        song.addEventListener('click', () => {
            let removed = false;
            removed = removeVideos(song);
            if (removed) {
                return;
            }
            iframe = document.createElement('iframe');

            iframe.src = getSrc(song.id);
            iframe.style.border = "5px groove gray"; 
            
            // include the iframe on the song element
            if (song.id.split('-')[1] <= 3) {
                song.append(iframe);
            } else {
                song.prepend(iframe);
            }
        })
    })

    function getSrc(songId) {
        let songNo = songId.split('-')[1];

        return songLinks[timeOfDay][hours % 12 === 0 ? '12' : hours % 12][songNo].link;
    }

    function removeVideos(song) {
        let removed = false;
        songs.forEach(secondSong => {
            // Check if the song has an iframe
            const iframe = secondSong.querySelector('iframe'); // or song.getElementsByTagName('iframe')[0]
        
            // If an iframe exists, remove it
            if (iframe) {
                secondSong.removeChild(iframe);

                if (song === secondSong) {
                    removed = true;
                }
            }
        });
        return removed;
    }

});










