
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está navegando pela internet e encontra uma ferramenta de Inteligência Artificial capaz de criar textos, imagens e responder perguntas. Como você reage a essa descoberta?",
        alternativas: [
            {
                texto: "Fico impressionado com tantas possibilidades e quero experimentar.",
                afirmacao: "Demonstrou interesse pelas novas tecnologias e começou a explorar diferentes maneiras de utilizar a Inteligência Artificial."
            },
            {
                texto: "Tenho curiosidade, mas também quero entender como essa ferramenta funciona.",
                afirmacao: "Passou a pesquisar sobre o funcionamento da IA e seus impactos na sociedade."
            }
        ]
    },
    {
        enunciado: "Durante uma atividade escolar, seu professor solicita uma pesquisa sobre os benefícios da Inteligência Artificial na educação. Como você decide realizar essa tarefa?",
        alternativas: [
            {
                texto: "Utilizo a IA para encontrar informações e compreender melhor o assunto.",
                afirmacao: "Aprendeu a utilizar a Inteligência Artificial como uma ferramenta de pesquisa e apoio aos estudos."
            },
            {
                texto: "Faço pesquisas em livros e sites, desenvolvendo minhas próprias respostas.",
                afirmacao: "Valorizou a pesquisa independente e desenvolveu suas próprias opiniões sobre o uso da IA."
            }
        ]
    },
    {
        enunciado: "Em uma conversa com seus colegas, surge uma discussão sobre como a Inteligência Artificial poderá transformar o mercado de trabalho. Qual é a sua opinião?",
        alternativas: [
            {
                texto: "Acredito que a IA poderá criar novas profissões e facilitar diversas atividades.",
                afirmacao: "Começou a estudar as oportunidades profissionais relacionadas à Inteligência Artificial e suas possibilidades para o futuro."
            },
            {
                texto: "Acredito que muitas pessoas poderão perder seus empregos devido à automação.",
                afirmacao: "Passou a defender o uso responsável da IA e a importância de preparar os trabalhadores para as mudanças tecnológicas."
            }
        ]
    },
    {
        enunciado: "Para um projeto escolar, você precisa produzir uma imagem que represente o futuro da tecnologia. Qual ferramenta escolheria?",
        alternativas: [
            {
                texto: "Utilizaria um programa tradicional de edição e desenho digital.",
                afirmacao: "Aprimorou suas habilidades de criação digital e percebeu que ferramentas tradicionais continuam sendo importantes."
            },
            {
                texto: "Utilizaria uma ferramenta de Inteligência Artificial para gerar a imagem.",
                afirmacao: "Descobriu novas possibilidades de criação com IA e aprendeu a utilizar a tecnologia para desenvolver conteúdos visuais."
            }
        ]
    },
    {
        enunciado: "Seu grupo precisa entregar um trabalho escolar, mas está com pouco tempo. Um integrante utiliza a IA para produzir todo o conteúdo, sem verificar as informações. Como você agiria?",
        alternativas: [
            {
                texto: "Aceitaria o conteúdo gerado pela IA, pois isso economizaria bastante tempo.",
                afirmacao: "Percebeu que depender totalmente da Inteligência Artificial pode prejudicar o desenvolvimento do pensamento crítico e da aprendizagem."
            },
            {
                texto: "Revisaria as informações, verificaria as fontes e acrescentaria as ideias dos integrantes.",
                afirmacao: "Compreendeu que a IA deve ser utilizada como uma ferramenta de apoio, sendo fundamental verificar as informações e manter a participação humana nas atividades."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
