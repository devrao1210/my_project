const timeline = document.querySelector(".timeline");
const backgroundContainer = document.querySelector(".background-container");

const events = [
    { date: "3rd April", note: "The day we first met in Chin Lungs I was waiting for you upstairs. This was the day I saw you for the first time, the day I got attracted towards you, the day I got attracted towards those eyes. I got a bit drunk on beer and you were very littly on LIIT, I was unsure if I would see you again, you were also surprised by my age, but all in all it was a nice meet.", image: "images/image_1.jpeg" },
    { date: "10 April", note: "The day we randomly planned to meet, I left and I got drentched, but you liked the look in shirt. So after getting drentched you sat behind me and held me like Sharu will hold me that was my reaction of that grip of yours. We went to your adda but it was too busy. So, went for a walk at the park, but I fumbled there and it was a turn off for you. Still for me it was a really nice date for me, and for real I was about to kiss you when we shared that smoke, but I held my horses.", image: "images/image_18.jpeg" },
    { date: "18 April", note: "This was the day things kinda escalated between us. It was the friday and before that day, we dicided that you'll come to Bharatiya City in the afternoon and we'll go to Geist. Although I didn't plan anything, you also lost any hopes in me I would make a move, even you doubted my sexuality, still after getting a bit drunk I offered you to come to my place and you didn't deny. We went to the flat, we sat outside and somehow we were a bit drunk too and went inside. Then was the time I made the first move and you still remember that clearly and we got intimate, this was unexpected for you but you still went with the flow.", image: "images/image_12.jpeg" },
    { date: "25 April", note: "This was the day you were travelling to Mumbai and you couldn't sleep in the train, so we talked till morning and we talked about a lot of things and what not was included in that. I slept after sunrise and it was an awesome conversation with you.", image: "images/image_19.jpeg" },
    { date: "28 April", note: "So, now I am creating the till now story and Idk if it'll have any more pages or not, so I can't lie on that. That time when my manager told me that he's having some contacts to book your flight tickets in cheaper prices and after that he said to wait as his contact was unable to book, On Saturday his contact failed and said I will not be able to book, but if I said so, you guys will be travelling back by train or bus coz the flight prices were increased and we have planned our things together, and after that I was traveeling back home, so I myself booked the flight tickets coz I wanted to spend that time with you .", image: "images/image_15.jpeg" },
    { date: "29 April - 30 April", note: "For the first time we spent two days together and it felt like it was just a few mins, I was enjoying a lot in your company and those two days were awesome.", image: "images/image_2.jpeg" },
    { date: "11 May - 15 May", note: " After we stared kind of dating can say we were away for 10 days and you went to goa. I came back from home and you came back on Sunday night. We stayed together for three days, at that time you got the pain too, but you just took pan D and it was okayish, we did somethings in my lunch break when I retured and I still remember that, I was scared of the pain you had last night.   ", image: "images/image_17.jpeg" },
    { date: "27 May - 28 May", note: "These were your surgery dates, I didn't hear from you for the whole eve till night and in night also, just a text that you're in hospital. I was so worried and didn't know what happened to whom. The next day you gave me the context and then I was relieved.", image: "images/image_6.jpeg" },
    { date: "6 June", note: "The day we had our first biggest fight, I went to the office party and got over drunk and my phone was with my manager. On saturday I came to Tumkur to convince you and eneded up making you more pissed. I'm sorry for that baby still. I know that was not at all the correct decision.  ", image: "images/image_8.jpeg" },
    { date: "21 June", note: "We did our first mini road trip to Tumkur in your pappa's car and it was an awesome day we didn't sleep the whole night and we went to your favourite spots and your favourite idli place. Just a bit negative that you got some scolding from your mother that was a bit off and I got introduced to akshay, the another positive.", image: "images/image_3.jpeg" },
    { date: "27 June", note: "It was a great start to our trip we did shopping together, we did the packing together of both of us and we did a lot of fun together at home at that night too and the start of the trip was really good, we reahed Guwahati and got a bit irritated coz of hunger and then reached Shillong and finally we got ready and went out to Tring Tring for your Birthday.", image: "images/image_16.jpeg" },
    { date: "28 June", note: "First day I got drunk at Tring Tring and the next day you got drunk at Tring Tring, that place will always be memorable for me it was a really nice atmosphere and hope so I planned your birthday till your expections. I did some fumbles after getting drunk, got a bit emotional, but your drunk phase was also memorable.", image: "images/image_5.jpeg" },
    { date: "1 July", note: "We did that private waterfall bath, your craziness kiked in, that was so fun then we did that phi phi falls also and after that came our toughest part the drive to Arunachal, there were a few hickups on that road trip but still we were happy with each other we were listening different different music did the offroading kind of drive and a lot of great memories I have of that drive.", image: "images/image_7.jpeg" },
    { date: "15 July", note: "The D-day when it was the time of our seperation and still I don't have an idea how long it will be just like at that day, maybe this complete life also, but I'll still hope to see you soon, now definition of soon I don't know. Before that day, we fought a bit too, did some crazy things even after those olies were there in the house, the feeling of getting your stuff packed, it was very different, that you are going for some great milestone, but we'll be apart, I will be left with just the memories. That feeling was a mix of joy and sorrow. But all in all that was also a great and memorable day.", image: "images/image_9.jpeg" },
    { date: "17 Aug", note: "The day I went to Tumkur to have that idli from your favourite place, the reaction of yours was worth the sleep that I didn't get and all of things came to one the way you said all those words, before that we had our fights the convincing and all but we were and hopefully we'll overcome the fight phase  ", image: "images/image_14.jpeg" },
    { date: "30 Aug", note: "The day of my biggest fuck up, the riskiest and the worst day of my life, for which I have not apologised yet, I am so soory for that and the things before or after that, that was an eye opening event for me, I don't know if you've noticed that or not but now I am also very much afraid to drink over my capacity, just drink sometimes and just a few drinks are enough, I am also ashamed that you felt like you're not important to me. I don't want any break from you, I don't want the end of contact at any point, I don't want to hurt you at all. I want you above all of the things in life.", image: "images/image_11.jpeg" },
    { date: "Today", note: "I didn't intent to make you hurt or not give you attention, you can say it was my immaturity. I accept that it was my mistake to not clarify things after returned from the trip. I never intented to hurt you or take distance from you. Please forgive me baby please. I love you and I miss you a lot<3.", image: "images/image_13.jpeg" },
    { date: "Today", note: "I didn't intent to make you hurt or not give you attention, you can say it was my immaturity. I accept that it was my mistake to not clarify things after returned from the trip. I never intented to hurt you or take distance from you. Please forgive me baby please. I love you and I miss you a lot<3.", image: "images/image_13.jpeg" }
];

// Create background images
events.forEach((ev, i) => {
    const bgDiv = document.createElement("div");
    bgDiv.classList.add("bg");
    bgDiv.style.backgroundImage = `url('${ev.image}')`;
    if (i === 0) bgDiv.classList.add("active");
    backgroundContainer.appendChild(bgDiv);
});

const backgrounds = document.querySelectorAll(".bg");

// Create timeline events
events.forEach((ev, idx) => {
    const eventEl = document.createElement("div");
    eventEl.classList.add("event");

    const dot = document.createElement("div");
    dot.classList.add("dot");

    const dateEl = document.createElement("div");
    dateEl.classList.add("date");
    dateEl.innerText = ev.date;

    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `<strong>${ev.note}</strong><br><img src="${ev.image}">`;

     dot.addEventListener("click", () => {
        document.querySelectorAll(".dot").forEach(d => d.classList.remove("active"));
        document.querySelectorAll(".note").forEach(n => n.style.display = "none");

        dot.classList.add("active");
        note.style.display = "block";

        backgrounds.forEach(bg => bg.classList.remove("active"));
        backgrounds[idx].classList.add("active");
         // 👉 Auto-scroll if this dot is the rightmost visible one
        const wrapper = document.querySelector(".timeline-wrapper");
        const dotRect = dot.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();

        // If the dot is close to the right edge, scroll to next position
        if (dotRect.right > wrapperRect.right - 50) {
            wrapper.scrollBy({ left: 200, behavior: "smooth" });
        }

        // If the dot is close to the left edge, scroll backwards (optional)
        if (dotRect.left < wrapperRect.left + 50) {
            wrapper.scrollBy({ left: -200, behavior: "smooth" });
    }
    });
   

    eventEl.appendChild(dot);
    eventEl.appendChild(note);
    eventEl.appendChild(dateEl);

    timeline.appendChild(eventEl);

    if (idx < events.length - 1) {
        const connector = document.createElement("div");
        connector.classList.add("connector");
        timeline.appendChild(connector);
    }
});

// Trigger first event
document.querySelector(".dot").click();










