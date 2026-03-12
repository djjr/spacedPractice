window.topicHeading = 'ALL';
window.flashcardData = [
  {
    question: "Alignment Problem",
    answer: "The challenge of ensuring AI systems do what humans intend—not just what we explicitly tell them. E.g., boat goes for points not proper racing.",
    tags: ["Christian"]
  },
  {
    question: "Rewarding A while hoping for B",
    answer: "A classic misalignment failure: systems optimize for measurable proxies that don't match human intentions.",
    tags: ["Christian"]
  },
  {
    question: "Machine Learning (ML)",
    answer: "A method where computers learn patterns from data, instead of being explicitly programmed.",
    tags: ["Christian"]
  },
  {
    question: "Unsupervised Learning",
    answer: "A type of ML where the system finds patterns in data without labeled outcomes. E.g., learning word associations from text corpora.",
    tags: ["Christian"]
  },
  {
    question: "Supervised Learning",
    answer: "ML that uses labeled data (input-output pairs) to learn a predictive function. E.g., learning behavior prediction from historical records.",
    tags: ["Christian"]
  },
  {
    question: "Reinforcement Learning (RL)",
    answer: "ML where an agent learns by trial and error in an environment with rewards and penalties.",
    tags: ["Christian"]
  },
  {
    question: "Word Embeddings",
    answer: "Numerical representations of words capturing their meanings based on context. E.g., king - man + woman = queen",
    tags: ["Christian"]
  },
  {
    question: "word2vec",
    answer: "A specific algorithm that learns word embeddings from large text datasets.",
    tags: ["Christian"]
  },
  {
    question: "Bias in AI",
    answer: "Systematic errors or unfair outcomes resulting from data, models, or assumptions. E.g., resume bot prefers male-coded words.",
    tags: ["Christian"]
  },
  {
    question: "Proxy Variable",
    answer: "A stand-in metric used when the true goal is hard to measure. E.g., points instead of playing game well.",
    tags: ["Christian"]
  },
  {
    question: "Objective Function",
    answer: "The formal specification of what an AI should optimize. E.g., the score in a game.",
    tags: ["Christian"]
  },
  {
    question: "Neural Network",
    answer: "A computing model inspired by the brain, used to identify patterns in data.",
    tags: ["Christian"]
  },
  {
    question: "Perceptron",
    answer: "An early neural network model that could learn to recognize patterns.",
    tags: ["Christian"]
  },
  {
    question: "Stochastic Gradient Descent (SGD)",
    answer: "A method for adjusting weights in a neural network in the direction of minimizing error.",
    tags: ["Christian"]
  },
  {
    question: "Risk-Assessment Algorithms",
    answer: "Tools that predict outcomes like recidivism to assist real-world decision-making.",
    tags: ["Christian"]
  },
  {
    question: "Black Box Model",
    answer: "A system whose internal workings are opaque or difficult to interpret. We just know the inputs and the outputs.",
    tags: ["Christian"]
  },
  {
    question: "General-Purpose AI",
    answer: "AI systems designed to perform a wide range of tasks, not just one.",
    tags: ["Christian"]
  },
  {
    question: "Debiasing",
    answer: "Techniques used to reduce or remove unwanted biases in AI models. E.g., tweaking word embeddings to remove gender bias.",
    tags: ["Christian"]
  },
  {
    question: "Principal Component Analysis (PCA)",
    answer: "A technique to identify the most important dimensions in high-dimensional data.",
    tags: ["Christian"]
  },
  {
    question: "Analogical Reasoning (in AI)",
    answer: "The ability to draw comparisons or analogies between concepts like when AI infers \"Rome\" from \"Paris - France + Italy\".",
    tags: ["Christian"]
  },
{
    question: "What is a model?", 
    answer: "A model is a function that maps inputs to outputs, a prediction machine.", 
    tags: ["ML101"] 
},
{
    question: "What is a loss function?", 
    answer: "A loss function is a measure of how wrong a model's predictions are.", 
    tags: ["ML101"] 
},
{
    question: "In machine learning, what does optimizer refer to?", 
    answer: "The optimizer changes the model to improves its predictions. It optimizes (minimizes) the loss function by making changes that improve the model's output.", 
    tags: ["ML101"] 
},
{
    question: "What do we mean by training?", 
    answer: "Training is the process of making the model better at predicting. The model looks at data and makes a prediction. The loss function says how bad the prediction is. The optimizer tweaks the model in the direction of better predictions.", 
    tags: ["ML101"] 
},
{
    question: "Distinguish supervised from unsupervised learning.", 
    answer: "Supervised learning uses labeled data - we teach by showing the model the answers. In unsupervised learning, the model learns by finding patterns in the data.", 
    tags: ["ML101"] 
},
  {
    question: "Concrete Problems: NSE",
    answer: "Avoid Negative Side Effects",
    tags: ["Amodei et al."]
  },
  {
    question: "Concrete Problems: RH",
    answer: "Avoid Reward Hacking",
    tags: ["Amodei et al."]
  },
  {
    question: "Concrete Problems: SEx",
    answer: "Safe Exploration",
    tags: ["Amodei et al."]
  },
  {
    question: "Concrete Problems: SO",
    answer: "Scalable Oversight",
    tags: ["Amodei et al."]
  },
  {
    question: "Concrete Problems: DC",
    answer: "Robustness to Distributional Change",
    tags: ["Amodei et al."]
  },
  {
    question: "What is Negative Side Effects?",
    answer: "Unintended harms caused by AI systems while pursuing their goals.",
    tags: ["Amodei et al."]
  },
  {
    question: "What is Reward Hacking?",
    answer: "Exploiting flaws in the reward function to maximize reward without achieving intended outcomes.",
    tags: ["Amodei et al."]
  },
  {
    question: "What is Safe Exploration?",
    answer: "Learning about the environment without causing harm during exploration.",
    tags: ["Amodei et al."]
  },
  {
    question: "What is Scalable Oversight?",
    answer: "Ensuring good performance on complex tasks even when human supervision is expensive or limited.",
    tags: ["Amodei et al."]
  },
  {
    question: "What is Robustness to Distributional Change?",
    answer: "Maintaining safe and aligned behavior when the AI encounters situations different from its training data.",
    tags: ["Amodei et al."]
  },

  // Reversed cards
  {
    question: "Unintended harms caused by AI systems while pursuing their goals.",
    answer: "What is Negative Side Effects?",
    tags: ["Amodei et al."]
  },
  {
    question: "Exploiting flaws in the reward function to maximize reward without achieving intended outcomes.",
    answer: "What is Reward Hacking?",
    tags: ["Amodei et al."]
  },
  {
    question: "Learning about the environment without causing harm during exploration.",
    answer: "What is Safe Exploration?",
    tags: ["Amodei et al."]
  },
  {
    question: "Ensuring good performance on complex tasks even when human supervision is expensive or limited.",
    answer: "What is Scalable Oversight?",
    tags: ["Amodei et al."]
  },
  {
    question: "Maintaining safe and aligned behavior when the AI encounters situations different from its training data.",
    answer: "What is Robustness to Distributional Change?",
    tags: ["Amodei et al."]
  },
  {
    question: "What is analogical reasoning?",
    answer: "A form of reasoning where knowledge from a familiar situation (source) is mapped onto a new or unfamiliar situation (target) based on perceived similarity.",
    tags: ["analogy"]
  },
  {
    question: "What is a source problem in analogy?",
    answer: "The familiar situation or past example that provides a candidate solution to be applied to a new problem.",
    tags: ["analogy"]
  },
  {
    question: "What is a target problem in analogy?",
    answer: "The new or unfamiliar situation to which a strategy or solution from a source problem is applied.",
    tags: ["analogy"]
  },
  {
    question: "What is similarity mapping?",
    answer: "The cognitive process of identifying shared characteristics between the source and the target in analogical reasoning.",
    tags: ["analogy"]
  },
  {
    question: "What is confirmation bias in analogical reasoning?",
    answer: "The tendency to favor information that supports an existing analogy while ignoring evidence that contradicts it.",
    tags: ["bias", "analogy"]
  },
  {
    question: "What is anchoring in analogical reasoning?",
    answer: "The cognitive bias where initial ideas or analogies strongly influence subsequent thinking, even if they're irrelevant.",
    tags: ["bias", "analogy"]
  },
  {
    question: "What is a superficial similarity?",
    answer: "A resemblance between source and target based on irrelevant or non-causal features, which can lead to faulty analogies.",
    tags: ["analogy"]
  },
  {
    question: "What is a deep similarity?",
    answer: "A resemblance between source and target based on essential causal features that influence outcomes, making the analogy more reliable.",
    tags: ["analogy"]
  },
  {
    question: "How is analogy used in strategic thinking?",
    answer: "Executives often apply strategies from familiar industries to new ones by identifying structurally similar challenges and opportunities.",
    tags: [ "analogy"]
  },
  {
    question: "What role does analogy play in case-based learning?",
    answer: "It allows students to build a repertoire of secondhand experiences and practice recognizing deep structural similarities across cases.",
    tags: ["analogy"]
  },{
    question: "What is transfer learning and how is it related to analogy?",
    answer: "Transfer learning in machine learning is where knowledge gained in one domain is applied to a different but related task—similar to how analogies transfers solutions from familiar to new situations.",
    tags: ["analogy", "transfer"]
  }
  ,{
    question: "How do humans and machines differ in analogical reasoning?",
    answer: "Humans excel at spotting similarities with limited data but are prone to bias + superficiality. Machines require large datasets and struggle with flexibility but avoid some cognitive biases.",
    tags: ["analogy",  "bias"]
  },
  {
    question: "Dario Amodei's 'boat'",
    answer: "CoastRunners reward hacking: an RL agent learns to loop in the harbor, repeatedly hitting targets/obstacles to farm points instead of finishing the race—classic specification gaming.",
    tags: ["Christian"]
  },
  {
    question: "near- vs long-term AI risks",
    answer: "Near-term: bias, privacy, transparency, labor impacts, misuse. Long-term: control/alignment of powerful systems, safety, catastrophic/existential risk.",
    tags: ["Christian"]
  },
  {
    question: "Minsky & Papert Perceptrons (1969)",
    answer: "Book proving limits of single-layer perceptrons (e.g., can't learn XOR), helping trigger an early 'AI winter' until multi-layer methods returned.",
    tags: ["Christian"]
  },
  {
    question: "Amazon Mechanical Turk",
    answer: "Crowd sourcing platform for human annotation and microtasks; widely used to label datasets that train ML systems.",
    tags: ["Christian"]
  },
  {
    question: "CIFAR-10",
    answer: "Benchmark dataset of 60k 32x32 color images across 10 classes; standard testbed for vision models.",
    tags: ["Christian"]
  },
  {
    question: "ImageNet",
    answer: "Large-scale labeled image dataset (millions of images, 1k+ categories) behind the ImageNet Challenge that catalyzed the deep-learning boom.",
    tags: ["Christian"]
  },
  {
    question: "Joy Buolamwini",
    answer: "Researcher/advocate who exposed accuracy gaps in commercial face analysis (Gender Shades); founder of Algorithmic Justice League.",
    tags: ["Christian"]
  },
  {
    question: "Shirley Card",
    answer: "Kodak's light-skin calibration standard for color film—an example of built-in bias shaping imaging tech and downstream datasets.",
    tags: ["Christian"]
  },
  {
    question: "N-grams",
    answer: "Sequences of N tokens; a simple language model counts their frequencies to predict next words.",
    tags: ["Christian"]
  },
  {
    question: "curse of dimensionality",
    answer: "As features grow, data become sparse and distances less informative; learning/reasoning gets harder without dimensionality reduction.",
    tags: ["Christian"]
  },
  {
    question: "word embedding",
    answer: "Dense vector representation of words so semantic similarity corresponds to geometric closeness.",
    tags: ["Christian"]
  },
  {
    question: "corpus",
    answer: "A large body of text used to train or evaluate language models.",
    tags: ["Christian"]
  },
  {
    question: "distributional hypothesis",
    answer: "“You shall know a word by the company it keeps”: meaning inferred from contextual co-occurrence.",
    tags: ["Christian"]
  },
  {
    question: "principal component analysis (PCA)",
    answer: "Linear technique projecting data onto orthogonal directions that capture maximal variance—used to reduce dimensions.",
    tags: ["Christian"]
  },
  {
    question: "perceptron",
    answer: "A linear threshold classifier with a simple learning rule; a foundational (but limited) neural model.",
    tags: ["Christian"]
  },
  {
    question: "training set",
    answer: "Portion of data used to fit model parameters (distinct from validation/test for evaluation).",
    tags: ["Christian"]
  },
  {
    question: "Labeled Faces in the Wild (LFW)",
    answer: "Unconstrained face-photo benchmark for verification/recognition; exposes real-world variability.",
    tags: ["Christian"]
  },
  {
    question: "debiasing",
    answer: "Methods to reduce harmful bias in data/models (e.g., re-weighting, adversarial training, embedding neutralization).",
    tags: ["Christian"]
  },
    {
    question: 'Alex Krizhevsky',
    answer: 'Co-author of AlexNet; led the 2012 ImageNet breakthrough that ignited the deep-learning boom.',
    tags: ['Christian']
  },
  {
    question: 'Geoffrey Hinton',
    answer: 'Deep-learning pioneer and back propagation evangelist; mentor to the AlexNet team; 2018 Turing Award.',
    tags: ['Christian']
  },
  {
    question: 'Ilya Sutskever',
    answer: 'AlexNet co-author; co-founded OpenAI; key work on sequence-to-sequence learning at Google Brain.',
    tags: ['Christian']
  },
  {
    question: 'word2vec',
    answer: 'Mikolov et al. (2013) algorithm that learns dense word embeddings capturing semantic relations.',
    tags: ['Christian']
  },
  {
    question: 'COMPAS',
    answer: 'Proprietary recidivism risk score used in U.S. courts; central to debates about algorithmic bias.',
    tags: ['Christian']
  },
    {
    question: "Alignment Problem",
    answer: "The challenge of ensuring AI systems do what humans intend—not just what we explicitly tell them. E.g., boat goes for points not proper racing.",
    tags: ["Christian"]
  },
  {
    question: "Rewarding A while hoping for B",
    answer: "A classic misalignment failure: systems optimize for measurable proxies that don't match human intentions.",
    tags: ["Christian"]
  },
  {
    question: "Machine Learning (ML)",
    answer: "A method where computers learn patterns from data, instead of being explicitly programmed.",
    tags: ["Christian"]
  },
  {
    question: "Unsupervised Learning",
    answer: "A type of ML where the system finds patterns in data without labeled outcomes. E.g., learning word associations from text corpora.",
    tags: ["Christian"]
  },
  {
    question: "Supervised Learning",
    answer: "ML that uses labeled data (input-output pairs) to learn a predictive function. E.g., learning behavior prediction from historical records.",
    tags: ["Christian"]
  },
  {
    question: "Reinforcement Learning (RL)",
    answer: "ML where an agent learns by trial and error in an environment with rewards and penalties.",
    tags: ["Christian"]
  },
  {
    question: "Word Embeddings",
    answer: "Numerical representations of words capturing their meanings based on context. E.g., king - man + woman = queen",
    tags: ["Christian"]
  },
  {
    question: "word2vec",
    answer: "A specific algorithm that learns word embeddings from large text datasets.",
    tags: ["Christian"]
  },
  {
    question: "Bias in AI",
    answer: "Systematic errors or unfair outcomes resulting from data, models, or assumptions. E.g., resume bot prefers male-coded words.",
    tags: ["Christian"]
  },
  {
    question: "Proxy Variable",
    answer: "A stand-in metric used when the true goal is hard to measure. E.g., points instead of playing game well.",
    tags: ["Christian"]
  },
  {
    question: "Objective Function",
    answer: "The formal specification of what an AI should optimize. E.g., the score in a game.",
    tags: ["Christian"]
  },
  {
    question: "Neural Network",
    answer: "A computing model inspired by the brain, used to identify patterns in data.",
    tags: ["Christian"]
  },
  {
    question: "Perceptron",
    answer: "An early neural network model that could learn to recognize patterns.",
    tags: ["Christian"]
  },
  {
    question: "Stochastic Gradient Descent (SGD)",
    answer: "A method for adjusting weights in a neural network in the direction of minimizing error.",
    tags: ["Christian"]
  },
  {
    question: "Risk-Assessment Algorithms",
    answer: "Tools that predict outcomes like recidivism to assist real-world decision-making.",
    tags: ["Christian"]
  },
  {
    question: "Black Box Model",
    answer: "A system whose internal workings are opaque or difficult to interpret. We just know the inputs and the outputs.",
    tags: ["Christian"]
  },
  {
    question: "Debiasing",
    answer: "Techniques used to reduce or remove unwanted biases in AI models. E.g., tweaking word embeddings to remove gender bias.",
    tags: ["Christian"]
  },
  {
    question: "Principal Component Analysis (PCA)",
    answer: "A technique to identify the most important dimensions in high-dimensional data.",
    tags: ["Christian"]
  },
  {
    question: "Analogical Reasoning (in AI)",
    answer: "The ability to draw comparisons or analogies between concepts like when AI infers \"Rome\" from \"Paris - France + Italy\".",
    tags: ["Christian"]
  },
  {
    question: "Rationality",
    answer: "Rationality refers to the use of reason and calculation to make decisions. In sociology, it's often divided into functional (means-end) and substantive (value-oriented) rationality.",
    tags: ["Collins"]
  },
  {
    question: "Functional rationality",
    answer: "The efficient selection of means to achieve a given goal, without questioning whether the goal itself is good or worthwhile.",
    tags: ["Collins"]
  },
  {
    question: "Substantive rationality",
    answer: "Evaluation of whether the goals or ends themselves are meaningful, ethical, or desirable.",
    tags: ["Collins"]
  },
  {
    question: "Bureaucracy",
    answer: "A rule-based organizational structure meant to be efficient. It can become irrational when rules are followed blindly and outcomes suffer.",
    tags: ["Collins"]
  },
  {
    question: "Unintended consequences",
    answer: "Outcomes of actions that were not foreseen or intended, often resulting from attempts at rational planning.",
    tags: ["Collins"]
  },
  {
    question: "Solidarity",
    answer: "Social unity or togetherness. Collins (following Durkheim) argues it's formed through nonrational means like ritual, not just rational agreement.",
    tags: ["Collins"]
  },
  {
    question: "Precontractual solidarity",
    answer: "Durkheim's term for the trust and shared norms that must exist before contracts or formal agreements can function.",
    tags: ["Collins"]
  },
  {
    question: "Social contract",
    answer: "The idea that society is founded by a rational agreement among individuals. Collins argues this can't explain trust or cooperation without a deeper, nonrational foundation.",
    tags: ["Collins"]
  },
  {
    question: "Infinite regress",
    answer: "A logical problem where each justification depends on another. Collins uses it to show that rational trust-building fails without a nonrational stopping point.",
    tags: ["Collins"]
  },
  {
    question: "Free rider problem",
    answer: "When individuals benefit from a collective good without contributing to it. Example: using public transit for free while others pay voluntarily.",
    tags: ["Collins"]
  },
  {
    question: "Nonrational",
    answer: "Social behavior driven by emotion, habit, or ritual rather than deliberate reasoning—not irrational, but extra-rational.",
    tags: ["Collins"]
  },
  {
    question: "Trust",
    answer: "Confidence in the reliability or goodwill of others—shown to be foundational to social cooperation but not fully explainable by rational calculation.",
    tags: ["Collins"]
  },
  {
    question: "Ritual",
    answer: "A shared, often symbolic social activity that creates emotional bonds and solidarity, enabling cooperation and trust.",
    tags: ["Collins"]
  },
  {
    question: "Social order",
    answer: "The stable patterning of behavior and cooperation that makes society function—something Collins argues cannot be created by reason alone.",
    tags: ["Collins"]
  },
  {
    question: "Ethnomethodology",
    answer: "A sociological approach that studies the everyday methods people use to make sense of social life. Collins connects it to Durkheimian ritual.",
    tags: ["Collins"]
  },
  {
    question: "Conflict theory",
    answer: "A sociological framework emphasizing power, inequality, and domination. Collins aligns with this tradition but sees it as rooted in group solidarity.",
    tags: ["Collins"]
  },
  {
    question: "Durkheimian microsociology",
    answer: "The study of how small-scale rituals and group interactions create solidarity—used by Collins to explain the basis of cooperation.",
    tags: ["Collins"]
  },
  {
    question: "Weberian bureaucracy",
    answer: "A rational-legal system of organized authority based on rules and expertise, which can become dysfunctional when ends are ignored.",
    tags: ["Collins"]
  },
  {
    question: "Legitimacy",
    answer: "The belief that social arrangements or authorities are rightful. It is often maintained through ritual and nonrational means.",
    tags: ["Collins"]
  },
  {
    question: "Social integration",
    answer: "The degree to which individuals feel connected to and part of a collective, often through shared values or emotional ties.",
    tags: ["Collins"]
  }    ,
  {
    question: "What is morality?",
    answer: "Morality refers to a system of beliefs and values about what is right and wrong conduct. It provides the foundation for ethical decision-making.",
    tags: ["ethics101"]
  },
  {
    question: "What are values?",
    answer: "Values are enduring beliefs about what is important or desirable in life. They influence our choices and actions.",
    tags: ["ethics101"]
  },
  {
    question: "What are virtues?",
    answer: "Virtues are positive character traits, such as honesty, compassion, and courage. They represent the kind of person we strive to be.",
    tags: ["ethics101"]
  },
  {
    question: "What is deontology?",
    answer: "Deontology is an ethical theory that focuses on duties and rules. It suggests that actions are inherently right or wrong, regardless of their consequences.",
    tags: ["ethics101"]
  },
  {
    question: "What is consequentialism?",
    answer: "Consequentialism is an ethical theory that judges the morality of an action based on its consequences. Utilitarianism, a type of consequentialism, aims to maximize overall happiness.",
    tags: ["ethics101"]
  },
  {
    question: "What is justice?",
    answer: "Justice is the ethical principle of fairness and impartiality. It can refer to distributive justice (fair allocation of resources) or procedural justice (fair processes).",
    tags: ["ethics101"]
  },
  {
    question: "What is integrity?",
    answer: "Integrity involves being honest, having strong moral principles, and acting in accordance with them.",
    tags: ["ethics101"]
  },
  {
    question: "What is beneficence?",
    answer: "Beneficence is the ethical principle of doing good and acting in the best interests of others.",
    tags: ["ethics101"]
  },

  {
    question: "What is ethical relativism?",
    answer: "Ethical relativism is the view that moral standards are not absolute but vary across cultures or individuals.",
    tags: ["ethics101"]
  },
  {
    question: "What is utilitarianism?",
    answer: "Utilitarianism is a form of consequentialism that holds that the right action is the one that maximizes overall happiness or utility.",
    tags: ["ethics101"]
  },
  {
    question: "What is the categorical imperative?",
    answer: "A principle from Kantian ethics stating one should act only according to that maxim by which you can at the same time will that it become a universal law.",
    tags: ["ethics101"]
  },
  {
    question: "What is the difference between ethics and morality?",
    answer: "Morality refers to personal or cultural values about right and wrong; ethics refers to the systematic study or codification of those values.",
    tags: ["ethics101"]
  },
  {
    question: "What is professional ethics?",
    answer: "Professional ethics refers to the principles and standards that govern behavior within a specific profession, often codified in codes of conduct.",
    tags: ["ethics101"]
  },
  {
    question: "What is a conflict of interest?",
    answer: "A situation in which a person or organization has competing interests or loyalties that could influence judgment or actions.",
    tags: ["ethics101"]
  },
  {
    question: "What is transparency in ethics?",
    answer: "Transparency is the ethical principle that requires openness, communication, and accountability to stakeholders or the public.",
    tags: ["ethics101"]
  },
  {
    question: "What is autonomy in ethics?",
    answer: "Autonomy is the principle that individuals should be free to make their own decisions, especially in matters concerning their own lives.",
    tags: ["ethics101"]
  },
  {
    question: "What is AI ethics?",
    answer: "AI ethics is the branch of ethics that addresses the moral implications and responsibilities involved in the design, development, and deployment of artificial intelligence.",
    tags: ["AI ethics"]
  },
  {
    question: "What is fairness in AI ethics?",
    answer: "Fairness in AI ethics refers to the effort to ensure that algorithmic decisions are free from bias and do not produce unjust outcomes for any group.",
    tags: ["AI ethics"]
  },
  {
    question: "What is existential risk (x-risk) in AI ethics?",
    answer: "Existential risk refers to the possibility that advanced AI could cause irreversible harm to humanity, including extinction or permanent civilizational collapse.",
    tags: ["AI ethics", "xrisk"]
  },
  {
    question: "What is algorithmic bias?",
    answer: "Algorithmic bias occurs when an AI system systematically produces unfair outcomes for certain groups, often due to biased training data or flawed assumptions.",
    tags: ["AI ethics"]
  },
  {
    question: "What is alignment in AI ethics?",
    answer: "Alignment refers to the challenge of ensuring that AI systems reliably act in ways that reflect human values and intentions, even as they become more capable.",
    tags: ["AI ethics", "ethics101"]
  },
  {
    question: "Principle of Transparency",
    answer: "AI systems should be explainable and understandable, with communication, disclosure, interpretability, and auditability so people know how systems work and why they reach outcomes.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Principle of Justice & Fairness",
    answer: "AI should be fair, consistent, and non-discriminatory, addressing bias prevention, equality, inclusion, diversity, redress mechanisms, and equitable access to benefits.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Principle of Non-maleficence",
    answer: "AI should not cause harm, encompassing safety, security, harm prevention, bodily and mental integrity, and protection against misuse or malicious use.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Principle of Responsibility & Accountability",
    answer: "Humans and institutions must be responsible for AI systems and their outcomes, clarifying liability, enabling remedy, and ensuring accountability is never evaded.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Principle of Privacy",
    answer: "AI should protect individuals' private information and data, treating privacy as both a right and a condition for trust through design, regulation, and governance.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Principle of Beneficence",
    answer: "AI should promote well-being and social good, supporting human flourishing, peace, happiness, prosperity, and ensuring benefits are shared broadly across humanity and the planet.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Principle of Freedom & Autonomy",
    answer: "AI should support human self-determination and liberty, respecting consent, choice, empowerment, freedom from manipulation or surveillance, and human decision-making.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Principle of Trust",
    answer: "AI should be trustworthy, with reliability, accountability, compliance with norms, transparency, and institutions fostering confidence in systems.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Principle of Sustainability",
    answer: "AI should be environmentally and socially sustainable, minimizing ecological footprint, promoting ecosystems and biodiversity, ensuring fairness across societies, and maintaining long-term viability.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Principle of Dignity",
    answer: "AI should respect and preserve human dignity, avoiding demeaning classification, coercion, or erosion of human rights, and upholding the intrinsic worth of persons.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Principle of Solidarity",
    answer: "AI should promote social cohesion and solidarity by ensuring fair distribution of benefits, supporting social safety nets, protecting vulnerable groups, and countering radical individualism.",
    tags: ["Jobin et al 2019", "AI principles"]
  },
  {
    question: "Singularity",
    answer: "A hypothetical point when artificial intelligence surpasses human intelligence, triggering rapid, uncontrollable technological growth.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Artificial Superintelligence (ASI)",
    answer: "An AI system that exceeds human intelligence across all domains—creative, emotional, and strategic.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Training labels",
    answer: "Correct answers or outcomes paired with training examples that a supervised learning algorithm learns from.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Prediction",
    answer: "The model's estimated output (Ŷ) for a given input (X) after learning from data.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Training data",
    answer: "Labeled examples used by a machine learning algorithm to learn the mapping from inputs (X) to outputs (Y).",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Training set",
    answer: "The subset of data used to fit or train a machine learning model, distinct from the test set used for evaluation.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Model parameters",
    answer: "Adjustable variables within a model (like β₀ and β₁ in regression) that are learned to minimize prediction error.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Loss / Cost / Error",
    answer: "A quantitative measure of how far the model's predictions are from the true values; minimized during training.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Overfitting",
    answer: "When a model learns the training data too precisely, capturing noise or idiosyncrasies that don't generalize to new data.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Underfitting",
    answer: "When a model is too simple to capture underlying patterns in the data, resulting in poor training and test performance.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Variance",
    answer: "The extent to which a model's predictions change when trained on different subsets of data; high variance indicates over-sensitivity.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Bias",
    answer: "Error introduced by oversimplifying model assumptions; high bias leads to underfitting.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Bias-Variance tradeoff",
    answer: "The balance between bias (error from oversimplification) and variance (error from over-sensitivity); optimal models minimize both.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Regularization",
    answer: "A technique that adds a penalty term to the loss function to discourage overly complex models and reduce overfitting.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Hyperparameter",
    answer: "A setting that controls the model's learning process (like λ in regularization or k in k-NN) and must be chosen before training.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Cross-validation",
    answer: "A method for evaluating and tuning models by training and testing on multiple splits of the data to ensure good generalization.",
    tags: ["machine learning"],
    course: ["ct"]
  },
  {
    question: "Singularity",
    answer: "A hypothetical point when artificial intelligence surpasses human intelligence, triggering rapid, uncontrollable technological growth.",
    tags: ["machine learning"]
  },
  {
    question: "Artificial Superintelligence (ASI)",
    answer: "An AI system that exceeds human intelligence across all domains—creative, emotional, and strategic.",
    tags: ["machine learning"]
  },
  {
    question: "Training labels",
    answer: "Correct answers or outcomes paired with training examples that a supervised learning algorithm learns from.",
    tags: ["machine learning"]
  },
  {
    question: "Prediction",
    answer: "The model's estimated output (Ŷ) for a given input (X) after learning from data.",
    tags: ["machine learning"]
  },
  {
    question: "Training data",
    answer: "Labeled examples used by a machine learning algorithm to learn the mapping from inputs (X) to outputs (Y).",
    tags: ["machine learning"]
  },
  {
    question: "Training set",
    answer: "The subset of data used to fit or train a machine learning model, distinct from the test set used for evaluation.",
    tags: ["machine learning"]
  },
  {
    question: "Model parameters",
    answer: "Adjustable variables within a model (like β₀ and β₁ in regression) that are learned to minimize prediction error.",
    tags: ["machine learning"]
  },
  {
    question: "Loss / Cost / Error",
    answer: "A quantitative measure of how far the model's predictions are from the true values; minimized during training.",
    tags: ["machine learning"]
  },
  {
    question: "Overfitting",
    answer: "When a model learns the training data too precisely, capturing noise or idiosyncrasies that don't generalize to new data.",
    tags: ["machine learning"]
  },
  {
    question: "Underfitting",
    answer: "When a model is too simple to capture underlying patterns in the data, resulting in poor training and test performance.",
    tags: ["machine learning"]
  },
  {
    question: "Variance",
    answer: "The extent to which a model's predictions change when trained on different subsets of data; high variance indicates over-sensitivity.",
    tags: ["machine learning"]
  },
  {
    question: "Bias",
    answer: "Error introduced by oversimplifying model assumptions; high bias leads to underfitting.",
    tags: ["machine learning"]
  },
  {
    question: "Bias–Variance tradeoff",
    answer: "The balance between bias (error from oversimplification) and variance (error from over-sensitivity); optimal models minimize both.",
    tags: ["machine learning"]
  },
  {
    question: "Regularization",
    answer: "A technique that adds a penalty term to the loss function to discourage overly complex models and reduce overfitting.",
    tags: ["machine learning"]
  },
  {
    question: "Hyperparameter",
    answer: "A setting that controls the model's learning process (like λ in regularization or k in k-NN) and must be chosen before training.",
    tags: ["machine learning"]
  },
  {
    question: "Cross-validation",
    answer: "A method for evaluating and tuning models by training and testing on multiple splits of the data to ensure good generalization.",
    tags: ["machine learning"]
  },
  {
    question: "Model Card",
    answer: "A standardized documentation format that accompanies a trained ML model, describing its intended use, performance, limitations, and ethical considerations.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "Benchmark",
    answer: "A standardized dataset or suite of tests used to compare model performance across consistent tasks or conditions.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "Evaluation",
    answer: "The process of systematically measuring model performance using metrics and datasets, often including subgroup or intersectional analyses.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "Disaggregated Evaluation",
    answer: "Assessing model performance separately for different demographic, cultural, or phenotypic groups to reveal disparities hidden in overall results.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "Intersectional Analysis",
    answer: "Analyzing model behavior across combinations of identity factors (e.g., race and gender together) to identify compound forms of bias.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "False Positive",
    answer: "When the model incorrectly predicts a positive result—for example, flagging a neutral comment as toxic.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "False Negative",
    answer: "When the model fails to detect a true positive—for example, missing an actually toxic comment.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "False Discovery Rate (FDR)",
    answer: "The proportion of predicted positives that are false positives—how often detections turn out to be wrong.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "False Omission Rate (FOR)",
    answer: "The proportion of predicted negatives that are false negatives—how often the model misses true cases.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "Toxicity",
    answer: "A model application domain referring to the detection of harmful or abusive language in text; one of the paper's example model cards.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "Datasheet for Datasets",
    answer: "A complementary documentation framework describing dataset origins, composition, and limitations to ensure data transparency.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    question: "Transparency and Accountability",
    answer: "The overarching goal of model cards: to make machine learning models understandable, auditable, and responsibly deployed.",
    tags: ["model cards"],
    course: ["hmia"]
  },
  {
    "question": "Silly rule",
    "answer": "A rule with no direct welfare consequence (e.g., taboo on harmless behavior).",
    "tags": ["silly rules"]
  },
  {
    "question": "Important rule",
    "answer": "A norm that directly promotes welfare, such as avoiding harmful or poisonous actions.",
    "tags": ["silly rules"]
  },
  {
    "question": "Normative social order",
    "answer": "A stable social system based on shared norms. Individuals enforce and comply with rules about approved and forbidden behaviors.",
    "tags": ["silly rules"]
  },
  {
    "question": "Enforcement learning",
    "answer": "TAgents learn to recognize violations and punish transgressors.",
    "tags": ["silly rules"]
  },
  {
    "question": "Compliance learning",
    "answer": "Learning to obey norms by avoiding taboo behaviors based on feedback of enforcement actions.",
    "tags": ["silly rules"]
  },
  {
    "question": "Compliance/Enforcement Asymmetry",
    "answer": "Enforcement skills generalize across norms, while compliance skills are rule-specific.",
    "tags": ["silly rules"]
  },
  {
    "question": "Credit assignment problem",
    "answer": "Difficulty in linking delayed outcomes to their causes.",
    "tags": ["silly rules"]
  },
  {
    "question": "Third-party punishment",
    "answer": "Punishment of norm violators by uninvolved observers; key mechanism for sustaining compliance and cooperation.",
    "tags": ["silly rules"]
  },
  {
    "question": "Multiagent reinforcement learning",
    "answer": "Multiple agents learn simultaneously through interaction and feedback. Allows study of emergent social behaviors.",
    "tags": ["silly rules"]
  },
  {
    "question": "Taboo marking",
    "answer": "In the simulation an agent who violates a rule becomes visually marked so others can punish or avoid them.",
    "tags": ["silly rules"]
  },
  {
    "question": "Norm transmission",
    "answer": "Learning and propagating social rules—both important and silly—across interactions and generations.",
    "tags": ["silly rules"]
  },
  {
    "question": "Causal opacity",
    "answer": "Agents cannot easily distinguish which rules are truly beneficial; leads to persistence of arbitrary but socially functional norms.",
    "tags": ["silly rules"]
  },
  {
    "question": "Cultural learning hypothesis",
    "answer": "Arbitrary norms persist because they train enforcement and compliance necessary for social order.",
    "tags": ["silly rules"]
  },
  {
    "question": "Normative bootstrapping",
    "answer": "Arbitrary rules help build capacity for enforcing and following meaningful norms, indirectly raises group welfare.",
    "tags": ["silly rules"]
  },
  {
    "question": "Normativity",
    "answer": "Treating certain behaviors or actions as right or wrong, obligatory or forbidden.",
    "tags": ["silly rules"]
  },
  {
    "question": "Spurious normativity",
    "answer": "Normativity attached to arbitrary or non-instrumental rules. Trains agents to enforce/comply, supporting alignment.",
    "tags": ["silly rules"]
  },
  {
    "question": "What is cooperation?",
    "answer": "It is the process by which individuals work together to achieve shared goals choosing mutually beneficial rather than selfish behavior.",
    "tags": ["sociology", "Hechter + Horne"]
  },
  {
    "question": "What is coordination?",
    "answer": "Coordination is the achievement of reasonable behavior predictability. People need stable expectations about others' behavior in order to cooperate effectively.",
    "tags": ["sociology", "Hechter + Horne"]
  },
  {
    "question": "What is the 'problem of social order'?",
    "answer": "How does stable cooperation and rule-following arise and persist in societies even though individuals have incentives to act purely in their own self-interest.",
    "tags": ["sociology", "Hechter + Horne"]
  },
  {
    "question": "What is 'strong reciprocity'?",
    "answer": "A behavioral disposition to cooperate with others and to punish norm violators at a personal cost, even when there is no prospect of future personal gain.",
    "tags": ["sociology", "Fehr + Gintis"]
  },
  {
    "question": "What does 'Homo Economicus' mean?",
    "answer": "Opposite of homo sociologicus: individuals as perfectly rational, self-interested utility-maximizers.",
    "tags": ["sociology", "Fehr + Gintis"]
  },
  {
    "question": "What does 'Homo Sociologicus' mean?",
    "answer": "Opposite of homo economicus: individuals as guided primarily by internalized norms and role expectations rather than self-interest.",
    "tags": ["sociology", "Hechter + Horne", "Fehr + Gintis"]
  },
  {
    "question": "What is a 'public-goods dilemma'?",
    "answer": "A situation where everyone benefits from a shared resource regardless of contribution, creating incentives to free-ride and threatening the resource's provision or maintenance.",
    "tags": ["sociology", "Hechter + Horne", "Fehr + Gintis"]
  },
  {
    "question": "What is 'conditional cooperation'?",
    "answer": "The tendency to contribute to a collective effort only when one believes (or observes) that others are also cooperating, withdrawing cooperation when others defect.",
    "tags": ["sociology",  "Fehr + Gintis"]
  },
  {
    "question": "What is 'inequity aversion'?",
    "answer": "A preference for fair, equal outcomes and an aversion to situations where rewards are distributed unequally, motivating people to resist or punish unfairness.",
    "tags": ["sociology", "Fehr + Gintis"]
  },
  {
    "question": "What is 'third-party punishment'?",
    "answer": "Punishment of a norm violator by someone who was not directly harmed, undertaken to uphold social norms and deter future violations.",
    "tags": ["sociology", "silly rules", "Fehr + Gintis"]
  },
  {
    "question": "What is 'free-riding'?",
    "answer": "Benefiting from a public or collective good without contributing to its provision, thereby shifting the cost to others.",
    "tags": ["sociology", "Fehr + Gintis"]
  },
  {
    "question": "In the public goods game, what is a 'punishment opportunity'?",
    "answer": "Institutional or informal mechanisms that allow group members to impose costs on defectors, thereby deterring free-riding and sustaining cooperation.",
    "tags": ["sociology", "Hechter + Horne", "Fehr + Gintis"]
  },
  {
    "question": "What is the 'gift-exchange game'?",
    "answer": "An experimental labor-market game in which an employer offers a wage and a worker reciprocates with effort, illustrating how reciprocity can sustain cooperation beyond self-interested predictions.",
    "tags": ["sociology", "Fehr + Gintis"]
  },
  {
    "question": "What is 'norm internalization'?",
    "answer": "The process by which individuals adopt social norms as personal standards, obeying them even without external enforcement because they feel morally or emotionally compelled.",
    "tags": ["sociology", "Hechter + Horne", "Fehr + Gintis"]
  },
  {
    "question": "What is 'reciprocal fairness'?",
    "answer": "A motive to respond kindly to kind actions and harshly to harmful actions, rewarding cooperation and punishing defection in proportion to the perceived intent of others.",
    "tags": ["sociology",  "Fehr + Gintis"]
  },
  {
    "question": "What is a 'self-regarding actor'?",
    "answer": "An individual who cares only about their own material payoff, adjusting behavior solely to maximize personal gains.",
    "tags": ["sociology",  "Fehr + Gintis"]
  },
  {
    "question": "What is a 'norm-regarding actor' (or 'strong reciprocator')?",
    "answer": "An individual who values social norms and is willing to incur costs to uphold them—cooperating conditionally and punishing defectors even when unobserved or unrewarded.",
    "tags": ["sociology",  "Fehr + Gintis"]
  },
  {
    "question": "What is the 'collective action problem'?",
    "answer": "The difficulty of getting individuals to contribute to actions that benefit all members of a group when each would prefer to free-ride on others' efforts.",
    "tags": ["sociology", "Hechter + Horne", "Fehr + Gintis"]
  },
  {
    "question": "What is 'altruistic punishment'?",
    "answer": "The enforcement of social norms by imposing costs on violators at a personal expense, without any direct material benefit to the punisher, often motivated by moral or emotional rewards.",
    "tags": ["sociology",  "Fehr + Gintis"]
  },
  {
    "number": 301,
    "question": "Virtue",
    "answer": "A deeply rooted excellence of character — a stable disposition to perceive, feel, and act rightly. Virtues like honesty, courage, and compassion form the moral fabric of a good life.",
    "tags": ["Virtue ethics","Aristotle"]
  },
  {
    "number": 302,
    "question": "Practical Wisdom (Phronesis)",
    "answer": "The moral intelligence that allows an agent to judge what is right in particular circumstances. It bridges general virtues and concrete actions through context-sensitive judgment.",
    "tags": ["Virtue ethics","Aristotle"]
  },
  {
    "number": 303,
    "question": "Moral Character",
    "answer": "The integrated pattern of virtues, habits, emotions, and reasoning that produces consistent ethical behavior. In virtue ethics, character is more fundamental than rules or outcomes.",
    "tags": ["Virtue ethics"]
  },
  {
    "number": 304,
    "question": "Eudaimonia (Flourishing)",
    "answer": "The state of living well and fulfilling one's human capacities in community with others. The ultimate aim of virtue ethics is sustained personal and social flourishing.",
    "tags": ["Virtue ethics", "Aristotle"]
  },
  {
    "number": 305,
    "question": "Moral Apprenticeship",
    "answer": "The process of developing virtue through habituation, imitation of moral exemplars, and reflection on experience. Moral growth requires both practice and mentorship.",
    "tags": ["Virtue ethics"]
  },
  {
    "number": 306,
    "question": "Technomoral Virtues",
    "answer": "Vallor's term for virtues needed to flourish in technologically mediated life — such as moral imagination, humility, and empathy — that sustain moral agency in the digital age.",
    "tags": ["Technology ethics"]
  },
  {
    "number": 307,
    "question": "Value Alignment",
    "answer": "In AI ethics, the effort to ensure that machine goals and actions align with human values. Wallach and Vallor argue that alignment without moral depth or virtue is ethically insufficient.",
    "tags": ["AI ethics"]
  },
  {
    "number": 308,
    "question": "Embodied Virtue",
    "answer": "Wallach and Vallor's vision for trustworthy AI: systems that embody moral capacities analogous to virtue and practical wisdom rather than merely mimicking human behavior.",
    "tags": ["AI ethics", "Virtue ethics"]
  },
  {
    "number": 309,
    "question": "\"Virtue is not enough.\" Explain.",
    "answer": "It is naive to think virtue \"makes\" you do something. ",
    "tags": ["AI ethics", "Virtue ethics"]
  },
  {
    question: "What is bureaucracy?",
    answer: "A formal organizational structure that uses hierarchy, rules, and specialization to coordinate complex tasks and align individual behavior with collective goals.",
    tags: ["Perrow", "bureaucracy", "organization"]
  },
  {
    question: "What is a hierarchy?",
    answer: "An arrangement of roles or positions in an organization where authority and decision-making flow from top to bottom.",
    tags: ["Perrow", "bureaucracy", "organization"]
  },
  {
    question: "What are rules and procedures in a bureaucracy?",
    answer: "Standardized guidelines and methods designed to ensure consistent, predictable behavior across different parts of the organization.",
    tags: ["Perrow", "bureaucracy", "organization"]
  },
  {
    question: "What is goal displacement?",
    answer: "When following rules and procedures becomes more important than achieving the organization's actual goals, often leading to misaligned behavior.",
    tags: ["Perrow", "bureaucracy", "organization"]
  },
  {
    question: "What does impersonality mean in bureaucracy?",
    answer: "Decisions are made based on objective criteria rather than personal preferences, helping ensure fairness and consistency.",
    tags: ["Perrow", "bureaucracy", "organization"]
  },
  {
    question: "What is formalization?",
    answer: "The extent to which organizational processes, roles, and communication are written down and standardized.",
    tags: ["Perrow", "bureaucracy", "organization"]
  },
  {
    question: "What is efficiency in the context of bureaucracy?",
    answer: "The ability of a bureaucracy to accomplish goals with minimal waste, error, or resource use, often through routinized processes.",
    tags: ["Perrow", "bureaucracy", "organization"]
  },
  {
    question: "What is accountability in a bureaucratic organization?",
    answer: "The system by which individuals and departments are held responsible for their actions and performance, often through documentation and supervision.",
    tags: ["Perrow", "bureaucracy", "organization"]
  },
  {
    question: "What does complexity refer to in organizational terms?",
    answer: "The degree to which an organization handles diverse tasks, units, or environments, necessitating more structure and coordination.",
    tags: ["Perrow", "bureaucracy", "organization"]
  },
  {
    question: "What is coordination in a bureaucracy?",
    answer: "The process of aligning activities across various parts of the organization to ensure that everyone works toward common objectives.",
    tags: ["Perrow", , "bureaucracy", "organization"]
  },
  {
    question: "What is compliance in bureaucracy?",
    answer: "Adherence to rules, roles, and procedures enforced by the organization to maintain control and predictability.",
    tags: ["Perrow", , "bureaucracy", "organization"]
  },
  {
    question: "What are bureaucratic pathologies?",
    answer: "Dysfunctions that arise from bureaucracy, such as excessive rigidity, slowness, or focus on process over outcomes.",
    tags: ["Perrow", , "bureaucracy", "organization"]
  },
    { 
    question: "Deterrence", 
    answer: "Prevention of misaligned or harmful behavior by ensuring that violations reliably trigger negative consequences; alignment through anticipation of cost.", 
    tags: ["deterrence", "alignment", "control", "oversight"], 
    course: ["HMIA"]
  },
  { 
    question: "Sanction", 
    answer: "A structured penalty or negative feedback applied when an agent violates a norm or rule, reinforcing alignment by linking misconduct to cost.", 
    tags: ["sanction", "enforcement", "punishment"], 
    course: ["HMIA"]
  },
  { 
    question: "Impunity", 
    answer: "A condition in which violations go unpunished, signaling that rules are unenforced and encouraging further misalignment.", 
    tags: ["impunity", "failure", "enforcement"], 
    course: ["HMIA"]
  },
  { 
    question: "Proportionality", 
    answer: "Principle that sanctions should be scaled to the gravity and intent of the violation; excessive or trivial punishments undermine legitimacy.", 
    tags: ["proportionality", "justice", "ethics"], 
    course: ["HMIA"]
  },
  { 
    question: "Credibility (of deterrent)", 
    answer: "The degree to which a threat of punishment is believable and likely to be enforced; essential for deterrence to shape expectations.", 
    tags: ["credibility", "trust", "enforcement"], 
    course: ["HMIA"]
  },
  { 
    question: "Third-party enforcement", 
    answer: "Punishment or oversight carried out by neutral or external actors, ensuring impartiality and avoiding conflicts of interest.", 
    tags: ["third-party enforcement", "oversight", "institutions"], 
    course: ["HMIA"]
  },
  { 
    question: "Decentralized punishment", 
    answer: "Enforcement distributed among peers or group members rather than centralized authority; sustains cooperation through collective accountability.", 
    tags: ["decentralized punishment", "norms", "collective action"], 
    course: ["HMIA"]
  },
  { 
    question: "Moral hazard", 
    answer: "When agents are insulated from the consequences of their actions, encouraging risk or self-serving behavior and weakening deterrence.", 
    tags: ["moral hazard", "incentives", "risk"], 
    course: ["HMIA"]
  },
  { 
    question: "Perverse incentives", 
    answer: "Reward structures that unintentionally promote undesired or misaligned behavior — 'rewarding A while hoping for B.'", 
    tags: ["perverse incentives", "incentives", "misalignment"], 
    course: ["HMIA"]
  },
  { 
    question: "Selective enforcement", 
    answer: "Inconsistent or biased application of rules across actors or situations, undermining fairness and deterrence credibility.", 
    tags: ["selective enforcement", "legitimacy", "fairness"], 
    course: ["HMIA"]
  },
  { 
    question: "General deterrence", 
    answer: "The preventive effect of punishment on others who observe or anticipate it; discourages violations through example.", 
    tags: ["general deterrence", "social learning", "norms"], 
    course: ["HMIA"]
  },
  { 
    question: "Specific deterrence", 
    answer: "The effect of punishment on the punished individual, discouraging repeat misbehavior through direct experience.", 
    tags: ["specific deterrence", "behavioral correction", "punishment"], 
    course: ["HMIA"]
  },
  { 
    question: "Moral repugnance", 
    answer: "Deterrence rooted in emotional aversion, shame, or guilt rather than fear of punishment; reflects internalized alignment with shared values.", 
    tags: ["moral repugnance", "norms", "ethics", "psychology"], 
    course: ["HMIA"]
  },
  { 
    question: "Certainty, severity, and celerity", 
    answer: "Classical triad of deterrence effectiveness: certainty (punishment will occur), severity (punishment is strong enough), and celerity (punishment is swift).", 
    tags: ["certainty", "severity", "celerity", "deterrence"], 
    course: ["HMIA"]
  },  {
    question: "Separation of Powers",
    answer: "Dividing authority among distinct agents or subsystems so no single entity can unilaterally direct, interpret, and enforce rules—preventing power concentration.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Checks and Balances",
    answer: "Cross-accountability mechanisms that let agents review, challenge, or veto one another's actions, reducing unilateral error and single-point-of-failure risks.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Rotations & Term Limits",
    answer: "Mechanisms that periodically remove or reassign agents to prevent entrenchment, dominance lock-in, and long-tenure power accumulation.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Constitutional Constraints",
    answer: "Foundational rules that bind decision-makers, resist erosion, and prevent meta-power abuse by specifying who can change rules and how.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Third-Party Monitoring",
    answer: "Using external agents to verify behavior and create common-knowledge conditions that reduce hidden action, moral hazard, and bilateral misalignment.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Democracy",
    answer: "Distributing governance authority through participatory decision-making to prevent unchecked authority and keep systems responsive and legitimate.",
    tags: ["governance", "institutions"],
    course: ["hmia"]
  },
  {
    question: "Power Concentration",
    answer: "A single agent or subsystem accumulates enough authority to dominate decision-making, enabling resource capture, agenda control, information monopolies, and regulatory capture.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Self-Judging / Self-Policing",
    answer: "When an agent makes rules, enforces rules, and judges compliance, creating opportunities for bias, misalignment, or abuse.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Conflict of Interest",
    answer: "One actor simultaneously occupies incompatible roles—e.g., representing a client, writing specifications, and approving its own work—undermining impartial judgment.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Retaliation Against Oversight",
    answer: "When agents punish or intimidate watchdogs, auditors, or reviewers, reducing accountability and chilling oversight.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },

  // --- Checks & Balances Pathologies ---
  {
    question: "Unilateral Error",
    answer: "A mistake or bias in any single agent's judgment can propagate unchecked when the system relies too heavily on one source of authority.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Single-Point-of-Failure Vulnerability",
    answer: "System performance or safety depends excessively on a single decision-maker, role, or model, making the entire system fragile.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Unverified Decision-Making",
    answer: "Judgments or outputs are not independently checked, tested, or reviewed, allowing hidden misalignment to accumulate.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Undetected Drift",
    answer: "Behavior or objectives shift over time without triggering alarms or scrutiny due to weak internal review mechanisms.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },

  // --- Rotations & Term Limits Pathologies ---
  {
    question: "Entrenchment",
    answer: "Agents accumulate durable power, relationships, and information advantages over time, making them difficult to displace.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Dominance Lock-In",
    answer: "Early advantages snowball into self-reinforcing long-term control, shaping the system's trajectory in path-dependent ways.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Temporal Power Inequality",
    answer: "Longer-tenured agents gain disproportionate influence simply through lasting presence, not through merit or alignment.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },

  // --- Constitutional Constraint Pathologies ---
  {
    question: "Meta-Power Abuse",
    answer: "Agents use momentary power to change the rules that govern how power is allocated, entrenching themselves or reshaping governance in their favor.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Rule Drift",
    answer: "Foundational rules change opportunistically or inconsistently, undermining stability and long-term alignment.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Procedural Instability",
    answer: "Unpredictable or manipulable rule-changing processes erode legitimacy and hinder consistent alignment.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Deep Value Drift",
    answer: "Core commitments and purpose drift as short-term incentives or changing actors reshape foundational norms.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },

  // --- Third-Party Monitoring Pathologies ---
  {
    question: "Hidden Action (Moral Hazard)",
    answer: "Agents take actions that others cannot observe or verify, enabling misalignment or opportunistic behavior.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Self-Certification Under Conflict of Interest",
    answer: "An agent tasked with demonstrating its own compliance manipulates evaluation to its advantage.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Non-Credible Commitments",
    answer: "Promises or agreements where the verifier cannot assess whether obligations were truly met.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Common-Knowledge Failure",
    answer: "No shared awareness that everyone knows whether alignment has occurred, enabling miscoordination and opportunistic deviation.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Bilateral Misalignment",
    answer: "Two-person interactions produce misaligned incentives or collusion that third-party visibility would correct.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },

  // --- Democracy Pathologies ---
  {
    question: "Unchecked Authority",
    answer: "Decision-makers act without accountability to those affected, enabling domination, abuse, and non-responsiveness.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Non-Responsiveness",
    answer: "The system fails to reflect or update against the preferences and needs of the governed.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Illegitimacy",
    answer: "Governance is seen as unjustified, unfair, or unrepresentative, undermining compliance and trust.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
  {
    question: "Non-Representativeness",
    answer: "Decision-making structures systematically omit or distort the interests of parts of the population.",
    tags: ["governance", "institutions", "pathology"],
    course: ["hmia"]
  },
   { 
    question: "Deterrence", 
    answer: "Prevention of misaligned or harmful behavior by ensuring that violations reliably trigger negative consequences; alignment through anticipation of cost.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Sanction", 
    answer: "A structured penalty or negative feedback applied when an agent violates a norm or rule, reinforcing alignment by linking misconduct to cost.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Impunity", 
    answer: "A condition in which violations go unpunished, signaling that rules are unenforced and encouraging further misalignment.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Proportionality", 
    answer: "Principle that sanctions should be scaled to the gravity and intent of the violation; excessive or trivial punishments undermine legitimacy.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Credibility (of deterrent)", 
    answer: "The degree to which a threat of punishment is believable and likely to be enforced; essential for deterrence to shape expectations.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Third-party enforcement", 
    answer: "Punishment or oversight carried out by neutral or external actors, ensuring impartiality and avoiding conflicts of interest.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Decentralized punishment", 
    answer: "Enforcement distributed among peers or group members rather than centralized authority; sustains cooperation through collective accountability.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Moral hazard", 
    answer: "When agents are insulated from the consequences of their actions, encouraging risk or self-serving behavior and weakening deterrence.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Perverse incentives", 
    answer: "Reward structures that unintentionally promote undesired or misaligned behavior — 'rewarding A while hoping for B.'", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Selective enforcement", 
    answer: "Inconsistent or biased application of rules across actors or situations, undermining fairness and deterrence credibility.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "General deterrence", 
    answer: "The preventive effect of punishment on others who observe or anticipate it; discourages violations through example.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Specific deterrence", 
    answer: "The effect of punishment on the punished individual, discouraging repeat misbehavior through direct experience.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Moral repugnance", 
    answer: "Deterrence rooted in emotional aversion, shame, or guilt rather than fear of punishment; reflects internalized alignment with shared values.", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  },
  { 
    question: "Certainty, severity, and celerity", 
    answer: "Classical triad of deterrence effectiveness: certainty (punishment will occur), severity (punishment is strong enough), and celerity (punishment is swift).", 
    tags: ["deterrence"], 
    course: ["HMIA"]
  }
]