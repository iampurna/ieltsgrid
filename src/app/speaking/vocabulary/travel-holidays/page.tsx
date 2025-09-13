import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Plane,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Globe,
  Camera,
  MapPin,
  Backpack,
  BotIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Travel & Holidays Vocabulary for IELTS Speaking | Tourism & Adventure Terms",
  description:
    "Master travel and holidays vocabulary for IELTS Speaking. Learn advanced terms like cultural tourism, sustainable travel, digital nomad with examples for Band 7-9.",
  keywords: [
    "IELTS travel vocabulary",
    "cultural tourism IELTS",
    "sustainable travel vocabulary",
    "digital nomad IELTS",
    "ecotourism vocabulary",
    "Band 7-9 travel terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Cultural Tourism",
    definition:
      "Travel focused on experiencing the culture, heritage, arts, and lifestyle of different regions, promoting cultural exchange and understanding between different societies.",
    example:
      "Cultural tourism promotes understanding between different societies and helps preserve traditional heritage in local communities.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Heritage tourism", "Cultural travel", "Educational tourism"],
    pronunciation: "/ˈkʌltʃərəl ˈtʊrˌɪzəm/",
  },
  {
    term: "Sustainable Travel",
    definition:
      "Tourism practices that minimize negative environmental and social impacts while providing economic benefits to local communities and preserving natural resources.",
    example:
      "Sustainable travel helps protect natural environments while supporting local economies and promoting responsible tourism practices.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Eco-tourism", "Responsible tourism", "Green travel"],
    pronunciation: "/səˈsteɪnəbəl ˈtrævəl/",
  },
  {
    term: "Digital Nomad",
    definition:
      "A person who uses technology to work remotely while traveling and living in different locations around the world, combining work with travel lifestyle.",
    example:
      "The digital nomad lifestyle has become popular among young professionals seeking work-life balance and cultural experiences.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Remote worker", "Location-independent worker", "Telecommuter"],
    pronunciation: "/ˈdɪdʒətəl ˈnoʊmæd/",
  },
  {
    term: "Mass Tourism",
    definition:
      "Large-scale tourism involving many visitors to popular destinations, often resulting in overcrowding and negative environmental or cultural impacts.",
    example:
      "Mass tourism can damage fragile ecosystems and overwhelm local infrastructure in popular vacation destinations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Package tourism", "Mainstream tourism", "Commercial tourism"],
    pronunciation: "/mæs ˈtʊrˌɪzəm/",
  },
  {
    term: "Adventure Tourism",
    definition:
      "Travel that involves exploration or travel with a certain degree of risk and physical exertion, often in remote or exotic destinations.",
    example:
      "Adventure tourism appeals to travelers seeking unique experiences and challenges in natural environments worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Extreme tourism", "Active tourism", "Thrill-seeking travel"],
    pronunciation: "/ədˈventʃər ˈtʊrˌɪzəm/",
  },
  {
    term: "Off-the-beaten-path",
    definition:
      "Destinations or experiences that are not commonly visited by tourists, offering authentic and unique travel experiences away from crowded areas.",
    example:
      "Many experienced travelers prefer off-the-beaten-path destinations to avoid crowds and discover authentic local cultures.",
    partOfSpeech: "Adjective phrase",
    difficulty: "Advanced",
    synonyms: ["Remote destinations", "Hidden gems", "Undiscovered places"],
    pronunciation: "/ɔf ðə ˈbitən pæθ/",
  },
  {
    term: "Tourism Infrastructure",
    definition:
      "The basic physical and organizational structures needed for tourism operations, including hotels, transportation, and recreational facilities.",
    example:
      "Developing countries often need to improve their tourism infrastructure to attract international visitors and boost their economies.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Tourist facilities",
      "Travel services",
      "Hospitality infrastructure",
    ],
    pronunciation: "/ˈtʊrˌɪzəm ˈɪnfrəˌstrʌktʃər/",
  },
  {
    term: "Travel Restrictions",
    definition:
      "Government-imposed limitations on travel between countries or regions, often for health, security, or political reasons affecting international tourism.",
    example:
      "Travel restrictions during the pandemic significantly impacted the global tourism industry and changed people's vacation plans.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Travel bans", "Movement limitations", "Border controls"],
    pronunciation: "/ˈtrævəl rɪˈstrɪkʃənz/",
  },
  {
    term: "Wanderlust",
    definition:
      "A strong desire or urge to travel and explore the world, often characterized by restlessness when staying in one place for too long.",
    example:
      "My wanderlust has taken me to over 30 countries, and I'm always planning my next adventure.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Travel bug", "Itchy feet", "Desire to roam"],
    pronunciation: "/ˈwɑndərˌlʌst/",
  },
  {
    term: "Bucket List",
    definition:
      "A list of destinations, experiences, or activities that a person hopes to achieve or experience during their lifetime, especially related to travel.",
    example:
      "Visiting the Northern Lights in Iceland has been on my bucket list for years.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Wish list", "Life goals", "Dream destinations"],
    pronunciation: "/ˈbʌkət lɪst/",
  },
  {
    term: "Overtourism",
    definition:
      "A situation where too many tourists visit a destination, causing negative impacts on local communities, environment, and infrastructure.",
    example:
      "Venice and Barcelona have implemented measures to combat overtourism and protect their cultural heritage.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Tourism saturation",
      "Excessive tourism",
      "Tourist overcrowding",
    ],
    pronunciation: "/ˌoʊvərˈtʊrɪzəm/",
  },
  {
    term: "Staycation",
    definition:
      "A vacation spent at home or nearby rather than traveling to distant destinations, often involving local attractions and activities.",
    example:
      "Due to budget constraints, we decided to have a staycation and explore museums in our own city.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Home vacation", "Local holiday", "Domestic tourism"],
    pronunciation: "/ˈsteɪkeɪʃən/",
  },
  {
    term: "Backpacking",
    definition:
      "A form of low-cost, independent travel where travelers carry their belongings in a backpack and often stay in budget accommodations.",
    example:
      "Backpacking through Southeast Asia taught me to travel light and appreciate simple experiences.",
    partOfSpeech: "Noun/Gerund",
    difficulty: "Intermediate",
    synonyms: ["Budget travel", "Independent travel", "Hostel hopping"],
    pronunciation: "/ˈbækˌpækɪŋ/",
  },
  {
    term: "Travel Itinerary",
    definition:
      "A detailed plan or schedule of places to visit, activities to do, and routes to take during a trip or vacation.",
    example:
      "I always create a flexible travel itinerary that allows for spontaneous discoveries and local recommendations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Travel plan", "Route schedule", "Trip agenda"],
    pronunciation: "/ˈtrævəl aɪˈtɪnəˌreri/",
  },
  {
    term: "Cultural Immersion",
    definition:
      "Deep engagement with local customs, traditions, and way of life when traveling, going beyond surface-level tourist activities.",
    example:
      "Living with a host family provided complete cultural immersion and helped me understand local traditions firsthand.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Cultural integration", "Local experience", "Authentic travel"],
    pronunciation: "/ˈkʌltʃərəl ɪˈmɜrʃən/",
  },
  {
    term: "Gap Year",
    definition:
      "A year-long break from formal education or career, often spent traveling, volunteering, or gaining life experiences before continuing studies or work.",
    example:
      "Taking a gap year to travel around Europe helped me gain independence and perspective before university.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Sabbatical year", "Break year", "Time out"],
    pronunciation: "/gæp jɪr/",
  },
  {
    term: "Cultural Shock",
    definition:
      "The feeling of disorientation and discomfort experienced when encountering an unfamiliar culture, customs, or way of life while traveling.",
    example:
      "I experienced cultural shock when I first visited Japan due to the significant differences in social etiquette and customs.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Culture clash", "Cultural adjustment", "Social disorientation"],
    pronunciation: "/ˈkʌltʃərəl ʃɑk/",
  },
  {
    term: "Jet Lag",
    definition:
      "A temporary sleep disorder caused by traveling across multiple time zones, resulting in fatigue and difficulty adjusting to local time.",
    example:
      "The jet lag from my flight to Australia lasted almost a week, making it difficult to enjoy the first few days.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Time zone fatigue", "Circadian disruption", "Travel fatigue"],
    pronunciation: "/dʒɛt læg/",
  },
  {
    term: "Local Cuisine",
    definition:
      "Traditional food and cooking styles specific to a particular region or country, often a major attraction for travelers.",
    example:
      "Trying local cuisine is one of my favorite aspects of traveling, as it provides insight into cultural traditions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Regional food", "Traditional dishes", "Native cooking"],
    pronunciation: "/ˈloʊkəl kwɪˈzin/",
  },
  {
    term: "Tourist Trap",
    definition:
      "A place or attraction that exists primarily to attract tourists and often charges high prices for poor quality goods or services.",
    example:
      "The restaurant near the famous landmark was clearly a tourist trap with overpriced food and poor service.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Tourist scam", "Overpriced attraction", "Money trap"],
    pronunciation: "/ˈtʊrɪst træp/",
  },
  {
    term: "Solo Travel",
    definition:
      "The practice of traveling alone, without companions, which can provide independence, self-discovery, and personal growth opportunities.",
    example:
      "Solo travel has become increasingly popular among young adults seeking personal growth and adventure.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Independent travel", "Single travel", "Lone travel"],
    pronunciation: "/ˈsoʊloʊ ˈtrævəl/",
  },
  {
    term: "Travel Insurance",
    definition:
      "Coverage that protects travelers against financial losses from unexpected events such as trip cancellations, medical emergencies, or lost luggage.",
    example:
      "Travel insurance proved invaluable when I had to cancel my trip due to a family emergency.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Trip protection", "Travel coverage", "Holiday insurance"],
    pronunciation: "/ˈtrævəl ɪnˈʃʊrəns/",
  },
  {
    term: "Peak Season",
    definition:
      "The time of year when a destination experiences the highest number of tourists, often coinciding with favorable weather or holidays.",
    example:
      "Hotel prices in tropical destinations are significantly higher during peak season from December to February.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["High season", "Tourist season", "Busy period"],
    pronunciation: "/pik ˈsizən/",
  },
  {
    term: "Off-Season",
    definition:
      "The period when fewer tourists visit a destination, typically offering lower prices but potentially less favorable weather or limited services.",
    example:
      "Traveling during off-season to Europe allowed me to experience authentic local life without crowds.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Low season", "Quiet period", "Shoulder season"],
    pronunciation: "/ɔf ˈsizən/",
  },
  {
    term: "Business Travel",
    definition:
      "Travel undertaken for work-related purposes, including meetings, conferences, training, or client visits, often paid for by employers.",
    example:
      "Business travel has decreased significantly since companies adopted remote meeting technologies.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Corporate travel", "Work travel", "Professional travel"],
    pronunciation: "/ˈbɪznɪs ˈtrævəl/",
  },
  {
    term: "Medical Tourism",
    definition:
      "Travel to another country or region specifically to receive medical treatment, often due to lower costs or specialized procedures.",
    example:
      "Medical tourism to countries like Thailand and India has grown due to affordable, high-quality healthcare services.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Health tourism", "Medical travel", "Wellness travel"],
    pronunciation: "/ˈmɛdɪkəl ˈtʊrɪzəm/",
  },
  {
    term: "Voluntourism",
    definition:
      "A form of tourism that combines volunteering for charitable causes with traditional travel and sightseeing activities.",
    example:
      "Voluntourism projects in developing countries allow travelers to contribute to local communities while experiencing different cultures.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Volunteer travel", "Service tourism", "Charitable travel"],
    pronunciation: "/ˌvɑlənˈtʊrɪzəm/",
  },
  {
    term: "Domestic Tourism",
    definition:
      "Travel within one's own country, exploring local destinations, attractions, and cultures without crossing international borders.",
    example:
      "The pandemic encouraged domestic tourism as people discovered hidden gems in their own countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Internal tourism", "Local travel", "National tourism"],
    pronunciation: "/dəˈmɛstɪk ˈtʊrɪzəm/",
  },
  {
    term: "Travel Blogger",
    definition:
      "A person who documents and shares their travel experiences, tips, and destinations through online blogs, social media, or other digital platforms.",
    example:
      "As a travel blogger, she shares authentic experiences and practical advice to help others plan their trips.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Travel writer",
      "Travel influencer",
      "Digital nomad journalist",
    ],
    pronunciation: "/ˈtrævəl ˈblɔgər/",
  },
  {
    term: "Luxury Travel",
    definition:
      "High-end travel experiences characterized by premium accommodations, exclusive services, and expensive amenities designed for affluent travelers.",
    example:
      "Luxury travel often includes private jets, five-star resorts, and personalized concierge services.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Premium travel", "High-end tourism", "Exclusive travel"],
    pronunciation: "/ˈlʌkʃəri ˈtrævəl/",
  },
];

const relatedTopics = [
  {
    id: "society-culture",
    title: "Society & Culture",
    description:
      "Explore how travel affects cultural exchange and understanding",
    icon: "🏛️",
  },
  {
    id: "environment",
    title: "Environment",
    description: "Learn about sustainable tourism and environmental impact",
    icon: "🌱",
  },
];

const studyTips = [
  {
    tip: "Personal Experiences",
    description:
      "Share your own travel experiences or dream destinations to make answers authentic and engaging.",
    icon: CheckCircle,
  },
  {
    tip: "Balance Perspectives",
    description:
      "Discuss both benefits and drawbacks of tourism, showing critical thinking about travel impacts.",
    icon: Lightbulb,
  },
  {
    tip: "Current Trends",
    description:
      "Reference modern travel trends like sustainable tourism, digital nomadism, or post-pandemic changes.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "Do you like traveling? Why?",
    tips: "Use 'cultural tourism', 'off-the-beaten-path' experiences, and personal growth benefits.",
  },
  {
    question: "How has tourism changed in your country?",
    tips: "Discuss 'tourism infrastructure', 'mass tourism' effects, and 'sustainable travel' trends.",
  },
  {
    question: "What are the negative effects of tourism?",
    tips: "Address 'mass tourism' problems, environmental impact, and need for 'sustainable travel'.",
  },
  {
    question: "Will people travel more or less in the future?",
    tips: "Consider 'digital nomad' lifestyle, 'travel restrictions', and changing work patterns.",
  },
];

export default function TravelHolidaysVocabularyPage() {
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
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Plane className="w-16 h-16 mx-auto mb-6 text-sky-200" />
            <h1 className="text-4xl font-bold mb-4">
              Travel & Holidays Vocabulary
            </h1>
            <p className="text-xl text-sky-100 mb-6">
              Advanced travel and holidays vocabulary for IELTS Speaking Band
              7-9. Master terms related to tourism, sustainable travel, cultural
              experiences, and modern travel trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                8 Travel Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Tourism Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Cultural Focus
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
              Travel & Holidays Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>8 terms</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-sky-600 h-2 rounded-full"
              style={{ width: "91.66%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 11 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search travel terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>
        </div>

        {/* Vocabulary Terms */}
        <section className="mb-12">
          <div className="space-y-6">
            {vocabularyTerms.map((vocab, index) => {
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
                          <BotIcon className="w-6 h-6 text-sky-600" />
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
                    <div className="bg-sky-50 p-4 rounded-lg border-l-4 border-sky-400">
                      <h4 className="font-semibold text-sky-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-sky-800 italic">"{vocab.example}"</p>
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
            Common IELTS Travel Questions
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
            Using Travel Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-sky-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/global-issues">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Global Issues
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/food-nutrition">
                Next: Food & Nutrition
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-sky-600 to-blue-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Practice Travel Topics</h2>
          <p className="text-sky-100 mb-6">
            Travel and holidays are extremely popular IELTS Speaking topics.
            Practice describing your travel experiences, dream destinations, and
            opinions about tourism using these terms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/speaking/part-2">Practice Part 2 Questions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-green hover:bg-white/10"
              asChild
            >
              <Link href="/speaking/vocabulary/food-nutrition">Next Topic</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
