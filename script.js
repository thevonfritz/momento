// ===== CONFIG: edite os contatos em um só lugar =====
const CONFIG = {
  whatsapp: '5500000000000',         // 55 + DDD + número
  email: 'contato@momentoimoveis.com.br'
};

// ===== Header sticky =====
const header = document.getElementById('header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 40));

// ===== Menu mobile =====
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
const closeMenu = () => { toggle.classList.remove('open'); links.classList.remove('open'); };
toggle.addEventListener('click', () => { toggle.classList.toggle('open'); links.classList.toggle('open'); });
links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Form -> WhatsApp =====
document.getElementById('leadForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const v = id => document.getElementById(id).value;
  const txt = `Olá! Sou ${v('nome')}.%0AInteresse: ${v('interesse')}%0ATelefone: ${v('tel')}` +
    (v('msg') ? `%0AMensagem: ${v('msg')}` : '');
  open(`https://wa.me/${CONFIG.whatsapp}?text=${txt}`, '_blank');
});

// ===== Modais (conteúdo + comportamento) =====
const MODALS = {
  modalPrivacidade: {
    title: 'Política de Privacidade',
    upd: 'Em conformidade com a Lei nº 13.709/2018 (LGPD) · Última atualização: 2026',
    body: `
      <p>A <strong>Momento Imóveis</strong> ("nós") respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais, nos termos da <strong>Lei Geral de Proteção de Dados — Lei nº 13.709/2018 (LGPD)</strong>.</p>
      <h4>1. Dados que coletamos</h4>
      <p>Coletamos os dados que você nos fornece voluntariamente por meio dos formulários e canais de contato, tais como nome, telefone/WhatsApp, e-mail e mensagens. Também podemos coletar dados de navegação (cookies, endereço IP e páginas acessadas) para melhorar sua experiência.</p>
      <h4>2. Finalidade do tratamento</h4>
      <ul>
        <li>Responder a solicitações e prestar atendimento sobre imóveis;</li>
        <li>Enviar informações, propostas e oportunidades compatíveis com o seu interesse;</li>
        <li>Cumprir obrigações legais, regulatórias e contratuais;</li>
        <li>Aprimorar nossos serviços e a usabilidade do site.</li>
      </ul>
      <h4>3. Base legal</h4>
      <p>O tratamento ocorre mediante o seu <strong>consentimento</strong>, para a <strong>execução de contrato</strong> ou procedimentos preliminares a seu pedido, e para o atendimento de <strong>obrigações legais</strong> e <strong>legítimo interesse</strong>, conforme o art. 7º da LGPD.</p>
      <h4>4. Compartilhamento</h4>
      <p>Não vendemos seus dados. O compartilhamento ocorre apenas com parceiros e fornecedores estritamente necessários à prestação do serviço (ex.: assessoria jurídica, instituições financeiras e cartórios) e quando exigido por autoridade competente.</p>
      <h4>5. Armazenamento e segurança</h4>
      <p>Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda ou alteração. Os dados são mantidos apenas pelo período necessário às finalidades informadas ou às exigências legais.</p>
      <h4>6. Seus direitos como titular</h4>
      <p>Você pode, a qualquer momento e gratuitamente: confirmar a existência de tratamento; acessar, corrigir ou atualizar seus dados; solicitar anonimização, bloqueio ou eliminação; revogar o consentimento; e solicitar a portabilidade, nos termos do art. 18 da LGPD.</p>
      <h4>7. Cookies</h4>
      <p>Utilizamos cookies para funcionamento e análise do site. Você pode gerenciá-los nas configurações do seu navegador.</p>
      <h4>8. Encarregado (DPO) e contato</h4>
      <p>Para exercer seus direitos ou esclarecer dúvidas, entre em contato pelo e-mail <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>.</p>`
  },
  modalTermos: {
    title: 'Termos de Uso',
    upd: 'Condições gerais de uso do site · Última atualização: 2026',
    body: `
      <p>Ao acessar e utilizar o site da <strong>Momento Imóveis</strong>, você concorda com os termos e condições abaixo. Caso não concorde, recomendamos não utilizar o site.</p>
      <h4>1. Objeto</h4>
      <p>Este site tem caráter informativo e de captação de contatos, apresentando serviços de intermediação imobiliária (compra, venda e locação) e imóveis disponíveis no portfólio da Momento Imóveis.</p>
      <h4>2. Informações dos imóveis</h4>
      <p>As informações, fotos, valores e características dos imóveis são meramente ilustrativos e podem sofrer alterações sem aviso prévio. Não constituem oferta vinculante; valores e disponibilidade devem ser confirmados diretamente com nossa equipe.</p>
      <h4>3. Uso adequado</h4>
      <ul>
        <li>É vedado utilizar o site para fins ilícitos ou que violem direitos de terceiros;</li>
        <li>É proibido copiar, reproduzir ou distribuir o conteúdo sem autorização;</li>
        <li>O usuário se compromete a fornecer informações verdadeiras nos formulários.</li>
      </ul>
      <h4>4. Propriedade intelectual</h4>
      <p>A marca, o logotipo, os textos e os elementos visuais deste site são protegidos e pertencem à Momento Imóveis ou a seus licenciadores, sendo vedada a utilização sem prévia autorização.</p>
      <h4>5. Limitação de responsabilidade</h4>
      <p>A Momento Imóveis não se responsabiliza por eventuais indisponibilidades técnicas, por links externos de terceiros ou por decisões tomadas exclusivamente com base nas informações do site sem a devida confirmação com a equipe.</p>
      <h4>6. Proteção de dados</h4>
      <p>O tratamento de dados pessoais segue a nossa Política de Privacidade, em conformidade com a Lei nº 13.709/2018 (LGPD).</p>
      <h4>7. Foro e legislação aplicável</h4>
      <p>Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca da sede da Momento Imóveis para dirimir quaisquer controvérsias.</p>
      <h4>8. Contato</h4>
      <p>Dúvidas sobre estes Termos podem ser enviadas para <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>.</p>`
  }
};

// Monta o markup de cada modal a partir do template único
Object.entries(MODALS).forEach(([id, m]) => {
  document.getElementById(id).innerHTML = `
    <div class="modal">
      <div class="modal-head">
        <div><h3>${m.title}</h3><p class="upd">${m.upd}</p></div>
        <button class="modal-close" aria-label="Fechar">&times;</button>
      </div>
      <div class="modal-body">${m.body}</div>
    </div>`;
});

// Abrir / fechar
const setOpen = (overlay, on) => {
  overlay.classList.toggle('open', on);
  document.body.style.overflow = on ? 'hidden' : '';
};
document.querySelectorAll('[data-modal]').forEach(t =>
  t.addEventListener('click', e => { e.preventDefault(); setOpen(document.getElementById(t.dataset.modal), true); })
);
document.querySelectorAll('.modal-overlay').forEach(o =>
  o.addEventListener('click', e => { if (e.target === o || e.target.closest('.modal-close')) setOpen(o, false); })
);
addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(o => setOpen(o, false));
});

// ===== Ano dinâmico =====
document.getElementById('year').textContent = new Date().getFullYear();
