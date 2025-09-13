import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Brain,
  Activity,
  Shield,
  BotIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Health & Lifestyle Vocabulary for IELTS Speaking | Medical & Wellness Terms",
  description:
    "Master health and lifestyle vocabulary for IELTS Speaking. Learn advanced terms like mental health, preventive medicine, healthcare access with examples for Band 7-9.",
  keywords: [
    "IELTS health vocabulary",
    "mental health IELTS",
    "preventive medicine vocabulary",
    "healthcare access IELTS",
    "wellness vocabulary",
    "Band 7-9 health terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Mental Health",
    definition:
      "A person's psychological and emotional well-being, including their ability to handle stress, relate to others, and make healthy choices.",
    example:
      "Mental health awareness is increasingly recognized as equally important as physical health in modern healthcare systems.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Psychological well-being", "Emotional health"],
    pronunciation: "/ˈmentəl helθ/",
  },
  {
    term: "Preventive Medicine",
    definition:
      "Healthcare practices focused on preventing diseases and health problems before they occur, rather than treating them after diagnosis.",
    example:
      "Preventive medicine helps reduce the burden on healthcare systems by stopping diseases before they develop.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Preventive healthcare", "Health prevention"],
    pronunciation: "/prɪˈventɪv ˈmedəsən/",
  },
  {
    term: "Healthcare Access",
    definition:
      "The ability of individuals to obtain needed medical services, including availability, affordability, and geographical proximity to healthcare facilities.",
    example:
      "Improving healthcare access should be a priority for developing countries to ensure equal treatment opportunities.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Medical accessibility", "Healthcare availability"],
    pronunciation: "/ˈhelθker ˈækses/",
  },
  {
    term: "Sedentary Lifestyle",
    definition:
      "A way of living that involves little or no physical activity, typically characterized by prolonged sitting and minimal exercise.",
    example:
      "A sedentary lifestyle can cause obesity and related health problems, especially in office workers.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Inactive lifestyle", "Low-activity living"],
    pronunciation: "/ˈsedənˌteri ˈlaɪfˌstaɪl/",
  },
  {
    term: "Nutrition",
    definition:
      "The process of providing or obtaining food necessary for health and growth, including the study of nutrients in food and their effects on health.",
    example:
      "Good nutrition is vital for the development of children and maintaining health throughout life.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Dietary health", "Nutritional science"],
    pronunciation: "/nuˈtrɪʃən/",
  },
  {
    term: "Stress Management",
    definition:
      "Techniques and strategies used to cope with and reduce stress levels, including both prevention and treatment approaches.",
    example:
      "Stress management programs at work improve employee productivity and overall workplace satisfaction.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Stress reduction", "Stress coping"],
    pronunciation: "/stres ˈmænɪdʒmənt/",
  },
  {
    term: "Healthy Diet",
    definition:
      "Mainly eating food that is nutritious and cutting down on sugar and fat to maintain good health and prevent illness.",
    example:
      "Eating a healthy diet can help prevent illness and disease throughout your lifetime.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Nutritious eating", "Balanced nutrition", "Wholesome diet"],
    pronunciation: "/ˈhelθi ˈdaɪət/",
  },
  {
    term: "Health Problems",
    definition:
      "Situations where the body is suffering from illness, injury or disease that affect normal functioning.",
    example:
      "An unhealthy lifestyle can lead to many health problems in old age.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Health issues", "Medical conditions", "Health concerns"],
    pronunciation: "/helθ ˈprɑbləmz/",
  },
  {
    term: "Health Risk",
    definition:
      "Any factor that exposes a person to the increased chance of experiencing illness, injury or disease such as poor nutrition or unsafe habits.",
    example:
      "Binge drinking is a significant health risk and can have many long and short-term consequences.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Health hazard", "Medical risk", "Health threat"],
    pronunciation: "/helθ rɪsk/",
  },
  {
    term: "Ill Health",
    definition:
      "Suffering from some form of physical or mental illness or disease that affects wellbeing.",
    example:
      "He had been suffering from ill health for several months before he died.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Poor health", "Sickness", "Medical condition"],
    pronunciation: "/ɪl helθ/",
    icon: "Frown",
  },
  {
    term: "Poor Health",
    definition:
      "The general state of not being in a good condition of health due to various factors.",
    example:
      "The refugees arrived in a state of poor health having had little food or water for many weeks.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Bad health", "Ill health", "Declining health"],
    pronunciation: "/pʊr helθ/",
  },
  {
    term: "Unhealthy",
    definition:
      "Harmful to health or not having good health; describing lifestyle choices or conditions that damage wellbeing.",
    example:
      "Smoking is a really unhealthy habit that increases the risk of serious diseases.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Harmful", "Detrimental", "Damaging"],
    pronunciation: "/ʌnˈhelθi/",
  },
  {
    term: "Health Scare",
    definition:
      "A state of alarm or anxiety caused by concern about the risk of developing or being diagnosed with a particular illness.",
    example:
      "Suffering chest pains while playing in the park with his kids was a real health scare and prompted him to lose weight.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Medical alarm", "Health concern", "Medical worry"],
    pronunciation: "/helθ skɛr/",
  },
  {
    term: "Good Health",
    definition:
      "The general state of being in a good condition of health with proper physical and mental functioning.",
    example:
      "Despite celebrating his 90th birthday, Peter had no medical problems and was in remarkably good health.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Excellent health", "Robust health", "Sound health"],
    pronunciation: "/ɡʊd helθ/",
  },
  {
    term: "Healthy Lifestyle",
    definition:
      "A way of living that contributes to good health and well-being through proper diet, exercise, and habits.",
    example:
      "Regular exercise is an important part of a healthy lifestyle that promotes longevity.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Wellness lifestyle",
      "Health-conscious living",
      "Active lifestyle",
    ],
    pronunciation: "/ˈhelθi ˈlaɪfstaɪl/",
  },
  {
    term: "Healthcare",
    definition:
      "The services provided by governments or organizations for the treatment of illness, injury, disease and to maintain well-being.",
    example:
      "Many governments cannot afford to provide free healthcare for their people.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Medical care", "Health services", "Medical treatment"],
    pronunciation: "/ˈhelθkɛr/",
  },
  {
    term: "Health Education",
    definition:
      "Education that promotes an understanding of how to maintain personal health and prevent disease.",
    example:
      "Basic health education is vital if child mortality in rural African communities is to be reduced.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Health awareness", "Medical education", "Wellness training"],
    pronunciation: "/helθ ˌɛdʒəˈkeɪʃən/",
  },
  {
    term: "Health-conscious",
    definition:
      "Being concerned about how your diet and lifestyle are affecting your health and taking an active interest in maintaining good health.",
    example:
      "After his sister died young of heart disease, Bill became far more health-conscious and made changes to his lifestyle.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Health-aware", "Wellness-focused", "Health-minded"],
    pronunciation: "/helθ ˈkɑnʃəs/",
  },
  {
    term: "Health Benefit",
    definition:
      "The positive effect on a person's health gained from food, activity, medical treatment or therapy.",
    example:
      "Eating fruit and vegetables has many health benefits including disease prevention.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Health advantage", "Wellness benefit", "Medical benefit"],
    pronunciation: "/helθ ˈbɛnəfɪt/",
  },
  {
    term: "Mental Health",
    definition:
      "The state of a person's emotional and psychological well-being, including their ability to handle stress and relate to others.",
    example:
      "Stress or bullying at work can lead to serious mental health problems.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Psychological well-being",
      "Emotional health",
      "Mental wellness",
    ],
    pronunciation: "/ˈmɛntəl helθ/",
  },
  {
    term: "Look After Your Health",
    definition:
      "To eat well, drink alcohol sensibly and take exercise to maintain good physical condition.",
    example:
      "I believe I'm still able to enjoy an active life in my 80's because I have always looked after my health.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Take care of health", "Maintain health", "Preserve health"],
    pronunciation: "/lʊk ˈæftər jʊr helθ/",
  },
  {
    term: "Regain Your Health",
    definition:
      "To recover from illness or injury and return to a state of good health.",
    example:
      "Sunita was very ill with the flu but is gradually regaining her health.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Recover health", "Restore health", "Get better"],
    pronunciation: "/rɪˈɡeɪn jʊr helθ/",
  },
  {
    term: "Regular Exercise",
    definition:
      "To engage in physical activity often and consistently to maintain fitness and health.",
    example:
      "Taking regular exercise helps to keep the body healthy and prevents many diseases.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Consistent exercise", "Routine fitness", "Daily activity"],
    pronunciation: "/ˈrɛɡjələr ˈɛksərˌsaɪz/",
  },
  {
    term: "Vigorous Exercise",
    definition:
      "Intense exercise that causes sweating, heavy breathing and increased heart rate.",
    example:
      "Vigorous exercise helps to keep the heart healthy and improves cardiovascular fitness.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Intense exercise",
      "High-intensity workout",
      "Strenuous activity",
    ],
    pronunciation: "/ˈvɪɡərəs ˈɛksərˌsaɪz/",
  },
  {
    term: "To be Unfit",
    definition:
      "When the body is not in good physical condition, generally due to a lack of regular exercise.",
    example:
      "I gave up going to the gym six months ago and I've become very unfit.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Out of shape", "Physically weak", "Not in condition"],
    pronunciation: "/tu bi ʌnˈfɪt/",
  },
  {
    term: "Prevent",
    definition:
      "To stop something from happening, especially disease or health problems.",
    example:
      "Keeping fit can prevent a wide range of health problems from developing.",
    partOfSpeech: "Verb",
    difficulty: "Intermediate",
    synonyms: ["Avoid", "Stop", "Hinder"],
    pronunciation: "/prɪˈvɛnt/",
  },
  {
    term: "In Good Shape",
    definition: "In good physical condition with proper fitness and health.",
    example:
      "My parents are both in their 70's but are still in pretty good shape.",
    partOfSpeech: "Prepositional phrase",
    difficulty: "Intermediate",
    synonyms: ["Physically fit", "In good condition", "Healthy"],
    pronunciation: "/ɪn ɡʊd ʃeɪp/",
  },
  {
    term: "Stay in Shape",
    definition: "To take action to maintain good health and fitness over time.",
    example:
      "Eating healthily and taking regular exercise helps me to stay in shape.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Keep fit", "Maintain fitness", "Stay healthy"],
    pronunciation: "/steɪ ɪn ʃeɪp/",
  },
  {
    term: "Out of Shape",
    definition:
      "Not in good physical condition due to lack of exercise or poor health habits.",
    example:
      "I got very lazy over the holidays and am really feeling out of shape.",
    partOfSpeech: "Prepositional phrase",
    difficulty: "Intermediate",
    synonyms: ["Unfit", "Not in condition", "Physically weak"],
    pronunciation: "/aʊt ʌv ʃeɪp/",
  },
  {
    term: "Get Back into Shape",
    definition:
      "To take action to improve your physical condition after becoming unfit.",
    example:
      "I've taken up swimming to help me get back into shape after breaking my leg.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Regain fitness", "Get fit again", "Improve condition"],
    pronunciation: "/ɡɛt bæk ˈɪntu ʃeɪp/",
  },
  {
    term: "Work Out",
    definition:
      "To exercise in order to improve physical fitness and increase strength.",
    example:
      "Sally works out at the gym three times a week to help her stay fit and healthy.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Exercise", "Train", "Do fitness"],
    pronunciation: "/wɜrk aʊt/",
  },
  {
    term: "Diet",
    definition:
      "The type of food and drink a person usually eats and drinks, or an eating plan to lose weight.",
    example:
      "In many Asian countries, the staple diet includes lots of rice and vegetables.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Eating habits", "Food intake", "Nutrition plan"],
    pronunciation: "/ˈdaɪət/",
  },
  {
    term: "Balanced Diet",
    definition:
      "A combination of healthy types and amounts of food that provides proper nutrition.",
    example:
      "Eating a balanced diet is important for staying healthy and maintaining energy.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Nutritious diet", "Well-rounded eating", "Healthy nutrition"],
    pronunciation: "/ˈbælənst ˈdaɪət/",
  },
  {
    term: "Dietary Habit",
    definition:
      "Eating similar things regularly as part of one's routine eating pattern.",
    example:
      "Dietary habits are hard to change, especially for people addicted to junk food.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Eating pattern", "Food habits", "Nutritional routine"],
    pronunciation: "/ˈdaɪəˌtɛri ˈhæbət/",
  },
  {
    term: "Dietary Requirement",
    definition:
      "The correct types and amounts of food to maintain health which may vary from person to person.",
    example:
      "In many poor communities, people can't grow or buy enough food to meet their basic dietary requirements.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Nutritional needs", "Food requirements", "Dietary needs"],
    pronunciation: "/ˈdaɪəˌtɛri rɪˈkwaɪərmənt/",
  },
  {
    term: "Comfort Food",
    definition:
      "Types of food that provide a feeling of well-being, typically sweet and high in calories.",
    example:
      "I always feel happier after eating a slice of chocolate; it's such a great comfort food.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Feel-good food", "Emotional eating", "Satisfying food"],
    pronunciation: "/ˈkʌmfərt fud/",
  },
  {
    term: "Portion",
    definition: "The amount of food served to a person at one time.",
    example:
      "When I visited the US I was shocked at the oversized portions served in the restaurants.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Serving size", "Food amount", "Helping"],
    pronunciation: "/ˈpɔrʃən/",
  },
  {
    term: "Additive",
    definition:
      "A substance which is added to food in order to improve its taste or appearance or to preserve it.",
    example:
      "I try to avoid food that is full of additives because I think they are bad for your health.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Food preservative", "Chemical additive", "Food enhancer"],
    pronunciation: "/ˈædətɪv/",
  },
  {
    term: "Nutrients",
    definition:
      "A substance that provides the essential elements needed for living things to survive and to grow.",
    example:
      "Most fast food contains very few nutrients compared to home-cooked meals.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Nutritional elements", "Vitamins", "Essential compounds"],
    pronunciation: "/ˈnutriənts/",
  },
  {
    term: "Binge Drinking",
    definition:
      "Drinking an excessive amount of alcohol in a short period of time or drinking to get drunk.",
    example:
      "There's a worrying increase in binge drinking among young people in many societies today.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Excessive drinking", "Heavy drinking", "Alcohol abuse"],
    pronunciation: "/bɪndʒ ˈdrɪŋkɪŋ/",
  },
  {
    term: "You Are What You Eat",
    definition:
      "A saying that makes a connection between the food someone eats and the state of their health.",
    example:
      "I feel so much better since I cut out junk food and started eating more healthily. You are what you eat!",
    partOfSpeech: "Idiom",
    difficulty: "Intermediate",
    synonyms: [
      "Food affects health",
      "Diet determines wellness",
      "Nutrition impacts body",
    ],
    pronunciation: "/ju ɑr wʌt ju it/",
  },
  {
    term: "Overweight",
    definition:
      "To weigh more than is considered desirable or healthy for one's height and build.",
    example:
      "According to recent statistics, nearly 70% of the population of the UK is overweight.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Heavy", "Above normal weight", "Excess weight"],
    pronunciation: "/ˌoʊvərˈweɪt/",
  },
  {
    term: "Obesity",
    definition:
      "The state of being extremely overweight, typically defined as having a BMI over 30.",
    example:
      "Obesity is now considered to be the most serious health issue facing the developed world.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Extreme overweight", "Morbid obesity", "Severe weight excess"],
    pronunciation: "/oʊˈbisəti/",
  },
  {
    term: "Diabetes",
    definition:
      "A serious medical condition in which the body cannot control the level of sugar in the blood.",
    example:
      "My father used to suffer from diabetes, but after cutting sugar out of his diet, he is no longer diabetic.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Blood sugar disorder",
      "Diabetic condition",
      "Glucose intolerance",
    ],
    pronunciation: "/ˌdaɪəˈbitiz/",
  },
  {
    term: "Overeating",
    definition:
      "Eating more than your body needs, often leading to weight gain and health problems.",
    example:
      "Overeating can lead to many serious health issues such as heart disease, high blood pressure and cancer.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Excessive eating", "Overconsumption", "Food excess"],
    pronunciation: "/ˌoʊvərˈitɪŋ/",
  },
  {
    term: "Allergy",
    definition:
      "A condition where a person becomes ill or develops skin or breathing problems due to eating certain foods or being near certain substances.",
    example:
      "Food allergies seem to be becoming more common and many people have developed an allergic reaction to nuts.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Allergic reaction", "Hypersensitivity", "Immune response"],
    pronunciation: "/ˈælərdʒi/",
  },
  {
    term: "Disease",
    definition:
      "An illness caused by infection or poor health that affects the normal functioning of the body.",
    example:
      "Chickenpox is a very common childhood disease that most children recover from quickly.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Illness", "Sickness", "Medical condition"],
    pronunciation: "/dɪˈziz/",
  },
  {
    term: "Addiction",
    definition:
      "The inability to stop doing or taking something that is harmful to health or wellbeing.",
    example:
      "Drug addiction destroys lives and contributes to soaring crime rates in many communities.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Dependency", "Substance abuse", "Compulsive behavior"],
    pronunciation: "/əˈdɪkʃən/",
  },
  {
    term: "Fall Ill",
    definition: "To become sick or ill suddenly or unexpectedly.",
    example:
      "Chandra fell ill while on holiday but received excellent care in the local hospital.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Become sick", "Get ill", "Take sick"],
    pronunciation: "/fɔl ɪl/",
  },
  {
    term: "Come Down With",
    definition: "To become ill or catch a virus or infection.",
    example:
      "My best friend came down with a heavy cold and didn't feel well enough to come to my birthday party.",
    partOfSpeech: "Phrasal verb",
    difficulty: "Intermediate",
    synonyms: ["Catch", "Develop", "Contract"],
    pronunciation: "/kʌm daʊn wɪð/",
  },
  {
    term: "Get Over",
    definition:
      "To recover from being ill or injured and return to normal health.",
    example:
      "I was off work for three days last week with a chest infection but I'm getting over it now.",
    partOfSpeech: "Phrasal verb",
    difficulty: "Intermediate",
    synonyms: ["Recover from", "Get better", "Overcome"],
    pronunciation: "/ɡɛt ˈoʊvər/",
  },
  {
    term: "Under the Weather",
    definition:
      "To feel unwell or slightly ill, not seriously sick but not at full health.",
    example:
      "I was looking forward to the club's opening night but didn't enjoy it as I was feeling under the weather.",
    partOfSpeech: "Idiom",
    difficulty: "Intermediate",
    synonyms: ["Slightly ill", "Not well", "Feeling poorly"],
    pronunciation: "/ˈʌndər ðə ˈwɛðər/",
  },
  {
    term: "Back on Your Feet",
    definition: "To be healthy again after a period of illness or injury.",
    example:
      "It took my gran a while to get over the effects of her fall but she's back on her feet again now.",
    partOfSpeech: "Idiom",
    difficulty: "Intermediate",
    synonyms: ["Recovered", "Healthy again", "Back to normal"],
    pronunciation: "/bæk ɑn jʊr fit/",
  },
  {
    term: "On the Mend",
    definition:
      "To be recovering after ill health and gradually getting better.",
    example:
      "I suffered from depression after my brother was killed but I'm on the mend now and beginning to enjoy life again.",
    partOfSpeech: "Idiom",
    difficulty: "Advanced",
    synonyms: ["Recovering", "Getting better", "Improving"],
    pronunciation: "/ɑn ðə mɛnd/",
  },
  {
    term: "Make a Speedy Recovery",
    definition: "To recover quickly from ill health or injury.",
    example:
      "The doctors said that because he was so fit and healthy, he made a speedy recovery from the operation.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Recover quickly", "Get better fast", "Heal rapidly"],
    pronunciation: "/meɪk ə ˈspidi rɪˈkʌvəri/",
  },
  {
    term: "Road to Recovery",
    definition:
      "The process of becoming healthy again after serious illness or injury.",
    example:
      "They didn't think she'd survive the bout of pneumonia but she's finally on the road to recovery.",
    partOfSpeech: "Idiom",
    difficulty: "Advanced",
    synonyms: ["Recovery process", "Healing journey", "Getting better"],
    pronunciation: "/roʊd tu rɪˈkʌvəri/",
  },
  {
    term: "Clean Bill of Health",
    definition:
      "A decision by a doctor that a person is healthy and has no medical problems.",
    example:
      "Tony changed his lifestyle after heart problems and has now been given a clean bill of health by his doctor.",
    partOfSpeech: "Idiom",
    difficulty: "Advanced",
    synonyms: ["All clear", "Good health report", "Medical clearance"],
    pronunciation: "/klin bɪl ʌv helθ/",
  },
  {
    term: "Fit as a Fiddle",
    definition: "To be in very good health and physical condition.",
    example:
      "I was fed up with feeling tired and getting colds so I changed my diet and took up running. Now I'm as fit as a fiddle.",
    partOfSpeech: "Idiom",
    difficulty: "Intermediate",
    synonyms: ["Very healthy", "In excellent shape", "Perfectly fit"],
    pronunciation: "/fɪt æz ə ˈfɪdəl/",
  },
  {
    term: "Feel Washed Out",
    definition:
      "To not have much energy after an illness or period of poor health.",
    example:
      "I'm much better than I was but I'm still feeling washed out after the flu.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Feel drained", "Lack energy", "Feel exhausted"],
    pronunciation: "/fil wɑʃt aʊt/",
  },
  {
    term: "GP (General Practitioner)",
    definition:
      "A family doctor who provides general medical care and treats common health problems.",
    example:
      "My GP said that I am in great shape for my age and should continue my current lifestyle.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Family doctor", "Primary care physician", "Local doctor"],
    pronunciation: "/ˌdʒi ˈpi/",
  },
  {
    term: "Make an Appointment",
    definition:
      "To arrange a time to see the doctor or other healthcare professional.",
    example:
      "I've made you an appointment with the doctor for 3:30 pm on Thursday.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Schedule visit", "Book appointment", "Arrange consultation"],
    pronunciation: "/meɪk æn əˈpɔɪntmənt/",
  },
  {
    term: "Check-up",
    definition:
      "A physical examination by a doctor to assess overall health and detect any problems.",
    example:
      "Now that I'm over 50, I get a free annual check-up from my doctor.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Medical examination", "Health screening", "Physical exam"],
    pronunciation: "/ˈtʃɛkʌp/",
  },
  {
    term: "Prescription",
    definition:
      "Written authorization from a medical practitioner for a patient to be issued with a medicine or treatment.",
    example:
      "The doctor gave her a prescription for antibiotics to help clear up her chest infection.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Medical prescription", "Drug order", "Medicine authorization"],
    pronunciation: "/prɪˈskrɪpʃən/",
  },
  {
    term: "Phone in Sick",
    definition:
      "To call your workplace to explain that you won't be attending work due to illness.",
    example:
      "He was so ill after eating the prawn curry that he had to phone in sick the following morning.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Call in sick", "Report illness", "Notify absence"],
    pronunciation: "/foʊn ɪn sɪk/",
  },
  {
    term: "Medical Insurance",
    definition:
      "Insurance coverage for the cost of medical treatment and healthcare services.",
    example:
      "I was reluctant to pay for medical cover but was so glad I had it when I fell ill with malaria after a holiday in the tropics.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Health insurance", "Medical cover", "Healthcare coverage"],
    pronunciation: "/ˈmɛdəkəl ɪnˈʃʊrəns/",
  },
  {
    term: "Immunisation",
    definition:
      "The process of making a person resistant to an infectious disease, typically by the administration of a vaccine.",
    example:
      "Mass immunisation programmes are highly effective in eradicating many common infectious diseases.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Vaccination", "Inoculation", "Disease prevention"],
    pronunciation: "/ˌɪmjənəˈzeɪʃən/",
  },
  {
    term: "Vaccine",
    definition:
      "A preparation of organisms administered to stimulate the body's own immune system to protect against infection or disease.",
    example:
      "Modern flu vaccines are so effective that thousands of lives are saved every year in the UK.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Immunization shot",
      "Protective injection",
      "Disease prevention",
    ],
    pronunciation: "/vækˈsin/",
  },
  {
    term: "Surgery",
    definition:
      "The process of cutting open the body and removing or repairing damaged parts through medical procedures.",
    example:
      "Sanchez had to undergo emergency surgery after suffering a heart attack.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Medical operation",
      "Surgical procedure",
      "Medical intervention",
    ],
    pronunciation: "/ˈsɜrdʒəri/",
  },
  {
    term: "Operation",
    definition:
      "The act of surgery performed on a patient to treat medical conditions or injuries.",
    example:
      "My ankle fracture was so bad that I had to have an operation to repair it.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Surgery", "Surgical procedure", "Medical procedure"],
    pronunciation: "/ˌɑpəˈreɪʃən/",
  },
  {
    term: "Cure",
    definition:
      "To eradicate a disease or medical condition completely, or a treatment that eliminates illness.",
    example:
      "Millions of children in the developing world die of common illnesses for which there are simple cures.",
    partOfSpeech: "Verb/Noun",
    difficulty: "Intermediate",
    synonyms: ["Heal", "Treatment", "Remedy"],
    pronunciation: "/kjʊr/",
  },
  {
    term: "Symptom",
    definition:
      "A physical or mental change to the body that is caused by illness and indicates disease.",
    example:
      "Yang Li had many of the typical symptoms of flu including aching muscles and a high fever.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Sign", "Indication", "Manifestation"],
    pronunciation: "/ˈsɪmptəm/",
  },
  {
    term: "Catch a Cold",
    definition: "To get a cold virus that causes common respiratory symptoms.",
    example:
      "There were lots of people coughing and sneezing on the tube so it's hardly surprising that I've caught a cold.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Get a cold", "Come down with cold", "Contract cold"],
    pronunciation: "/kætʃ ə koʊld/",
  },
  {
    term: "Chesty Cough",
    definition:
      "A cough caused by mucus in the lungs that produces phlegm when coughing.",
    example:
      "Whenever I get a cold it nearly always develops into a chesty cough.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Productive cough", "Mucus cough", "Wet cough"],
    pronunciation: "/ˈtʃɛsti kɔf/",
  },
  {
    term: "Runny Nose",
    definition:
      "A nose that has mucus coming out of it, typically due to cold or allergies.",
    example:
      "I hope that my runny nose is due to the cold weather and not a sign that I'm coming down with a cold.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Nasal discharge", "Drippy nose", "Flowing nose"],
    pronunciation: "/ˈrʌni noʊz/",
  },
  {
    term: "Blocked Nose",
    definition:
      "When the nose has excess fluid due to a cold, making breathing through the nose difficult.",
    example:
      "A blocked nose is one of the worse symptoms of a cold as it can make it difficult to breathe.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Stuffy nose", "Congested nose", "Nasal congestion"],
    pronunciation: "/blɑkt noʊz/",
  },
  {
    term: "Sore Throat",
    definition:
      "When the throat is inflamed causing pain when swallowing or speaking.",
    example:
      "I find that a drink of honey and lemon helps to soothe a sore throat.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Throat pain", "Inflamed throat", "Scratchy throat"],
    pronunciation: "/sɔr θroʊt/",
  },
  {
    term: "High Temperature",
    definition:
      "When body temperature is higher than the normal range, often a symptom of illness or infection.",
    example:
      "When I was young, my mother only believed I was ill if I had a high temperature.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Fever", "High fever", "Elevated temperature"],
    pronunciation: "/haɪ ˈtɛmpərətʃər/",
  },
  {
    term: "To be Sick",
    definition:
      "When the contents of the stomach are expelled through the mouth due to illness or nausea.",
    example:
      "Camilla's two-year-old son ate six pieces of cake and was then sick all over the kitchen floor.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Vomit", "Throw up", "Be ill"],
    pronunciation: "/tu bi sɪk/",
  },
  {
    term: "Diarrhoea",
    definition:
      "A condition where the body's solid waste matter becomes more liquid than normal and is discharged more frequently.",
    example:
      "Diarrhoea is considered minor in developed countries but kills 1.5 million children yearly in developing nations.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Loose bowels", "Stomach upset", "Digestive disorder"],
    pronunciation: "/ˌdaɪəˈriə/",
  },
  {
    term: "Splitting Headache",
    definition: "A continuous severe pain in the head that feels very intense.",
    example:
      "After a day of intense meetings with the boss, Brigit went home with a splitting headache.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Severe headache", "Intense headache", "Pounding headache"],
    pronunciation: "/ˈsplɪtɪŋ ˈhɛdˌeɪk/",
  },
  {
    term: "Pull a Muscle",
    definition:
      "To overstretch or tear a muscle causing pain and reduced mobility.",
    example:
      "Anatoly was favourite to win the 100 metres but fell after pulling a muscle before the finish line.",
    partOfSpeech: "Verb phrase",
    difficulty: "Intermediate",
    synonyms: ["Strain muscle", "Injure muscle", "Tear muscle"],
    pronunciation: "/pʊl ə ˈmʌsəl/",
  },
  {
    term: "Cuts and Bruises",
    definition:
      "Minor injuries where cuts involve torn skin and bruises are areas of discolored skin from impact.",
    example:
      "Lucy got knocked off her bike cycling to work and was lucky to get away with just cuts and bruises.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Minor injuries", "Scrapes and bumps", "Small wounds"],
    pronunciation: "/kʌts ænd ˈbruzəz/",
  },
  {
    term: "Preventive Medicine",
    definition:
      "Healthcare practices focused on preventing diseases and health problems before they occur, rather than treating them after diagnosis.",
    example:
      "Preventive medicine helps reduce the burden on healthcare systems by stopping diseases before they develop.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Preventive healthcare",
      "Health prevention",
      "Proactive medicine",
    ],
    pronunciation: "/prɪˈvɛntɪv ˈmɛdəsən/",
  },
  {
    term: "Sedentary Lifestyle",
    definition:
      "A way of living that involves little or no physical activity, typically characterized by prolonged sitting and minimal exercise.",
    example:
      "A sedentary lifestyle can cause obesity and related health problems, especially in office workers.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Inactive lifestyle",
      "Low-activity living",
      "Desk-bound lifestyle",
    ],
    pronunciation: "/ˈsɛdənˌtɛri ˈlaɪfˌstaɪl/",
  },
  {
    term: "Nutrition",
    definition:
      "The process of providing or obtaining food necessary for health and growth, including the study of nutrients in food.",
    example:
      "Good nutrition is vital for the development of children and maintaining health throughout life.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Dietary health", "Nutritional science", "Food nutrition"],
    pronunciation: "/nuˈtrɪʃən/",
  },
  {
    term: "Stress Management",
    definition:
      "Techniques and strategies used to cope with and reduce stress levels, including both prevention and treatment approaches.",
    example:
      "Stress management programs at work improve employee productivity and overall workplace satisfaction.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Stress reduction", "Stress coping", "Stress control"],
    pronunciation: "/strɛs ˈmænɪdʒmənt/",
  },
];

const relatedTopics = [
  {
    id: "society-culture",
    title: "Society & Culture",
    description:
      "Explore how health issues affect society and cultural attitudes",
    icon: "🏛️",
  },
  {
    id: "global-issues",
    title: "Global Issues",
    description: "Learn about international health challenges and solutions",
    icon: "🌍",
  },
];

const studyTips = [
  {
    tip: "Personal Examples",
    description:
      "Share your own health habits and lifestyle choices to make answers more personal and authentic.",
    icon: CheckCircle,
  },
  {
    tip: "Compare Countries",
    description:
      "Discuss differences in healthcare systems and lifestyle habits between countries.",
    icon: Lightbulb,
  },
  {
    tip: "Current Issues",
    description:
      "Reference modern health challenges like stress, technology addiction, or pandemic effects.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "How do you stay healthy?",
    tips: "Use 'stress management', 'nutrition', 'preventive medicine' when describing your health routine.",
  },
  {
    question: "What health problems do people in your country face?",
    tips: "Discuss 'sedentary lifestyle', 'mental health', and 'healthcare access' issues.",
  },
  {
    question: "How has healthcare changed in recent years?",
    tips: "Reference improvements in 'preventive medicine', 'mental health' awareness, and technology.",
  },
  {
    question: "Do you think people are healthier now than in the past?",
    tips: "Compare modern 'nutrition' knowledge with increased 'sedentary lifestyle' problems.",
  },
];

export default function HealthLifestyleVocabularyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="outline" asChild>
            <Link
              href="/speaking/vocabulary"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Vocabulary
            </Link>
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-pink-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl font-bold mb-4">
              Health & Lifestyle Vocabulary
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Advanced health and lifestyle vocabulary for IELTS Speaking Band
              7-9. Master terms related to healthcare, mental health, preventive
              medicine, and wellness.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                6 Health Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Medical Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Wellness Focus
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Progress and Stats */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Health & Lifestyle Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>6 terms</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-red-600 h-2 rounded-full"
              style={{ width: "33.33%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 4 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search health terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>

        {/* Vocabulary Terms */}
        <section className="mb-12">
          <div className="space-y-6">
            {vocabularyTerms.map((vocab, index) => {
              const IconComponent = vocab.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="space-y-4">
                    {/* Term Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <BotIcon className="w-6 h-6 text-red-600" />
                          <h3 className="text-2xl font-bold text-gray-900">
                            {vocab.term}
                          </h3>
                          <Badge variant="primary" size="sm">
                            {vocab.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Volume2 className="w-4 h-4" />
                            {vocab.pronunciation}
                          </span>
                          <span>• {vocab.partOfSpeech}</span>
                        </div>
                      </div>
                    </div>

                    {/* Definition */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Definition:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {vocab.definition}
                      </p>
                    </div>

                    {/* Example */}
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      <h4 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-red-800 italic">"{vocab.example}"</p>
                    </div>

                    {/* Synonyms */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Related Terms:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {vocab.synonyms.map((synonym, synIndex) => (
                          <Badge key={synIndex} variant="secondary" size="sm">
                            {synonym}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Common IELTS Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Common IELTS Health Questions
          </h2>
          <div className="space-y-4">
            {commonQuestions.map((q, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  "{q.question}"
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Vocabulary Strategy:</strong> {q.tips}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Using Health Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{tip.tip}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Related Topics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Related Vocabulary Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedTopics.map((topic, index) => (
              <Card key={index} hover className="p-6">
                <Link href={`/speaking/vocabulary/${topic.id}`}>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{topic.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section>
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/speaking/vocabulary/education">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Education
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/society-culture">
                Next: Society & Culture
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-red-600 to-pink-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Practice Health Topics</h2>
          <p className="text-red-100 mb-6">
            Health and lifestyle topics are common in IELTS Speaking. Practice
            discussing wellness habits, healthcare systems, and health
            challenges using these terms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/speaking/part-1">Practice Part 1 Questions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-green hover:bg-white/10"
              asChild
            >
              <Link href="/speaking/vocabulary/society-culture">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
