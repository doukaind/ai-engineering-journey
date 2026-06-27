export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  topic: string;
  date: string;
  readTime: number;
}

export const TOPICS = [
  'Wszystkie',
  'LLM Fundamentals',
  'Prompt Engineering',
  'RAG',
  'Fine-tuning',
  'Agenci & Narzędzia',
  'Bazy Wektorowe',
  'Deployment',
  'Ewaluacja',
] as const;

export type Topic = (typeof TOPICS)[number];

export const posts: Post[] = [
  {
    id: '1',
    title: 'Wprowadzenie do Large Language Models',
    excerpt:
      'Kompleksowy przegląd działania LLM i ich zastosowań w nowoczesnych systemach AI. Dowiedz się, jak transformery rewolucjonizują przetwarzanie języka naturalnego.',
    content: '',
    topic: 'LLM Fundamentals',
    date: '2026-06-01',
    readTime: 8,
  },
  {
    id: '2',
    title: 'Prompt Engineering – sztuka komunikacji z AI',
    excerpt:
      'Poznaj techniki konstruowania skutecznych promptów: few-shot learning, chain-of-thought, role prompting i wiele innych sprawdzonych metod.',
    content: '',
    topic: 'Prompt Engineering',
    date: '2026-06-05',
    readTime: 6,
  },
  {
    id: '3',
    title: 'RAG: Retrieval-Augmented Generation w praktyce',
    excerpt:
      'Jak łączyć modele językowe z zewnętrznymi bazami wiedzy. Przegląd architektur RAG, strategii podziału tekstu i wyboru modeli embeddingowych.',
    content: '',
    topic: 'RAG',
    date: '2026-06-10',
    readTime: 12,
  },
  {
    id: '4',
    title: 'Budowanie agentów AI z narzędziami',
    excerpt:
      'Praktyczne podejście do tworzenia autonomicznych agentów AI. Tool calling, planowanie i zarządzanie pamięcią w nowoczesnych frameworkach.',
    content: '',
    topic: 'Agenci & Narzędzia',
    date: '2026-06-15',
    readTime: 10,
  },
  {
    id: '5',
    title: 'Bazy wektorowe – serce systemu RAG',
    excerpt:
      'Porównanie popularnych baz wektorowych: Pinecone, Weaviate, Qdrant, pgvector. Kiedy wybrać każde rozwiązanie i jak ocenić ich wydajność.',
    content: '',
    topic: 'Bazy Wektorowe',
    date: '2026-06-18',
    readTime: 9,
  },
  {
    id: '6',
    title: 'Ewaluacja modeli językowych – co mierzyć i jak',
    excerpt:
      'Przegląd metryk do oceny LLM: BLEU, ROUGE, BERTScore, LLM-as-a-judge. Jak budować solidny pipeline ewaluacji dla własnych zastosowań.',
    content: '',
    topic: 'Ewaluacja',
    date: '2026-06-20',
    readTime: 7,
  },
];