import { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';

function FAQ() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const handleKeyDown = (e, id) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle(id);
        }
    };

    return (
        <section className="faq" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">FAQ</span>
                    <h2 id="faq-title" className="section-header__title">
                        常見問題
                    </h2>
                    <p className="section-header__desc">
                        找不到答案？歡迎透過右下角聊天室聯繫我們的客服團隊。
                    </p>
                </div>

                <div className="faq__list" role="list">
                    {FAQ_DATA.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}
                                role="listitem"
                            >
                                <button
                                    id={item.id}
                                    className="faq__question"
                                    aria-expanded={isOpen}
                                    aria-controls={`${item.id}-answer`}
                                    onClick={() => toggle(item.id)}
                                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                                >
                                    <span className="faq__question-text">{item.question}</span>
                                    <span className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`} aria-hidden="true">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 7.5L10 12.5L15 7.5"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    id={`${item.id}-answer`}
                                    className="faq__answer"
                                    role="region"
                                    aria-labelledby={item.id}
                                    style={{ maxHeight: isOpen ? '400px' : '0px' }}
                                >
                                    <div className="faq__answer-inner">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
