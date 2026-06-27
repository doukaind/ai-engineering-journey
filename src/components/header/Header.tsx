import './Header.css';

interface HeaderProps {
    sidebarOpen: boolean;
    onToggle: () => void;
}

export const Header = ({sidebarOpen, onToggle}: HeaderProps) => {

    return (<header className="blog-header">
        <button
            className="burger-btn"
            onClick={onToggle}
            aria-label={sidebarOpen ? 'Zamknij panel tematów' : 'Otwórz panel tematów'}
            aria-expanded={sidebarOpen}
        >
            <span className={`burger-icon${sidebarOpen ? ' open' : ''}`}>
                <span/><span/><span/>
            </span>
        </button>

        <div className="header-brand">
            <span>⚡</span>
            <p className="header-title">AI Engineering Journey</p>
        </div>
    </header>);
}