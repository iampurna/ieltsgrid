import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  BookOpen,
  Clock,
  Lightbulb,
  Volume2,
  CheckCircle,
  Star,
  Globe,
  BotIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Vocabulary Topic | IELTS Speaking Preparation",
  description:
    "Learn advanced IELTS vocabulary with definitions, examples, synonyms, and speaking strategies to score Band 7-9.",
  keywords: [
    "IELTS vocabulary",
    "IELTS speaking words",
    "advanced vocabulary",
    "Band 7 vocabulary",
    "IELTS global issues vocabulary",
    "poverty reduction IELTS",
    "refugee crisis vocabulary",
    "climate migration IELTS",
    "sustainable development vocabulary",
    "Band 7-9 global terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Poverty Reduction",
    definition:
      "Coordinated efforts and strategies to decrease the number of people living in extreme poverty through education, economic development, healthcare access, and international cooperation.",
    example:
      "Investing in education is key to poverty reduction and creating sustainable economic development in developing countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Poverty alleviation",
      "Economic development",
      "Poverty eradication",
    ],
    pronunciation: "/ˈpɑvərti rɪˈdʌkʃən/",
  },
  {
    term: "Refugee Crisis",
    definition:
      "Large-scale displacement of people forced to flee their home countries due to war, persecution, natural disasters, or political instability, requiring international cooperation and humanitarian support.",
    example:
      "The refugee crisis requires international cooperation for effective solutions and long-term humanitarian support for displaced populations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Displacement crisis",
      "Migration emergency",
      "Humanitarian crisis",
    ],
    pronunciation: "/ˌrefjʊˈdʒi ˈkraɪsəs/",
  },
  {
    term: "Climate Migration",
    definition:
      "Population movement caused by environmental changes, climate-related disasters, and rising sea levels, which is becoming increasingly common due to global warming effects.",
    example:
      "Climate migration is becoming more common due to rising sea levels and extreme weather events affecting coastal communities worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Environmental migration",
      "Climate displacement",
      "Climate-induced migration",
    ],
    pronunciation: "/ˈklaɪmət maɪˈgreɪʃən/",
  },
  {
    term: "International Cooperation",
    definition:
      "Collaboration between countries and international organizations to tackle global challenges like pandemics, climate change, and economic crises that require coordinated responses.",
    example:
      "International cooperation is vital for tackling global issues like pandemics and climate change that affect all countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Global collaboration",
      "Multilateral cooperation",
      "International partnership",
    ],
    pronunciation: "/ˌɪntərˈnæʃənəl koʊˌɑpəˈreɪʃən/",
  },
  {
    term: "Sustainable Development Goals (SDGs)",
    definition:
      "A collection of 17 global goals adopted by the United Nations to address worldwide challenges including poverty, inequality, climate change, and peace, requiring commitment from both governments and citizens.",
    example:
      "Achieving the SDGs requires commitment from both governments and citizens to address inequality and environmental challenges globally.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "UN Global Goals",
      "Development targets",
      "Sustainability objectives",
    ],
    pronunciation: "/səˈsteɪnəbəl dɪˈveləpmənt goʊlz/",
  },
  {
    term: "Climate Change",
    definition:
      "The long-term alteration of Earth's climate, primarily due to human activities such as burning fossil fuels and deforestation.",
    example:
      "Climate change is causing more frequent extreme weather events around the world.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Global warming", "Climate crisis", "Environmental change"],
    pronunciation: "/ˈklaɪmət tʃeɪndʒ/",
  },
  {
    term: "Global Warming",
    definition:
      "The increase in Earth's average temperature caused by the greenhouse effect and excessive emissions of greenhouse gases.",
    example:
      "Global warming has led to melting polar ice caps and rising sea levels.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Climate heating", "Temperature rise", "Greenhouse effect"],
    pronunciation: "/ˈɡloʊbəl ˈwɔrmɪŋ/",
  },
  {
    term: "Environmental Degradation",
    definition:
      "The deterioration of the environment and natural resources, often resulting from human activities.",
    example:
      "Industrial pollution has caused severe environmental degradation in many regions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Environmental destruction",
      "Ecological damage",
      "Habitat loss",
    ],
    pronunciation: "/ɪnˌvaɪrənˈmentəl ˌdeɡrəˈdeɪʃən/",
  },
  {
    term: "Natural Disasters",
    definition:
      "Catastrophic events caused by geological, meteorological, or hydrological forces, such as earthquakes, hurricanes, and floods.",
    example:
      "Natural disasters have become more frequent due to climate change impacts.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Natural catastrophes",
      "Environmental disasters",
      "Weather emergencies",
    ],
    pronunciation: "/ˈnætʃərəl dɪˈzæstərz/",
  },
  {
    term: "Biodiversity Loss",
    definition:
      "The decline in the variety and abundance of plant and animal species in ecosystems worldwide.",
    example:
      "Deforestation is a major cause of biodiversity loss in tropical rainforests.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Species extinction", "Ecological collapse", "Wildlife decline"],
    pronunciation: "/ˌbaɪoʊdaɪˈvɜrsəti lɔs/",
  },
  {
    term: "Overpopulation",
    definition:
      "The condition where the human population exceeds the carrying capacity of Earth, leading to various environmental and social challenges.",
    example:
      "Overpopulation in urban areas has created housing shortages and infrastructure problems.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: [
      "Population excess",
      "Demographic pressure",
      "Population explosion",
    ],
    pronunciation: "/ˌoʊvərˌpɑpjəˈleɪʃən/",
  },
  {
    term: "Water Scarcity",
    definition:
      "Insufficient access to clean, safe drinking water for human consumption and other purposes.",
    example:
      "Water scarcity affects over 2 billion people worldwide, particularly in arid regions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Water shortage", "Drought conditions", "Water stress"],
    pronunciation: "/ˈwɔtər ˈskɛrsəti/",
  },
  {
    term: "Food Crisis",
    definition:
      "A shortage of food supply that affects a large number of people in a region or globally.",
    example:
      "The food crisis in sub-Saharan Africa requires immediate international humanitarian assistance.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Food shortage", "Famine", "Hunger crisis"],
    pronunciation: "/fud ˈkraɪsəs/",
  },
  {
    term: "Energy Crisis",
    definition:
      "A period of severe energy shortage or rising energy prices, impacting economies and societies.",
    example:
      "The energy crisis has forced many countries to reconsider their renewable energy policies.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Power shortage", "Energy shortage", "Fuel crisis"],
    pronunciation: "/ˈenərdʒi ˈkraɪsəs/",
  },
  {
    term: "Poverty",
    definition:
      "The state of extreme deprivation and lack of access to basic needs, such as food, shelter, and education.",
    example:
      "Global poverty affects over 700 million people who live on less than $1.90 per day.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Destitution", "Deprivation", "Economic hardship"],
    pronunciation: "/ˈpɑvərti/",
  },
  {
    term: "Inequality",
    definition:
      "The uneven distribution of wealth, opportunities, and resources among different groups in society.",
    example:
      "Income inequality has grown significantly in many developed countries over the past decades.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Disparity", "Unfairness", "Social gap"],
    pronunciation: "/ˌɪnɪˈkwɑləti/",
  },
  {
    term: "Economic Recession",
    definition:
      "A period of significant economic decline, leading to reduced production, employment, and spending.",
    example:
      "The economic recession resulted in widespread unemployment and business closures.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Economic downturn", "Financial crisis", "Market decline"],
    pronunciation: "/ˌikəˈnɑmɪk rɪˈseʃən/",
  },
  {
    term: "Globalization",
    definition:
      "The increasing interconnectedness and interdependence of economies, cultures, and societies worldwide.",
    example:
      "Globalization has created both opportunities and challenges for developing countries.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Global integration",
      "Worldwide connection",
      "International unity",
    ],
    pronunciation: "/ˌɡloʊbəlɪˈzeɪʃən/",
  },
  {
    term: "Cybersecurity",
    definition:
      "Measures and practices to protect computer systems and networks from cyberattacks and unauthorized access.",
    example:
      "Improving cybersecurity is essential to protect sensitive government data.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Digital security", "Internet protection", "Cyber defense"],
    pronunciation: "/ˈsaɪbərsɪˌkjʊrəti/",
  },
  {
    term: "Terrorism",
    definition:
      "Acts of violence and intimidation used to instill fear and achieve political, religious, or ideological objectives.",
    example:
      "International cooperation is essential in the fight against terrorism.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: [
      "Political violence",
      "Extremist attacks",
      "Ideological violence",
    ],
    pronunciation: "/ˈterəˌrɪzəm/",
  },
  {
    term: "Human Migration",
    definition:
      "The movement of people from one place to another, often driven by economic, social, or political factors.",
    example:
      "Climate change is increasingly becoming a driver of human migration worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Population movement", "Immigration", "Displacement"],
    pronunciation: "/ˈhjumən maɪˈɡreɪʃən/",
  },
  {
    term: "Pandemic",
    definition:
      "An outbreak of a disease that occurs over a wide geographic area and affects an exceptionally high proportion of the global population.",
    example:
      "The COVID-19 pandemic disrupted economies and healthcare systems worldwide.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Global epidemic", "Worldwide outbreak", "Health crisis"],
    pronunciation: "/pænˈdemɪk/",
  },
  {
    term: "Digital Divide",
    definition:
      "The gap between those who have access to modern technology and the internet and those who do not.",
    example:
      "The digital divide prevents many students from accessing online education.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Technology gap", "Internet inequality", "Digital inequality"],
    pronunciation: "/ˈdɪdʒətəl dɪˈvaɪd/",
  },
  {
    term: "Nuclear Proliferation",
    definition:
      "The spread of nuclear weapons and technology to additional countries.",
    example:
      "Nuclear proliferation poses a significant threat to global security.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Nuclear spread", "Weapons expansion", "Nuclear armament"],
    pronunciation: "/ˈnukliər prəˌlɪfəˈreɪʃən/",
  },
  {
    term: "Refugee Crisis",
    definition:
      "A situation where a large number of people are forced to leave their homes and seek refuge in other countries due to conflict or persecution.",
    example:
      "The Syrian refugee crisis has displaced millions of people across the Middle East and Europe.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Displacement crisis",
      "Migration emergency",
      "Humanitarian crisis",
    ],
    pronunciation: "/ˌrefjʊˈdʒi ˈkraɪsəs/",
  },
  {
    term: "Human Rights Violations",
    definition:
      "Actions that infringe upon the basic rights and dignity of individuals, as recognized by international law.",
    example:
      "The international community condemned the government's human rights violations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Rights abuse", "Legal violations", "Civil liberties breach"],
    pronunciation: "/ˈhjumən raɪts ˌvaɪəˈleɪʃənz/",
  },
  {
    term: "Healthcare Access",
    definition:
      "The availability and affordability of medical services and healthcare facilities for a population.",
    example:
      "Limited healthcare access in rural areas leads to preventable deaths.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Medical availability",
      "Health services",
      "Healthcare provision",
    ],
    pronunciation: "/ˈhelθker ˈækses/",
  },
  {
    term: "Pollution",
    definition:
      "The introduction of harmful substances or contaminants into the environment, causing damage to ecosystems and human health.",
    example:
      "Air pollution from factories has created serious health problems in urban areas.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Contamination", "Environmental damage", "Toxic waste"],
    pronunciation: "/pəˈluʃən/",
  },
  {
    term: "Social Unrest",
    definition:
      "Public dissatisfaction and protests against social and political issues, often leading to demonstrations and civil disobedience.",
    example:
      "Social unrest erupted following the government's announcement of new economic policies.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Civil disorder", "Public protests", "Political demonstrations"],
    pronunciation: "/ˈsoʊʃəl ʌnˈrest/",
  },
  {
    term: "Trade Imbalance",
    definition:
      "A situation where a country's imports exceed its exports or vice versa, leading to economic challenges.",
    example:
      "The trade imbalance between the two countries has created diplomatic tensions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Trade deficit", "Economic imbalance", "Import-export gap"],
    pronunciation: "/treɪd ɪmˈbæləns/",
  },
  {
    term: "Gender Inequality",
    definition:
      "Discrimination and unequal treatment based on gender, particularly affecting women and girls.",
    example:
      "Gender inequality in education prevents millions of girls from attending school.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Gender discrimination", "Sex-based inequality", "Gender gap"],
    pronunciation: "/ˈdʒendər ˌɪnɪˈkwɑləti/",
  },
  {
    term: "Racial Discrimination",
    definition:
      "Prejudice and bias against individuals or groups based on their race or ethnicity.",
    example:
      "Racial discrimination in employment practices violates international human rights standards.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Ethnic prejudice", "Racial bias", "Ethnic discrimination"],
    pronunciation: "/ˈreɪʃəl dɪˌskrɪməˈneɪʃən/",
  },
  {
    term: "Climate Adaptation",
    definition:
      "Strategies and measures to adjust and prepare for the impacts of climate change.",
    example:
      "Coastal cities are implementing climate adaptation measures to address rising sea levels.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Climate adjustment",
      "Environmental preparation",
      "Climate resilience",
    ],
    pronunciation: "/ˈklaɪmət ˌædæpˈteɪʃən/",
  },
  {
    term: "Sustainable Development",
    definition:
      "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.",
    example:
      "The UN promotes sustainable development to balance economic growth with environmental protection.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Green development",
      "Eco-friendly growth",
      "Responsible development",
    ],
    pronunciation: "/səˈsteɪnəbəl dɪˈveləpmənt/",
  },
  {
    term: "Renewable Energy",
    definition:
      "Energy sources that can be replenished naturally, such as solar, wind, and hydroelectric power.",
    example:
      "Many countries are investing in renewable energy to reduce carbon emissions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Clean energy", "Sustainable energy", "Green energy"],
    pronunciation: "/rɪˈnuəbəl ˈenərdʒi/",
  },
  {
    term: "Child Labor",
    definition:
      "The employment of children in hazardous or exploitative conditions, depriving them of their childhood and education.",
    example:
      "Child labor in factories violates international human rights standards.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Child exploitation", "Underage work", "Youth employment abuse"],
    pronunciation: "/tʃaɪld ˈleɪbər/",
  },
  {
    term: "Hunger and Malnutrition",
    definition:
      "The condition of not having enough food or not getting adequate nutrition, leading to health problems.",
    example:
      "Hunger and malnutrition affect nearly 800 million people globally.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Food insecurity", "Undernourishment", "Starvation"],
    pronunciation: "/ˈhʌŋɡər ænd ˌmælnuˈtrɪʃən/",
  },
  {
    term: "Educational Disparities",
    definition:
      "Unequal access to education and quality schooling, often linked to social and economic factors.",
    example:
      "Educational disparities between urban and rural areas limit opportunities for many students.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Education inequality", "Learning gaps", "Academic disparities"],
    pronunciation: "/ˌedʒəˈkeɪʃənəl dɪˈspærətiz/",
  },
  {
    term: "Digital Transformation",
    definition:
      "The integration of digital technologies into various aspects of society and the economy.",
    example:
      "Digital transformation has accelerated during the pandemic, changing how we work and learn.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Technology integration",
      "Digital evolution",
      "Tech advancement",
    ],
    pronunciation: "/ˈdɪdʒətəl ˌtrænsfərˈmeɪʃən/",
  },
  {
    term: "Economic Inequality",
    definition:
      "The unequal distribution of wealth and income among individuals and social groups.",
    example:
      "Economic inequality has increased in many countries, creating social tensions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Wealth disparity", "Income gap", "Financial inequality"],
    pronunciation: "/ˌikəˈnɑmɪk ˌɪnɪˈkwɑləti/",
  },
  {
    term: "Health Disparities",
    definition:
      "Differences in health outcomes and access to healthcare services among different populations.",
    example:
      "Health disparities between rich and poor communities have worsened during the pandemic.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Health inequalities", "Medical gaps", "Healthcare differences"],
    pronunciation: "/helθ dɪˈspærətiz/",
  },
  {
    term: "Cybercrime",
    definition:
      "Criminal activities carried out through the internet, such as hacking, phishing, and identity theft.",
    example:
      "Cybercrime costs the global economy billions of dollars annually.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Internet crime", "Digital fraud", "Online criminal activity"],
    pronunciation: "/ˈsaɪbərkraɪm/",
  },
  {
    term: "Censorship",
    definition:
      "The suppression or control of information and communication, often by governments or authorities.",
    example:
      "Internet censorship limits access to information in many authoritarian countries.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: [
      "Information control",
      "Media suppression",
      "Content restriction",
    ],
    pronunciation: "/ˈsensərʃɪp/",
  },
  {
    term: "Mass Surveillance",
    definition:
      "The extensive monitoring and collection of data on individuals by governments or corporations.",
    example:
      "Mass surveillance programs raise concerns about privacy and civil liberties.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Government monitoring", "Data collection", "Privacy invasion"],
    pronunciation: "/mæs sərˈveɪləns/",
  },
  {
    term: "Natural Resource Depletion",
    definition:
      "The exhaustion and reduction of natural resources, such as fossil fuels and minerals.",
    example:
      "Natural resource depletion threatens the sustainability of current economic models.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Resource exhaustion",
      "Material shortage",
      "Environmental depletion",
    ],
    pronunciation: "/ˈnætʃərəl rɪˈsɔrs dɪˈpliʃən/",
  },
  {
    term: "Global Poverty",
    definition:
      "Widespread poverty and destitution affecting people in various regions of the world.",
    example:
      "Global poverty remains one of the most pressing challenges facing humanity.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Worldwide poverty",
      "International destitution",
      "Universal deprivation",
    ],
    pronunciation: "/ˈɡloʊbəl ˈpɑvərti/",
  },
  {
    term: "Environmental Sustainability",
    definition:
      "Practices that promote the protection and preservation of the natural environment.",
    example:
      "Environmental sustainability requires balancing human needs with ecological protection.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Ecological balance",
      "Green practices",
      "Environmental protection",
    ],
    pronunciation: "/ɪnˌvaɪrənˈmentəl səˌsteɪnəˈbɪləti/",
  },
  {
    term: "Armed Conflicts",
    definition:
      "Wars, armed confrontations, and violence between nations or within countries.",
    example:
      "Armed conflicts have displaced millions of civilians in the region.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Military conflicts", "Warfare", "Violent disputes"],
    pronunciation: "/ɑrmd ˈkɑnflɪkts/",
  },
  {
    term: "Political Instability",
    definition:
      "Uncertainty and turmoil in the political landscape, often affecting governance and policymaking.",
    example:
      "Political instability in the region has deterred foreign investment.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Government instability",
      "Political chaos",
      "Regime uncertainty",
    ],
    pronunciation: "/pəˈlɪtəkəl ˌɪnstəˈbɪləti/",
  },
  {
    term: "Deforestation",
    definition:
      "The large-scale cutting down of forests, often for agricultural or commercial purposes.",
    example:
      "Deforestation in the Amazon rainforest threatens global climate stability.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Forest destruction", "Tree cutting", "Logging"],
    pronunciation: "/diˌfɔrəˈsteɪʃən/",
  },
  {
    term: "Contamination",
    definition:
      "The presence of harmful substances that make something impure or unsafe.",
    example:
      "Water contamination from industrial waste poses serious health risks to local communities.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Pollution", "Impurity", "Toxic exposure"],
    pronunciation: "/kənˌtæməˈneɪʃən/",
  },
  {
    term: "Marine Ecosystem",
    definition:
      "Underwater or ocean-based ecological systems that support marine life.",
    example:
      "Plastic pollution is severely damaging marine ecosystems worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Ocean environment", "Sea ecosystem", "Aquatic habitat"],
    pronunciation: "/məˈrin ˈikosɪstəm/",
  },
  {
    term: "Fossil Fuels",
    definition:
      "Non-renewable energy sources such as coal, oil, and gas formed from ancient organic matter.",
    example:
      "Reducing dependence on fossil fuels is crucial for combating climate change.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Non-renewable energy",
      "Carbon-based fuels",
      "Traditional energy",
    ],
    pronunciation: "/ˈfɑsəl fjuəlz/",
  },
  {
    term: "Greenhouse Effect",
    definition:
      "The process by which greenhouse gases trap heat in Earth's atmosphere, leading to global warming.",
    example:
      "The greenhouse effect has intensified due to increased carbon dioxide emissions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Global warming process", "Heat trapping", "Climate heating"],
    pronunciation: "/ˈɡrinhaʊs ɪˈfekt/",
  },
  {
    term: "Ozone Layer",
    definition:
      "The atmospheric layer that protects Earth from harmful ultraviolet radiation.",
    example:
      "The ozone layer has been recovering since the ban on ozone-depleting substances.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Ozone shield", "UV protection layer", "Stratospheric ozone"],
    pronunciation: "/ˈoʊzoʊn leɪər/",
  },
  {
    term: "Carbon Footprint",
    definition:
      "The total amount of greenhouse gases produced directly and indirectly by human activities.",
    example: "Reducing your carbon footprint can help combat climate change.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Carbon emissions",
      "Environmental impact",
      "Greenhouse gas output",
    ],
    pronunciation: "/ˈkɑrbən ˈfʊtprɪnt/",
  },
  {
    term: "Soil Erosion",
    definition:
      "The gradual destruction of soil by natural forces like wind and water.",
    example:
      "Intensive farming practices have accelerated soil erosion in agricultural regions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Land degradation", "Topsoil loss", "Ground deterioration"],
    pronunciation: "/sɔɪl ɪˈroʊʒən/",
  },
  {
    term: "Desertification",
    definition:
      "The process by which fertile land becomes desert due to drought, deforestation, or inappropriate agriculture.",
    example:
      "Desertification threatens food security in many parts of Africa and Asia.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Land degradation", "Desert expansion", "Aridification"],
    pronunciation: "/dɪˌzɜrtəfəˈkeɪʃən/",
  },
  {
    term: "International Cooperation",
    definition:
      "Collaboration between countries and international organizations to tackle global challenges like pandemics, climate change, and economic crises that require coordinated responses.",
    example:
      "International cooperation is vital for tackling global issues like pandemics and climate change that affect all countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Global collaboration",
      "Multilateral cooperation",
      "International partnership",
    ],
    pronunciation: "/ˌɪntərˈnæʃənəl koʊˌɑpəˈreɪʃən/",
  },
  {
    term: "Poverty Reduction",
    definition:
      "Coordinated efforts and strategies to decrease the number of people living in extreme poverty through education, economic development, healthcare access, and international cooperation.",
    example:
      "Investing in education is key to poverty reduction and creating sustainable economic development in developing countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Poverty alleviation",
      "Economic development",
      "Poverty eradication",
    ],
    pronunciation: "/ˈpɑvərti rɪˈdʌkʃən/",
  },
  {
    term: "Sustainable Development Goals (SDGs)",
    definition:
      "A collection of 17 global goals adopted by the United Nations to address worldwide challenges including poverty, inequality, climate change, and peace, requiring commitment from both governments and citizens.",
    example:
      "Achieving the SDGs requires commitment from both governments and citizens to address inequality and environmental challenges globally.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "UN Global Goals",
      "Development targets",
      "Sustainability objectives",
    ],
    pronunciation: "/səˈsteɪnəbəl dɪˈveləpmənt ɡoʊlz/",
  },
  {
    term: "Plastic Pollution Crisis",
    definition:
      "The overuse and poor disposal of plastic materials causing widespread environmental damage.",
    example:
      "The plastic pollution crisis has created massive garbage patches in our oceans.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Plastic waste problem",
      "Polymer contamination",
      "Plastic epidemic",
    ],
    pronunciation: "/ˈplæstɪk pəˈluʃən ˈkraɪsəs/",
  },
  {
    term: "Industrial Waste",
    definition:
      "Toxic waste materials produced by factories and manufacturing processes.",
    example:
      "Industrial waste dumping has contaminated groundwater in many developing regions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Factory waste", "Manufacturing pollution", "Corporate waste"],
    pronunciation: "/ɪnˈdʌstriəl weɪst/",
    icon: "Factory",
  },
  {
    term: "Melting Polar Ice Caps",
    definition:
      "The reduction of ice masses at Earth's poles due to rising global temperatures.",
    example:
      "Melting polar ice caps are causing sea levels to rise dramatically.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Ice sheet loss", "Polar thaw", "Glacial retreat"],
    pronunciation: "/ˈmeltɪŋ ˈpoʊlər aɪs kæps/",
  },
  {
    term: "Respiratory Infections",
    definition:
      "Breathing-related illnesses often caused or worsened by air pollution.",
    example:
      "Air pollution increases the risk of respiratory infections in urban populations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Lung diseases", "Breathing disorders", "Pulmonary infections"],
    pronunciation: "/ˈrespərətɔri ɪnˈfekʃənz/",
  },
  {
    term: "Habitat Destruction",
    definition:
      "The loss of natural living areas for animals and plants due to human activities.",
    example:
      "Urban expansion is causing massive habitat destruction for wildlife species.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Wildlife habitat loss",
      "Ecosystem destruction",
      "Natural area damage",
    ],
    pronunciation: "/ˈhæbətæt dɪˈstrʌkʃən/",
  },
  {
    term: "Illegal Dumping",
    definition:
      "The unlawful disposal of waste materials in unauthorized locations.",
    example:
      "Illegal dumping of chemicals has polluted rivers and harmed marine life.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Unlawful waste disposal",
      "Unauthorized dumping",
      "Environmental crime",
    ],
    pronunciation: "/ɪˈliɡəl ˈdʌmpɪŋ/",
  },
  {
    term: "Intensive Farming",
    definition:
      "High-output agriculture using chemicals and methods that can harm the environment.",
    example:
      "Intensive farming practices have led to soil degradation and water pollution.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Industrial agriculture", "Chemical farming", "Factory farming"],
    pronunciation: "/ɪnˈtensɪv ˈfɑrmɪŋ/",
  },
  {
    term: "Overgrazing",
    definition: "Excessive livestock feeding that damages land and vegetation.",
    example:
      "Overgrazing by cattle has contributed to desertification in semi-arid regions.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Excessive grazing", "Livestock overuse", "Pasture degradation"],
    pronunciation: "/ˈoʊvərˌɡreɪzɪŋ/",
  },
  {
    term: "Nuclear Reactor",
    definition:
      "A device used to initiate and control nuclear reactions for energy production.",
    example:
      "The nuclear reactor accident contaminated a large area with radioactive materials.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Nuclear power plant", "Atomic reactor", "Nuclear facility"],
    pronunciation: "/ˈnukliər riˈæktər/",
  },
  {
    term: "Radioactive Waste",
    definition:
      "Toxic leftover materials from nuclear reactions that remain dangerous for long periods.",
    example:
      "Proper disposal of radioactive waste is crucial for environmental and human safety.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Nuclear waste", "Atomic waste", "Nuclear byproducts"],
    pronunciation: "/ˌreɪdioʊˈæktɪv weɪst/",
  },
  {
    term: "Hydroelectricity",
    definition:
      "Electricity produced from the flow of water, typically through dams.",
    example:
      "Hydroelectricity provides clean energy but can disrupt river ecosystems.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Water power", "Hydro energy", "Water-generated electricity"],
    pronunciation: "/ˌhaɪdroʊɪlekˈtrɪsəti/",
  },
  {
    term: "Rolling Power Cuts",
    definition:
      "Planned electricity blackouts rotated across different areas to manage energy shortages.",
    example:
      "The government implemented rolling power cuts to prevent total grid collapse.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Rotating blackouts", "Load shedding", "Scheduled outages"],
    pronunciation: "/ˈroʊlɪŋ ˈpaʊər kʌts/",
  },
  {
    term: "Nuclear Accident",
    definition:
      "A catastrophic event involving the release of radioactive materials from nuclear facilities.",
    example:
      "The nuclear accident forced thousands of people to evacuate their homes permanently.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Nuclear disaster", "Radioactive incident", "Nuclear emergency"],
    pronunciation: "/ˈnukliər ˈæksədənt/",
  },
  {
    term: "Emission Controls",
    definition:
      "Technologies and regulations designed to reduce harmful gas releases into the atmosphere.",
    example:
      "Stricter emission controls on vehicles have improved air quality in major cities.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Pollution controls",
      "Environmental regulations",
      "Clean air measures",
    ],
    pronunciation: "/ɪˈmɪʃən kənˈtroʊlz/",
  },
  {
    term: "Zero-Emissions Vehicles",
    definition:
      "Transportation that produces no direct exhaust pipe emissions, such as electric cars.",
    example:
      "Governments are promoting zero-emissions vehicles to reduce urban air pollution.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Electric vehicles", "Clean transport", "Emission-free cars"],
    pronunciation: "/ˈzɪroʊ ɪˈmɪʃənz ˈvikəlz/",
  },
  {
    term: "Green Movement",
    definition:
      "Global efforts and activism aimed at protecting the environment and promoting sustainability.",
    example:
      "The green movement has influenced policy changes worldwide regarding climate action.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Environmental movement",
      "Eco-activism",
      "Sustainability movement",
    ],
    pronunciation: "/ɡrin ˈmuvmənt/",
    icon: "Leaf",
  },
  {
    term: "Waste Segregation",
    definition:
      "The practice of sorting waste into different categories for proper disposal and recycling.",
    example:
      "Proper waste segregation is essential for effective recycling programs.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Waste sorting", "Garbage separation", "Recycling preparation"],
    pronunciation: "/weɪst ˌseɡrəˈɡeɪʃən/",
  },
  {
    term: "Renewable Energy Development",
    definition:
      "The creation and expansion of sustainable energy sources like solar, wind, and hydroelectric power.",
    example:
      "Renewable energy development is crucial for reducing dependence on fossil fuels.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Clean energy expansion",
      "Sustainable power growth",
      "Green energy development",
    ],
    pronunciation: "/rɪˈnuəbəl ˈenərdʒi dɪˈveləpmənt/",
  },
  {
    term: "Marine Animals Extinction",
    definition:
      "The permanent loss of ocean species due to pollution, climate change, and human activities.",
    example:
      "Plastic pollution is contributing to marine animals extinction in many ocean regions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Ocean species loss",
      "Sea life extinction",
      "Marine biodiversity loss",
    ],
    pronunciation: "/məˈrin ˈænəməlz ɪkˈstɪŋkʃən/",
  },
  {
    term: "Dust Storms",
    definition:
      "Severe weather events where strong winds carry large amounts of sand and dust particles.",
    example:
      "Climate change has increased the frequency and intensity of dust storms globally.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Sandstorms", "Dust devils", "Haboobs"],
    pronunciation: "/dʌst stɔrmz/",
  },
  {
    term: "Crop Damage",
    definition:
      "Harm to agricultural plants caused by weather, pests, pollution, or climate change.",
    example:
      "Extreme weather events have caused widespread crop damage, threatening food security.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Agricultural loss", "Farm destruction", "Harvest failure"],
    pronunciation: "/krɑp ˈdæmɪdʒ/",
  },
  {
    term: "Species Extinction",
    definition:
      "The complete disappearance of plant or animal species from Earth.",
    example:
      "Human activities are accelerating species extinction rates to unprecedented levels.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Biodiversity loss",
      "Species disappearance",
      "Wildlife elimination",
    ],
    pronunciation: "/ˈspiʃiz ɪkˈstɪŋkʃən/",
  },
  {
    term: "Reduced Lung Function",
    definition:
      "Decreased breathing capacity often caused by air pollution or respiratory diseases.",
    example:
      "Long-term exposure to polluted air results in reduced lung function among city residents.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Breathing impairment",
      "Respiratory decline",
      "Pulmonary dysfunction",
    ],
    pronunciation: "/rɪˈdust lʌŋ ˈfʌŋkʃən/",
  },
  {
    term: "Building Decay",
    definition:
      "Structural deterioration of buildings and monuments due to pollution and environmental factors.",
    example:
      "Air pollution has accelerated building decay in many historic city centers.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Structural deterioration",
      "Architectural damage",
      "Building degradation",
    ],
    pronunciation: "/ˈbɪldɪŋ dɪˈkeɪ/",
  },
  {
    term: "Lower Reproductive Rates",
    definition:
      "Decreased birth or survival rates in species affected by environmental stress.",
    example:
      "Pollution has caused lower reproductive rates in many bird and fish populations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Reduced fertility",
      "Declining birth rates",
      "Reproduction decline",
    ],
    pronunciation: "/ˈloʊər ˌriprəˈdʌktɪv reɪts/",
  },
  {
    term: "Polluted Cities",
    definition:
      "Urban areas with high levels of air, water, or noise pollution affecting residents' health.",
    example:
      "Many polluted cities are implementing strict environmental regulations to improve air quality.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Contaminated urban areas",
      "Dirty cities",
      "Environmentally damaged cities",
    ],
    pronunciation: "/pəˈlutəd ˈsɪtiz/",
  },
  {
    term: "Ocean Waste",
    definition:
      "Plastic and other debris floating in oceans, harming marine ecosystems.",
    example:
      "Ocean waste has created massive garbage patches that threaten marine biodiversity.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Marine debris", "Sea pollution", "Ocean garbage"],
    pronunciation: "/ˈoʊʃən weɪst/",
  },
  {
    term: "Public Transportation",
    definition:
      "Shared transport systems like buses and trains that reduce individual vehicle emissions.",
    example:
      "Investing in public transportation is essential for reducing urban air pollution.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Mass transit", "Shared transport", "Collective transport"],
    pronunciation: "/ˈpʌblɪk ˌtrænspərˈteɪʃən/",
  },
  {
    term: "Emission Regulations",
    definition:
      "Laws and rules that limit the amount of pollutants released by industries and vehicles.",
    example:
      "Stricter emission regulations have significantly improved air quality in developed countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Pollution laws",
      "Environmental controls",
      "Clean air standards",
    ],
    pronunciation: "/ɪˈmɪʃən ˌreɡjəˈleɪʃənz/",
  },
  {
    term: "Eco-friendly Products",
    definition:
      "Goods designed and manufactured to minimize environmental impact.",
    example:
      "Consumers are increasingly choosing eco-friendly products to reduce their environmental footprint.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Green products",
      "Sustainable goods",
      "Environmentally safe items",
    ],
    pronunciation: "/ˈikoʊ ˈfrendli ˈprɑdʌkts/",
  },
  {
    term: "Global Warming Action",
    definition:
      "Coordinated efforts and policies to address and mitigate climate change effects.",
    example:
      "Global warming action requires cooperation between governments, businesses, and individuals.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Climate action",
      "Environmental response",
      "Climate mitigation",
    ],
    pronunciation: "/ˈɡloʊbəl ˈwɔrmɪŋ ˈækʃən/",
  },
];

const relatedTopics = [
  {
    id: "environment",
    title: "Environment",
    description:
      "Explore climate change impacts and environmental conservation efforts",
    icon: "🌱",
  },
  {
    id: "politics-governance",
    title: "Politics & Governance",
    description:
      "Learn about international relations and global governance systems",
    icon: "🏛️",
  },
];

const studyTips = [
  {
    tip: "UN Examples",
    description:
      "Reference United Nations initiatives, international treaties, or global cooperation examples like Paris Agreement.",
    icon: CheckCircle,
  },
  {
    tip: "Statistical Data",
    description:
      "Mention global statistics about poverty, displacement, or climate impacts to support your arguments.",
    icon: Lightbulb,
  },
  {
    tip: "Solution-Focused",
    description:
      "Discuss both problems and potential solutions, showing awareness of complex global challenges.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "What are the biggest problems facing the world today?",
    tips: "Discuss 'climate migration', 'refugee crisis', 'poverty reduction' needs, and global cooperation challenges.",
  },
  {
    question: "How can countries work together to solve global problems?",
    tips: "Use 'international cooperation', 'sustainable development goals', and examples of successful partnerships.",
  },
  {
    question: "Do you think rich countries should help poor countries?",
    tips: "Address 'poverty reduction', development aid, and moral responsibilities of wealthy nations.",
  },
  {
    question: "What will be the consequences of climate change?",
    tips: "Connect to 'climate migration', 'refugee crisis', and need for 'international cooperation' on solutions.",
  },
];

const globalStatistics = [
  {
    statistic: "689 million",
    description: "People living in extreme poverty worldwide (2017)",
    source: "World Bank",
  },
  {
    statistic: "82.4 million",
    description: "Forcibly displaced people globally (2020)",
    source: "UNHCR",
  },
  {
    statistic: "17 Goals",
    description: "UN Sustainable Development Goals to achieve by 2030",
    source: "United Nations",
  },
];

export default function GlobalIssuesVocabularyPage() {
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
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
            <h1 className="text-4xl font-bold mb-4">
              Global Issues Vocabulary
            </h1>
            <p className="text-xl text-emerald-100 mb-6">
              Advanced global issues vocabulary for IELTS Speaking Band 7-9.
              Master terms related to international development, poverty
              reduction, climate migration, and sustainable development goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                5 Global Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                UN Goals
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                World Statistics
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
              Global Issues Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>5 terms</span>
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
              className="bg-emerald-600 h-2 rounded-full"
              style={{ width: "83.33%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 10 of 12</p>
        </div>

        {/* Global Statistics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Key Global Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {globalStatistics.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="text-3xl font-bold text-emerald-600 mb-2">
                  {stat.statistic}
                </h3>
                <p className="text-gray-700 mb-2">{stat.description}</p>
                <p className="text-sm text-gray-500">Source: {stat.source}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search global issues terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                          <BotIcon className="w-6 h-6 text-emerald-600" />
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
                    <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                      <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-emerald-800 italic">
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
            Common IELTS Global Issues Questions
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
            Using Global Issues Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{tip.tip}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* UN Sustainable Development Goals */}
        <section className="mb-12 bg-emerald-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
            UN Sustainable Development Goals (Key Examples)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-700">
                Goal 1: No Poverty
              </h3>
              <p className="text-sm text-gray-600">
                End poverty in all its forms everywhere
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-700">
                Goal 13: Climate Action
              </h3>
              <p className="text-sm text-gray-600">
                Take urgent action to combat climate change
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-700">
                Goal 16: Peace & Justice
              </h3>
              <p className="text-sm text-gray-600">
                Promote peaceful and inclusive societies
              </p>
            </div>
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
              <Link href="/speaking/vocabulary/media-communication">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Media & Communication
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/travel-holidays">
                Next: Travel & Holidays
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Practice Global Issues Topics
          </h2>
          <p className="text-emerald-100 mb-6">
            Global challenges are frequently discussed in IELTS Speaking Part 3.
            Practice discussing world problems, international cooperation, and
            sustainable solutions.
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
              <Link href="/speaking/vocabulary/travel-holidays">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
