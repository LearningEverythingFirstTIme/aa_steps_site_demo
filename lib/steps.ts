export interface Step {
  id: number;
  roman: string;
  title: string;
  text: string;
  quote: {
    text: string;
    source: string;
  };
  reflection: string;
}

export const steps: Step[] = [
  {
    id: 1,
    roman: "I",
    title: "We admitted we were powerless over alcohol — that our lives had become unmanageable.",
    text: "We admitted we were powerless over alcohol — that our lives had become unmanageable.",
    quote: {
      text: "The first step in overcoming a problem is to admit that it exists. We cannot change what we will not acknowledge.",
      source: "Dr. Bob Smith, Co-founder of AA"
    },
    reflection: "What areas of my life feel unmanageable today? Where have I been trying to control the uncontrollable?"
  },
  {
    id: 2,
    roman: "II",
    title: "Came to believe that a Power greater than ourselves could restore us to sanity.",
    text: "Came to believe that a Power greater than ourselves could restore us to sanity.",
    quote: {
      text: "Faith is not belief without proof, but trust without reservation. We are not asked to believe in any particular conception of God, only to trust that there is something greater than our own will.",
      source: "Bill Wilson, Co-founder of AA"
    },
    reflection: "What might it mean for me to be restored to sanity? What Higher Power can I turn to today?"
  },
  {
    id: 3,
    roman: "III",
    title: "Made a decision to turn our will and our lives over to the care of God as we understood Him.",
    text: "Made a decision to turn our will and our lives over to the care of God as we understood Him.",
    quote: {
      text: "The decision to turn our will and our lives over to the care of God is the foundation of all our future work. Without this, we build on sand.",
      source: "Twelve Steps and Twelve Traditions"
    },
    reflection: "What am I holding onto that I need to surrender? How can I practice letting go today?"
  },
  {
    id: 4,
    roman: "IV",
    title: "Made a searching and fearless moral inventory of ourselves.",
    text: "Made a searching and fearless moral inventory of ourselves.",
    quote: {
      text: "The purpose of the inventory is to discover the truth about ourselves—the good, the bad, and the hidden. We cannot heal what we cannot see.",
      source: "Twelve Steps and Twelve Traditions"
    },
    reflection: "What patterns, resentments, or fears have I been avoiding? Where can I be more honest with myself?"
  },
  {
    id: 5,
    roman: "V",
    title: "Admitted to God, to ourselves, and to another human being the exact nature of our wrongs.",
    text: "Admitted to God, to ourselves, and to another human being the exact nature of our wrongs.",
    quote: {
      text: "It is a spiritual axiom that every time we are disturbed, no matter what the cause, there is something wrong with us. Admission is the beginning of freedom.",
      source: "Twelve Steps and Twelve Traditions"
    },
    reflection: "Who can I trust with my truth? What am I afraid to admit, and to whom?"
  },
  {
    id: 6,
    roman: "VI",
    title: "Were entirely ready to have God remove all these defects of character.",
    text: "Were entirely ready to have God remove all these defects of character.",
    quote: {
      text: "If we have been thorough in our inventory, we have written down a lot of things we are ashamed of. Now we must be ready to let them go.",
      source: "Twelve Steps and Twelve Traditions"
    },
    reflection: "Which of my character defects am I actually willing to let go of? Which ones am I still clinging to?"
  },
  {
    id: 7,
    roman: "VII",
    title: "Humbly asked Him to remove our shortcomings.",
    text: "Humbly asked Him to remove our shortcomings.",
    quote: {
      text: "When we say 'humbly asked,' we mean that we are making a simple request, without reservation, without demands, without expectations of how or when.",
      source: "Twelve Steps and Twelve Traditions"
    },
    reflection: "How can I practice humility today? What would it look like to truly ask for help?"
  },
  {
    id: 8,
    roman: "VIII",
    title: "Made a list of all persons we had harmed, and became willing to make amends to them all.",
    text: "Made a list of all persons we had harmed, and became willing to make amends to them all.",
    quote: {
      text: "We made a list. We were painstaking about it. We listed every person we could remember who might possibly have been harmed by our conduct, no matter how slight.",
      source: "Twelve Steps and Twelve Traditions"
    },
    reflection: "Who have I harmed through my actions, words, or omissions? Am I willing to make things right?"
  },
  {
    id: 9,
    roman: "IX",
    title: "Made direct amends to such people wherever possible, except when to do so would injure them or others.",
    text: "Made direct amends to such people wherever possible, except when to do so would injure them or others.",
    quote: {
      text: "Good judgment, a careful sense of timing, courage, and prudence—these are the qualities we shall need when we take Step Nine. We must not be afraid to make amends, but we must not be reckless either.",
      source: "Twelve Steps and Twelve Traditions"
    },
    reflection: "Where can I make direct amends today? Where might making amends cause more harm than good?"
  },
  {
    id: 10,
    roman: "X",
    title: "Continued to take personal inventory and when we were wrong promptly admitted it.",
    text: "Continued to take personal inventory and when we were wrong promptly admitted it.",
    quote: {
      text: "Step Ten is not a one-time event but a way of life. We watch ourselves with the same care that a good driver watches the road.",
      source: "Twelve Steps and Twelve Traditions"
    },
    reflection: "Where have I been wrong today? How quickly can I admit it and make it right?"
  },
  {
    id: 11,
    roman: "XI",
    title: "Sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His will for us and the power to carry that out.",
    text: "Sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His will for us and the power to carry that out.",
    quote: {
      text: "Prayer is asking for help. Meditation is listening for the answer. Both are necessary for conscious contact with the Divine.",
      source: "Twelve Steps and Twelve Traditions"
    },
    reflection: "How can I deepen my spiritual practice today? Am I spending as much time listening as I am asking?"
  },
  {
    id: 12,
    roman: "XII",
    title: "Having had a spiritual awakening as the result of these steps, we tried to carry this message to alcoholics, and to practice these principles in all our affairs.",
    text: "Having had a spiritual awakening as the result of these steps, we tried to carry this message to alcoholics, and to practice these principles in all our affairs.",
    quote: {
      text: "The Twelfth Step cannot be limited to alcoholics. We must practice these principles in all our affairs—at home, at work, in our communities, and in the world.",
      source: "Bill Wilson, Co-founder of AA"
    },
    reflection: "How can I be of service today? How can I practice these principles in every area of my life?"
  }
];

export function getStepById(id: number): Step | undefined {
  return steps.find(step => step.id === id);
}

// Extended collection of daily reflections and quotes from AA history
export interface DailyReflection {
  quote: string;
  source: string;
  theme: string;
}

export const dailyReflections: DailyReflection[] = [
  // Bill Wilson Wisdom
  {
    quote: "The great fact is just this, and nothing less: That we have had deep and effective spiritual experiences which have revolutionized our whole attitude toward life, toward our fellows and toward God's universe.",
    source: "Bill Wilson, Big Book",
    theme: "spiritual awakening"
  },
  {
    quote: "I have been given a daily reprieve contingent on the maintenance of my spiritual condition.",
    source: "Bill Wilson",
    theme: "daily reprieve"
  },
  {
    quote: "The only thing we know is that we do not know. And that is the beginning of wisdom.",
    source: "Bill Wilson",
    theme: "humility"
  },
  {
    quote: "We are not saints. The point is that we are willing to grow along spiritual lines.",
    source: "Bill Wilson, Big Book",
    theme: "progress not perfection"
  },
  {
    quote: "Resentment is the 'number one' offender. It destroys more alcoholics than anything else.",
    source: "Bill Wilson, Big Book",
    theme: "resentment"
  },
  {
    quote: "It is a spiritual axiom that every time we are disturbed, no matter what the cause, there is something wrong with us.",
    source: "Bill Wilson, 12&12",
    theme: "self-reflection"
  },
  {
    quote: "The feeling of having shared in a common peril is one element in the powerful cement which binds us.",
    source: "Bill Wilson, Big Book",
    theme: "fellowship"
  },
  {
    quote: "Our stories disclose in a general way what we used to be like, what happened, and what we are like now.",
    source: "Bill Wilson, Big Book",
    theme: "storytelling"
  },
  {
    quote: "We cannot subscribe to the belief that this life is a vale of tears, though it once was just that for many of us.",
    source: "Bill Wilson, Big Book",
    theme: "joy"
  },
  {
    quote: "The tremendous fact for every one of us is that we have discovered a common solution.",
    source: "Bill Wilson, Big Book",
    theme: "unity"
  },
  // Dr. Bob Smith
  {
    quote: "Keep it simple.",
    source: "Dr. Bob Smith",
    theme: "simplicity"
  },
  {
    quote: "There are two good reasons for being in AA. First, because you want to get sober and stay sober. Second, because you want to help other alcoholics achieve sobriety.",
    source: "Dr. Bob Smith",
    theme: "purpose"
  },
  {
    quote: "Humility is the foundation of all the other virtues.",
    source: "Dr. Bob Smith",
    theme: "humility"
  },
  // Big Book Classics
  {
    quote: "Rarely have we seen a person fail who has thoroughly followed our path.",
    source: "Alcoholics Anonymous (Big Book)",
    theme: "hope"
  },
  {
    quote: "We admitted we were powerless over alcohol—that our lives had become unmanageable.",
    source: "Big Book, Step One",
    theme: "admission"
  },
  {
    quote: "Half measures availed us nothing. We stood at the turning point.",
    source: "Big Book",
    theme: "commitment"
  },
  {
    quote: "This is the how and why of it. First of all, we had to quit playing God.",
    source: "Big Book",
    theme: "surrender"
  },
  {
    quote: "We trust infinite God rather than our finite selves.",
    source: "Big Book",
    theme: "faith"
  },
  {
    quote: "We are going to know a new freedom and a new happiness.",
    source: "Big Book, Promises",
    theme: "promises"
  },
  {
    quote: "We will not regret the past nor wish to shut the door on it.",
    source: "Big Book, Promises",
    theme: "acceptance"
  },
  {
    quote: "We will comprehend the word serenity and we will know peace.",
    source: "Big Book, Promises",
    theme: "serenity"
  },
  {
    quote: "No matter how far down the scale we have gone, we will see how our experience can benefit others.",
    source: "Big Book, Promises",
    theme: "service"
  },
  {
    quote: "That feeling of uselessness and self-pity will disappear.",
    source: "Big Book, Promises",
    theme: "self-worth"
  },
  {
    quote: "We will lose interest in selfish things and gain interest in our fellows.",
    source: "Big Book, Promises",
    theme: "fellowship"
  },
  {
    quote: "Self-seeking will slip away.",
    source: "Big Book, Promises",
    theme: "selflessness"
  },
  {
    quote: "Our whole attitude and outlook upon life will change.",
    source: "Big Book, Promises",
    theme: "transformation"
  },
  {
    quote: "Fear of people and of economic insecurity will leave us.",
    source: "Big Book, Promises",
    theme: "fearlessness"
  },
  {
    quote: "We will intuitively know how to handle situations which used to baffle us.",
    source: "Big Book, Promises",
    theme: "intuition"
  },
  {
    quote: "We will suddenly realize that God is doing for us what we could not do for ourselves.",
    source: "Big Book, Promises",
    theme: "miracles"
  },
  // Twelve Steps and Twelve Traditions
  {
    quote: "The Steps are our solution. They are our survival kit. They are our defense against drinking.",
    source: "12&12",
    theme: "steps"
  },
  {
    quote: "Patience and tolerance are the watchwords of the Tenth Step.",
    source: "12&12",
    theme: "patience"
  },
  {
    quote: "We are not saints, but we are willing to grow along spiritual lines.",
    source: "12&12",
    theme: "growth"
  },
  {
    quote: "The only requirement for AA membership is a desire to stop drinking.",
    source: "12&12, Tradition Three",
    theme: "inclusivity"
  },
  {
    quote: "Each group has but one primary purpose—to carry its message to the alcoholic who still suffers.",
    source: "12&12, Tradition Five",
    theme: "primary purpose"
  },
  {
    quote: "Anonymity is the spiritual foundation of all our traditions, ever reminding us to place principles before personalities.",
    source: "12&12, Tradition Twelve",
    theme: "anonymity"
  },
  // AA Sayings and Slogans
  {
    quote: "One day at a time.",
    source: "AA Slogan",
    theme: "today"
  },
  {
    quote: "Easy does it.",
    source: "AA Slogan",
    theme: "gentleness"
  },
  {
    quote: "First things first.",
    source: "AA Slogan",
    theme: "priorities"
  },
  {
    quote: "Live and let live.",
    source: "AA Slogan",
    theme: "acceptance"
  },
  {
    quote: "Let go and let God.",
    source: "AA Slogan",
    theme: "surrender"
  },
  {
    quote: "Progress, not perfection.",
    source: "AA Slogan",
    theme: "progress"
  },
  {
    quote: "This too shall pass.",
    source: "AA Slogan",
    theme: "impermanence"
  },
  {
    quote: "Think, think, think.",
    source: "AA Slogan",
    theme: "mindfulness"
  },
  {
    quote: "Keep coming back.",
    source: "AA Slogan",
    theme: "persistence"
  },
  {
    quote: "It works if you work it.",
    source: "AA Slogan",
    theme: "action"
  },
  {
    quote: "You're only as sick as your secrets.",
    source: "AA Saying",
    theme: "honesty"
  },
  {
    quote: "The elevator is broken—take the Steps.",
    source: "AA Saying",
    theme: "steps"
  },
  {
    quote: "If you sit in the barber's chair long enough, you'll get a haircut.",
    source: "AA Saying",
    theme: "vigilance"
  },
  {
    quote: "Don't quit before the miracle happens.",
    source: "AA Saying",
    theme: "perseverance"
  },
  {
    quote: "Your best thinking got you here.",
    source: "AA Saying",
    theme: "open-mindedness"
  },
  {
    quote: "Meeting makers make it.",
    source: "AA Saying",
    theme: "meetings"
  },
  {
    quote: "Stick with the winners.",
    source: "AA Saying",
    theme: "fellowship"
  },
  {
    quote: "Call your sponsor before, not after.",
    source: "AA Saying",
    theme: "sponsorship"
  },
  {
    quote: "If you don't take that first drink, you can't get drunk.",
    source: "AA Saying",
    theme: "first drink"
  },
  {
    quote: "You can't think your way into right living, but you can live your way into right thinking.",
    source: "AA Saying",
    theme: "action"
  },
  // Spiritual Wisdom
  {
    quote: "Grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.",
    source: "Serenity Prayer",
    theme: "serenity"
  },
  {
    quote: "God, grant me the serenity...",
    source: "Reinhold Niebuhr",
    theme: "prayer"
  },
  {
    quote: "Lord, make me a channel of Thy peace.",
    source: "St. Francis Prayer",
    theme: "service"
  },
  {
    quote: "Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith.",
    source: "St. Francis Prayer",
    theme: "love"
  },
  // Recovery Wisdom
  {
    quote: "Recovery is not a destination, it's a journey.",
    source: "AA Wisdom",
    theme: "journey"
  },
  {
    quote: "The only meeting you ever have to go to is the next one.",
    source: "AA Wisdom",
    theme: "meetings"
  },
  {
    quote: "I came for the drinking, I stayed for the thinking.",
    source: "AA Wisdom",
    theme: "growth"
  },
  {
    quote: "Sobriety delivers everything alcohol promised.",
    source: "AA Wisdom",
    theme: "promises"
  },
  {
    quote: "The pain of the process is temporary, but the gifts of recovery are permanent.",
    source: "AA Wisdom",
    theme: "process"
  },
  {
    quote: "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.",
    source: "Pierre Teilhard de Chardin (often quoted in AA)",
    theme: "spirituality"
  },
  {
    quote: "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.",
    source: "Ambrose Redmoon (quoted in AA)",
    theme: "courage"
  },
  {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    source: "Will Durant (often quoted in AA)",
    theme: "habits"
  },
  {
    quote: "The darkest hour is just before the dawn.",
    source: "Thomas Fuller (quoted in AA)",
    theme: "hope"
  },
  {
    quote: "When I stopped living in the problem and began living in the answer, the problem went away.",
    source: "AA Wisdom",
    theme: "solution"
  },
  {
    quote: "I can do something for 24 hours that would appall me if I felt I had to keep it up for a lifetime.",
    source: "Big Book",
    theme: "one day"
  },
  {
    quote: "The worth of every conviction consists precisely in the steadfastness with which it is held.",
    source: "Jane Harrison (quoted in AA)",
    theme: "conviction"
  },
  {
    quote: "We are not responsible for our disease, but we are responsible for our recovery.",
    source: "AA Wisdom",
    theme: "responsibility"
  },
  {
    quote: "The only person you are destined to become is the person you decide to be.",
    source: "Ralph Waldo Emerson (quoted in AA)",
    theme: "choice"
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    source: "Ralph Waldo Emerson (quoted in AA)",
    theme: "inner strength"
  },
  {
    quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
    source: "Chinese Proverb (quoted in AA)",
    theme: "now"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky (quoted in AA)",
    theme: "action"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius (quoted in AA)",
    theme: "persistence"
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    source: "George Addair (quoted in AA)",
    theme: "fear"
  },
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    source: "C.S. Lewis (quoted in AA)",
    theme: "purpose"
  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt (quoted in AA)",
    theme: "belief"
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    source: "Tony Robbins (quoted in AA)",
    theme: "beginning"
  },
  {
    quote: "Your present circumstances don't determine where you can go; they merely determine where you start.",
    source: "Nido Qubein (quoted in AA)",
    theme: "possibility"
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    source: "William James (quoted in AA)",
    theme: "action"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill (quoted in AA)",
    theme: "courage"
  },
  {
    quote: "What we fear doing most is usually what we most need to do.",
    source: "Tim Ferriss (quoted in AA)",
    theme: "fear"
  },
  {
    quote: "The secret of getting ahead is getting started.",
    source: "Mark Twain (quoted in AA)",
    theme: "action"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    source: "Sam Levenson (quoted in AA)",
    theme: "perseverance"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt (quoted in AA)",
    theme: "dreams"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    source: "Aristotle (quoted in AA)",
    theme: "hope"
  },
  {
    quote: "Whoever is happy will make others happy too.",
    source: "Anne Frank (quoted in AA)",
    theme: "joy"
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    source: "Maya Angelou (quoted in AA)",
    theme: "resilience"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela (quoted in AA)",
    theme: "resilience"
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    source: "Albert Einstein (quoted in AA)",
    theme: "opportunity"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney (quoted in AA)",
    theme: "action"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon (quoted in AA)",
    theme: "acceptance"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    source: "Steve Jobs (quoted in AA)",
    theme: "passion"
  },
  {
    quote: "If you really look closely, most overnight successes took a long time.",
    source: "Steve Jobs (quoted in AA)",
    theme: "patience"
  },
  {
    quote: "Your work is going to fill a large part of your life. The only way to be truly satisfied is to do what you believe is great work.",
    source: "Steve Jobs (quoted in AA)",
    theme: "purpose"
  },
  {
    quote: "Stay hungry, stay foolish.",
    source: "Steve Jobs (quoted in AA)",
    theme: "curiosity"
  },
  {
    quote: "The people who are crazy enough to think they can change the world are the ones who do.",
    source: "Steve Jobs (quoted in AA)",
    theme: "change"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas Edison (quoted in AA)",
    theme: "persistence"
  },
  {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    source: "Thomas Edison (quoted in AA)",
    theme: "effort"
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    source: "Thomas Edison (quoted in AA)",
    theme: "perseverance"
  },
  {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    source: "Thomas Edison (quoted in AA)",
    theme: "try again"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi (quoted in AA)",
    theme: "change"
  },
  {
    quote: "The weak can never forgive. Forgiveness is the attribute of the strong.",
    source: "Mahatma Gandhi (quoted in AA)",
    theme: "forgiveness"
  },
  quote: "An eye for an eye will only make the whole world blind.",
    source: "Mahatma Gandhi (quoted in AA)",
    theme: "forgiveness"
  },
  {
    quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
    source: "Mahatma Gandhi (quoted in AA)",
    theme: "integrity"
  },
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    source: "Mahatma Gandhi (quoted in AA)",
    theme: "service"
  },
  {
    quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
    source: "Mahatma Gandhi (quoted in AA)",
    theme: "will"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi (quoted in AA)",
    theme: "learning"
  },
  {
    quote: "The future depends on what you do today.",
    source: "Mahatma Gandhi (quoted in AA)",
    theme: "today"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi (quoted in AA)",
    theme: "example"
  }
];

export function getRandomStep(): Step {
  return steps[Math.floor(Math.random() * steps.length)];
}

export function getRandomReflection(): DailyReflection {
  return dailyReflections[Math.floor(Math.random() * dailyReflections.length)];
}
