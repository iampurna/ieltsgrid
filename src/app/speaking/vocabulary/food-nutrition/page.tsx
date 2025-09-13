import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Coffee,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Apple,
  Utensils,
  Sprout,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Food & Nutrition Vocabulary for IELTS Speaking | Dietary & Culinary Terms",
  description:
    "Master food and nutrition vocabulary for IELTS Speaking. Learn advanced terms like nutritional value, food security, organic farming with examples for Band 7-9.",
  keywords: [
    "IELTS food vocabulary",
    "nutritional value IELTS",
    "food security vocabulary",
    "organic farming IELTS",
    "culinary traditions vocabulary",
    "Band 7-9 food terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Balanced diet",
    definition: "Eating a healthy mix of all food groups.",
    example:
      "A balanced diet helps people maintain good health and energy levels.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Healthy eating", "Nutritious diet"],
    pronunciation: "/ˈbælənst ˈdaɪət/",
  },
  {
    term: "Calorie intake",
    definition: "The number of calories you consume daily.",
    example:
      "Monitoring your calorie intake is essential for weight management.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Calorie consumption", "Energy intake"],
    pronunciation: "/ˈkæləri ˈɪnteɪk/",
  },
  {
    term: "Portion control",
    definition: "Managing the size of servings you eat.",
    example: "Practicing portion control prevents overeating.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Serving size management"],
    pronunciation: "/ˈpɔːrʃən kənˈtroʊl/",
  },
  {
    term: "Intermittent fasting",
    definition: "Eating only during certain hours of the day.",
    example: "Intermittent fasting has become popular for weight loss.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Time-restricted eating"],
    pronunciation: "/ˌɪntərˈmɪtənt ˈfæstɪŋ/",
  },
  {
    term: "Late-night snacking",
    definition: "Eating food late in the evening or before bed.",
    example: "Late-night snacking often leads to weight gain.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Midnight eating"],
    pronunciation: "/ˈleɪt naɪt ˈsnækɪŋ/",
  },
  {
    term: "Snack on",
    definition: "Eat small amounts between meals.",
    example: "I usually snack on nuts during work breaks.",
    partOfSpeech: "Verb phrase",
    difficulty: "Basic",
    synonyms: ["Nibble", "Munch"],
    pronunciation: "/snæk ɒn/",
  },
  {
    term: "Cravings",
    definition: "A strong desire for specific food.",
    example: "Pregnant women often have unusual cravings.",
    partOfSpeech: "Noun",
    difficulty: "Basic",
    synonyms: ["Desire", "Appetite"],
    pronunciation: "/ˈkreɪvɪŋz/",
  },
  {
    term: "Guilty pleasure",
    definition: "Something you enjoy but know is unhealthy.",
    example: "Chocolate cake is my guilty pleasure.",
    partOfSpeech: "Noun phrase",
    difficulty: "Basic",
    synonyms: ["Indulgence"],
    pronunciation: "/ˈɡɪlti ˈplɛʒər/",
  },
  {
    term: "Cheat meal",
    definition: "An indulgent meal as part of a diet plan.",
    example: "I allow myself one cheat meal per week.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Indulgent meal"],
    pronunciation: "/ʧiːt miːl/",
  },
  {
    term: "Watch what you eat",
    definition: "Be careful about your diet.",
    example: "Doctors always advise to watch what you eat.",
    partOfSpeech: "Verb phrase",
    difficulty: "Basic",
    synonyms: ["Monitor diet"],
    pronunciation: "/wɒʧ wɒt juː iːt/",
  },
  {
    term: "Everything in moderation",
    definition: "All foods are okay if not excessive.",
    example: "My nutritionist says everything in moderation is the key.",
    partOfSpeech: "Phrase",
    difficulty: "Basic",
    synonyms: ["Balanced approach"],
    pronunciation: "/ˈɛvriθɪŋ ɪn ˌmɑdəˈreɪʃən/",
  },
  {
    term: "Mindful eating",
    definition: "Eating slowly and being aware of food.",
    example: "Mindful eating helps with digestion and prevents overeating.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Conscious eating"],
    pronunciation: "/ˈmaɪndfəl ˈiːtɪŋ/",
  },
  {
    term: "Emotional eating",
    definition: "Eating to deal with stress or feelings.",
    example: "Emotional eating can lead to unhealthy weight gain.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Comfort eating"],
    pronunciation: "/ɪˈmoʊʃənl ˈiːtɪŋ/",
  },
  {
    term: "Food diary",
    definition: "A record of what you eat each day.",
    example: "Keeping a food diary helps track your eating habits.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Meal log"],
    pronunciation: "/fuːd ˈdaɪəri/",
  },
  {
    term: "Picky eater",
    definition: "Someone who dislikes many foods.",
    example: "My little brother is a picky eater.",
    partOfSpeech: "Noun phrase",
    difficulty: "Basic",
    synonyms: ["Fussy eater"],
    pronunciation: "/ˈpɪki ˈiːtər/",
  },
  {
    term: "Adventurous eater",
    definition: "Someone who likes trying new foods.",
    example: "I’m an adventurous eater who loves new cuisines.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Experimental eater"],
    pronunciation: "/ædˈvɛntʃərəs ˈiːtər/",
  },
  {
    term: "Foodie",
    definition: "A person very interested in food and cooking.",
    example: "She’s a foodie who always blogs about restaurants.",
    partOfSpeech: "Noun",
    difficulty: "Basic",
    synonyms: ["Gourmet", "Food enthusiast"],
    pronunciation: "/ˈfuːdi/",
  },
  {
    term: "Savoury tooth",
    definition: "Someone who prefers salty/spicy food.",
    example: "He has a savoury tooth and loves chips.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Preference for salty food"],
    pronunciation: "/ˈseɪvəri tuːθ/",
  },
  {
    term: "Health-conscious",
    definition: "Careful about eating healthy food.",
    example: "She’s very health-conscious and avoids fried food.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Health-aware"],
    pronunciation: "/hɛlθ ˈkɒnʃəs/",
  },
  {
    term: "Junk-food addict",
    definition: "Someone who eats too much unhealthy food.",
    example: "Being a junk-food addict can cause obesity.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Fast-food lover"],
    pronunciation: "/ʤʌŋk fuːd ˈædɪkt/",
  },
  {
    term: "Big eater",
    definition: "Someone with a large appetite.",
    example: "My dad is a big eater.",
    partOfSpeech: "Noun phrase",
    difficulty: "Basic",
    synonyms: ["Hearty eater"],
    pronunciation: "/bɪɡ ˈiːtər/",
  },
  {
    term: "Light eater",
    definition: "Someone who eats small portions.",
    example: "She’s a light eater who prefers salads.",
    partOfSpeech: "Noun phrase",
    difficulty: "Basic",
    synonyms: ["Small eater"],
    pronunciation: "/laɪt ˈiːtər/",
  },
  {
    term: "Whole foods",
    definition: "Natural, unprocessed foods.",
    example: "Whole foods like fruits and vegetables are very healthy.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Unprocessed food"],
    pronunciation: "/hoʊl fuːdz/",
  },
  {
    term: "Processed food",
    definition: "Packaged food with additives.",
    example: "Processed food is usually high in salt.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Packaged food"],
    pronunciation: "/ˈprɑːsɛst fuːd/",
  },
  {
    term: "Food intolerance",
    definition: "Difficulty digesting certain foods.",
    example: "He has a lactose intolerance.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Digestive sensitivity"],
    pronunciation: "/fuːd ɪnˈtɒlərəns/",
  },
  {
    term: "Vegan diet",
    definition: "No animal products.",
    example: "A vegan diet excludes meat, eggs, and dairy.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Plant-based diet"],
    pronunciation: "/ˈviːɡən ˈdaɪət/",
  },
  {
    term: "Vegetarian diet",
    definition: "No meat, may include dairy/eggs.",
    example: "A vegetarian diet is common in India.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Meat-free diet"],
    pronunciation: "/ˌvɛʤəˈtɛriən ˈdaɪət/",
  },
  {
    term: "Gluten-free diet",
    definition: "Excludes wheat/gluten.",
    example: "Celiac patients must follow a gluten-free diet.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Gluten-free eating"],
    pronunciation: "/ˈɡluːtən friː ˈdaɪət/",
  },
  {
    term: "Dairy-free diet",
    definition: "Excludes milk products.",
    example: "He follows a dairy-free diet due to allergies.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Milk-free diet"],
    pronunciation: "/ˈdɛəri friː ˈdaɪət/",
  },
  {
    term: "High in fat/sugar/salt",
    definition: "Food with large amounts of these.",
    example: "Processed snacks are high in sugar.",
    partOfSpeech: "Adjective phrase",
    difficulty: "Basic",
    synonyms: ["Rich in sugar"],
    pronunciation: "/haɪ ɪn/",
  },
  {
    term: "Empty calories",
    definition: "Food with energy but no nutrition.",
    example: "Soft drinks are full of empty calories.",
    partOfSpeech: "Noun phrase",
    difficulty: "Basic",
    synonyms: ["Non-nutritious food"],
    pronunciation: "/ˈɛmpti ˈkæləriz/",
  },
  {
    term: "Nutrient-dense food",
    definition: "Food with many nutrients.",
    example: "Spinach is a nutrient-dense food.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Nutritious food"],
    pronunciation: "/ˈnjuːtriənt dɛns fuːd/",
  },
  {
    term: "Sugar-laden",
    definition: "Food with lots of sugar.",
    example: "Sugar-laden drinks cause diabetes.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Sweetened"],
    pronunciation: "/ˈʃʊɡər ˈleɪdən/",
  },
  {
    term: "Calorie-dense",
    definition: "Small portion, high calories.",
    example: "Nuts are calorie-dense but healthy.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Energy-dense"],
    pronunciation: "/ˈkæləri dɛns/",
  },
  {
    term: "Obesity",
    definition: "Medical condition of being overweight.",
    example: "Childhood obesity is a growing concern.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Excess weight"],
    pronunciation: "/oʊˈbiːsəti/",
  },
  {
    term: "Malnutrition",
    definition: "Poor health from lack of nutrition.",
    example: "War zones often face malnutrition.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Undernutrition"],
    pronunciation: "/ˌmælnjuˈtrɪʃən/",
  },
  {
    term: "Hydration",
    definition: "Maintaining enough water.",
    example: "Hydration is crucial for athletes.",
    partOfSpeech: "Noun",
    difficulty: "Basic",
    synonyms: ["Water balance"],
    pronunciation: "/haɪˈdreɪʃən/",
  },
  {
    term: "Mouth-watering",
    definition: "Looks/smells delicious.",
    example: "The cake looks mouth-watering.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["Appetizing"],
    pronunciation: "/ˈmaʊθ ˈwɔtərɪŋ/",
  },
  {
    term: "Rich",
    definition: "Heavy and full of flavour.",
    example: "The sauce was too rich for me.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["Heavy", "Strong"],
    pronunciation: "/rɪʧ/",
  },
  {
    term: "Light",
    definition: "Easy to digest, not heavy.",
    example: "I prefer a light lunch.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["Digestible"],
    pronunciation: "/laɪt/",
  },
  {
    term: "Hearty",
    definition: "Filling and satisfying.",
    example: "We had a hearty breakfast.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["Substantial"],
    pronunciation: "/ˈhɑːrti/",
  },
  {
    term: "Wholesome",
    definition: "Healthy and good for the body.",
    example: "It was a wholesome meal.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Nutritious"],
    pronunciation: "/ˈhoʊlsəm/",
  },
  {
    term: "Nutritious meal",
    definition: "Food full of nutrients.",
    example: "Breakfast should be a nutritious meal.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Healthy meal"],
    pronunciation: "/njuˈtrɪʃəs miːl/",
  },
  {
    term: "Fattening",
    definition: "Food causing weight gain.",
    example: "Pizza is very fattening.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["High-calorie"],
    pronunciation: "/ˈfætnɪŋ/",
  },
  {
    term: "Sugar-free",
    definition: "Without added sugar.",
    example: "I drink sugar-free soda.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["No-sugar"],
    pronunciation: "/ˈʃʊɡər friː/",
  },
  {
    term: "Greasy",
    definition: "Containing too much oil.",
    example: "Greasy food upsets my stomach.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["Oily"],
    pronunciation: "/ˈɡriːsi/",
  },
  {
    term: "Crispy",
    definition: "Firm and crunchy.",
    example: "I love crispy fries.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["Crunchy"],
    pronunciation: "/ˈkrɪspi/",
  },
  {
    term: "Juicy",
    definition: "Containing natural liquid.",
    example: "These oranges are juicy.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["Succulent"],
    pronunciation: "/ˈʤuːsi/",
  },
  {
    term: "Tender",
    definition: "Soft and easy to eat.",
    example: "The meat is very tender.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["Soft"],
    pronunciation: "/ˈtɛndər/",
  },
  {
    term: "Crunchy",
    definition: "Hard and makes noise when chewed.",
    example: "I like crunchy apples.",
    partOfSpeech: "Adjective",
    difficulty: "Basic",
    synonyms: ["Crispy"],
    pronunciation: "/ˈkrʌntʃi/",
  },
  {
    term: "Bland taste",
    definition: "Food without strong flavour.",
    example: "The soup had a bland taste.",
    partOfSpeech: "Noun phrase",
    difficulty: "Basic",
    synonyms: ["flavorless"],
    pronunciation: "/blænd teɪst/",
  },
  {
    term: "Nutritional Value",
    definition:
      "The amount of nutrients that food provides to the body, including vitamins, minerals, proteins, and essential compounds necessary for health and development.",
    example:
      "Understanding nutritional value helps people make informed dietary choices for better health outcomes and disease prevention.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Nutrient content", "Food value", "Dietary worth"],
    pronunciation: "/nuˈtrɪʃənəl ˈvælju/",
    icon: Apple,
  },
  {
    term: "Food Security",
    definition:
      "The availability of sufficient, safe, and nutritious food to meet dietary needs and food preferences, which is essential for human development and health.",
    example:
      "Food security is essential for human development and remains a major challenge in many developing countries worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Food availability", "Nutritional security", "Food access"],
    pronunciation: "/fud sɪˈkjʊrəti/",
    icon: Utensils,
  },
  {
    term: "Organic Farming",
    definition:
      "Agricultural practices that avoid synthetic pesticides and fertilizers, focusing on natural methods to maintain soil health and environmental sustainability.",
    example:
      "Organic farming practices help maintain soil health and reduce environmental impact from conventional agriculture methods.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Natural agriculture",
      "Sustainable farming",
      "Ecological farming",
    ],
    pronunciation: "/ɔrˈgænɪk ˈfɑrmɪŋ/",
    icon: Sprout,
  },
  {
    term: "Culinary Tradition",
    definition:
      "Traditional cooking methods, recipes, and food customs passed down through generations within a culture or region, representing cultural heritage.",
    example:
      "Preserving culinary traditions helps maintain cultural identity while adapting to modern dietary requirements and lifestyle changes.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Food culture", "Gastronomic heritage", "Traditional cuisine"],
    pronunciation: "/ˈkjulɪˌneri trəˈdɪʃən/",
    icon: Coffee,
  },
  {
    term: "Processed Food",
    definition:
      "Food that has been altered from its natural state through various manufacturing processes, often containing additives, preservatives, or artificial ingredients.",
    example:
      "Reducing processed food consumption and eating more whole foods can significantly improve overall health and nutrition.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Manufactured food", "Packaged food", "Industrial food"],
    pronunciation: "/ˈproʊsest fud/",
    icon: Coffee,
  },
  {
    term: "Dietary Habits",
    definition:
      "Regular patterns of food consumption and eating behaviors that individuals develop over time, influenced by culture, lifestyle, and personal preferences.",
    example:
      "Healthy dietary habits established in childhood often continue into adulthood and contribute to long-term wellness.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Eating patterns", "Food behaviors", "Nutritional practices"],
    pronunciation: "/ˈdaɪəˌteri ˈhæbəts/",
    icon: Apple,
  },
  {
    term: "Food Waste",
    definition:
      "The disposal of food that is fit for consumption, representing a significant environmental and economic problem in developed countries.",
    example:
      "Reducing food waste is crucial for environmental sustainability and could help address food security issues globally.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Food disposal", "Wasted food", "Food loss"],
    pronunciation: "/fud weɪst/",
    icon: Utensils,
  },
];

const relatedTopics = [
  {
    id: "health-lifestyle",
    title: "Health & Lifestyle",
    description: "Explore connections between nutrition and personal wellness",
    icon: "❤️",
  },
  {
    id: "environment",
    title: "Environment",
    description: "Learn about sustainable agriculture and food production",
    icon: "🌱",
  },
];

const studyTips = [
  {
    tip: "Cultural Food Examples",
    description:
      "Mention traditional dishes and food customs from your culture. This shows personal connection and cultural awareness.",
  },
  {
    tip: "Health Connections",
    description:
      "Link food vocabulary to health and lifestyle topics like balanced diet, mindful eating, and obesity prevention.",
  },
  {
    tip: "Global Perspective",
    description:
      "Discuss food globalization, dietary trends (vegan, gluten-free), and international cuisines to sound analytical.",
  },
  {
    tip: "Personal Experience",
    description:
      "Share your eating habits, food diary practices, or stories about eating out, which makes answers authentic.",
  },
  {
    tip: "Idioms & Expressions",
    description:
      "Use food-related idioms like 'eat like a horse', 'sweet tooth', or 'not my cup of tea' to impress the examiner.",
  },
];

const commonQuestions = [
  {
    question: "Do you prefer eating at home or eating out?",
    tips: "Use terms like 'portion control', 'whole foods', 'cuisine', and 'eating out'.",
  },
  {
    question: "How often do you eat fast food?",
    tips: "Mention 'junk-food addict', 'processed food', 'cheat meal', and 'guilty pleasure'.",
  },
  {
    question: "Do you usually eat a lot of food?",
    tips: "Use phrases like 'big eater', 'light eater', 'mindful eating', and 'everything in moderation'.",
  },
  {
    question: "Do you think your diet is healthy?",
    tips: "Discuss 'balanced diet', 'calorie intake', 'food diary', and 'nutritional value'.",
  },
  {
    question: "Do you usually have breakfast?",
    tips: "Use 'light meal', 'nutritious meal', 'snack on', or 'whole foods'.",
  },
  {
    question: "Do you like trying new kinds of food?",
    tips: "Mention 'adventurous eater', 'cuisine', 'fine dining', and 'treat myself'.",
  },
  {
    question: "What are the eating habits in your country?",
    tips: "Use 'cultural traditions', 'portion size', 'home-cooked meals', or 'street food'.",
  },
  {
    question: "Is it important to have a healthy diet?",
    tips: "Mention 'nutrient-dense food', 'obesity', 'malnutrition', and 'health-conscious'.",
  },
  {
    question: "Do you think people eat differently now than in the past?",
    tips: "Discuss 'processed food', 'ready meals', 'takeaway food', and 'traditional cuisine'.",
  },
  {
    question: "Do you enjoy cooking?",
    tips: "Use 'to whip up a meal', 'cook up a storm', 'season food', and 'go-to dish'.",
  },
];

export default function FoodNutritionVocabularyPage() {
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
      <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Food & Nutrition Vocabulary
            </h1>
            <p className="text-xl text-amber-100 mb-6">
              Advanced food and diet vocabulary for IELTS Speaking Band 7-9.
              Master terms related to eating habits, diet plans, food idioms,
              and nutrition science.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                70+ Food Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Healthy Eating
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Diet & Lifestyle
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
              Food & Nutrition Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>70+ terms</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>10+ min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-amber-600 h-2 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Final Topic</p>
        </div>

        {/* Vocabulary Terms */}
        <section className="mb-12">
          <div className="space-y-6">
            {vocabularyTerms.map((vocab, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-semibold">
                          {vocab.term?.charAt(0) ?? ""}
                        </div>
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

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Definition:
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {vocab.definition}
                    </p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                    <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Example in IELTS Speaking:
                    </h4>
                    <p className="text-amber-800 italic">"{vocab.example}"</p>
                  </div>

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
            ))}
          </div>
        </section>

        {/* Common IELTS Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Common IELTS Food & Diet Questions
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
            Using Food Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 mx-auto mb-4 flex items-center justify-center font-semibold">
                  {tip.tip?.charAt(0) ?? ""}
                </div>
                <h3 className="text-lg font-semibold mb-3">{tip.tip}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </Card>
            ))}
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
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xl">
                      {topic.title?.charAt(0) ?? ""}
                    </div>
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
              <Link href="/speaking/vocabulary/travel-holidays">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Travel & Holidays
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary">
                Back to All Topics
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-amber-600 to-orange-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Practice Food & Diet Topics
          </h2>
          <p className="text-amber-100 mb-6">
            Food and diet are popular IELTS Speaking topics. Practice discussing
            healthy eating, restaurant culture, and dietary choices using these
            advanced terms.
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
              <Link href="/speaking/vocabulary">All Topics</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
