const BLChatbot = {
  isOpen: false,
  currentContext: 'main',
  conversationHistory: [],
  sessionStart: Date.now(),
  
  peptideData: {
    'bpc-157': {
      name: 'BPC-157',
      fullName: 'Body Protection Compound-157',
      description: 'Pentadecapeptide derived from gastric juice proteins',
      researchEffects: [
        'Tissue repair and regeneration research',
        'Wound healing studies',
        'Tendon and ligament recovery research',
        'Gastrointestinal tract healing studies',
        'Anti-inflammatory response research',
        'Angiogenesis (blood vessel formation) studies',
        'Neuroprotective research',
        'Muscle healing and recovery studies'
      ],
      dosageResearch: '200-500mcg daily in research protocols',
      administration: 'Subcutaneous or intramuscular in research settings',
      storage: 'Lyophilized: Room temp. Reconstituted: 2-8°C for 30 days',
      researchApplications: [
        'Joint injury research',
        'Muscle tear studies',
        'Inflammatory bowel disease research',
        'Gastroprotection studies',
        'Periodontal tissue healing'
      ]
    },
    'tb-500': {
      name: 'TB-500',
      fullName: 'Thymosin Beta-4',
      description: 'Synthetic peptide fragment mimicking thymosin beta-4',
      researchEffects: [
        'Cell migration and proliferation research',
        'Wound healing acceleration studies',
        'Tissue regeneration research',
        'Anti-inflammatory response studies',
        'Hair growth research',
        'Cardiovascular protection studies',
        'Stem cell differentiation research',
        'Muscle fiber repair studies'
      ],
      dosageResearch: '2-5mg twice weekly in research protocols',
      administration: 'Subcutaneous injection in research',
      storage: 'Lyophilized: Room temp. Reconstituted: 2-8°C for 30 days',
      researchApplications: [
        'Cardiac tissue research',
        'Skeletal muscle injury studies',
        'Corneal wound healing',
        'Dermal wound research'
      ]
    },
    'ipamorelin': {
      name: 'Ipamorelin',
      fullName: 'Ipamorelin Acetate',
      description: 'Selective growth hormone secretagogue peptide',
      researchEffects: [
        'Growth hormone release research',
        'Lean muscle mass studies',
        'Fat metabolism research',
        'Bone density studies',
        'Sleep quality research',
        'Anti-aging research',
        'Recovery enhancement studies',
        'IGF-1 production research'
      ],
      dosageResearch: '200-300mcg 2-3x daily in research',
      administration: 'Subcutaneous injection, fasted state',
      storage: 'Lyophilized: Room temp. Reconstituted: 2-8°C for 30 days',
      researchApplications: [
        'Body composition research',
        'Metabolic function studies',
        'Age-related decline research',
        'Performance optimization studies'
      ]
    },
    'cjc-1295': {
      name: 'CJC-1295',
      fullName: 'Modified Growth Hormone Releasing Hormone',
      description: 'Long-acting GHRH analog with extended half-life',
      researchEffects: [
        'Sustained GH elevation research',
        'Protein synthesis studies',
        'Lipolysis research',
        'Muscle growth studies',
        'Bone mineral density research',
        'Immune function studies',
        'Cognitive function research',
        'Sleep architecture studies'
      ],
      dosageResearch: '1-2mg per week in research protocols',
      administration: 'Subcutaneous injection',
      storage: 'Lyophilized: Room temp. Reconstituted: 2-8°C for 30 days',
      researchApplications: [
        'Long-term GH research',
        'Body recomposition studies',
        'Anti-aging research protocols',
        'Performance research'
      ]
    },
    'semaglutide': {
      name: 'Semaglutide',
      fullName: 'GLP-1 Receptor Agonist',
      description: 'Long-acting glucagon-like peptide-1 analog',
      researchEffects: [
        'Appetite regulation research',
        'Weight loss studies',
        'Glucose metabolism research',
        'Insulin sensitivity studies',
        'Cardiovascular protection research',
        'Satiety hormone research',
        'Metabolic syndrome studies',
        'Neuroprotective research'
      ],
      dosageResearch: '0.25-2.4mg weekly in research (titration)',
      administration: 'Subcutaneous injection, weekly',
      storage: 'Refrigerated 2-8°C at all times',
      researchApplications: [
        'Obesity research',
        'Type 2 diabetes studies',
        'Cardiovascular research',
        'Metabolic disorder studies'
      ]
    },
    'pt-141': {
      name: 'PT-141',
      fullName: 'Bremelanotide',
      description: 'Melanocortin receptor agonist peptide',
      researchEffects: [
        'Sexual arousal research',
        'Libido enhancement studies',
        'Melanocortin receptor research',
        'CNS-mediated arousal studies',
        'Female sexual dysfunction research',
        'Male erectile function research',
        'Behavioral research',
        'Neurological pathway studies'
      ],
      dosageResearch: '0.5-2mg as needed in research',
      administration: 'Subcutaneous injection',
      storage: 'Lyophilized: Room temp. Reconstituted: 2-8°C for 30 days',
      researchApplications: [
        'Sexual health research',
        'Neurological studies',
        'Melanocortin system research'
      ]
    },
    'semax': {
      name: 'Semax',
      fullName: 'ACTH(4-10) Analog',
      description: 'Heptapeptide with nootropic properties',
      researchEffects: [
        'Cognitive enhancement research',
        'Neuroprotection studies',
        'BDNF expression research',
        'Memory formation studies',
        'Stress resistance research',
        'Mental clarity studies',
        'Focus enhancement research',
        'Neuroplasticity studies'
      ],
      dosageResearch: '300-600mcg daily in research',
      administration: 'Intranasal or subcutaneous',
      storage: 'Lyophilized: Room temp. Reconstituted: 2-8°C for 30 days',
      researchApplications: [
        'Cognitive research',
        'Neuroprotective studies',
        'Mental performance research',
        'ADHD research'
      ]
    },
    'ghk-cu': {
      name: 'GHK-Cu',
      fullName: 'Copper Peptide GHK-Cu',
      description: 'Naturally occurring copper complex peptide',
      researchEffects: [
        'Collagen synthesis research',
        'Skin regeneration studies',
        'Anti-aging research',
        'Wound healing studies',
        'Hair growth research',
        'Anti-inflammatory studies',
        'Antioxidant research',
        'Tissue remodeling studies'
      ],
      dosageResearch: '1-3mg daily in research protocols',
      administration: 'Subcutaneous or topical application',
      storage: 'Lyophilized: Room temp. Reconstituted: 2-8°C for 30 days',
      researchApplications: [
        'Dermatological research',
        'Cosmetic studies',
        'Aging research',
        'Regenerative medicine'
      ]
    },
    'tirzepatide': {
      name: 'Tirzepatide',
      fullName: 'Dual GIP/GLP-1 Receptor Agonist',
      description: 'Novel dual incretin receptor agonist',
      researchEffects: [
        'Dual incretin pathway research',
        'Enhanced weight loss studies',
        'Glucose control research',
        'Insulin secretion studies',
        'Lipid metabolism research',
        'Energy expenditure studies',
        'Beta cell function research',
        'Cardiovascular outcomes research'
      ],
      dosageResearch: '2.5-15mg weekly in research (titration)',
      administration: 'Subcutaneous injection, weekly',
      storage: 'Refrigerated 2-8°C at all times',
      researchApplications: [
        'Advanced obesity research',
        'Diabetes research',
        'Metabolic efficiency studies',
        'Multi-pathway research'
      ]
    },
    'melanotan-2': {
      name: 'Melanotan II',
      fullName: 'MT-II',
      description: 'Synthetic analog of alpha-melanocyte stimulating hormone',
      researchEffects: [
        'Melanogenesis research',
        'Skin pigmentation studies',
        'Appetite suppression research',
        'Sexual arousal studies',
        'UV protection research',
        'Metabolic research',
        'Body composition studies',
        'Melanocortin receptor research'
      ],
      dosageResearch: '0.25-1mg daily in research protocols',
      administration: 'Subcutaneous injection',
      storage: 'Lyophilized: Room temp. Reconstituted: 2-8°C for 30 days',
      researchApplications: [
        'Photoprotection research',
        'Pigmentation studies',
        'Metabolic studies',
        'Sexual behavior research'
      ]
    }
  },
  
  knowledgeBase: {
    reconstitution: {
      guide: `🧪 **Detailed Reconstitution Protocol**:

**Materials Needed:**
- Bacteriostatic water (0.9% benzyl alcohol)
- Alcohol swabs
- Sterile syringe (insulin syringe recommended)
- Peptide vial

**Step-by-Step Process:**
1. **Preparation**: Wash hands thoroughly, gather all materials in clean area
2. **Sterilize**: Wipe tops of both vials with alcohol swab, let air dry 30 seconds
3. **Draw Water**: Draw appropriate amount of bacteriostatic water into syringe
4. **Add Water**: Inject water slowly down the inside wall of peptide vial (NOT directly onto powder)
5. **Dissolve**: Let vial sit for 5-10 minutes, swirl gently (NEVER shake)
6. **Inspect**: Solution should be clear, no particles visible
7. **Store**: Refrigerate immediately at 2-8°C

**Dosage Calculations:**
If you add 2ml of water to 5mg peptide:
- Total concentration = 2.5mg/ml or 2500mcg/ml
- For 250mcg dose: 0.1ml (10 units on insulin syringe)
- For 500mcg dose: 0.2ml (20 units on insulin syringe)

**Common Volumes:**
- 1ml BAC water = easier math, higher concentration
- 2ml BAC water = most common, medium concentration  
- 3ml BAC water = more dilute, easier to measure small doses`
    },
    
    storage: {
      lyophilized: '✅ Unopened lyophilized (powder form): Store at room temperature (20-25°C) in dark, dry place. Stable for 2-3 years.',
      reconstituted: '❄️ Reconstituted (mixed with water): MUST refrigerate at 2-8°C. Use within 30 days for optimal potency. Do NOT freeze.',
      travel: '🧳 Traveling: Use insulated cooler with ice packs. Avoid temperature fluctuations. Keep away from direct sunlight.'
    },
    
    administration: {
      subcutaneous: `💉 **Subcutaneous Injection Guide**:
**Best Sites:** Abdomen, thighs, back of arms
**Technique:**
1. Pinch skin to create fold
2. Insert needle at 45-90° angle
3. Inject slowly over 3-5 seconds
4. Remove needle, apply pressure
5. Don't massage area

**Tips:**
- Rotate sites to prevent scar tissue
- Inject 2 inches from belly button
- Use insulin syringes (29-31G)
- Let alcohol dry completely`,
      
      intramuscular: `💉 **Intramuscular Injection Guide**:
**Best Sites:** Deltoid, glute, vastus lateralis
**Technique:**
1. Stretch skin taut
2. Insert needle at 90° angle (1-1.5 inches deep)
3. Aspirate to check for blood
4. Inject slowly
5. Remove and apply pressure`
    },
    
    stacking: {
      healing: `🏥 **Popular Healing Stacks**:
**Stack 1: Ultimate Healing**
- BPC-157: 250mcg 2x daily
- TB-500: 2.5mg 2x weekly
- GHK-Cu: 2mg daily
Benefits: Comprehensive tissue repair

**Stack 2: Joint Focus**
- BPC-157: 500mcg daily (near injury)
- TB-500: 5mg weekly
- Ipamorelin: 200mcg 3x daily`,
      
      performance: `🏋️ **Performance Enhancement Stacks**:
**Stack 1: Growth & Recovery**
- Ipamorelin: 200mcg 3x daily
- CJC-1295: 1mg 2x weekly

**Stack 2: Body Recomposition**
- Ipamorelin: 300mcg before bed
- Semaglutide: Titrate to 2.4mg weekly`,
      
      antiaging: `🧬 **Anti-Aging Stacks**:
**Stack 1: Comprehensive Longevity**
- GHK-Cu: 2mg daily (ongoing)
- Ipamorelin: 200mcg before bed

**Stack 2: Skin & Vitality**
- GHK-Cu: 3mg daily
- Ipamorelin: 200mcg before bed`,
      
      cognitive: `🧠 **Cognitive Enhancement Stacks**:
**Stack 1: Focus & Clarity**
- Semax: 600mcg morning`
    },
    
    shipping: {
      domestic: `🚚 **Domestic Shipping (USA)**:
**Standard:**
- 2-5 business days
- USPS Priority Mail
- Tracking included

**Free Shipping:**
- Orders over $200
- Automatic at checkout

**Packaging:**
- Discreet packaging
- No branding on exterior
- Insulated for temperature control`,
      
      international: `🌍 **International Shipping**:
- Most countries available
- 7-21 business days
- Tracking included
- Customer responsible for customs/duties`
    },
    
    safety: {
      testing: `🔬 **Our Quality Standards**:
- Third-party HPLC testing (>99% purity)
- Mass spectrometry verification
- Certificate of Analysis (CoA) with every batch
- GMP-compliant manufacturing
- Batch tracking system`,
      
      handling: `⚠️ **Safe Handling**:
- Always use sterile technique
- Alcohol swab injection sites
- Rotate injection areas
- Dispose of sharps properly
- Never share needles/vials`
    },
    
    payment: {
      methods: `💳 **Payment Methods**:
**Credit/Debit Cards:**
- Visa, Mastercard, Amex, Discover
- Secure SSL encryption

**Cryptocurrency:**
- Bitcoin (BTC)
- Ethereum (ETH)
- Additional discount available`
    }
  },
  
  init() {
    this.chatButton = document.getElementById('bl-chat-button');
    this.chatWindow = document.getElementById('bl-chat-window');
    this.closeButton = document.getElementById('bl-close-chat');
    this.messagesDiv = document.getElementById('bl-chat-messages');
    this.optionsDiv = document.getElementById('bl-chat-options');
    this.inputContainer = document.getElementById('bl-input-container');
    this.userInput = document.getElementById('bl-user-input');
    this.sendBtn = document.getElementById('bl-send-btn');
    
    this.chatButton.addEventListener('click', () => this.toggleChat());
    this.closeButton.addEventListener('click', () => this.toggleChat());
    this.sendBtn.addEventListener('click', () => this.handleUserMessage());
    this.userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleUserMessage();
    });
  },
  
  toggleChat() {
    this.isOpen = !this.isOpen;
    this.chatWindow.classList.toggle('open');
    
    if (this.isOpen) {
      if (this.messagesDiv.children.length === 0) {
        this.showWelcome();
      }
      this.userInput.focus();
    }
  },
  
  showWelcome() {
    this.addMessage("👋 Welcome to Blueprint Lab! I'm your AI peptide research assistant. I can help you with:", 'bot');
    this.addMessage("• Peptide information & research effects\n• Dosing & administration\n• Storage & reconstitution\n• Stacking protocols\n• Ordering & shipping\n• Quality & testing", 'bot');
    
    setTimeout(() => {
      this.addMessage("You can ask me anything or choose a topic below:", 'bot');
      this.showMainOptions();
      this.inputContainer.classList.add('active');
    }, 1000);
  },
  
  showMainOptions() {
    const options = [
      { text: "🔍 Search Peptide", action: "peptide_search" },
      { text: "💉 How to Use", action: "usage" },
      { text: "📚 Popular Stacks", action: "stacking" },
      { text: "📦 Ordering Info", action: "ordering" },
      { text: "✅ Quality & Testing", action: "quality" },
      { text: "💬 Ask Custom Question", action: "custom" }
    ];
    
    this.renderOptions(options);
  },
  
  renderOptions(options) {
    this.optionsDiv.innerHTML = '';
    options.forEach(option => {
      const button = document.createElement('button');
      button.className = 'bl-option-btn';
      button.textContent = option.text;
      button.addEventListener('click', () => this.handleOptionClick(option));
      this.optionsDiv.appendChild(button);
    });
  },
  
  handleOptionClick(option) {
    this.addMessage(option.text, 'user');
    
    setTimeout(() => {
      switch(option.action) {
        case 'peptide_search':
          this.showPeptideSearch();
          break;
        case 'usage':
          this.showUsageOptions();
          break;
        case 'stacking':
          this.showStackingOptions();
          break;
        case 'ordering':
          this.showOrderingInfo();
          break;
        case 'quality':
          this.showQualityInfo();
          break;
        case 'custom':
          this.addMessage("Great! Just type your question and I'll do my best to help. Ask me anything about peptides, dosing, storage, effects, or ordering!", 'bot');
          this.renderOptions([{ text: "← Back to Menu", action: "main" }]);
          break;
        case 'main':
          this.addMessage("What else can I help you with?", 'bot');
          this.showMainOptions();
          break;
        default:
          if (option.peptide) {
            this.showPeptideInfo(option.peptide);
          } else if (option.stack) {
            this.showStackInfo(option.stack);
          }
      }
    }, 500);
  },
  
  showPeptideSearch() {
    this.addMessage("Here are our most popular peptides. Click one to learn more:", 'bot');
    
    const peptideOptions = [
      { text: "BPC-157 (Healing)", action: "peptide", peptide: "bpc-157" },
      { text: "Semaglutide (Weight Loss)", action: "peptide", peptide: "semaglutide" },
      { text: "Ipamorelin (Growth Hormone)", action: "peptide", peptide: "ipamorelin" },
      { text: "TB-500 (Recovery)", action: "peptide", peptide: "tb-500" },
      { text: "PT-141 (Sexual Health)", action: "peptide", peptide: "pt-141" },
      { text: "Semax (Cognitive)", action: "peptide", peptide: "semax" },
      { text: "← Back", action: "main" }
    ];
    
    this.renderOptions(peptideOptions);
  },
  
  showPeptideInfo(peptideKey) {
    const peptide = this.peptideData[peptideKey];
    if (!peptide) return;
    
    let response = `**${peptide.name}** (${peptide.fullName})\n\n`;
    response += `📋 ${peptide.description}\n\n`;
    response += `**Research Effects:**\n`;
    peptide.researchEffects.forEach(effect => {
      response += `• ${effect}\n`;
    });
    response += `\n**Research Dosage:** ${peptide.dosageResearch}\n`;
    response += `**Administration:** ${peptide.administration}\n`;
    response += `**Storage:** ${peptide.storage}`;
    
    this.addMessage(response, 'bot');
    
    setTimeout(() => {
      this.addMessage("Would you like to know more?", 'bot');
      const followUp = [
        { text: "Stacking Options", action: "stacking" },
        { text: "How to Use", action: "usage" },
        { text: "← Search Another", action: "peptide_search" },
        { text: "← Main Menu", action: "main" }
      ];
      this.renderOptions(followUp);
    }, 1000);
  },
  
  showUsageOptions() {
    this.addMessage("What would you like to know about usage?", 'bot');
    
    const options = [
      { text: "How to Reconstitute", action: "reconstitute_guide" },
      { text: "Injection Techniques", action: "injection_guide" },
      { text: "Storage Guidelines", action: "storage_guide" },
      { text: "← Back", action: "main" }
    ];
    
    this.renderOptions(options);
  },
  
  showStackingOptions() {
    this.addMessage("What's your primary research goal?", 'bot');
    
    const options = [
      { text: "🏥 Healing & Recovery", action: "stack", stack: "healing" },
      { text: "💪 Performance & Muscle", action: "stack", stack: "performance" },
      { text: "🧬 Anti-Aging & Longevity", action: "stack", stack: "antiaging" },
      { text: "🧠 Cognitive Enhancement", action: "stack", stack: "cognitive" },
      { text: "← Back", action: "main" }
    ];
    
    this.renderOptions(options);
  },
  
  showStackInfo(stackType) {
    let response = "";
    
    if (stackType === "healing") {
      response = this.knowledgeBase.stacking.healing;
    } else if (stackType === "performance") {
      response = this.knowledgeBase.stacking.performance;
    } else if (stackType === "antiaging") {
      response = this.knowledgeBase.stacking.antiaging;
    } else if (stackType === "cognitive") {
      response = this.knowledgeBase.stacking.cognitive;
    }
    
    this.addMessage(response, 'bot');
    
    setTimeout(() => {
      this.addMessage("💡 Remember: Start with one peptide and add others gradually. Monitor your response.", 'bot');
      const options = [
        { text: "View Another Stack", action: "stacking" },
        { text: "How to Use These", action: "usage" },
        { text: "← Main Menu", action: "main" }
      ];
      this.renderOptions(options);
    }, 1500);
  },
  
  showOrderingInfo() {
    this.addMessage(this.knowledgeBase.shipping.domestic, 'bot');
    
    setTimeout(() => {
      const options = [
        { text: "Payment Methods", action: "payment_info" },
        { text: "International Shipping", action: "intl_shipping" },
        { text: "← Back", action: "main" }
      ];
      this.renderOptions(options);
    }, 1000);
  },
  
  showQualityInfo() {
    this.addMessage(this.knowledgeBase.safety.testing, 'bot');
    
    setTimeout(() => {
      this.addMessage("Every batch is third-party tested. We provide Certificates of Analysis (CoA) upon request.", 'bot');
      const options = [
        { text: "Request CoA", action: "coa_request" },
        { text: "Safety Information", action: "safety_info" },
        { text: "← Back", action: "main" }
      ];
      this.renderOptions(options);
    }, 1000);
  },
  
  handleUserMessage() {
    const message = this.userInput.value.trim();
    if (!message) return;
    
    this.addMessage(message, 'user');
    this.conversationHistory.push({ role: 'user', content: message });
    this.userInput.value = '';
    
    setTimeout(() => {
      const response = this.generateAIResponse(message);
      this.addMessage(response, 'bot');
      this.conversationHistory.push({ role: 'bot', content: response });
    }, 800);
  },
  
  generateAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Greetings
    if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
      return "Hello! How can I assist you with your peptide research today?";
    }
    
    // Thanks
    if (lowerMessage.match(/\b(thank|thanks|appreciate)\b/)) {
      return "You're welcome! Is there anything else you'd like to know?";
    }
    
    // Check for specific peptides
    for (let peptideKey in this.peptideData) {
      if (lowerMessage.includes(peptideKey) || lowerMessage.includes(this.peptideData[peptideKey].name.toLowerCase())) {
        const peptide = this.peptideData[peptideKey];
        
        // Dosage question
        if (lowerMessage.match(/\b(dos|dosage|how much|amount)\b/)) {
          return `For ${peptide.name} research:\n\n**Typical Research Dosage:** ${peptide.dosageResearch}\n**Administration:** ${peptide.administration}\n\nAlways start at the lower end and assess tolerance. Would you like detailed reconstitution instructions?`;
        }
        
        // Effects question
        if (lowerMessage.match(/\b(effect|benefit|results|does|work|research|use)\b/)) {
          let response = `${peptide.name} has been studied for:\n\n`;
          peptide.researchEffects.slice(0, 5).forEach(effect => {
            response += `• ${effect}\n`;
          });
          response += `\nWould you like more detailed information about ${peptide.name}?`;
          return response;
        }
        
        // Storage question
        if (lowerMessage.match(/\b(stor|storage|keep|refrigerate|freeze|temperature)\b/)) {
          return `**${peptide.name} Storage:**\n${peptide.storage}\n\n**General Tips:**\n• Lyophilized (powder): Room temperature, dark place\n• Reconstituted: Refrigerate 2-8°C, use within 30 days\n• Never freeze reconstituted peptides\n• Keep away from light`;
        }
        
        // General peptide info
        return `I found information about **${peptide.name}**!\n\n${peptide.description}\n\nWhat would you like to know? I can tell you about research effects, dosing, storage, or how to use it.`;
      }
    }
    
    // Reconstitution questions
    if (lowerMessage.match(/\b(mix|reconstitute|reconstitution|prepare|dissolve|water)\b/)) {
      return this.knowledgeBase.reconstitution.guide + "\n\nNeed help calculating your dose? Just ask!";
    }
    
    // Storage questions
    if (lowerMessage.match(/\b(stor|storage|keep|refrigerate|freeze)\b/)) {
      return `${this.knowledgeBase.storage.lyophilized}\n\n${this.knowledgeBase.storage.reconstituted}\n\n${this.knowledgeBase.storage.travel}\n\nAny specific storage questions?`;
    }
    
    // Injection questions
    if (lowerMessage.match(/\b(inject|injection|administer|needle|syringe|subcutaneous|intramuscular)\b/)) {
      if (lowerMessage.includes('sub') || lowerMessage.includes('subq')) {
        return this.knowledgeBase.administration.subcutaneous;
      } else if (lowerMessage.includes('intra') || lowerMessage.includes('im')) {
        return this.knowledgeBase.administration.intramuscular;
      }
      return "I can explain:\n• Subcutaneous injection (most common)\n• Intramuscular injection\n\nWhich would you like to know about?";
    }
    
    // Stacking questions
    if (lowerMessage.match(/\b(stack|combine|together|with|combo|combination)\b/)) {
      return "Great question about stacking! I have detailed protocols for:\n• Healing & Recovery\n• Performance & Muscle\n• Anti-Aging\n• Cognitive Enhancement\n\nWhich interests you?";
    }
    
    // Safety questions
    if (lowerMessage.match(/\b(safe|safety|side effect|risk|dangerous|harm)\b/)) {
      return this.knowledgeBase.safety.handling + "\n\n⚕️ This is for research purposes only. Consult healthcare provider for any health concerns.";
    }
    
    // Quality questions
    if (lowerMessage.match(/\b(quality|pure|purity|test|coa|certificate|lab)\b/)) {
      return this.knowledgeBase.safety.testing + "\n\nWe provide CoAs for all products. Would you like to request one?";
    }
    
    // Ordering questions
    if (lowerMessage.match(/\b(order|buy|purchase|ship|delivery|payment|track)\b/)) {
      return this.knowledgeBase.shipping.domestic + "\n\nWhat else would you like to know about ordering?";
    }
    
    // Contact support
    if (lowerMessage.match(/\b(contact|support|email|help)\b/)) {
      return "📧 **Contact Our Support Team:**\n\nEmail: support@blueprintlab.shop\nResponse Time: 24-48 hours\n\nFor faster service, include:\n• Your order number (if applicable)\n• Detailed description of your question\n\nIs there anything I can help you with right now?";
    }
    
    // Default fallback
    return `I'm not entirely sure about that specific question, but I'm here to help! I can assist with:\n\n• Information about specific peptides\n• Dosing and administration\n• Storage and reconstitution\n• Stacking protocols\n• Ordering and shipping\n• Quality and testing\n\nTry asking about a specific peptide or topic, or contact our team at support@blueprintlab.shop for detailed assistance!`;
  },
  
  addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `bl-message bl-${sender}-message`;
    
    const formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    
    messageDiv.innerHTML = formattedText;
    this.messagesDiv.appendChild(messageDiv);
    this.messagesDiv.scrollTop = this.messagesDiv.scrollHeight;
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => BLChatbot.init());
} else {
  BLChatbot.init();
}
