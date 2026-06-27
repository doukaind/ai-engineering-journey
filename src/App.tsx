import { useMemo, useState } from "react"
import type { Post, Topic } from "./data/posts";
import {  posts, TOPICS } from "./data/posts";
import { TopicSidebar } from "./components/topicSidebar/TopicSidebar";
import { Header } from "./components/header/Header";
import { PostCard } from "./components/postcard/PostCard";
import './App.css';

const fmt = new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
})

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTopic, setActiveTopic] = useState<Topic>('Wszystkie');
    const [selectedPost, setSelectedPost] = useState<Post | null>(null)

    const counts = useMemo(() => {
      const map: Record<string, number> = { Wszystkie: posts.length}

      for (const t of TOPICS.slice(1)){
        map[t] = posts.filter((p) => p.topic === t).length
      }
      return map
    }, []);

    const filtered = useMemo(() => (activeTopic === 'Wszystkie' ? posts : posts.filter((p) => p.topic === activeTopic)), [activeTopic])

    // React batches, joins these three states update into one
    function handleTopicSelect(topic: Topic) {
      setActiveTopic(topic);
      setSelectedPost(null);
      setSidebarOpen(false);
    }

    const sidebar = (<TopicSidebar activeTopic={activeTopic} counts={counts} onSelect={handleTopicSelect}/>)

    return (
      <div className="blog-root">
        <Header sidebarOpen={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)}/>
        <div className="blog-layout">
          <main className="blog-main">
            {selectedPost ? (
              <div className="post-detail">
                <button className="back-btn" onClick={() => setSelectedPost(null)}>← Wróć do listy</button>
                <div className="post-meta">
                  <span className="post-topic">{selectedPost.topic}</span>
                  <span className="post-date">{fmt.format(new Date(selectedPost.date))}</span>
                  <span>{selectedPost.readTime} min czytania</span>
                </div>
                <h1 className="detail-title">{selectedPost.title}</h1>
                <p className="detail-lead">{selectedPost.excerpt}</p>
                <div className="detail-placeholder">
                  <p>Treść artykułu zostanie dodana wkrótce…</p>
                </div>
              </div>
            ): (<>
            <div className="feed-header">
              <h2 className="feed-title">
                {activeTopic === 'Wszystkie' ? 'Wszystkie wpisy' : activeTopic}
              </h2>
              <span className="feed-count">{filtered.length === 1 ? 'wpis' : 'wpisów' }</span>
            </div>

            {filtered.length > 0 ? (<div className="post-list">{filtered.map((post) => (<PostCard key={post.id} post={post} onClick={setSelectedPost}/>))}</div>) : (<p className="empty-state">Brak wpisow w tej kateogorii</p>)}
            </>)}

          </main>
          <div className="sidebar-desktop">{sidebar}</div>
        </div>
        {sidebarOpen && (<div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}>
          <div className="sidebar-drawer" onClick={(e) => e.stopPropagation()}>
            {sidebar}
          </div>
        </div>)}
      </div>
    )
}

export default App;