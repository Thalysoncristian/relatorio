function toggleVandalismo() {
    const vandalismo = document.getElementById('vandalismo').value;
    const vandalismoDetails = document.getElementById('vandalismoDetails');
    const nonVandalismoDetails = document.getElementById('nonVandalismoDetails');

    if (vandalismo === 'SIM') {
        vandalismoDetails.classList.remove('hidden');
        nonVandalismoDetails.classList.add('hidden');
    } else {
        vandalismoDetails.classList.add('hidden');
        nonVandalismoDetails.classList.remove('hidden');
    }
}

function formatarDataHora(dataHora) {
    const [data, hora] = dataHora.split('T');
    const [ano, mes, dia] = data.split('-');
    const [horaStr, minuto] = hora.split(':');
    return `${dia.padStart(2, '0')}/${mes.padStart(2, '0')}/${ano} ${horaStr}:${minuto}`;
}

function gerarRelatorio() {
    const empresa = document.getElementById('empresa').value.toUpperCase();
    const tecnico = document.getElementById('tecnico').value.toUpperCase();
    const site = document.getElementById('site').value.toUpperCase();
    const vandalismo = document.getElementById('vandalismo').value.toUpperCase();
    
    let resultado = '';

    if (vandalismo === 'SIM') {
        const amiVandalismo = document.getElementById('amiVandalismo').value.toUpperCase();
        const dataHoraVandalismo = formatarDataHora(document.getElementById('dataHoraVandalismo').value);
        const cabos = document.getElementById('cabos').value.toUpperCase();
        const tipo = document.getElementById('tipo').value.toUpperCase();
        const quantidadeBateria = document.getElementById('quantidadeBateria').value;
        const modeloBateria = document.getElementById('modeloBateria').value.toUpperCase();
        const gradil = document.getElementById('gradil').value.toUpperCase();
        const qtm = document.getElementById('qtm').value.toUpperCase();
        const caixaPassagem = document.getElementById('caixaPassagem').value.toUpperCase();
        const relatorio = document.getElementById('relatorio').value.toUpperCase();

        resultado = `
EMPRESA: ${empresa}
TÉCNICO: ${tecnico}
SITE: ${site}
VANDALISMO: SIM
AMI: ${amiVandalismo}
DATA E HORA: ${dataHoraVandalismo}
CABOS / MTS: ${cabos}
TIPO / VIAS: ${tipo}
BATERIAS: - QTD: ${quantidadeBateria}
MODELO: ${modeloBateria}
GRADIL: ${gradil}
QTM: ${qtm}
CAIXA DE PASSAGEM: ${caixaPassagem}
RELATÓRIO: ${relatorio}`;
    } else {
        const ami = document.getElementById('ami').value.toUpperCase();
        const dataAcionamento = formatarDataHora(document.getElementById('dataAcionamento').value + 'T' + document.getElementById('horaAcionamento').value);
        const inicioAtendimento = document.getElementById('inicioAtendimento').value;
        const falha = document.getElementById('falha').value.toUpperCase();
        const causa = document.getElementById('causa').value.toUpperCase();
        const relatorioNaoVandalismo = document.getElementById('relatorioNaoVandalismo').value.toUpperCase();
        const fimAtendimento = document.getElementById('fimAtendimento').value;
        const fimDeslocamento = document.getElementById('fimDeslocamento').value;

        resultado = `
EMPRESA: ${empresa}
TÉCNICO: ${tecnico}
SITE: ${site}
VANDALISMO: NÃO
AMI: ${ami}
DATA DO ACIONAMENTO: ${dataAcionamento}
HORA DO ACIONAMENTO: ${document.getElementById('horaAcionamento').value}
INÍCIO DO ATENDIMENTO: ${inicioAtendimento}
FALHA: ${falha}
CAUSA: ${causa}
RELATÓRIO: ${relatorioNaoVandalismo}
FIM DO ATENDIMENTO: ${fimAtendimento}
FIM DO DESLOCAMENTO: ${fimDeslocamento}`;
    }

    document.getElementById('resultado').textContent = resultado;
}

function copiarRelatorio() {
    const resultado = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(resultado).then(() => {
        alert('Relatório copiado para a área de transferência.');
    });
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}
