## NLW#04 - Projeto MOVEIT :rocket:

Projeto criado durante a Next Level Week #04 - Trilha ReactJS - da Rocketseat. <br>
Aplicação é baseada na técnica Pomodoro, que consiste em um cronômetro que é utilizado para dividir seu dia de trabalho em pedaços de 25 minutos separados por intervalos de cinco minutos. Assim, a cada quatro pedaços de 25 minutos, é feita uma pausa maior de 20 a 30 minutos.<br>
O método tem como base a ideia de que pausas frequentes podem intensificar a agilidade mental. Dessa forma, o temporizador impõe certo senso de urgência.Então, em vez de sentir que você tem um tempo infinito no dia de trabalho para fazer as coisas e desperdiçá-lo com pequenas distrações, você saberá que só tem 25 minutos para fazer o máximo de progresso possível em uma tarefa.<br>

Projeto proposto no Figma:<br>
https://www.figma.com/file/vRbW1u0CEZuG2zE6bU5qLg/Move.it-2.0/duplicate?node-id=160%3A2761

# Getting Started :checkered_flag:

:pushpin: Instalar o Node.js, que vem acompanhado do NPM. <br>

Para o Windows utilizaremos o gerenciador de pacotes Chocolatey.<br><br>
Abra o Powershell<br>
Execute o comando:<br>
Get-ExecutionPolicy<br>
Caso ele retorne `Restricted`, execute o comando:<br>
Set-ExecutionPolicy RemoteSigned<br>
E escolha a opção `[A] Sim para Todos`<br>
Caso o comando acima apresente erro, tente usar:<br>
`Set-ExecutionPolicy Bypass -Scope Process`<br>
Verifique se alteração de permissão ocorreu com sucesso executando novamente o comando:<br>
Get-ExecutionPolicy<br><br>
Alterada a permissão, basta instalar o **Chocolatey** com o comando:<br>
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))<br><br>

Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:<br>
choco -v<br>
Caso ele retorne a versão do Chocolatey, a instalação foi um sucesso. Para finalizar, basta instalar a versão LTS mais recente do Node com o seguinte comando:<br>
cinst nodejs-lts<br>
E escolha a opção [A]ll - yes to all<br>

Após o fim da instalação, feche e abra o powershell como administrador novamente e execute:<br>
node -v<br>
npm -v<br>
Caso retorne as versões do Node e npm, sua instalação foi um sucesso.<br><br>

:pushpin: Instalar o yarn. <br>

Para instalar o Yarn no Windows siga os seguintes passos, execute o comando no Powershell (como admin):<br>
cinst yarn<br>
E escolha a opção `[A]ll - yes to all`. <br>
Feche e abra o terminal novamente, em seguida rode o comando:<br>
yarn --version<br>
Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.<br>

:pushpin: Criar projeto React<br>
yarn create react-app moveit --template=typescript<br>

:pushpin: Clonar repositorio<br>
git clone https://github.com/OtherVision/nlw04.git<br>
