document.addEventListener('DOMContentLoaded', function () {
    const songLinks = {
        'am' : {
            '1' : {
                '1' : {
                    'name' : 'Omar Apollo - Evergreen',
                    'link' : 'https://www.youtube.com/embed/ixTkLjTBQyk'
                },
                '2' : {
                    'name' : 'Japanese Denim - Daniel Caesar',
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
                    'name' : 'YEAH RIGHT - Joji',
                    'link' : 'https://www.youtube.com/embed/tG7wLK4aAOE'
                },
                '6' : {
                    'name' : 'SUPERPOSITION - Daniel Caesar, John Mayer',
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
                    'link' : 'https://www.youtube.com/embed/v77WFwYtUE0'
                },
                '4' : {
                    'name' : 'I Don\'t Wanna Be Okay Without You - Charlie Burg',
                    'link' : 'https://www.youtube.com/embed/ybQA720eyIE'
                },
                '5' : {
                    'name' : 'Waiting Room - Phoebe Bridgers',
                    'link' : 'https://www.youtube.com/embed/VUOwg6nhuzA'
                },
                '6' : {
                    'name' : 'Finish Line - Delaney Bailey',
                    'link' : 'https://www.youtube.com/embed/DuFwjqnapcg'
                }
            },
            '3' : {
                '1' : {
                    'name' : 'Cherry Wine - Hozier',
                    'link' : 'https://www.youtube.com/embed/SdSCCwtNEjA'    
                },
                '2' : {
                    'name' : 'Lizzy McAlpine - Better Than This',
                    'link' : 'https://www.youtube.com/embed/zRexeIEFbRE'
                },
                '3' : {
                    'name' : 'In Your Atmosphere - John Mayer',
                    'link' : 'https://www.youtube.com/embed/ZZ4defaop8k'
                },
                '4' : {
                    'name' : 'Sparks - Coldplay',
                    'link' : 'https://www.youtube.com/embed/Ar48yzjn1PE'
                },
                '5' : {
                    'name' : 'To Be Alone With You - Sufjan Stevens',
                    'link' : 'https://www.youtube.com/embed/N3zu9NucyBg'
                },
                '6' : {
                    'name' : 'Place To Be - Nick Drake',
                    'link' : 'https://www.youtube.com/embed/jvLtyyBRITo'
                }
            },
            '4' : {
                '1' : {
                    'name' : 'Words - Gregory Alan Isakov',
                    'link' : 'https://www.youtube.com/embed/IXaMF4FqIkM'    
                },
                '2' : {
                    'name' : 'Searows - End Of The World',
                    'link' : 'https://www.youtube.com/embed/e5eik2jffhk'
                },
                '3' : {
                    'name' : 'Roslyn - Bon Iver, St. Vincent',
                    'link' : 'https://www.youtube.com/embed/-OCIiQNHEhw'
                },
                '4' : {
                    'name' : 'Anchor - Novo Amor',
                    'link' : 'https://www.youtube.com/embed/OmKAn8rNbKg'
                },
                '5' : {
                    'name' : 'Found - Zach Webb',
                    'link' : 'https://www.youtube.com/embed/iXzy2zY1HOM'
                },
                '6' : {
                    'name' : 'Alps - Novo Amor, Lowswimmer',
                    'link' : 'https://www.youtube.com/embed/w0VaGbkzQZ8'
                }
            },
            '5' : {
                '1' : {
                    'name' : 'Première Gymnopédie - Erik Satie, Alexandre Tharaud',
                    'link' : 'https://www.youtube.com/embed/S-Xm7s9eGxU'    
                },
                '2' : {
                    'name' : 'Sonata No.14 "Moonlight" - Ludwig Van Beethoven, Paul Lewis',
                    'link' : 'https://www.youtube.com/embed/rlJHNufol8Q'
                },
                '3' : {
                    'name' : 'Wyoming - Elijah Fox',
                    'link' : 'https://www.youtube.com/embed/MWERAZARYMw'
                },
                '4' : {
                    'name' : 'Bleached - Video Days',
                    'link' : 'https://www.youtube.com/embed/0pHR4_cyIuA'
                },
                '5' : {
                    'name' : 'The Mercy of the Wind - Million Eyes',
                    'link' : 'https://www.youtube.com/embed/DX6QHjx_RYw'
                },
                '6' : {
                    'name' : 'Following the Clock to Sleep - Oberhofer',
                    'link' : 'https://www.youtube.com/embed/5ozyWTjva_k'
                }
            },
            '6' : {
                '1' : {
                    'name' : 'Falling for U - Peachy!, mxmtoon',
                    'link' : 'https://www.youtube.com/embed/RSXiNSiiCsg'    
                },
                '2' : {
                    'name' : 'Lost in You - khai dreams',
                    'link' : 'https://www.youtube.com/embed/I1UeM184MoU'
                },
                '3' : {
                    'name' : 'Cut My Hair - Mounika., Cavetown',
                    'link' : 'https://www.youtube.com/embed/iuLPgRLR-w0'
                },
                '4' : {
                    'name' : 'I’ll Keep You Safe - sagun, Shiloh Dynasty',
                    'link' : 'https://www.youtube.com/embed/KCZqguEKdBc'
                },
                '5' : {
                    'name' : 'Coffee Breath - Sofia Mills',
                    'link' : 'https://www.youtube.com/embed/EpcQwTkOonw'
                },
                '6' : {
                    'name' : 'Monday Loop - Tomppabeats',
                    'link' : 'https://www.youtube.com/embed/xlRRv9TpsoE'
                }
            },
            '7' : {
                '1' : {
                    'name' : 'Sunrise - Norah Jones',
                    'link' : 'https://www.youtube.com/embed/fd02pGJx0s0'    
                },
                '2' : {
                    'name' : 'Banana Pancakes - Jack Johnson',
                    'link' : 'https://www.youtube.com/embed/m-v-LGOfaKo'
                },
                '3' : {
                    'name' : 'I’m Yours - Jason Mraz',
                    'link' : 'https://www.youtube.com/embed/EkHTsc9PU2A'
                },
                '4' : {
                    'name' : 'Landslide - Fleetwood Mac',
                    'link' : 'https://www.youtube.com/embed/radHy4HhhNg'
                },
                '5' : {
                    'name' : 'Hey There Delilah - Plain White T’s',
                    'link' : 'https://www.youtube.com/embed/h_m-BjrxmgI'
                },
                '6' : {
                    'name' : 'Kiss Me - Sixpence None The Richer',
                    'link' : 'https://www.youtube.com/embed/CAC-onWPMB0'
                }
            },
            '8' : {
                '1' : {
                    'name' : 'How Much Is Weed? - Dominic Fike?',
                    'link' : 'https://www.youtube.com/embed/4t-zLt3uYcI'    
                },
                '2' : {
                    'name' : '4EVER - Clairo',
                    'link' : 'https://www.youtube.com/embed/tlGUom_AV4o'
                },
                '3' : {
                    'name' : 'Take A Bite - beabadoobee',
                    'link' : 'https://www.youtube.com/embed/BCCAKg5bQvU'
                },
                '4' : {
                    'name' : 'Tree Among Shrubs - Men I Trust',
                    'link' : 'https://www.youtube.com/embed/IOquW8xcV0w'
                },
                '5' : {
                    'name' : 'Abigail - Frankie Cosmos',
                    'link' : 'https://www.youtube.com/embed/uIBSPrX-wj8'
                },
                '6' : {
                    'name' : 'Better in the Dark - Jordana, TV Girl',
                    'link' : 'https://www.youtube.com/embed/pqZOj9O8bxc'
                }
            },
            '9' : {
                '1' : {
                    'name' : 'Blue World - Mac Miller',
                    'link' : 'https://www.youtube.com/embed/_GC2wFTCAGY'    
                },
                '2' : {
                    'name' : 'She Wants My Money - Dominic Fike',
                    'link' : 'https://www.youtube.com/embed/0xwzWgjy3Sk'
                },
                '3' : {
                    'name' : 'Lost - Frank Ocean',
                    'link' : 'https://www.youtube.com/embed/bZG3YWe7VJw'
                },
                '4' : {
                    'name' : 'Devil In A New Dress - Kanye West, Rick Ross',
                    'link' : 'https://www.youtube.com/embed/sk3rpYkiHe8'
                },
                '5' : {
                    'name' : 'Come Back to Earth - Mac Miller',
                    'link' : 'https://www.youtube.com/embed/W4ocPPhtglU'
                },
                '6' : {
                    'name' : 'Crack Rock - Frank Ocean',
                    'link' : 'https://www.youtube.com/embed/IVzzw7Vkiyg'
                }
            },
            '10' : {
                '1' : {
                    'name' : 'Drive By - Train',
                    'link' : 'https://www.youtube.com/embed/oxqnFJ3lp5k'    
                },
                '2' : {
                    'name' : 'Must Get Out - Maroon 5',
                    'link' : 'https://www.youtube.com/embed/kSsFN8g9FBM'
                },
                '3' : {
                    'name' : 'The Man Who Can’t Be Moved - The Script',
                    'link' : 'https://www.youtube.com/embed/XHPOlxyKA3o'
                },
                '4' : {
                    'name' : 'Tears Dry On Their Own - Amy Winehouse',
                    'link' : 'https://www.youtube.com/embed/ojdbDYahiCQ'
                },
                '5' : {
                    'name' : 'Ain’t It Fun - Paramore',
                    'link' : 'https://www.youtube.com/embed/EFEmTsfFL5A'
                },
                '6' : {
                    'name' : 'Smile - Lily Allen',
                    'link' : 'https://www.youtube.com/embed/0WxDrVUrSvI'
                }
            },
            '11' : {
                '1' : {
                    'name' : 'Nine Ball - Zach Bryan',
                    'link' : 'https://www.youtube.com/embed/DG3pGOvbIqc'    
                },
                '2' : {
                    'name' : 'You Should Probably Leave - Chris Stapleton',
                    'link' : 'https://www.youtube.com/embed/8e7S8l4s1OM'
                },
                '3' : {
                    'name' : 'Porch Light - Josh Meloy',
                    'link' : 'https://www.youtube.com/embed/aXQ6OOeYG-w'
                },
                '4' : {
                    'name' : 'Ain’t No Love in Oklahoma - Luke Combs',
                    'link' : 'https://www.youtube.com/embed/J6YlaeACE4E'
                },
                '5' : {
                    'name' : 'Open the Gate - Zach Bryan',
                    'link' : 'https://www.youtube.com/embed/Q6YrY482kXk'
                },
                '6' : {
                    'name' : 'Me On You - Muscadine Bloodline',
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
                    'name' : 'Clouded - Brent Faiyaz',
                    'link' : 'https://www.youtube.com/embed/FFu_lJ3EvAA'
                },
                '5' : {
                    'name' : '911 / Mr. Lonely - Tyler, The Creator',
                    'link' : 'https://www.youtube.com/embed/khMb3k-Wwvg'
                },
                '6' : {
                    'name' : 'N Side - Steve Lacy',
                    'link' : 'https://www.youtube.com/embed/udOf9cPnR1A'
                }
            }
        },
        'pm' : {
            '1' : {
                '1' : {
                    'name' : 'Snowshoes - Caamp',
                    'link' : 'https://www.youtube.com/embed/wWptfV0A7jc'    
                },
                '2' : {
                    'name' : 'Paint - The Paper Kites',
                    'link' : 'https://www.youtube.com/embed/vo4pZrywaCw'
                },
                '3' : {
                    'name' : 'Tomorrow - Shakey Graves',
                    'link' : 'https://www.youtube.com/embed/hQlTBIisIRw'
                },
                '4' : {
                    'name' : 'Yellow Eyes - Rayland Baxter',
                    'link' : 'https://www.youtube.com/embed/rIVL7_MD5bs'
                },
                '5' : {
                    'name' : 'Dandelion- Oliver Hazard',
                    'link' : 'https://www.youtube.com/embed/umM9hFsQRow'
                },
                '6' : {
                    'name' : 'Signal Sender - Richy Mitch & The Coal Miners',
                    'link' : 'https://www.youtube.com/embed/W6CFu8OtptY'
                }
            },
            '2' : {
                '1' : {
                    'name' : 'Alaska - Pinegrove',
                    'link' : 'https://www.youtube.com/embed/_GB26TguHGc'    
                },
                '2' : {
                    'name' : 'High - Slow Pulp',
                    'link' : 'https://www.youtube.com/embed/HVIIP9COGC8'
                },
                '3' : {
                    'name' : 'Is This It - The Strokes',
                    'link' : 'https://www.youtube.com/embed/RHrGj1IyE0Y'
                },
                '4' : {
                    'name' : 'Country - Racoma',
                    'link' : 'https://www.youtube.com/embed/c6wCsP16G78'
                },
                '5' : {
                    'name' : 'Visiting - Pinegrove',
                    'link' : 'https://www.youtube.com/embed/lBKHOqLtQo4'
                },
                '6' : {
                    'name' : 'Elephant - Tame Impala',
                    'link' : 'https://www.youtube.com/embed/LnKUD_OztRE'
                }
            },
            '3' : {
                '1' : {
                    'name' : 'Feel Good Inc. - Gorillaz',
                    'link' : 'https://www.youtube.com/embed/HyHNuVaZJ-k'    
                },
                '2' : {
                    'name' : 'Never There - CAKE',
                    'link' : 'https://www.youtube.com/embed/FRZzUh9hcTo'
                },
                '3' : {
                    'name' : 'Float On - Modest Mouse',
                    'link' : 'https://www.youtube.com/embed/CTAud5O7Qqk'
                },
                '4' : {
                    'name' : 'Loser - Beck',
                    'link' : 'https://www.youtube.com/embed/YgSPaXgAdzE'
                },
                '5' : {
                    'name' : 'Drive - Incubus',
                    'link' : 'https://www.youtube.com/embed/fgT9zGkiLig'
                },
                '6' : {
                    'name' : 'Slide - The Goo Goo Dolls',
                    'link' : 'https://www.youtube.com/embed/yP4qdefD2To'
                }
            },
            '4' : {
                '1' : {
                    'name' : 'Brandy (You’re A Fine Girl) - Looking Glass',
                    'link' : 'https://www.youtube.com/embed/DVx8L7a3MuE'    
                },
                '2' : {
                    'name' : 'Brown Eyed Girl - Van Morrison',
                    'link' : 'https://www.youtube.com/embed/UfmkgQRmmeE'
                },
                '3' : {
                    'name' : 'Dancing in the Moonlight - King Harvest',
                    'link' : 'https://www.youtube.com/embed/g5JqPxmYhlo'
                },
                '4' : {
                    'name' : 'Dirty Work - Steely Dan',
                    'link' : 'https://www.youtube.com/embed/kR5Ki6jjPaY'
                },
                '5' : {
                    'name' : 'Have You Ever Seen The Rain - Creedence Clearwater Revival',
                    'link' : 'https://www.youtube.com/embed/u1V8YRJnr4Q'
                },
                '6' : {
                    'name' : '(Sittin’ On) the Dock of the Bay - Otis Redding',
                    'link' : 'https://www.youtube.com/embed/rTVjnBo96Ug'
                }
            },
            '5' : {
                '1' : {
                    'name' : 'Sweet Child O’ Mine - Guns N’ Roses',
                    'link' : 'https://www.youtube.com/embed/1w7OgIMMRc4'    
                },
                '2' : {
                    'name' : 'Alive - Pearl Jam',
                    'link' : 'https://www.youtube.com/embed/qM0zINtulhM'
                },
                '3' : {
                    'name' : 'You Shook Me All Night Long - AC/DC',
                    'link' : 'https://www.youtube.com/embed/Lo2qQmj0_h4'
                },
                '4' : {
                    'name' : 'Black Dog - Led Zeppelin',
                    'link' : 'https://www.youtube.com/embed/yBuub4Xe1mw'
                },
                '5' : {
                    'name' : 'Helter Skelter - The Beatles',
                    'link' : 'https://www.youtube.com/embed/vWW2SzoAXMo'
                },
                '6' : {
                    'name' : 'Sweet Emotion - Aerosmith',
                    'link' : 'https://www.youtube.com/embed/82cJgPXU-ik'
                }
            },
            '6' : {
                '1' : {
                    'name' : 'Sheena Is a Punk Rocker - Ramones ',
                    'link' : 'https://www.youtube.com/embed/yCW7Aw8ugOI'    
                },
                '2' : {
                    'name' : 'Lost in the Supermarket - The Clash',
                    'link' : 'https://www.youtube.com/embed/hZw23sWlyG0'
                },
                '3' : {
                    'name' : 'This Charming Man - The Smiths',
                    'link' : 'https://www.youtube.com/embed/cJRP3LRcUFg'
                },
                '4' : {
                    'name' : 'Boys Don’t Cry - The Cure',
                    'link' : 'https://www.youtube.com/embed/YSAqXEcgoZ4'
                },
                '5' : {
                    'name' : 'Zombie - The Cranberries',
                    'link' : 'https://www.youtube.com/embed/BxrLVldZtmg'
                },
                '6' : {
                    'name' : 'Hey - Pixies',
                    'link' : 'https://www.youtube.com/embed/tVCUAXOBF7w'
                }
            },
            '7' : {
                '1' : {
                    'name' : 'Dumpweed - blink-182',
                    'link' : 'https://www.youtube.com/embed/PDwB1nHh9Ow'    
                },
                '2' : {
                    'name' : 'Sophomore Slump Or Comeback Of The Year - Fall Out Boy',
                    'link' : 'https://www.youtube.com/embed/Vg_AMXtiuok'
                },
                '3' : {
                    'name' : 'Famous Last Words - My Chemical Romance',
                    'link' : 'https://www.youtube.com/embed/8bbTtPL1jRs'
                },
                '4' : {
                    'name' : 'Longview - Green Day',
                    'link' : 'https://www.youtube.com/embed/llvDJJeYde4'
                },
                '5' : {
                    'name' : 'Fat Lip - Sum 41',
                    'link' : 'https://www.youtube.com/embed/atjJVwok9ws'
                },
                '6' : {
                    'name' : 'crushcrushcrush - Paramore',
                    'link' : 'https://www.youtube.com/embed/ei8hPkyJ0bU'
                }
            },
            '8' : {
                '1' : {
                    'name' : 'Fine, Great - Modern Baseball',
                    'link' : 'https://www.youtube.com/embed/ZbyEyaT06iw'    
                },
                '2' : {
                    'name' : 'Our Song - Radiator Hospital',
                    'link' : 'https://www.youtube.com/embed/Z2eelBo0afQ'
                },
                '3' : {
                    'name' : 'It’s Only Sex - Car Seat Headrest',
                    'link' : 'https://www.youtube.com/embed/Z4yINX2Yw0Y'
                },
                '4' : {
                    'name' : 'Lipstick Covered Magnet - The Front Bottoms',
                    'link' : 'https://www.youtube.com/embed/fPRmnIzMr94'
                },
                '5' : {
                    'name' : 'Constant Headache - Joyce Manor',
                    'link' : 'https://www.youtube.com/embed/FmM4B5VSkMo'
                },
                '6' : {
                    'name' : 'In the Aeroplane Over the Sea - Neutral Milk Hotel',
                    'link' : 'https://www.youtube.com/embed/1FeD16vu_qQ'
                }
            },
            '9' : {
                '1' : {
                    'name' : 'What You Know - Two Door Cinema Club',
                    'link' : 'https://www.youtube.com/embed/YXwYJyrKK5A'    
                },
                '2' : {
                    'name' : 'Time to Pretend - MGMT',
                    'link' : 'https://www.youtube.com/embed/cKSvU4aGiSo'
                },
                '3' : {
                    'name' : 'Way To Go - Empire Of The Sun',
                    'link' : 'https://www.youtube.com/embed/xg9ebVTL9yE'
                },
                '4' : {
                    'name' : 'American Love - Smallpools',
                    'link' : 'https://www.youtube.com/embed/dR_9YC7HBDE'
                },
                '5' : {
                    'name' : 'Shatter in the Night - Vesperteen',
                    'link' : 'https://www.youtube.com/embed/zFY5gA2LRbU'
                },
                '6' : {
                    'name' : 'Kids - MGMT',
                    'link' : 'https://www.youtube.com/embed/rdKfuwy6LUM'
                }
            },
            '10' : {
                '1' : {
                    'name' : 'Magic - B.o.B, Rivers Cuomo',
                    'link' : 'https://www.youtube.com/embed/Cq-NShfefks'    
                },
                '2' : {
                    'name' : 'We R Who We R - Kesha',
                    'link' : 'https://www.youtube.com/embed/tCkGsyOYDMI'
                },
                '3' : {
                    'name' : 'Tonight Tonight - Hot Chelle Rae',
                    'link' : 'https://www.youtube.com/embed/F-qpEVE8wDg'
                },
                '4' : {
                    'name' : 'Wake Me Up - Avicii',
                    'link' : 'https://www.youtube.com/embed/5y_KJAg8bHI'
                },
                '5' : {
                    'name' : 'DJ Got Us Fallin’ In Love - USHER, Pitbull',
                    'link' : 'https://www.youtube.com/embed/C-dvTjK_07c'
                },
                '6' : {
                    'name' : 'Club Can’t Handle Me - Flo Rida, David Guetta',
                    'link' : 'https://www.youtube.com/embed/SgM3r8xKfGE'
                }
            },
            '11' : {
                '1' : {
                    'name' : 'Sleepless - D.O.D',
                    'link' : 'https://www.youtube.com/embed/b4jdyxTAiL8'    
                },
                '2' : {
                    'name' : 'Club classics - Charli xcx',
                    'link' : 'https://www.youtube.com/embed/ZqUfXljALQE'
                },
                '3' : {
                    'name' : 'Headnoise (Get Hype) - Martin Ikin',
                    'link' : 'https://www.youtube.com/embed/hVgNH8A9kso'
                },
                '4' : {
                    'name' : 'Afraid To Feel - LF SYSTEM',
                    'link' : 'https://www.youtube.com/embed/VHSmO_72Uro'
                },
                '5' : {
                    'name' : 'Summer 91 - Noizu',
                    'link' : 'https://www.youtube.com/embed/jCwo7LQ2vMg'
                },
                '6' : {
                    'name' : 'Just Feels Tight - FISHER',
                    'link' : 'https://www.youtube.com/embed/BcI2Xj5HTWM'
                }
            }, 
            '12' : {
                '1' : {
                    'name' : 'Charleston Girl (Live) - Tyler Childers',
                    'link' : 'https://www.youtube.com/embed/qJcn8tCYZqs'    
                },
                '2' : {
                    'name' : '28 - Zach Bryan',
                    'link' : 'https://www.youtube.com/embed/wJO0IoWY4t4'
                },
                '3' : {
                    'name' : 'Lady May - Tyler Childers',
                    'link' : 'https://www.youtube.com/embed/yxfo4Jfpc-c'
                },
                '4' : {
                    'name' : 'Daylight - Watchhouse',
                    'link' : 'https://www.youtube.com/embed/MoN9ql6Yymw'
                },
                '5' : {
                    'name' : 'Pink Skies - Zach Bryan',
                    'link' : 'https://www.youtube.com/embed/fs49xFmmHCo'
                },
                '6' : {
                    'name' : 'Ragged Wood - Fleet Foxes',
                    'link' : 'https://www.youtube.com/embed/a2KOI8Lt2Lc'
                }
            }
        }
    }


    // Select the elements for the clock hands
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.temmp');

    const tape = document.getElementsByClassName('timeTape')[0];
    let now = new Date();
    let addedTime = 0;
    let timeOfDay = now.getHours() > 11 ? "pm" : "am";
    let fastForwarding = false;
    let interval = 1000;
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let hrTape = document.getElementsByClassName('tn')[0];
    let todTape = document.getElementsByClassName('tod')[0];


    // Get all song elements
    const songs = document.querySelectorAll('.song');

    let firstClick = true;

    //Initial set of songs
    setSongs(now.getHours() % 12, true);
    let prevHour = now.getHours();

    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');
    document.body.appendChild(videoContainer);

    // Function to set the clock based on the current time
    function setClock() {
        now = new Date();

        if (fastForwarding) {
            addedTime += 7;
            interval = 1;
        }

        const curTime = now.getSeconds() + (now.getMinutes() * 60) + (now.getHours() * 60 * 60) + addedTime;

        seconds = curTime % 60;

        if (!fastForwarding) {
            const secondsDegrees = ((seconds / 60) * 360) ; // 90 degrees offset
            secondHand.style.transform = `rotate(${secondsDegrees}deg)`;        
        }


        minutes = Math.floor(curTime/60) % 60;
        const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) ;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        hours = Math.floor(curTime/60/60) % 60;
        const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) ;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        // Top of the hour
        if (prevHour != hours) {
            timeOfDay = (hours % 24) > 11 ? "pm" : "am";
            setSongs(hours % 12, false);
            setBackground();
        }

        prevHour = hours;
    }

    setInterval(setClock, 1);
    setClock();

    function setBackground() {
        let background = document.body.style;

        background.backgroundColor = timeOfDay === "pm" ? "#4A4A4A" : "#F0F8FF";
    }

    setBackground();
    
    async function setSongs(hour, firstSongs) {
        setTimeTape(hour);

        if (!firstSongs) {
            await fade(-.01);
        }
        let songNumber = 1;


        songs.forEach(song => {
            image = song.getElementsByTagName('img')[0];
            let text = song.getElementsByClassName('songText')[0];
            text.textContent = songLinks[timeOfDay][hour === 0 ? 12 : hour][songNumber].name;
            image.src = "images/" + timeOfDay + "/" + (hour === 0 ? 12 : hour) + "/" + songNumber++ + ".png";
        });

        await new Promise(resolve => setTimeout(resolve, 300));  

        await fade(.01);
    }

    function setTimeTape(hour) {
        let displayHour = hour % 12 === 0 ? 12 : hour % 12; // Convert to 12-hour format

        if (displayHour < 10) {
            hrTape.style.width = "67%";
        } else {
            hrTape.style.width = "90%";
        }

        let imagePath = `./images/TimeTape/${displayHour}.png`; // Construct the image path
    
        hrTape.src = imagePath;

        imagePath = `./images/TimeTape/${timeOfDay}.png`; // Construct the image path

        todTape.style.width = "110%";

        todTape.src = imagePath;
    }

    async function fade(change) {
        let opacity = change > 0 ? 0 : 1;
        while (opacity > -.01 && opacity < 1.01) {
            await new Promise(resolve => setTimeout(resolve, fastForwarding ? .75 : 5));  
            opacity += change;
            songs.forEach(song => {
                song.style.opacity = opacity;
            });
        }
    }

    let secHand = document.getElementsByClassName('temmp')[0];

    async function fadeSec(change) {
        let opacity = change > 0 ? 0 : 1;
        while (opacity > -.01 && opacity < 1.01) {
            await new Promise(resolve => setTimeout(resolve, 5));  
            opacity += change;
            secHand.style.opacity = opacity;
        }
    }

    const backBlur = document.getElementsByClassName('background-blur')[0];

    const fastForward = document.querySelectorAll('.fastForward')[0];

    fastForward.addEventListener('click', async () => {
        let image = fastForward.getElementsByTagName('img')[0];

        const imageList = image.src.split('/');

        if (imageList[imageList.length - 1] === 'Black.gif') {
            fastForwarding = !fastForwarding;

            fadeSec(.01);

            secHand.style.opacity = "1";
            image.src = './images/SkipTime/Images/black1.png';
        } else {
            fadeSec(-.01);

            fastForwarding = !fastForwarding;

            secHand.style.opacity = "0";
            image.src = './images/SkipTime/Gifs/Black.gif';
        }

    });

    async function frameAnimation(change) {
        let opacity = change > 0 ? 0.01 : .999;
        while (opacity > 0 && opacity < 1) {
            await new Promise(resolve => setTimeout(resolve, 5));  
            opacity += change;
            videoContainer.style.opacity = opacity;
        }

    }

    // Loop over each song element
    songs.forEach(song => {
        song.addEventListener('click', async () => {
            const iframe = videoContainer.querySelector('iframe'); // Check if there's any video in the background
            const img = song.querySelector('img'); // Select the image inside the song container
            
            // If the video from the same song is playing, toggle it off
            if (iframe && iframe.src === getSrc(song.id)) {
                removeVideos(); // Remove the iframe and halo effect
                return; // Exit early, as we toggled the video off
            }

            // Otherwise, toggle off other videos and toggle on this one
            removeVideos(); // Remove videos from other songs

            // Create a new iframe and add it to the background
            const newIframe = document.createElement('iframe');
            newIframe.src = getSrc(song.id); // Get the correct video link
            newIframe.classList.add('video-background');
            newIframe.allow = "autoplay; encrypted-media"; // Allow autoplay

            newIframe.style.pointerEvents = "auto";

            videoContainer.innerHTML = ''; // Clear any previous video
            videoContainer.appendChild(newIframe); // Add new video iframe to the background    
//change

            if (firstClick) {
                playAnimation();
                firstClick = false;
            }
            //frameAnimation(.01);
            //comment
            
            backBlur.style.opacity = ".8";

            // Ensure the image is visible
            img.style.opacity = "1"; // Make sure the image is visible
            img.style.display = "block"; // Ensure the image is displayed if it's hidden



            // Add halo class to the clicked song's image
            img.classList.add('halo');
        });
    });

    const play = document.getElementsByClassName("play")[0];
    let playGif = play.getElementsByTagName("img")[0];

    async function fadePlay(change) {
        let opacity = change > 0 ? 0 : 1;
        while (opacity > -.01 && opacity < 1.01) {
            await new Promise(resolve => setTimeout(resolve, 5));  
            opacity += change;
            playGif.style.opacity = opacity;
        }
    }

    async function playAnimation() {
        if (window.innerWidth < 500) {
            playGif.src = './playAnim.gif';
            await fadePlay(.01);
        }
        await new Promise(resolve => setTimeout(resolve, 5200));  
        await fadePlay(-.01);
        playGif.src = '';
    }


    function getSrc(songId) {
        let songNo = songId.split('-')[1];
        return songLinks[timeOfDay][hours % 12 === 0 ? '12' : hours % 12][songNo].link + "?autoplay=1&controls=0&rel=0";
    }

    // Function to remove any playing video and clear effects
    function removeVideos() {

        //frameAnimation(-.01);
        // Iterate over all song elements and remove iframe and halo effects
        songs.forEach(song => {
            const img = song.querySelector('img');
            if (img) {
                img.classList.remove('halo'); // Remove halo for all songs
            }
        });

        backBlur.style.opacity = "0";
        backBlur.style.pointerEvents = "none";
    
        // Clear the video background container
        videoContainer.innerHTML = ''; 
    }

    


});
