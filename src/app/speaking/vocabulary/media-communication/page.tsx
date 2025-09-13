// src/app/speaking/vocabulary/media-communication/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Smartphone,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Radio,
  Tv,
  Wifi,
  AlertTriangle,
  Globe2,
  BotIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Media & Communication Vocabulary for IELTS Speaking | Digital & Social Media Terms",
  description:
    "Master media and communication vocabulary for IELTS Speaking. Learn advanced terms like social media influence, digital journalism, misinformation with examples for Band 7-9.",
  keywords: [
    "IELTS media vocabulary",
    "social media influence IELTS",
    "digital journalism vocabulary",
    "misinformation IELTS",
    "mass communication vocabulary",
    "Band 7-9 media terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Social Media Influence",
    definition:
      "The power of social media platforms to shape public opinion and behavior more than ever before, particularly affecting younger generations and political discourse.",
    example:
      "Social media influence shapes public opinion more than ever before, especially among younger generations who get news from platforms like Instagram and TikTok.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Digital influence", "Online impact", "Platform power"],
    pronunciation: "/ˈsoʊʃəl ˈmidiə ˈɪnfluəns/",
  },
  {
    term: "Digital Journalism",
    definition:
      "News reporting and distribution through digital platforms and online media, allowing news to reach global audiences instantly and democratizing access to information.",
    example:
      "Digital journalism allows news to reach global audiences instantly, transforming how we consume information and making traditional newspapers less relevant.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Online journalism", "Internet news", "Web-based reporting"],
    pronunciation: "/ˈdɪdʒətəl ˈdʒɜrnəˌlɪzəm/",
  },
  {
    term: "Misinformation",
    definition:
      "False or inaccurate information that is spread without malicious intent but can lead to serious societal problems, public health risks, and political confusion.",
    example:
      "Misinformation on social media can lead to serious societal problems, as we saw during the pandemic with false health advice spreading rapidly.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["False information", "Fake news", "Disinformation"],
    pronunciation: "/ˌmɪsɪnfərˈmeɪʃən/",
  },
  {
    term: "Freedom of Expression",
    definition:
      "The fundamental right to express opinions and ideas without fear of government retaliation or censorship, which is essential for a healthy democratic society.",
    example:
      "Freedom of expression is essential for a healthy democracy, but it must be balanced with preventing harmful misinformation from spreading.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Free speech", "Expression rights", "Communication freedom"],
    pronunciation: "/ˈfridəm ʌv ɪkˈsprɛʃən/",
  },
  {
    term: "Mass Communication",
    definition:
      "The process of delivering information, ideas, and entertainment to large audiences through various media channels, helping spread information quickly across large populations.",
    example:
      "Mass communication helps spread information quickly across large populations, making it crucial during emergencies and public health crises.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Broadcasting", "Media transmission", "Public communication"],
    pronunciation: "/mæs kəˌmjunəˈkeɪʃən/",
  },
  {
    term: "Online News",
    definition:
      "The online version of a newspaper that provides digital access to news content through websites and apps.",
    example:
      "More people now read online news than traditional printed newspapers due to convenience and instant updates.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Digital news", "Web-based news", "Internet journalism"],
    pronunciation: "/ˈɔnlaɪn nuz/",
  },
  {
    term: "Broadsheet",
    definition:
      "A newspaper printed on large sheets of paper, typically associated with serious journalism and in-depth reporting.",
    example:
      "The Times is a respected broadsheet known for its comprehensive political coverage and analysis.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Quality newspaper", "Serious newspaper", "Full-size newspaper"],
    pronunciation: "/ˈbrɔdʃit/",
  },
  {
    term: "The Daily",
    definition:
      "A newspaper published every day except Sunday, providing regular news updates to readers.",
    example:
      "I always read the daily to stay informed about current events and local news.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Daily newspaper", "Daily publication", "Morning paper"],
    pronunciation: "/ðə ˈdeɪli/",
  },
  {
    term: "Tabloid",
    definition:
      "A newspaper with fairly small pages, mostly containing stories about famous people and not much serious news.",
    example:
      "Tabloids often focus on celebrity gossip rather than important political or economic issues.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Popular press", "Gossip paper", "Sensational newspaper"],
    pronunciation: "/ˈtæblɔɪd/",
  },
  {
    term: "Weekly Publication",
    definition:
      "A magazine or newspaper that is published once every week on a regular schedule.",
    example:
      "This weekly publication covers business trends and provides market analysis for investors.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Weekly magazine", "Weekly periodical", "Seven-day publication"],
    pronunciation: "/ˈwikli ˌpʌbləˈkeɪʃən/",
  },
  {
    term: "Media Outlet",
    definition:
      "A newspaper, television station, or other organization that publishes news stories and information.",
    example:
      "This media outlet is known for its investigative journalism and unbiased reporting.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["News organization", "Media company", "Press outlet"],
    pronunciation: "/ˈmidiə ˈaʊtlət/",
  },
  {
    term: "Biweekly",
    definition:
      "A magazine or publication that is published twice a month or twice a week.",
    example:
      "The biweekly magazine provides updated technology reviews every two weeks.",
    partOfSpeech: "Adjective/Noun",
    difficulty: "Advanced",
    synonyms: ["Twice-weekly", "Fortnightly", "Semi-weekly"],
    pronunciation: "/baɪˈwikli/",
  },
  {
    term: "Bulletin",
    definition:
      "A magazine or newspaper produced regularly by a club or organization to give information to its members.",
    example:
      "The company bulletin keeps employees informed about policy changes and upcoming events.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Newsletter", "Circular", "Company magazine"],
    pronunciation: "/ˈbʊlətən/",
  },
  {
    term: "Compact",
    definition:
      "A newspaper with fairly small pages that deals with serious news issues, smaller than a broadsheet but more serious than a tabloid.",
    example:
      "The compact format allows serious newspapers to be more portable while maintaining quality journalism.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Mid-size newspaper", "Compact newspaper", "Quality compact"],
    pronunciation: "/ˈkɑmpækt/",
  },
  {
    term: "Fanzine",
    definition:
      "A magazine written for and by fans of a particular interest, hobby, or celebrity.",
    example:
      "The football fanzine is produced by supporters and covers team news from a fan's perspective.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Fan magazine", "Amateur publication", "Hobby magazine"],
    pronunciation: "/ˈfænzin/",
  },
  {
    term: "Heavy",
    definition:
      "Informal term for a serious newspaper that focuses on important news and in-depth analysis.",
    example:
      "I prefer reading the heavies because they provide more detailed political analysis than popular papers.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Quality newspaper", "Serious press", "Broadsheet"],
    pronunciation: "/ˈhɛvi/",
  },
  {
    term: "Circulation",
    definition:
      "The number of copies a newspaper distributes on an average day; some newspapers have a wider circulation than others.",
    example:
      "The newspaper's circulation has declined as more readers switch to digital platforms.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Distribution", "Readership numbers", "Copy sales"],
    pronunciation: "/ˌsɜrkjəˈleɪʃən/",
  },
  {
    term: "Layout",
    definition:
      "The way articles are designed on a page, including the position of pictures, number of columns and size of headlines.",
    example:
      "The magazine's layout is very attractive with colorful images and easy-to-read columns.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Page design", "Format", "Arrangement"],
    pronunciation: "/ˈleɪaʊt/",
  },
  {
    term: "Attention-grabbing",
    definition:
      "A news story which draws public attention and makes people want to read or watch.",
    example:
      "The attention-grabbing headline about the political scandal increased newspaper sales significantly.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Eye-catching", "Compelling", "Striking"],
    pronunciation: "/əˈtɛnʃən ˈgræbɪŋ/",
  },
  {
    term: "Eye-catching",
    definition:
      "A picture or layout which catches a person's eye and draws their attention immediately.",
    example:
      "The magazine uses eye-catching graphics to attract younger readers to serious news topics.",
    partOfSpeech: "Adjective",
    difficulty: "Intermediate",
    synonyms: ["Visually appealing", "Striking", "Attention-grabbing"],
    pronunciation: "/ˈaɪ ˈkætʃɪŋ/",
  },
  {
    term: "In-depth",
    definition:
      "Reporting or analysis that includes many details and thorough investigation of a topic.",
    example:
      "The newspaper published an in-depth investigation into government corruption that took months to research.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Comprehensive", "Detailed", "Thorough"],
    pronunciation: "/ɪn dɛpθ/",
  },
  {
    term: "Sensational News",
    definition:
      "News which causes public excitement or interest, often exaggerated or dramatic in presentation.",
    example:
      "Critics argue that sensational news overshadows important but less exciting political developments.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Dramatic news", "Shocking stories", "Sensationalism"],
    pronunciation: "/sɛnˈseɪʃənəl nuz/",
  },
  {
    term: "Black and White",
    definition:
      "Printed without color, typically referring to traditional newspaper printing methods.",
    example:
      "Many local newspapers are still printed in black and white to reduce printing costs.",
    partOfSpeech: "Adjective phrase",
    difficulty: "Intermediate",
    synonyms: ["Monochrome", "Without color", "Grayscale"],
    pronunciation: "/blæk ænd waɪt/",
  },
  {
    term: "Paparazzi",
    definition:
      "Freelance photographers who follow celebrities to take photographs for sale to newspapers and magazines.",
    example:
      "The paparazzi waited outside the restaurant hoping to photograph the famous actor.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: [
      "Celebrity photographers",
      "Press photographers",
      "Photo journalists",
    ],
    pronunciation: "/ˌpɑpəˈrɑtsi/",
  },
  {
    term: "Front Page",
    definition:
      "The first page of a newspaper, typically featuring the most important news stories of the day.",
    example:
      "The election results made front page news in newspapers around the world.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["First page", "Cover page", "Lead page"],
    pronunciation: "/frʌnt peɪdʒ/",
  },
  {
    term: "Fact-checkers",
    definition:
      "People who check if the newspaper facts and information in an article are correct before publication.",
    example:
      "The newspaper employs experienced fact-checkers to verify information and maintain credibility.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Verifiers", "Information checkers", "Accuracy editors"],
    pronunciation: "/fækt ˈtʃɛkərz/",
  },
  {
    term: "Hot off the Press",
    definition:
      "News that has just been printed and is very recent, referring to breaking news or latest updates.",
    example:
      "The sports results were hot off the press and appeared in the evening edition.",
    partOfSpeech: "Idiom",
    difficulty: "Intermediate",
    synonyms: ["Fresh news", "Latest updates", "Breaking news"],
    pronunciation: "/hɑt ɔf ðə prɛs/",
  },
  {
    term: "Readership",
    definition:
      "The collective readers of a newspaper; some newspapers have a large readership across different demographics.",
    example:
      "The magazine has expanded its readership by covering topics that appeal to younger audiences.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Audience", "Reader base", "Circulation"],
    pronunciation: "/ˈridərʃɪp/",
  },
  {
    term: "Issue",
    definition:
      "An important topic for debate, or a copy of a newspaper or magazine published at a particular time.",
    example:
      "This week's issue of the magazine covers environmental issues affecting our local community.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Edition", "Copy", "Topic"],
    pronunciation: "/ˈɪʃu/",
  },
  {
    term: "Headlines",
    definition:
      "The title of an article, typically written in large letters to grab attention and summarize the story.",
    example:
      "The headlines in today's newspaper focus on the economic crisis and government response.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Title", "Header", "Caption"],
    pronunciation: "/ˈhɛdlaɪnz/",
  },
  {
    term: "Columns",
    definition:
      "Articles printed vertically in the newspaper, or regular sections written by specific journalists.",
    example:
      "The sports columns in this newspaper provide excellent analysis of weekend football matches.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Regular articles", "Opinion pieces", "Sections"],
    pronunciation: "/ˈkɑləmz/",
  },
  {
    term: "Editorial",
    definition:
      "An opinion article written by the editor expressing the newspaper's official viewpoint on current issues.",
    example:
      "Today's editorial argues that the government should invest more money in public transportation.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Opinion piece", "Editor's comment", "Leading article"],
    pronunciation: "/ˌɛdəˈtɔriəl/",
  },
  {
    term: "Comic Strip",
    definition:
      "Cartoons with a message or humor, typically appearing regularly in newspapers and magazines.",
    example:
      "Children often read the comic strip section first before looking at other parts of the newspaper.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Cartoon", "Comic section", "Funny pages"],
    pronunciation: "/ˈkɑmɪk strɪp/",
  },
  {
    term: "Obituaries",
    definition:
      "Notices about recently deceased people, including information about their life and funeral arrangements.",
    example:
      "The obituaries section helps community members learn about the passing of local residents.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Death notices", "Memorial announcements", "Life tributes"],
    pronunciation: "/oʊˈbɪtʃuˌɛriz/",
  },
  {
    term: "Horoscope",
    definition:
      "Zodiac predictions in a paper that claim to forecast future events based on astrological signs.",
    example:
      "Many people read their horoscope daily, though most don't take the predictions seriously.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Astrological forecast", "Zodiac reading", "Star predictions"],
    pronunciation: "/ˈhɔrəskoʊp/",
  },
  {
    term: "Weather Report",
    definition:
      "Forecast for weather conditions, typically including temperature, precipitation, and other meteorological information.",
    example:
      "I always check the weather report before planning outdoor activities for the weekend.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Weather forecast", "Weather update", "Meteorological report"],
    pronunciation: "/ˈwɛðər rəˈpɔrt/",
  },
  {
    term: "Advice Column",
    definition:
      "Reader-submitted questions answered with advice by an expert or experienced columnist.",
    example:
      "The advice column helps readers deal with personal problems and relationship issues.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Help column", "Guidance section", "Problem page"],
    pronunciation: "/ədˈvaɪs ˈkɑləm/",
  },
  {
    term: "Business Section",
    definition:
      "Part of a newspaper dedicated to business news, financial markets, and economic developments.",
    example:
      "The business section provides daily updates on stock markets and corporate earnings reports.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Financial section", "Economic news", "Business pages"],
    pronunciation: "/ˈbɪznəs ˈsɛkʃən/",
  },
  {
    term: "International News",
    definition:
      "World news and global affairs covering events happening in different countries and regions.",
    example:
      "The international news section keeps readers informed about conflicts and developments worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["World news", "Global affairs", "Foreign news"],
    pronunciation: "/ˌɪntərˈnæʃənəl nuz/",
  },
  {
    term: "News Anchor",
    definition:
      "A television or radio presenter who delivers news broadcasts and introduces news stories to viewers.",
    example:
      "The news anchor maintained a calm demeanor while reporting on the natural disaster.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["News presenter", "Broadcaster", "News reader"],
    pronunciation: "/nuz ˈæŋkər/",
  },
  {
    term: "Broadcaster",
    definition:
      "A person or organization that transmits radio or television programs to the public.",
    example:
      "The public broadcaster provides news and educational content without commercial advertisements.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Media company", "Television station", "Radio station"],
    pronunciation: "/ˈbrɔdˌkæstər/",
  },
  {
    term: "Journalist",
    definition:
      "A person who writes for newspapers, magazines, or news websites, or prepares news for radio or television.",
    example:
      "The journalist spent months investigating the corruption scandal before publishing the story.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Reporter", "News writer", "Correspondent"],
    pronunciation: "/ˈdʒɜrnəlɪst/",
  },
  {
    term: "Reporter",
    definition:
      "A person who investigates and writes news stories, often specializing in particular areas or beats.",
    example:
      "The crime reporter arrived at the scene to gather information for tomorrow's newspaper.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Journalist", "News correspondent", "Field reporter"],
    pronunciation: "/rəˈpɔrtər/",
  },
  {
    term: "Columnist",
    definition:
      "A journalist who writes regular articles expressing opinions on particular subjects or current events.",
    example:
      "The political columnist provides weekly analysis of government policies and their implications.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Opinion writer", "Regular contributor", "Commentator"],
    pronunciation: "/ˈkɑləmnɪst/",
  },
  {
    term: "Photojournalist",
    definition:
      "A journalist who primarily uses photographs to tell news stories and document current events.",
    example:
      "The photojournalist captured powerful images of the protest that appeared on the front page.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "News photographer",
      "Documentary photographer",
      "Press photographer",
    ],
    pronunciation: "/ˌfoʊtoʊˈdʒɜrnəlɪst/",
  },
  {
    term: "Unscrupulous Reporters",
    definition:
      "Journalists who use dishonest or unethical methods to gather information or create sensational stories.",
    example:
      "Unscrupulous reporters sometimes invade privacy or distort facts to create more dramatic stories.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Unethical journalists", "Dishonest reporters", "Corrupt media"],
    pronunciation: "/ʌnˈskrupjələs rəˈpɔrtərz/",
  },
  {
    term: "The Gutter Press",
    definition:
      "Tabloids focusing on scandal and gossip rather than serious news, often using sensational methods.",
    example:
      "Critics argue that the gutter press damages public discourse by focusing on celebrity scandals.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Scandal press", "Gossip media", "Sensational tabloids"],
    pronunciation: "/ðə ˈgʌtər prɛs/",
  },
  {
    term: "Yellow Journalism",
    definition:
      "Sensational reporting lacking facts, using exaggerated headlines and biased coverage to attract readers.",
    example:
      "Yellow journalism can mislead the public by presenting opinions as facts and exaggerating minor events.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Sensational journalism",
      "Biased reporting",
      "Tabloid journalism",
    ],
    pronunciation: "/ˈjɛloʊ ˈdʒɜrnəlɪzəm/",
  },
  {
    term: "Information Overload",
    definition:
      "Receiving too much information from various media sources, making it difficult to process or understand.",
    example:
      "In the digital age, many people experience information overload from constant news updates and social media.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Data overwhelm", "News saturation", "Media bombardment"],
    pronunciation: "/ˌɪnfərˈmeɪʃən ˈoʊvərloʊd/",
  },
  {
    term: "Invasion of Privacy",
    definition:
      "Media overstepping boundaries by intruding into people's personal lives without permission.",
    example:
      "Celebrity lawsuits often involve invasion of privacy by photographers and tabloid journalists.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Privacy violation",
      "Personal intrusion",
      "Unauthorized access",
    ],
    pronunciation: "/ɪnˈveɪʒən ʌv ˈpraɪvəsi/",
  },
  {
    term: "A Slow News Day",
    definition:
      "A day with few notable stories or important events happening, leading to less interesting news coverage.",
    example:
      "On a slow news day, newspapers might feature more human interest stories or lifestyle content.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Quiet news day", "Uneventful day", "Light news cycle"],
    pronunciation: "/ə sloʊ nuz deɪ/",
  },
  {
    term: "Breaking News",
    definition:
      "News that is happening right now and is considered urgent or important enough to interrupt regular programming.",
    example:
      "The television station interrupted its regular schedule to broadcast breaking news about the earthquake.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Latest news", "Urgent news", "Live updates"],
    pronunciation: "/ˈbreɪkɪŋ nuz/",
  },
  {
    term: "Press Conference",
    definition:
      "A meeting where officials or celebrities answer questions from journalists and make important announcements.",
    example:
      "The mayor held a press conference to address concerns about the new transportation policy.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Media briefing", "News conference", "Press briefing"],
    pronunciation: "/prɛs ˈkɑnfərəns/",
  },
  {
    term: "Media Bias",
    definition:
      "When news organizations present information in a way that favors particular political views or interests.",
    example:
      "Readers should be aware of potential media bias and read multiple sources to get balanced information.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Press bias", "News slant", "Editorial bias"],
    pronunciation: "/ˈmidiə ˈbaɪəs/",
  },
  {
    term: "Investigative Journalism",
    definition:
      "In-depth reporting that involves extensive research and investigation to uncover important stories or corruption.",
    example:
      "Investigative journalism plays a crucial role in exposing government corruption and corporate wrongdoing.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Investigative reporting",
      "Deep journalism",
      "Research journalism",
    ],
    pronunciation: "/ɪnˈvɛstəˌgeɪtɪv ˈdʒɜrnəlɪzəm/",
  },
  {
    term: "Social Media",
    definition:
      "Digital platforms where people share information, news, and opinions, increasingly important for modern communication.",
    example:
      "Social media has changed how people consume news, with many getting updates through platforms like Twitter and Facebook.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Digital media", "Online platforms", "Social networks"],
    pronunciation: "/ˈsoʊʃəl ˈmidiə/",
  },
  {
    term: "Fake News",
    definition:
      "False or misleading information presented as legitimate news, often spread through social media and unreliable sources.",
    example:
      "The spread of fake news on social media has become a serious concern for democracy and public understanding.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["False information", "Misinformation", "Propaganda"],
    pronunciation: "/feɪk nuz/",
  },
  {
    term: "Digital Media",
    definition:
      "Electronic media that uses digital technology to create, distribute, and access content including news and entertainment.",
    example:
      "Digital media has revolutionized the newspaper industry, forcing traditional publishers to adapt to online formats.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Electronic media", "Online media", "Digital platforms"],
    pronunciation: "/ˈdɪdʒətəl ˈmidiə/",
  },
  {
    term: "Press Freedom",
    definition:
      "The right of journalists and media organizations to report news without government censorship or interference.",
    example:
      "Press freedom is essential for democracy, allowing journalists to hold governments accountable to the public.",
    partOfSheech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Media freedom", "Journalistic freedom", "Free press"],
    pronunciation: "/prɛs ˈfridəm/",
  },
  {
    term: "Censorship",
    definition:
      "The practice of suppressing or controlling information, often by governments or authorities to limit what can be published.",
    example:
      "Many countries practice censorship of news media, preventing journalists from reporting on certain sensitive topics.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Information control",
      "Media suppression",
      "Content restriction",
    ],
    pronunciation: "/ˈsɛnsərʃɪp/",
  },
  {
    term: "Multimedia",
    definition:
      "Content that combines different forms of media such as text, images, audio, and video to tell stories.",
    example:
      "Modern news websites use multimedia presentations to make stories more engaging and informative for readers.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Mixed media", "Multi-format content", "Combined media"],
    pronunciation: "/ˌmʌltiˈmidiə/",
  },
];

const relatedTopics = [
  {
    id: "politics-governance",
    title: "Politics & Governance",
    description:
      "Explore how media influences political processes and democratic participation",
    icon: "🏛️",
  },
  {
    id: "technology",
    title: "Technology",
    description:
      "Learn about digital innovation and technological communication advances",
    icon: "💻",
  },
];

const studyTips = [
  {
    tip: "Current Examples",
    description:
      "Reference recent social media trends, news events, or digital platform changes to support your points.",
    icon: CheckCircle,
  },
  {
    tip: "Media Literacy",
    description:
      "Discuss the importance of critically evaluating information sources and checking facts before sharing.",
    icon: Lightbulb,
  },
  {
    tip: "Global Perspective",
    description:
      "Compare how different countries handle media freedom, censorship, and digital communication policies.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "How has social media changed communication?",
    tips: "Use 'social media influence', 'mass communication', and discuss both positive and negative impacts.",
  },
  {
    question: "Do you think the internet is a reliable source of information?",
    tips: "Address 'misinformation' challenges, 'digital journalism' benefits, and need for fact-checking.",
  },
  {
    question: "Should governments control what people see on the internet?",
    tips: "Balance 'freedom of expression' rights with preventing 'misinformation' and protecting society.",
  },
  {
    question: "How do you get your news and information?",
    tips: "Compare traditional media with 'digital journalism' and discuss reliability of different sources.",
  },
];

export default function MediaCommunicationVocabularyPage() {
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
      <section className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-pink-200" />
            <h1 className="text-4xl font-bold mb-4">
              Media & Communication Vocabulary
            </h1>
            <p className="text-xl text-pink-100 mb-6">
              Advanced media and communication vocabulary for IELTS Speaking
              Band 7-9. Master terms related to digital journalism, social media
              influence, information freedom, and modern communication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                6 Media Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Digital Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Current Issues
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
              Media & Communication Terms
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
              className="bg-pink-600 h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 9 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search media terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
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
                          <BotIcon className="w-6 h-6 text-pink-600" />
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
                    <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                      <h4 className="font-semibold text-pink-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-pink-800 italic">"{vocab.example}"</p>
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
            Common IELTS Media Questions
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
            Using Media Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-pink-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/science-innovation">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Science & Innovation
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/global-issues">
                Next: Global Issues
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-pink-600 to-purple-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Practice Media Topics</h2>
          <p className="text-pink-100 mb-6">
            Media and communication topics appear frequently in IELTS Speaking
            Part 3. Practice discussing social media impact, news sources, and
            information reliability.
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
              <Link href="/speaking/vocabulary/global-issues">Next Topic</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
