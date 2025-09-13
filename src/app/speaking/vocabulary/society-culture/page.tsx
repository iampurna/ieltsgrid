import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Users,
  Home,
  Globe,
  BotIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Society & Culture Vocabulary for IELTS Speaking | Social Issues & Cultural Terms",
  description:
    "Master society and culture vocabulary for IELTS Speaking. Learn advanced terms like social inequality, cultural heritage, urbanization with examples for Band 7-9.",
  keywords: [
    "IELTS society vocabulary",
    "cultural heritage IELTS",
    "social inequality vocabulary",
    "urbanization IELTS",
    "multiculturalism vocabulary",
    "Band 7-9 society terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Social Inequality",
    definition:
      "The unequal distribution of resources, opportunities, and privileges within a society, often leading to unrest and dissatisfaction among citizens.",
    example:
      "Social inequality can lead to unrest and dissatisfaction among citizens who feel they lack equal opportunities.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Social disparity", "Class divide"],
    pronunciation: "/ˈsoʊʃəl ˌɪnɪˈkwɑləti/",
  },
  {
    term: "Cultural Heritage",
    definition:
      "The legacy of physical artifacts and intangible attributes inherited from past generations, including traditions, customs, and historical sites.",
    example:
      "Tourism can both preserve and threaten cultural heritage, depending on how it is managed.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Cultural legacy", "Traditional heritage"],
    pronunciation: "/ˈkʌltʃərəl ˈherɪtɪdʒ/",
    icon: Building,
  },
  {
    term: "Urbanization",
    definition:
      "The process by which rural areas become urban through population growth and migration from countryside to cities.",
    example:
      "Rapid urbanization often puts pressure on housing and infrastructure in developing countries.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Urban development", "City growth"],
    pronunciation: "/ˌɜrbənəˈzeɪʃən/",
  },
  {
    term: "Multiculturalism",
    definition:
      "The coexistence of diverse cultures within a society, where different cultural groups maintain their distinct identities while participating in the larger society.",
    example:
      "Multiculturalism enriches society by exposing people to different perspectives and traditions.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Cultural diversity", "Cultural pluralism"],
    pronunciation: "/ˌmʌltiˈkʌltʃərəˌlɪzəm/",
    icon: Globe,
  },
  {
    term: "Migration",
    definition:
      "The movement of people from one place to another, typically from rural to urban areas, affecting city planning and services.",
    example:
      "Migration from rural to urban areas affects city planning and services in many developing nations.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Population movement", "Relocation"],
    pronunciation: "/maɪˈgreɪʃən/",
  },
  {
    term: "Generational Gap",
    definition:
      "Differences in values, attitudes, and lifestyle choices between people of different age groups, particularly between parents and children.",
    example:
      "The generational gap can lead to differences in values and lifestyle choices between parents and children.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Generation divide", "Intergenerational differences"],
    pronunciation: "/ˌdʒenəˈreɪʃənəl gæp/",
  },
  {
    term: "Gender Roles",
    definition:
      "Socially constructed expectations about how men and women should behave, which are changing as more women join the workforce.",
    example:
      "Traditional gender roles are changing as more women join the workforce and pursue leadership positions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Gender expectations", "Social roles"],
    pronunciation: "/ˈdʒendər roʊlz/",
  },
  {
    term: "Culture",
    definition:
      "The way of life, especially the general customs and beliefs, of a particular group of people at a particular time.",
    example:
      "People can enjoy products from many different cultures today due to globalization and cultural exchange.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Customs", "Traditions", "Way of life"],
    pronunciation: "/ˈkʌltʃər/",
  },
  {
    term: "Cycle",
    definition:
      "A group of events that happen in a particular order, one following the other, and are often repeated.",
    example:
      "Historians see history as being driven by cumulative long-term trends and short to mid-term cycles.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Pattern", "Sequence", "Rotation"],
    pronunciation: "/ˈsaɪkəl/",
  },
  {
    term: "Diversity",
    definition:
      "The fact of many different types of things or people being included in something; a range of different things or people.",
    example:
      "There is a lot of give and take going on and you still get cultural diversity to some extent.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Variety", "Multiculturalism", "Heterogeneity"],
    pronunciation: "/dɪˈvɜrsəti/",
  },
  {
    term: "Globalisation",
    definition:
      "The increase of trade around the world, especially by large companies producing and trading goods in many different countries.",
    example:
      "Globalisation has made it possible to produce clothing at increasingly lower prices that many consumers consider disposable.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Global integration",
      "Worldwide trade",
      "International commerce",
    ],
    pronunciation: "/ˌɡloʊbəlɪˈzeɪʃən/",
  },
  {
    term: "Heritage",
    definition:
      "Features belonging to the culture of a particular society, such as traditions, languages, or buildings, that were created in the past and still have historical importance.",
    example:
      "Above all, they are records of cultural heritage and ways of expressing a community's relationships with nature and the wider world.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Legacy", "Inheritance", "Cultural legacy"],
    pronunciation: "/ˈhɛrətɪdʒ/",
  },
  {
    term: "Icon",
    definition:
      "A very famous person or thing considered as representing a set of beliefs or a way of life.",
    example:
      "When people go travelling to far-flung places, they want to see something exotic, not the same icons they see at home.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Symbol", "Representative figure", "Emblem"],
    pronunciation: "/ˈaɪkɑn/",
  },
  {
    term: "Identity",
    definition:
      "The fact of being, or feeling that you are, a particular type of person, organization, etc.; the qualities that make a person or organization different from others.",
    example:
      "King Jigme Singye Wangchuck instituted policies designed to preserve the country's cultural identity.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Character", "Individuality", "Uniqueness"],
    pronunciation: "/aɪˈdɛntəti/",
  },
  {
    term: "Implication",
    definition:
      "An occasion when you seem to suggest something without saying it directly.",
    example:
      "While advertising generated modern anxieties about its social and ethical implications, it nevertheless acquired centrality in the 1920s.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Suggestion", "Inference", "Consequence"],
    pronunciation: "/ˌɪmpləˈkeɪʃən/",
  },
  {
    term: "Influence",
    definition:
      "The power to have an effect on people or things, or a person or thing that is able to do this.",
    example:
      "The results strongly support the idea that human influence has a huge effect on making some songs more popular than others.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Impact", "Effect", "Power"],
    pronunciation: "/ˈɪnfluəns/",
  },
  {
    term: "Modernisation",
    definition:
      "The act of making something more modern by introducing new methods, ideas, or technology.",
    example:
      "The modernization of the 100-year-old sewage and water systems will cost millions of pounds.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Updating", "Reform", "Innovation"],
    pronunciation: "/ˌmɑdərnəˈzeɪʃən/",
  },
  {
    term: "Multiculturalism",
    definition:
      "The belief that different cultures within a society should all be given importance and equal recognition.",
    example:
      "Switzerland is well known for cheese fondue, penguin parades and its multiculturalism.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Cultural diversity", "Pluralism", "Cultural integration"],
    pronunciation: "/ˌmʌltiˈkʌltʃərəlɪzəm/",
  },
  {
    term: "Norm",
    definition:
      "An accepted standard or a way of behaving or doing things that most people agree with.",
    example:
      "As our society becomes more multicultural, there is a blending of customs and we gradually redefine the norm.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Standard", "Convention", "Rule"],
    pronunciation: "/nɔrm/",
  },
  {
    term: "Notion",
    definition:
      "A belief or idea about something, often without complete certainty or evidence.",
    example:
      "It is based on the notion of equal opportunities for all and equitable distribution of wealth.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Concept", "Idea", "Belief"],
    pronunciation: "/ˈnoʊʃən/",
  },
  {
    term: "Conservative",
    definition:
      "Not usually liking or trusting change, especially sudden change; preferring traditional methods and values.",
    example:
      "There are those who observe these social mores religiously, and these people are often labelled 'conservative'.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Traditional", "Conventional", "Cautious"],
    pronunciation: "/kənˈsɜrvətɪv/",
  },
  {
    term: "Cultural",
    definition:
      "Relating to the habits, traditions, and beliefs of a society or group of people.",
    example:
      "The later Mayan peoples left behind a great deal of cultural evidence based on earlier Olmec traditions.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Social", "Traditional", "Ethnic"],
    pronunciation: "/ˈkʌltʃərəl/",
  },
  {
    term: "Ethnic",
    definition:
      "Relating or belonging to a group of people who can be seen as distinct because they have a shared culture, tradition, language, or history.",
    example:
      "The difference in numbers between men and women cannot be attributed to race, ethnic, or social group factors.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Racial", "Cultural", "Tribal"],
    pronunciation: "/ˈɛθnɪk/",
  },
  {
    term: "Multicultural",
    definition:
      "Including people who have many different customs and beliefs, or relating to a society with diverse cultural groups.",
    example:
      "I think globalisation could mean that we end up living a more interesting and multicultural life.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Diverse", "Cosmopolitan", "Pluralistic"],
    pronunciation: "/ˌmʌltiˈkʌltʃərəl/",
  },
  {
    term: "Compound",
    definition:
      "To mix two things together, or to make a problem or situation worse by adding to it.",
    example:
      "This problem is compounded by the fact that the number of inhabitants is diminishing and they are growing older.",
    partOfSpeech: "Verb",
    difficulty: "Advanced",
    synonyms: ["Worsen", "Aggravate", "Intensify"],
    pronunciation: "/kəmˈpaʊnd/",
  },
  {
    term: "Conform",
    definition:
      "To behave according to the usual standards of behaviour that are expected by a group or society.",
    example:
      "When people conform, it helps make society more peaceful and predictable.",
    partOfSpeech: "Verb",
    difficulty: "Advanced",
    synonyms: ["Comply", "Follow", "Adhere"],
    pronunciation: "/kənˈfɔrm/",
  },
  {
    term: "Attitude",
    definition:
      "A feeling or opinion about something or someone, or a way of behaving that is caused by this feeling.",
    example:
      "As a species, we humans appear to have a much more active attitude towards our environment than any other species.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Mindset", "Outlook", "Perspective"],
    pronunciation: "/ˈætəˌtud/",
  },
  {
    term: "Community",
    definition:
      "The people living in one particular area or people who are considered as a unit because of their common interests or social group.",
    example:
      "A great idea to get children out of the house is to find out how they can help in your local community.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Society", "Neighborhood", "Group"],
    pronunciation: "/kəˈmjunəti/",
  },
  {
    term: "Standard",
    definition:
      "A level of quality or achievement that is considered acceptable or desirable.",
    example:
      "We expect people to behave according to our accepted standards of behaviours.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Benchmark", "Criterion", "Level"],
    pronunciation: "/ˈstændərd/",
  },
  {
    term: "Influential",
    definition:
      "Having a lot of influence on someone or something; able to change or affect someone or something.",
    example:
      "First adopted and flaunted by influential stars like the Rolling Stones, tattooing became accepted by mainstream society.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Powerful", "Important", "Significant"],
    pronunciation: "/ˌɪnfluˈɛnʃəl/",
  },
  {
    term: "Unconventional",
    definition:
      "Different from what is usual or from the way most people do things; not following accepted customs.",
    example:
      "There will always be those who seek to break away from tradition and see themselves as unconventional.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Unorthodox", "Alternative", "Non-traditional"],
    pronunciation: "/ˌʌnkənˈvɛnʃənəl/",
  },
  {
    term: "Miscalculate",
    definition:
      "To judge a situation badly by making incorrect estimates or assessments.",
    example:
      "He miscalculated badly when he underestimated the response of the international community to the invasion.",
    partOfSpeech: "Verb",
    difficulty: "Advanced",
    synonyms: ["Misjudge", "Underestimate", "Err"],
    pronunciation: "/ˌmɪsˈkælkjəˌleɪt/",
  },
  {
    term: "Misinterpret",
    definition:
      "To form an understanding that is not correct of something that is said or done.",
    example:
      "When we re-examined the regulations, we realized that we had misinterpreted them completely.",
    partOfSpeech: "Verb",
    difficulty: "Advanced",
    synonyms: ["Misunderstand", "Misconstrue", "Misread"],
    pronunciation: "/ˌmɪsɪnˈtɜrprət/",
  },
  {
    term: "Misjudge",
    definition:
      "To form an opinion or idea about someone or something that is unfair or wrong.",
    example:
      "It's easy to misjudge people when you don't really know them or their circumstances.",
    partOfSpeech: "Verb",
    difficulty: "Advanced",
    synonyms: ["Misassess", "Underestimate", "Miscalculate"],
    pronunciation: "/ˌmɪsˈdʒʌdʒ/",
  },
  {
    term: "Bureaucrat",
    definition:
      "Someone working in a bureaucracy, typically characterized by adherence to rules and procedures.",
    example:
      "It turned out she was one of those faceless bureaucrats who control our lives through regulations.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Official", "Administrator", "Civil servant"],
    pronunciation: "/ˈbjʊrəkræt/",
  },
  {
    term: "Civil Servant",
    definition:
      "A person who works for local, state, or especially the federal government in an administrative capacity.",
    example:
      "A senior civil servant has been disciplined for revealing secret government plans to the media.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Government employee", "Public official", "State worker"],
    pronunciation: "/ˈsɪvəl ˈsɜrvənt/",
  },
  {
    term: "Mayor",
    definition:
      "A person who is elected or chosen to lead the group who governs a town or city.",
    example:
      "This museum first opened its doors in 1985, the result of years of effort by the mayor and others in our city.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["City leader", "Municipal head", "Local official"],
    pronunciation: "/ˈmeɪər/",
  },
  {
    term: "Middle Class",
    definition:
      "A social group that consists of well-educated people, such as doctors, lawyers, and teachers, who have good jobs but are not very rich.",
    example:
      "The upper middle class tends to go into business or the professions, becoming lawyers, doctors, or accountants.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Professional class", "Bourgeoisie", "White-collar workers"],
    pronunciation: "/ˈmɪdəl klæs/",
  },
  {
    term: "State",
    definition:
      "A country or its government, especially in relation to politics and public administration.",
    example:
      "A welfare state is a taxation system which allows the state to provide for the economic and social well-being of its citizens.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Government", "Nation", "Country"],
    pronunciation: "/steɪt/",
  },
  {
    term: "Status",
    definition:
      "An accepted or official position, especially in a social group or hierarchy.",
    example:
      "Students who are popular and well-liked manage to balance their high social status with positive qualities.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Position", "Rank", "Standing"],
    pronunciation: "/ˈsteɪtəs/",
  },
  {
    term: "Working Class",
    definition:
      "A social group that consists of people who earn little money, often being paid only for hours worked, and who usually do physical work.",
    example:
      "The working class usually reacts in a predictable way to government policies affecting employment.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Blue-collar workers", "Labor class", "Manual workers"],
    pronunciation: "/ˈwɜrkɪŋ klæs/",
  },
  {
    term: "Affluent",
    definition:
      "Having a lot of money or owning a lot of things; wealthy and prosperous.",
    example:
      "Affluent countries like Australia and Canada have a responsibility to help poorer countries.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Wealthy", "Prosperous", "Well-off"],
    pronunciation: "/ˈæfluənt/",
  },
  {
    term: "Wealthy",
    definition:
      "Rich; having a large amount of money, property, or valuable possessions.",
    example:
      "In the 1980s and 90s, as technology made globalisation easier, the trend for wealthy countries continued falling.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Rich", "Affluent", "Prosperous"],
    pronunciation: "/ˈwɛlθi/",
  },
  {
    term: "Brand",
    definition:
      "A type of product made by a particular company and sold under a particular name.",
    example:
      "Luxury brands dominate both the cosmetic and skincare market worldwide.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Label", "Make", "Trademark"],
    pronunciation: "/brænd/",
  },
  {
    term: "Military Service",
    definition:
      "Army training that young people must do in some countries as a civic duty.",
    example:
      "The existence of pensions can be traced back to the Roman Empire, when soldiers received pensions after military service.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Armed service", "National service", "Conscription"],
    pronunciation: "/ˈmɪləˌtɛri ˈsɜrvəs/",
  },
  {
    term: "Old-age Pension",
    definition:
      "A pension that is paid by the state to people who have stopped working because they have reached a particular age.",
    example:
      "The old-age pension drawn monthly shall be determined by the premium payment years of the employees.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Retirement pension", "Senior benefits", "Social security"],
    pronunciation: "/oʊld eɪdʒ ˈpɛnʃən/",
  },
  {
    term: "Social Service",
    definition:
      "A service provided by local or national government or another organization to help people who are old, ill, or need support.",
    example:
      "After the Second World War, some social services were taken care of by charitable organizations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Public service", "Welfare service", "Community service"],
    pronunciation: "/ˈsoʊʃəl ˈsɜrvəs/",
  },
  {
    term: "Charitable",
    definition:
      "Giving money, food, or help free to those who are in need because they are ill, poor, or have no home.",
    example:
      "The entire organization is funded by charitable donations from generous supporters.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Philanthropic", "Generous", "Benevolent"],
    pronunciation: "/ˈtʃɛrətəbəl/",
  },
  {
    term: "Essential",
    definition:
      "Necessary or needed; extremely important and absolutely required.",
    example:
      "Healthcare and education are both essential services that can be extremely expensive and unaffordable for those on limited budgets.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Necessary", "Vital", "Crucial"],
    pronunciation: "/ɪˈsɛnʃəl/",
  },
  {
    term: "Contribute",
    definition:
      "To give something, especially money, in order to provide or achieve something together with other people.",
    example:
      "I learned about politicians, inventors, soldiers, and common everyday people who contributed to our history.",
    partOfSpeech: "Verb",
    difficulty: "Intermediate",
    synonyms: ["Donate", "Give", "Provide"],
    pronunciation: "/kənˈtrɪbjut/",
  },
  {
    term: "Council",
    definition:
      "The group of people elected to govern a particular area, town, or city, and organize services for it.",
    example:
      "The local council of Esperance issued the USA with a $400 fine for littering.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Committee", "Board", "Assembly"],
    pronunciation: "/ˈkaʊnsəl/",
  },
  {
    term: "Joint Venture",
    definition:
      "A business or business activity that two or more people or companies work on together.",
    example:
      "According to this author, there's a new energy drink that's a joint venture between Thailand and Austria.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Partnership", "Collaboration", "Alliance"],
    pronunciation: "/dʒɔɪnt ˈvɛntʃər/",
  },
  {
    term: "Safety Net",
    definition:
      "A system to help those who have serious problems and no other form of help.",
    example:
      "A welfare state refers to the creation of a safety net to provide social services such as free childcare.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Support system", "Protection", "Security"],
    pronunciation: "/ˈseɪfti nɛt/",
  },
  {
    term: "Segment",
    definition:
      "One of the smaller groups or amounts that a larger group or amount can be divided into.",
    example:
      "A company creates a diverse product and pricing portfolio to meet the needs of different customer segments.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Section", "Part", "Division"],
    pronunciation: "/ˈsɛgmənt/",
  },
  {
    term: "Stockpile",
    definition:
      "A large amount of food, goods, or weapons that are kept ready for future use.",
    example:
      "They have a stockpile of weapons and ammunition that will last several months.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Reserve", "Store", "Cache"],
    pronunciation: "/ˈstɑkˌpaɪl/",
  },
  {
    term: "Elderly",
    definition: "Old; used to describe people who are advanced in age.",
    example:
      "The social cohesion of a small community can be blighted by seasonal migration, leaving only the elderly behind.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Old", "Aged", "Senior"],
    pronunciation: "/ˈɛldərli/",
  },
  {
    term: "Merge",
    definition: "To combine or join together, or to cause things to do this.",
    example:
      "If not for globalization, companies from different countries would not merge to do business.",
    partOfSpeech: "Verb",
    difficulty: "Advanced",
    synonyms: ["Combine", "Unite", "Join"],
    pronunciation: "/mɜrdʒ/",
  },
  {
    term: "Factor In",
    definition:
      "To include something when you are doing a calculation, or when you are trying to understand something.",
    example:
      "To make accurate predictions we need to factor in the effect people have on their environment.",
    partOfSpeech: "Phrasal verb",
    difficulty: "Advanced",
    synonyms: ["Include", "Consider", "Account for"],
    pronunciation: "/ˈfæktər ɪn/",
  },
  {
    term: "Demographics",
    definition:
      "The number and characteristics of people who live in a particular area, especially in relation to their age, income, and spending habits.",
    example:
      "The company will discuss demographics like age, sex, education, and income levels of people likely to use the product.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Population statistics",
      "Census data",
      "Social characteristics",
    ],
    pronunciation: "/ˌdɛməˈgræfɪks/",
  },
  {
    term: "Development",
    definition:
      "The process in which someone or something grows or changes and becomes more advanced.",
    example:
      "Urban development due to increased population takes its toll as trees are cleared to make way for houses.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Growth", "Progress", "Advancement"],
    pronunciation: "/dɪˈvɛləpmənt/",
  },
  {
    term: "Minority",
    definition:
      "A smaller number or part of a larger group; a group that is different from the larger population.",
    example:
      "Under capitalism, a small minority of people are in control of the money and resources of the planet.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Small group", "Lesser part", "Subset"],
    pronunciation: "/məˈnɔrəti/",
  },
  {
    term: "Prediction",
    definition:
      "A statement about what you think will happen in the future based on available information.",
    example:
      "Predictions of the effects of global warming on the Gulf Stream are based on computer models.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Forecast", "Projection", "Estimate"],
    pronunciation: "/prɪˈdɪkʃən/",
  },
  {
    term: "Projection",
    definition:
      "A calculation or guess about the future based on information that you have.",
    example:
      "On current projections, there will be more than 426 million people over 80 in 2050.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Forecast", "Estimate", "Prediction"],
    pronunciation: "/prəˈdʒɛkʃən/",
  },
  {
    term: "Proportion",
    definition:
      "The number or amount of a group or part of something when compared to the whole.",
    example:
      "Not only will populations dwindle, but an increasing proportion will be moving into old age.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Ratio", "Percentage", "Share"],
    pronunciation: "/prəˈpɔrʃən/",
  },
  {
    term: "Statistics",
    definition:
      "A collection of numerical facts or measurements, as about people, business conditions, or weather.",
    example:
      "One of the few areas in which long-term trends can be clearly seen is demographic statistics.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Data", "Numbers", "Figures"],
    pronunciation: "/stəˈtɪstɪks/",
  },
  {
    term: "Autonomous",
    definition:
      "An autonomous organization, country, or region is independent and has the freedom to govern itself.",
    example:
      "They proudly declared themselves part of a new autonomous province with self-governing rights.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Independent", "Self-governing", "Self-sufficient"],
    pronunciation: "/ɔˈtɑnəməs/",
  },
  {
    term: "Demographic",
    definition:
      "Relating to demography, the study of populations and the different groups that make them up.",
    example:
      "The single fastest-growing demographic group seeking tattoo services is middle-class suburban women.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Population-related", "Statistical", "Census-related"],
    pronunciation: "/ˌdɛməˈgræfɪk/",
  },
  {
    term: "Global",
    definition:
      "Relating to the whole world; affecting or including the entire world.",
    example:
      "To prevent a catastrophe of global proportions, we need to find a way to reach a compromise.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Worldwide", "International", "Universal"],
    pronunciation: "/ˈgloʊbəl/",
  },
  {
    term: "Harmonious",
    definition:
      "Friendly and peaceful; characterized by agreement and cooperation.",
    example:
      "One of the main factors in ensuring a harmonious society is having clear, established patterns in how we conduct ourselves.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Peaceful", "Cooperative", "United"],
    pronunciation: "/hɑrˈmoʊniəs/",
  },
  {
    term: "Mid-term",
    definition: "In the middle of the period when a government is in office.",
    example:
      "Political balance cannot be achieved by criticizing one party during the mid-term of a parliament.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Midway", "Intermediate", "Halfway"],
    pronunciation: "/mɪd tɜrm/",
  },
  {
    term: "Productive",
    definition:
      "Resulting in or providing a large amount or supply of something; achieving good results.",
    example:
      "On her most productive day, a worker should be able to walk four to five miles while maintaining a normal workload.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Effective", "Efficient", "Fruitful"],
    pronunciation: "/prəˈdʌktɪv/",
  },
];

const relatedTopics = [
  {
    id: "global-issues",
    title: "Global Issues",
    description:
      "Explore international social challenges and development goals",
    icon: "🌍",
  },
  {
    id: "politics-governance",
    title: "Politics & Governance",
    description: "Learn about government policies and democratic systems",
    icon: "🏛️",
  },
];

const studyTips = [
  {
    tip: "Current Examples",
    description:
      "Reference recent social movements, cultural events, or demographic changes in your country.",
    icon: CheckCircle,
  },
  {
    tip: "Compare Cultures",
    description:
      "Discuss differences between traditional and modern values, or between different countries.",
    icon: Lightbulb,
  },
  {
    tip: "Personal Impact",
    description:
      "Explain how social changes affect your own life and community experiences.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "How has society changed in your country?",
    tips: "Discuss 'urbanization', 'gender roles', and 'generational gap' changes over time.",
  },
  {
    question: "What are the benefits of living in a multicultural society?",
    tips: "Use 'multiculturalism', 'cultural heritage', and diversity advantages.",
  },
  {
    question: "Do you think there are social problems in your country?",
    tips: "Address 'social inequality', 'migration' challenges, and potential solutions.",
  },
  {
    question: "How do different generations view life differently?",
    tips: "Explore 'generational gap', changing 'gender roles', and evolving values.",
  },
];

export default function SocietyCultureVocabularyPage() {
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
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building className="w-16 h-16 mx-auto mb-6 text-orange-200" />
            <h1 className="text-4xl font-bold mb-4">
              Society & Culture Vocabulary
            </h1>
            <p className="text-xl text-orange-100 mb-6">
              Advanced society and culture vocabulary for IELTS Speaking Band
              7-9. Master terms related to social issues, cultural heritage,
              multiculturalism, and community life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                7 Social Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Cultural Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Modern Issues
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
              Society & Culture Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>7 terms</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-orange-600 h-2 rounded-full"
              style={{ width: "41.66%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 5 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search society terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
                          <BotIcon className="w-6 h-6 text-orange-600" />
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
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-orange-800 italic">
                        "{vocab.example}"
                      </p>
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
            Common IELTS Society Questions
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
            Using Society Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-orange-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/health-lifestyle">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Health & Lifestyle
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/economy-work">
                Next: Economy & Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-orange-600 to-red-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Practice Society Topics</h2>
          <p className="text-orange-100 mb-6">
            Society and culture topics frequently appear in IELTS Speaking Part
            3. Practice discussing social changes, cultural differences, and
            community issues.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/speaking/part-3">Practice Part 3 Questions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-green hover:bg-white/10"
              asChild
            >
              <Link href="/speaking/vocabulary/economy-work">Next Topic</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
