// Onboarding screens
function getOnboardingScreen(step) {
    const questions = [
        {
            title: "어떤 일을 하시나요?",
            subtitle: "직장인 학습 수준에 맞 맞춰해요!",
            options: ["학생", "프리랜서", "직장인", "자영업 / 사업", "그 외", "다음"]
        },
        {
            title: "투자를 해본 경험이 있으신가요?",
            subtitle: "주식, 부동산, 펀드 어떤 투자든지 상관 없어요",
            options: ["있어요", "없어요", "없지만 관심은 있어요", "아직 투자는 관심 없어요"]
        },
        {
            title: "본인의 금융 지식 수준을 어떻게 평가하시나요?",
            subtitle: "직장인 학습 수준에 맞 맞춰해요!",
            options: ["비기너", "입문", "초급", "중급", "전문가"]
        },
        {
            title: "관심 있는 주제를 3가지 이상 선택해 주세요",
            subtitle: "여러 목표를 설정하면 구체적인 학습 목표 달성에 도움이 돼요",
            options: ["예금 및 저축 계획 수립", "부채 관리 및 대출 이해", "주식 시장 이해와 주식 투자", "펀드와 ETF 이해", "재테크 채권 및 기타 자산 습득", "부동산 시장 이해", "투자 개념 및 기초 지식 습득", "세금 우대 혜택", "금융 시장 동향 및 경제 이해", "금융 안정성 확보"]
        },
        {
            title: "어떤 단계부터 학습을 시작할까요?",
            subtitle: "언제든지 변경할 수 있어요",
            options: ["맞춤형 추천 학습", "스스로 선택 학습"]
        },
        {
            title: "작심삼일은 이제 그만\n빛이날 수 있도록 도와드릴게요",
            subtitle: "설정한 시간에 맞춰 푸시 알림을 보내드릴게요.",
            isNotification: true
        }
    ];
    
    if (step >= questions.length) {
        return getHomeScreen();
    }
    
    const question = questions[step];
    
    if (question.isNotification) {
        return `
            <button class="back-btn" onclick="showScreen('onboarding', ${step-1})">←</button>
            <div class="onboarding-content">
                <h2>${question.title}</h2>
                <p style="color: #666; margin-bottom: 40px;">${question.subtitle}</p>
                <div style="text-align: center; margin: 40px 0;">
                    <div style="width: 80px; height: 80px; background: #4A90E2; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px;">🕐</div>
                    <h3>알림 시간 설정</h3>
                    <p style="color: #666; margin: 10px 0;">알림 받기를 하신 분들은 꾸준히 학습 확률이 평균 3배나 높아요</p>
                    <div style="display: flex; justify-content: center; gap: 10px; margin: 20px 0;">
                        <span style="padding: 8px 16px; background: #333; color: white; border-radius: 20px;">월</span>
                        <span style="padding: 8px 16px; background: #f0f0f0; border-radius: 20px;">화</span>
                        <span style="padding: 8px 16px; background: #333; color: white; border-radius: 20px;">수</span>
                        <span style="padding: 8px 16px; background: #333; color: white; border-radius: 20px;">목</span>
                        <span style="padding: 8px 16px; background: #333; color: white; border-radius: 20px;">금</span>
                        <span style="padding: 8px 16px; background: #333; color: white; border-radius: 20px;">토</span>
                        <span style="padding: 8px 16px; background: #f0f0f0; border-radius: 20px;">일</span>
                    </div>
                </div>
                <button class="btn" onclick="showScreen('home')">알림 등록하기</button>
                <button class="btn btn-secondary" onclick="showScreen('home')">나중에 하기</button>
            </div>
        `;
    }
    
    return `
        <button class="back-btn" onclick="showScreen('onboarding', ${Math.max(0, step-1)})">←</button>
        <div class="progress">${step+1}/10</div>
        <div class="onboarding-content">
            <h2 class="question-title">${question.title}</h2>
            <p class="question-subtitle">${question.subtitle}</p>
            <div class="quiz-options">
                ${question.options.map(option => `
                    <button class="btn option-btn" onclick="nextOnboardingStep()">${option}</button>
                `).join('')}
            </div>
            <button class="btn" onclick="nextOnboardingStep()" style="margin-top: 40px;">다음</button>
        </div>
    `;
}

// Home screen
function getHomeScreen() {
    return `
        <div class="home-header">
            <div class="greeting">안녕하세요, 지아님! 🔔</div>
            <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 12px; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>📚 자본주의의 기본 개념</span>
                    <span>14분 ⌄</span>
                </div>
                <div style="margin: 10px 0; color: rgba(255,255,255,0.8);">직접 학습법</div>
                <button style="background: white; color: #4A90E2; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold;">📖 시작하기</button>
            </div>
        </div>
        
        <div style="padding: 20px;">
            <h3 style="margin-bottom: 15px;">오늘의 추천 학습</h3>
            
            <div class="feature-card" onclick="showScreen('quiz', 0)">
                <div style="display: flex; justify-content: between; align-items: center;">
                    <div>
                        <div class="feature-title">오늘의 용어 사전</div>
                        <div class="feature-subtitle">금융 3개</div>
                    </div>
                    <div style="width: 40px; height: 40px; background: #f0f0f0; border-radius: 50%; display: flex; align-items: center; justify-content: center;">✓</div>
                </div>
            </div>
            
            <div class="feature-card" onclick="showScreen('quiz', 0)">
                <div style="display: flex; justify-content: between; align-items: center;">
                    <div>
                        <div class="feature-title">오늘의 추천 클립</div>
                        <div class="feature-subtitle">경제 3분</div>
                    </div>
                    <div style="width: 40px; height: 40px; background: #4CAF50; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">▶</div>
                </div>
            </div>
            
            <div class="feature-card" onclick="showScreen('quiz', 0)">
                <div style="display: flex; justify-content: between; align-items: center;">
                    <div>
                        <div class="feature-title">복습 퀴즈</div>
                        <div class="feature-subtitle">일일 3문</div>
                    </div>
                    <div style="width: 40px; height: 40px; background: #2196F3; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">Q</div>
                </div>
            </div>
            
            <div style="margin: 30px 0;">
                <h3 style="margin-bottom: 15px;">오늘의 뉴스 <span style="float: right; font-size: 14px; color: #666;">더보기 ></span></h3>
                <div style="display: flex; gap: 10px; overflow-x: auto;">
                    <div style="min-width: 120px; text-align: center;">
                        <div style="background: #f0f0f0; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                        <div style="font-size: 12px;">기업</div>
                    </div>
                    <div style="min-width: 120px; text-align: center;">
                        <div style="background: #f0f0f0; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                        <div style="font-size: 12px;">경제</div>
                    </div>
                    <div style="min-width: 120px; text-align: center;">
                        <div style="background: #333; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                        <div style="font-size: 12px;">증권</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Quiz screens
function getQuizScreen(step) {
    const questions = [
        {
            question: "첫 번째 문제",
            options: ["GDP 성장률", "실업률", "인플레이션", "모든 위의 지표"]
        },
        {
            question: "두 번째 문제입니다",
            options: ["선택지 1", "선택지 2", "선택지 3", "선택지 4"]
        },
        {
            question: "세 번째 문제입니다",
            options: ["답안 A", "답안 B", "답안 C", "답안 D"]
        }
    ];
    
    if (step >= questions.length) {
        return `
            <div class="quiz-container">
                <div style="text-align: center; padding: 40px 0;">
                    <div style="font-size: 48px; margin-bottom: 20px;">🎉</div>
                    <h2>퀴즈 완료!</h2>
                    <p style="color: #666; margin: 20px 0;">총 ${questions.length}문제 중 ${questions.length}문제 정답</p>
                    <button class="btn" onclick="showScreen('home')">홈으로 돌아가기</button>
                </div>
            </div>
        `;
    }
    
    const question = questions[step];
    return `
        <button class="back-btn" onclick="showScreen('home')">←</button>
        <div class="quiz-container">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 14px; color: #666;">${step + 1} / ${questions.length}</div>
                <div style="width: 100%; height: 4px; background: #f0f0f0; border-radius: 2px; margin: 10px 0;">
                    <div style="width: ${((step + 1) / questions.length) * 100}%; height: 100%; background: #4A90E2; border-radius: 2px;"></div>
                </div>
            </div>
            <h2 class="quiz-question">${question.question}</h2>
            <div class="quiz-options">
                ${question.options.map(option => `
                    <button class="btn option-btn" onclick="nextQuizStep()">${option}</button>
                `).join('')}
            </div>
        </div>
    `;
}

// Chatbot screen
function getChatbotScreen() {
    return `
        <button class="back-btn" onclick="showScreen('home')">←</button>
        <div class="chatbot-container">
            <h2 class="chat-header">AI 튜터</h2>
            <div class="chat-message">
                <p>안녕하세요! 궁금한 것이 있으시면 언제든 물어보세요.</p>
            </div>
            <div style="display: flex; gap: 10px; margin: 20px 0;">
                <button class="btn" style="flex: 1; padding: 12px;">전체</button>
                <button class="btn btn-secondary" style="flex: 1; padding: 12px;">노하우</button>
            </div>
            <div class="chat-message">
                <p><strong>청년 우대형 주택청약통장 설명해주세요</strong></p>
                <p style="margin-top: 10px; color: #666;">3일 전에 읽은 아티클 내용에서</p>
            </div>
            <div style="position: absolute; bottom: 20px; left: 20px; right: 20px;">
                <input type="text" placeholder="키워드 또는 단어를 입력하세요." style="width: 100%; padding: 16px; border: 1px solid #ddd; border-radius: 25px;">
            </div>
        </div>
    `;
}

// Insights screen
function getInsightsScreen() {
    return `
        <div class="insights-header">
            <h2>인사이트</h2>
            <input type="text" placeholder="키워드 또는 단어를 입력하세요." style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; margin-top: 15px;">
        </div>
        
        <div style="background: #E3F2FD; margin: 20px; padding: 15px; border-radius: 12px;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <span>🔒</span>
                <div>
                    <div style="font-weight: bold;">가상화폐 투자, 지금 해도 될까?</div>
                    <div style="font-size: 12px; color: #666;">남은 01:30:23 동안 무료로 읽을 수 있어요</div>
                </div>
            </div>
        </div>
        
        <div style="padding: 0 20px;">
            <h3 style="margin-bottom: 15px;">추천 아티클 <span style="float: right; font-size: 14px; color: #666;">더보기 ></span></h3>
            
            <div class="article-card">
                <div style="display: flex; gap: 15px;">
                    <div style="width: 80px; height: 80px; background: #f0f0f0; border-radius: 8px;"></div>
                    <div style="flex: 1;">
                        <div style="font-weight: bold; margin-bottom: 5px;">소득공제 세액공제, 한 번에 이해하기</div>
                        <div style="font-size: 12px; color: #666;">어려워하는 이야기 때 소득공제와 세액공제... 하지만 일상에서는 사용하지 않는 용어이기...</div>
                        <div style="font-size: 12px; color: #666; margin-top: 5px;">무료 | 8분 | 2024.02.29</div>
                    </div>
                </div>
            </div>
            
            <div class="article-card">
                <div style="display: flex; gap: 15px;">
                    <div style="width: 80px; height: 80px; background: #f0f0f0; border-radius: 8px;"></div>
                    <div style="flex: 1;">
                        <div style="font-weight: bold; margin-bottom: 5px;">기후동맹카드, K패스, 뭐 써야할지...</div>
                        <div style="font-size: 12px; color: #666;">어려워하는 이야기 때 소득공제와 세액공제... 하지만 일상에서는 사용하지 않는 용어이기...</div>
                        <div style="font-size: 12px; color: #666; margin-top: 5px;">무료 | 2024.02.23</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="padding: 20px;">
            <h3 style="margin-bottom: 15px;">인사이트 모아보기</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="text-align: center;">
                    <div style="background: #FFF3E0; padding: 20px; border-radius: 12px; margin-bottom: 10px;">💰</div>
                    <div style="font-size: 14px;">금리에 대한 모아보자</div>
                </div>
                <div style="text-align: center;">
                    <div style="background: #E8F5E8; padding: 20px; border-radius: 12px; margin-bottom: 10px;">💳</div>
                    <div style="font-size: 14px;">월급 외 부수입 만들기</div>
                </div>
            </div>
        </div>
    `;
}

// Calendar screen
function getCalendarScreen() {
    return `
        <div class="calendar-container">
            <h2 style="margin-bottom: 20px;">캘린더</h2>
            <div class="goal-card">
                <div style="font-size: 24px; margin-bottom: 10px;">🎯</div>
                <h3>목표 설정</h3>
                <p style="color: #666; margin: 10px 0;">학습 목표를 설정하고 달성해보세요</p>
                <button class="btn" style="margin-top: 15px;">목표 설정하기</button>
            </div>
            <div style="margin: 30px 0;">
                <h3 style="margin-bottom: 15px;">이번 달 학습 현황</h3>
                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px; text-align: center;">
                    <div style="padding: 10px; font-size: 12px; color: #666;">월</div>
                    <div style="padding: 10px; font-size: 12px; color: #666;">화</div>
                    <div style="padding: 10px; font-size: 12px; color: #666;">수</div>
                    <div style="padding: 10px; font-size: 12px; color: #666;">목</div>
                    <div style="padding: 10px; font-size: 12px; color: #666;">금</div>
                    <div style="padding: 10px; font-size: 12px; color: #666;">토</div>
                    <div style="padding: 10px; font-size: 12px; color: #666;">일</div>
                    ${Array.from({length: 30}, (_, i) => `
                        <div style="padding: 10px; border-radius: 8px; ${i % 7 === 2 || i % 7 === 5 ? 'background: #4A90E2; color: white;' : 'background: #f8f8f8;'}">${i + 1}</div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Archive screen
function getArchiveScreen() {
    return `
        <div style="padding: 20px;">
            <h2 style="margin-bottom: 20px;">아카이브</h2>
            <div style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 48px; margin-bottom: 20px;">📚</div>
                <h3>저장된 콘텐츠가 없습니다</h3>
                <p style="color: #666; margin: 15px 0;">관심있는 아티클이나 강의를 저장해보세요</p>
                <button class="btn" onclick="showScreen('insights')">인사이트 둘러보기</button>
            </div>
        </div>
    `;
}

// Navigation functions
function nextOnboardingStep() {
    onboardingStep++;
    showScreen('onboarding', onboardingStep);
}

function nextQuizStep() {
    quizStep++;
    showScreen('quiz', quizStep);
}
