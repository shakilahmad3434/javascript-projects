const quotes = document.querySelector(".quotes");
    const author = document.querySelector(".author");
    const next = document.querySelector(".next");

    const allQuotes = [
    {
        quotes: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quotes: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quotes: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quotes: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quotes: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        quotes: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quotes: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quotes: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quotes: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill"
    },
    {
        quotes: "Whether you think you can or you think you can’t, you’re right.",
        author: "Henry Ford"
    },
    {
        quotes: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        quotes: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison"
    },
    {
        quotes: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        author: "Walt Whitman"
    },
    {
        quotes: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quotes: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quotes: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quotes: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        quotes: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle"
    },
    {
        quotes: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quotes: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quotes: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quotes: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quotes: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington"
    },
    {
        quotes: "Success is how high you bounce when you hit bottom.",
        author: "George S. Patton"
    },
    {
        quotes: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        quotes: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quotes: "Perfection is not attainable, but if we chase perfection we can catch excellence.",
        author: "Vince Lombardi"
    },
    {
        quotes: "You define your own life. Don’t let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quotes: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quotes: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou"
    },
    {
        quotes: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein"
    },
    {
        quotes: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau"
    },
    {
        quotes: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },
    {
        quotes: "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.",
        author: "Reba McEntire"
    },
    {
        quotes: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
    },
    {
        quotes: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quotes: "Do not wait to strike till the iron is hot; but make it hot by striking.",
        author: "William Butler Yeats"
    },
    {
        quotes: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quotes: "I would rather die of passion than of boredom.",
        author: "Vincent van Gogh"
    },
    {
        quotes: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt"
    },
    {
        quotes: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        quotes: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    },
    {
        quotes: "Don’t judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        quotes: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quotes: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        quotes: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quotes: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Christian D. Larson"
    },
    {
        quotes: "Do not let what you cannot do interfere with what you can do.",
        author: "John Wooden"
    },
    {
        quotes: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        quotes: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis"
    },
    {
        quotes: "A year from now you may wish you had started today.",
        author: "Karen Lamb"
    }
];

    let state = Math.floor(Math.random() * allQuotes.length);
    

    const handleQuotes = () => {
        quotes.style.opacity = 0;
        author.style.opacity = 0;
        
        setTimeout(() => {
                if (state >= allQuotes.length) state = 0;

                quotes.innerHTML = `"${allQuotes[state].quotes}"`;
                author.innerHTML = `― ${allQuotes[state].author}`;

                quotes.style.opacity = 1;
                author.style.opacity = 1;

                state++;
            }, 500); // Time for fade-out before updating text
    }

    handleQuotes();

    next.addEventListener("click", handleQuotes);
