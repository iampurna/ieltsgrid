import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Microscope,
  Search,
  BookOpen,
  Clock,
  Star,
  Lightbulb,
  CheckCircle,
  Volume2,
  Rocket,
  Dna,
  Zap,
  Beaker,
  BotIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title:
    "Science & Innovation Vocabulary for IELTS Speaking | Research & Technology Terms",
  description:
    "Master science and innovation vocabulary for IELTS Speaking. Learn advanced terms like genetic engineering, space exploration, medical breakthroughs with examples for Band 7-9.",
  keywords: [
    "IELTS science vocabulary",
    "genetic engineering IELTS",
    "space exploration vocabulary",
    "medical breakthroughs IELTS",
    "research vocabulary",
    "Band 7-9 science terms",
  ],
};

const vocabularyTerms = [
  {
    term: "Genetic Engineering",
    definition:
      "The direct manipulation of an organism's genes using biotechnology, which has the potential to eliminate certain hereditary diseases and improve human health.",
    example:
      "Genetic engineering has the potential to eliminate certain hereditary diseases and revolutionize modern medicine.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Gene therapy", "Biotechnology", "Genetic modification"],
    pronunciation: "/dʒəˈnetɪk ˌendʒəˈnɪrɪŋ/",
  },
  {
    term: "Space Exploration",
    definition:
      "The discovery and exploration of celestial structures in outer space by means of space technology, advancing our understanding of the universe and inspiring future generations.",
    example:
      "Space exploration advances technology and inspires future generations to pursue careers in science and engineering.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Aerospace research", "Cosmic exploration", "Space science"],
    pronunciation: "/speɪs ˌeksplərˈeɪʃən/",
  },
  {
    term: "Medical Breakthroughs",
    definition:
      "Significant discoveries or advances in medical science that dramatically improve treatment options and increase life expectancy for patients.",
    example:
      "Medical breakthroughs have significantly increased life expectancy and improved quality of life worldwide.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Medical advances",
      "Healthcare innovations",
      "Clinical discoveries",
    ],
    pronunciation: "/ˈmedɪkəl ˈbreɪkˌθruz/",
  },
  {
    term: "Renewable Technologies",
    definition:
      "Scientific innovations focused on developing sustainable energy sources and environmental solutions to reduce dependence on fossil fuels.",
    example:
      "Renewable technologies are crucial to reduce environmental damage and ensure sustainable energy for future generations.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Green technology",
      "Sustainable innovation",
      "Clean energy tech",
    ],
    pronunciation: "/rɪˈnuəbəl tekˈnɑlədʒiz/",
  },
  {
    term: "Research Funding",
    definition:
      "Financial support provided for scientific research and development, which is necessary for continued scientific innovation and progress.",
    example:
      "Sufficient research funding is necessary for scientific innovation and maintaining competitive advantages in technology.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Scientific investment",
      "Research grants",
      "Development funding",
    ],
    pronunciation: "/rɪˈsɜrtʃ ˈfʌndɪŋ/",
    icon: Beaker,
  },
  {
    term: "Scientific Method",
    definition:
      "A systematic process for experimentation and observation that ensures objectivity and repeatability in research.",
    example:
      "The scientific method ensures objectivity and repeatability in experiments across all scientific disciplines.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Research methodology",
      "Scientific approach",
      "Experimental process",
    ],
    pronunciation: "/ˌsaɪənˈtɪfɪk ˈmeθəd/",
  },
  {
    term: "Experiment",
    definition:
      "A test conducted to validate a hypothesis by controlling variables and measuring outcomes.",
    example:
      "She designed an experiment to measure plant growth under different light conditions.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Test", "Trial", "Investigation"],
    pronunciation: "/ɪkˈsperəmənt/",
  },
  {
    term: "Hypothesis",
    definition:
      "An educated guess or proposition made before testing that can be proven or disproven through experimentation.",
    example:
      "A strong hypothesis must be testable and based on careful observation of natural phenomena.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Prediction", "Proposition", "Assumption"],
    pronunciation: "/haɪˈpɑθəsəs/",
  },
  {
    term: "Observation",
    definition:
      "The process of noticing and recording phenomena carefully to gather accurate data for analysis.",
    example:
      "The experiment relied on precise observations over a three-week period to track changes.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Monitoring", "Recording", "Documentation"],
    pronunciation: "/ˌɑbzərˈveɪʃən/",
  },
  {
    term: "Evidence-based",
    definition:
      "Relying on observable, verifiable facts or data rather than opinions or assumptions.",
    example:
      "We should adopt evidence-based policies in medicine and education to ensure effectiveness.",
    partOfSpeech: "Adjective",
    difficulty: "Advanced",
    synonyms: ["Data-driven", "Fact-based", "Empirical"],
    pronunciation: "/ˈevədəns beɪst/",
  },
  {
    term: "Theory",
    definition:
      "A well-substantiated explanation of natural phenomena based on extensive evidence and testing.",
    example:
      "Darwin's theory of evolution remains widely accepted among scientists due to overwhelming evidence.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Scientific explanation", "Framework", "Model"],
    pronunciation: "/ˈθiəri/",
  },
  {
    term: "Innovation",
    definition:
      "A new idea, method, or device that brings practical improvements or solutions to existing problems.",
    example:
      "Technological innovation drives progress in all scientific fields and improves quality of life.",
    partOfSpeech: "Noun",
    difficulty: "Intermediate",
    synonyms: ["Invention", "Breakthrough", "Advancement"],
    pronunciation: "/ˌɪnəˈveɪʃən/",
  },
  {
    term: "Empirical Data",
    definition:
      "Information obtained through direct observation or experimentation rather than theoretical reasoning.",
    example:
      "Scientists must rely on empirical data rather than assumptions when drawing conclusions.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Observational data",
      "Experimental evidence",
      "Factual information",
    ],
    pronunciation: "/ɪmˈpɪrəkəl ˈdeɪtə/",
  },
  {
    term: "Falsifiability",
    definition:
      "The capacity for a scientific theory to be proven wrong through testing or counter-evidence.",
    example:
      "Popper emphasized the importance of falsifiability in scientific reasoning and theory development.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Testability", "Refutability", "Disprovability"],
    pronunciation: "/ˌfɔlsəfaɪəˈbɪləti/",
  },
  {
    term: "Peer Review",
    definition:
      "The evaluation of scientific work by other experts in the same field before publication.",
    example:
      "Peer review ensures the quality and reliability of published research in academic journals.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Expert evaluation", "Scientific review", "Academic assessment"],
    pronunciation: "/pɪr rəˈvju/",
  },
  {
    term: "Replication Study",
    definition:
      "A study conducted to confirm the findings of previous research using similar methods.",
    example:
      "Replication studies are crucial for establishing credibility and reliability in science.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Reproduction study",
      "Verification research",
      "Confirmatory study",
    ],
    pronunciation: "/ˌreplɪˈkeɪʃən ˈstʌdi/",
  },
  {
    term: "Double-blind Trial",
    definition:
      "An experiment in which neither participants nor researchers know who receives the treatment being tested.",
    example:
      "Drug approval processes often require rigorous double-blind trials to minimize bias.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Controlled trial", "Masked study", "Blinded experiment"],
    pronunciation: "/ˈdʌbəl blaɪnd ˈtraɪəl/",
  },
  {
    term: "Ethical Considerations",
    definition:
      "Moral issues surrounding scientific practice, particularly regarding human and animal subjects.",
    example:
      "Scientists must address ethical considerations when working with human subjects in medical research.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Moral issues", "Research ethics", "Ethical guidelines"],
    pronunciation: "/ˈeθəkəl kənˌsɪdəˈreɪʃənz/",
  },
  {
    term: "Paradigm Shift",
    definition:
      "A fundamental change in scientific approach or assumptions that transforms understanding of a field.",
    example:
      "The discovery of quantum mechanics was a major paradigm shift in physics.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Revolutionary change",
      "Fundamental shift",
      "Scientific revolution",
    ],
    pronunciation: "/ˈpærəˌdaɪm ʃɪft/",
  },
  {
    term: "Interdisciplinary Research",
    definition:
      "Research that integrates knowledge from multiple fields to address complex problems.",
    example:
      "Solving global warming requires interdisciplinary research across climatology and economics.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Cross-disciplinary study",
      "Multi-field research",
      "Integrated approach",
    ],
    pronunciation: "/ˌɪntərdɪsəˈplɪnəri rɪˈsɜrtʃ/",
  },
  {
    term: "Heuristic Model",
    definition:
      "A simplified approach to problem-solving that is practical and intuitive for understanding complex systems.",
    example:
      "Heuristics help scientists develop hypotheses when data is limited or incomplete.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Rule of thumb", "Practical approach", "Simplified method"],
    pronunciation: "/hjʊˈrɪstɪk ˈmɑdəl/",
  },
  {
    term: "Reductionism",
    definition:
      "Explaining complex systems by analyzing their simpler components rather than viewing them holistically.",
    example:
      "Reductionism is useful in molecular biology but limited in behavioral sciences.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Analytical approach", "Component analysis", "Bottom-up method"],
    pronunciation: "/rɪˈdʌkʃəˌnɪzəm/",
  },
  {
    term: "Systems Theory",
    definition:
      "An approach that views systems holistically and in relation to their environment rather than as isolated parts.",
    example:
      "Social science research now often incorporates systems theory for deeper insight.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Holistic approach", "Systems thinking", "Integrated analysis"],
    pronunciation: "/ˈsɪstəmz ˈθiəri/",
  },
  {
    term: "Epistemology",
    definition:
      "The study of knowledge and how we come to know and understand things through scientific inquiry.",
    example:
      "Philosophy and science intersect in discussions of epistemology and the nature of knowledge.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: [
      "Theory of knowledge",
      "Study of knowing",
      "Knowledge philosophy",
    ],
    pronunciation: "/ɪˌpɪstəˈmɑlədʒi/",
  },
  {
    term: "Anomaly",
    definition:
      "An observation or result that deviates from what is standard or expected in scientific research.",
    example:
      "An anomaly can often lead to new scientific breakthroughs and paradigm shifts.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Deviation", "Outlier", "Unexpected result"],
    pronunciation: "/əˈnɑməli/",
  },
  {
    term: "Null Hypothesis",
    definition:
      "The assumption that there is no effect or relationship in an experiment, used as a starting point for testing.",
    example:
      "Statistical testing always begins with a null hypothesis to ensure objective analysis.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Default assumption",
      "No-effect hypothesis",
      "Control assumption",
    ],
    pronunciation: "/nʌl haɪˈpɑθəsəs/",
  },
  {
    term: "Scientific Literacy",
    definition:
      "Understanding scientific concepts and processes necessary to make informed decisions about science-related issues.",
    example:
      "A society with higher scientific literacy is better equipped to make informed decisions about technology.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Science understanding",
      "Scientific knowledge",
      "Science education",
    ],
    pronunciation: "/ˌsaɪənˈtɪfɪk ˈlɪtərəsi/",
  },
  {
    term: "Controlled Variable",
    definition:
      "A factor that is kept constant in an experiment to ensure valid results and proper testing.",
    example:
      "Good experiments rely on isolating controlled variables to test specific hypotheses.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["Constant factor", "Fixed variable", "Control condition"],
    pronunciation: "/kənˈtroʊld ˈvɛriəbəl/",
  },
  {
    term: "Data Integrity",
    definition:
      "The accuracy and consistency of stored data throughout its lifecycle in scientific research.",
    example:
      "Without data integrity, scientific findings lose credibility and cannot be trusted.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Data accuracy", "Information reliability", "Data quality"],
    pronunciation: "/ˈdeɪtə ɪnˈteɡrəti/",
  },
  {
    term: "Causation",
    definition:
      "The relationship between cause and effect, demonstrating that one factor directly produces another.",
    example:
      "Distinguishing correlation from causation is a fundamental task in scientific research.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Cause and effect", "Causal relationship", "Direct influence"],
    pronunciation: "/kɔˈzeɪʃən/",
  },
  {
    term: "Longitudinal Study",
    definition:
      "A study conducted over a long period of time to track changes and developments.",
    example:
      "Longitudinal studies provide insights that short-term experiments cannot capture.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Long-term study", "Extended research", "Time-series study"],
    pronunciation: "/ˌlɑndʒəˈtudənəl ˈstʌdi/",
  },
  {
    term: "Scientific Consensus",
    definition:
      "General agreement among scientists on a topic based on accumulated evidence and research.",
    example:
      "There is a scientific consensus that climate change is driven by human activity.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Expert agreement",
      "Scientific agreement",
      "Research consensus",
    ],
    pronunciation: "/ˌsaɪənˈtɪfɪk kənˈsensəs/",
  },
  {
    term: "Computational Modelling",
    definition:
      "Simulating real-world systems using algorithms and data to predict outcomes and test theories.",
    example:
      "Engineers rely on computational modelling to test designs virtually before physical construction.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Computer simulation",
      "Mathematical modeling",
      "Digital simulation",
    ],
    pronunciation: "/ˌkɑmpjəˈteɪʃənəl ˈmɑdəlɪŋ/",
  },
  {
    term: "Translational Science",
    definition:
      "Turning basic scientific research into practical applications that benefit society and solve real problems.",
    example:
      "Modern medicine thrives on translational science for real-world impact and patient care.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Applied research",
      "Practical science",
      "Implementation research",
    ],
    pronunciation: "/trænzˈleɪʃənəl ˈsaɪəns/",
  },
  {
    term: "Research and Development",
    definition:
      "Systematic work to increase knowledge and use that knowledge to develop new applications and technologies.",
    example:
      "Companies invest heavily in research and development to create innovative products and maintain competitiveness.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["R&D", "Innovation research", "Product development"],
    pronunciation: "/rɪˈsɜrtʃ ænd dɪˈveləpmənt/",
  },
  {
    term: "Biotechnology",
    definition:
      "The use of living organisms or biological processes to develop products and technologies for various applications.",
    example:
      "Biotechnology has revolutionized medicine through genetic engineering and pharmaceutical development.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Bioengineering", "Biological technology", "Applied biology"],
    pronunciation: "/ˌbaɪoʊtekˈnɑlədʒi/",
  },
  {
    term: "Artificial Intelligence",
    definition:
      "Computer systems designed to perform tasks that typically require human intelligence, such as learning and problem-solving.",
    example:
      "Artificial intelligence is transforming scientific research by analyzing vast amounts of data quickly.",
    partOfSpeech: "Noun phrase",
    difficulty: "Intermediate",
    synonyms: ["AI", "Machine intelligence", "Computer intelligence"],
    pronunciation: "/ˌɑrtəˈfɪʃəl ɪnˈtelədʒəns/",
  },
  {
    term: "Climate Science",
    definition:
      "The scientific study of climate systems, climate change, and their effects on the environment and society.",
    example:
      "Climate science provides crucial data for understanding global warming and developing environmental policies.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Climatology", "Climate research", "Atmospheric science"],
    pronunciation: "/ˈklaɪmət ˈsaɪəns/",
  },
  {
    term: "Genetic Engineering",
    definition:
      "The direct manipulation of an organism's genes using biotechnology to modify genetic characteristics.",
    example:
      "Genetic engineering has enabled scientists to develop crops that are resistant to diseases and pests.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: ["Gene modification", "Genetic manipulation", "DNA engineering"],
    pronunciation: "/dʒəˈnetɪk ˌendʒəˈnɪrɪŋ/",
  },
  {
    term: "Nanotechnology",
    definition:
      "The manipulation of matter on an atomic and molecular scale to create materials with novel properties.",
    example:
      "Nanotechnology is being used to develop more efficient solar panels and targeted drug delivery systems.",
    partOfSpeech: "Noun",
    difficulty: "Advanced",
    synonyms: ["Molecular engineering", "Atomic manipulation", "Nanoscience"],
    pronunciation: "/ˌnænoʊtekˈnɑlədʒi/",
  },
  {
    term: "Sustainable Technology",
    definition:
      "Technology designed to meet current needs while minimizing environmental impact for future generations.",
    example:
      "Sustainable technology focuses on renewable energy sources and environmentally friendly manufacturing processes.",
    partOfSpeech: "Noun phrase",
    difficulty: "Advanced",
    synonyms: [
      "Green technology",
      "Eco-friendly technology",
      "Clean technology",
    ],
    pronunciation: "/səˈsteɪnəbəl tekˈnɑlədʒi/",
  },
];

const relatedTopics = [
  {
    id: "technology",
    title: "Technology",
    description: "Explore digital innovation and technological advancement",
    icon: "💻",
  },
  {
    id: "environment",
    title: "Environment",
    description:
      "Learn about environmental science and sustainability research",
    icon: "🌱",
  },
];

const studyTips = [
  {
    tip: "Scientific Evidence",
    description:
      "Reference specific scientific discoveries, Nobel Prize winners, or breakthrough technologies to support your points.",
    icon: CheckCircle,
  },
  {
    tip: "Ethical Considerations",
    description:
      "Discuss both benefits and potential risks of scientific advances, showing balanced thinking.",
    icon: Lightbulb,
  },
  {
    tip: "Future Impact",
    description:
      "Connect scientific innovations to their potential impact on society, healthcare, or the environment.",
    icon: Star,
  },
];

const commonQuestions = [
  {
    question: "How has science improved our lives?",
    tips: "Discuss 'medical breakthroughs', 'renewable technologies', and quality of life improvements.",
  },
  {
    question: "Should governments spend more money on space exploration?",
    tips: "Balance 'space exploration' benefits with 'research funding' priorities and social needs.",
  },
  {
    question: "What are the dangers of genetic engineering?",
    tips: "Address 'genetic engineering' ethical concerns while acknowledging medical benefits.",
  },
  {
    question: "Do you think science will solve environmental problems?",
    tips: "Connect 'renewable technologies' with environmental solutions and innovation potential.",
  },
];

export default function ScienceInnovationVocabularyPage() {
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
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Microscope className="w-16 h-16 mx-auto mb-6 text-cyan-200" />
            <h1 className="text-4xl font-bold mb-4">
              Science & Innovation Vocabulary
            </h1>
            <p className="text-xl text-cyan-100 mb-6">
              Advanced science and innovation vocabulary for IELTS Speaking Band
              7-9. Master terms related to genetic engineering, space
              exploration, medical breakthroughs, and research funding.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                5 Science Terms
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Research Examples
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Innovation Focus
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
              Science & Innovation Terms
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>5 terms</span>
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
              className="bg-cyan-600 h-2 rounded-full"
              style={{ width: "66.66%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">Topic 8 of 12</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search science terms..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
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
                          <BotIcon className="w-6 h-6 text-cyan-600" />
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
                    <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-400">
                      <h4 className="font-semibold text-cyan-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Example in IELTS Speaking:
                      </h4>
                      <p className="text-cyan-800 italic">"{vocab.example}"</p>
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
            Common IELTS Science Questions
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
            Using Science Vocabulary in IELTS Speaking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <IconComponent className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
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
              <Link href="/speaking/vocabulary/politics-governance">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Politics & Governance
              </Link>
            </Button>
            <Button asChild>
              <Link href="/speaking/vocabulary/media-communication">
                Next: Media & Communication
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Practice Section */}
        <section className="mt-12 bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Practice Science Topics</h2>
          <p className="text-cyan-100 mb-6">
            Science and innovation topics challenge examiners to assess your
            ability to discuss complex concepts. Practice explaining scientific
            advances and their societal impact.
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
              <Link href="/speaking/vocabulary/media-communication">
                Next Topic
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
