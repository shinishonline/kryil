import ServicePageLayout from '../../components/ServicePageLayout';

export default function AIMLServices() {
  return (
    <ServicePageLayout
      title="AI & Machine Learning"
      subtitle="Intelligent Solutions"
      description="Harness the power of artificial intelligence and machine learning to transform your business. We develop intelligent systems that automate processes, generate insights, and drive data-driven decision making."
      image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop"
      stats={[
        { value: '95%', label: 'Model Accuracy' },
        { value: '50+', label: 'AI Models Deployed' },
        { value: '10x', label: 'Process Speedup' },
        { value: '60%', label: 'Cost Reduction' },
      ]}
      features={[
        {
          title: 'Predictive Analytics',
          description: 'Advanced analytics solutions that forecast trends, identify patterns, and enable proactive decision-making.',
        },
        {
          title: 'Natural Language Processing',
          description: 'NLP solutions for chatbots, sentiment analysis, document processing, and automated content generation.',
        },
        {
          title: 'Computer Vision',
          description: 'Image and video analysis solutions for object detection, facial recognition, and visual inspection.',
        },
        {
          title: 'Recommendation Systems',
          description: 'Personalized recommendation engines that enhance user experience and drive engagement.',
        },
        {
          title: 'Process Automation',
          description: 'Intelligent automation solutions that streamline workflows and reduce manual intervention.',
        },
        {
          title: 'Custom ML Models',
          description: 'Bespoke machine learning models trained on your data to solve specific business challenges.',
        },
      ]}
      benefits={[
        'Data-driven insights that improve decision-making accuracy',
        'Automated processes that reduce costs and human error',
        'Personalized customer experiences that boost engagement',
        'Competitive advantage through intelligent automation',
        'Scalable AI solutions that grow with your needs',
        'Expert guidance from concept to production deployment',
      ]}
      technologies={[
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'OpenAI',
        'Hugging Face',
        'Python',
        'AWS SageMaker',
        'Azure ML',
        'Google Cloud AI',
        'LangChain',
      ]}
      ctaText="Explore AI Solutions"
    />
  );
}
