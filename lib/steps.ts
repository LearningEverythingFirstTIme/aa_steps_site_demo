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

// Extended collection of daily reflections from AA literature and conference-approved sources
export interface DailyReflection {
  quote: string;
  source: string;
  theme: string;
}

export const dailyReflections: DailyReflection[] = [
  // Bill Wilson - Co-founder of AA
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
  {
    quote: "Faith is not belief without proof, but trust without reservation.",
    source: "Bill Wilson",
    theme: "faith"
  },
  {
    quote: "The Twelve Steps are a group of principles, spiritual in their nature, which, if practiced as a way of life, can expel the obsession to drink and enable the sufferer to become happily and usefully whole.",
    source: "Bill Wilson, 12&12",
    theme: "steps"
  },
  {
    quote: "We found that as soon as we were able to lay aside prejudice and express even a willingness to believe in a Power greater than ourselves, we commenced to get results.",
    source: "Bill Wilson, Big Book",
    theme: "open-mindedness"
  },
  {
    quote: "To the intellectually self-sufficient man or woman, many A.A.'s can say, 'Yes, we were like you—far too smart for our own good. We loved to dazzle others with our knowledge and to argue them down.'",
    source: "Bill Wilson, 12&12",
    theme: "humility"
  },
  {
    quote: "The only radical remedy I know for egotism is to get down on our knees and ask for help from a Power greater than ourselves.",
    source: "Bill Wilson",
    theme: "prayer"
  },
  // Dr. Bob Smith - Co-founder of AA
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
  {
    quote: "Love and service are the keys.",
    source: "Dr. Bob Smith",
    theme: "service"
  },
  // Big Book - Alcoholics Anonymous
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
  // The Promises
  {
    quote: "We are going to know a new freedom and a new happiness.",
    source: "Big Book, The Promises",
    theme: "promises"
  },
  {
    quote: "We will not regret the past nor wish to shut the door on it.",
    source: "Big Book, The Promises",
    theme: "acceptance"
  },
  {
    quote: "We will comprehend the word serenity and we will know peace.",
    source: "Big Book, The Promises",
    theme: "serenity"
  },
  {
    quote: "No matter how far down the scale we have gone, we will see how our experience can benefit others.",
    source: "Big Book, The Promises",
    theme: "service"
  },
  {
    quote: "That feeling of uselessness and self-pity will disappear.",
    source: "Big Book, The Promises",
    theme: "self-worth"
  },
  {
    quote: "We will lose interest in selfish things and gain interest in our fellows.",
    source: "Big Book, The Promises",
    theme: "fellowship"
  },
  {
    quote: "Self-seeking will slip away.",
    source: "Big Book, The Promises",
    theme: "selflessness"
  },
  {
    quote: "Our whole attitude and outlook upon life will change.",
    source: "Big Book, The Promises",
    theme: "transformation"
  },
  {
    quote: "Fear of people and of economic insecurity will leave us.",
    source: "Big Book, The Promises",
    theme: "fearlessness"
  },
  {
    quote: "We will intuitively know how to handle situations which used to baffle us.",
    source: "Big Book, The Promises",
    theme: "intuition"
  },
  {
    quote: "We will suddenly realize that God is doing for us what we could not do for ourselves.",
    source: "Big Book, The Promises",
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
  {
    quote: "True ambition is not what we thought it was. It is not the drive to be top dog. It is the desire to be of maximum service to God and the people about us.",
    source: "12&12",
    theme: "service"
  },
  {
    quote: "We cannot subscribe to the belief that this life is a vale of tears, though it once was just that for many of us.",
    source: "12&12",
    theme: "joy"
  },
  {
    quote: "When we are willing to place the welfare of others ahead of our own selfish desires, we are on the way to true usefulness and lasting happiness.",
    source: "12&12",
    theme: "happiness"
  },
  {
    quote: "The practice of prayer and meditation, as outlined in Step Eleven, is essential to our continued sobriety and spiritual growth.",
    source: "12&12",
    theme: "prayer"
  },
  // AA Slogans and Sayings
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
  {
    quote: "Sobriety delivers everything alcohol promised.",
    source: "AA Saying",
    theme: "promises"
  },
  {
    quote: "I came for the drinking, I stayed for the thinking.",
    source: "AA Saying",
    theme: "growth"
  },
  {
    quote: "The only meeting you ever have to go to is the next one.",
    source: "AA Saying",
    theme: "meetings"
  },
  {
    quote: "Recovery is not a destination, it's a journey.",
    source: "AA Saying",
    theme: "journey"
  },
  {
    quote: "When I stopped living in the problem and began living in the answer, the problem went away.",
    source: "AA Saying",
    theme: "solution"
  },
  {
    quote: "We are not responsible for our disease, but we are responsible for our recovery.",
    source: "AA Saying",
    theme: "responsibility"
  },
  {
    quote: "The pain of the process is temporary, but the gifts of recovery are permanent.",
    source: "AA Saying",
    theme: "process"
  },
  {
    quote: "I can do something for 24 hours that would appall me if I felt I had to keep it up for a lifetime.",
    source: "AA Saying",
    theme: "one day"
  },
  {
    quote: "Cultivate the habit of being grateful for every good thing that comes to you, and to give thanks continuously.",
    source: "AA Saying",
    theme: "gratitude"
  },
  // More Big Book Wisdom
  {
    quote: "We alcoholics are men and women who have lost the ability to control our drinking.",
    source: "Big Book",
    theme: "admission"
  },
  {
    quote: "We know that no real alcoholic ever recovers control.",
    source: "Big Book",
    theme: "acceptance"
  },
  {
    quote: "The fact is that most alcoholics, for reasons yet obscure, have lost the power of choice in drink.",
    source: "Big Book",
    theme: "powerlessness"
  },
  {
    quote: "Our liquor was but a symptom. So we had to get down to causes and conditions.",
    source: "Big Book",
    theme: "self-reflection"
  },
  {
    quote: "Therefore, the main problem of the alcoholic centers in his mind, rather than in his body.",
    source: "Big Book",
    theme: "mind"
  },
  {
    quote: "If you are as seriously alcoholic as we were, we believe there is no middle-of-the-road solution.",
    source: "Big Book",
    theme: "commitment"
  },
  {
    quote: "We alcoholics are suffering from a disease which only a spiritual experience will conquer.",
    source: "Big Book",
    theme: "spiritual solution"
  },
  {
    quote: "To one who feels he is an atheist or agnostic such an experience seems impossible, but to continue as he is means disaster.",
    source: "Big Book",
    theme: "open-mindedness"
  },
  {
    quote: "We found that as soon as we were able to lay aside prejudice and express even a willingness to believe in a Power greater than ourselves, we commenced to get results.",
    source: "Big Book",
    theme: "willingness"
  },
  {
    quote: "The spiritual life is not a theory. We have to live it.",
    source: "Big Book",
    theme: "practice"
  },
  {
    quote: "We have entered the world of the Spirit. Our next function is to grow in understanding and effectiveness.",
    source: "Big Book",
    theme: "growth"
  },
  {
    quote: "This is the how and why of it. First of all, we had to quit playing God. It didn't work.",
    source: "Big Book",
    theme: "surrender"
  },
  {
    quote: "Next, we decided that hereafter in this drama of life, God was going to be our Director.",
    source: "Big Book",
    theme: "guidance"
  },
  {
    quote: "He is the Principal; we are His agents. He is the Father, and we are His children.",
    source: "Big Book",
    theme: "relationship"
  },
  {
    quote: "Most good ideas are simple, and this concept was the keystone of the new and triumphant arch through which we passed to freedom.",
    source: "Big Book",
    theme: "simplicity"
  },
  {
    quote: "When we sincerely took such a position, all sorts of remarkable things followed.",
    source: "Big Book",
    theme: "miracles"
  },
  {
    quote: "We had a new Employer. Being all powerful, He provided what we needed, if we kept close to Him and performed His work well.",
    source: "Big Book",
    theme: "provision"
  },
  {
    quote: "Established on such a footing we became less and less interested in ourselves, our little plans and designs.",
    source: "Big Book",
    theme: "selflessness"
  },
  {
    quote: "More and more we became interested in seeing what we could contribute to life.",
    source: "Big Book",
    theme: "service"
  },
  {
    quote: "As we felt new power flow in, as we enjoyed peace of mind, as we discovered we could face life successfully, as we became conscious of His presence, we began to lose our fear of today, tomorrow or the hereafter.",
    source: "Big Book",
    theme: "peace"
  },
  {
    quote: "We were reborn.",
    source: "Big Book",
    theme: "rebirth"
  },
  // AA Preamble
  {
    quote: "Alcoholics Anonymous is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from alcoholism.",
    source: "AA Preamble",
    theme: "fellowship"
  },
  {
    quote: "The only requirement for membership is a desire to stop drinking.",
    source: "AA Preamble",
    theme: "inclusivity"
  },
  {
    quote: "There are no dues or fees for AA membership; we are self-supporting through our own contributions.",
    source: "AA Preamble",
    theme: "self-support"
  },
  {
    quote: "AA is not allied with any sect, denomination, politics, organization or institution; does not wish to engage in any controversy; neither endorses nor opposes any causes.",
    source: "AA Preamble",
    theme: "neutrality"
  },
  {
    quote: "Our primary purpose is to stay sober and help other alcoholics to achieve sobriety.",
    source: "AA Preamble",
    theme: "primary purpose"
  },
  // Responsibility Statement
  {
    quote: "I am responsible. When anyone, anywhere, reaches out for help, I want the hand of AA always to be there. And for that: I am responsible.",
    source: "AA Responsibility Statement",
    theme: "responsibility"
  },
  // Serenity Prayer
  {
    quote: "God, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference.",
    source: "Serenity Prayer",
    theme: "serenity"
  },
  // St. Francis Prayer (used in AA)
  {
    quote: "Lord, make me a channel of thy peace—that where there is hatred, I may bring love—that where there is wrong, I may bring the spirit of forgiveness.",
    source: "St. Francis Prayer (AA)",
    theme: "peace"
  },
  {
    quote: "Where there is discord, I may bring harmony—where there is error, I may bring truth—where there is doubt, I may bring faith.",
    source: "St. Francis Prayer (AA)",
    theme: "harmony"
  },
  {
    quote: "Where there is despair, I may bring hope—where there are shadows, I may bring light—where there is sadness, I may bring joy.",
    source: "St. Francis Prayer (AA)",
    theme: "hope"
  },
  {
    quote: "Grant that I may seek rather to comfort than to be comforted—to understand, than to be understood—to love, than to be loved.",
    source: "St. Francis Prayer (AA)",
    theme: "love"
  },
  {
    quote: "For it is by self-forgetting that one finds. It is by forgiving that one is forgiven. It is by dying that one awakens to Eternal Life.",
    source: "St. Francis Prayer (AA)",
    theme: "surrender"
  },
  // Third Step Prayer
  {
    quote: "God, I offer myself to Thee—to build with me and to do with me as Thou wilt. Relieve me of the bondage of self, that I may better do Thy will.",
    source: "Third Step Prayer",
    theme: "surrender"
  },
  {
    quote: "Take away my difficulties, that victory over them may bear witness to those I would help of Thy Power, Thy Love, and Thy Way of life.",
    source: "Third Step Prayer",
    theme: "help"
  },
  {
    quote: "May I do Thy will always!",
    source: "Third Step Prayer",
    theme: "willingness"
  },
  // Seventh Step Prayer
  {
    quote: "My Creator, I am now willing that you should have all of me, good and bad. I pray that you now remove from me every single defect of character which stands in the way of my usefulness to you and my fellows.",
    source: "Seventh Step Prayer",
    theme: "character"
  },
  {
    quote: "Grant me strength, as I go out from here, to do your bidding. Amen.",
    source: "Seventh Step Prayer",
    theme: "strength"
  }
];

export function getRandomStep(): Step {
  return steps[Math.floor(Math.random() * steps.length)];
}

export function getRandomReflection(): DailyReflection {
  return dailyReflections[Math.floor(Math.random() * dailyReflections.length)];
}
