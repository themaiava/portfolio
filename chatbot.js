const responses = {
  greet: [
    "hi", "hello", "hey", "good morning", "good afternoon", "good evening", "howdy", "hiya"
  ],
  services: [
    "services", "service", "what do you offer", "what can you do", "offer", "help me with", "work"
  ],
  rates: [
    "rate", "rates", "price", "pricing", "cost", "how much", "fee", "fees", "charge", "charges", "pay"
  ],
  availability: [
    "available", "availability", "hire", "hiring", "open", "start", "when can you", "schedule", "book"
  ],
  experience: [
    "experience", "background", "years", "how long", "expert", "skill", "skills", "qualified"
  ],
  ai: [
    "ai", "automation", "automate", "n8n", "make", "zapier", "workflow", "bot", "ghl", "go high level"
  ],
  contact: [
    "contact", "email", "reach", "message", "talk", "connect", "get in touch", "send"
  ],
  thanks: [
    "thank", "thanks", "thank you", "awesome", "great", "perfect", "amazing", "cool"
  ]
};

const answers = {
  greet: "Hi there! 👋 I'm MAIA, Michelle's assistant. I can tell you about her services, rates, experience, or availability. What would you like to know?",
  services: `Michelle offers the following services:\n\n✅ Available Now:\n📋 Data Entry\n🔍 Lead Research\n📄 PDF Data Migration\n💬 Customer Service Support\n🗃️ File & Document Management\n\n🔄 Coming Soon:\n🤖 Custom AI Automation Workflows\n🧠 Executive Assistance + AI\n📞 AI Appointment Setting\n\n🎓 Open to Training:\nAdmin Support, Social Media, CRM Management, AI Automation Support\n\nWant to know more about any of these?`,
  rates: "Michelle's rate is $12–$18/hr depending on the task complexity, volume, and turnaround time. All projects start with a free 20-minute discovery call. Reach her at themaiava@gmail.com to get started!",
  availability: "Michelle is currently open to new clients! 🟢\n\nShe's available part-time or full-time with flexible hours — she works around your timezone with overlap so you're never out of sync. She covers US, UK, AU, and more. She responds within 24 hours. Book a discovery call or send her a message via the Contact page!",
  experience: "Michelle has 6+ years of VA experience covering:\n\n📋 Data entry and lead research (6 years — thousands of US business leads)\n📄 PDF data migration for dental screening records\n💬 Customer service and outbound calls\n🗃️ Digital file organization and systems\n\nShe's currently building AI automation skills on top of that foundation — honest about where she is, clear about where she's going.",
  ai: "AI automation is Michelle's current learning focus! 🤖\n\nShe's studying n8n, Make, and Go High Level to build automated workflows — starting with lead research automation. Her services are currently delivered manually with 6+ years of experience, and will be upgraded with automation as it ships.\n\nShe's also open to working under clients who want to train her on their own automation stack.",
  contact: "You can reach Michelle at:\n\n✉️ themaiava@gmail.com\n\nOr use the Contact page to send a message or book a free 20-minute discovery call. She responds within 24 hours, Mon–Fri!",
  thanks: "Happy to help! 😊 Feel free to ask anything else — or reach out to Michelle directly at themaiava@gmail.com.",
  fallback: "I'm not sure about that one — for anything specific, it's best to reach Michelle directly at themaiava@gmail.com. She's happy to chat! 😊"
};

function getReply(input) {
  const text = input.toLowerCase().trim();
  for (const [key, keywords] of Object.entries(responses)) {
    if (keywords.some(k => text.includes(k))) {
      return answers[key];
    }
  }
  return answers.fallback;
}

function buildChatbot() {
  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #chat-bubble {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 999;
    }

    #chat-toggle {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #f4845f;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      box-shadow: 0 4px 20px rgba(244, 132, 95, 0.4);
      transition: transform 0.2s, box-shadow 0.2s;
      color: #fff;
    }
    #chat-toggle:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 28px rgba(244, 132, 95, 0.5);
    }

    #chat-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      background: #ef4444;
      color: #fff;
      font-size: 0.6rem;
      font-weight: 700;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }

    #chat-window {
      position: absolute;
      bottom: 68px;
      right: 0;
      width: 320px;
      background: #fff;
      border: 1.5px solid #fde0d0;
      border-radius: 18px;
      box-shadow: 0 8px 40px rgba(244, 132, 95, 0.15);
      display: none;
      flex-direction: column;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
    }
    #chat-window.open { display: flex; }

    #chat-header {
      background: #f4845f;
      color: #fff;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    #chat-header-avatar {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: rgba(255,255,255,0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
    }
    #chat-header-info strong {
      display: block;
      font-size: 0.88rem;
      font-weight: 600;
    }
    #chat-header-info span {
      font-size: 0.72rem;
      opacity: 0.85;
    }

    #chat-messages {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      max-height: 300px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: #fffaf8;
    }

    .chat-msg {
      max-width: 85%;
      padding: 10px 13px;
      border-radius: 14px;
      font-size: 0.82rem;
      line-height: 1.55;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .chat-msg.bot {
      background: #fff;
      border: 1.5px solid #fde0d0;
      color: #2d1f1a;
      align-self: flex-start;
      border-bottom-left-radius: 4px;
    }
    .chat-msg.user {
      background: #f4845f;
      color: #fff;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
    }

    #chat-suggestions {
      padding: 0 16px 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      background: #fffaf8;
    }
    .chat-suggestion {
      background: #fff0ea;
      border: 1.5px solid #fde0d0;
      color: #f4845f;
      font-size: 0.72rem;
      font-weight: 600;
      padding: 5px 11px;
      border-radius: 20px;
      cursor: pointer;
      transition: background 0.15s;
      font-family: 'Inter', sans-serif;
    }
    .chat-suggestion:hover { background: #fde0d0; }

    #chat-input-row {
      display: flex;
      border-top: 1.5px solid #fde0d0;
      background: #fff;
    }
    #chat-input {
      flex: 1;
      border: none;
      outline: none;
      padding: 12px 14px;
      font-size: 0.82rem;
      font-family: 'Inter', sans-serif;
      color: #2d1f1a;
      background: transparent;
    }
    #chat-input::placeholder { color: #c4a99e; }
    #chat-send {
      background: none;
      border: none;
      padding: 0 14px;
      cursor: pointer;
      color: #f4845f;
      font-size: 1.1rem;
      transition: transform 0.15s;
    }
    #chat-send:hover { transform: scale(1.15); }
  `;
  document.head.appendChild(style);

  // Build HTML
  const bubble = document.createElement('div');
  bubble.id = 'chat-bubble';
  bubble.innerHTML = `
    <div id="chat-window">
      <div id="chat-header">
        <div id="chat-header-avatar">M</div>
        <div id="chat-header-info">
          <strong>MAIA — Michelle's Assistant</strong>
          <span>🟢 Online — ask me anything</span>
        </div>
      </div>
      <div id="chat-messages"></div>
      <div id="chat-suggestions">
        <button class="chat-suggestion" data-msg="What services do you offer?">Services</button>
        <button class="chat-suggestion" data-msg="What are your rates?">Rates</button>
        <button class="chat-suggestion" data-msg="Are you available?">Availability</button>
        <button class="chat-suggestion" data-msg="How do I contact you?">Contact</button>
      </div>
      <div id="chat-input-row">
        <input id="chat-input" type="text" placeholder="Ask me anything…" />
        <button id="chat-send">➤</button>
      </div>
    </div>
    <button id="chat-toggle" title="Chat with Michelle's assistant">
      💬
      <span id="chat-badge">1</span>
    </button>
  `;
  document.body.appendChild(bubble);

  const win     = document.getElementById('chat-window');
  const toggle  = document.getElementById('chat-toggle');
  const msgs    = document.getElementById('chat-messages');
  const input   = document.getElementById('chat-input');
  const send    = document.getElementById('chat-send');
  const badge   = document.getElementById('chat-badge');

  function addMsg(text, who) {
    const m = document.createElement('div');
    m.className = `chat-msg ${who}`;
    m.textContent = text;
    msgs.appendChild(m);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function sendMsg(text) {
    if (!text.trim()) return;
    addMsg(text, 'user');
    input.value = '';
    setTimeout(() => addMsg(getReply(text), 'bot'), 400);
  }

  // Open with greeting
  toggle.addEventListener('click', () => {
    const isOpen = win.classList.toggle('open');
    toggle.textContent = isOpen ? '✕' : '💬';
    if (isOpen) {
      badge.style.display = 'none';
      if (msgs.children.length === 0) {
        setTimeout(() => addMsg("Hi! 👋 I'm Michelle's assistant. Ask me about her services, rates, or availability!", 'bot'), 300);
      }
    } else {
      toggle.innerHTML = '💬<span id="chat-badge" style="display:none">1</span>';
    }
  });

  send.addEventListener('click', () => sendMsg(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(input.value); });

  document.querySelectorAll('.chat-suggestion').forEach(btn => {
    btn.addEventListener('click', () => sendMsg(btn.dataset.msg));
  });
}

document.addEventListener('DOMContentLoaded', buildChatbot);
