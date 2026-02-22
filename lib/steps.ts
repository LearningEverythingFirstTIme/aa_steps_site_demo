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

export function getRandomStep(): Step {
  return steps[Math.floor(Math.random() * steps.length)];
}
