import ServicePageLayout from '../../components/ServicePageLayout';

export default function AIMLServices() {
  return (
    <ServicePageLayout
      title="Applied AI & Private LLM Deployment"
      subtitle="Retrieval, document extraction and private models — in your VPC or on your hardware"
      description="We build retrieval systems over your internal documents, extraction pipelines that read the forms your business actually runs on, and the private model deployments that keep both inside your own boundary — in your VPC or on hardware you own. Where a capability is still in progress, we say so."
      image="/aihero1.jpg"
      galleryImages={[
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop',
        '/aihero.jpg',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop',
      ]}
      benefitsImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1400&auto=format&fit=crop"
      features={[
        {
          title: 'Retrieval-Augmented Generation (RAG)',
          description: 'Developing AI systems that combine document retrieval with Generative AI to deliver accurate, context-aware responses.',
        },
        {
          title: 'Intelligent Automation & AI Agents',
          description: 'Automating end-to-end business processes using AI-driven agents and Robotic Process Automation (RPA).',
        },
        {
          title: 'Generative AI Solutions',
          description: 'Building Generative AI systems for text, image, code, and content generation using Large Language Models (LLMs).',
        },
         {
          title: 'Computer Vision',
          description: 'Designing vision-based AI systems for image analysis, video processing, object detection, and surveillance.',
        },
        {
          title: 'Natural Language Processing (NLP)',
          description: 'Creating intelligent language solutions such as chatbots, virtual assistants, and document intelligence systems.',
        },
       {
          title: 'Predictive Analytics & Forecasting',
          description: 'Applying advanced machine learning models to predict trends, demand, and business outcomes with precision.',
        },
      
      ]}
      benefits={[
        'Faster and smarter decision-making with AI-driven insights',
        'Automation of complex workflows using GenAI and AI agents',
        'Improved customer engagement through intelligent assistants',
        'Accurate, knowledge-based responses using RAG systems',
        'Scalable and future-ready AI solutions',
        'Reduced operational costs and improved productivity',
      ]}
      technologies={[
        'Python',
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'LangChain',
        'OpenAI APIs',
        'Vector Databases',
        'AWS SageMaker',
        'Google Vertex AI',
        'Azure OpenAI',
      ]}
      ctaText="Build Intelligent AI Solutions"
    />
  );
}
