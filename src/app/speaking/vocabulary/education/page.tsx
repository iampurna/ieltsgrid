import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Users,
  Award,
  Brain,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Education Vocabulary for IELTS Speaking | Academic Terms & Learning",
  description:
    "Master education vocabulary for IELTS Speaking. Learn advanced academic terms like curriculum, literacy, lifelong learning with examples for Band 7-9.",
  keywords: [
    "IELTS education vocabulary",
    "curriculum IELTS",
    "literacy rate vocabulary",
    "lifelong learning IELTS",
    "academic English vocabulary",
    "Band 7-9 education terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Curriculum",
    definition:
      "The subjects and content taught in a school or course of study, including the planned interaction of pupils with instructional content, materials, resources, and processes.",
    example:
      "I believe the school curriculum should include more practical life skills, not just academic subjects.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Syllabus", "Course content", "Educational program"],
    pronunciation: "/kəˈrɪkjələm/",
    icon: BookOpen,
  },
  {
    term: "Literacy Rate",
    definition:
      "The percentage of people in a population who can read and write at a specified age, typically used as an indicator of educational development in a country.",
    example:
      "Improving the literacy rate is essential for the country's economic development and social progress.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Reading proficiency", "Educational attainment"],
    pronunciation: "/ˈlɪtərəsi reɪt/",
    icon: BookOpen,
  },
  {
    term: "Lifelong Learning",
    definition:
      "The ongoing, voluntary pursuit of knowledge and skills throughout an individual's life, both for personal and professional development.",
    example:
      "Lifelong learning allows adults to update their skills and stay competitive in the job market.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Continuous education",
      "Adult learning",
      "Professional development",
    ],
    pronunciation: "/ˈlaɪflɔːŋ ˈlɜːrnɪŋ/",
    icon: Brain,
  },
  {
    term: "Vocational Training",
    definition:
      "Education that prepares people for specific trades, crafts, and careers at various levels, focusing on practical skills rather than academic theory.",
    example:
      "Vocational training can help young people gain employable skills quickly and enter the workforce sooner.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Technical education", "Trade school", "Skills training"],
    pronunciation: "/voʊˈkeɪʃənəl ˈtreɪnɪŋ/",
    icon: Award,
  },
  {
    term: "Standardized Testing",
    definition:
      "Assessment method where all students answer the same questions under similar conditions and are scored in a consistent manner to measure educational achievement.",
    example:
      "Standardized testing often fails to measure creativity and critical thinking skills in students.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Uniform assessment", "Standardized evaluation"],
    pronunciation: "/ˈstændərˌdaɪzd ˈtestɪŋ/",
    icon: Award,
  },
  {
    term: "Inclusive Education",
    definition:
      "An educational approach that ensures all children, including those with disabilities or special needs, can learn together in mainstream schools with appropriate support.",
    example:
      "Inclusive education ensures that children with disabilities can learn alongside their peers in regular classrooms.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Integrated learning", "Special needs education"],
    pronunciation: "/ɪnˈklusɪv ˌedʒuˈkeɪʃən/",
    icon: Users,
  },
  {
    term: "Pedagogy",
    definition:
      "The method and practice of teaching, especially as an academic subject or theoretical concept involving various approaches to instruction and learning.",
    example:
      "Modern pedagogy emphasizes student-centered learning rather than traditional teacher-led instruction.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Teaching methodology",
      "Educational theory",
      "Instruction methods",
    ],
    pronunciation: "/ˈpedəɡɒdʒi/",
    icon: Brain,
  },
  {
    term: "Assessment",
    definition:
      "The evaluation or estimation of the nature, quality, or ability of someone or something, particularly in educational contexts to measure learning outcomes.",
    example:
      "Continuous assessment throughout the semester is more effective than relying solely on final examinations.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Evaluation", "Testing", "Appraisal"],
    pronunciation: "/əˈsɛsmənt/",
    icon: CheckCircle,
  },
  {
    term: "Numeracy",
    definition:
      "The ability to understand and work with numbers, including basic mathematical concepts and problem-solving skills in everyday situations.",
    example:
      "Schools should focus equally on literacy and numeracy to prepare students for modern careers.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Mathematical literacy", "Quantitative skills", "Number skills"],
    pronunciation: "/ˈnjuːmərəsi/",
    icon: BookOpen,
  },
  {
    term: "Critical Thinking",
    definition:
      "The objective analysis and evaluation of an issue in order to form a judgment, involving logical reasoning and evidence-based conclusions.",
    example:
      "Universities should prioritize developing critical thinking skills over memorizing facts.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Analytical thinking", "Logical reasoning", "Problem-solving"],
    pronunciation: "/ˈkrɪtɪkəl ˈθɪŋkɪŋ/",
    icon: Brain,
  },
  {
    term: "Academic Achievement",
    definition:
      "The extent to which a student, teacher or institution has achieved their short or long-term educational goals, typically measured by examination results.",
    example:
      "Academic achievement alone doesn't guarantee success in life; practical skills are equally important.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Educational success",
      "Academic performance",
      "Learning outcomes",
    ],
    pronunciation: "/ˌækəˈdɛmɪk əˈtʃiːvmənt/",
    icon: Award,
  },
  {
    term: "Distance Learning",
    definition:
      "Education that takes place remotely, typically through online platforms, allowing students to learn from locations other than traditional classrooms.",
    example:
      "Distance learning became essential during the pandemic and has revolutionized access to education.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Remote learning", "Online education", "E-learning"],
    pronunciation: "/ˈdɪstəns ˈlɜːrnɪŋ/",
    icon: BookOpen,
  },
  {
    term: "Educational Equity",
    definition:
      "The principle of fairness in education, ensuring all students have access to the resources and opportunities they need to succeed regardless of background.",
    example:
      "Achieving educational equity requires addressing socioeconomic disparities that affect student performance.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Educational fairness", "Equal opportunity", "Academic justice"],
    pronunciation: "/ˌɛdʒʊˈkeɪʃənəl ˈɛkwɪti/",
    icon: Users,
  },
  {
    term: "Learning Disabilities",
    definition:
      "Neurological disorders that affect the brain's ability to receive, process, store, and respond to information, impacting academic performance.",
    example:
      "Students with learning disabilities often require specialized teaching methods and additional support.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Learning difficulties",
      "Learning differences",
      "Academic challenges",
    ],
    pronunciation: "/ˈlɜːrnɪŋ ˌdɪsəˈbɪlɪtiz/",
    icon: Brain,
  },
  {
    term: "Extracurricular Activities",
    definition:
      "Activities pursued in addition to the normal course of study, such as sports, clubs, or volunteer work that contribute to personal development.",
    example:
      "Extracurricular activities help students develop leadership skills and explore interests beyond academics.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "After-school activities",
      "Co-curricular programs",
      "Enrichment activities",
    ],
    pronunciation: "/ˌɛkstrəkəˈrɪkjələr ækˈtɪvɪtiz/",
    icon: Users,
  },
  {
    term: "Student Engagement",
    definition:
      "The degree of attention, curiosity, interest, and participation that students show when learning, directly impacting academic success.",
    example:
      "Interactive teaching methods significantly improve student engagement compared to traditional lectures.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Academic involvement",
      "Learning participation",
      "Student motivation",
    ],
    pronunciation: "/ˈstudənt ɪnˈɡeɪdʒmənt/",
    icon: Users,
  },
  {
    term: "Academic Misconduct",
    definition:
      "Dishonest or unethical behavior in academic work, including plagiarism, cheating, or falsifying information in educational settings.",
    example:
      "Universities have strict policies against academic misconduct to maintain the integrity of their degrees.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Academic dishonesty",
      "Scholastic fraud",
      "Educational cheating",
    ],
    pronunciation: "/ˌækəˈdɛmɪk ˈmɪskɒndʌkt/",
    icon: CheckCircle,
  },
  {
    term: "Dropout Rate",
    definition:
      "The percentage of students who leave school before completing their course of study, often used as an indicator of educational system effectiveness.",
    example:
      "High dropout rates in urban schools indicate the need for better support systems for at-risk students.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Attrition rate", "School leaving rate", "Educational wastage"],
    pronunciation: "/ˈdrɒpaʊt reɪt/",
    icon: Users,
  },
  {
    term: "Educational Technology",
    definition:
      "The use of technological tools and resources to facilitate and enhance teaching and learning processes in educational environments.",
    example:
      "Educational technology has transformed classrooms, making learning more interactive and accessible.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["EdTech", "Digital learning tools", "Instructional technology"],
    pronunciation: "/ˌɛdʒʊˈkeɪʃənəl tɛkˈnɒlədʒi/",
    icon: BookOpen,
  },
  {
    term: "Competency-Based Learning",
    definition:
      "An educational approach that focuses on students mastering specific skills and knowledge rather than spending a set amount of time in class.",
    example:
      "Competency-based learning allows students to progress at their own pace once they demonstrate mastery.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Mastery-based learning",
      "Outcome-based education",
      "Skill-based learning",
    ],
    pronunciation: "/ˈkɒmpɪtənsi beɪst ˈlɜːrnɪŋ/",
    icon: Award,
  },
  {
    term: "Learning Outcomes",
    definition:
      "Specific statements that describe what students are expected to know, understand, or be able to do as a result of their learning experience.",
    example:
      "Clear learning outcomes help teachers design effective lessons and assess student progress accurately.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Educational objectives", "Learning goals", "Academic targets"],
    pronunciation: "/ˈlɜːrnɪŋ ˈaʊtkʌmz/",
    icon: CheckCircle,
  },
  {
    term: "Differentiated Instruction",
    definition:
      "A teaching approach that tailors instruction to meet individual students' needs, interests, and learning styles within the same classroom.",
    example:
      "Differentiated instruction ensures that both advanced and struggling students receive appropriate challenges.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Individualized teaching",
      "Adaptive instruction",
      "Personalized learning",
    ],
    pronunciation: "/ˌdɪfərɛnʃiˌeɪtɪd ɪnˈstrʌkʃən/",
    icon: Brain,
  },
  {
    term: "Academic Integrity",
    definition:
      "The moral code or ethical policy of academia that includes values such as honesty, trust, fairness, and responsibility in scholarly work.",
    example:
      "Maintaining academic integrity is crucial for preserving the credibility of educational institutions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Scholarly honesty", "Academic ethics", "Educational ethics"],
    pronunciation: "/ˌækəˈdɛmɪk ɪnˈtɛɡrɪti/",
    icon: CheckCircle,
  },
  {
    term: "Formative Assessment",
    definition:
      "Ongoing evaluations during the learning process that provide feedback to improve teaching and student understanding before final grading.",
    example:
      "Formative assessment helps teachers identify learning gaps and adjust their instruction accordingly.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Ongoing evaluation",
      "Progress monitoring",
      "Developmental assessment",
    ],
    pronunciation: "/ˈfɔːrmətɪv əˈsɛsmənt/",
    icon: CheckCircle,
  },
  {
    term: "Summative Assessment",
    definition:
      "Evaluation administered at the end of an instructional unit to determine whether learning goals have been achieved, typically for grading purposes.",
    example:
      "Final examinations and standardized tests are examples of summative assessment used to measure learning.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Final evaluation",
      "Concluding assessment",
      "End-of-term testing",
    ],
    pronunciation: "/ˈsʌmətɪv əˈsɛsmənt/",
    icon: Award,
  },
  {
    term: "Learning Retention",
    definition:
      "The ability to retain and recall information or skills over time, indicating the effectiveness of teaching methods and learning strategies.",
    example:
      "Active learning techniques significantly improve learning retention compared to passive lecture-based teaching.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Knowledge retention",
      "Information recall",
      "Memory consolidation",
    ],
    pronunciation: "/ˈlɜːrnɪŋ rɪˈtɛnʃən/",
    icon: Brain,
  },
  {
    term: "Collaborative Learning",
    definition:
      "An educational approach where students work together in small groups to achieve shared learning goals and complete tasks collectively.",
    example:
      "Collaborative learning develops communication skills while allowing students to learn from each other's perspectives.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Group learning",
      "Cooperative education",
      "Team-based learning",
    ],
    pronunciation: "/kəˈlæbərətɪv ˈlɜːrnɪŋ/",
    icon: Users,
  },
  {
    term: "Self-Directed Learning",
    definition:
      "A process where individuals take initiative and responsibility for their own learning, identifying needs and choosing appropriate strategies.",
    example:
      "Self-directed learning skills are essential for success in higher education and professional development.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Independent learning",
      "Autonomous learning",
      "Self-regulated learning",
    ],
    pronunciation: "/sɛlf dɪˈrɛktɪd ˈlɜːrnɪŋ/",
    icon: Brain,
  },
  {
    term: "Educational Psychology",
    definition:
      "The study of how people learn in educational settings, including the effectiveness of educational interventions and teaching methods.",
    example:
      "Understanding educational psychology helps teachers create more effective learning environments for their students.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Learning psychology",
      "Instructional psychology",
      "Academic psychology",
    ],
    pronunciation: "/ˌɛdʒʊˈkeɪʃənəl saɪˈkɒlədʒi/",
    icon: Brain,
  },
  {
    term: "Blended Learning",
    definition:
      "An educational approach that combines online educational materials and opportunities for interaction with traditional classroom methods.",
    example:
      "Blended learning offers flexibility while maintaining the benefits of face-to-face instruction.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Hybrid learning", "Mixed-mode learning", "Flexible learning"],
    pronunciation: "/ˈblɛndɪd ˈlɜːrnɪŋ/",
    icon: BookOpen,
  },
  {
    term: "Academic Excellence",
    definition:
      "The demonstrated ability to perform, achieve, and excel in scholastic activities, representing the highest standards of educational achievement.",
    example:
      "The university's commitment to academic excellence attracts students from around the world.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Educational distinction",
      "Scholarly achievement",
      "Academic superiority",
    ],
    pronunciation: "/ˌækəˈdɛmɪk ˈɛksələns/",
    icon: Award,
  },
  {
    term: "Learning Curve",
    definition:
      "The rate at which someone learns a new skill or acquires knowledge, often representing the relationship between learning progress and time.",
    example:
      "The steep learning curve for advanced mathematics requires dedicated study and practice.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Learning progression",
      "Skill acquisition rate",
      "Knowledge development",
    ],
    pronunciation: "/ˈlɜːrnɪŋ kɜːrv/",
    icon: Brain,
  },
  {
    term: "Educational Reform",
    definition:
      "The planned alteration of educational systems, policies, or practices aimed at improving educational quality, accessibility, or effectiveness.",
    example:
      "Educational reform initiatives focus on updating curricula to meet 21st-century skill requirements.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "School reform",
      "Educational transformation",
      "System modernization",
    ],
    pronunciation: "/ˌɛdʒʊˈkeɪʃənəl rɪˈfɔːrm/",
    icon: BookOpen,
  },
  {
    term: "Graduate Studies",
    definition:
      "Advanced academic programs pursued after completing an undergraduate degree, including master's and doctoral level education.",
    example:
      "Graduate studies provide specialized knowledge and research skills necessary for academic or professional careers.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Postgraduate education",
      "Advanced studies",
      "Higher education",
    ],
    pronunciation: "/ˈɡrædʒuət ˈstʌdiz/",
    icon: GraduationCap,
  },
  {
    term: "Learning Style",
    definition:
      "Individual differences in how people prefer to receive, process, and retain information, such as visual, auditory, or kinesthetic learning.",
    example:
      "Understanding different learning styles helps teachers adapt their methods to reach all students effectively.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Learning preference", "Cognitive style", "Learning modality"],
    pronunciation: "/ˈlɜːrnɪŋ staɪl/",
    icon: Brain,
  },
  {
    term: "Educational Institution",
    definition:
      "An organization dedicated to providing education, including schools, colleges, universities, and other learning establishments.",
    example:
      "Choosing the right educational institution is crucial for achieving your academic and career goals.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Academic institution",
      "Learning establishment",
      "Educational organization",
    ],
    pronunciation: "/ˌɛdʒʊˈkeɪʃənəl ˌɪnstɪˈtuːʃən/",
    icon: BookOpen,
  },
  {
    term: "Academic Discipline",
    definition:
      "A branch of knowledge or field of study with its own particular methods, terminology, and areas of expertise within educational systems.",
    example:
      "Psychology is an academic discipline that combines scientific research with practical applications.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Field of study", "Subject area", "Academic domain"],
    pronunciation: "/ˌækəˈdɛmɪk ˈdɪsɪplɪn/",
    icon: BookOpen,
  },
  {
    term: "Intellectual Development",
    definition:
      "The growth and enhancement of cognitive abilities, critical thinking skills, and mental capacity through education and experience.",
    example:
      "Quality education focuses on intellectual development rather than just memorizing information.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Cognitive development", "Mental growth", "Intellectual growth"],
    pronunciation: "/ˌɪntəˈlɛktʃuəl dɪˈvɛləpmənt/",
    icon: Brain,
  },
  {
    term: "Educational Resources",
    definition:
      "Materials, tools, and support systems used to facilitate learning and teaching, including books, technology, and human resources.",
    example:
      "Schools in rural areas often lack adequate educational resources compared to urban institutions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Learning materials", "Teaching resources", "Academic tools"],
    pronunciation: "/ˌɛdʒʊˈkeɪʃənəl rɪˈzɔːrsɪz/",
    icon: BookOpen,
  },
  {
    term: "School Administration",
    definition:
      "The management and organization of educational institutions, including policy implementation, resource allocation, and operational oversight.",
    example:
      "Effective school administration is essential for creating a positive learning environment for students.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Educational management",
      "School leadership",
      "Academic administration",
    ],
    pronunciation: "/skuːl ədˌmɪnɪˈstreɪʃən/",
    icon: Users,
  },
  {
    term: "Learning Environment",
    definition:
      "The physical, social, and cultural context in which learning occurs, including classroom settings, resources, and interpersonal dynamics.",
    example:
      "A positive learning environment encourages student participation and reduces anxiety about making mistakes.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Educational setting",
      "Academic atmosphere",
      "Study environment",
    ],
    pronunciation: "/ˈlɜːrnɪŋ ɪnˈvaɪrənmənt/",
    icon: BookOpen,
  },
  {
    term: "Educational Attainment",
    definition:
      "The highest level of education completed by an individual, often used as a measure of educational success and socioeconomic status.",
    example:
      "Higher educational attainment is strongly correlated with better employment prospects and earning potential.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Academic achievement",
      "Educational level",
      "Scholastic accomplishment",
    ],
    pronunciation: "/ˌɛdʒʊˈkeɪʃənəl əˈteɪnmənt/",
    icon: Award,
  },
  {
    term: "Remedial Education",
    definition:
      "Additional instruction designed to help students overcome learning difficulties or knowledge gaps in fundamental academic skills.",
    example:
      "Many universities offer remedial education programs to help students meet college-level academic standards.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Developmental education",
      "Academic support",
      "Corrective instruction",
    ],
    pronunciation: "/rɪˈmiːdiəl ˌɛdʒʊˈkeɪʃən/",
    icon: Brain,
  },
  {
    term: "Educational Methodology",
    definition:
      "The systematic approach to teaching and learning, including theories, strategies, and techniques used in educational practice.",
    example:
      "Modern educational methodology emphasizes interactive and student-centered approaches over traditional lecture formats.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Teaching approach",
      "Instructional strategy",
      "Pedagogical method",
    ],
    pronunciation: "/ˌɛdʒʊˈkeɪʃənəl ˌmɛθəˈdɒlədʒi/",
    icon: Brain,
  },
  {
    term: "Academic Performance",
    definition:
      "The extent to which students meet educational goals and demonstrate learning through various measures such as grades and test scores.",
    example:
      "Factors affecting academic performance include study habits, motivation, and access to educational resources.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "Educational achievement",
      "Scholastic success",
      "Learning outcomes",
    ],
    pronunciation: "/ˌækəˈdɛmɪk pərˈfɔːrməns/",
    icon: Award,
  },
  {
    term: "Knowledge Transfer",
    definition:
      "The process by which learned information, skills, or competencies are applied to new situations or contexts beyond the original learning environment.",
    example:
      "Effective education promotes knowledge transfer, enabling students to apply classroom learning to real-world situations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Skill application",
      "Learning application",
      "Knowledge application",
    ],
    pronunciation: "/ˈnɒlɪdʒ ˈtrænsfər/",
    icon: Brain,
  },
  {
    term: "Educational Funding",
    definition:
      "Financial resources allocated to support educational institutions, programs, and student learning, including government budgets and private investment.",
    example:
      "Adequate educational funding is crucial for maintaining quality schools and ensuring equal opportunities for all students.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: [
      "School financing",
      "Educational investment",
      "Academic funding",
    ],
    pronunciation: "/ˌɛdʒʊˈkeɪʃənəl ˈfʌndɪŋ/",
    icon: BookOpen,
  },
];

const relatedTopics = [
  {
    id: "society-culture",
    title: "Society & Culture",
    description:
      "Explore how education shapes society and cultural development",
    icon: "🏛️",
  },
  {
    id: "economy-work",
    title: "Economy & Work",
    description:
      "Learn about the relationship between education and employment",
    icon: "💼",
  },
];

const studyTips = [
  {
    tip: "Personal Experience",
    description:
      "Draw from your own educational experiences to make answers more authentic and engaging.",
    icon: CheckCircle,
  },
  {
    tip: "Compare Systems",
    description:
      "Compare education systems between countries to demonstrate broader knowledge.",
    icon: Lightbulb,
  },
  {
    tip: "Future Trends",
    description:
      "Discuss how technology and online learning are changing education globally.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "How has education changed in your country?",
    tips: "Discuss 'curriculum' changes, 'standardized testing', and 'technology integration'.",
  },
  {
    question: "What makes a good teacher?",
    tips: "Use terms like 'inclusive education', 'lifelong learning', and teaching methodologies.",
  },
  {
    question: "Should university education be free?",
    tips: "Reference 'literacy rates', 'vocational training' alternatives, and economic benefits.",
  },
  {
    question: "How important is learning a second language?",
    tips: "Connect to 'lifelong learning', global communication, and career opportunities.",
  },
];

const pronunciationTips = [
  {
    term: "Curriculum",
    tip: "Stress on the second syllable: cur-RIC-u-lum",
    common_mistake: "Don't stress the first syllable",
  },
  {
    term: "Vocational",
    tip: "Stress on the second syllable: vo-CA-tion-al",
    common_mistake: "Don't pronounce as 'vacation-al'",
  },
];

export default function EducationVocabularyPage() {
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
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl font-bold mb-4">Education Vocabulary</h1>
            <p className="text-xl text-purple-100 mb-6">
              Advanced education vocabulary for IELTS Speaking Band 7-9. Master
              academic terms related to curriculum, literacy, learning systems,
              and educational development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                6 Academic Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                IELTS Examples
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
              Education Terms
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
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: "25%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 3 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search education terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                          <IconComponent className="w-6 h-6 text-purple-600" />
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
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                      <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-purple-800 italic">
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

        {/* Pronunciation Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Pronunciation Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pronunciationTips.map((tip, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tip.term}
                </h3>
                <div className="space-y-2">
                  <p className="text-green-700 text-sm">
                    <strong>Tip:</strong> {tip.tip}
                  </p>
                  <p className="text-red-700 text-sm">
                    <strong>Avoid:</strong> {tip.common_mistake}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Common IELTS Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Common IELTS Education Questions
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
            How to Use Education Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/environment">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Environment
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/health-lifestyle">
                Next: Health & Lifestyle
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Practice Education Topics</h2>
          <p className="text-purple-100 mb-6">
            Education is frequently tested in IELTS Speaking. Practice
            discussing school systems, teaching methods, and learning
            preferences using these academic terms.
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
              <Link href="/speaking/vocabulary/health-lifestyle">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
