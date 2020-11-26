# Recuperação de senha

**RF(requisitos funcionais)**

- O usuário deve poder recuperar sua senha informando seu email;
- O usuário deve receber um email com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF(requisitos não funcionais)**

- Utilizar mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar o amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background-job);

**RN(regras de negócio)**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF(requisitos funcionais)**

- O usuário deve poder atualizar seu nome, email e senha;

**RNF(requisitos não funcionais)**

**RN(regras de negócio)**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a senha nova;

# Painel do prestador

**RF(requisitos funcionais)**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF(requisitos não funcionais)**

- Os agendamentos do prestador no dia devem ser armazenados em cache; 
- As notificações do prestador devem ser armazenadas no mongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN(regras de negócio)**

- A notificação deve ter um status de lida e não lida para que o prestador possa controlar;


# Agendamento de serviços

**RF(requisitos funcionais)**

- O usuário deve poder listar todos os prestadores de serviços listados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuario deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF(requisitos não funcionais)**

- A listagem de prestadores deve ser armazenada em cache;

**RN(regras de negócio)**

- Cada agendamento deve durar 1h;
- Os agendamentos devem estar disponiveis entre 8h às 18h (Primeiro horário às 8h e o último ás 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;