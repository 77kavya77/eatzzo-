document.addEventListener('DOMContentLoaded', function () {
    // Form popup functionality
    const showFormBtn = document.getElementById('showFormBtn');
    const storyForm = document.getElementById('storyForm');
    const formOverlay = document.getElementById('formOverlay');
    const closeForm = document.getElementById('closeForm');
    const cancelForm = document.getElementById('cancelForm');

    showFormBtn.addEventListener('click', function () {
        storyForm.style.display = 'block';
        formOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    function closePopupForm() {
        storyForm.style.display = 'none';
        formOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeForm.addEventListener('click', closePopupForm);
    cancelForm.addEventListener('click', closePopupForm);
    formOverlay.addEventListener('click', closePopupForm);

    // Form submission
    const submitForm = document.getElementById('submitStoryForm');
    submitForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Here you would normally send the data to your backend
        alert('Thank you for sharing your kitchen story! It will be reviewed and published soon.');
        closePopupForm();
        submitForm.reset();
    });

       // Story popup functionality
    const storyCards = document.querySelectorAll('.story-card');
    const storyPopup = document.getElementById('storyPopup');
    const storyOverlay = document.getElementById('storyOverlay');
    const closeStory = document.getElementById('closeStory');
    
    // Sample full story content (in a real app, this would come from a database)
    const fullStories = {
        "Grandma's Secret Ingredient": {
            content: `Every Sunday, the aroma of her special curry would fill our home. It wasn't until I was 25 that she finally revealed the secret ingredient that made it magical...\n\nGrowing up, Sundays were sacred in our household. The moment I'd wake up, the rich scent of spices would already be wafting through the air. My grandmother would start cooking at dawn, grinding fresh spices by hand in her ancient stone mortar.\n\nFor years, I tried to replicate her recipe. I measured spices precisely, followed cooking times to the minute, but something was always missing. That unmistakable depth of flavor that made her curry legendary in our family.\n\nOn her 80th birthday, as we prepared the meal together, she finally whispered the secret: "It's not about the spices, child. It's the love you stir in with every turn of the spoon." She then revealed she always added a pinch of jaggery at the end, a trick her own mother taught her to balance all the flavors.\n\nNow when I make the curry for my own children, I think of her hands guiding mine, and I know the real magic was never in the ingredients, but in the stories and love she cooked into every dish.`,
            likes: 42,
            comments: 8,
            author: "ChefMaria"
        },
        "My First Kitchen Disaster": {
            content: `For my mother's 40th birthday, 12-year-old me decided to bake a cake from scratch. What emerged from the oven looked more like a volcanic eruption than a celebration cake...\n\nI had watched cooking shows and felt confident. How hard could it be? I mixed the ingredients without measuring, thinking baking was like art - it didn't need rules. The batter looked fine (if a bit lumpy) as I poured it into the pan.\n\nWhen I checked after 30 minutes, the cake had risen dramatically... then collapsed spectacularly. The center was raw while the edges were charcoal. In my panic, I tried to frost it anyway, creating a sticky, crumb-covered mess.\n\nMy mother, being the saint she is, took one bite and declared it "deliciously creative." That moment taught me two things: 1) Baking is science, and 2) The best cooks are the ones who can laugh at their mistakes.\n\nToday, I keep a photo of that disaster in my bakery's office. It reminds me how far I've come - and that even the worst kitchen failures can become your greatest teachers.`,
            likes: 28,
            comments: 5,
            author: "BakingQueen"
        },
        "Spices That Tell Stories": {
            content: `Each masala in my kitchen has a history. The garam masala that survived partition, the turmeric from my grandmother's village, the chili powder that sparked my first food business...\n\nThe small tin of garam masala is the oldest. My great-grandmother carried it across the new border during Partition, clutching it like treasure when they could bring so little. Though the original spices are long gone, we've maintained the same blend for four generations.\n\nThe turmeric comes from a village near Coimbatore where my grandmother grew up. Every year, her brother sends us a fresh batch, sun-dried and earthy. Its golden hue is unlike anything you'll find in stores.\n\nThe chili powder holds different memories - it was the first product I sold at 16, door-to-door in my neighborhood. That small venture taught me about flavors, business, and community.\n\nThese spices are more than ingredients; they're my family's story in scent and taste. When I cook, I'm not just feeding bodies - I'm keeping history alive.`,
            likes: 35,
            comments: 12,
            author: "SpiceMaster"
        },
        "The Pizza That Started It All": {
            content: `At 8 years old, I burned my first pizza. At 18, I served 100 perfect ones at a college pop-up. Today, that childhood failure inspires my entire restaurant philosophy...\n\nMy first attempt was a frozen pizza I "doctored up" with extra cheese and pepperoni. Distracted by cartoons, I forgot it in the oven until smoke filled the kitchen. My father, instead of scolding me, helped scrape off the char and said, "Let's try again - cooking is about practice."\n\nThat lesson stuck. In college, I turned my dorm kitchen into a midnight pizza operation, perfecting my dough recipe through endless experimentation. The pop-up led to a food truck, then my first brick-and-mortar.\n\nNow, my restaurant's signature dish is "The First Try" - a pizza with intentionally blackened edges. It's a reminder that every expert was once a beginner, and that the best flavors often come from well-seasoned mistakes.`,
            likes: 19,
            comments: 3,
            author: "PastaMaster"
        }
    };

    storyCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't open if clicking on like button or its children
            if (e.target.closest('.fa-heart')) return;
            
            const title = this.querySelector('.story-title').textContent;
            const storyData = fullStories[title];
            const imageSrc = this.querySelector('.story-image').src;
            
            document.getElementById('popupStoryTitle').textContent = title;
            document.getElementById('popupStoryContent').textContent = storyData.content;
            document.getElementById('popupStoryAuthor').textContent = `By ${storyData.author}`;
            document.getElementById('popupStoryLikes').textContent = storyData.likes;
            document.getElementById('popupStoryComments').textContent = storyData.comments;
            document.getElementById('popupStoryImage').src = imageSrc;
            
            storyPopup.style.display = 'block';
            storyOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    function closeStoryPopup() {
        storyPopup.style.display = 'none';
        storyOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeStory.addEventListener('click', closeStoryPopup);
    storyOverlay.addEventListener('click', closeStoryPopup);


    // Like functionality for stories
    const likeButtons = document.querySelectorAll('.fa-heart');
    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const countSpan = this.nextElementSibling;
            let count = parseInt(countSpan.textContent);

            if (this.classList.contains('far')) {
                this.classList.remove('far');
                this.classList.add('fas');
                this.style.color = '#FF6B6B';
                countSpan.textContent = count + 1;
            } else {
                this.classList.remove('fas');
                this.classList.add('far');
                this.style.color = '#888';
                countSpan.textContent = count - 1;
            }
        });
    });
});
