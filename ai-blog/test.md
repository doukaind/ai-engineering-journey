# AI Engineering Journey — Blog

Blog o AI zbudowany w React + TypeScript. Projekt edukacyjny dokumentujący podróż przez świat AI Engineering.

---

## Czym w ogóle jest React?

React to biblioteka JavaScript stworzona przez Meta (Facebook). Zamiast manipulować HTML bezpośrednio (jak w jQuery), piszesz **komponenty** — małe, niezależne kawałki UI które React sam aktualizuje kiedy dane się zmieniają.

Zamiast myśleć *"zmień ten element HTML"*, myślisz *"jaki stan ma moja aplikacja i jak powinna wyglądać dla tego stanu"*. React zajmuje się resztą.

Komponent to zwykła funkcja która zwraca JSX:

```tsx
function Przycisk() {
  return <button>Kliknij mnie</button>
}
```

---

## Co to jest JSX / TSX?

JSX to składnia która wygląda jak HTML wewnątrz JavaScript. TSX to to samo ale w plikach TypeScript. Przeglądarka tego nie rozumie — Vite zamienia to na zwykły JavaScript przed uruchomieniem.

Różnice JSX/TSX od HTML:
- `class` → `className`
- `for` → `htmlFor`
- Każdy tag musi być zamknięty: `<img />` nie `<img>`
- Wyrażenia JS/TS wstawiasz przez klamry: `{zmienna}`, `{2 + 2}`, `{warunek && <div/>}`

---

## Czym jest TypeScript?

TypeScript to JavaScript z systemem typów. Oznacza to że każda zmienna, parametr funkcji i wartość zwracana ma zadeklarowany typ. Kompilator TypeScript wyłapuje błędy zanim uruchomisz kod.

**Podstawowe typy:**
```ts
const name: string = 'Dawid'
const age: number = 25
const isActive: boolean = true
const nothing: null = null
const nothing2: undefined = undefined
```

**Tablice:**
```ts
const names: string[] = ['Alice', 'Bob']
const ids: number[] = [1, 2, 3]
```

**Interfejsy — definiujesz kształt obiektu:**
```ts
interface User {
  id: number
  name: string
  email: string
  isAdmin: boolean
}

const user: User = {
  id: 1,
  name: 'Dawid',
  email: 'dawid@example.com',
  isAdmin: false,
}
```

**Typy opcjonalne (?):**
```ts
interface Topic {
  id: number
  title: string
  description?: string  // opcjonalne — może być string albo undefined
}
```

**Typy w funkcjach:**
```ts
// parametry i typ zwracany
function add(a: number, b: number): number {
  return a + b
}

// funkcja nic nie zwraca
function log(message: string): void {
  console.log(message)
}
```

W React TypeScript jest szczególnie przydatny do typowania **props** komponentów — wiesz dokładnie co każdy komponent przyjmuje.

---

## Stos technologiczny

| Warstwa | Technologia | Dlaczego |
|---------|-------------|----------|
| Framework | React 18 + Vite | Vite jest wielokrotnie szybszy od CRA, hot reload działa natychmiastowo |
| Język | TypeScript | Wyłapuje błędy w edytorze zanim uruchomisz kod, lepsze podpowiedzi |
| Stylowanie | Tailwind CSS | Utility-first, nie trzeba pisać własnych klas, świetna dokumentacja |
| Routing | React Router v6 | Standard dla nawigacji w SPA |
| Formularze | React Hook Form | Lekka biblioteka, mniej boilerplate niż ręczne `useState` |
| Ikony | Lucide React | Darmowe, spójne ikony jako komponenty React |
| Animacje | Framer Motion | Najprostsze API do płynnych animacji w React |

---

## Opis każdej paczki

### Vite

**Co to jest:** narzędzie do budowania projektu. Uruchamia serwer deweloperski, zamienia TSX na JS, bundluje pliki do produkcji.

**Dlaczego nie `create-react-app`:** CRA jest przestarzały, nierozwijany od 2023 roku i bardzo wolny. Vite startuje w sekundy, hot reload działa natychmiastowo.

**Co robi w praktyce:**
- `npm run dev` → uruchamia serwer na `localhost:5173`
- `npm run build` → generuje zoptymalizowane pliki do hostingu
- `npm run typecheck` → sprawdza typy TypeScript bez uruchamiania

---

### TypeScript (wbudowany w template Vite)

**Co to jest:** nadzbiór JavaScript — każdy poprawny JS jest poprawnym TS, ale TS dodaje typy.

**Dlaczego:** edytor (VS Code) natychmiast podkreśla błędy zanim cokolwiek uruchomisz. Gdy przekazujesz zły typ do komponentu — błąd jest widoczny od razu. Przy większych projektach to oszczędza godziny debugowania.

```ts
// Bez TypeScript — brak błędu aż do runtime:
function greet(name) {
  return name.toUpperCase()
}
greet(123)  // crash w przeglądarce: "name.toUpperCase is not a function"

// Z TypeScript — błąd od razu w edytorze:
function greet(name: string): string {
  return name.toUpperCase()
}
greet(123)  // Błąd: Argument of type 'number' is not assignable to parameter of type 'string'
```

Pliki TypeScript w React mają rozszerzenie `.ts` (logika) lub `.tsx` (komponenty z JSX).

---

### Tailwind CSS

**Co to jest:** framework CSS z gotowymi klasami — piszesz je bezpośrednio w JSX zamiast tworzyć pliki `.css`.

**Porównanie:**
```css
/* Bez Tailwind — osobny plik CSS: */
.przycisk {
  background-color: purple;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}
```
```tsx
{/* Z Tailwind — wszystko w JSX: */}
<button className="bg-purple-600 text-white px-6 py-3 rounded-lg">
  Kliknij
</button>
```

**Przydatne wzorce klas:**
- `bg-purple-600` → background fioletowy (600 = ciemny odcień)
- `text-white` → kolor tekstu biały
- `px-6 py-3` → padding poziomy i pionowy
- `rounded-lg` → zaokrąglone rogi
- `hover:bg-purple-700` → zmiana tła przy najechaniu
- `hidden md:flex` → ukryj na mobile, pokaż jako flex na tablecie i wyżej
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` → responsywna siatka

---

### React Router (`react-router-dom`)

**Co to jest:** nawigacja w React. W tradycyjnej stronie każdy URL to osobny plik HTML. React Router symuluje nawigację bez przeładowania strony — masz jeden `index.html`, a React podmienia zawartość.

```tsx
// Definicja tras w App.tsx:
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/artykul/:id" element={<ArticlePage />} />
</Routes>

// Nawigacja — zamiast <a href> używasz <Link>:
<Link to="/artykul/123">Czytaj dalej</Link>
```

Dlaczego `react-router-dom` a nie `react-router`: wersja `dom` to paczka dla przeglądarek (istnieje też dla React Native). Zawiera `react-router` w środku.

---

### React Hook Form (`react-hook-form`)

**Co to jest:** biblioteka do formularzy. Zarządza wartościami pól, walidacją i błędami.

**Dlaczego nie ręcznie przez useState:**
```tsx
// Ręcznie — dużo kodu dla każdego pola:
const [email, setEmail] = useState('')
const [emailError, setEmailError] = useState('')
<input value={email} onChange={(e) => setEmail(e.target.value)} />

// React Hook Form — jedna linijka na pole:
<input {...register('email', { required: 'Podaj email' })} />
```

`register()` zwraca obiekt z propsami dla inputa (`value`, `onChange`, `onBlur`, `ref`) — spread operator `{...}` rozpakowuje je i wstrzykuje do inputa.

---

### Lucide React (`lucide-react`)

**Co to jest:** ponad 1000 ikon jako komponenty React (SVG). Stylujesz je przez props jak każdy komponent.

```tsx
import { Menu, X, Brain, Mail } from 'lucide-react'

<Brain size={28} className="text-purple-400" />
<Menu size={24} />
{isOpen ? <X size={24} /> : <Menu size={24} />}
```

Wszystkie ikony: `lucide.dev`

---

### Framer Motion (`framer-motion`)

**Co to jest:** biblioteka animacji. Deklarujesz stan początkowy i końcowy — biblioteka animuje między nimi.

```tsx
// Bez Framer Motion musisz pisać CSS keyframes
// Z Framer Motion — wprost w JSX:
<motion.div
  initial={{ opacity: 0, y: 30 }}  // stan startowy
  animate={{ opacity: 1, y: 0 }}   // stan końcowy
  transition={{ duration: 0.6 }}   // czas
>
  Zawartość
</motion.div>
```

`motion.div` to zwykły `<div>` z animacjami. Działa też `motion.h1`, `motion.button` itd.

---

## Inicjalizacja projektu

```bash
# 1. Stwórz projekt z Vite i szablonem React + TypeScript
npm create vite@latest ai-blog -- --template react-ts

# 2. Wejdź do folderu
cd ai-blog

# 3. Zainstaluj domyślne zależności
npm install

# 4. Zainstaluj Tailwind i jego zależności (tylko do developmentu)
npm install -D tailwindcss postcss autoprefixer

# 5. Wygeneruj pliki konfiguracyjne Tailwinda
npx tailwindcss init -p

# 6. Zainstaluj paczki produkcyjne
npm install react-router-dom react-hook-form lucide-react framer-motion

# 7. Zainstaluj typy dla paczek które ich nie mają wbudowanych
npm install -D @types/react @types/react-dom

# 8. Uruchom
npm run dev
```

> `--template react-ts` zamiast `--template react` — to jedyna różnica vs wersja JS.
> TypeScript wymaga plików `.ts` i `.tsx` zamiast `.js` i `.jsx`.

### Dlaczego `@types/...`?

Wiele paczek (szczególnie starszych) nie ma wbudowanych definicji typów TypeScript. Paczki `@types/xxx` z organizacji DefinitelyTyped dostarczają te definicje osobno. Bez nich TypeScript nie wiedziałby jakie typy mają funkcje z danej paczki.

`react-router-dom`, `react-hook-form`, `lucide-react` i `framer-motion` mają typy wbudowane — nie potrzebujesz dla nich `@types`.

### Konfiguracja Tailwind — `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // skanuje wszystkie pliki JS i TS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `src/index.css` — zastąp całą zawartość

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Struktura folderów

```
ai-blog/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Nawigacja z hamburgerem
│   │   │   └── Footer.tsx           # Stopka
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Sekcja powitalna
│   │   │   ├── TopicsSection.tsx    # Siatka tematów
│   │   │   └── Newsletter.tsx       # Formularz newslettera
│   │   └── ui/
│   │       └── TopicCard.tsx        # Pojedyncza karta tematu
│   ├── data/
│   │   └── topics.ts                # Dane tematów + typy TypeScript
│   ├── pages/
│   │   └── HomePage.tsx             # Strona główna
│   ├── types/
│   │   └── index.ts                 # Współdzielone interfejsy TypeScript
│   ├── App.tsx                      # Root komponent, routing
│   ├── main.tsx                     # Punkt wejścia
│   └── index.css                    # Globalne style + Tailwind
├── index.html
├── tailwind.config.js
├── tsconfig.json                    # Konfiguracja TypeScript
├── vite.config.ts
└── package.json
```

Różnica vs wersja JS: folder `src/types/` dla interfejsów TypeScript i rozszerzenia `.ts`/`.tsx` zamiast `.js`/`.jsx`.

---

## `tsconfig.json` — co to jest

Plik konfiguracyjny TypeScript. Vite generuje go automatycznie. Ważniejsze opcje które warto znać:

```json
{
  "compilerOptions": {
    "target": "ES2020",          // do jakiej wersji JS kompilować
    "lib": ["ES2020", "DOM"],    // jakie API są dostępne (DOM = window, document itp.)
    "module": "ESNext",          // format modułów
    "strict": true,              // ścisły tryb — wszystkie zmienne muszą mieć typy
    "jsx": "react-jsx",          // jak obsługiwać JSX/TSX
    "baseUrl": ".",              // katalog bazowy dla importów
    "paths": {
      "@/*": ["src/*"]           // alias: import { X } from '@/components/X'
    }
  }
}
```

`"strict": true` jest kluczowe — włącza wszystkie sprawdzenia TypeScript. Bez tego TypeScript jest zbyt pobłażliwy i traci sens.

---

## Kolejność tworzenia — krok po kroku

### Krok 1 — `src/types/index.ts`

Zacznij od typów — reszta kodu będzie z nich korzystać. Centralne miejsce dla wszystkich interfejsów:

```ts
// Interfejs opisuje kształt obiektu — jakie pola ma i jakiego są typu
export interface Topic {
  id: number
  title: string
  description: string
  icon: string
  tag: string
  color: string
}

// Typ dla danych formularza newslettera
export interface NewsletterFormData {
  email: string
}
```

---

### Krok 2 — `src/data/topics.ts`

Dane z typem TypeScript — `Topic[]` oznacza "tablica obiektów typu Topic":

```ts
import type { Topic } from '../types'

// Topic[] = tablica elementów typu Topic
// TypeScript sprawdzi czy każdy obiekt ma wszystkie wymagane pola
export const topics: Topic[] = [
  {
    id: 1,
    title: 'Prompt Engineering',
    description: 'Jak pisać prompty które działają. Techniki chain-of-thought, few-shot learning i strukturyzowanie zapytań.',
    icon: '🧠',
    tag: 'Podstawy',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 2,
    title: 'AI Agenci',
    description: 'Autonomiczne systemy AI które planują i wykonują zadania. LangChain, AutoGPT, agentowe frameworki.',
    icon: '🤖',
    tag: 'Zaawansowane',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 3,
    title: 'RAG — Retrieval Augmented Generation',
    description: 'Łączenie modeli językowych z własnymi danymi. Embeddingi, wektory, bazy danych jak Pinecone czy Chroma.',
    icon: '🔍',
    tag: 'Architektura',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 4,
    title: 'Fine-tuning modeli',
    description: 'Dostrajanie gotowych modeli do własnych zadań. Kiedy warto, ile kosztuje i jak mierzyć wyniki.',
    icon: '⚙️',
    tag: 'MLOps',
    color: 'from-orange-500 to-orange-700',
  },
  {
    id: 5,
    title: 'LLM w produkcji',
    description: 'Jak wdrażać modele językowe. Latency, koszty, monitoring, fallbacki i wszystko co idzie nie tak.',
    icon: '🚀',
    tag: 'DevOps',
    color: 'from-red-500 to-red-700',
  },
  {
    id: 6,
    title: 'Multimodal AI',
    description: 'Modele które rozumieją tekst, obrazy i dźwięk jednocześnie. GPT-4o, Gemini, Claude i ich możliwości.',
    icon: '👁️',
    tag: 'Trendy',
    color: 'from-pink-500 to-pink-700',
  },
]
```

---

### Krok 3 — `src/main.tsx`

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// document.getElementById('root') może zwrócić null — TypeScript o tym ostrzega
// Wykrzyknik (!) mówi TypeScript: "wiem że to nie jest null, zaufaj mi"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

`!` po `getElementById('root')` to **non-null assertion** — mówisz TypeScript że jesteś pewien że element istnieje. Możesz też napisać bezpieczniej:

```tsx
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')
ReactDOM.createRoot(rootElement).render(...)
```

---

### Krok 4 — `src/App.tsx`

```tsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'

// Komponenty React w TypeScript nie wymagają zwykle jawnej adnotacji zwracanego typu
// React.FC (FunctionComponent) jest opcjonalne — Vite i nowoczesny React tego nie wymaga
function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
```

---

### Krok 5 — `src/components/layout/Navbar.tsx`

**TypeScript w tym komponencie:** typ dla stanu `useState<boolean>`, tablica obiektów z typem inline.

```tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Brain } from 'lucide-react'

// Typ dla elementu nawigacji — inline interface
interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Strona główna', href: '/' },
  { label: 'Tematy', href: '#topics' },
  { label: 'Newsletter', href: '#newsletter' },
  { label: 'O blogu', href: '#about' },
]

function Navbar() {
  // TypeScript sam wywnioskuje typ jako boolean na podstawie wartości początkowej false
  // Możesz też napisać jawnie: useState<boolean>(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Brain className="text-purple-400" size={28} />
          <span>AI Journey</span>
        </Link>

        {/* hidden md:flex = ukryj na mobile, pokaż na desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link: NavLink) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* md:hidden = tylko na mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link: NavLink) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-gray-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
```

---

### Krok 6 — `src/components/sections/HeroSection.tsx`

```tsx
import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-purple-500/20 text-purple-300 text-sm font-medium px-4 py-1 rounded-full mb-6">
          AI Engineering od środka
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Buduję i opisuję
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {' '}AI z każdej strony
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Nie tylko teoria — konkretne projekty, kod, wyniki i wnioski.
          Co tydzień nowy temat z obszaru AI Engineering.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#topics"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Przeglądaj tematy
          </a>
          <a
            href="#newsletter"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Zapisz się na newsletter
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
```

---

### Krok 7 — `src/components/ui/TopicCard.tsx`

**TypeScript w tym komponencie:** typowanie props przez interfejs.

```tsx
import { motion } from 'framer-motion'
import type { Topic } from '../../types'

// Interfejs props komponentu — TypeScript wie co można przekazać
interface TopicCardProps {
  topic: Topic
}

// Destrukturyzacja: wyciągamy topic z obiektu props
// TypeScript sprawdzi że topic jest typu Topic
function TopicCard({ topic }: TopicCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-gray-900 border border-gray-800 rounded-xl p-6 cursor-pointer hover:border-gray-600 transition-colors"
    >
      {/* Template literal łączy stałe klasy ze zmienną topic.color */}
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center text-2xl mb-4`}>
        {topic.icon}
      </div>

      <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">
        {topic.tag}
      </span>

      <h3 className="text-xl font-bold mt-2 mb-3">{topic.title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">{topic.description}</p>
    </motion.div>
  )
}

export default TopicCard
```

---

### Krok 8 — `src/components/sections/TopicsSection.tsx`

```tsx
import { topics } from '../../data/topics'
import TopicCard from '../ui/TopicCard'
import type { Topic } from '../../types'

function TopicsSection() {
  return (
    <section id="topics" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Tematy które eksploruję</h2>
        <p className="text-gray-400 text-lg">
          Każdy wpis to głębokie zanurzenie w jeden obszar AI Engineering
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic: Topic) => (
          // key jest wymagany — React używa go do śledzenia elementów listy
          // Zawsze używaj unikalnego ID, nigdy indeksu tablicy
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </section>
  )
}

export default TopicsSection
```

---

### Krok 9 — `src/components/sections/Newsletter.tsx`

**TypeScript w tym komponencie:** typowanie `useForm<T>` przez generyk.

```tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, CheckCircle } from 'lucide-react'
import type { NewsletterFormData } from '../../types'

function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  // Generyk <NewsletterFormData> mówi React Hook Form jaką strukturę mają dane formularza
  // Dzięki temu register('email') i errors.email są typowane poprawnie
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterFormData>()

  // data jest automatycznie typu NewsletterFormData — TypeScript to wie
  const onSubmit = (data: NewsletterFormData): void => {
    console.log('Email do zapisu:', data.email)
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-2xl p-10">

          <Mail className="mx-auto text-purple-400 mb-4" size={40} />
          <h2 className="text-3xl font-bold mb-3">Bądź na bieżąco</h2>
          <p className="text-gray-400 mb-8">
            Co tydzień — jeden temat, jeden projekt, konkretne wnioski.
            Zero spamu, wypisanie jednym klikiem.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-green-400 text-lg font-medium">
              <CheckCircle size={24} />
              <span>Zapisano! Sprawdź skrzynkę.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="twoj@email.com"
                    className={`w-full bg-gray-900 border ${
                      errors.email ? 'border-red-500' : 'border-gray-700'
                    } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors`}
                    {...register('email', {
                      required: 'Podaj adres email',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Nieprawidłowy adres email',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 text-left">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
                >
                  Zapisz się
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
```

---

### Krok 10 — `src/components/layout/Footer.tsx`

```tsx
import { Brain } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4 text-center text-gray-500">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Brain size={18} className="text-purple-400" />
        <span className="font-semibold text-gray-300">AI Journey</span>
      </div>
      <p className="text-sm">
        Budowane i opisywane krok po kroku — {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
```

---

### Krok 11 — `src/pages/HomePage.tsx`

```tsx
import HeroSection from '../components/sections/HeroSection'
import TopicsSection from '../components/sections/TopicsSection'
import Newsletter from '../components/sections/Newsletter'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TopicsSection />
      <Newsletter />
    </>
  )
}

export default HomePage
```

---

## TypeScript w React — wzorce które będziesz używać najczęściej

### Typowanie props

```tsx
// Definiujesz interfejs i używasz go w parametrze funkcji
interface ButtonProps {
  label: string
  onClick: () => void        // funkcja bez parametrów, nic nie zwraca
  variant?: 'primary' | 'secondary'  // opcjonalny, tylko te dwie wartości
  disabled?: boolean
}

function Button({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}
```

### useState z jawnym typem

```tsx
// TypeScript sam wywnioskuje typ z wartości początkowej gdy to możliwe:
const [isOpen, setIsOpen] = useState(false)    // boolean — wnioskuje sam
const [count, setCount] = useState(0)          // number — wnioskuje sam
const [name, setName] = useState('')           // string — wnioskuje sam

// Kiedy musisz podać typ jawnie:
const [user, setUser] = useState<User | null>(null)  // może być User albo null
const [items, setItems] = useState<Topic[]>([])       // tablica Topic, początkowo pusta
```

### Event handlery

```tsx
// Obsługa zdarzeń — typ eventu pochodzi z elementu HTML
const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  console.log(e.target.value)
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault()
}

const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  console.log('kliknięto')
}
```

### import type

```ts
import type { Topic } from '../types'
```

`import type` zamiast `import` — importuje tylko definicję typu, nie wartość. TypeScript usuwa to przy kompilacji. Dobra praktyka: używaj `import type` gdy importujesz tylko interfejsy/typy, nie wartości.

---

## Kluczowe koncepty React

### useState

```tsx
const [wartość, setWartość] = useState<Typ>(wartośćPoczątkowa)

const [isOpen, setIsOpen] = useState(false)       // boolean
const [email, setEmail] = useState('')            // string
const [user, setUser] = useState<User | null>(null) // union type
```

Zmiana przez `set...()` → React przerysowuje komponent → UI się aktualizuje.
Nigdy nie mutuj stanu bezpośrednio: `isOpen = true` ← źle, React tego nie zauważy.

### Props

```tsx
// Przekazanie:
<TopicCard topic={topic} />

// Odbiór z typem:
interface TopicCardProps { topic: Topic }
function TopicCard({ topic }: TopicCardProps) { ... }
```

Props płyną tylko w jedną stronę: rodzic → dziecko. Dziecko nie może ich zmieniać.

### Warunkowe renderowanie

```tsx
{warunek && <Komponent />}           // pokaż jeśli true
{warunek ? <A /> : <B />}           // pokaż A albo B
```

### Listy przez .map()

```tsx
{items.map((item: Topic) => (
  <TopicCard key={item.id} topic={item} />   // key zawsze wymagany!
))}
```

---

## Najczęstsze błędy

| Błąd | Przyczyna | Rozwiązanie |
|------|-----------|-------------|
| `Cannot find module` | Zły path importu | Sprawdź ścieżkę i wielkość liter — TS rozróżnia |
| Tailwind nie działa | Brak dyrektyw w `index.css` | Dodaj `@tailwind base/components/utilities` |
| `key` prop warning | `.map()` bez `key` | Dodaj `key={item.id}` — nigdy `key={index}` |
| `Object is possibly null` | TypeScript widzi że coś może być null | Dodaj `!` (non-null assertion) lub sprawdzenie `if` |
| `Type 'X' is not assignable to type 'Y'` | Przekazujesz zły typ do props | Sprawdź interfejs i co przekazujesz |
| Gradient na tekście nie działa | Brak `text-transparent` | Potrzebujesz `text-transparent bg-clip-text bg-gradient-to-r from-... to-...` |
| Form nie waliduje | Brak `noValidate` na `<form>` | Dodaj `noValidate` żeby wyłączyć natywną walidację HTML |
| Stan się nie zmienia | Bezpośrednia mutacja | Zawsze używaj `setState(...)`, nigdy `state = ...` |

---

## Weryfikacja typów bez uruchamiania

```bash
# Sprawdź błędy TypeScript w całym projekcie
npx tsc --noEmit

# Albo przez skrypt npm (dodaj do package.json):
# "typecheck": "tsc --noEmit"
npm run typecheck
```

Uruchamiaj to regularnie — szczególnie przed commitem. Vite nie zatrzymuje builda przy błędach TS, więc możesz nieświadomie mieć błędy w typach.

---

## Następne kroki

- **Newsletter backend:** Resend lub Brevo — darmowe plany, proste REST API, TypeScript SDK
- **Artykuły w Markdown:** biblioteka `react-markdown` + pliki `.md` w `src/content/`
- **Wyszukiwarka:** `useState<string>` z `filter()` na tablicy tematów
- **Dark/light mode:** `useState` + klasa na `<html>` + `localStorage`
- **Deployment:** Vercel — podpinasz repo GitHub i każdy push automatycznie deployuje
