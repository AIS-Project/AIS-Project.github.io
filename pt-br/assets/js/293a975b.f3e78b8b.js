"use strict";(self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[]).push([[387],{3905:(A,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var t=a(7294);function s(A,e,a){return e in A?Object.defineProperty(A,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):A[e]=a,A}function n(A,e){var a=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),a.push.apply(a,t)}return a}function r(A){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){s(A,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(a,e))}))}return A}function o(A,e){if(null==A)return{};var a,t,s=function(A,e){if(null==A)return{};var a,t,s={},n=Object.keys(A);for(t=0;t<n.length;t++)a=n[t],e.indexOf(a)>=0||(s[a]=A[a]);return s}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(t=0;t<n.length;t++)a=n[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(A,a)&&(s[a]=A[a])}return s}var i=t.createContext({}),d=function(A){var e=t.useContext(i),a=e;return A&&(a="function"==typeof A?A(e):r(r({},e),A)),a},p=function(A){var e=d(A.components);return t.createElement(i.Provider,{value:e},A.children)},l="mdxType",m={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(A,e){var a=A.components,s=A.mdxType,n=A.originalType,i=A.parentName,p=o(A,["components","mdxType","originalType","parentName"]),l=d(a),g=s,c=l["".concat(i,".").concat(g)]||l[g]||m[g]||n;return a?t.createElement(c,r(r({ref:e},p),{},{components:a})):t.createElement(c,r({ref:e},p))}));function c(A,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof A||s){var n=a.length,r=new Array(n);r[0]=g;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=A,o[l]="string"==typeof A?A:s,r[1]=o;for(var d=2;d<n;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9459:(A,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var t=a(7462),s=(a(7294),a(3905));const n={sidebar_position:1,title:"Usando o BNSA",sidebar_label:"Usando o BNSA",lastUpdatedAt:"2023/06/01",author:"Jo\xe3o Paulo",showLastUpdateAuthor:!0,showLastUpdateTime:!0,last_update:{date:"2023/06/01",author:"Jo\xe3o Paulo"}},r="Usando o BNSA",o={unversionedId:"Getting Started/basic use/BNSA",id:"Getting Started/basic use/BNSA",title:"Usando o BNSA",description:"Acesse o notebook Jupyter com o c\xf3digo dispon\xedvel aqui!",source:"@site/i18n/pt-br/docusaurus-plugin-content-docs/current/Getting Started/basic use/BNSA.md",sourceDirName:"Getting Started/basic use",slug:"/Getting Started/basic use/BNSA",permalink:"/pt-br/docs/Getting Started/basic use/BNSA",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Usando o BNSA",sidebar_label:"Usando o BNSA",lastUpdatedAt:"2023/06/01",author:"Jo\xe3o Paulo",showLastUpdateAuthor:!0,showLastUpdateTime:!0,last_update:{date:"2023/06/01",author:"Jo\xe3o Paulo"}},sidebar:"tutorialSidebar",previous:{title:"Instala\xe7\xe3o",permalink:"/pt-br/docs/Getting Started/instalation"},next:{title:"Usando o RNSA",permalink:"/pt-br/docs/Getting Started/basic use/RNSA"}},i={},d=[{value:"Importando o Algoritmo de sele\xe7\xe3o negativa bin\xe1ria.",id:"importando-o-algoritmo-de-sele\xe7\xe3o-negativa-bin\xe1ria",level:2},{value:"Gerando amostras bin\xe1rias aleatoriamente e separando os dados.",id:"gerando-amostras-bin\xe1rias-aleatoriamente-e-separando-os-dados",level:2},{value:"Fun\xe7\xe3o para gerar amostras bin\xe1rias",id:"fun\xe7\xe3o-para-gerar-amostras-bin\xe1rias",level:3},{value:"Gera\xe7\xe3o e separa\xe7\xe3o de dados",id:"gera\xe7\xe3o-e-separa\xe7\xe3o-de-dados",level:3},{value:"Testando o modelo:",id:"testando-o-modelo",level:2},{value:"Matriz de confus\xe3o",id:"matriz-de-confus\xe3o",level:2}],p={toc:d},l="wrapper";function m(A){let{components:e,...n}=A;return(0,s.kt)(l,(0,t.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"usando-o-bnsa"},"Usando o BNSA"),(0,s.kt)("p",null,"Acesse o notebook Jupyter com o c\xf3digo dispon\xedvel ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/AIS-Package/aisp/blob/main/examples/BNSA/example_with_randomly_generated_dataset-pt.ipynb"},"aqui"),"!"),(0,s.kt)("h2",{id:"importando-o-algoritmo-de-sele\xe7\xe3o-negativa-bin\xe1ria"},"Importando o Algoritmo de sele\xe7\xe3o negativa bin\xe1ria."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from aisp.NSA import BNSA\n")),(0,s.kt)("h2",{id:"gerando-amostras-bin\xe1rias-aleatoriamente-e-separando-os-dados"},"Gerando amostras bin\xe1rias aleatoriamente e separando os dados."),(0,s.kt)("h3",{id:"fun\xe7\xe3o-para-gerar-amostras-bin\xe1rias"},"Fun\xe7\xe3o para gerar amostras bin\xe1rias"),(0,s.kt)("p",null,"Nesta fun\xe7\xe3o, s\xe3o geradas amostras de dados bin\xe1rios com um grau de similaridade acima de um limiar definido s. No entanto, 10% dos primeiros dados s\xe3o gerados aleatoriamente, sem levar em considera\xe7\xe3o o valor de s. Al\xe9m disso, quando j\xe1 existem amostras, s\xe3o geradas amostras \xfanicas para a nova classe, garantindo que as amostras aleat\xf3rias geradas n\xe3o estejam duplicadas em classes diferentes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nfrom scipy.spatial.distance import cdist\n# Essa fun\xe7\xe3o gera amostras com similaridades acima de um limiar de semelhan\xe7a.\ndef generate_samples(n_samples: int, n_features: int, s: float, x: None):\n  classe_samples = []\n  while len(classe_samples) < n_samples:\n    similarity = 0\n    sample_rand = np.random.randint(0, 2, size=(n_features))\n    if(len(classe_samples) > max(int(n_samples * 0.1), 1)):\n      similarity = cdist(classe_samples, np.expand_dims(sample_rand, axis=0), metric='hamming')[0, :]\n      if x is not None:\n        if similarity[0] > s and not np.any(np.all(sample_rand == x, axis=1)):\n          classe_samples.append(sample_rand)\n      elif similarity[0] > s:\n        classe_samples.append(sample_rand)\n    else:\n      classe_samples.append(sample_rand)\n  return np.array(classe_samples)\n")),(0,s.kt)("h3",{id:"gera\xe7\xe3o-e-separa\xe7\xe3o-de-dados"},"Gera\xe7\xe3o e separa\xe7\xe3o de dados"),(0,s.kt)("p",null,"Nessa etapa, s\xe3o gerados 1000 dados, sendo 500 para representar a classe 'x' e 500 para representar a classe 'y'. Cada dado \xe9 formado por 20 dimens\xf5es. \xc9 importante destacar que esses dados s\xe3o criados de forma que apresentem um grau de similaridade de 70%, ou seja, compartilham caracter\xedsticas comuns. Ap\xf3s a gera\xe7\xe3o, os dados s\xe3o separados em conjuntos de treinamento e teste."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'\n# Configurando a seed para 121 para garantir a reprodutibilidade dos dados gerados.\nnp.random.seed(121)\n# Gerando amostras para a classe "x".\nx = generate_samples(500, 20, 0.7, None)\n# Gerando amostras exclusivas para a classe "y", diferentes das amostras presentes na classe "x".\ny = generate_samples(500, 20, 0.7, x)\n# Adicionando colunas contendo as sa\xeddas (r\xf3tulos) das classes "x" e "y".\nx = np.hstack((x, np.full((x.shape[0], 1), \'x\')))\ny = np.hstack((y, np.full((y.shape[0], 1), \'y\')))\n# Juntando os dois vetores (classes "x" e "y") e randomizando a ordem das amostras.\nindex = np.random.permutation(x.shape[0]*2)\ndataset = np.vstack((x, y))[index]\n\n# Separando as caracter\xedsticas (inputs) e as classes de sa\xedda (r\xf3tulos).\nsamples = dataset[:, :-1].astype(int)\noutput = dataset[:, -1]\n# Separating data for training and testing.\ntrain_x, test_x, train_y, test_y = train_test_split(samples, output, test_size=0.2, random_state=1234321)\n\n')),(0,s.kt)("h2",{id:"testando-o-modelo"},"Testando o modelo:"),(0,s.kt)("p",null,"Iniciando o modelo e aplicando-o \xe0s amostras geradas aleatoriamente, a configura\xe7\xe3o atual possui 250 detectores com uma taxa de diferencia\xe7\xe3o de 30%."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# Iniciando p modelo.\nnsa = BNSA(N=250, aff_thresh=0.3, seed=12321, max_discards=10000)\n# Efetuando o treinamento: \nnsa.fit(X=train_x, y=train_y)\n# Efetuando a previs\xe3o:: \nprev = nsa.predict(X=test_x)\n# Mostrando a acur\xe1cia das previs\xf5es para os dados reais.\nprint(f"A acuracia \xe9 {accuracy_score(prev, test_y)}")\nprint(classification_report(test_y, prev))\n')),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u2714 Non-self detectors for classes (x, y) successfully generated:  \u2507\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2507 500/500 detectors\nA acuracia \xe9 0.95\n              precision    recall  f1-score   support\n\n           x       0.93      0.97      0.95        94\n           y       0.97      0.93      0.95       106\n\n    accuracy                           0.95       200\n   macro avg       0.95      0.95      0.95       200\nweighted avg       0.95      0.95      0.95       200\n")),(0,s.kt)("h2",{id:"matriz-de-confus\xe3o"},"Matriz de confus\xe3o"),(0,s.kt)("p",null,"Aqui est\xe1 a matriz de confus\xe3o, onde a diagonal principal representa as amostras previstas corretamente e a diagonal secund\xe1ria mostra os falsos positivos. Dos 200 dados de teste, houve 7 falsos positivos para a classe x e 3 falsos positivos para a classe y."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(1214).Z,width:"432",height:"432"})))}m.isMDXComponent=!0},1214:(A,e,a)=>{a.d(e,{Z:()=>t});const t="data:image/png;base64,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"}}]);