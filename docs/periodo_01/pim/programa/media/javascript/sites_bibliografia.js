var Referencia = {};

Referencia.TIPO_ARTIGO = 1;
Referencia.TIPO_LIVRO = 2; // rever padrao da abnt, possivel usar um tipo para mais tipos
Referencia.TIPO_CONGRESSO = 3;
Referencia.TIPO_ONLINE = 4;
Referencia.TIPO_FOLHETO = 5;
Referencia.TIPO_REVISTA = 6

Referencia.bibliografia = [
    {'site': 'http://portaldoprofessor.mec.gov.br/storage/materiais/0000012424.pdf',
        'titulo': 'Mapas conceituais e IA',
        'subtitulo': 'uma união provável?',
        'autor': [
            {'nome': 'Alberto J', 'sobrenome': 'Cañas'},
            {'nome': 'Marco M', 'sobrenome': 'Carvalho'}],
        'publicacao': {
            'titulo': 'Revista Brasileira de Informática na Educação',
            'volume': 13,
            'numero': 1,
            'ano': 2005,
            'pagina_inicial': 9,
            'pagina_final': 19},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_ARTIGO},
    {'site': 'http://www.prodemge.gov.br/images/stories/volumes/volume8/elearning_marcosresendevieira.pdf',
        'titulo': 'E-learning na prática',
        'autor': [{'nome': 'Marcos Resende', 'sobrenome': 'Vieira'}],
        'publicacao': {
            'titulo': 'Fonte',
            'volume': 8,
            'mes': 'Dezembro',
            'ano': 2008,
            'pagina_inicial': 56,
            'pagina_final': 58},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_REVISTA},
    {'site': 'http://www.prodemge.gov.br/images/stories/volumes/volume8/ucp_nelsonemariahelena.pdf',
        'titulo': 'Construindo redes colaborativas para a educação',
        'autor': [
            {'nome': 'Nelson de Luca', 'sobrenome': 'Pretto'},
            {'nome': 'Maria Helena', 'sobrenome': 'Bonilla'}],
        'publicacao': {
            'titulo': 'Fonte',
            'volume': 8,
            'mes': 'Dezembro',
            'ano': 2008,
            'pagina_inicial': 83,
            'pagina_final': 87},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_REVISTA},
    {'site': 'http://www.facef.br/quartocbs/artigos/G/G_140.pdf',
        'titulo': 'A contribuição da web 2.0 nos sistemas de educação online',
        'autor': [
            {'nome': 'Adriano Carlos', 'sobrenome': 'Ribeiro'},
            {'nome': 'Cláudio Henrique', 'sobrenome': 'Schons'}],
        'publicacao': {
            'congresso': 'Congresso Brasileiro de Sistemas',
            'edicao': 4,
            'titulo': 'Anais 4º Congresso Brasileiro de Sistemas',
            'local': 'Franca',
            'editora': 'Atlas',
            'ano': 2008,
            'pagina_inicial': 0,
            'pagina_final': 0},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_CONGRESSO},
    {'site': 'http://www.prodemge.gov.br/images/stories/volumes/volume8/ambientevirtual_julianecorrea.pdf',
        'titulo': 'Ambientes virtuais de ensino-aprendizagem e contextos de trabalho',
        'autor': [{'nome': 'Juliane', 'sobrenome': 'Corrêa'}],
        'publicacao': {
            'titulo': 'Fonte',
            'volume': 8,
            'mes': 'Dezembro',
            'ano': 2008,
            'pagina_inicial': 44,
            'pagina_final': 45},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_REVISTA},
    {'site': 'http://www.prodemge.gov.br/images/stories/volumes/volume8/leis_omarkaminski.pdf',
        'titulo': 'A tecnologia transforma a educação e desafia as leis',
        'autor': [{'nome': 'Omar', 'sobrenome': 'Kaminski'}],
        'publicacao': {
            'titulo': 'Fonte',
            'volume': 8,
            'mes': 'Dezembro',
            'ano': 2008,
            'pagina_inicial': 54,
            'pagina_final': 55},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_REVISTA},
    {'site': 'http://www.pucsp.br/ecurriculum/artigos_v_5_n_1_dez_2009/artigo16.pdf',
        'titulo': 'Tecnologia da informação e comunicação das escolas públicas brasileiras',
        'subtitulo': 'O programa proinfo integrado',
        'autor': [{'nome': 'Carlos Eduardo', 'sobrenome': 'Bielschowsky'}],
        'publicacao': {
            'titulo': 'Revista e-curriculum',
            'volume': 5,
            'numero': 1,
            'ano': 2009,
            'pagina_inicial': 1,
            'pagina_final': 28},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_ARTIGO},
    {'site': 'http://portaldoprofessor.mec.gov.br/storage/materiais/0000012382.pdf',
        'titulo': 'Trigonometria dinâmica',
        'subtitulo': 'Unidade de aprendizagem online para estudo de trigonometria',
        'autor': [
            {'nome': 'Larissa de Souza', 'sobrenome': 'Moreira'},
            {'nome': 'Gilmara Teixeira', 'sobrenome': 'Barcelos'},
            {'nome': 'Silvia Cristina Freitas', 'sobrenome': 'Batista'},
            {'nome': 'Liliana Maria', 'sobrenome': 'Passerino'}],
        'publicacao': {
            'titulo': 'Revista Brasileira de Informática na Educação',
            'volume': 17,
            'numero': 3,
            'ano': 2009,
            'pagina_inicial': 38,
            'pagina_final': 52},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_ARTIGO},
    {'site': 'http://portaldoprofessor.mec.gov.br/storage/materiais/0000011920.pdf',
        'titulo': 'Uma aplicação do conceito de simetria axial plana visando a um ensino multidisciplinar',
        'autor': [{'nome': 'Ana Maria Martensen Roland', 'sobrenome': 'Kaleff'}],
        'publicacao': {
            'titulo': 'Revista Zetetiké',
            'volume': 2,
            'numero': 2,
            'ano': 1994,
            'pagina_inicial': 85,
            'pagina_final': 91},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_ARTIGO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001540/154079por.pdf',  
        'titulo': 'Capacitação por meio de tecnologias de informação e comunicação',
        'autor': [{'nome': 'Koichiro', 'sobrenome': 'Matsuura'}],
        'publicacao': {
            'local': 'Brasilia',
            'editora': 'UNESCO',
            'ano':2005},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_LIVRO},
    {'site': 'http://unesdoc.unesco.org/images/0013/001335/133542por.pdf',
        'titulo': 'Ciência e tecnologia a serviço do progresso e da inclusão social',
        'autor': [{'nome': 'Roberto', 'sobrenome': 'Amaral'}],
        'publicacao': {
            'local': 'Brasilia',
            'editora': 'UNIESCO Brasilia',
            'ano': 2003},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_LIVRO},
    {'site': 'http://unesdoc.unesco.org/images/0013/001399/139950m.pdf',
        'titulo': 'Educação e tecnologia a serviço do desenvolvimento',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2005},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_LIVRO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001540/154071por.pdf',
        'titulo': 'Novas tecnologias e a comunicação democratizando a informação',
        'autor': [{'nome': 'Jorge', 'sobrenome': 'Werthein'}],
        'publicacao': {
            'local': 'Brasilia',
            'editora': 'UNESCO',
            'ano': 2004},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_LIVRO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001540/154069por.pdf',
        'titulo': 'Perspectivas abertas pela tecnologia de base digital para a educação e cultura',
        'autor': [{'nome': 'Jorge', 'sobrenome': 'Werthein'}],
        'publicacao': {
            'local': 'Brasilia',
            'editora': 'UNESCO',
            'ano': 2004},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_LIVRO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001540/154058por.pdf',
        'titulo': 'Sociedade da desinformação',
        'autor': [{'nome': 'Severino', 'sobrenome': 'Francisco'}],
        'publicacao': {
            'local': 'Brasilia',
            'editora': 'UNESCO',
            'ano': 2004},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_LIVRO},
    {'site': 'http://unesdoc.unesco.org/images/0014/001417/141702POR.pdf',
        'titulo': 'Sociedade de conhecimento versus economia de conhecimento',
        'subtitulo': 'Conhecimento, poder e política',
        'organizacao': [
            {'nome': 'UNESCO Office Brasilia'},
            {'nome': 'Serviço Social da Indústria'}],
        'publicacao': {
            'local': 'Brasilia',
            'editora': 'UNESCO/SESI',
            'ano': 2005},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_LIVRO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001585/158529por.pdf',
        'titulo': 'Computador na escola',
        'subtitulo': 'Tecnologia e aprendizagem',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'volume': 3,
            'numero': 3,
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2008,
            'serie': 'Tecnoloia, informação e inclusão: TICs nas escolas'},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_FOLHETO},
    {'site': 'http://bibliotecadigital.sbc.org.br/download.php?paper=1059',
        'titulo': 'Uso de computadores no ensino médio e seus resultados empíricos',
        'subtitulo': 'Uma revisão sistemática da literatura',
        'autor': [
            {'nome': 'André Covic', 'sobrenome': 'Barros'},
            {'nome': 'Jacques', 'sobrenome': 'Wainer'},
            {'nome': 'Kleucio', 'sobrenome': 'Claudio'},
            {'nome': 'Luiz Renato Ribeiro', 'sobrenome': 'Ferreira'},
            {'nome': 'Tom', 'sobrenome': 'Dwyer'}],
        'publicacao': {
            'titulo': 'Revista Brasileira de Informática',
            'volume': 16,
            'numero': 1,
            'ano': 2008,
            'pagina_inicio': 57,
            'pagina_fim': 68},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_ARTIGO},
    {'sie': 'http://portaldoprofessor.mec.gov.br/fichaTecnicaAula.html?aula=1399',
        'titulo': 'IMC, melhorando a qualidade de vida',
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_ONLINE},
    {'site': 'http://portaldoprofessor.mec.gov.br/fichaTecnicaAula.html?aula=8852',
        'titulo': 'Por fora Bela Viola! Por dentro...',
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_ONLINE},
    {'site': 'http://portaldoprofessor.mec.gov.br/fichaTecnicaAula.html?aula=540',
        'titulo': 'Estou acima do peso ideal?',
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_ONLINE},
    {'site': 'http://unesdoc.unesco.org/images/0017/001787/178758por.pdf',
        'titulo': 'Avaliação da iniciativa de parceiros na aprendizagem',
        'subtitulo': 'Relatório final',
        'organizacao': [{'nome': 'Microsoft Brazil'}],
        'publicacao': {
            'local': 'São Paulo',
            'editora': 'Microsoft',
            'ano': 2008},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_LIVRO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001585/158533por.pdf',
        'titulo': 'Juventude e internet',
        'subtitulo': 'O caso de três jovens brasilienses',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'volume': 4,
            'numero': 4,
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2008,
            'serie': 'Tecnologia, informação e inclusão: TICs nas escolas'},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_FOLHETO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001585/158529por.pdf',
        'titulo': 'Computador na escola',
        'subtitulo': 'Tecnologia e aprendizagem',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'volume': 3,
            'numero': 3,
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2008,
            'serie': 'Tecnologia, informação e inclusão: TICs nas escolas'},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_FOLHETO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001585/158527por.pdf',
        'titulo': 'Computador na escola',
        'subtitulo': 'A dura realidade nas escolas',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'volume': 3,
            'numero': 1,
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2008,
            'serie': 'Tecnologia, informação e inclusão: TICs nas escolas'},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_FOLHETO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001585/158526por.pdf',
        'titulo': 'Informação para todos',
        'subtitulo': 'Acesso muda a vida das pessoas',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'volume': 2,
            'numero': 3,
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2008,
            'serie': 'Tecnologia, informação e inclusão: TICs nas escolas'},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_FOLHETO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001585/158525por.pdf',
        'titulo': 'Informação para todos',
        'subtitulo': 'Telecentros acessíveis',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'volume': 2,
            'numero': 2,
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2008,
            'serie': 'Tecnologia, informação e inclusão: TICs nas escolas'},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_FOLHETO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001585/158505por.pdf',
        'titulo': 'Acesso às novas tecnologias',
        'subtitulo': 'Telecentros no país',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'volume': 1,
            'numero': 4,
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2008,
            'serie': 'Tecnologia, informação e inclusão: TICs nas escolas'},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_FOLHETO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001585/158504por.pdf',
        'titulo': 'Acesso às novas tecnologias',
        'subtitulo': 'O papel do governo',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'volume': 1,
            'numero': 3,
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2008,
            'serie': 'Tecnologia, informação e inclusão: TICs nas escolas'},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_FOLHETO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001585/158503por.pdf',
        'titulo': 'Acesso às novas tecnologias',
        'subtitulo': 'O papel ONGs',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'volume': 1,
            'numero': 2,
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2008,
            'serie': 'Tecnologia, informação e inclusão: TICs nas escolas'},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_FOLHETO},
    {'site': 'http://unesdoc.unesco.org/images/0015/001585/158502por.pdf',
        'titulo': 'Acesso às novas tecnologias',
        'subtitulo': 'Brasil no rumo da inclusão',
        'organizacao': [{'nome': 'UNESCO Office Brasilia'}],
        'publicacao': {
            'volume': 1,
            'numero': 1,
            'local': 'Brasilia',
            'editora': 'UNESCO Brasilia',
            'ano': 2008,
            'serie': 'Tecnologia, informação e inclusão: TICs nas escolas'},
        'data_visitada': '2010/4/2',
        'tipo': Referencia.TIPO_FOLHETO},
    {'site': 'http://wiki.sj.ifsc.edu.br/wiki/images/8/88/ArtigoIBCL1.ppt',
        'titulo': '',
        'data_visitada': '2010/4/5',
        'tipo': Referencia.TIPO_CONGRESSO},
    {'site': 'http://www.anped.org.br/reunioes/30ra/posteres/GT16-3130--Int.pdf',
        'titulo': '',
        'data_visitada': '2010/4/5',
        'tipo': 0}
];