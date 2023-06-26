export const prova1 = [
  {
    description:
      'Seu aplicativo está atualmente configurado para interagir com um bucket do S3. Agora você está recebendo erros de que o bucket não existe. Qual das opções a seguir é a melhor maneira de entender como o bucket foi excluído?',
    answers: [
      {
        description:
          'Use os logs do Cloudwatch para ver a solicitação da API de exclusão de bucket',
        correct: false,
      },
      {
        description:
          'Use os logs do Cloudtrail para ver a solicitação da API de exclusão de bucket',
        correct: true,
      },
      {
        description:
          'Use o serviço AWS Inspector para ver a solicitação da API de exclusão de bucket',
        correct: false,
      },
      {
        description:
          'Use o serviço AWS Trusted Advisor para ver a solicitação da API de exclusão de bucket',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Sua equipe está desenvolvendo um aplicativo que faz uso de contêineres Docker. Esses contêineres serão implantados no Elastic Container Service. Os aplicativos nesses contêineres precisam interagir com as tabelas do DynamoDB. Qual das opções a seguir é a maneira mais segura de garantir que os contêineres possam interagir com o DynamoDB',
    answers: [
      {
        description: 'Crie uma função IAM para as tarefas ECS',
        correct: true,
      },
      {
        description: 'Incorpore as Chaves de Acesso nos contêineres',
        correct: false,
      },
      {
        description: 'Incorporar as chaves de acesso no cluster',
        correct: false,
      },
      {
        description:
          'Use as credenciais de um usuário do IAM para ativar o cluster',
        correct: false,
      },
    ],
    tag: 'Segurança',
  },
  {
    description:
      'Um aplicativo está fazendo chamadas para uma tabela do DynamoDB. As consultas estão ocupando muita capacidade de leitura. A tabela tem um grande número de atributos. Nem todos os atributos são usados na consulta. Qual das opções a seguir pode ser usada para minimizar a capacidade de leitura usada pelas consultas?',
    answers: [
      {
        description: 'Use índices secundários globais com atributos projetados',
        correct: true,
      },
      {
        description:
          'Use um Application Load balancer na frente da tabela do DynamoDB',
        correct: false,
      },
      {
        description: 'Considere o uso de varreduras paralelas na mesa',
        correct: false,
      },
      {
        description:
          'Use uma distribuição cloudfront na frente da tabela do DynamoDB',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description:
      'Sua equipe está desenvolvendo um conjunto de funções do Lambda. Você precisa garantir que a equipe use as melhores práticas para trabalhar com o AWS Lambda?\n',
    answers: [
      {
        description:
          'A função Lambda não deve ter nenhuma dependência externa\n',
        correct: false,
      },
      {
        description: 'Evite usar variáveis de ambiente',
        correct: false,
      },
      {
        description: 'Separe o manipulador Lambda de sua lógica principal',
        correct: true,
      },
      {
        description: 'Use código recursivo para tornar o código limpo',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Você tem um aplicativo que armazena objetos em um bucket do Amazon S3. Devido à enorme popularidade, esses objetos são frequentemente acessados a partir do bucket S3. Qual das opções a seguir pode ser usada para reduzir a latência desses objetos?',
    answers: [
      {
        description: 'Salvar objetos em buckets separados em cada região',
        correct: false,
      },
      {
        description: 'Use o Amazon CloudFront na frente do bucket S3',
        correct: true,
      },
      {
        description: ' Aumente o número de prefixos no bucket S3',
        correct: false,
      },
      {
        description: 'Adicionar sufixo aleatório aos nomes das chaves',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Como desenvolvedor, você tem o requisito de acessar recursos em outra conta. Qual das opções a seguir é a melhor maneira de conseguir isso?',
    answers: [
      {
        description: 'Crie uma função entre contas e chame a API AssumeRole',
        correct: true,
      },
      {
        description:
          'Crie um usuário na conta de destino e compartilhe a senha\n',
        correct: false,
      },
      {
        description:
          'Crie um usuário na conta de destino e compartilhe as chaves de acesso',
        correct: false,
      },
      {
        description: 'Crie uma função IAM e anexe-a a uma instância EC2',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Sua empresa precisa desenvolver um aplicativo que precise ter um recurso de cache. O aplicativo não pode permitir muitas falhas de cache e deve estar altamente disponível. Qual dos seguintes você escolheria para este propósito?',
    answers: [
      {
        description: 'Use o Memcached em uma instância do EC2',
        correct: false,
      },
      {
        description: 'Usar ElastiCache – Memcached',
        correct: false,
      },
      {
        description: 'Use ElastiCache – Redis com modo de cluster ativado',
        correct: true,
      },
      {
        description: 'Use o Redis em uma instância do EC2',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Sua equipe está desenvolvendo um conjunto de funções do Lambda. Eles precisam depurar as funções do Lambda usando o serviço X-Ray. Quais das opções a seguir são variáveis de ambiente que o AWS Lambda usa para se comunicar com o serviço X-Ray? Escolha 3 respostas entre as opções abaixo.',
    answers: [
      {
        description: '_X_AMZN_TRACE_ID',
        correct: true,
      },
      {
        description: 'AWS_XRAY_CONTEXT_MISSING',
        correct: true,
      },
      {
        description: 'AWS_XRAY_DAEMON_ADDRESS',
        correct: true,
      },
      {
        description: 'AWS_LAMBDA_XRAY',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Sua equipe está planejando usar o serviço AWS Code Build para testar a compilação do aplicativo. O aplicativo precisa se conectar a um banco de dados. Como você deve armazenar com segurança a senha do banco de dados para que esteja disponível durante o processo de compilação?',
    answers: [
      {
        description:
          'Armazene a senha como uma variável de ambiente no servidor de compilação',
        correct: false,
      },
      {
        description:
          'Armazene a senha no armazenamento de parâmetros do AWS Systems Manager',
        correct: true,
      },
      {
        description:
          'Armazene a senha em um arquivo de configuração no servidor de compilação',
        correct: false,
      },
      {
        description:
          'Armazene a senha em um arquivo de configuração no aplicativo',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Você está trabalhando em uma API REST em que precisa passar solicitações de método enviadas pelo cliente como se fosse uma Função Lambda. Qual dos seguintes pode ser definido como um tipo de integração para este requisito?',
    answers: [
      {
        description: '"tipo": "aws_proxy"',
        correct: true,
      },
      {
        description: '"tipo": "aws"',
        correct: false,
      },
      {
        description: '"tipo": "http_proxy"',
        correct: false,
      },
      {
        description: '"tipo": "mock"',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Uma empresa possui uma aplicação que está utilizando uma tabela do DynamoDB. Agora existe um requisito para garantir que todas as alterações nos itens da tabela sejam registradas e armazenadas em um banco de dados MySQL. Qual das opções a seguir seria idealmente uma das etapas de implementação?',
    answers: [
      {
        description: 'Habilitar Acelerador do DynamoDB',
        correct: false,
      },
      {
        description: 'Habilitar tabelas globais do DynamoDB',
        correct: false,
      },
      {
        description: 'Ativar fluxos do DynamoDB',
        correct: true,
      },
      {
        description: 'Habilitar gatilhos do DynamoDB',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description:
      'Você desenvolveu uma função Lambda. Esta função precisa ser executada de forma programada. Qual das opções a seguir pode ser feita para atender a esse requisito de maneira ideal?',
    answers: [
      {
        description: 'Use o serviço de agendamento no AWS Lambda',
        correct: false,
      },
      {
        description:
          'Use uma instância do EC2 para agendar a invocação do Lambda',
        correct: false,
      },
      {
        description: 'Use os eventos Cloudwatch para agendar a função Lambda',
        correct: true,
      },
      {
        description: 'Use Cloudtrail para agendar a função Lambda',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Você foi designado para executar a injeção de falhas em um aplicativo de produção crítico para garantir a resiliência do aplicativo durante eventos de interrupção. Esse teste será feito usando modelos do AWS Fault Injection Simulator para instâncias do Amazon EC2 implantadas em us-east-1a. Durante o teste, nenhuma outra instância em outra AZ deve ser afetada. Quais parâmetros podem ser especificados nos modelos de experimento do AWS Fault Injection Simulator para selecionar instâncias específicas do Amazon EC2 em us-east-1a AZ?',
    answers: [
      {
        description:
          'Especifique o caminho e os valores em uma seção de filtros de recursos de um componente de destino no modelo de experimento',
        correct: true,
      },
      {
        description:
          'Especifique o caminho e os valores em uma seção de tags de recurso de um componente de destino no modelo de experimento\n',
        correct: false,
      },
      {
        description:
          'Especifique o caminho e os valores em uma seção de tags de recurso de um componente Action Set no modelo de experimento',
        correct: false,
      },
      {
        description:
          'Especifique o caminho e os valores em uma seção de filtros de recursos de um componente Conjunto de ações no modelo de experimento',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description:
      'Sua empresa atualmente mantém planilhas de Excel com dados que agora precisam ser portados para uma tabela do DynamoDB. A planilha Excel contém os seguintes cabeçalhos para os dados.\n' +
      '- Identificação do Cliente\n' +
      '- Nome do cliente\n' +
      '- Localização do cliente\n' +
      '- Idade do cliente\n' +
      '\n' +
      'Qual das opções a seguir seria a chave de partição ideal para a tabela de dados no DynamoDB?\n',
    answers: [
      {
        description: 'Identificação do cliente',
        correct: true,
      },
      {
        description: 'Nome do cliente',
        correct: false,
      },
      {
        description: 'Localização do Cliente',
        correct: false,
      },
      {
        description: 'Idade do Cliente',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Você criou vários buckets do S3 usando modelos do AWS CloudFormation. Você adicionou uma DeletionPolicy para cada modelo para limpar todos os buckets do S3 criados durante a criação e exclusão da pilha. Após algumas pesquisas, você descobre que alguns buckets do S3 não estão sendo excluídos. Qual das opções a seguir pode ser o motivo?',
    answers: [
      {
        description: 'DeletionPolicy padrão para o bucket do Amazon S3 é reter',
        correct: false,
      },
      {
        description:
          'Certifique-se de que todos os objetos nos buckets do S3 sejam excluídos antes que o bucket seja excluído',
        correct: true,
      },
      {
        description:
          'Certifique-se de que o CloudFormation Stack tenha permissões para excluir buckets S3',
        correct: false,
      },
      {
        description:
          'Modifique DeletionPolicy para excluir o bucket S3 após a exclusão da pilha',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description:
      'Sua equipe de desenvolvimento está planejando mover um armazenamento de dados no local para o AWS DynamoDB. Havia gatilhos definidos no banco de dados anterior que eram usados para atualizações de itens existentes. Como você pode conseguir o mesmo quando o movimento é feito para o DynamoDB da maneira mais fácil possível?',
    answers: [
      {
        description: 'Definir gatilhos no DynamoDB para cada tabela',
        correct: false,
      },
      {
        description:
          'Definir funções do Lambda em resposta a eventos do DynamoDB Streams',
        correct: true,
      },
      {
        description:
          'Definir tópicos SNS em resposta a eventos do DynamoDB Streams',
        correct: false,
      },
      {
        description:
          'Definir tópicos SQS em resposta a eventos do DynamoDB Streams',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description:
      'Sua empresa tem um bucket com controle de versão e criptografia ativados. O bucket recebe milhares de operações PUT por dia. Após 6 meses, um número significativo de códigos de erro HTTP 503 está sendo recebido. Qual das opções a seguir pode ser usada para diagnosticar o erro?\n',
    answers: [
      {
        description: 'Configuração da AWS',
        correct: false,
      },
      {
        description: 'AWS Cloudtrail',
        correct: false,
      },
      {
        description: 'Inventário AWS S3',
        correct: true,
      },
      {
        description: 'Consultor de confiança da AWS',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description:
      'Existe uma nova função Lambda desenvolvida usando AWS CloudFormation Templates. Qual dos seguintes atributos pode ser usado para testar a nova Função com a migração de 5% do tráfego para a nova versão',
    answers: [
      {
        description:
          'aws lambda create-alias --name nome do alias --nome da função nome da função \\--routing-config AdditionalVersionWeights={"2"=0,05}',
        correct: true,
      },
      {
        description:
          'aws lambda create-alias --name <em>nome do alias</em> --nome da função nome da função \\--routing-config AdditionalVersionWeights={"2"=5}',
        correct: false,
      },
      {
        description:
          'aws lambda create-alias --name nome do alias --nome da função nome da função \\--routing-config AdditionalVersionWeights={"2"=0.5}',
        correct: false,
      },
      {
        description:
          'aws lambda create-alias --name nome do alias --nome da função nome da função \\--routing-config AdditionalVersionWeights={"2"=5%}',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Sua equipe de desenvolvimento configurou o serviço de gateway de API da AWS. Os recursos e métodos foram configurados. Agora, um ambiente de preparação foi configurado para testar o serviço. Você precisa monitorar o rastreamento de execução de ponta a ponta da solicitação para o gateway de API. Qual dos seguintes serviços pode ajudá-lo a conseguir isso?',
    answers: [
      {
        description: 'Configuração da AWS',
        correct: false,
      },
      {
        description: 'Raio X da AWS',
        correct: true,
      },
      {
        description: 'AWS Cloudtrail',
        correct: false,
      },
      {
        description: 'AWS Cloudwatch',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description:
      'Sua empresa possui um aplicativo que está interagindo com uma tabela do DynamoDB. Depois de revisar os logs do aplicativo, notou-se que há alguns “ProvisionedThroughputExceededException” ocorrendo nos logs. Qual das opções a seguir pode ser implementada para superar esses erros?',
    answers: [
      {
        description: 'Implementar tabelas globais',
        correct: false,
      },
      {
        description: 'Use backoff exponencial no programa',
        correct: true,
      },
      {
        description:
          'Certifique-se de que as permissões corretas sejam definidas para o perfil de instância para a instância que hospeda o aplicativo',
        correct: false,
      },
      {
        description: 'Certifique-se de usar índices em vez disso',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description:
      'Você está planejando usar o modelo de aplicativo sem servidor para implantar uma função do Lambda. Abaixo está uma construção normal para o modelo a ser usado.\n' +
      '\n' +
      "AWSTemplateFormatVersion: '2010-09-09'\n" +
      '\n' +
      'Transformação: AWS::Serverless-2016-10-31\n' +
      '\n' +
      'Recursos:\n' +
      '\n' +
      'ColocarFunção:\n' +
      '\n' +
      'Tipo: AWS::Sem servidor::Função\n' +
      '\n' +
      'Propriedades:\n' +
      '\n' +
      'Manipulador: index.handler\n' +
      '\n' +
      'Tempo de execução: nodejs6.10\n' +
      '\n' +
      'CodeUri:\n' +
      '\n' +
      'Para onde a base de código do CodeUri normalmente apontaria?\n',
    answers: [
      {
        description: 'O código como um pacote zip no Amazon Glacier',
        correct: false,
      },
      {
        description: 'O código como um pacote zip no Amazon EBS Volumes',
        correct: false,
      },
      {
        description: 'O código como um pacote zip no Amazon S3',
        correct: true,
      },
      {
        description: 'O código como um pacote zip no Amazon Config',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description:
      'Você faz parte de uma equipe de desenvolvimento responsável pela criação de modelos do CloudFormation. Esses modelos precisam ser criados em várias contas com o mínimo de esforço. Qual das opções a seguir ajudaria a realizar isso?',
    answers: [
      {
        description: 'Criação de conjuntos de alterações do CloudFormation',
        correct: false,
      },
      {
        description: 'Criação de StackSets do CloudFormation',
        correct: true,
      },
      {
        description: 'Faça uso de pilhas aninhadas',
        correct: false,
      },
      {
        description: 'Usar artefatos do CloudFormation',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description:
      'Sua equipe está procurando fazer upload de diferentes versões de um aplicativo usando o AWS Elastic Beanstalk. Como eles podem conseguir isso da maneira mais fácil possível?',
    answers: [
      {
        description: 'Criar vários aplicativos no Elastic Beanstalk',
        correct: false,
      },
      {
        description: 'Criar vários ambientes no Elastic Beanstalk',
        correct: false,
      },
      {
        description:
          'Carregar o código-fonte do aplicativo ou o pacote-fonte no console do Elastic Beanstalk',
        correct: true,
      },
      {
        description:
          'Use o CodePipeline para transmitir as várias versões do aplicativo',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description:
      'Você está trabalhando como Desenvolvedor de Software Sênior para uma grande empresa farmacêutica. Seu lead pediu para você trabalhar em um novo módulo no qual você precisa consultar uma tabela do DynamoDB com vários valores de chave de partição de uma só vez e armazenar o resultado no formato CSV no S3. Qual operação você usará para conseguir o mesmo?',
    answers: [
      {
        description: 'Escanear',
        correct: false,
      },
      {
        description: 'Consulta',
        correct: false,
      },
      {
        description: 'GetItem',
        correct: false,
      },
      {
        description: 'BatchGetItem',
        correct: true,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description:
      'Você está configurando o compartilhamento de recursos entre origens para seu bucket do S3. Você precisa garantir que os sites de domínio externo só possam emitir solicitações GET em relação ao seu bucket. Qual das opções a seguir você modificaria como parte da configuração do CORS para este requisito?',
    answers: [
      {
        description: 'Elemento AllowedOrigin',
        correct: false,
      },
      {
        description: 'Elemento AllowedHeader',
        correct: false,
      },
      {
        description: 'Elemento AllowedMethod',
        correct: true,
      },
      {
        description: 'Elemento MaxAgeSeconds',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description:
      'A equipe de implantação está trabalhando em um projeto para um novo aplicativo sem servidor usando AWS Lambda, CodeBuild e AWS CloudFormation. O código-fonte será acessado pelos usuários que trabalham neste projeto a partir de vários locais locais. Quais dos seguintes são locais com suporte para armazenar o código-fonte usado para compilação? (Selecione Três)',
    answers: [
      {
        description: 'Instância EC2',
        correct: false,
      },
      {
        description: 'bucket Amazon S3',
        correct: true,
      },
      {
        description: 'Máquina local no local',
        correct: false,
      },
      {
        description: 'AWS CodeCommit',
        correct: true,
      },
      {
        description: 'Bitbucket',
        correct: true,
      },
    ],
    tag: 'Implantação',
  },
  {
    description:
      'Um engenheiro júnior está configurando o daemon do AWS X-Ray, que seria executado localmente em um ambiente de sistema operacional de vários fornecedores. Ele está preocupado com a porta de escuta a ser configurada para este cenário. Qual é a declaração correta para a porta de escuta do AWS X-Ray Daemon?',
    answers: [
      {
        description:
          'A porta de escuta do AWS X-Ray Daemon pode ser alterada apenas para o ambiente Linux',
        correct: false,
      },
      {
        description:
          'A porta de escuta do AWS X-Ray Daemon não pode ser alterada durante a execução do daemon localmente',
        correct: false,
      },
      {
        description:
          'A porta de escuta do AWS X-Ray Daemon pode ser alterada usando o comando --bind com CLI',
        correct: true,
      },
      {
        description:
          'A porta de escuta do AWS X-Ray Daemon é padrão como 2000 e não pode ser alterada',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description:
      'Sua equipe está implantando um conjunto de aplicativos na AWS. Esses aplicativos funcionam com vários bancos de dados. Você precisa garantir que as senhas do banco de dados sejam armazenadas com segurança. Qual das opções a seguir é a maneira ideal de armazenar as senhas do banco de dados?',
    answers: [
      {
        description:
          'Armazená-los em funções Lambda separadas que podem ser invocadas via HTTPS',
        correct: false,
      },
      {
        description: 'Armazená-los como segredos no AWS Secrets Manager',
        correct: true,
      },
      {
        description: 'Armazená-los em tabelas separadas do DynamoDB',
        correct: false,
      },
      {
        description: 'Armazene-os em buckets S3 separados',
        correct: false,
      },
    ],
    tag: 'Segurança',
  },
  {
    description:
      'Sua equipe está desenvolvendo um aplicativo móvel. Os usuários que vão usar este aplicativo serão primeiro autenticados usando um provedor externo como o Facebook. O aplicativo precisaria obter credenciais de acesso temporárias para trabalhar com os recursos da AWS. Qual das seguintes ações você usaria idealmente para esta finalidade?',
    answers: [
      {
        description: 'AssumeRoleWithWebIdentity',
        correct: true,
      },
      {
        description: 'AssumeRoleWithSAML',
        correct: false,
      },
      {
        description: 'GetCallerIdentity',
        correct: false,
      },
      {
        description: 'GetSessionToken',
        correct: false,
      },
    ],
    tag: 'Segurança',
  },
  {
    description:
      'Você é um desenvolvedor que oferece suporte a um aplicativo em contêiner. Você é instruído a configurar o mapeamento dinâmico de portas para o Amazon ECS e o balanceamento de carga. Qual afirmação é verdadeira neste caso?',
    answers: [
      {
        description: 'O Classic Load Balancer permite executar várias cópias de uma tarefa na mesma instância',
        correct: false,
      },
      {
        description: 'O Application Load Balancer usa mapeamento de porta estática em uma instância de contêiner',
        correct: false,
      },
      {
        description: 'Depois de criar um serviço Amazon ECS, você adiciona a configuração do balanceador de carga',
        correct: false,
      },
      {
        description: 'Se o mapeamento dinâmico de porta estiver configurado corretamente, você verá os destinos registrados e a porta atribuída para a tarefa',
        correct: true,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description: 'Sua equipe acaba de implantar uma API por trás do serviço de gateway de API da AWS. Eles querem garantir latência mínima de solicitações ao serviço de gateway de API. Qual dos seguintes recursos pode ajudar a atender a esse requisito?',
    answers: [
      {
        description: 'Configuração do rastreamento de raios-X',
        correct: false,
      },
      {
        description: 'Use o cache da API',
        correct: true,
      },
      {
        description: 'Habilite o CORS',
        correct: false,
      },
      {
        description: 'Usar autorizadores Lambda',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Uma empresa contratou você para seu projeto de desenvolvimento em andamento. O projeto envolve o streaming de dados em fluxos do Amazon Kinesis de várias fontes de log. Você precisa analisar dados em tempo real usando SQL padrão. Qual dos seguintes pode ser usado para esta finalidade?',
    answers: [
      {
        description: 'Amazon Kinesis Firehose',
        correct: false,
      },
      {
        description: 'Amazon Kinesis Data Analytics',
        correct: true,
      },
      {
        description: 'Atena amazônica',
        correct: false,
      },
      {
        description: 'Amazon EMR',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description: 'Você está desenvolvendo um aplicativo que está trabalhando com uma tabela do DynamoDB. Alguns dos resultados de sua solicitação estão retornando um código de status HTTP 4xx. Quais dos seguintes são possíveis problemas com as solicitações? Escolha 2 respostas entre as opções abaixo.',
    answers: [
      {
        description: 'Faltam parâmetros obrigatórios em algumas das solicitações',
        correct: true,
      },
      {
        description: 'Você está excedendo o throughput provisionado da tabela',
        correct: true,
      },
      {
        description: 'O serviço DynamoDB está indisponível',
        correct: false,
      },
      {
        description: 'Existem problemas de rede',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'No momento, você está desenvolvendo um aplicativo que consiste em uma camada da web hospedada em uma instância do EC2. Isso está interagindo com a camada de banco de dados usando a instância do AWS RDS. Você está percebendo que as mesmas leituras de consulta estão causando problemas de desempenho. Qual das opções a seguir pode ser usada para aliviar esse problema?',
    answers: [
      {
        description: 'Coloque um ELB na frente da camada web',
        correct: false,
      },
      {
        description: 'Coloque um ELB na frente da camada de banco de dados',
        correct: false,
      },
      {
        description: 'Coloque um ElastiCache na frente da camada do banco de dados',
        correct: true,
      },
      {
        description: 'Coloque um ElastiCache na frente da camada da web',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description: 'Você desenvolveu um aplicativo que está colocando métricas personalizadas no Cloudwatch. Você precisa gerar alarmes em um intervalo de 10 segundos com base nas métricas publicadas. Qual das opções a seguir precisa ser feita para atender a esse requisito?',
    answers: [
      {
        description: 'Habilitar monitoramento básico',
        correct: false,
      },
      {
        description: 'Habilitar monitoramento detalhado',
        correct: false,
      },
      {
        description: 'Criar métricas de resolução padrão',
        correct: false,
      },
      {
        description: 'Crie métricas de alta resolução',
        correct: true,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Como desenvolvedor, você está desenvolvendo um aplicativo que realizará a tarefa de upload de objetos para o serviço Simple Storage. O tamanho dos objetos varia de 300 MB a 500 MB de tamanho. Qual das opções a seguir você deve fazer para minimizar a quantidade de tempo usada para carregar um item?',
    answers: [
      {
        description: 'Use o comando BatchWriteItem',
        correct: false,
      },
      {
        description: 'Usar upload em várias partes',
        correct: true,
      },
      {
        description: 'Use o comando MultiPutItem',
        correct: false,
      },
      {
        description: 'Use o comando BatchPutItem Use o comando BatchPutItem',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Como desenvolvedor, você está escrevendo um aplicativo que será hospedado em uma instância do EC2. Este aplicativo irá interagir com uma fila definida usando o serviço Simple Queue. As mensagens aparecerão na fila durante um período de 20 a 60 segundos. Qual das seguintes estratégias deve ser usada para consultar a fila de mensagens de forma eficaz?',
    answers: [
      {
        description: 'Use dead letter queues',
        correct: false,
      },
      {
        description: 'Usar filas FIFO',
        correct: false,
      },
      {
        description: 'Usar long polling',
        correct: true,
      },
      {
        description: 'Use short polling',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Você é desenvolvedor de uma empresa. Você precisa desenvolver um aplicativo que analise todas as métricas de nível de sistema e nível de convidado de instâncias do Amazon EC2 e servidores locais. Qual dos seguintes pré-requisitos você precisaria realizar?',
    answers: [
      {
        description: 'Certifique-se de que o agente Cloudwatch esteja presente nos servidores',
        correct: true,
      },
      {
        description: 'Certifique-se de que uma trilha seja criada no Cloudtrail',
        correct: false,
      },
      {
        description: 'Certifique-se de que o AWS Config esteja ativado',
        correct: false,
      },
      {
        description: 'Garantir que os servidores locais sejam movidos para a AWS',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Qual das seguintes opções é verdadeira em relação à regra de amostragem padrão configurada usando o Console do AWS X-Ray?',
    answers: [
      {
        description: 'Duas solicitações por segundo e dez por cento de qualquer solicitação adicional por host',
        correct: false,
      },
      {
        description: 'Uma solicitação por segundo e cinco por cento de quaisquer solicitações adicionais por host',
        correct: true,
      },
      {
        description: 'Duas solicitações por segundo e cinco por cento de quaisquer solicitações adicionais por host',
        correct: false,
      },
      {
        description: 'Uma solicitação por segundo e dez por cento de quaisquer solicitações adicionais por host',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Você está trabalhando em um aplicativo separado que usa o Amazon SQS para armazenar mensagens antes de serem processadas por outro aplicativo implantado na instância do Amazon EC2. Você está observando um aumento no número de mensagens sendo processadas por este aplicativo, a maioria das quais são mensagens duplicadas. Que alteração precisa ser feita se seu aplicativo leva aproximadamente 45 segundos para processar cada mensagem?',
    answers: [
      {
        description: 'Configure o tempo limite de visibilidade do Amazon SQS para 43200 segundos',
        correct: false,
      },
      {
        description: 'Configure o tempo limite de visibilidade do Amazon SQS para 0 segundos',
        correct: false,
      },
      {
        description: 'Configure o tempo limite de visibilidade do Amazon SQS para 60 segundos',
        correct: true,
      },
      {
        description: 'Configure o tempo limite de visibilidade do Amazon SQS para o padrão de 30 segundos',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Você é um desenvolvedor contratado para liderar o desenvolvimento de um novo aplicativo. O aplicativo precisa interagir com um armazenamento de dados de back-end. O aplicativo também precisa executar muitas operações complexas de junção. Qual das opções a seguir seria a opção ideal de armazenamento de dados? (Selecione dois)',
    answers: [
      {
        description: 'AWS DynamoDB',
        correct: false,
      },
      {
        description: 'AWS RDS',
        correct: true,
      },
      {
        description: 'AWS Redshift',
        correct: true,
      },
      {
        description: 'AWS S3',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Sua empresa está planejando armazenar documentos em um depósito S3. Os documentos são confidenciais e os funcionários devem usar a autenticação multifator ao tentar acessar os documentos. Qual dos seguintes deve ser feito para atender a esse requisito?',
    answers: [
      {
        description: 'Certifique-se de que a criptografia esteja habilitada para o bucket - criptografia do lado do servidor AWS',
        correct: false,
      },
      {
        description: 'Certifique-se de que a criptografia esteja habilitada para o bucket usando chaves KMS',
        correct: false,
      },
      {
        description: 'Certifique-se de que a política de bucket esteja em vigor com uma condição de "aws:MultiFactorAuthPresent":"false" com uma política Deny',
        correct: true,
      },
      {
        description: 'Certifique-se de que a política de bucket esteja em vigor com uma condição de "aws:MultiFactorAuthPresent": "true" com uma política Deny',
        correct: false,
      },
    ],
    tag: 'Segurança',
  },
  {
    description: 'Uma aplicação está sendo desenvolvida para fazer uso do DynamoDB. Conforme os requisitos, o aplicativo lerá os itens do DynamoDB de 6 KB de tamanho por segundo. O número de solicitações por segundo é estimado em cerca de 10. Se for necessária uma consistência forte, qual deve ser a capacidade de leitura definida para a tabela?',
    answers: [
      {
        description: '5',
        correct: false,
      },
      {
        description: '10',
        correct: false,
      },
      {
        description: '20',
        correct: true,
      },
      {
        description: '40',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Você acabou de configurar uma função do Lambda que fica atrás do serviço de gateway da API. Ao tentar invocar a função Lambda por meio do serviço de gateway de API do Javascript em sua página HTML, você recebe o seguinte erro.' +
      'Nenhum cabeçalho \'Access-Control-Allow-Origin\' está presente no recurso solicitado. Origem \'nulo\', portanto, não tem acesso permitido.' +
      'O que pode ser feito para resolver esse erro?',
    answers: [
      {
        description: 'Habilite o CORS para a função lambda',
        correct: false,
      },
      {
        description: 'Habilite o CORS para os métodos no gateway da API',
        correct: true,
      },
      {
        description: 'Altere a política IAM para a função Lambda para habilitar o acesso anônimo',
        correct: false,
      },
      {
        description: 'Alterar a política IAM para o gateway de API para permitir o acesso anônimo',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Você tem um aplicativo herdado que processa mensagens do SQS Queue. O aplicativo usa um único thread para pesquisar várias filas. Qual dos seguintes tempos limite de sondagem será a melhor opção para evitar a latência no processamento de mensagens?',
    answers: [
      {
        description: 'Use o Short Polling com valores de tempo limite de visibilidade padrão',
        correct: true,
      },
      {
        description: 'Use Long Polling com valores de tempo limite de visibilidade mais altos',
        correct: false,
      },
      {
        description: 'Use Long Polling com valores de tempo limite de visibilidade mais baixos',
        correct: false,
      },
      {
        description: 'Use o Short Polling com valores de tempo limite de visibilidade mais altos',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Você é o líder da equipe de um aplicativo. Você foi instruído a usar Jenkins como provedor de compilação no AWS CodePipeline. Qual das seguintes opções é a melhor prática?',
    answers: [
      {
        description: 'Instale o Jenkins em uma instância do EC2 e certifique-se de que a função da instância tenha a permissão "codepipeline:*"',
        correct: false,
      },
      {
        description: 'Adicionar chaves de acesso no EC2 para o servidor Jenkins acessar o CodePipeline',
        correct: false,
      },
      {
        description: 'Instale o Jenkins em uma instância do Amazon EC2. Certifique-se de que o perfil da instância concede Jenkins, apenas as permissões da AWS necessárias para executar tarefas para seu projeto',
        correct: true,
      },
      {
        description: 'Instalar o Jenkins em uma função do Lambda para que seja sem servidor e econômico',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Você criou uma nova tabela provisionada no DynamoDB. Você deseja ler 60 itens por segundo desta tabela, com cada item tendo um tamanho de 6 KB. Além disso, você deseja gravar 80 itens por segundo, com cada item com 1,5 KB de tamanho. Qual das seguintes unidades de capacidade de leitura provisionadas para unidades de capacidade de leitura e gravação fortemente consistentes será definida para evitar a limitação de solicitação? (Selecione dois)',
    answers: [
      {
        description: '240 UCU',
        correct: false,
      },
      {
        description: '120 RCU',
        correct: true,
      },
      {
        description: '80 WCU',
        correct: false,
      },
      {
        description: '60 RCU',
        correct: false,
      },
      {
        description: '160 WCU',
        correct: true,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Você foi instruído a usar os modelos do Cloudformation para implantar aplicativos em instâncias do EC2. Essas instâncias precisam ser pré-configuradas com o servidor web NGINX para hospedar o aplicativo. Como você poderia fazer isso com o Cloudformation?',
    answers: [
      {
        description: 'Use o script auxiliar cfn-init no Cloudformation',
        correct: true,
      },
      {
        description: 'Use o tipo de recurso de saída no Cloudformation',
        correct: false,
      },
      {
        description: 'Use o tipo de recurso Parâmetro no Cloudformation',
        correct: false,
      },
      {
        description: 'Use SAML para implantar o modelo',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Você desenvolveu uma função AWS Lambda, mas está enfrentando muitos problemas de desempenho. Você decide usar o serviço AWS X-Ray para diagnosticar os problemas. Qual das opções a seguir deve ser feita para garantir que você possa usar o serviço X-Ray com sua função Lambda?',
    answers: [
      {
        description: 'Certifique-se de que o processo daemon do X-Ray esteja instalado com a função Lambda',
        correct: false,
      },
      {
        description: 'Certifique-se de que a função Lambda esteja registrada no X-Ray',
        correct: false,
      },
      {
        description: 'Certifique-se de que a função IAM atribuída à função Lambda tenha acesso ao serviço X-Ray',
        correct: true,
      },
      {
        description: 'Certifique-se de que a função IAM atribuída à função X-Ray tenha acesso à função Lambda',
        correct: false,
      },
    ],
    tag: 'Segurança',
  },
  {
    description: 'Você está desenvolvendo um aplicativo que será hospedado no AWS Lambda. A função fará chamadas para um banco de dados. Um requisito é que todas as strings de conexão do banco de dados sejam mantidas seguras. Qual das opções a seguir é a maneira MAIS segura de implementar isso?',
    answers: [
      {
        description: 'Coloque os valores das strings de conexão em um modelo do CloudFormation',
        correct: false,
      },
      {
        description: 'Coloque a string de conexão do banco de dados no arquivo app.json e armazene-a em um repositório Git',
        correct: false,
      },
      {
        description: 'O Lambda precisa fazer referência ao armazenamento de parâmetros do AWS Systems Manager para a cadeia de conexão do banco de dados criptografada',
        correct: true,
      },
      {
        description: 'Coloque a string de conexão do banco de dados na própria função do AWS Lambda, pois todas as funções do Lambda são criptografadas em repouso',
        correct: false,
      },
    ],
    tag: 'Segurança',
  },
  {
    description: 'Você criou uma tabela do Amazon DynamoDB com Global Secondary Index. Qual das opções a seguir pode ser usada para obter os resultados mais recentes rapidamente com o menor impacto na RCU (Read Capacity Unit)?',
    answers: [
      {
        description: 'Consulta com ConsistentRead',
        correct: false,
      },
      {
        description: 'Escanear com ConsistentRead',
        correct: false,
      },
      {
        description: 'Consulta com EventualRead',
        correct: true,
      },
      {
        description: 'Escanear com EventualRead',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Para aumentar a segurança do navegador, você está planejando habilitar o CORS. Para habilitar o CORS em um recurso usando o gateway de API para o método GET, qual das seguintes ações precisa ser executada para todos os tipos de resposta, exceto a resposta 200 no caso de integração personalizada do Lambda?',
    answers: [
      {
        description: 'Os dispositivos de back-end serão responsáveis por retornar o cabeçalho Access-Control-Allow-Origin\' com \'*\' ou origens específicas para cumprir os handshakes pré-voo',
        correct: false,
      },
      {
        description: 'Um método OPTIONS é adicionado ao recurso que é configurado automaticamente para retornar os três cabeçalhos Access-Control-Allow-* para cumprir os handshakes pré-voo',
        correct: false,
      },
      {
        description: 'Verifique se todos os Methods foram adicionados em “AllowMethods” junto com GET',
        correct: false,
      },
      {
        description: 'Configure manualmente para retornar o cabeçalho Access-Control-Allow-Origin\' com \'*\' ou origens específicas para cumprir os handshakes pré-voo',
        correct: true,
      },
    ],
    tag: 'Segurança',
  },
  {
    description: 'Qual das opções a seguir é verdadeira com relação a solicitações de leitura fortemente consistentes de um aplicativo para um DynamoDB com um cluster DAX?',
    answers: [
      {
        description: 'Todas as solicitações são encaminhadas para o DynamoDB e os resultados são armazenados em cache',
        correct: false,
      },
      {
        description: 'Todas as solicitações são encaminhadas para o DynamoDB e os resultados são armazenados no Item Cache antes de passar para o aplicativo',
        correct: false,
      },
      {
        description: 'Todas as solicitações são encaminhadas para o DynamoDB e os resultados são armazenados no Query Cache antes de passar para o aplicativo',
        correct: false,
      },
      {
        description: 'Todas as solicitações são encaminhadas ao DynamoDB e os resultados não são armazenados em cache',
        correct: true,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Você está desenvolvendo um aplicativo que está trabalhando com uma tabela do DynamoDB. Você precisa criar uma consulta que tenha critérios de pesquisa. Qual das seguintes partes das \'expressões de condição\' deve ser fornecida para a consulta? (Selecione DOIS)',
    answers: [
      {
        description: 'Especifique uma expressão de condição-chave na consulta',
        correct: true,
      },
      {
        description: 'Especifique um nome e valor de chave de partição na condição de igualdade',
        correct: true,
      },
      {
        description: 'Especifique um nome e valor de chave de classificação na condição de igualdade',
        correct: false,
      },
      {
        description: 'Especifique uma expressão de filtro',
        correct: false,
      },
    ],
    tag: 'Desenvolvimento com os produtos da AWS',
  },
  {
    description: 'Você está desenvolvendo um aplicativo .Net Core que será hospedado em um ambiente Elastic beanstalk. O aplicativo fará chamadas de back-end para um banco de dados. Você precisa aumentar o desempenho do aplicativo durante a fase de teste. Como você pode diagnosticar quaisquer problemas de desempenho da maneira mais fácil possível?',
    answers: [
      {
        description: 'Coloque um balanceador de carga na frente do Elastic beanstalk',
        correct: false,
      },
      {
        description: 'Colocar chamadas de instrumentação em seu código',
        correct: false,
      },
      {
        description: 'Fazer uso de vestígios usando o serviço de Raios-X',
        correct: true,
      },
      {
        description: 'Use os logs do Cloudwatch para depurar problemas',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Você está planejando usar a ferramenta AWS CodeDeploy para a implantação de seu aplicativo. Qual das opções a seguir é usada para especificar como seu aplicativo será implantado nas instâncias subjacentes?',
    answers: [
      {
        description: 'appConfig.json',
        correct: false,
      },
      {
        description: 'Grupo de Implantação',
        correct: false,
      },
      {
        description: 'appConfig.YAML',
        correct: false,
      },
      {
        description: 'appspec.yml',
        correct: true,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Sua empresa está planejando usar o serviço AWS CodePipeline para seu processo de CI/CD. Eles têm seu próprio processo de criação de propriedade que precisa ser incorporado ao CodePipeline. Como você pode conseguir isso?',
    answers: [
      {
        description: 'Crie uma ação padrão para seu Pipeline',
        correct: false,
      },
      {
        description: 'Crie uma ação personalizada para o seu Pipeline',
        correct: true,
      },
      {
        description: 'Crie uma ação primária para seu Pipeline',
        correct: false,
      },
      {
        description: 'Crie uma ação secundária para o seu Pipeline',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Atualmente você desenvolveu um aplicativo que faz uso do serviço AWS RDS – MySQL. Durante a fase de teste, você pode ver que o banco de dados está tendo um impacto no desempenho. Após uma investigação mais aprofundada, você pode ver que as mesmas consultas de leitura estão causando o gargalo de desempenho no aplicativo. Qual das seguintes etapas de desenvolvimento deve ser executada para resolver esse problema?',
    answers: [
      {
        description: 'Use o recurso Multi-AZ para o banco de dados subjacente',
        correct: false,
      },
      {
        description: 'Alterar o tipo de instância subjacente para o banco de dados',
        correct: false,
      },
      {
        description: 'Use filas SQS para armazenar os resultados da consulta para acesso mais rápido',
        correct: false,
      },
      {
        description: 'Use o AWS ElastiCache para armazenar os resultados da consulta para um acesso mais rápido',
        correct: true,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Você escreveu um aplicativo que carrega objetos em um bucket do S3. O tamanho do objeto varia entre 200 – 500 MB. Você viu que o aplicativo às vezes demora mais do que o esperado para carregar o objeto. Você deseja melhorar o desempenho do aplicativo. Qual dos seguintes você consideraria?',
    answers: [
      {
        description: 'Crie vários tópicos e carregue os objetos nos vários tópicos',
        correct: false,
      },
      {
        description: 'Escreva os itens em lotes para melhor desempenho',
        correct: false,
      },
      {
        description: 'Use a API de multipart upload',
        correct: true,
      },
      {
        description: 'Habilitar versionamento no Bucket',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Você está trabalhando como líder de equipe para sua empresa. Você foi instruído a gerenciar a metodologia Blue Green Deployment para um dos aplicativos. Quais das opções a seguir são algumas das abordagens para implementar essa metodologia? Escolha 2 respostas entre as opções abaixo.',
    answers: [
      {
        description: 'Usando grupos de dimensionamento automático para dimensionar as demandas de ambas as implantações',
        correct: false,
      },
      {
        description: 'Usando o Route 53 com políticas de roteamento ponderado',
        correct: true,
      },
      {
        description: 'Usando o Route 53 com políticas de roteamento de latência',
        correct: false,
      },
      {
        description: 'Usando o Elastic Beanstalk com o recurso de troca de URL',
        correct: true,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Você acabou de criar uma função do AWS Lambda. Você está executando a função, mas a saída da função não é a esperada. Você precisa verificar e ver qual é o problema. Qual das opções a seguir pode ajudar o desenvolvedor a depurar o problema com a função Lambda?',
    answers: [
      {
        description: 'Verifique os logs do Cloudwatch',
        correct: true,
      },
      {
        description: 'Verifique os registros de fluxo de VPC',
        correct: false,
      },
      {
        description: 'Verifique o AWS Trust Advisor',
        correct: false,
      },
      {
        description: 'Verifique o Inspetor da AWS',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
  {
    description: 'Você é um desenvolvedor de uma empresa que está desenvolvendo um aplicativo baseado em .net. Este aplicativo será hospedado na AWS. É necessário criptografar os dados. Atualmente, a empresa não possui um armazenamento de chaves para gerenciar a criptografia. Qual das opções a seguir o desenvolvedor poderia usar neste caso para criptografar dados?',
    answers: [
      {
        description: 'Use a criptografia do S3 Server para trabalhar com chaves de criptografia',
        correct: false,
      },
      {
        description: 'Use o serviço AWS KMS para gerar chaves de dados',
        correct: true,
      },
      {
        description: 'Use o serviço AWS Config para gerar chaves de dados',
        correct: false,
      },
      {
        description: 'Use a criptografia do lado do cliente S3 para trabalhar com chaves de criptografia',
        correct: false,
      },
    ],
    tag: 'Segurança',
  },
  {
    description: 'Você implantou um aplicativo usando o AWS Lambda e o serviço de gateway de API. Você precisa implantar uma versão mais recente do aplicativo. A administração instruiu que a versão mais recente deve ser testada antes de ser totalmente implantada, enquanto a versão base ainda está em continuidade. Como você pode fazer isso da maneira mais fácil possível?',
    answers: [
      {
        description: 'Crie uma nova função do Lambda e um novo gateway de API. Forneça aos usuários o novo URL',
        correct: false,
      },
      {
        description: 'Crie uma nova versão da função Lambda existente e um novo gateway de API. Forneça aos usuários o novo URL',
        correct: false,
      },
      {
        description: 'Crie uma versão canário no serviço de gateway de API',
        correct: true,
      },
      {
        description: 'Criar outro recurso e método. Implante a API. Forneça aos usuários o novo URL',
        correct: false,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'No momento, você está gerenciando implantações para um aplicativo Lambda por meio do Code Deploy. Você tem uma nova versão da função Lambda instalada. Você foi informado de que todo o tráfego precisa ser transferido instantaneamente para a nova função. Qual técnica de implantação você empregaria no CodeDeploy?',
    answers: [
      {
        description: 'Canário',
        correct: false,
      },
      {
        description: 'Gradual',
        correct: false,
      },
      {
        description: 'Linear',
        correct: false,
      },
      {
        description: 'De uma só vez',
        correct: true,
      },
    ],
    tag: 'Implantação',
  },
  {
    description: 'Você é o líder da equipe de um aplicativo que já está em produção e usa buckets do S3. Usuários de outro país agora começaram a usar ativamente os objetos no bucket do S3. Qual das opções a seguir pode ser feita para reduzir a latência de acesso aos objetos para os novos usuários?',
    answers: [
      {
        description: 'Habilite a replicação entre regiões para o bucket',
        correct: true,
      },
      {
        description: 'Habilitar criptografia para o bucket',
        correct: false,
      },
      {
        description: 'Hospedar um site estático',
        correct: false,
      },
      {
        description: 'Alterar a classe de armazenamento',
        correct: false,
      },
    ],
    tag: 'Monitoramento e resolução de problemas',
  },
];