Medias Universidade de Aveiro
---

Este pequeno site pretende ajudar quem quer ver a sua média atual sem ter de se preocupar. Também apresenta gráficos sobre a sua evolução nas várias cadeiras que vai tendo ao longo do curso e a evolução por semestre.

Com as credênciais do aluno, faz login no PACO e obtem as notas e todos os dados necessários da cadeira (ECTS etc) na página Plano Curricular [https://paco.ua.pt/secvirtual/c_planocurr.asp](https://paco.ua.pt/secvirtual/c_planocurr.asp) depois faz o parse da página e obtem as médias e responde ao pedido que é enviado por JSON pela página.

Tecnologias usadas: Python, CherryPy para o servidor, jQuery e HTML.

**Segurança:**

Para quem está preocupado com a segurança da sua password:
* O website usa HTTPS entre o cliente e a CloudFlare, depois entre a CloudFlare e o OpenShift existe HTTPS com um StartSSL :p
* Não é guardada nenhuma informação do utilizador, não existe nenhuma base de dados
* O servidor está alojado no OpenShift numa conta gratuita
* Para quem não pretende obter a sua média online pode testar a versão só de python: [https://github.com/gipmon/mediasua-python](https://github.com/gipmon/mediasua-python)

Aceita-se contribuições!
