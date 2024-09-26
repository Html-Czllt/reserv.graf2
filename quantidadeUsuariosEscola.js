import { getCSS, tickConfig } from "./common.js";

async function quantidadeUsuariosPorRede() {
    // Dados fictícios dos usuários na escola, incluindo YouTube
    const dadosEscola = {
        "Facebook": 100,  // Menos usuários
        "Instagram": 700,
        "Twitter": 950,
        "TikTok": 800,
        "WhatsApp": 900, 
        "YouTube": 500
    };


    // Ordenar os dados pela quantidade de usuários em ordem decrescente
    const ordenados = Object.entries(dadosEscola).sort((a, b) => b[1] - a[1]);
    const nomeDasRedes = ordenados.map(item => item[0]);
    const quantidadeDeUsuarios = ordenados.map(item => item[1]);

    
    const textoExplicativo = document.createElement('p');
    textoExplicativo.classList.add('graficos-container__texto');
    textoExplicativo.innerHTML = `
        <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">Você sabia que nossa escola tem aproximadamente 3.500 alunos?</span>
        <br><br>
        Cerca de <span class="highlight">3.100 estudantes</span> estão conectados a alguma rede social, o que representa aproximadamente <span class="highlight">88%</span> do total de alunos. Em média, cada estudante dedica cerca de <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">5 horas</span> por dia nessas plataformas. Isso revela que uma parte significativa dos nossos alunos está muito ativa online.
        <br><br>
        Abaixo, você pode conferir um gráfico que ilustra as redes sociais mais utilizadas entre os nossos alunos:
    `;
    
    
    
    
    
    
    


    const container = document.getElementById('graficos-container');
    container.appendChild(textoExplicativo);

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--highlight-color') 
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários entre alunos',
            font: {
                color: getCSS('--highlight-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--highlight-color') // Espaço removido
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de usuários',
                font: {
                    color: getCSS('--highlight-color') // Espaço removido
                }
            }
        }
    };
    

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    container.appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

quantidadeUsuariosPorRede();
