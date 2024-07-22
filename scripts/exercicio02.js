        const nome = prompt ("Qual é o seu nome?");
        const sexo = prompt ("Qual é o seu sexo (M/F)?")
        const estadoCivil  = prompt ("Qual é o seu estado civil?")
      if (sexo.toUpperCase() === 'F' && estadoCivil.toUpperCase() === 'CASADA') {
       const tempoCasada = prompt('Há quantos anos você está casada?');
       alert(`Nome: ${nome}`);
       alert(`Sexo: ${sexo}`);
       alert(`Estado Civil: ${estadoCivil}`);
       alert(`Tempo de Casamento: ${tempoCasada} anos`);
      } else {
        alert(`Nome: ${nome}`);
        alert(`Sexo: ${sexo}`);
        alert(`Estado Civil: ${estadoCivil}`);
       
      }
   
