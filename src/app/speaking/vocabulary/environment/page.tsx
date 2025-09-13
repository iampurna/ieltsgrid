import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  TreePine,
  Recycle,
  Sun,
  Heart,
  PiIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Environment Vocabulary for IELTS Speaking | Climate Change & Sustainability",
  description:
    "Master environment vocabulary for IELTS Speaking. Learn advanced terms like sustainability, climate change, renewable energy with examples for Band 7-9.",
  keywords: [
    "IELTS environment vocabulary",
    "sustainability IELTS",
    "climate change vocabulary",
    "renewable energy IELTS",
    "conservation vocabulary",
    "Band 7-9 environment terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Climate Change",
    definition:
      "Long-term changes in global or regional climate patterns, particularly warming caused by increased greenhouse gases.",
    example:
      "Climate change is one of the most pressing issues of our time, requiring immediate global action.",
    partOfSpeech: "Noun phrase",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Global warming", "Climate crisis", "Climate disruption"],
    pronunciation: "/ˈklaɪmət tʃeɪndʒ/",
  },
  {
    term: "Global Warming",
    definition:
      "The long-term increase in Earth's average surface temperature due to human activities and natural factors.",
    example:
      "Global warming has led to rising sea levels and more frequent extreme weather events.",
    partOfSpeech: "Noun phrase",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Climate change", "Planetary heating"],
    pronunciation: "/ˈgloʊbəl ˈwɔrmɪŋ/",
  },
  {
    term: "Greenhouse Effect",
    definition:
      "The process by which radiation from Earth's atmosphere warms the planet's surface.",
    example:
      "The greenhouse effect is natural, but human activities have intensified it dangerously.",
    partOfSpeech: "Noun phrase",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Atmospheric heating", "Heat retention"],
    pronunciation: "/ˈgrinˌhaʊs ɪˈfekt/",
  },
  {
    term: "Greenhouse Gases",
    definition:
      "Gases that trap heat in the atmosphere, including carbon dioxide, methane, and nitrous oxide.",
    example:
      "Reducing greenhouse gases is essential to prevent catastrophic climate change.",
    partOfSpeech: "Noun phrase",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Heat-trapping gases", "Climate gases"],
    pronunciation: "/ˈgrinˌhaʊs ˈgæsəz/",
  },
  {
    term: "Carbon Emissions",
    definition:
      "The release of carbon dioxide and other greenhouse gases into the atmosphere from human activities.",
    example:
      "Governments should implement policies to reduce carbon emissions and achieve net-zero targets.",
    partOfSpeech: "Noun phrase",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["CO2 emissions", "Carbon output", "Greenhouse gas emissions"],
    pronunciation: "/ˈkɑrbən ɪˈmɪʃənz/",
  },
  {
    term: "Carbon Footprint",
    definition:
      "The total amount of greenhouse gases produced directly and indirectly by human activities.",
    example:
      "Many people are trying to reduce their carbon footprint by using public transport more often.",
    partOfSpeech: "Noun phrase",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Environmental impact", "Carbon impact"],
    pronunciation: "/ˈkɑrbən ˈfʊtˌprɪnt/",
  },
  {
    term: "Fossil Fuels",
    definition:
      "Natural fuels formed from the remains of living organisms, including coal, oil, and natural gas.",
    example:
      "The world needs to transition away from fossil fuels to renewable energy sources.",
    partOfSpeech: "Noun phrase",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Non-renewable fuels", "Carbon-based fuels"],
    pronunciation: "/ˈfɑsəl ˈfjuəlz/",
  },
  {
    term: "Extreme Weather",
    definition:
      "Severe or unusual weather conditions that occur more frequently due to climate change.",
    example:
      "Extreme weather events like hurricanes and droughts are becoming more common and intense.",
    partOfSpeech: "Noun phrase",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Severe weather", "Weather extremes"],
    pronunciation: "/ɪkˈstrim ˈweðər/",
  },
  {
    term: "Sea Level Rise",
    definition:
      "The increase in the level of the world's oceans due to climate change effects.",
    example:
      "Sea level rise threatens coastal communities and low-lying island nations worldwide.",
    partOfSpeech: "Noun phrase",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Ocean level increase", "Coastal flooding"],
    pronunciation: "/si ˈlevəl raɪz/",
  },
  {
    term: "Drought",
    definition:
      "A prolonged period of abnormally low rainfall leading to water shortage.",
    example:
      "The severe drought has affected agricultural production and water supplies in the region.",
    partOfSpeech: "Noun",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Water shortage", "Dry spell"],
    pronunciation: "/draʊt/",
  },
  {
    term: "Floods",
    definition:
      "Overflow of water onto normally dry land, often caused by extreme weather.",
    example:
      "Climate change has increased the frequency and severity of floods in many regions.",
    partOfSpeech: "Noun",
    category: "Climate & Weather",
    difficulty: "Intermediate",
    synonyms: ["Flooding", "Inundation"],
    pronunciation: "/flʌdz/",
  },
  {
    term: "Heatwave",
    definition:
      "A period of excessively hot weather that may be accompanied by high humidity.",
    example:
      "The recent heatwave broke temperature records and caused health problems for many people.",
    partOfSpeech: "Noun",
    category: "Climate & Weather",
    difficulty: "Intermediate",
    synonyms: ["Heat spell", "Hot weather"],
    pronunciation: "/ˈhitˌweɪv/",
  },
  {
    term: "Wildfire",
    definition:
      "Large, destructive fires that spread rapidly through vegetation and are often climate-related.",
    example:
      "Wildfires have become more frequent and intense due to rising temperatures and drought conditions.",
    partOfSpeech: "Noun",
    category: "Climate & Weather",
    difficulty: "Intermediate",
    synonyms: ["Forest fire", "Bush fire"],
    pronunciation: "/ˈwaɪldˌfaɪər/",
  },
  {
    term: "Desertification",
    definition:
      "The process by which fertile land becomes desert, typically due to drought or deforestation.",
    example:
      "Desertification threatens agricultural land and forces communities to migrate.",
    partOfSpeech: "Noun",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Land degradation", "Soil erosion"],
    pronunciation: "/dɪˌzɜrtəfəˈkeɪʃən/",
  },
  {
    term: "Acid Rain",
    definition:
      "Rain that has become acidic due to atmospheric pollution, harmful to the environment.",
    example:
      "Acid rain damages forests, lakes, and buildings by making the environment too acidic.",
    partOfSpeech: "Noun phrase",
    category: "Climate & Weather",
    difficulty: "Advanced",
    synonyms: ["Acidic precipitation", "Environmental acid"],
    pronunciation: "/ˈæsɪd reɪn/",
  },

  // POLLUTION (15 terms)
  {
    term: "Air Pollution",
    definition:
      "The contamination of air by harmful substances such as chemicals, particles, or biological materials.",
    example:
      "Air pollution in major cities has reached dangerous levels, affecting public health significantly.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Atmospheric pollution", "Air contamination"],
    pronunciation: "/er pəˈluʃən/",
  },
  {
    term: "Water Pollution",
    definition:
      "The contamination of water bodies by harmful substances, making water unsafe for use.",
    example:
      "Water pollution from industrial waste has made the river unsafe for drinking and swimming.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Water contamination", "Aquatic pollution"],
    pronunciation: "/ˈwɔtər pəˈluʃən/",
  },
  {
    term: "Soil Pollution",
    definition:
      "The contamination of soil by toxic chemicals, making land unsuitable for agriculture.",
    example:
      "Soil pollution from pesticides threatens both crop production and groundwater quality.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Land contamination", "Soil degradation"],
    pronunciation: "/sɔɪl pəˈluʃən/",
  },
  {
    term: "Toxic Waste",
    definition:
      "Poisonous waste material that can cause death, injury, or birth defects.",
    example:
      "Proper disposal of toxic waste is crucial to prevent environmental contamination.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Hazardous waste", "Poisonous waste"],
    pronunciation: "/ˈtɑksɪk weɪst/",
  },
  {
    term: "Industrial Pollution",
    definition:
      "Environmental contamination caused by industrial activities and manufacturing processes.",
    example:
      "Industrial pollution has severely damaged the ecosystem around the manufacturing plant.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Manufacturing pollution", "Factory pollution"],
    pronunciation: "/ɪnˈdʌstriəl pəˈluʃən/",
  },
  {
    term: "Chemical Contamination",
    definition:
      "The presence of toxic chemicals in the environment at harmful levels.",
    example:
      "Chemical contamination of groundwater poses serious health risks to local communities.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Chemical pollution", "Toxic contamination"],
    pronunciation: "/ˈkemɪkəl kənˌtæməˈneɪʃən/",
  },
  {
    term: "Smog",
    definition:
      "A mixture of smoke and fog, especially found in industrial cities.",
    example:
      "Dense smog often blankets the city during winter months, reducing visibility significantly.",
    partOfSpeech: "Noun",
    category: "Pollution",
    difficulty: "Intermediate",
    synonyms: ["Haze", "Air fog"],
    pronunciation: "/smɔg/",
  },
  {
    term: "Particulate Matter",
    definition:
      "Tiny particles suspended in the air that can be harmful when inhaled.",
    example:
      "High levels of particulate matter in the atmosphere contribute to respiratory diseases.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["PM particles", "Airborne particles"],
    pronunciation: "/pərˈtɪkjələt ˈmætər/",
  },
  {
    term: "Oil Spill",
    definition:
      "The release of liquid petroleum into the environment, especially marine areas.",
    example:
      "The massive oil spill devastated marine life and coastal ecosystems for years.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Intermediate",
    synonyms: ["Petroleum leak", "Oil discharge"],
    pronunciation: "/ɔɪl spɪl/",
  },
  {
    term: "Plastic Pollution",
    definition:
      "The accumulation of plastic products in the environment that adversely affects wildlife.",
    example:
      "Plastic pollution in oceans is killing marine animals and contaminating the food chain.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Plastic contamination", "Plastic waste"],
    pronunciation: "/ˈplæstɪk pəˈluʃən/",
  },
  {
    term: "Noise Pollution",
    definition: "Harmful or annoying levels of noise in the environment.",
    example:
      "Noise pollution from traffic and construction affects people's sleep and mental health.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Intermediate",
    synonyms: ["Sound pollution", "Acoustic pollution"],
    pronunciation: "/nɔɪz pəˈluʃən/",
  },
  {
    term: "Light Pollution",
    definition:
      "Excessive artificial light that disrupts ecosystems and human health.",
    example:
      "Light pollution in cities prevents people from seeing stars and disrupts wildlife patterns.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Artificial lighting", "Sky glow"],
    pronunciation: "/laɪt pəˈluʃən/",
  },
  {
    term: "Radioactive Contamination",
    definition: "The presence of radioactive substances in the environment.",
    example:
      "Radioactive contamination from the nuclear accident affected the surrounding area for decades.",
    partOfSpeech: "Noun phrase",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Nuclear contamination", "Radiation pollution"],
    pronunciation: "/ˌreɪdioʊˈæktɪv kənˌtæməˈneɪʃən/",
  },
  {
    term: "Emissions",
    definition:
      "The production and discharge of something, especially gas or radiation.",
    example:
      "Vehicle emissions are a major contributor to urban air pollution problems.",
    partOfSpeech: "Noun",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Discharge", "Release"],
    pronunciation: "/ɪˈmɪʃənz/",
  },
  {
    term: "Contamination",
    definition:
      "The action or state of making something impure by exposure to poisonous substances.",
    example:
      "Soil contamination from pesticides threatens both human health and environmental safety.",
    partOfSpeech: "Noun",
    category: "Pollution",
    difficulty: "Advanced",
    synonyms: ["Pollution", "Taint"],
    pronunciation: "/kənˌtæməˈneɪʃən/",
  },

  // ENERGY & SUSTAINABILITY (20 terms)
  {
    term: "Renewable Energy",
    definition:
      "Energy from sources that are naturally replenishing, such as solar, wind, and hydroelectric power.",
    example:
      "Investing in renewable energy reduces dependency on fossil fuels and helps combat climate change.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Clean energy", "Green energy", "Sustainable energy"],
    pronunciation: "/rɪˈnuəbəl ˈenərdʒi/",
  },
  {
    term: "Solar Energy",
    definition:
      "Energy derived from the sun's radiation, converted into electricity or heat.",
    example:
      "Solar energy installations have become more affordable and efficient in recent years.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Solar power", "Photovoltaic energy"],
    pronunciation: "/ˈsoʊlər ˈenərdʒi/",
  },
  {
    term: "Wind Energy",
    definition:
      "Electrical power generated from wind using turbines to convert kinetic energy.",
    example:
      "Wind energy farms are being built offshore to capture stronger and more consistent winds.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Wind power", "Aeolian energy"],
    pronunciation: "/wɪnd ˈenərdʒi/",
  },
  {
    term: "Hydroelectric Power",
    definition:
      "Electricity generated by harnessing the energy of moving water.",
    example:
      "Hydroelectric power provides clean energy but can impact river ecosystems and fish migration.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Hydropower", "Water energy"],
    pronunciation: "/ˌhaɪdroʊɪˈlektrɪk ˈpaʊər/",
  },
  {
    term: "Geothermal Energy",
    definition: "Energy generated from heat stored beneath Earth's surface.",
    example:
      "Geothermal energy is particularly effective in volcanic regions with high underground temperatures.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Earth energy", "Ground heat"],
    pronunciation: "/ˌdʒioʊˈθɜrməl ˈenərdʒi/",
  },
  {
    term: "Nuclear Energy",
    definition:
      "Energy released from nuclear reactions, used to generate electricity.",
    example:
      "Nuclear energy produces large amounts of power but creates radioactive waste management challenges.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Atomic energy", "Nuclear power"],
    pronunciation: "/ˈnukliər ˈenərdʒi/",
  },
  {
    term: "Energy Efficiency",
    definition: "Using less energy to provide the same service or output.",
    example:
      "Improving energy efficiency in buildings can significantly reduce electricity consumption and costs.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Energy conservation", "Power efficiency"],
    pronunciation: "/ˈenərdʒi ɪˈfɪʃənsi/",
  },
  {
    term: "Sustainability",
    definition:
      "Meeting present needs without compromising future generations' ability to meet their needs.",
    example:
      "Sustainability should be at the core of all business operations to ensure long-term environmental protection.",
    partOfSpeech: "Noun",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Environmental responsibility", "Ecological balance"],
    pronunciation: "/səˌsteɪnəˈbɪləti/",
  },
  {
    term: "Carbon Neutral",
    definition:
      "Achieving net-zero carbon dioxide emissions by balancing emissions with removal.",
    example:
      "Many companies are committed to becoming carbon neutral by 2030 through various environmental initiatives.",
    partOfSpeech: "Adjective",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Net-zero carbon", "Climate neutral"],
    pronunciation: "/ˈkɑrbən ˈnutrəl/",
  },
  {
    term: "Green Technology",
    definition:
      "Technology designed to reduce environmental impact and promote sustainability.",
    example:
      "Green technology innovations are essential for addressing climate change and reducing pollution.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Clean technology", "Environmental technology"],
    pronunciation: "/grin tekˈnɑlədʒi/",
  },
  {
    term: "Eco-friendly",
    definition: "Not harmful to the environment; environmentally friendly.",
    example:
      "Consumers are increasingly choosing eco-friendly products to reduce their environmental impact.",
    partOfSpeech: "Adjective",
    category: "Energy & Sustainability",
    difficulty: "Intermediate",
    synonyms: ["Environmentally friendly", "Green"],
    pronunciation: "/ˈikoʊ ˈfrendli/",
  },
  {
    term: "Recycling",
    definition:
      "Converting waste materials into reusable materials to prevent waste and reduce consumption.",
    example:
      "Recycling programs help reduce landfill waste and conserve natural resources effectively.",
    partOfSpeech: "Noun",
    category: "Energy & Sustainability",
    difficulty: "Intermediate",
    synonyms: ["Reprocessing", "Material recovery"],
    pronunciation: "/riˈsaɪklɪŋ/",
  },
  {
    term: "Circular Economy",
    definition:
      "An economic model aimed at eliminating waste through reuse, recycling, and regeneration.",
    example:
      "The circular economy approach reduces waste by keeping materials in use for as long as possible.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Closed-loop economy", "Regenerative economy"],
    pronunciation: "/ˈsɜrkjələr ɪˈkɑnəmi/",
  },
  {
    term: "Biodegradable",
    definition:
      "Capable of being decomposed by bacteria or other living organisms.",
    example:
      "Biodegradable packaging materials help reduce long-term environmental pollution significantly.",
    partOfSpeech: "Adjective",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Decomposable", "Environmentally degradable"],
    pronunciation: "/ˌbaɪoʊdɪˈgreɪdəbəl/",
  },
  {
    term: "Composting",
    definition:
      "The process of recycling organic matter into a rich soil conditioner.",
    example:
      "Home composting reduces food waste while creating nutrient-rich soil for gardens.",
    partOfSpeech: "Noun",
    category: "Energy & Sustainability",
    difficulty: "Intermediate",
    synonyms: ["Organic recycling", "Decomposition"],
    pronunciation: "/ˈkɑmpoʊstɪŋ/",
  },
  {
    term: "Zero Waste",
    definition:
      "A philosophy and practice aimed at eliminating all waste sent to landfills.",
    example:
      "The zero waste movement encourages people to refuse, reduce, reuse, and recycle materials.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Waste elimination", "No waste"],
    pronunciation: "/ˈzɪroʊ weɪst/",
  },
  {
    term: "Green Building",
    definition:
      "Construction practice that uses environmentally responsible and resource-efficient processes.",
    example:
      "Green building techniques incorporate energy efficiency, water conservation, and sustainable materials.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Sustainable construction", "Eco-building"],
    pronunciation: "/grin ˈbɪldɪŋ/",
  },
  {
    term: "Carbon Sequestration",
    definition:
      "The process of capturing and storing atmospheric carbon dioxide.",
    example:
      "Carbon sequestration through reforestation helps remove CO2 from the atmosphere naturally.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Carbon capture", "CO2 storage"],
    pronunciation: "/ˈkɑrbən ˌsikwəˈstreɪʃən/",
  },
  {
    term: "Life Cycle Assessment",
    definition:
      "Analysis of environmental impacts of a product throughout its entire life cycle.",
    example:
      "Life cycle assessment helps companies understand the full environmental cost of their products.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Environmental assessment", "Cradle-to-grave analysis"],
    pronunciation: "/laɪf ˈsaɪkəl əˈsesmənt/",
  },
  {
    term: "Environmental Footprint",
    definition:
      "The impact of a person or organization on the environment through resource consumption.",
    example:
      "Reducing your environmental footprint involves conscious choices about consumption and waste.",
    partOfSpeech: "Noun phrase",
    category: "Energy & Sustainability",
    difficulty: "Advanced",
    synonyms: ["Ecological footprint", "Environmental impact"],
    pronunciation: "/ɪnˌvaɪrənˈmentəl ˈfʊtˌprɪnt/",
  },

  // BIODIVERSITY & CONSERVATION (25 terms)
  {
    term: "Biodiversity",
    definition:
      "The variety of life in the world or in a particular habitat, encompassing species diversity.",
    example:
      "Protecting biodiversity is essential for maintaining healthy ecosystems and ensuring species survival.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Biological diversity", "Ecological variety"],
    pronunciation: "/ˌbaɪoʊdaɪˈvɜrsəti/",
  },
  {
    term: "Conservation",
    definition:
      "The protection, preservation, and careful management of natural resources and wildlife.",
    example:
      "Conservation efforts help preserve endangered species and maintain the balance of natural ecosystems.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Preservation", "Protection", "Environmental stewardship"],
    pronunciation: "/ˌkɑnsərˈveɪʃən/",
  },
  {
    term: "Ecosystem",
    definition:
      "A community of living organisms interacting with their physical environment.",
    example:
      "The rainforest ecosystem supports incredible biodiversity and plays a crucial role in global climate regulation.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Biome", "Environmental system"],
    pronunciation: "/ˈikoʊˌsɪstəm/",
  },
  {
    term: "Habitat",
    definition:
      "The natural environment where an organism lives and meets its needs for survival.",
    example:
      "Habitat destruction is the primary threat to wildlife populations worldwide.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Natural environment", "Living space"],
    pronunciation: "/ˈhæbəˌtæt/",
  },
  {
    term: "Endangered Species",
    definition:
      "Species at risk of extinction due to very small population or habitat loss.",
    example:
      "Many endangered species could be saved through dedicated conservation programs and habitat protection.",
    partOfSpeech: "Noun phrase",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Threatened species", "At-risk species"],
    pronunciation: "/ɪnˈdeɪndʒərd ˈspiʃiz/",
  },
  {
    term: "Extinction",
    definition: "The complete disappearance of a species from Earth.",
    example:
      "Climate change and habitat loss are accelerating the rate of species extinction globally.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Species loss", "Biological termination"],
    pronunciation: "/ɪkˈstɪŋkʃən/",
  },
  {
    term: "Deforestation",
    definition:
      "The permanent removal of trees and forest cover, typically for agriculture or development.",
    example:
      "Deforestation contributes significantly to biodiversity loss and increases atmospheric carbon dioxide levels.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Forest clearance", "Tree removal"],
    pronunciation: "/ˌdifɔrɪˈsteɪʃən/",
  },
  {
    term: "Reforestation",
    definition:
      "The process of replanting trees in areas where forests have been cut down.",
    example:
      "Reforestation projects help restore ecosystems and combat climate change effectively.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Forest restoration", "Tree replanting"],
    pronunciation: "/riˌfɔrɪˈsteɪʃən/",
  },
  {
    term: "Afforestation",
    definition: "Creating forests in areas that were not previously forested.",
    example:
      "Afforestation programs can help increase carbon absorption and create new wildlife habitats.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Forest creation", "New forest development"],
    pronunciation: "/æˌfɔrɪˈsteɪʃən/",
  },
  {
    term: "Protected Area",
    definition:
      "Land or water designated to protect natural or cultural resources.",
    example:
      "Protected areas serve as refuges for wildlife and preserve important ecosystems for future generations.",
    partOfSpeech: "Noun phrase",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Nature reserve", "Conservation area"],
    pronunciation: "/prəˈtektəd ˈeriə/",
  },
  {
    term: "Wildlife Corridor",
    definition:
      "Protected strips of habitat connecting separated populations of wildlife.",
    example:
      "Wildlife corridors allow animals to migrate safely between protected areas and find mates.",
    partOfSpeech: "Noun phrase",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Habitat corridor", "Ecological corridor"],
    pronunciation: "/ˈwaɪldˌlaɪf ˈkɔrəˌdɔr/",
  },
  {
    term: "Poaching",
    definition:
      "Illegal hunting or capturing of wild animals, often for commercial purposes.",
    example:
      "Poaching threatens many species, particularly elephants hunted for ivory and rhinos for their horns.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Illegal hunting", "Wildlife trafficking"],
    pronunciation: "/ˈpoʊtʃɪŋ/",
  },
  {
    term: "Invasive Species",
    definition:
      "Non-native species that harm native ecosystems when introduced to new environments.",
    example:
      "Invasive species can outcompete native plants and animals, disrupting established ecological balance.",
    partOfSpeech: "Noun phrase",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Non-native species", "Introduced species"],
    pronunciation: "/ɪnˈveɪsɪv ˈspiʃiz/",
  },
  {
    term: "Endemic Species",
    definition:
      "Species that are native and restricted to a particular geographic area.",
    example:
      "Madagascar has many endemic species that exist nowhere else in the world.",
    partOfSpeech: "Noun phrase",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Native species", "Indigenous species"],
    pronunciation: "/ɛnˈdemɪk ˈspiʃiz/",
  },
  {
    term: "Migration",
    definition:
      "Seasonal movement of animals from one region to another for feeding or breeding.",
    example:
      "Bird migration patterns are changing due to climate change and habitat loss.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Animal movement", "Seasonal travel"],
    pronunciation: "/maɪˈgreɪʃən/",
  },
  {
    term: "Keystone Species",
    definition:
      "Species that play a crucial role in maintaining ecosystem structure and function.",
    example:
      "Wolves are a keystone species because they control deer populations and maintain forest health.",
    partOfSpeech: "Noun phrase",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Critical species", "Ecosystem engineers"],
    pronunciation: "/ˈkiˌstoʊn ˈspiʃiz/",
  },
  {
    term: "Food Chain",
    definition:
      "The sequence of organisms through which nutrients and energy pass in an ecosystem.",
    example:
      "Disrupting any part of the food chain can have cascading effects throughout the entire ecosystem.",
    partOfSpeech: "Noun phrase",
    category: "Biodiversity & Conservation",
    difficulty: "Intermediate",
    synonyms: ["Feeding sequence", "Trophic chain"],
    pronunciation: "/fud tʃeɪn/",
  },
  {
    term: "Predator",
    definition: "An organism that hunts and kills other organisms for food.",
    example:
      "Predators help maintain ecosystem balance by controlling prey populations naturally.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Intermediate",
    synonyms: ["Hunter", "Carnivore"],
    pronunciation: "/ˈpredətər/",
  },
  {
    term: "Prey",
    definition: "Animals that are hunted and killed by other animals for food.",
    example:
      "Prey species have evolved various adaptations to avoid predators and survive.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Intermediate",
    synonyms: ["Hunted animals", "Target species"],
    pronunciation: "/preɪ/",
  },
  {
    term: "Symbiosis",
    definition:
      "A close, long-term biological interaction between two different species.",
    example:
      "The symbiosis between bees and flowers benefits both species through pollination and nectar provision.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Mutual relationship", "Biological partnership"],
    pronunciation: "/ˌsɪmbaɪˈoʊsəs/",
  },
  {
    term: "Pollination",
    definition:
      "The transfer of pollen from male to female parts of flowers, enabling plant reproduction.",
    example:
      "Bee pollination is essential for agricultural crops and maintaining plant biodiversity.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Plant fertilization", "Pollen transfer"],
    pronunciation: "/ˌpɑləˈneɪʃən/",
  },
  {
    term: "Adaptation",
    definition:
      "The process by which organisms develop characteristics that help them survive in their environment.",
    example:
      "Climate change is forcing many species to develop new adaptations or face extinction.",
    partOfSpeech: "Noun",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Evolution", "Environmental adjustment"],
    pronunciation: "/ˌædæpˈteɪʃən/",
  },
  {
    term: "Genetic Diversity",
    definition: "The variety of genes within a species population.",
    example:
      "Genetic diversity is crucial for species survival and adaptation to environmental changes.",
    partOfSpeech: "Noun phrase",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Genetic variation", "Gene pool diversity"],
    pronunciation: "/dʒəˈnetɪk daɪˈvɜrsəti/",
  },
  {
    term: "Breeding Program",
    definition:
      "Conservation efforts to increase population of endangered species through controlled reproduction.",
    example:
      "The giant panda breeding program has successfully increased the species' population in captivity.",
    partOfSpeech: "Noun phrase",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Captive breeding", "Conservation breeding"],
    pronunciation: "/ˈbridɪŋ ˈproʊgræm/",
  },
  {
    term: "Restoration Ecology",
    definition:
      "The science of restoring degraded ecosystems to their natural state.",
    example:
      "Restoration ecology combines scientific research with practical conservation efforts to heal damaged environments.",
    partOfSpeech: "Noun phrase",
    category: "Biodiversity & Conservation",
    difficulty: "Advanced",
    synonyms: ["Ecosystem restoration", "Environmental rehabilitation"],
    pronunciation: "/ˌrestərˈeɪʃən ɪˈkɑlədʒi/",
  },

  // ENVIRONMENTAL PROBLEMS (15 terms)
  {
    term: "Environmental Degradation",
    definition:
      "The deterioration of the environment through depletion of resources and destruction of ecosystems.",
    example:
      "Environmental degradation threatens human health and the survival of countless species worldwide.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Environmental deterioration", "Ecological damage"],
    pronunciation: "/ɪnˌvaɪrənˈmentəl ˌdegrəˈdeɪʃən/",
  },
  {
    term: "Ozone Depletion",
    definition:
      "The thinning of the ozone layer in Earth's atmosphere, allowing harmful UV radiation.",
    example:
      "Ozone depletion was successfully addressed through international cooperation and chemical bans.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Ozone layer thinning", "Stratospheric damage"],
    pronunciation: "/ˈoʊzoʊn dɪˈpliʃən/",
  },
  {
    term: "Environmental Disaster",
    definition:
      "A catastrophic event causing widespread damage to the natural environment.",
    example:
      "The oil spill was an environmental disaster that affected marine life for decades.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Ecological catastrophe", "Environmental catastrophe"],
    pronunciation: "/ɪnˌvaɪrənˈmentəl dɪˈzæstər/",
  },
  {
    term: "Overpopulation",
    definition:
      "When a population exceeds the carrying capacity of its environment.",
    example:
      "Human overpopulation puts tremendous pressure on natural resources and environmental systems.",
    partOfSpeech: "Noun",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Population excess", "Demographic pressure"],
    pronunciation: "/ˌoʊvərˌpɑpjəˈleɪʃən/",
  },
  {
    term: "Resource Depletion",
    definition:
      "The consumption of natural resources faster than they can be replenished.",
    example:
      "Resource depletion threatens future generations' access to essential materials and energy sources.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Resource exhaustion", "Natural resource decline"],
    pronunciation: "/ˈrisɔrs dɪˈpliʃən/",
  },
  {
    term: "Habitat Fragmentation",
    definition:
      "The division of large, continuous habitats into smaller, isolated patches.",
    example:
      "Habitat fragmentation from urban development isolates animal populations and reduces biodiversity.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Habitat division", "Ecosystem fragmentation"],
    pronunciation: "/ˈhæbəˌtæt ˌfrægmənˈteɪʃən/",
  },
  {
    term: "Urban Heat Island",
    definition:
      "Urban areas that are significantly warmer than their rural surroundings.",
    example:
      "The urban heat island effect makes cities uncomfortably hot and increases energy consumption.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["City heat effect", "Urban warming"],
    pronunciation: "/ˈɜrbən hit ˈaɪlənd/",
  },
  {
    term: "Soil Erosion",
    definition:
      "The removal of topsoil by wind or water, reducing agricultural productivity.",
    example:
      "Soil erosion caused by intensive farming practices threatens food security worldwide.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Land degradation", "Topsoil loss"],
    pronunciation: "/sɔɪl ɪˈroʊʒən/",
  },
  {
    term: "Water Scarcity",
    definition:
      "The lack of sufficient available water resources to meet regional demands.",
    example:
      "Water scarcity affects billions of people and is worsening due to climate change.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Water shortage", "Water stress"],
    pronunciation: "/ˈwɔtər ˈskɛrsəti/",
  },
  {
    term: "Overfishing",
    definition:
      "Catching fish faster than they can reproduce, depleting fish populations.",
    example:
      "Overfishing has collapsed many fish stocks and threatens marine ecosystem stability.",
    partOfSpeech: "Noun",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Fish depletion", "Marine overexploitation"],
    pronunciation: "/ˈoʊvərˌfɪʃɪŋ/",
  },
  {
    term: "Agricultural Runoff",
    definition:
      "Water pollution caused by fertilizers and pesticides flowing from farmland into water bodies.",
    example:
      "Agricultural runoff creates dead zones in rivers and oceans where nothing can survive.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Farm pollution", "Agricultural contamination"],
    pronunciation: "/ˌægrɪˈkʌltʃərəl ˈrʌnˌɔf/",
  },
  {
    term: "Landfill",
    definition:
      "Sites where waste is buried in the ground, potentially causing soil and water contamination.",
    example:
      "Traditional landfills are running out of space and contaminating groundwater with toxic chemicals.",
    partOfSpeech: "Noun",
    category: "Environmental Problems",
    difficulty: "Intermediate",
    synonyms: ["Waste dump", "Garbage site"],
    pronunciation: "/ˈlændfɪl/",
  },
  {
    term: "Electronic Waste",
    definition:
      "Discarded electronic devices and components that contain toxic materials.",
    example:
      "Electronic waste is growing rapidly as people frequently upgrade phones and computers.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["E-waste", "Digital waste"],
    pronunciation: "/ɪlekˈtrɑnɪk weɪst/",
  },
  {
    term: "Microplastics",
    definition:
      "Tiny plastic particles that contaminate water sources and enter the food chain.",
    example:
      "Microplastics have been found in drinking water, seafood, and even human blood samples.",
    partOfSpeech: "Noun",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Plastic particles", "Tiny plastics"],
    pronunciation: "/ˈmaɪkroʊˌplæstɪks/",
  },
  {
    term: "Coral Bleaching",
    definition:
      "The loss of symbiotic algae from coral due to stress, often from rising water temperatures.",
    example:
      "Coral bleaching events are becoming more frequent and severe due to ocean warming.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Problems",
    difficulty: "Advanced",
    synonyms: ["Coral death", "Reef degradation"],
    pronunciation: "/ˈkɔrəl ˈblitʃɪŋ/",
  },

  // ENVIRONMENTAL SOLUTIONS (10+ terms)
  {
    term: "Environmental Policy",
    definition:
      "Government regulations and laws designed to protect the environment.",
    example:
      "Strong environmental policy is essential for addressing climate change and protecting natural resources.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Solutions",
    difficulty: "Advanced",
    synonyms: ["Environmental regulation", "Green policy"],
    pronunciation: "/ɪnˌvaɪrənˈmentəl ˈpɑləsi/",
  },
  {
    term: "Carbon Tax",
    definition:
      "A tax imposed on the carbon content of fossil fuels to reduce emissions.",
    example:
      "The carbon tax incentivizes businesses to reduce their greenhouse gas emissions.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Solutions",
    difficulty: "Advanced",
    synonyms: ["Carbon pricing", "Emission tax"],
    pronunciation: "/ˈkɑrbən tæks/",
  },
  {
    term: "Cap and Trade",
    definition:
      "An environmental policy tool that sets limits on emissions and allows trading of permits.",
    example:
      "The cap and trade system has successfully reduced sulfur dioxide emissions from power plants.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Solutions",
    difficulty: "Advanced",
    synonyms: ["Emissions trading", "Carbon market"],
    pronunciation: "/kæp ənd treɪd/",
  },
  {
    term: "Environmental Education",
    definition:
      "Teaching people about environmental issues and sustainable practices.",
    example:
      "Environmental education in schools helps create environmentally conscious future citizens.",
    partOfSpeech: "Noun phrase",
    category: "Environmental Solutions",
    difficulty: "Advanced",
    synonyms: ["Ecology education", "Green education"],
    pronunciation: "/ɪnˌvaɪrənˈmentəl ˌedʒuˈkeɪʃən/",
  },
  {
    term: "Sustainability",
    definition:
      "The practice of using resources in a way that meets current needs without compromising the ability of future generations to meet their own needs.",
    example:
      "Sustainability should be at the core of all business operations today to ensure long-term environmental protection.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Environmental responsibility", "Ecological balance"],
    pronunciation: "/səˌsteɪnəˈbɪləti/",
    icon: Recycle,
  },
  {
    term: "Climate Change",
    definition:
      "Long-term changes in global or regional climate patterns, particularly the warming that has occurred since the mid-20th century due to increased levels of greenhouse gases.",
    example:
      "Climate change is one of the most pressing issues of our time, requiring immediate global action.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Global warming", "Climate crisis"],
    pronunciation: "/ˈklaɪmət tʃeɪndʒ/",
    icon: Heart,
  },
  {
    term: "Renewable Energy",
    definition:
      "Energy that comes from natural sources that are constantly replenished, such as solar, wind, hydroelectric, and geothermal power.",
    example:
      "Investing in renewable energy reduces dependency on fossil fuels and helps combat climate change.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Clean energy", "Green energy", "Sustainable energy"],
    pronunciation: "/rɪˈnuːəbəl ˈenərdʒi/",
    icon: Sun,
  },
  {
    term: "Deforestation",
    definition:
      "The permanent removal of trees and forest cover, typically to clear land for agriculture, urban development, or logging.",
    example:
      "Deforestation contributes significantly to the loss of biodiversity and increases carbon dioxide levels in the atmosphere.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Forest clearance", "Tree removal"],
    pronunciation: "/ˌdiːfɔːrɪˈsteɪʃən/",
    icon: TreePine,
  },
  {
    term: "Biodiversity",
    definition:
      "The variety of life in the world or in a particular habitat, encompassing the diversity of species, ecosystems, and genetic variation within species.",
    example:
      "Protecting biodiversity is essential for maintaining a healthy ecosystem and ensuring the survival of all species.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Biological diversity", "Ecological variety"],
    pronunciation: "/ˌbaɪoʊdaɪˈvɜːrsəti/",
    icon: Heart,
  },
  {
    term: "Conservation",
    definition:
      "The protection, preservation, and careful management of natural resources and wildlife to prevent their depletion or extinction.",
    example:
      "Conservation efforts help preserve endangered species and maintain the balance of natural ecosystems.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Preservation", "Protection", "Environmental stewardship"],
    pronunciation: "/ˌkɑːnsərˈveɪʃən/",
    icon: TreePine,
  },
  {
    term: "Carbon Emissions",
    definition:
      "The release of carbon dioxide and other greenhouse gases into the atmosphere, primarily from burning fossil fuels and industrial processes.",
    example:
      "Governments should implement policies to reduce carbon emissions and achieve net-zero targets by 2050.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Greenhouse gas emissions", "Carbon footprint"],
    pronunciation: "/ˈkɑːrbən ɪˈmɪʃənz/",
    icon: Heart,
  },
];

const relatedTopics = [
  {
    id: "global-issues",
    title: "Global Issues",
    description: "Explore international challenges and sustainable development",
    icon: "🌍",
  },
  {
    id: "science-innovation",
    title: "Science & Innovation",
    description: "Learn about environmental research and green technology",
    icon: "🔬",
  },
];

const studyTips = [
  {
    tip: "Current Events",
    description:
      "Reference recent environmental news, agreements, or initiatives when using these terms.",
    icon: CheckCircle,
  },
  {
    tip: "Personal Actions",
    description:
      "Discuss what individuals can do to help the environment using these vocabulary terms.",
    icon: Lightbulb,
  },
  {
    tip: "Government Policies",
    description:
      "Talk about what governments should do to address environmental challenges.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "What environmental problems does your country face?",
    tips: "Use terms like 'pollution', 'deforestation', 'carbon emissions' to describe specific issues.",
  },
  {
    question: "How can individuals help protect the environment?",
    tips: "Discuss 'conservation', 'renewable energy', and 'sustainability' in daily life.",
  },
  {
    question: "Do you think climate change is a serious problem?",
    tips: "Reference 'biodiversity loss', 'global warming effects', and need for action.",
  },
];

export default function EnvironmentVocabularyPage() {
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
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl font-bold mb-4">Environment Vocabulary</h1>
            <p className="text-xl text-green-100 mb-6">
              Advanced environment vocabulary for IELTS Speaking Band 7-9.
              Master terms related to sustainability, climate change,
              conservation, and environmental protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                7 Advanced Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                IELTS Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Current Topics
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
              Environment Terms
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
              className="bg-green-600 h-2 rounded-full"
              style={{ width: "16.66%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 2 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search environment terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                          <PiIcon className="w-6 h-6 text-green-600" />
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
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-green-800 italic">"{vocab.example}"</p>
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
            Common IELTS Environment Questions
          </h2>
          <div className="space-y-4">
            {commonQuestions.map((q, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  "{q.question}"
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Vocabulary Tip:</strong> {q.tips}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How to Use Environment Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-green-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/technology">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Technology
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/education">
                Next: Education
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Practice Environment Topics
          </h2>
          <p className="text-green-100 mb-6">
            Environment is a common IELTS topic. Practice discussing climate
            change, pollution, and conservation using these advanced terms.
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
              <Link href="/speaking/vocabulary/education">Next Topic</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
