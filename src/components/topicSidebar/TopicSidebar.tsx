import { TOPICS, type Topic } from "../../data/posts";

interface TopicSidebarProps {
    activeTopic: Topic;
    counts: Record<string, number>;
    onSelect: (topic: Topic) => void;
}

export const TopicSidebar = ({activeTopic, counts, onSelect}: TopicSidebarProps) => {
    return (
        <aside className="topic-sidebar">
            <p className="sidebar-heading">Tematy</p>
            <ul className="topic-list">
                {TOPICS.map((topic) => (
                    <li key={topic}>
                        <button className={`topic-btn${activeTopic === topic ? ' active' : ''}`} onClick={() => onSelect(topic)}>
                            <span>
                                {topic}
                            </span>
                            {counts[topic] != null && (<span className="topic-count">{counts[topic]}</span>)}
                        </button>
                    </li>
                ))}
            </ul>

        </aside>
    );
}