# curso_docker_kubernetes


<h3> Copiando arquivos de container</h3>
<p> Com o comando <code>docker cp</code> , copiamos um arquivo de uma pasta para outra. </p>

<code>$ docker cp name_container:/name_diretory/application.language ./name_new_diretory/</code> 

<hr />

<h3> Verificando informações de processamento</h3>
<p> Com o comando <code>docker top</code> , temos a informação sobre: UID, PID, PPID, C, STIME, TTY, TIME e o CMD. </p>
<code>$ docker top name_container</code> 
