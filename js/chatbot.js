const responses = {
  why: [
    "why hire", "why michelle", "why you", "why should", "what makes you", "different", "stand out", "better than", "convince me", "trust you", "reliable", "dependable", "why work with", "reason to hire", "what sets you"
  ],
  greet: [
    "hi", "hello", "hey", "good morning", "good afternoon", "good evening", "howdy", "hiya"
  ],
  services: [
    "services", "service", "what do you offer", "what can you do", "offer", "help me with", "work"
  ],
  rates: [
    "rate", "rates", "price", "pricing", "cost", "how much", "fee", "fees", "charge", "charges", "pay", "salary", "budget"
  ],
  availability: [
    "available", "availability", "open to work", "start", "when can you", "schedule", "book", "onboard", "start date"
  ],
  experience: [
    "experience", "background", "years", "how long", "expert", "skill", "skills", "qualified", "resume", "cv", "portfolio", "proof", "track record"
  ],
  
  turnaround: [
    "turnaround", "how fast", "deadline", "how quick", "how soon", "delivery", "timeline", "how long does it take"
  ],
  timezone: [
    "timezone", "time zone", "philippines", "ph", "manila", "cebu", "overlap", "what time", "pst", "est", "gmt", "aest", "us clients", "american clients", "us based", "united states"
  ],
  tools: [
    "tools", "software", "google sheets", "excel", "crm", "dropbox", "platform", "what do you use", "tech", "apps"
  ],
  trial: [
    "trial", "test task", "sample work", "try", "test", "paid trial", "sample", "demo task"
  ],
  parttime: [
    "part time", "part-time", "full time", "full-time", "hours per week", "how many hours", "flexible hours", "weekly hours"
  ],
  upwork: [
    "upwork", "onlinejobs", "olj", "freelancer", "fiverr", "freelance platform", "job platform"
  ],
  confidential: [
    "confidential", "privacy", "secure", "sensitive", "hipaa", "dental", "records", "patient", "data security"
  ],
  ai: [
    "ai", "automation", "automate", "n8n", "make", "zapier", "workflow", "bot", "ghl", "go high level"
  ],
  contact: [
    "contact", "email", "reach", "message", "talk", "connect", "get in touch", "send", "calendly", "discovery call"
  ],
  thanks: [
    "thank", "thanks", "thank you", "awesome", "great", "perfect", "amazing", "cool", "nice", "helpful"
  ]
};

const answers = {
  greet: "Hi there! 👋 I'm MAIA, Michelle's assistant. I can tell you about her services, rates, experience, or availability. What would you like to know?",

  services: `Michelle's core expertise:\n\n📋 Data Entry — accurate, consistently delivered\n🔍 Lead Research — verified US business contacts across multiple industries\n📄 PDF Data Migration — scanned forms and paper records into digital systems\n💬 Customer Service Support — outbound/inbound calls, follow-ups, documentation\n🗃️ File & Document Management — organized folders, clean file systems, cloud platforms\n\nShe's also building AI automation skills on the side — check the AI Journey page for live progress.\n\nWant to know more about any of these?`,

  rates: "Rates start at $10/hr and go up depending on the scope of work:\n\n📋 Data entry — starting rate\n🔍 Lead research & PDF migration — mid range\n💬 Customer service & file management — depends on volume and complexity\n\nNote: any tool subscriptions or software needed for the role are not included in the rate — those are shouldered by the client, or can be factored in if needed.\n\nBook a free 20-minute discovery call and Michelle will give you a clear number based on exactly what you need.\n\n📅 Book via the Contact page or email themaiava@gmail.com",

  availability: "Michelle is currently open to new clients! 🟢\n\nShe's available part-time or full-time with flexible hours — she works around your timezone so you're never out of sync.\n\nResponse time: within 24 hours, Mon–Fri. Book a call or send a message via the Contact page!",

  experience: "Michelle has 6+ years of hands-on VA experience:\n\n📋 6+ years of data entry and lead research — thousands of verified US business leads across multiple industries\n📄 1 year of PDF data migration for dental screening records — zero-error, fully confidential\n💬 Prior BPO call center background — outbound/inbound calls, follow-ups, compliance check-ins\n🗃️ Built a team tracker from scratch that was adopted as the official system\n\nNo fluff — just consistent, reliable work across long-term client relationships.",

  why: "Here's the case for Michelle:\n\n✅ 6+ years of real VA experience — not just a course certificate\n✅ Long-term client relationships — she doesn't job-hop\n✅ Built systems on her own initiative that her team adopted\n✅ Careful with sensitive records — dental patient data handled with full confidentiality\n✅ Flexible timezone overlap — works around your schedule\n✅ Clear about what she can and can't do — no overpromising\n\nIf you want someone dependable who gets things done without being chased, she's worth a conversation.",

  turnaround: "Turnaround depends on the task volume and complexity — Michelle will always give you a clear timeline upfront before starting.\n\nFor standard data entry and lead research: she delivers in batches with regular progress updates so you're never left wondering. No surprises.",

  timezone: "Michelle is based in the Philippines (PHT, UTC+8) and works flexible hours with timezone overlap.\n\nShe'll adjust her schedule to make sure there's overlap with your team — just mention your timezone on the Contact page.",

  tools: "Michelle works with:\n\n📊 Google Sheets & Excel — experienced\n☁️ Dropbox — used daily for PDF migration work\n💬 Standard CRM platforms — trainable on your specific tool\n🤖 n8n — learning, actively building workflows (currently using free plan)\n🔧 Go High Level — just getting started\n\nIf you use a specific platform, she's open to being trained on it.",

  trial: "Yes — Michelle is open to paid trial tasks. It's the best way to see her work quality firsthand before committing to a longer engagement.\n\nReach out via the Contact page or email themaiava@gmail.com to discuss a trial scope.",

  parttime: "Michelle is available both part-time and full-time with flexible weekly hours. She'll work around your needs — whether that's 10 hours a week or 40.\n\nJust mention your requirements on the Contact page and she'll confirm availability.",

  upwork: "Michelle is building her presence on freelance platforms but her portfolio site is the best place to see her full background and get in touch directly — no platform fees, faster response.\n\nYou can reach her at themaiava@gmail.com or book a free discovery call via the Contact page.",

  confidential: "Confidentiality is non-negotiable for Michelle. She's spent the past year handling sensitive dental patient records — scanned forms with personal health information — with zero tolerance for errors or data leaks.\n\nIf your work involves sensitive data, she understands the standard and takes it seriously.",

  ai: "AI automation is Michelle's current learning focus! 🤖\n\nShe's actively learning n8n and has already built two workflows — a lead research automation and a lead follow-up automation. Both are built on free tools and are still being improved, but they're live and working.\n\nHer VA services are currently delivered manually with 6+ years of experience, and will be upgraded with automation as it develops.\n\nShe's also open to working under clients who want to train her on their own automation stack.",

  contact: "You can reach Michelle at:\n\n✉️ themaiava@gmail.com\n📅 Book a free 20-min discovery call via the Contact page\n\nShe responds within 24 hours, Mon–Fri.",

  thanks: "Happy to help! 😊 Feel free to ask anything else — or reach out to Michelle directly at themaiava@gmail.com.",

  fallback: "I'm not sure about that one — for anything specific, it's best to reach Michelle directly at themaiava@gmail.com or use the Contact page. She responds within 24 hours! 😊"
};

function getReply(input) {
  const text = input.toLowerCase().trim();
  
  // First pass: check for multi-word phrase matches (exact phrases first)
  for (const [key, keywords] of Object.entries(responses)) {
    const phrases = keywords.filter(k => k.includes(' '));
    if (phrases.some(k => text.includes(k))) {
      return answers[key];
    }
  }
  
  // Second pass: check single-word keywords but only as whole words
  for (const [key, keywords] of Object.entries(responses)) {
    const words = keywords.filter(k => !k.includes(' '));
    if (words.some(k => {
      const regex = new RegExp(`\\b${k}\\b`, 'i');
      return regex.test(text);
    })) {
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
      background: var(--accent);
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
      background: var(--bg);
      border: 1.5px solid var(--border);
      border-radius: 18px;
      box-shadow: 0 8px 40px rgba(244, 132, 95, 0.15);
      display: none;
      flex-direction: column;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
    }
    #chat-window.open { display: flex; }

    #chat-header {
      background: var(--accent);
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
      background: var(--bg3);
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
      background: var(--bg);
      border: 1.5px solid var(--border);
      color: var(--text);
      align-self: flex-start;
      border-bottom-left-radius: 4px;
    }
    .chat-msg.user {
      background: var(--accent);
      color: #fff;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
    }

    #chat-suggestions {
      padding: 0 16px 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      background: var(--bg3);
    }
    .chat-suggestion {
      background: var(--accent-bg);
      border: 1.5px solid var(--border);
      color: var(--accent);
      font-size: 0.72rem;
      font-weight: 600;
      padding: 5px 11px;
      border-radius: 20px;
      cursor: pointer;
      transition: background 0.15s;
      font-family: 'Inter', sans-serif;
    }
    .chat-suggestion:hover { background: var(--border); }

    #chat-input-row {
      display: flex;
      border-top: 1.5px solid var(--border);
      background: var(--bg);
    }
    #chat-input {
      flex: 1;
      border: none;
      outline: none;
      padding: 12px 14px;
      font-size: 0.82rem;
      font-family: 'Inter', sans-serif;
      color: var(--text);
      background: transparent;
    }
    #chat-input::placeholder { color: var(--muted); }
    #chat-send {
      background: none;
      border: none;
      padding: 0 14px;
      cursor: pointer;
      color: var(--accent);
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
        setTimeout(() => addMsg("Hi! 👋 I'm MAIA, Michelle's assistant. Ask me about her services, rates, or availability!", 'bot'), 300);
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
