// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  menuIcon.setAttribute('d', isOpen
    ? 'M4 6h16M4 12h16M4 18h16'
    : 'M6 18L18 6M6 6l12 12'
  );
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 100) {
    navbar.style.borderBottomColor = 'rgba(250,204,21,0.08)';
    navbar.style.background = 'rgba(0,0,0,0.9)';
  } else {
    navbar.style.borderBottomColor = 'rgba(255,255,255,0.04)';
    navbar.style.background = 'rgba(0,0,0,0.7)';
  }
  lastScroll = y;
});

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));

// Smooth counter animation for stats
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const text = el.textContent;
      const match = text.match(/(\d+)/);
      if (match) {
        const target = parseInt(match[1]);
        const suffix = text.replace(match[1], '');
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = (target >= 1000 ? (current/1000).toFixed(current >= target ? 0 : 1) + 'k' : current) + suffix.replace(/\d+k?/, '');
          if (current >= target) el.textContent = text;
        }, 30);
      }
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item .gradient-text').forEach(el => statObserver.observe(el));

// Availability check
const availabilityDot = document.getElementById('availability-dot');
const availabilityText = document.getElementById('availability-text');
if (availabilityDot && availabilityText) {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const isOpen = day >= 1 && day <= 5 && hour >= 8 && hour < 18;
  if (isOpen) {
    availabilityDot.classList.add('bg-emerald-400');
    availabilityText.textContent = 'Disponíveis agora';
  } else {
    availabilityDot.classList.add('bg-red-500');
    availabilityText.textContent = 'De momento estamos indisponíveis';
  }
}

// Contact form — send email
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const empresa = document.getElementById('contact-empresa').value.trim();
    const mensagem = document.getElementById('contact-message').value.trim();

    const subject = encodeURIComponent('Contacto via Website — ' + empresa);
    const body = encodeURIComponent(
      'Nome: ' + nome + '\n' +
      'Email: ' + email + '\n' +
      'Empresa: ' + empresa + '\n\n' +
      'Mensagem:\n' + mensagem
    );

    window.location.href = 'mailto:goncalomiguelcs@gmail.com?subject=' + subject + '&body=' + body;
  });
}

// Service modal data
const serviceData = {
  1: {
    number: '01',
    title: 'Gestão de Rotas',
    desc: 'Planeamos, otimizamos e coordenamos integralmente todas as rotas de transporte de colaboradores para a sua empresa. Desde a análise inicial dos fluxos até à implementação e monitorização contínua, garantimos que cada trajeto é eficiente, pontual e adaptado às necessidades reais da sua operação.',
    features: [
      { title: 'Mapeamento Completo', text: 'Análise geográfica detalhada de todos os pontos de recolha e destino dos colaboradores.' },
      { title: 'Otimização em Tempo Real', text: 'Ajuste dinâmico de rotas com base no trânsito, condições meteorológicas e imprevistos.' },
      { title: 'Relatórios Detalhados', text: 'Dashboards com métricas de pontualidade, ocupação e custos por rota.' },
      { title: 'Revisão Periódica', text: 'Reavaliação trimestral das rotas para garantir máxima eficiência contínua.' },
      { title: 'Gestão de Capacidade', text: 'Dimensionamento adequado da frota para cada rota, evitando desperdício.' },
      { title: 'Comunicação Direta', text: 'Canal dedicado para feedback de colaboradores e ajustes rápidos.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" stroke="rgba(250,204,21,0.1)" stroke-width="1" class="svg-rotate"/><circle cx="100" cy="100" r="60" stroke="rgba(250,204,21,0.15)" stroke-width="1" class="svg-rotate" style="animation-direction:reverse;animation-duration:8s"/><path d="M60 120 L80 90 L110 100 L140 70" stroke="rgba(250,204,21,0.8)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-dash"/><circle cx="60" cy="120" r="5" fill="rgba(250,204,21,0.6)" class="svg-pulse"/><circle cx="80" cy="90" r="5" fill="rgba(250,204,21,0.6)" class="svg-pulse" style="animation-delay:0.5s"/><circle cx="110" cy="100" r="5" fill="rgba(250,204,21,0.6)" class="svg-pulse" style="animation-delay:1s"/><circle cx="140" cy="70" r="5" fill="rgba(250,204,21,0.8)" class="svg-pulse" style="animation-delay:1.5s"/><circle cx="100" cy="100" r="3" fill="rgba(250,204,21,0.3)" class="svg-pulse"><animate attributeName="r" values="3;90;3" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite"/></circle></svg>'
  },
  2: {
    number: '02',
    title: 'Subcontratação',
    desc: 'Gerimos uma rede alargada de parceiros de transporte certificados, garantindo capacidade, flexibilidade e cobertura em qualquer escala. Tratamos de toda a seleção, contratação e supervisão dos operadores, para que a sua empresa tenha sempre transporte garantido sem preocupações.',
    features: [
      { title: 'Rede Certificada', text: 'Parceiros rigorosamente selecionados e auditados regularmente.' },
      { title: 'Gestão Contratual', text: 'Negociação e gestão completa de contratos com subcontratados.' },
      { title: 'Controlo de Qualidade', text: 'Auditorias regulares e avaliação contínua do desempenho dos parceiros.' },
      { title: 'Escalabilidade', text: 'Capacidade de escalar rapidamente a frota em períodos de maior procura.' },
      { title: 'Seguros e Licenças', text: 'Verificação de toda a documentação legal e seguros obrigatórios.' },
      { title: 'Ponto de Contacto Único', text: 'A sua empresa lida apenas connosco — nós gerimos todos os parceiros.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="70" r="20" stroke="rgba(250,204,21,0.6)" stroke-width="1.5" class="svg-pulse"/><circle cx="55" cy="140" r="16" stroke="rgba(250,204,21,0.4)" stroke-width="1.5" class="svg-pulse" style="animation-delay:0.3s"/><circle cx="145" cy="140" r="16" stroke="rgba(250,204,21,0.4)" stroke-width="1.5" class="svg-pulse" style="animation-delay:0.6s"/><line x1="90" y1="85" x2="65" y2="125" stroke="rgba(250,204,21,0.3)" stroke-width="1.5" class="svg-dash"/><line x1="110" y1="85" x2="135" y2="125" stroke="rgba(250,204,21,0.3)" stroke-width="1.5" class="svg-dash" style="animation-delay:0.3s"/><line x1="70" y1="140" x2="130" y2="140" stroke="rgba(250,204,21,0.2)" stroke-width="1" class="svg-dash" style="animation-delay:0.6s"/><circle cx="100" cy="70" r="8" fill="rgba(250,204,21,0.15)" class="svg-pulse"/><circle cx="55" cy="140" r="6" fill="rgba(250,204,21,0.1)" class="svg-pulse" style="animation-delay:0.3s"/><circle cx="145" cy="140" r="6" fill="rgba(250,204,21,0.1)" class="svg-pulse" style="animation-delay:0.6s"/><circle cx="100" cy="100" r="50" stroke="rgba(250,204,21,0.05)" stroke-width="1" stroke-dasharray="5 5" class="svg-rotate" style="animation-duration:20s"/></svg>'
  },
  3: {
    number: '03',
    title: 'Frota Própria',
    desc: 'Complementamos a gestão com uma frota própria diversificada: táxis, veículos descaracterizados e viaturas especializadas no transporte de crianças. Com manutenção rigorosa e motoristas profissionais, garantimos qualidade, pontualidade e total fiabilidade em cada viagem.',
    features: [
      { title: 'Veículos Diversificados', text: 'Táxis, vans e viaturas adaptadas para diferentes necessidades de transporte.' },
      { title: 'Transporte Infantil', text: 'Viaturas especializadas e certificadas para o transporte seguro de crianças.' },
      { title: 'Manutenção Rigorosa', text: 'Planos de manutenção preventiva com inspeções regulares de toda a frota.' },
      { title: 'Motoristas Profissionais', text: 'Condutores certificados, com formação contínua em segurança rodoviária.' },
      { title: 'GPS e Rastreamento', text: 'Monitorização em tempo real de todos os veículos da frota.' },
      { title: 'Conforto e Limpeza', text: 'Padrões elevados de higiene e conforto em todas as viaturas.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="85" width="120" height="50" rx="12" stroke="rgba(250,204,21,0.5)" stroke-width="1.5" class="svg-dash"/><rect x="50" y="75" width="40" height="25" rx="6" stroke="rgba(250,204,21,0.3)" stroke-width="1" class="svg-dash" style="animation-delay:0.3s"/><circle cx="70" cy="140" r="12" stroke="rgba(250,204,21,0.6)" stroke-width="2" class="svg-pulse"/><circle cx="130" cy="140" r="12" stroke="rgba(250,204,21,0.6)" stroke-width="2" class="svg-pulse" style="animation-delay:0.3s"/><circle cx="70" cy="140" r="5" fill="rgba(250,204,21,0.3)" class="svg-pulse"/><circle cx="130" cy="140" r="5" fill="rgba(250,204,21,0.3)" class="svg-pulse" style="animation-delay:0.3s"/><line x1="160" y1="105" x2="180" y2="105" stroke="rgba(250,204,21,0.4)" stroke-width="2" stroke-linecap="round" class="svg-pulse" style="animation-delay:0.5s"/><line x1="160" y1="112" x2="175" y2="112" stroke="rgba(250,204,21,0.3)" stroke-width="2" stroke-linecap="round" class="svg-pulse" style="animation-delay:0.8s"/><path d="M25 110 Q20 105 25 100" stroke="rgba(250,204,21,0.2)" stroke-width="1.5" stroke-linecap="round" class="svg-float"/><path d="M18 112 Q12 105 18 98" stroke="rgba(250,204,21,0.15)" stroke-width="1.5" stroke-linecap="round" class="svg-float" style="animation-delay:0.3s"/></svg>'
  },
  4: {
    number: '04',
    title: 'Otimização de Custos',
    desc: 'Realizamos uma análise profunda e reestruturação das redes de transporte existentes para identificar oportunidades de redução de custos operacionais. Com dados concretos e simulações, garantimos poupanças significativas sem comprometer a qualidade do serviço.',
    features: [
      { title: 'Análise de Custos', text: 'Auditoria completa dos custos atuais de transporte com identificação de ineficiências.' },
      { title: 'Simulações de Cenários', text: 'Modelação de diferentes configurações de rotas para encontrar a mais económica.' },
      { title: 'Poupança Real', text: 'Histórico comprovado de reduções entre 15% e 30% nos custos de transporte.' },
      { title: 'Benchmarking', text: 'Comparação com melhores práticas do setor para garantir competitividade.' },
      { title: 'Melhoria Contínua', text: 'Revisão periódica para identificar novas oportunidades de otimização.' },
      { title: 'Relatórios Transparentes', text: 'Documentação clara de todas as poupanças e melhorias implementadas.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="140" width="25" height="40" rx="4" fill="rgba(250,204,21,0.15)" class="svg-pulse"><animate attributeName="height" values="40;50;40" dur="3s" repeatCount="indefinite"/><animate attributeName="y" values="140;130;140" dur="3s" repeatCount="indefinite"/></rect><rect x="65" y="110" width="25" height="70" rx="4" fill="rgba(250,204,21,0.25)" class="svg-pulse" style="animation-delay:0.3s"><animate attributeName="height" values="70;80;70" dur="3.5s" repeatCount="indefinite"/><animate attributeName="y" values="110;100;110" dur="3.5s" repeatCount="indefinite"/></rect><rect x="100" y="80" width="25" height="100" rx="4" fill="rgba(250,204,21,0.35)" class="svg-pulse" style="animation-delay:0.6s"><animate attributeName="height" values="100;90;100" dur="2.8s" repeatCount="indefinite"/><animate attributeName="y" values="80;90;80" dur="2.8s" repeatCount="indefinite"/></rect><rect x="135" y="55" width="25" height="125" rx="4" fill="rgba(250,204,21,0.5)" class="svg-pulse" style="animation-delay:0.9s"><animate attributeName="height" values="125;115;125" dur="3.2s" repeatCount="indefinite"/><animate attributeName="y" values="55;65;55" dur="3.2s" repeatCount="indefinite"/></rect><path d="M42 130 L77 100 L112 70 L147 45" stroke="rgba(250,204,21,0.8)" stroke-width="2" stroke-linecap="round" stroke-dasharray="5 3" class="svg-dash"/><polygon points="147,38 155,48 142,48" fill="rgba(250,204,21,0.7)" class="svg-pulse"/></svg>'
  },
  5: {
    number: '05',
    title: 'Gestão de Turnos',
    desc: 'Coordenamos toda a logística de transporte adaptada aos diferentes horários e turnos rotativos da sua empresa. Seja produção contínua com 3 turnos ou horários flexíveis, garantimos que cada colaborador tem transporte fiável em qualquer hora do dia ou da noite.',
    features: [
      { title: 'Turnos Rotativos', text: 'Gestão completa de transporte para turnos da manhã, tarde e noite.' },
      { title: 'Serviço Noturno', text: 'Cobertura total em horários noturnos com motoristas especializados.' },
      { title: 'Planeamento Flexível', text: 'Adaptação rápida a alterações de turnos, feriados e períodos especiais.' },
      { title: 'Alertas e Notificações', text: 'Sistema de avisos para alterações de horário ou imprevistos.' },
      { title: 'Rotatividade Gerida', text: 'Ajuste automático das rotas conforme a rotação de turnos.' },
      { title: 'Pontualidade Garantida', text: 'Compromisso com horários rigorosos para não afetar a produção.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="70" stroke="rgba(250,204,21,0.15)" stroke-width="1.5"/><circle cx="100" cy="100" r="65" stroke="rgba(250,204,21,0.08)" stroke-width="1"/><circle cx="100" cy="100" r="4" fill="rgba(250,204,21,0.8)"/><line x1="100" y1="100" x2="100" y2="55" stroke="rgba(250,204,21,0.7)" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="12s" repeatCount="indefinite"/></line><line x1="100" y1="100" x2="130" y2="100" stroke="rgba(250,204,21,0.5)" stroke-width="2" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="60s" repeatCount="indefinite"/></line><g class="svg-pulse"><circle cx="100" cy="30" r="3" fill="rgba(250,204,21,0.4)"/><circle cx="170" cy="100" r="3" fill="rgba(250,204,21,0.4)"/><circle cx="100" cy="170" r="3" fill="rgba(250,204,21,0.4)"/><circle cx="30" cy="100" r="3" fill="rgba(250,204,21,0.4)"/></g><circle cx="100" cy="100" r="70" stroke="rgba(250,204,21,0.1)" stroke-width="8" stroke-dasharray="8 12" class="svg-rotate" style="animation-duration:30s"/></svg>'
  },
  6: {
    number: '06',
    title: 'Conformidade & Segurança',
    desc: 'Garantimos que todos os parceiros, veículos e operações cumprem rigorosamente a legislação nacional e europeia de transporte. Implementamos os mais altos padrões de segurança com auditorias regulares, formação contínua e processos documentados.',
    features: [
      { title: 'Conformidade Legal', text: 'Verificação e atualização constante face à legislação de transporte em vigor.' },
      { title: 'Segurança Ativa', text: 'Protocolos de segurança rigorosos para passageiros, motoristas e veículos.' },
      { title: 'Auditorias Regulares', text: 'Inspeções periódicas a todos os parceiros e veículos da rede.' },
      { title: 'Formação Contínua', text: 'Programas de formação em segurança rodoviária para todos os motoristas.' },
      { title: 'Documentação Completa', text: 'Seguros, licenças e certificações sempre atualizados e verificados.' },
      { title: 'Plano de Contingência', text: 'Procedimentos definidos para emergências e situações imprevistas.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 30 L155 55 L155 110 C155 145 130 170 100 185 C70 170 45 145 45 110 L45 55 Z" stroke="rgba(250,204,21,0.4)" stroke-width="1.5" fill="rgba(250,204,21,0.03)" class="svg-dash"/><path d="M100 50 L140 68 L140 108 C140 135 120 155 100 165 C80 155 60 135 60 108 L60 68 Z" stroke="rgba(250,204,21,0.15)" stroke-width="1" fill="none" class="svg-pulse"/><path d="M82 110 L95 123 L122 90" stroke="rgba(250,204,21,0.8)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="svg-dash" style="stroke-dasharray:80;stroke-dashoffset:80"/><circle cx="100" cy="105" r="35" stroke="rgba(250,204,21,0.1)" stroke-width="1" stroke-dasharray="4 4" class="svg-rotate" style="animation-duration:15s"/></svg>'
  }
};

// Service modal logic
const modal = document.getElementById('service-modal');
const modalClose = document.getElementById('modal-close');
const modalIllustration = document.getElementById('modal-illustration');
const modalNumber = document.getElementById('modal-number');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalFeatures = document.getElementById('modal-features');
const modalCta = document.getElementById('modal-cta');

function openServiceModal(id) {
  const data = serviceData[id];
  if (!data) return;

  modalIllustration.innerHTML = '<div class="modal-svg-wrap modal-stagger modal-stagger-1">' + data.svg + '</div>';
  modalNumber.textContent = data.number;
  modalNumber.className = 'text-gold-400/20 text-8xl lg:text-9xl font-black leading-none select-none modal-stagger modal-stagger-1';
  modalTitle.textContent = data.title;
  modalTitle.className = 'text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.02em] leading-[1.1] mb-8 modal-stagger modal-stagger-2';
  modalDesc.textContent = data.desc;
  modalDesc.className = 'text-xl lg:text-2xl text-gray-400 leading-relaxed font-light mb-16 max-w-3xl modal-stagger modal-stagger-3';

  modalFeatures.innerHTML = data.features.map(function(f, i) {
    var delay = Math.min(i + 4, 6);
    return '<div class="modal-feature modal-stagger modal-stagger-' + delay + '">' +
      '<div class="w-2 h-2 rounded-full bg-gold-400 mb-4"></div>' +
      '<h4 class="text-white font-bold mb-2">' + f.title + '</h4>' +
      '<p class="text-gray-500 text-sm leading-relaxed">' + f.text + '</p>' +
    '</div>';
  }).join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.service-modal-content').scrollTop = 0;
}

function closeServiceModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.service-card').forEach(function(card) {
  card.addEventListener('click', function() {
    openServiceModal(this.getAttribute('data-service'));
  });
});

if (modalClose) {
  modalClose.addEventListener('click', closeServiceModal);
}

document.querySelectorAll('.modal-close-btn').forEach(function(btn) {
  btn.addEventListener('click', closeServiceModal);
});

if (modal) {
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeServiceModal();
  });
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
    closeServiceModal();
  }
});

if (modalCta) {
  modalCta.addEventListener('click', function() {
    closeServiceModal();
  });
}

/*// Service modal data
const serviceData = {
  1: {
    number: '01',
    title: 'Gestão de Rotas',
    desc: 'Planeamos, otimizamos e coordenamos integralmente todas as rotas de transporte de colaboradores para a sua empresa. Desde a análise inicial dos fluxos até à implementação e monitorização contínua, garantimos que cada trajeto é eficiente, pontual e adaptado às necessidades reais da sua operação.',
    features: [
      { icon: '📍', title: 'Mapeamento Completo', text: 'Análise geográfica detalhada de todos os pontos de recolha e destino dos colaboradores.' },
      { icon: '⚡', title: 'Otimização em Tempo Real', text: 'Ajuste dinâmico de rotas com base no trânsito, condições meteorológicas e imprevistos.' },
      { icon: '📊', title: 'Relatórios Detalhados', text: 'Dashboards com métricas de pontualidade, ocupação e custos por rota.' },
      { icon: '🔄', title: 'Revisão Periódica', text: 'Reavaliação trimestral das rotas para garantir máxima eficiência contínua.' },
      { icon: '👥', title: 'Gestão de Capacidade', text: 'Dimensionamento adequado da frota para cada rota, evitando desperdício.' },
      { icon: '📱', title: 'Comunicação Direta', text: 'Canal dedicado para feedback de colaboradores e ajustes rápidos.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" stroke="rgba(250,204,21,0.1)" stroke-width="1" class="svg-rotate"/><circle cx="100" cy="100" r="60" stroke="rgba(250,204,21,0.15)" stroke-width="1" class="svg-rotate" style="animation-direction:reverse;animation-duration:8s"/><path d="M60 120 L80 90 L110 100 L140 70" stroke="rgba(250,204,21,0.8)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-dash"/><circle cx="60" cy="120" r="5" fill="rgba(250,204,21,0.6)" class="svg-pulse"/><circle cx="80" cy="90" r="5" fill="rgba(250,204,21,0.6)" class="svg-pulse" style="animation-delay:0.5s"/><circle cx="110" cy="100" r="5" fill="rgba(250,204,21,0.6)" class="svg-pulse" style="animation-delay:1s"/><circle cx="140" cy="70" r="5" fill="rgba(250,204,21,0.8)" class="svg-pulse" style="animation-delay:1.5s"/><circle cx="100" cy="100" r="3" fill="rgba(250,204,21,0.3)" class="svg-pulse"><animate attributeName="r" values="3;90;3" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite"/></circle></svg>'
  },
  2: {
    number: '02',
    title: 'Subcontratação',
    desc: 'Gerimos uma rede alargada de parceiros de transporte certificados, garantindo capacidade, flexibilidade e cobertura em qualquer escala. Tratamos de toda a seleção, contratação e supervisão dos operadores, para que a sua empresa tenha sempre transporte garantido sem preocupações.',
    features: [
      { icon: '🤝', title: 'Rede Certificada', text: 'Parceiros rigorosamente selecionados e auditados regularmente.' },
      { icon: '📋', title: 'Gestão Contratual', text: 'Negociação e gestão completa de contratos com subcontratados.' },
      { icon: '🔍', title: 'Controlo de Qualidade', text: 'Auditorias regulares e avaliação contínua do desempenho dos parceiros.' },
      { icon: '📈', title: 'Escalabilidade', text: 'Capacidade de escalar rapidamente a frota em períodos de maior procura.' },
      { icon: '🛡️', title: 'Seguros e Licenças', text: 'Verificação de toda a documentação legal e seguros obrigatórios.' },
      { icon: '💬', title: 'Ponto de Contacto Único', text: 'A sua empresa lida apenas connosco — nós gerimos todos os parceiros.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="70" r="20" stroke="rgba(250,204,21,0.6)" stroke-width="1.5" class="svg-pulse"/><circle cx="55" cy="140" r="16" stroke="rgba(250,204,21,0.4)" stroke-width="1.5" class="svg-pulse" style="animation-delay:0.3s"/><circle cx="145" cy="140" r="16" stroke="rgba(250,204,21,0.4)" stroke-width="1.5" class="svg-pulse" style="animation-delay:0.6s"/><line x1="90" y1="85" x2="65" y2="125" stroke="rgba(250,204,21,0.3)" stroke-width="1.5" class="svg-dash"/><line x1="110" y1="85" x2="135" y2="125" stroke="rgba(250,204,21,0.3)" stroke-width="1.5" class="svg-dash" style="animation-delay:0.3s"/><line x1="70" y1="140" x2="130" y2="140" stroke="rgba(250,204,21,0.2)" stroke-width="1" class="svg-dash" style="animation-delay:0.6s"/><circle cx="100" cy="70" r="8" fill="rgba(250,204,21,0.15)" class="svg-pulse"/><circle cx="55" cy="140" r="6" fill="rgba(250,204,21,0.1)" class="svg-pulse" style="animation-delay:0.3s"/><circle cx="145" cy="140" r="6" fill="rgba(250,204,21,0.1)" class="svg-pulse" style="animation-delay:0.6s"/><circle cx="100" cy="100" r="50" stroke="rgba(250,204,21,0.05)" stroke-width="1" stroke-dasharray="5 5" class="svg-rotate" style="animation-duration:20s"/></svg>'
  },
  3: {
    number: '03',
    title: 'Frota Própria',
    desc: 'Complementamos a gestão com uma frota própria diversificada: táxis, veículos descaracterizados e viaturas especializadas no transporte de crianças. Com manutenção rigorosa e motoristas profissionais, garantimos qualidade, pontualidade e total fiabilidade em cada viagem.',
    features: [
      { icon: '🚐', title: 'Veículos Diversificados', text: 'Táxis, vans e viaturas adaptadas para diferentes necessidades de transporte.' },
      { icon: '👶', title: 'Transporte Infantil', text: 'Viaturas especializadas e certificadas para o transporte seguro de crianças.' },
      { icon: '🔧', title: 'Manutenção Rigorosa', text: 'Planos de manutenção preventiva com inspeções regulares de toda a frota.' },
      { icon: '👨‍✈️', title: 'Motoristas Profissionais', text: 'Condutores certificados, com formação contínua em segurança rodoviária.' },
      { icon: '📍', title: 'GPS e Rastreamento', text: 'Monitorização em tempo real de todos os veículos da frota.' },
      { icon: '✨', title: 'Conforto e Limpeza', text: 'Padrões elevados de higiene e conforto em todas as viaturas.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="85" width="120" height="50" rx="12" stroke="rgba(250,204,21,0.5)" stroke-width="1.5" class="svg-dash"/><rect x="50" y="75" width="40" height="25" rx="6" stroke="rgba(250,204,21,0.3)" stroke-width="1" class="svg-dash" style="animation-delay:0.3s"/><circle cx="70" cy="140" r="12" stroke="rgba(250,204,21,0.6)" stroke-width="2" class="svg-pulse"/><circle cx="130" cy="140" r="12" stroke="rgba(250,204,21,0.6)" stroke-width="2" class="svg-pulse" style="animation-delay:0.3s"/><circle cx="70" cy="140" r="5" fill="rgba(250,204,21,0.3)" class="svg-pulse"/><circle cx="130" cy="140" r="5" fill="rgba(250,204,21,0.3)" class="svg-pulse" style="animation-delay:0.3s"/><line x1="160" y1="105" x2="180" y2="105" stroke="rgba(250,204,21,0.4)" stroke-width="2" stroke-linecap="round" class="svg-pulse" style="animation-delay:0.5s"/><line x1="160" y1="112" x2="175" y2="112" stroke="rgba(250,204,21,0.3)" stroke-width="2" stroke-linecap="round" class="svg-pulse" style="animation-delay:0.8s"/><path d="M25 110 Q20 105 25 100" stroke="rgba(250,204,21,0.2)" stroke-width="1.5" stroke-linecap="round" class="svg-float"/><path d="M18 112 Q12 105 18 98" stroke="rgba(250,204,21,0.15)" stroke-width="1.5" stroke-linecap="round" class="svg-float" style="animation-delay:0.3s"/></svg>'
  },
  4: {
    number: '04',
    title: 'Otimização de Custos',
    desc: 'Realizamos uma análise profunda e reestruturação das redes de transporte existentes para identificar oportunidades de redução de custos operacionais. Com dados concretos e simulações, garantimos poupanças significativas sem comprometer a qualidade do serviço.',
    features: [
      { icon: '📉', title: 'Análise de Custos', text: 'Auditoria completa dos custos atuais de transporte com identificação de ineficiências.' },
      { icon: '🧮', title: 'Simulações de Cenários', text: 'Modelação de diferentes configurações de rotas para encontrar a mais económica.' },
      { icon: '💰', title: 'Poupança Real', text: 'Histórico comprovado de reduções entre 15% e 30% nos custos de transporte.' },
      { icon: '📊', title: 'Benchmarking', text: 'Comparação com melhores práticas do setor para garantir competitividade.' },
      { icon: '🔄', title: 'Melhoria Contínua', text: 'Revisão periódica para identificar novas oportunidades de otimização.' },
      { icon: '📝', title: 'Relatórios Transparentes', text: 'Documentação clara de todas as poupanças e melhorias implementadas.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="140" width="25" height="40" rx="4" fill="rgba(250,204,21,0.15)" class="svg-pulse"><animate attributeName="height" values="40;50;40" dur="3s" repeatCount="indefinite"/><animate attributeName="y" values="140;130;140" dur="3s" repeatCount="indefinite"/></rect><rect x="65" y="110" width="25" height="70" rx="4" fill="rgba(250,204,21,0.25)" class="svg-pulse" style="animation-delay:0.3s"><animate attributeName="height" values="70;80;70" dur="3.5s" repeatCount="indefinite"/><animate attributeName="y" values="110;100;110" dur="3.5s" repeatCount="indefinite"/></rect><rect x="100" y="80" width="25" height="100" rx="4" fill="rgba(250,204,21,0.35)" class="svg-pulse" style="animation-delay:0.6s"><animate attributeName="height" values="100;90;100" dur="2.8s" repeatCount="indefinite"/><animate attributeName="y" values="80;90;80" dur="2.8s" repeatCount="indefinite"/></rect><rect x="135" y="55" width="25" height="125" rx="4" fill="rgba(250,204,21,0.5)" class="svg-pulse" style="animation-delay:0.9s"><animate attributeName="height" values="125;115;125" dur="3.2s" repeatCount="indefinite"/><animate attributeName="y" values="55;65;55" dur="3.2s" repeatCount="indefinite"/></rect><path d="M42 130 L77 100 L112 70 L147 45" stroke="rgba(250,204,21,0.8)" stroke-width="2" stroke-linecap="round" stroke-dasharray="5 3" class="svg-dash"/><polygon points="147,38 155,48 142,48" fill="rgba(250,204,21,0.7)" class="svg-pulse"/></svg>'
  },
  5: {
    number: '05',
    title: 'Gestão de Turnos',
    desc: 'Coordenamos toda a logística de transporte adaptada aos diferentes horários e turnos rotativos da sua empresa. Seja produção contínua com 3 turnos ou horários flexíveis, garantimos que cada colaborador tem transporte fiável em qualquer hora do dia ou da noite.',
    features: [
      { icon: '🕐', title: 'Turnos Rotativos', text: 'Gestão completa de transporte para turnos da manhã, tarde e noite.' },
      { icon: '🌙', title: 'Serviço Noturno', text: 'Cobertura total em horários noturnos com motoristas especializados.' },
      { icon: '📅', title: 'Planeamento Flexível', text: 'Adaptação rápida a alterações de turnos, feriados e períodos especiais.' },
      { icon: '🔔', title: 'Alertas e Notificações', text: 'Sistema de avisos para alterações de horário ou imprevistos.' },
      { icon: '🔀', title: 'Rotatividade Gerida', text: 'Ajuste automático das rotas conforme a rotação de turnos.' },
      { icon: '✅', title: 'Pontualidade Garantida', text: 'Compromisso com horários rigorosos para não afetar a produção.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="70" stroke="rgba(250,204,21,0.15)" stroke-width="1.5"/><circle cx="100" cy="100" r="65" stroke="rgba(250,204,21,0.08)" stroke-width="1"/><circle cx="100" cy="100" r="4" fill="rgba(250,204,21,0.8)"/><line x1="100" y1="100" x2="100" y2="55" stroke="rgba(250,204,21,0.7)" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="12s" repeatCount="indefinite"/></line><line x1="100" y1="100" x2="130" y2="100" stroke="rgba(250,204,21,0.5)" stroke-width="2" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="60s" repeatCount="indefinite"/></line><g class="svg-pulse"><circle cx="100" cy="30" r="3" fill="rgba(250,204,21,0.4)"/><circle cx="170" cy="100" r="3" fill="rgba(250,204,21,0.4)"/><circle cx="100" cy="170" r="3" fill="rgba(250,204,21,0.4)"/><circle cx="30" cy="100" r="3" fill="rgba(250,204,21,0.4)"/></g><circle cx="100" cy="100" r="70" stroke="rgba(250,204,21,0.1)" stroke-width="8" stroke-dasharray="8 12" class="svg-rotate" style="animation-duration:30s"/></svg>'
  },
  6: {
    number: '06',
    title: 'Conformidade & Segurança',
    desc: 'Garantimos que todos os parceiros, veículos e operações cumprem rigorosamente a legislação nacional e europeia de transporte. Implementamos os mais altos padrões de segurança com auditorias regulares, formação contínua e processos documentados.',
    features: [
      { icon: '📜', title: 'Conformidade Legal', text: 'Verificação e atualização constante face à legislação de transporte em vigor.' },
      { icon: '🔒', title: 'Segurança Ativa', text: 'Protocolos de segurança rigorosos para passageiros, motoristas e veículos.' },
      { icon: '📋', title: 'Auditorias Regulares', text: 'Inspeções periódicas a todos os parceiros e veículos da rede.' },
      { icon: '🎓', title: 'Formação Contínua', text: 'Programas de formação em segurança rodoviária para todos os motoristas.' },
      { icon: '📄', title: 'Documentação Completa', text: 'Seguros, licenças e certificações sempre atualizados e verificados.' },
      { icon: '⚠️', title: 'Plano de Contingência', text: 'Procedimentos definidos para emergências e situações imprevistas.' }
    ],
    svg: '<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 30 L155 55 L155 110 C155 145 130 170 100 185 C70 170 45 145 45 110 L45 55 Z" stroke="rgba(250,204,21,0.4)" stroke-width="1.5" fill="rgba(250,204,21,0.03)" class="svg-dash"/><path d="M100 50 L140 68 L140 108 C140 135 120 155 100 165 C80 155 60 135 60 108 L60 68 Z" stroke="rgba(250,204,21,0.15)" stroke-width="1" fill="none" class="svg-pulse"/><path d="M82 110 L95 123 L122 90" stroke="rgba(250,204,21,0.8)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="svg-dash" style="stroke-dasharray:80;stroke-dashoffset:80"/><circle cx="100" cy="105" r="35" stroke="rgba(250,204,21,0.1)" stroke-width="1" stroke-dasharray="4 4" class="svg-rotate" style="animation-duration:15s"/></svg>'
  }
};*/