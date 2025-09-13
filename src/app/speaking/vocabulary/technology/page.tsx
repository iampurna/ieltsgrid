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
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Technology Vocabulary for IELTS Speaking | Digital Innovation Terms",
  description:
    "Master advanced technology vocabulary for IELTS Speaking. Learn terms like digital divide, innovation, cybersecurity with examples for Band 7-9.",
  keywords: [
    "IELTS technology vocabulary",
    "digital divide IELTS",
    "innovation vocabulary",
    "cybersecurity IELTS",
    "automation vocabulary",
    "Band 7-9 technology terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Digital Divide",
    definition:
      "The gap between those who have access to digital technology and those who don't, often based on geographic or economic factors.",
    example:
      "The digital divide between urban and rural areas remains a major challenge in developing countries.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Intermediate",
    synonyms: [
      "Electronic messaging",
      "Text communication",
      "Digital correspondence",
    ],
    pronunciation: "/ˈdɪdʒətəl ˈmesɪdʒɪŋ/",
  },

  {
    term: "Innovation",
    definition:
      "The process of creating new ideas, products, or methods that improve existing systems or solve problems in novel ways.",
    example:
      "Innovation drives economic growth and improves living standards across all sectors of society.",
    partOfSpeech: "Noun",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Invention",
      "Breakthrough",
      "Advancement",
      "Creative development",
    ],
    pronunciation: "/ˌɪnəˈveɪʃən/",
  },
  {
    term: "Disruptive Technology",
    definition:
      "Innovation that significantly alters or displaces existing technologies, industries, or ways of doing things.",
    example:
      "Smartphones were disruptive technology that changed multiple industries from photography to navigation.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Game-changing technology",
      "Revolutionary innovation",
      "Market disruptor",
    ],
    pronunciation: "/dɪsˈrʌptɪv tekˈnɑlədʒi/",
  },
  {
    term: "Quantum Computing",
    definition:
      "Advanced computing technology that uses quantum mechanical phenomena to process information.",
    example:
      "Quantum computing could solve complex problems that are impossible for traditional computers to handle.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Quantum technology",
      "Quantum processing",
      "Advanced computing",
    ],
    pronunciation: "/ˈkwɑntəm kəmˈpjutɪŋ/",
  },
  {
    term: "Biotechnology",
    definition:
      "Technology based on biology, used in agriculture, food science, medicine, and other fields.",
    example:
      "Biotechnology has revolutionized medicine through the development of personalized treatments and vaccines.",
    partOfSpeech: "Noun",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: ["Biotech", "Biological technology", "Life sciences technology"],
    pronunciation: "/ˌbaɪoʊtekˈnɑlədʒi/",
  },
  {
    term: "Nanotechnology",
    definition:
      "Technology that manipulates matter on an atomic and molecular scale to create materials and devices.",
    example:
      "Nanotechnology is being used to create stronger materials, more effective medicines, and cleaner energy solutions.",
    partOfSpeech: "Noun",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Molecular technology",
      "Atomic engineering",
      "Microscale technology",
    ],
    pronunciation: "/ˌnænoʊtekˈnɑlədʒi/",
  },
  {
    term: "3D Printing",
    definition:
      "Technology that creates three-dimensional objects by depositing material layer by layer based on digital designs.",
    example:
      "3D printing has revolutionized manufacturing by allowing rapid prototyping and customized production.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Additive manufacturing",
      "Three-dimensional printing",
      "Digital fabrication",
    ],
    pronunciation: "/θri di ˈprɪntɪŋ/",
  },
  {
    term: "Wearable Technology",
    definition:
      "Electronic devices designed to be worn on the body, often for health monitoring or communication.",
    example:
      "Wearable technology like fitness trackers and smartwatches help people monitor their health and stay connected.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: ["Wearables", "Body-worn devices", "Smart accessories"],
    pronunciation: "/ˈwɛrəbəl tekˈnɑlədʒi/",
  },
  {
    term: "Internet Infrastructure",
    definition:
      "The underlying foundation of hardware and software systems that enable internet connectivity.",
    example:
      "Robust internet infrastructure is essential for economic development and digital participation in modern society.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Network infrastructure",
      "Digital infrastructure",
      "Connectivity framework",
    ],
    pronunciation: "/ˈɪntərˌnet ˈɪnfrəˌstrʌktʃər/",
  },
  {
    term: "Smart City",
    definition:
      "Urban areas that use information and communication technologies to improve efficiency and quality of life.",
    example:
      "Smart city initiatives use sensors and data analytics to optimize traffic flow, energy use, and public services.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: ["Connected city", "Intelligent city", "Digital city"],
    pronunciation: "/smɑrt ˈsɪti/",
  },
  {
    term: "Edge Computing",
    definition:
      "Computing that processes data near the source rather than in centralized data centers.",
    example:
      "Edge computing reduces latency and improves response times for applications requiring real-time processing.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Distributed computing",
      "Local processing",
      "Decentralized computing",
    ],
    pronunciation: "/edʒ kəmˈpjutɪŋ/",
  },
  {
    term: "Digital Twin",
    definition:
      "A virtual representation of a physical object or system used for simulation and analysis.",
    example:
      "Digital twin technology helps manufacturers optimize production processes and predict maintenance needs.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: ["Virtual model", "Digital replica", "Simulation model"],
    pronunciation: "/ˈdɪdʒətəl twɪn/",
  },
  {
    term: "Extended Reality (XR)",
    definition:
      "An umbrella term covering virtual reality, augmented reality, and mixed reality technologies.",
    example:
      "Extended reality technologies are transforming education, training, and entertainment by creating immersive experiences.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: ["XR", "Immersive technology", "Mixed reality"],
    pronunciation: "/ɪkˈstendəd riˈæləti/",
  },
  {
    term: "Haptic Technology",
    definition:
      "Technology that recreates the sense of touch through force, vibration, or motion.",
    example:
      "Haptic technology in smartphones provides tactile feedback that makes touchscreen interactions feel more realistic.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: ["Touch technology", "Tactile feedback", "Force feedback"],
    pronunciation: "/ˈhæptɪk tekˈnɑlədʒi/",
  },
  {
    term: "Brain-Computer Interface",
    definition:
      "Technology that enables direct communication between the brain and external devices.",
    example:
      "Brain-computer interfaces could help paralyzed patients control computers and prosthetic devices with their thoughts.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: ["Neural interface", "Mind-machine interface", "Brain control"],
    pronunciation: "/breɪn kəmˈpjutər ˈɪntərˌfeɪs/",
  },
  {
    term: "Renewable Tech Innovation",
    definition:
      "Advanced technologies designed to harness and improve renewable energy sources.",
    example:
      "Renewable tech innovation has made solar and wind power more efficient and cost-effective than fossil fuels.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Clean energy innovation",
      "Green technology",
      "Sustainable innovation",
    ],
    pronunciation: "/rɪˈnuəbəl tek ˌɪnəˈveɪʃən/",
  },
  {
    term: "Tech Entrepreneurship",
    definition:
      "The practice of starting and developing technology-based businesses and innovations.",
    example:
      "Tech entrepreneurship has created many of today's most valuable companies and transformed entire industries.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Technology startups",
      "Tech innovation",
      "Digital entrepreneurship",
    ],
    pronunciation: "/tek ˌɑntrəprəˈnɜrʃɪp/",
  },
  {
    term: "Tech Disruption",
    definition:
      "The process by which new technologies displace established technologies, products, or services.",
    example:
      "Tech disruption in the taxi industry by ride-sharing apps changed transportation in cities worldwide.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Technological disruption",
      "Digital disruption",
      "Innovation disruption",
    ],
    pronunciation: "/tek dɪsˈrʌpʃən/",
  },
  {
    term: "Technological Convergence",
    definition:
      "The merging of distinct technologies into unified systems with enhanced capabilities.",
    example:
      "Technological convergence in smartphones combined cameras, computers, and phones into single devices.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: ["Technology integration", "Tech fusion", "System convergence"],
    pronunciation: "/ˌteknəˈlɑdʒɪkəl kənˈvɜrdʒəns/",
  },
  {
    term: "Innovation Ecosystem",
    definition:
      "The network of organizations, individuals, and resources that support and drive technological innovation.",
    example:
      "Silicon Valley's innovation ecosystem brings together investors, entrepreneurs, and talent to create breakthrough technologies.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: ["Innovation network", "Tech ecosystem", "Creative environment"],
    pronunciation: "/ˌɪnəˈveɪʃən ˈikoʊˌsɪstəm/",
  },
  {
    term: "Digital Revolution",
    definition:
      "The massive shift from analog to digital technologies that has transformed society and the economy.",
    example:
      "The digital revolution has fundamentally changed how we work, communicate, learn, and entertain ourselves.",
    partOfSpeech: "Noun phrase",
    category: "Innovation & Emerging Tech",
    difficulty: "Advanced",
    synonyms: [
      "Digital transformation",
      "Technological revolution",
      "Information age",
    ],
    pronunciation: "/ˈdɪdʒətəl ˌrevəˈluʃən/",
  },

  {
    term: "Digital Transformation",
    definition:
      "The integration of digital technology into all areas of business and society, fundamentally changing operations and value delivery.",
    example:
      "Digital transformation accelerated during the pandemic as organizations rapidly adopted remote work technologies.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: ["Digitalization", "Tech integration", "Digital evolution"],
    pronunciation: "/ˈdɪdʒətəl ˌtrænsfərˈmeɪʃən/",
  },
  {
    term: "Tech-Life Balance",
    definition:
      "The equilibrium between technology use and offline activities to maintain mental health and relationships.",
    example:
      "Maintaining a healthy tech-life balance is crucial as digital devices become increasingly integrated into daily life.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: [
      "Digital wellness",
      "Screen-life balance",
      "Technology moderation",
    ],
    pronunciation: "/tek laɪf ˈbæləns/",
  },
  {
    term: "Information Overload",
    definition:
      "The difficulty in understanding issues and making decisions due to the overwhelming amount of available information.",
    example:
      "Information overload from constant news updates and social media can lead to decision fatigue and stress.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: ["Data overload", "Information excess", "Cognitive overload"],
    pronunciation: "/ˌɪnfərˈmeɪʃən ˈoʊvərˌloʊd/",
  },
  {
    term: "Digital Inequality",
    definition:
      "Unequal access to digital technologies and internet connectivity based on socioeconomic factors.",
    example:
      "Digital inequality affects students' educational opportunities when some lack access to computers and high-speed internet.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: ["Digital divide", "Technology gap", "Access disparity"],
    pronunciation: "/ˈdɪdʒətəl ˌɪnɪˈkwɑləti/",
  },
  {
    term: "Technological Dependence",
    definition:
      "Excessive reliance on technology for daily activities, potentially reducing self-sufficiency and practical skills.",
    example:
      "Technological dependence on GPS navigation has reduced many people's ability to read maps or navigate independently.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: ["Tech dependence", "Technology reliance", "Digital dependence"],
    pronunciation: "/ˌteknəˈlɑdʒɪkəl dɪˈpendəns/",
  },
  {
    term: "Privacy Concerns",
    definition:
      "Worries about personal information being collected, used, or shared without consent by technology companies.",
    example:
      "Growing privacy concerns have led to new regulations requiring companies to be transparent about data collection.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: [
      "Data privacy issues",
      "Information security worries",
      "Personal data concerns",
    ],
    pronunciation: "/ˈpraɪvəsi kənˈsɜrnz/",
  },
  {
    term: "Social Isolation",
    definition:
      "Reduced face-to-face social interaction as a result of increased reliance on digital communication.",
    example:
      "Excessive social media use can paradoxically lead to social isolation despite being constantly connected online.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: [
      "Digital isolation",
      "Virtual loneliness",
      "Tech-induced loneliness",
    ],
    pronunciation: "/ˈsoʊʃəl ˌaɪsəˈleɪʃən/",
  },
  {
    term: "Attention Span",
    definition:
      "The length of time a person can concentrate on a task, potentially affected by constant digital stimulation.",
    example:
      "Many educators worry that constant digital stimulation is reducing students' attention span for deep reading and learning.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: [
      "Focus duration",
      "Concentration ability",
      "Sustained attention",
    ],
    pronunciation: "/əˈtenʃən spæn/",
  },
  {
    term: "Job Displacement",
    definition:
      "The replacement of human workers with automated systems and artificial intelligence.",
    example:
      "Technological advancement brings job displacement concerns alongside opportunities for new types of employment.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: [
      "Automation unemployment",
      "Tech unemployment",
      "Robot replacement",
    ],
    pronunciation: "/dʒɑb dɪsˈpleɪsmənt/",
  },
  {
    term: "Digital Citizenship",
    definition:
      "The responsible and ethical use of technology and internet resources.",
    example:
      "Schools are teaching digital citizenship to help students understand online etiquette and cybersecurity.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: ["Online responsibility", "Digital ethics", "Cyber citizenship"],
    pronunciation: "/ˈdɪdʒətəl ˈsɪtəzənˌʃɪp/",
  },
  {
    term: "Technological Literacy",
    definition:
      "The ability to effectively use, understand, and evaluate technology in various contexts.",
    example:
      "Technological literacy is now as important as traditional literacy skills for success in modern society.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: ["Tech literacy", "Digital competence", "Technology skills"],
    pronunciation: "/ˌteknəˈlɑdʒɪkəl ˈlɪtərəsi/",
  },
  {
    term: "Screen Time",
    definition:
      "The amount of time spent looking at electronic screens, including phones, computers, tablets, and televisions.",
    example:
      "Parents are increasingly concerned about their children's screen time and its potential effects on development.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Intermediate",
    synonyms: [
      "Device usage time",
      "Digital consumption",
      "Electronic media time",
    ],
    pronunciation: "/skrin taɪm/",
  },
  {
    term: "Remote Work Culture",
    definition:
      "The professional environment and practices associated with working from locations outside traditional offices.",
    example:
      "Remote work culture has redefined professional relationships and changed expectations about work-life integration.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: [
      "Telecommuting culture",
      "Distributed work",
      "Virtual workplace",
    ],
    pronunciation: "/rɪˈmoʊt wɜrk ˈkʌltʃər/",
  },
  {
    term: "Tech Anxiety",
    definition:
      "Stress and worry related to using technology or keeping up with technological changes.",
    example:
      "Tech anxiety affects many older adults who struggle to adapt to rapidly changing digital interfaces.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: ["Technology stress", "Digital anxiety", "Techno-stress"],
    pronunciation: "/tek æŋˈzaɪəti/",
  },
  {
    term: "Digital Wellness",
    definition:
      "The pursuit of a healthy relationship with technology that supports mental and physical wellbeing.",
    example:
      "Digital wellness programs help people develop healthy habits around technology use and screen time management.",
    partOfSpeech: "Noun phrase",
    category: "Technology Impacts & Society",
    difficulty: "Advanced",
    synonyms: ["Tech wellness", "Digital health", "Technology balance"],
    pronunciation: "/ˈdɪdʒətəl ˈwelnəs/",
  },
  {
    term: "Digital Literacy",
    definition:
      "The ability to effectively use digital technologies, communication tools, and networks to find, evaluate, and create information.",
    example:
      "Digital literacy is becoming as important as traditional reading and writing skills in modern education.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Technology skills", "Digital competence", "Tech literacy"],
    pronunciation: "/ˈdɪdʒətəl ˈlɪtərəsi/",
  },
  {
    term: "Cybersecurity",
    definition:
      "The practice of protecting computer systems, networks, and digital data from unauthorized access, attacks, or damage.",
    example:
      "Cybersecurity is crucial as more personal data is stored online and cyber threats become more sophisticated.",
    partOfSpeech: "Noun",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: [
      "Digital security",
      "Information security",
      "Network protection",
    ],
    pronunciation: "/ˈsaɪbərsɪˌkjʊrɪti/",
  },
  {
    term: "Data Privacy",
    definition:
      "The protection of personal information from unauthorized access, use, or disclosure, particularly important in the digital age.",
    example:
      "People are increasingly concerned about data privacy on social media platforms and demand better protection measures.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Information privacy", "Data protection", "Personal privacy"],
    pronunciation: "/ˈdeɪtə ˈprɪvəsi/",
  },
  {
    term: "Cloud Computing",
    definition:
      "The delivery of computing services over the internet, allowing access to data and programs from anywhere.",
    example:
      "Cloud computing has revolutionized how businesses store and access their data and applications.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: [
      "Cloud services",
      "Remote computing",
      "Internet-based computing",
    ],
    pronunciation: "/klaʊd kəmˈpjutɪŋ/",
  },
  {
    term: "Internet of Things (IoT)",
    definition:
      "The network of interconnected devices that can collect and exchange data over the internet.",
    example:
      "The Internet of Things allows smart home devices to communicate and automate household functions.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Connected devices", "Smart networks", "Device connectivity"],
    pronunciation: "/ˈɪntərˌnet ʌv θɪŋz/",
  },
  {
    term: "Big Data",
    definition:
      "Extremely large datasets that require advanced tools and techniques to analyze and extract insights.",
    example:
      "Big data analytics help companies understand consumer behavior and make better business decisions.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Data analytics", "Large-scale data", "Data science"],
    pronunciation: "/bɪg ˈdeɪtə/",
  },
  {
    term: "Digital Transformation",
    definition:
      "The integration of digital technology into all areas of business and society, changing how organizations operate.",
    example:
      "Digital transformation has accelerated due to the pandemic, forcing rapid adoption of remote work technologies.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Digitalization", "Tech integration", "Digital evolution"],
    pronunciation: "/ˈdɪdʒətəl ˌtrænsfərˈmeɪʃən/",
  },
  {
    term: "E-commerce",
    definition:
      "Commercial transactions conducted electronically over the internet.",
    example:
      "E-commerce has grown dramatically, with more people shopping online than ever before.",
    partOfSpeech: "Noun",
    category: "Digital & Internet",
    difficulty: "Intermediate",
    synonyms: ["Online shopping", "Electronic commerce", "Digital retail"],
    pronunciation: "/ˈiˌkɑmɜrs/",
  },
  {
    term: "Digital Footprint",
    definition:
      "The trail of data left behind by users' online activities and interactions.",
    example:
      "Young people need to understand that their digital footprint can affect future job opportunities.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Online presence", "Digital trace", "Cyber footprint"],
    pronunciation: "/ˈdɪdʒətəl ˈfʊtˌprɪnt/",
  },
  {
    term: "Bandwidth",
    definition:
      "The amount of data that can be transmitted over a network connection in a given time period.",
    example:
      "High bandwidth internet connections are essential for video conferencing and streaming services.",
    partOfSpeech: "Noun",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Data capacity", "Network speed", "Connection capacity"],
    pronunciation: "/ˈbændˌwɪdθ/",
  },
  {
    term: "Streaming",
    definition:
      "The continuous delivery of audio or video content over the internet without downloading files.",
    example:
      "Streaming services have replaced traditional television for many viewers, especially younger generations.",
    partOfSpeech: "Noun",
    category: "Digital & Internet",
    difficulty: "Intermediate",
    synonyms: ["Online streaming", "Live broadcasting", "Digital streaming"],
    pronunciation: "/ˈstrimɪŋ/",
  },
  {
    term: "Viral Content",
    definition:
      "Digital content that spreads rapidly across the internet through sharing and social media.",
    example:
      "Viral content can reach millions of people within hours and significantly influence public opinion.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Intermediate",
    synonyms: ["Viral media", "Trending content", "Popular content"],
    pronunciation: "/ˈvaɪrəl ˈkɑntent/",
  },
  {
    term: "Digital Detox",
    definition:
      "A period of time during which a person refrains from using digital devices and technology.",
    example:
      "Many people take regular digital detox breaks to reduce stress and improve their mental health.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Technology break", "Screen-free time", "Digital cleanse"],
    pronunciation: "/ˈdɪdʒətəl ˈditɑks/",
  },
  {
    term: "Online Learning",
    definition:
      "Education delivered through digital platforms and internet-based resources.",
    example:
      "Online learning became essential during the pandemic and has permanently changed educational delivery methods.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Intermediate",
    synonyms: ["E-learning", "Distance learning", "Digital education"],
    pronunciation: "/ˈɔnˌlaɪn ˈlɜrnɪŋ/",
  },
  {
    term: "Digital Native",
    definition:
      "A person who has grown up in the digital age with access to computers and the internet.",
    example:
      "Digital natives often find it easier to adapt to new technologies than older generations.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Tech generation", "Digital generation", "Tech-savvy youth"],
    pronunciation: "/ˈdɪdʒətəl ˈneɪtɪv/",
  },
  {
    term: "Cyber Attack",
    definition:
      "Malicious attempts to damage, disrupt, or gain unauthorized access to computer systems.",
    example:
      "Cyber attacks on infrastructure and businesses have increased dramatically in recent years.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Cyber assault", "Digital attack", "Online threat"],
    pronunciation: "/ˈsaɪbər əˈtæk/",
  },
  {
    term: "Virtual Reality (VR)",
    definition:
      "Computer-generated simulation of a three-dimensional environment that users can interact with using special equipment.",
    example:
      "Virtual reality can transform education by providing immersive learning experiences that were previously impossible.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["VR", "Simulated reality", "Immersive technology"],
    pronunciation: "/ˈvɜrtʃuəl riˈæləti/",
  },
  {
    term: "Augmented Reality (AR)",
    definition:
      "Technology that overlays digital information onto the real world through devices like smartphones or smart glasses.",
    example:
      "Augmented reality applications help users navigate cities and translate foreign text in real-time.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["AR", "Mixed reality", "Enhanced reality"],
    pronunciation: "/ˈɔgˌmentəd riˈæləti/",
  },
  {
    term: "Blockchain",
    definition:
      "A distributed digital ledger technology that maintains a continuously growing list of records.",
    example:
      "Blockchain technology promises to revolutionize financial transactions by providing secure, transparent record-keeping.",
    partOfSpeech: "Noun",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Distributed ledger", "Digital ledger", "Crypto technology"],
    pronunciation: "/ˈblɑkˌtʃeɪn/",
  },
  {
    term: "User Interface (UI)",
    definition:
      "The point of interaction between users and digital devices, including design and layout elements.",
    example:
      "A well-designed user interface makes technology accessible and easy to use for people of all ages.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["UI", "User design", "Interface design"],
    pronunciation: "/ˈjuzər ˈɪntərˌfeɪs/",
  },
  {
    term: "Algorithm",
    definition:
      "A set of rules or instructions for solving problems or completing tasks, often used in computer programming.",
    example:
      "Social media algorithms determine what content users see in their feeds based on their preferences.",
    partOfSpeech: "Noun",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Computer program", "Computational process", "Digital logic"],
    pronunciation: "/ˈælgəˌrɪðəm/",
  },
  {
    term: "Open Source",
    definition:
      "Software whose source code is freely available for anyone to view, modify, and distribute.",
    example:
      "Open source software promotes collaboration and innovation in the tech community worldwide.",
    partOfSpeech: "Adjective phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Free software", "Community software", "Collaborative software"],
    pronunciation: "/ˈoʊpən sɔrs/",
  },
  {
    term: "Digital Currency",
    definition:
      "Electronic money that exists only in digital form, including cryptocurrencies.",
    example:
      "Digital currencies like Bitcoin are becoming more accepted as alternative forms of payment.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: ["Cryptocurrency", "Electronic money", "Virtual currency"],
    pronunciation: "/ˈdɪdʒətəl ˈkɜrənsi/",
  },
  {
    term: "Tech Addiction",
    definition:
      "Compulsive use of digital devices and technology that interferes with daily life and relationships.",
    example:
      "Tech addiction, particularly to social media and gaming, is becoming a serious concern for mental health professionals.",
    partOfSpeech: "Noun phrase",
    category: "Digital & Internet",
    difficulty: "Advanced",
    synonyms: [
      "Digital addiction",
      "Screen addiction",
      "Technology dependence",
    ],
    pronunciation: "/tek əˈdɪkʃən/",
  },

  // ARTIFICIAL INTELLIGENCE & AUTOMATION (20 terms)
  {
    term: "Artificial Intelligence (AI)",
    definition:
      "Computer systems designed to perform tasks that typically require human intelligence, such as learning and problem-solving.",
    example:
      "Artificial intelligence is revolutionizing industries from healthcare to transportation with its problem-solving capabilities.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["AI", "Machine intelligence", "Computer intelligence"],
    pronunciation: "/ˌɑrtəˈfɪʃəl ɪnˈtelədʒəns/",
  },
  {
    term: "Machine Learning",
    definition:
      "A subset of AI that enables computers to learn and improve from experience without being explicitly programmed.",
    example:
      "Machine learning algorithms help streaming services recommend content based on users' viewing history.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Automated learning", "Algorithmic learning", "AI learning"],
    pronunciation: "/məˈʃin ˈlɜrnɪŋ/",
  },
  {
    term: "Automation",
    definition:
      "The use of technology to perform tasks without human intervention, often replacing manual labor with machine operations.",
    example:
      "Automation can increase productivity but may also reduce employment opportunities in certain industries.",
    partOfSpeech: "Noun",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Mechanization", "Computerization", "Robotic control"],
    pronunciation: "/ˌɔtəˈmeɪʃən/",
  },
  {
    term: "Robotics",
    definition:
      "The branch of technology dealing with the design, construction, and operation of robots.",
    example:
      "Advanced robotics is transforming manufacturing, healthcare, and even household management.",
    partOfSpeech: "Noun",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: [
      "Robot technology",
      "Mechanical engineering",
      "Automated systems",
    ],
    pronunciation: "/roʊˈbɑtɪks/",
  },
  {
    term: "Natural Language Processing",
    definition:
      "AI technology that helps computers understand, interpret, and generate human language.",
    example:
      "Natural language processing enables voice assistants to understand and respond to spoken commands naturally.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["NLP", "Language AI", "Text analysis"],
    pronunciation: "/ˈnætʃərəl ˈlæŋgwɪdʒ ˈproʊsesɪŋ/",
  },
  {
    term: "Deep Learning",
    definition:
      "A machine learning technique based on artificial neural networks with multiple layers.",
    example:
      "Deep learning has enabled breakthroughs in image recognition and medical diagnosis accuracy.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Neural networks", "Advanced AI", "Layered learning"],
    pronunciation: "/dip ˈlɜrnɪŋ/",
  },
  {
    term: "Chatbot",
    definition:
      "A computer program designed to simulate conversation with human users through text or voice.",
    example:
      "Customer service chatbots can handle basic inquiries 24/7, improving response times and reducing costs.",
    partOfSpeech: "Noun",
    category: "AI & Automation",
    difficulty: "Intermediate",
    synonyms: ["Conversational AI", "Virtual assistant", "Chat AI"],
    pronunciation: "/ˈtʃætˌbɑt/",
  },
  {
    term: "Voice Assistant",
    definition:
      "AI-powered software that responds to voice commands and can perform various tasks.",
    example:
      "Voice assistants like Alexa and Siri have become common household devices for controlling smart homes.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Intermediate",
    synonyms: ["Smart speaker", "Voice AI", "Digital assistant"],
    pronunciation: "/vɔɪs əˈsɪstənt/",
  },
  {
    term: "Predictive Analytics",
    definition:
      "The use of data, statistical algorithms, and machine learning to identify future outcomes based on historical data.",
    example:
      "Predictive analytics help businesses forecast demand and optimize inventory management effectively.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Forecasting technology", "Data prediction", "Future modeling"],
    pronunciation: "/prɪˈdɪktɪv ænəˈlɪtɪks/",
  },
  {
    term: "Computer Vision",
    definition:
      "AI technology that enables computers to interpret and understand visual information from digital images or videos.",
    example:
      "Computer vision technology is used in self-driving cars to identify obstacles and navigate safely.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Image recognition", "Visual AI", "Machine vision"],
    pronunciation: "/kəmˈpjutər ˈvɪʒən/",
  },
  {
    term: "Autonomous Vehicles",
    definition:
      "Self-driving cars that use AI and sensors to navigate without human intervention.",
    example:
      "Autonomous vehicles could revolutionize transportation by reducing accidents caused by human error.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Self-driving cars", "Driverless vehicles", "Robot cars"],
    pronunciation: "/ɔˈtɑnəməs ˈvikəlz/",
  },
  {
    term: "Smart Home",
    definition:
      "A residence equipped with internet-connected devices that can be monitored and controlled remotely.",
    example:
      "Smart home technology allows homeowners to control lighting, temperature, and security systems from their phones.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Intermediate",
    synonyms: ["Connected home", "Intelligent home", "Automated home"],
    pronunciation: "/smɑrt hoʊm/",
  },
  {
    term: "Biometric Authentication",
    definition:
      "Security technology that uses unique biological characteristics like fingerprints or facial recognition for identification.",
    example:
      "Biometric authentication provides more security than traditional passwords because biological features are unique to individuals.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Biological security", "Bio-identification", "Biometric access"],
    pronunciation: "/ˌbaɪoʊˈmetrɪk ɔˌθentəˈkeɪʃən/",
  },
  {
    term: "Facial Recognition",
    definition:
      "Technology that identifies or verifies people by analyzing facial features from digital images or video.",
    example:
      "Facial recognition technology raises privacy concerns while providing convenient security for smartphones and buildings.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Face detection", "Facial identification", "Face scanning"],
    pronunciation: "/ˈfeɪʃəl ˌrekəgˈnɪʃən/",
  },
  {
    term: "Neural Network",
    definition:
      "A computing system inspired by biological neural networks that learn by processing examples.",
    example:
      "Neural networks can recognize patterns in data that would be impossible for humans to detect manually.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Artificial neural network", "Learning network", "AI brain"],
    pronunciation: "/ˈnʊrəl ˈnetˌwɜrk/",
  },
  {
    term: "Drone Technology",
    definition:
      "Unmanned aircraft systems controlled remotely or autonomously through software-controlled flight plans.",
    example:
      "Drone technology is being used for delivery services, agriculture monitoring, and emergency response operations.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["UAV technology", "Unmanned aircraft", "Flying robots"],
    pronunciation: "/droʊn tekˈnɑlədʒi/",
  },
  {
    term: "Internet Automation",
    definition:
      "The use of software tools to perform repetitive internet-based tasks without human intervention.",
    example:
      "Internet automation helps businesses manage social media posts, email marketing, and data collection efficiently.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Web automation", "Online automation", "Digital automation"],
    pronunciation: "/ˈɪntərˌnet ˌɔtəˈmeɊeɪʃən/",
  },
  {
    term: "Algorithmic Decision Making",
    definition:
      "The process of using computer algorithms to make decisions that traditionally required human judgment.",
    example:
      "Algorithmic decision making in hiring processes raises concerns about bias and fairness in employment.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["Automated decisions", "AI decisions", "Computer judgments"],
    pronunciation: "/ˌælgəˈrɪðmɪk dɪˈsɪʒən ˈmeɪkɪŋ/",
  },
  {
    term: "Human-AI Collaboration",
    definition:
      "The cooperative interaction between humans and artificial intelligence systems to achieve better outcomes.",
    example:
      "Human-AI collaboration in medical diagnosis combines doctors' expertise with AI's pattern recognition capabilities.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: [
      "AI partnership",
      "Human-machine cooperation",
      "Collaborative AI",
    ],
    pronunciation: "/ˈhjumən eɪˈaɪ kəˌlæbəˈreɪʃən/",
  },
  {
    term: "AI Ethics",
    definition:
      "The moral principles and guidelines governing the development and use of artificial intelligence systems.",
    example:
      "AI ethics addresses concerns about privacy, bias, and the responsible development of intelligent machines.",
    partOfSpeech: "Noun phrase",
    category: "AI & Automation",
    difficulty: "Advanced",
    synonyms: ["AI morality", "Machine ethics", "Responsible AI"],
    pronunciation: "/eɪˈaɪ ˈeθɪks/",
  },

  // COMMUNICATION TECHNOLOGY (20 terms)
  {
    term: "5G Technology",
    definition:
      "The fifth generation of wireless network technology offering faster speeds and lower latency than previous generations.",
    example:
      "5G technology enables real-time communication for autonomous vehicles and remote medical procedures.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Advanced",
    synonyms: [
      "Fifth generation wireless",
      "Advanced mobile network",
      "High-speed cellular",
    ],
    pronunciation: "/faɪv dʒi tekˈnɑlədʒi/",
  },
  {
    term: "Video Conferencing",
    definition:
      "Technology that enables face-to-face meetings between people in different locations using video and audio transmission.",
    example:
      "Video conferencing became essential during the pandemic for remote work and maintaining social connections.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Intermediate",
    synonyms: ["Video calling", "Online meetings", "Virtual meetings"],
    pronunciation: "/ˈvɪdioʊ ˈkɑnfərənsɪŋ/",
  },
  {
    term: "Social Media Platform",
    definition:
      "Online services that facilitate the creation and sharing of information and content in virtual communities.",
    example:
      "Social media platforms have transformed how people communicate and share information globally.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Intermediate",
    synonyms: ["Social networks", "Online communities", "Digital platforms"],
    pronunciation: "/ˈsoʊʃəl ˈmidiə ˈplætfɔrm/",
  },
  {
    term: "Instant Messaging",
    definition:
      "Real-time text communication between users over the internet or mobile networks.",
    example:
      "Instant messaging apps have largely replaced SMS for personal communication due to their convenience and features.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Intermediate",
    synonyms: ["Text messaging", "Chat applications", "Real-time messaging"],
    pronunciation: "/ˈɪnstənt ˈmesɪdʒɪŋ/",
  },
  {
    term: "Smartphone",
    definition:
      "A mobile phone with advanced computing capabilities including internet access, cameras, and applications.",
    example:
      "Smartphones have become essential tools for communication, entertainment, and accessing information on the go.",
    partOfSpeech: "Noun",
    category: "Communication Technology",
    difficulty: "Intermediate",
    synonyms: ["Mobile device", "Cell phone", "Handheld computer"],
    pronunciation: "/ˈsmɑrtˌfoʊn/",
  },
  {
    term: "Wireless Communication",
    definition:
      "The transmission of information without the use of physical connections like cables or wires.",
    example:
      "Wireless communication has made mobile devices truly portable and enabled ubiquitous internet access.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Advanced",
    synonyms: [
      "Radio communication",
      "Cordless communication",
      "Mobile communication",
    ],
    pronunciation: "/ˈwaɪərləs kəˌmjunəˈkeɪʃən/",
  },
  {
    term: "Satellite Communication",
    definition:
      "Communication technology that uses satellites in space to transmit signals across large distances.",
    example:
      "Satellite communication enables global internet access and broadcasting to remote areas worldwide.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Advanced",
    synonyms: [
      "Satellite technology",
      "Space communication",
      "Orbital communication",
    ],
    pronunciation: "/ˈsætəˌlaɪt kəˌmjunəˈkeɪʃən/",
  },
  {
    term: "Digital Broadcasting",
    definition:
      "The transmission of television and radio signals in digital format rather than analog.",
    example:
      "Digital broadcasting provides better picture and sound quality while allowing more channels in the same bandwidth.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Advanced",
    synonyms: ["Digital transmission", "Digital TV", "Digital radio"],
    pronunciation: "/ˈdɪdʒətəl ˈbrɔdˌkæstɪŋ/",
  },
  {
    term: "Fiber Optic Communication",
    definition:
      "High-speed data transmission using light pulses through thin glass or plastic fibers.",
    example:
      "Fiber optic communication provides the fastest internet speeds available for homes and businesses.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Advanced",
    synonyms: [
      "Optical fiber",
      "Light-based communication",
      "High-speed fiber",
    ],
    pronunciation: "/ˈfaɪbər ˈɑptɪk kəˌmjunəˈkeɪʃən/",
  },
  {
    term: "Mobile Application",
    definition:
      "Software programs designed to run on smartphones, tablets, and other mobile devices.",
    example:
      "Mobile applications have created new industries and changed how people access services and entertainment.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Intermediate",
    synonyms: ["Mobile app", "Phone app", "Mobile software"],
    pronunciation: "/ˈmoʊbəl ˌæpləˈkeɪʃən/",
  },
  {
    term: "Cloud Communication",
    definition:
      "Communication services delivered over the internet rather than through traditional phone systems.",
    example:
      "Cloud communication allows businesses to scale their phone and messaging systems without physical hardware.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Advanced",
    synonyms: [
      "Internet-based communication",
      "Virtual communication",
      "Online communication services",
    ],
    pronunciation: "/klaʊd kəˌmjunəˈkeɪʃən/",
  },
  {
    term: "Unified Communications",
    definition:
      "Integration of various communication tools and platforms into a single, cohesive system.",
    example:
      "Unified communications combine email, instant messaging, video calls, and phone services in one platform.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Advanced",
    synonyms: [
      "Integrated communication",
      "Communication integration",
      "All-in-one communication",
    ],
    pronunciation: "/ˈjunəˌfaɪd kəˌmjunəˈkeɪʃənz/",
  },
  {
    term: "Voice over IP (VoIP)",
    definition:
      "Technology that enables voice communication over internet protocols rather than traditional phone lines.",
    example:
      "Voice over IP has reduced international calling costs and enabled advanced features like video calling.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Advanced",
    synonyms: ["Internet telephony", "IP calling", "Online calling"],
    pronunciation: "/vɔɪs ˈoʊvər aɪˈpi/",
  },
  {
    term: "Push Notification",
    definition:
      "Messages sent directly to users' devices to alert them about new information or updates.",
    example:
      "Push notifications keep users engaged with apps but can become overwhelming if not managed properly.",
    partOfSpeech: "Noun phrase",
    category: "Communication Technology",
    difficulty: "Intermediate",
    synonyms: ["App alerts", "Mobile alerts", "Device notifications"],
    pronunciation: "/pʊʃ ˌnoʊtəfəˈkeɪʃən/",
  },
  {
    term: "Digital Divide",
    definition:
      "The gap between urban and rural areas, or between developed and developing regions, in terms of access to digital technology and internet connectivity.",
    example:
      "The digital divide between urban and rural areas is still a major challenge in developing countries.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Technology gap", "Digital inequality"],
    pronunciation: "/ˈdɪdʒɪtəl dɪˈvaɪd/",
  },
  {
    term: "Innovation",
    definition:
      "The process of creating new ideas, products, or methods that improve existing systems or solve problems in novel ways.",
    example:
      "Innovation drives economic growth and improves living standards across all sectors of society.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Invention", "Breakthrough", "Advancement"],
    pronunciation: "/ˌɪnəˈveɪʃən/",
  },
  {
    term: "Cybersecurity",
    definition:
      "The practice of protecting computer systems, networks, and digital data from unauthorized access, attacks, or damage.",
    example:
      "Cybersecurity is crucial as more personal data is stored online and cyber threats become more sophisticated.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Digital security", "Information security"],
    pronunciation: "/ˈsaɪbərsɪˌkjʊrɪti/",
  },
  {
    term: "Automation",
    definition:
      "The use of technology to perform tasks without human intervention, often replacing manual labor with machine operations.",
    example:
      "Automation can increase productivity but may also reduce employment opportunities in certain industries.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Mechanization", "Computerization"],
    pronunciation: "/ˌɔːtəˈmeɪʃən/",
  },
  {
    term: "Virtual Reality",
    definition:
      "Computer-generated simulation of a three-dimensional environment that users can interact with using special equipment.",
    example:
      "Virtual reality can transform education by providing immersive learning experiences that were previously impossible.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["VR", "Simulated reality"],
    pronunciation: "/ˈvɜːrtʃuəl riˈæləti/",
  },
  {
    term: "Data Privacy",
    definition:
      "The protection of personal information from unauthorized access, use, or disclosure, particularly important in the digital age.",
    example:
      "People are increasingly concerned about data privacy on social media platforms and demand better protection.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Information privacy", "Data protection"],
    pronunciation: "/ˈdeɪtə ˈprɪvəsi/",
  },
];

const relatedTopics = [
  {
    id: "science-innovation",
    title: "Science & Innovation",
    description: "Explore scientific breakthroughs and research vocabulary",
    icon: "🔬",
  },
  {
    id: "media-communication",
    title: "Media & Communication",
    description: "Learn about digital journalism and social media terms",
    icon: "📱",
  },
];

const studyTips = [
  {
    tip: "Use in Context",
    description:
      "Practice using these terms when discussing modern life, social media, or technological changes.",
    icon: CheckCircle,
  },
  {
    tip: "Connect Ideas",
    description:
      "Link technology vocabulary to other topics like education, work, or social issues.",
    icon: Lightbulb,
  },
  {
    tip: "Real Examples",
    description:
      "Mention specific companies, apps, or technologies when using these terms.",
    icon: Star,
  },
];

export default function TechnologyVocabularyPage() {
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
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Technology Vocabulary</h1>
            <p className="text-xl text-blue-100 mb-6">
              Advanced technology vocabulary for IELTS Speaking Band 7-9. Master
              terms related to digital innovation, cybersecurity, and modern
              technological trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                6 Advanced Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                With Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Pronunciation Guide
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
              Technology Terms
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
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: "8.33%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 1 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
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
                  {/* Term Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
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
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Example in IELTS Speaking:
                    </h4>
                    <p className="text-blue-800 italic">"{vocab.example}"</p>
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
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How to Use Technology Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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
            <Button variant="outline" disabled>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous Topic
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/environment">
                Next: Environment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Practice?</h2>
          <p className="text-purple-100 mb-6">
            Use these technology terms in your speaking practice. Try describing
            how technology has changed your life or discuss the impact of social
            media.
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
              <Link href="/speaking/vocabulary/environment">Next Topic</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
